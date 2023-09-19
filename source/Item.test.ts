import { Game } from "./Game"
import { Item } from "./Item"
import { ItemData } from "./definitions/adventureland-server"

beforeAll(async () => {
    await Game.getGData(true, false)
}, 60000)

test("Item stats", async () => {
    // Compare stats to those grabbed from https://adventure.land/docs
    const level0Staff = new Item({ level: 0, name: "staff" })
    expect(level0Staff.attack).toEqual(25)
    expect(level0Staff.range).toEqual(50)

    const level1Staff = new Item({ level: 1, name: "staff" })
    expect(level1Staff.attack).toEqual(30)
    expect(level1Staff.range).toEqual(53)

    const level2Staff = new Item({ level: 2, name: "staff" })
    expect(level2Staff.attack).toEqual(35)
    expect(level2Staff.range).toEqual(56)

    const level3Staff = new Item({ level: 3, name: "staff" })
    expect(level3Staff.attack).toEqual(40)
    expect(level3Staff.range).toEqual(59)

    const level4Staff = new Item({ level: 4, name: "staff" })
    expect(level4Staff.attack).toEqual(45)
    expect(level4Staff.range).toEqual(62)

    const level5Staff = new Item({ level: 5, name: "staff" })
    expect(level5Staff.attack).toEqual(50)
    expect(level5Staff.range).toEqual(65)

    const level6Staff = new Item({ level: 6, name: "staff" })
    expect(level6Staff.attack).toEqual(55)
    expect(level6Staff.range).toEqual(68)

    const level7Staff = new Item({ level: 7, name: "staff" })
    expect(Math.round(level7Staff.attack)).toEqual(61)
    expect(Math.round(level7Staff.range)).toEqual(72)

    const level8Staff = new Item({ level: 8, name: "staff" })
    expect(Math.round(level8Staff.attack)).toEqual(69)
    expect(Math.round(level8Staff.range)).toEqual(76)

    const level9Staff = new Item({ level: 9, name: "staff" })
    expect(Math.round(level9Staff.attack)).toEqual(79)
    expect(Math.round(level9Staff.range)).toEqual(82)

    const level10Staff = new Item({ level: 10, name: "staff" })
    expect(Math.round(level10Staff.attack)).toEqual(94)
    expect(Math.round(level10Staff.range)).toEqual(91)

    const level11Staff = new Item({ level: 11, name: "staff" })
    expect(Math.round(level11Staff.attack)).toEqual(100)
    expect(Math.round(level11Staff.range)).toEqual(95)

    const level12Staff = new Item({ level: 12, name: "staff" })
    expect(Math.round(level12Staff.attack)).toEqual(106)
    expect(Math.round(level12Staff.range)).toEqual(99)
}, 60_000)

test("Item with stat type", async () => {
    const coat = new Item({ level: 8, stat_type: "dex", name: "coat" })
    expect(coat.stat_type).toEqual("dex")
    expect(coat.dex).toEqual(12)
    expect(coat.int).toEqual(0)
    expect(coat.str).toEqual(0)
}, 60_000)