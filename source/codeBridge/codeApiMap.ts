import type { CodeBridgeHost } from "./types.js"

export type CodeApiHandler = (host: CodeBridgeHost, args: unknown[]) => Promise<unknown> | unknown

/**
 * Stock CODE function names → ALClient host methods.
 * Unmapped names are not listed here; the translator warns and aborts.
 */
export const CODE_API_MAP: Record<string, CodeApiHandler> = {
    equip: (host, args) => host.equip(asNumber(args[0]), args[1] !== undefined ? String(args[1]) : undefined),
    unequip: (host, args) => host.unequip(String(args[0])),
    swap: (host, args) => host.swapItems(asNumber(args[0]), asNumber(args[1])),
    split: (host, args) => host.splitItem(asNumber(args[0]), asNumber(args[1])),
    bank_store: (host, args) =>
        host.depositItem(
            asNumber(args[0]),
            args[1] !== undefined ? String(args[1]) : undefined,
            args[2] !== undefined ? asNumber(args[2]) : undefined,
        ),
    bank_retrieve: (host, args) =>
        host.withdrawItem(String(args[0]), asNumber(args[1]), args[2] !== undefined ? asNumber(args[2]) : undefined),
    bank_deposit: (host, args) => {
        if (!host.depositGold) {
            console.warn("[codeBridge] bank_deposit skipped — depositGold not available on host")
            return
        }
        return host.depositGold(asNumber(args[0]))
    },
    bank_withdraw: (host, args) => {
        if (!host.withdrawGold) {
            console.warn("[codeBridge] bank_withdraw skipped — withdrawGold not available on host")
            return
        }
        return host.withdrawGold(asNumber(args[0]))
    },
    say: (host, args) => host.say(String(args[0] ?? "")),
    private_say: (host, args) => host.sendPM(String(args[0]), String(args[1] ?? "")),
    pm: (host, args) => host.sendPM(String(args[0]), String(args[1] ?? "")),
    party_say: () => {
        console.warn(
            "[codeBridge] party_say is not supported by ALClient — skipping (no partySay API). Message was not sent.",
        )
    },
    smart_move: (host, args) => host.smartMove(args[0]),
    move: (host, args) => host.move(asNumber(args[0]), asNumber(args[1])),
    buy: (host, args) => host.buy(String(args[0]), args[1] !== undefined ? asNumber(args[1]) : undefined),
    craft: (host, args) => host.craft(String(args[0])),
    auto_craft: (host, args) => host.craft(String(args[0])),
    exchange: (host, args) => host.exchange(asNumber(args[0])),
    dismantle: (host, args) => host.dismantle(asNumber(args[0])),
    upgrade: (host, args) => {
        // CODE: upgrade(item, scroll, offering, only_calculate?)
        if (args[3] === true) {
            console.warn("[codeBridge] upgrade calculate-only — skipping (use Character.calculateUpgrade in bots)")
            return
        }
        return host.upgrade(
            asNumber(args[0]),
            args[1] !== undefined ? asNumber(args[1]) : undefined,
            args[2] !== undefined ? asNumber(args[2]) : undefined,
        )
    },
    compound: (host, args) => {
        // CODE: compound(i0, i1, i2, scroll, offering?, only_calculate?)
        if (args[5] === true) {
            console.warn("[codeBridge] compound calculate-only — skipping (use Character.calculateCompound in bots)")
            return
        }
        return host.compound(
            asNumber(args[0]),
            asNumber(args[1]),
            asNumber(args[2]),
            asNumber(args[3]),
            args[4] !== undefined ? asNumber(args[4]) : undefined,
        )
    },
    send_item: (host, args) => {
        const to =
            typeof args[0] === "object" && args[0] && "name" in args[0]
                ? String((args[0] as { name: string }).name)
                : String(args[0])
        return host.sendItem(to, asNumber(args[1]), args[2] !== undefined ? asNumber(args[2]) : undefined)
    },
    send_mail: (host, args) => {
        const to =
            typeof args[0] === "object" && args[0] && "name" in args[0]
                ? String((args[0] as { name: string }).name)
                : String(args[0])
        return host.sendMail(to, String(args[1] ?? ""), String(args[2] ?? ""), Boolean(args[3]))
    },
    open_merchant: (host) => host.openMerchantStand(),
    close_merchant: (host) => host.closeMerchantStand(),
    trade: async (host, args) => {
        // CODE: trade(num, trade_slot, price, quantity)
        if (!host.listForSale) {
            console.warn("[codeBridge] trade skipped — listForSale not available (need a Merchant character)")
            return
        }
        let tradeSlot = args[1]
        if (
            typeof tradeSlot === "number" ||
            (typeof tradeSlot === "string" && !String(tradeSlot).startsWith("trade"))
        ) {
            tradeSlot = `trade${tradeSlot}`
        }
        return host.listForSale(
            asNumber(args[0]),
            asNumber(args[2]),
            String(tradeSlot),
            args[3] !== undefined ? asNumber(args[3]) : 1,
        )
    },
    locate_item: (host, args) => {
        if (!host.locateItem) {
            console.warn("[codeBridge] locate_item skipped — locateItem not available on host")
            return -1
        }
        const pos = host.locateItem(String(args[0]))
        return pos === undefined ? -1 : pos
    },
    quantity: (host, args) => {
        const name = String(args[0])
        const items = host.items ?? []
        let q = 0
        for (let i = 0; i < items.length; i++) {
            const it = items[i] as { name?: string; q?: number } | null
            if (it && it.name === name) q += it.q ?? 1
        }
        return q
    },
    sleep: (_host, args) => {
        const ms = Math.max(0, asNumber(args[0] ?? 0))
        return new Promise((resolve) => {
            const timer = setTimeout(resolve, ms)
            timer.unref?.()
        })
    },
    game_log: (_host, args) => {
        console.log(`[codeBridge][game_log] ${String(args[0] ?? "")}`)
    },
    log: (_host, args) => {
        console.log(`[codeBridge][log] ${String(args[0] ?? "")}`)
    },
    safe_log: (_host, args) => {
        console.log(`[codeBridge][safe_log] ${String(args[0] ?? "")}`)
    },
}

/** Socket events we will translate to host methods or forward via socket.emit. */
export const EMIT_HANDLERS: Record<
    string,
    (host: CodeBridgeHost, data: Record<string, unknown>) => Promise<unknown> | unknown
> = {
    mail_take_item: (host, data) => host.takeMailItem(String(data.id ?? "")),
    trade_buy: (host, data) =>
        host.buyFromMerchant(
            String(data.id),
            String(data.slot),
            String(data.rid),
            data.q !== undefined ? asNumber(data.q) : 1,
        ),
    trade_sell: (host, data) =>
        host.sellToMerchant(String(data.id), String(data.slot), String(data.rid), asNumber(data.q ?? 1)),
    join_giveaway: (host, data) => {
        host.socket.emit("join_giveaway", { id: data.id, slot: data.slot, rid: data.rid })
    },
}

function asNumber(value: unknown): number {
    const n = Number(value)
    if (Number.isNaN(n)) throw new Error(`Expected number, got ${String(value)}`)
    return n
}
