import { Game } from "./Game"
import { Character } from "./Character"
import { GData2 } from "./definitions/adventureland-data"

let G: GData2
let character: Character
beforeAll(async () => {
    G = await Game.getGData()
    character = new Character(undefined, undefined, undefined, G, { region: "ASIA", name: "I", addr: "test", port: 0, players: 0, key: "ASIAI" })
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
    expect(character.calculateItemCost({ name: "scroll0" })).toBe(1000)
    expect(character.calculateItemCost({ name: "scroll1" })).toBe(40000)

    // Upgradable items
    expect(character.calculateItemCost({ name: "pants", level: 0 })).toBe(7800)
    expect(character.calculateItemCost({ name: "pants", level: 1 })).toBe(8800)
    expect(character.calculateItemCost({ name: "pants", level: 2 })).toBe(9800)
    expect(character.calculateItemCost({ name: "pants", level: 3 })).toBe(10800)
    expect(character.calculateItemCost({ name: "pants", level: 4 })).toBe(11800)
    expect(character.calculateItemCost({ name: "pants", level: 5 })).toBe(12800)
    expect(character.calculateItemCost({ name: "pants", level: 6 })).toBe(13800)
    expect(character.calculateItemCost({ name: "pants", level: 7 })).toBe(53800)

    // Compoundable items
    expect(character.calculateItemCost({ name: "dexring", level: 0 })).toBe(24000)
    expect(character.calculateItemCost({ name: "dexring", level: 1 })).toBe(78400)
    expect(character.calculateItemCost({ name: "dexring", level: 2 })).toBe(241600)
    expect(character.calculateItemCost({ name: "dexring", level: 3 })).toBe(964800)
    expect(character.calculateItemCost({ name: "dexring", level: 4 })).toBe(3134400)
    expect(character.calculateItemCost({ name: "dexring", level: 5 })).toBe(18603200)
})

test("Character.isPVP", async () => {
    // False if the map and server are not PVP
    character.server = {
        region: "ASIA",
        name: "I",
        in: "main",
        map: "main",
        gameplay: "test",
        info: "test",
        pvp: false,
        x: 0,
        y: 0
    }
    character.map = "main"
    expect(character.isPVP()).toBe(false)

    // True if the server is PVP
    character.server.pvp = true
    expect(character.isPVP()).toBe(true)

    // True if the map is PVP
    character.map = "arena"
    expect(character.isPVP()).toBe(true)

    // False if the map is safe
    character.map = "hut"
    expect(character.isPVP()).toBe(false)
})

test("Character.locateItem", async () => {
    // Create the character's inventory for testing
    character.esize = 2
    character.items = [undefined, { name: "mpot0", q: 1 }, { name: "mpot0", q: 10 }, { name: "pants", level: 0 }, { name: "pants", level: 1 }, { name: "coat", level: 2 }, { name: "coat", level: 0 }, undefined]
    character.isize = character.items.length

    expect(character.locateItem("pants")).toBeTruthy()
    expect(character.locateItem("coat")).toBeTruthy()
    expect(character.locateItem("pants", character.items, { level: 0 })).toBe(3)
    expect(character.locateItem("coat", character.items, { level: 0 })).toBe(6)
    expect(character.locateItem("pants", character.items, { levelGreaterThan: 0 })).toBe(4)
    expect(character.locateItem("coat", character.items, { levelGreaterThan: 0 })).toBe(5)
    expect(character.locateItem("pants", character.items, { levelLessThan: 0 })).toBe(undefined)

    expect(character.locateItem("mpot0")).toBeTruthy()
    expect(character.locateItem("mpot0", character.items, { quantityGreaterThan: 1 })).toBe(2)
})

test("Character.locateItems", async () => {
    // Create the character's inventory for testing
    character.esize = 2
    character.items = [{ name: "mpot0", q: 1 }, undefined, { name: "mpot0", q: 10 }, { name: "pants", level: 0 }, { name: "pants", level: 1 }, { name: "coat", level: 2 }, { name: "coat", level: 0 }, undefined, { name: "mpot0", q: 10 }]
    character.isize = character.items.length

    expect(character.locateItems("pants").length).toBe(2)
    expect(character.locateItems("pants", character.items, { level: 0 }).length).toBe(1)
    expect(character.locateItems("pants", character.items, { levelLessThan: 0 }).length).toBe(0)
    expect(character.locateItems("pants", character.items, { levelLessThan: 1 }).length).toBe(1)
    expect(character.locateItems("pants", character.items, { levelLessThan: 2 }).length).toBe(2)
    expect(character.locateItems("pants", character.items, { levelGreaterThan: 0 }).length).toBe(1)
    expect(character.locateItems("mpot0", character.items, { quantityGreaterThan: 1 }).length).toBe(2)
})