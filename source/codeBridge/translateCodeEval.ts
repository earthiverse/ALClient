import * as acorn from "acorn"
import type {
    AssignmentExpression,
    BinaryExpression,
    BlockStatement,
    CallExpression,
    Expression,
    ForStatement,
    Identifier,
    IfStatement,
    LogicalExpression,
    MemberExpression,
    Node,
    ObjectExpression,
    Program,
    Statement,
    UnaryExpression,
    UpdateExpression,
    VariableDeclaration,
} from "acorn"
import { CODE_API_MAP, EMIT_HANDLERS } from "./codeApiMap.js"
import type { CodeBridgeHost, TranslateResult } from "./types.js"

const LOG_PREFIX = "[codeBridge]"

class TranslateAbort extends Error {
    constructor(message: string) {
        super(message)
        this.name = "TranslateAbort"
    }
}

class LoopBreak extends Error {
    constructor() {
        super("break")
        this.name = "LoopBreak"
    }
}

class LoopContinue extends Error {
    constructor() {
        super("continue")
        this.name = "LoopContinue"
    }
}

type WalkContext = {
    host: CodeBridgeHost
    scope: Map<string, unknown>
    warnings: string[]
    aborted: boolean
    /** Depth of for-loops currently executing (enables break/continue). */
    loopDepth: number
}

/**
 * Parse a `code_eval` / `o:command` JS string and dispatch allowlisted CODE calls
 * to the ALClient host. Does not execute arbitrary JavaScript.
 */
export async function translateCodeEval(code: string, host: CodeBridgeHost): Promise<TranslateResult> {
    const warnings: string[] = []
    const trimmed = String(code ?? "").trim()
    if (!trimmed) {
        return { ok: true, warnings: [`${LOG_PREFIX} empty snippet`] }
    }

    const body = unwrapAsyncIife(trimmed)

    let program: Program
    try {
        program = acorn.parse(body, {
            ecmaVersion: "latest",
            sourceType: "script",
            allowAwaitOutsideFunction: true,
            allowReturnOutsideFunction: true,
        }) as Program
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e)
        console.warn(`${LOG_PREFIX} parse failed: ${msg}`)
        return { ok: false, warnings: [`${LOG_PREFIX} parse failed: ${msg}`] }
    }

    const ctx: WalkContext = { host, scope: new Map(), warnings, aborted: false, loopDepth: 0 }

    try {
        await walkStatements(program.body as Statement[], ctx)
    } catch (e) {
        if (e instanceof TranslateAbort) {
            warnings.push(e.message)
            console.warn(e.message)
            return { ok: false, warnings }
        }
        const msg = e instanceof Error ? e.message : String(e)
        warnings.push(`${LOG_PREFIX} runtime error: ${msg}`)
        console.warn(`${LOG_PREFIX} runtime error: ${msg}`)
        return { ok: false, warnings }
    }

    return { ok: !ctx.aborted, warnings }
}

/** Strip `(async function(){ ... })();` or `(async () => { ... })()` wrappers. */
export function unwrapAsyncIife(code: string): string {
    const trimmed = code.trim()
    const classic = /^\(async\s+function\s*\(\s*\)\s*\{([\s\S]*)\}\)\s*\(\s*\)\s*;?\s*$/.exec(trimmed)
    if (classic) return classic[1]
    const arrow = /^\(\s*async\s*\(\s*\)\s*=>\s*\{([\s\S]*)\}\s*\)\s*\(\s*\)\s*;?\s*$/.exec(trimmed)
    if (arrow) return arrow[1]
    return trimmed
}

async function walkStatements(statements: Statement[], ctx: WalkContext): Promise<"ok" | "return"> {
    for (const stmt of statements) {
        const result = await walkStatement(stmt, ctx)
        if (result === "return" || ctx.aborted) return "return"
    }
    return "ok"
}

async function walkStatement(stmt: Statement, ctx: WalkContext): Promise<"ok" | "return"> {
    switch (stmt.type) {
        case "BlockStatement":
            return walkStatements((stmt as BlockStatement).body, ctx)
        case "ExpressionStatement":
            await evalExpression(stmt.expression, ctx)
            return "ok"
        case "VariableDeclaration":
            for (const decl of (stmt as VariableDeclaration).declarations) {
                if (decl.id.type !== "Identifier") {
                    throw new TranslateAbort(`${LOG_PREFIX} unsupported destructuring in variable declaration`)
                }
                const value = decl.init ? await evalExpression(decl.init, ctx) : undefined
                ctx.scope.set(decl.id.name, value)
            }
            return "ok"
        case "IfStatement": {
            const ifStmt = stmt as IfStatement
            const cond = await evalExpression(ifStmt.test, ctx)
            if (cond) {
                return walkStatement(ifStmt.consequent, ctx)
            } else if (ifStmt.alternate) {
                return walkStatement(ifStmt.alternate, ctx)
            }
            return "ok"
        }
        case "ForStatement": {
            const forStmt = stmt as ForStatement
            if (forStmt.init) {
                if (forStmt.init.type === "VariableDeclaration") {
                    await walkStatement(forStmt.init, ctx)
                } else {
                    await evalExpression(forStmt.init as Expression, ctx)
                }
            }
            ctx.loopDepth++
            try {
                let guard = 0
                while (forStmt.test ? Boolean(await evalExpression(forStmt.test, ctx)) : true) {
                    if (++guard > 10_000) {
                        throw new TranslateAbort(`${LOG_PREFIX} for-loop exceeded 10000 iterations`)
                    }
                    try {
                        const bodyResult = await walkStatement(forStmt.body, ctx)
                        if (bodyResult === "return") return "return"
                    } catch (e) {
                        if (e instanceof LoopBreak) break
                        if (e instanceof LoopContinue) {
                            if (forStmt.update) await evalExpression(forStmt.update, ctx)
                            continue
                        }
                        throw e
                    }
                    if (forStmt.update) await evalExpression(forStmt.update, ctx)
                }
            } finally {
                ctx.loopDepth--
            }
            return "ok"
        }
        case "ReturnStatement":
            return "return"
        case "BreakStatement":
            if (ctx.loopDepth <= 0) {
                throw new TranslateAbort(`${LOG_PREFIX} break outside of loop`)
            }
            throw new LoopBreak()
        case "ContinueStatement":
            if (ctx.loopDepth <= 0) {
                throw new TranslateAbort(`${LOG_PREFIX} continue outside of loop`)
            }
            throw new LoopContinue()
        case "TryStatement":
            try {
                return await walkStatement(stmt.block, ctx)
            } catch (e) {
                if (e instanceof TranslateAbort || e instanceof LoopBreak || e instanceof LoopContinue) throw e
                // Swallow like ECU try/catch game_log paths
                return "ok"
            }
        case "EmptyStatement":
            return "ok"
        default:
            throw new TranslateAbort(`${LOG_PREFIX} unsupported statement: ${stmt.type}`)
    }
}

async function evalExpression(expr: Expression | Node, ctx: WalkContext): Promise<unknown> {
    switch (expr.type) {
        case "Literal":
            return (expr as acorn.Literal).value
        case "Identifier": {
            const name = (expr as Identifier).name
            if (ctx.scope.has(name)) return ctx.scope.get(name)
            if (name === "character") return hostAsCharacter(ctx.host)
            if (name === "G") return ctx.host.G
            if (name === "parent") return { socket: makeSocketProxy(ctx.host) }
            if (name === "socket") return makeSocketProxy(ctx.host)
            if (name === "undefined") return undefined
            if (name === "NaN") return Number.NaN
            if (name === "Infinity") return Number.POSITIVE_INFINITY
            if (name in CODE_API_MAP) return CODE_API_MAP[name]
            throw new TranslateAbort(`${LOG_PREFIX} unknown identifier: ${name}`)
        }
        case "UnaryExpression": {
            const u = expr as UnaryExpression
            if (u.operator === "typeof") {
                // typeof must not throw on unknown identifiers (ECU guards)
                if (u.argument.type === "Identifier") {
                    const name = u.argument.name
                    if (
                        ctx.scope.has(name) ||
                        name === "character" ||
                        name === "G" ||
                        name === "parent" ||
                        name === "socket" ||
                        name === "get_socket" ||
                        name in CODE_API_MAP
                    ) {
                        return typeof (await evalExpression(u.argument, ctx))
                    }
                    return "undefined"
                }
                return typeof (await evalExpression(u.argument, ctx))
            }
            const arg = await evalExpression(u.argument, ctx)
            switch (u.operator) {
                case "!":
                    return !arg
                case "-":
                    return -Number(arg)
                case "+":
                    return +Number(arg)
                case "void":
                    return undefined
                default:
                    throw new TranslateAbort(`${LOG_PREFIX} unsupported unary: ${u.operator}`)
            }
        }
        case "BinaryExpression": {
            const b = expr as BinaryExpression
            const left = await evalExpression(b.left, ctx)
            const right = await evalExpression(b.right, ctx)
            return evalBinary(b.operator, left, right)
        }
        case "LogicalExpression": {
            const l = expr as LogicalExpression
            const left = await evalExpression(l.left, ctx)
            if (l.operator === "&&") return left ? await evalExpression(l.right, ctx) : left
            if (l.operator === "||") return left ? left : await evalExpression(l.right, ctx)
            if (l.operator === "??") return left ?? (await evalExpression(l.right, ctx))
            throw new TranslateAbort(`${LOG_PREFIX} unsupported logical: ${l.operator}`)
        }
        case "AssignmentExpression": {
            const a = expr as AssignmentExpression
            if (a.left.type !== "Identifier") {
                throw new TranslateAbort(`${LOG_PREFIX} unsupported assignment target`)
            }
            const name = a.left.name
            const right = await evalExpression(a.right, ctx)
            if (a.operator === "=") {
                ctx.scope.set(name, right)
                return right
            }
            const prev = ctx.scope.get(name)
            const next = evalBinary(a.operator.slice(0, -1), prev, right)
            ctx.scope.set(name, next)
            return next
        }
        case "UpdateExpression": {
            const u = expr as UpdateExpression
            if (u.argument.type !== "Identifier") {
                throw new TranslateAbort(`${LOG_PREFIX} unsupported update target`)
            }
            const name = u.argument.name
            const prev = Number(ctx.scope.get(name) ?? 0)
            const next = u.operator === "++" ? prev + 1 : prev - 1
            ctx.scope.set(name, next)
            return u.prefix ? next : prev
        }
        case "MemberExpression":
            return evalMember(expr as MemberExpression, ctx)
        case "ObjectExpression":
            return evalObject(expr as ObjectExpression, ctx)
        case "ArrayExpression": {
            const arr = expr as acorn.ArrayExpression
            const out: unknown[] = []
            for (const el of arr.elements) {
                if (!el) {
                    out.push(undefined)
                    continue
                }
                if (el.type === "SpreadElement") {
                    throw new TranslateAbort(`${LOG_PREFIX} spread elements are not supported`)
                }
                out.push(await evalExpression(el, ctx))
            }
            return out
        }
        case "AwaitExpression":
            return await evalExpression((expr as acorn.AwaitExpression).argument, ctx)
        case "CallExpression":
            return await evalCall(expr as CallExpression, ctx)
        case "ConditionalExpression": {
            const c = expr as acorn.ConditionalExpression
            const cond = await evalExpression(c.test, ctx)
            return cond ? await evalExpression(c.consequent, ctx) : await evalExpression(c.alternate, ctx)
        }
        case "SequenceExpression": {
            let last: unknown
            for (const e of (expr as acorn.SequenceExpression).expressions) last = await evalExpression(e, ctx)
            return last
        }
        case "TemplateLiteral": {
            const t = expr as acorn.TemplateLiteral
            let s = ""
            for (let i = 0; i < t.quasis.length; i++) {
                s += t.quasis[i].value.cooked ?? ""
                if (i < t.expressions.length) s += String(await evalExpression(t.expressions[i], ctx))
            }
            return s
        }
        default:
            throw new TranslateAbort(`${LOG_PREFIX} unsupported expression: ${expr.type}`)
    }
}

function hostAsCharacter(host: CodeBridgeHost): Record<string, unknown> {
    return host as unknown as Record<string, unknown>
}

function makeSocketProxy(host: CodeBridgeHost) {
    return {
        emit: (event: string, data?: unknown) => {
            void dispatchEmit(host, event, data)
        },
    }
}

async function evalMember(expr: MemberExpression, ctx: WalkContext): Promise<unknown> {
    const obj = await evalExpression(expr.object, ctx)
    if (obj == null) return undefined
    let key: string | number
    if (expr.computed) {
        key = (await evalExpression(expr.property as Expression, ctx)) as string | number
    } else if (expr.property.type === "Identifier") {
        key = expr.property.name
    } else {
        throw new TranslateAbort(`${LOG_PREFIX} unsupported member property`)
    }
    if (typeof obj === "object") {
        return (obj as Record<string | number, unknown>)[key]
    }
    return undefined
}

async function evalObject(expr: ObjectExpression, ctx: WalkContext): Promise<Record<string, unknown>> {
    const out: Record<string, unknown> = {}
    for (const prop of expr.properties) {
        if (prop.type !== "Property") {
            throw new TranslateAbort(`${LOG_PREFIX} unsupported object property`)
        }
        let key: string
        if (prop.key.type === "Identifier" && !prop.computed) key = prop.key.name
        else if (prop.key.type === "Literal") key = String(prop.key.value)
        else key = String(await evalExpression(prop.key as Expression, ctx))
        out[key] = await evalExpression(prop.value as Expression, ctx)
    }
    return out
}

async function dispatchEmit(host: CodeBridgeHost, event: string, data: unknown): Promise<unknown> {
    const payload = (data && typeof data === "object" ? data : {}) as Record<string, unknown>
    const handler = EMIT_HANDLERS[event]
    if (handler) return handler(host, payload)
    const rawAllow = new Set(["trade", "equip", "merchant", "bank", "send", "say"])
    if (rawAllow.has(event)) {
        host.socket.emit(event, data)
        return
    }
    const msg = `${LOG_PREFIX} blocked socket.emit(${JSON.stringify(event)}) — not on allowlist`
    console.warn(msg)
    throw new TranslateAbort(msg)
}

async function evalCall(expr: CallExpression, ctx: WalkContext): Promise<unknown> {
    if (expr.callee.type === "Identifier" && expr.callee.name === "get_socket") {
        return makeSocketProxy(ctx.host)
    }

    if (expr.callee.type === "MemberExpression") {
        const member = expr.callee
        const methodName = !member.computed && member.property.type === "Identifier" ? member.property.name : undefined

        if (methodName === "emit") {
            const args = await evalArgs(expr.arguments, ctx)
            return dispatchEmit(ctx.host, String(args[0] ?? ""), args[1])
        }

        if (methodName === "once" || methodName === "on" || methodName === "off") {
            const msg = `${LOG_PREFIX} character.${methodName} is not supported — skipping listener`
            console.warn(msg)
            ctx.warnings.push(msg)
            return undefined
        }

        const obj = await evalExpression(member.object, ctx)
        const args = await evalArgs(expr.arguments, ctx)
        if (methodName && obj != null && typeof (obj as Record<string, unknown>)[methodName] === "function") {
            const fn = (obj as Record<string, unknown>)[methodName] as (...a: unknown[]) => unknown
            if (typeof obj === "string" || Array.isArray(obj) || typeof obj === "number") {
                return fn.apply(obj, args)
            }
        }

        throw new TranslateAbort(`${LOG_PREFIX} unsupported method call: ${methodName ?? "?"}`)
    }

    if (expr.callee.type === "Identifier") {
        const name = expr.callee.name
        const handler = CODE_API_MAP[name]
        if (!handler) {
            throw new TranslateAbort(`${LOG_PREFIX} unknown CODE function: ${name} — aborting snippet`)
        }
        const args = await evalArgs(expr.arguments, ctx)
        return handler(ctx.host, args)
    }

    throw new TranslateAbort(`${LOG_PREFIX} unsupported call expression`)
}

async function evalArgs(args: CallExpression["arguments"], ctx: WalkContext): Promise<unknown[]> {
    const out: unknown[] = []
    for (const arg of args) {
        if (arg.type === "SpreadElement") {
            throw new TranslateAbort(`${LOG_PREFIX} spread arguments are not supported`)
        }
        out.push(await evalExpression(arg, ctx))
    }
    return out
}

function evalBinary(operator: string, left: unknown, right: unknown): unknown {
    switch (operator) {
        case "==":
            return left == right
        case "!=":
            return left != right
        case "===":
            return left === right
        case "!==":
            return left !== right
        case "<":
            return (left as number) < (right as number)
        case "<=":
            return (left as number) <= (right as number)
        case ">":
            return (left as number) > (right as number)
        case ">=":
            return (left as number) >= (right as number)
        case "+":
            if (typeof left === "string" || typeof right === "string") return String(left) + String(right)
            return Number(left) + Number(right)
        case "-":
            return Number(left) - Number(right)
        case "*":
            return Number(left) * Number(right)
        case "/":
            return Number(left) / Number(right)
        case "%":
            return Number(left) % Number(right)
        case "|":
            return Number(left) | Number(right)
        case "&":
            return Number(left) & Number(right)
        case "<<":
            return Number(left) << Number(right)
        case ">>":
            return Number(left) >> Number(right)
        default:
            throw new TranslateAbort(`${LOG_PREFIX} unsupported binary: ${operator}`)
    }
}
