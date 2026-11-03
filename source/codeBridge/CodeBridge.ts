import type { Character } from "../Character.js"
import { translateCodeEval } from "./translateCodeEval.js"
import type { CodeBridgeHost } from "./types.js"

/**
 * Opt-in listener for inbound `code_eval` (e.g. `/comm` → `o:command`).
 * Translates stock CODE function calls to ALClient methods — no JS VM.
 */
export class CodeBridge {
    private enabled = false
    private queue: Promise<void> = Promise.resolve()
    private readonly onCodeEval: (data: string | { code?: string }) => void

    public constructor(private readonly character: Character) {
        this.onCodeEval = (data) => {
            if (!this.enabled) return
            const code = typeof data === "string" ? data : String(data?.code ?? data ?? "")
            this.enqueue(code)
        }
    }

    public get isEnabled(): boolean {
        return this.enabled
    }

    public enable(): void {
        if (this.enabled) return
        if (!this.character.socket) {
            console.warn("[codeBridge] cannot enable — character has no socket yet")
            return
        }
        this.enabled = true
        this.character.socket.on("code_eval", this.onCodeEval)
        console.warn(
            "[codeBridge] enabled — inbound code_eval / o:command snippets will be translated to ALClient calls",
        )
    }

    public disable(): void {
        if (!this.enabled) return
        this.enabled = false
        this.character.socket?.off("code_eval", this.onCodeEval)
        console.warn("[codeBridge] disabled")
    }

    /** Run a snippet through the translator (also used by unit/playtest). */
    public async handle(code: string): Promise<void> {
        const result = await translateCodeEval(code, this.character as unknown as CodeBridgeHost)
        if (!result.ok) {
            console.warn(`[codeBridge] snippet finished with errors: ${result.warnings.join("; ")}`)
        }
    }

    private enqueue(code: string): void {
        this.queue = this.queue
            .then(() => this.handle(code))
            .catch((e) => {
                console.warn(`[codeBridge] queue error: ${e instanceof Error ? e.message : String(e)}`)
            })
    }
}
