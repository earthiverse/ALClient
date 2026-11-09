/** Result of translating one `code_eval` snippet. */
export type TranslateResult = {
    /** True when every statement ran without hitting an unknown call. */
    ok: boolean
    /** Human-readable reasons (unknown calls, unsupported syntax, etc.). */
    warnings: string[]
}

/** Socket-shaped object CODE scripts use via `get_socket()` / `parent.socket`. */
export type CodeBridgeSocket = {
    emit: (event: string, data?: unknown) => void
}

/**
 * Minimal host surface the translator needs. Character satisfies this;
 * unit tests can pass a plain mock.
 */
export type CodeBridgeHost = {
    id?: string
    name?: string
    map?: string
    x?: number
    y?: number
    items?: unknown[]
    slots?: Record<string, unknown>
    bank?: unknown
    stand?: unknown
    esize?: number
    G?: unknown
    socket: CodeBridgeSocket
    equip: (inventoryPos: number, equipSlot?: string) => Promise<unknown>
    unequip: (slot: string) => Promise<unknown>
    swapItems: (a: number, b: number) => Promise<unknown>
    splitItem: (pos: number, q: number) => Promise<unknown>
    depositItem: (inventoryPos: number, bankPack?: string, bankSlot?: number) => Promise<unknown>
    withdrawItem: (bankPack: string, bankPos: number, inventoryPos?: number) => Promise<unknown>
    depositGold?: (gold: number) => Promise<unknown>
    withdrawGold?: (gold: number) => Promise<unknown>
    say: (message: string) => Promise<unknown>
    sendPM: (to: string, message: string) => Promise<unknown>
    smartMove: (to: unknown, options?: unknown) => Promise<unknown>
    move: (x: number, y: number) => Promise<unknown>
    buy: (itemName: string, quantity?: number) => Promise<unknown>
    craft: (item: string) => Promise<unknown>
    exchange: (inventoryPos: number) => Promise<unknown>
    dismantle: (slot: number) => Promise<unknown>
    upgrade: (itemPos: number, scrollPos?: number, offeringPos?: number) => Promise<unknown>
    compound: (
        item1Pos: number,
        item2Pos: number,
        item3Pos: number,
        cscrollPos: number,
        offeringPos?: number,
    ) => Promise<unknown>
    sendItem: (to: string, inventoryPos: number, quantity?: number) => Promise<unknown>
    sendMail: (to: string, subject: string, message: string, item?: boolean) => Promise<unknown>
    takeMailItem: (mailID: string) => Promise<unknown>
    buyFromMerchant: (id: string, slot: string, rid: string, quantity?: number) => Promise<unknown>
    sellToMerchant: (id: string, slot: string, rid: string, q: number) => Promise<unknown>
    openMerchantStand: () => Promise<unknown>
    closeMerchantStand: () => Promise<unknown>
    locateItem?: (name: string) => number | undefined
    /** Optional merchant listing (Merchant subclass). */
    listForSale?: (itemPos: number, price: number, tradeSlot?: string, quantity?: number) => Promise<unknown>
}
