import { jest } from "@jest/globals"
import { translateCodeEval, unwrapAsyncIife } from "./translateCodeEval.js"
import type { CodeBridgeHost } from "./types.js"

function createMockHost(overrides: Partial<CodeBridgeHost> = {}): CodeBridgeHost & {
    calls: { name: string; args: unknown[] }[]
} {
    const calls: { name: string; args: unknown[] }[] = []
    const track =
        (name: string) =>
        async (...args: unknown[]) => {
            calls.push({ name, args })
        }

    const host: CodeBridgeHost & { calls: { name: string; args: unknown[] }[] } = {
        calls,
        id: "TestBot",
        name: "TestBot",
        map: "main",
        x: 0,
        y: 0,
        esize: 10,
        items: [{ name: "hpot0", q: 10 }, { name: "mpot0", q: 5 }, null, { name: "helmet", level: 1 }],
        slots: { helmet: { name: "helmet", level: 0 } },
        G: {},
        socket: { emit: jest.fn() },
        equip: track("equip"),
        unequip: track("unequip"),
        swapItems: track("swapItems"),
        splitItem: track("splitItem"),
        depositItem: track("depositItem"),
        withdrawItem: track("withdrawItem"),
        say: track("say"),
        sendPM: track("sendPM"),
        smartMove: track("smartMove"),
        move: track("move"),
        buy: track("buy"),
        craft: track("craft"),
        exchange: track("exchange"),
        dismantle: track("dismantle"),
        upgrade: track("upgrade"),
        compound: track("compound"),
        sendItem: track("sendItem"),
        sendMail: track("sendMail"),
        takeMailItem: track("takeMailItem"),
        buyFromMerchant: track("buyFromMerchant"),
        sellToMerchant: track("sellToMerchant"),
        openMerchantStand: track("openMerchantStand"),
        closeMerchantStand: track("closeMerchantStand"),
        locateItem: (name: string) => {
            const items = host.items ?? []
            for (let i = 0; i < items.length; i++) {
                const it = items[i] as { name?: string } | null
                if (it?.name === name) return i
            }
            return undefined
        },
        ...overrides,
    }
    return host
}

describe("unwrapAsyncIife", () => {
    test("unwraps classic ECU wrapper", () => {
        expect(unwrapAsyncIife("(async function(){say('hi')})();")).toBe("say('hi')")
    })

    test("leaves bare snippets alone", () => {
        expect(unwrapAsyncIife("smart_move('bank')")).toBe("smart_move('bank')")
    })
})

describe("translateCodeEval", () => {
    test("translates say with literal", async () => {
        const host = createMockHost()
        const result = await translateCodeEval(`(async function(){say("hello");})();`, host)
        expect(result.ok).toBe(true)
        expect(host.calls).toEqual([{ name: "say", args: ["hello"] }])
    })

    test("translates private_say / whisper", async () => {
        const host = createMockHost()
        const result = await translateCodeEval(
            `(async function(){if(typeof private_say!=="function"){game_log("missing");return;}private_say("Alice","hi");})();`,
            host,
        )
        expect(result.ok).toBe(true)
        expect(host.calls).toEqual([{ name: "sendPM", args: ["Alice", "hi"] }])
    })

    test("warns and skips party_say without aborting", async () => {
        const host = createMockHost()
        const warn = jest.spyOn(console, "warn").mockImplementation(() => undefined)
        const result = await translateCodeEval(`(async function(){party_say("raid");})();`, host)
        expect(result.ok).toBe(true)
        expect(host.calls).toEqual([])
        expect(warn).toHaveBeenCalledWith(expect.stringContaining("party_say is not supported"))
        warn.mockRestore()
    })

    test("resolves fingerprint-style equip preamble then calls equip", async () => {
        const host = createMockHost()
        // Prefer slot 0 which is hpot0; fingerprint wants helmet → scan finds slot 3
        const script = `(async function(){
var __slot=0;
var it=character.items[__slot];
if(!it||it.name!=="helmet"){
__slot=-1;
for(var __si=0;__si<character.items.length;__si++){
var __cand=character.items[__si];
if(!(!__cand||__cand.name!=="helmet")){__slot=__si;break;}
}
if(__slot<0){game_log("mismatch");return;}
it=character.items[__slot];
}
try{await equip(__slot,"helmet");}catch(__e){game_log("fail");}
})();`
        const result = await translateCodeEval(script, host)
        expect(result.ok).toBe(true)
        expect(host.calls).toEqual([{ name: "equip", args: [3, "helmet"] }])
    })

    test("translates unequip and swap", async () => {
        const host = createMockHost()
        const result = await translateCodeEval(`(async function(){await unequip("helmet");await swap(1,0);})();`, host)
        expect(result.ok).toBe(true)
        expect(host.calls).toEqual([
            { name: "unequip", args: ["helmet"] },
            { name: "swapItems", args: [1, 0] },
        ])
    })

    test("translates bank_store / bank_retrieve", async () => {
        const host = createMockHost()
        const result = await translateCodeEval(
            `(async function(){await bank_store(0);await bank_retrieve("items0",2,1);})();`,
            host,
        )
        expect(result.ok).toBe(true)
        expect(host.calls).toEqual([
            { name: "depositItem", args: [0, undefined, undefined] },
            { name: "withdrawItem", args: ["items0", 2, 1] },
        ])
    })

    test("translates smart_move destination object", async () => {
        const host = createMockHost()
        const result = await translateCodeEval(`smart_move({ map: "main", x: 10, y: 20 })`, host)
        expect(result.ok).toBe(true)
        expect(host.calls).toEqual([{ name: "smartMove", args: [{ map: "main", x: 10, y: 20 }] }])
    })

    test("translates mail_take_item via parent.socket.emit", async () => {
        const host = createMockHost()
        const result = await translateCodeEval(
            `(async function(){parent.socket.emit("mail_take_item",{id:"abc123"});})();`,
            host,
        )
        expect(result.ok).toBe(true)
        expect(host.calls).toEqual([{ name: "takeMailItem", args: ["abc123"] }])
    })

    test("translates trade_buy via get_socket().emit", async () => {
        const host = createMockHost()
        const result = await translateCodeEval(
            `(async function(){get_socket().emit("trade_buy",{id:"Merch",slot:"trade1",rid:"r1",q:2});})();`,
            host,
        )
        expect(result.ok).toBe(true)
        expect(host.calls).toEqual([{ name: "buyFromMerchant", args: ["Merch", "trade1", "r1", 2] }])
    })

    test("aborts on unknown CODE function", async () => {
        const host = createMockHost()
        const warn = jest.spyOn(console, "warn").mockImplementation(() => undefined)
        const result = await translateCodeEval(`(async function(){loot();})();`, host)
        expect(result.ok).toBe(false)
        expect(host.calls).toEqual([])
        expect(result.warnings.some((w) => w.includes("unknown CODE function: loot"))).toBe(true)
        warn.mockRestore()
    })

    test("blocks unknown socket.emit events", async () => {
        const host = createMockHost()
        const warn = jest.spyOn(console, "warn").mockImplementation(() => undefined)
        const result = await translateCodeEval(
            `(async function(){parent.socket.emit("not_a_real_event",{});})();`,
            host,
        )
        expect(result.ok).toBe(false)
        expect(host.calls).toEqual([])
        warn.mockRestore()
    })

    test("early return skips later calls", async () => {
        const host = createMockHost()
        const result = await translateCodeEval(`(async function(){if(true){return;}say("nope");})();`, host)
        expect(result.ok).toBe(true)
        expect(host.calls).toEqual([])
    })
})
