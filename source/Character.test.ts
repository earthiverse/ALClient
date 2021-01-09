import { GData } from "./definitions/adventureland"
import { Game } from "./Game"
import { Character } from "./Character"

let G: GData
let player: Character
beforeAll(async () => {
    G = await Game.getGData()
    player = new Character(undefined, undefined, undefined, G, { region: "ASIA", name: "I", addr: "test", port: 0, players: 0, key: "ASIAI" })
}, 30000)

afterAll(async () => {
    Game.disconnect()
})

test("Character.calculateItemCost", async () => {
    // The costs below assume these G costs, so check that they're still good
    expect(G.items.scroll0.g).toBe(1000)
    expect(G.items.scroll1.g).toBe(40000)
    expect(G.items.pants.g).toBe(7800)
    expect(G.items.dexring.g).toBe(24000)

    // Normal item
    expect(player.calculateItemCost({ name: "scroll0" })).toBe(1000)
    expect(player.calculateItemCost({ name: "scroll1" })).toBe(40000)

    // Upgradable items
    expect(player.calculateItemCost({ name: "pants", level: 0 })).toBe(7800)
    expect(player.calculateItemCost({ name: "pants", level: 1 })).toBe(8800)
    expect(player.calculateItemCost({ name: "pants", level: 2 })).toBe(9800)
    expect(player.calculateItemCost({ name: "pants", level: 3 })).toBe(10800)
    expect(player.calculateItemCost({ name: "pants", level: 4 })).toBe(11800)
    expect(player.calculateItemCost({ name: "pants", level: 5 })).toBe(12800)
    expect(player.calculateItemCost({ name: "pants", level: 6 })).toBe(13800)
    expect(player.calculateItemCost({ name: "pants", level: 7 })).toBe(53800)

    // Compoundable items
    expect(player.calculateItemCost({ name: "dexring", level: 0 })).toBe(24000)
    expect(player.calculateItemCost({ name: "dexring", level: 1 })).toBe(78400)
    expect(player.calculateItemCost({ name: "dexring", level: 2 })).toBe(241600)
    expect(player.calculateItemCost({ name: "dexring", level: 3 })).toBe(964800)
    expect(player.calculateItemCost({ name: "dexring", level: 4 })).toBe(3134400)
    expect(player.calculateItemCost({ name: "dexring", level: 5 })).toBe(18603200)
})