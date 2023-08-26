import { jest } from "@jest/globals"
import { Game } from "./Game"
import { Pathfinder } from "./Pathfinder"
import { LinkData, NodeData } from "./definitions/pathfinder"
import { IPosition } from "./definitions/adventureland"

beforeAll(async () => {
    await Game.getGData(true, false)
}, 60000)

test("Pathfinder.prepare", async () => {
    // Replace log with mock
    const log = console.log
    const debug = console.debug
    const logMock = jest.fn()
    const debugMock = jest.fn()
    console.log = logMock
    console.debug = debugMock

    await expect(async () => { await Pathfinder.prepare(Game.G, {
        showConsole: false
    }) }).not.toThrowError()
    expect(Pathfinder.getGrid("main")).toBeDefined()
    expect(logMock).not.toHaveBeenCalled()
    expect(debugMock).not.toHaveBeenCalled()

    // Cheat
    await expect(async () => { await Pathfinder.prepare(Game.G, {
        cheat: true,
        showConsole: true
    }) }).not.toThrowError()
    expect(logMock).not.toHaveBeenCalled()
    expect(debugMock).toHaveBeenCalled()

    // Set log back to normal
    console.log = log
    console.debug = debug
})

test("Pathfinder.doorDistance", async () => {
    const mainBankDoor = Game.G.maps.main.doors[2]

    // Test the door base coordinate
    const doorPoint = { x: mainBankDoor[0], y: mainBankDoor[1] }
    expect(Pathfinder.doorDistanceSquared(doorPoint, mainBankDoor)).toBe(0)
    // Test the corners of the door
    const doorCorner_1 = { x: mainBankDoor[0] + mainBankDoor[2] / 2, y: mainBankDoor[1] - mainBankDoor[3] }
    expect(Pathfinder.doorDistanceSquared(doorCorner_1, mainBankDoor)).toBe(0)
    const doorCorner_2 = { x: mainBankDoor[0] - mainBankDoor[2] / 2, y: mainBankDoor[1] - mainBankDoor[3] }
    expect(Pathfinder.doorDistanceSquared(doorCorner_2, mainBankDoor)).toBe(0)
    const doorCorner_3 = { x: mainBankDoor[0] - mainBankDoor[2] / 2, y: mainBankDoor[1] }
    expect(Pathfinder.doorDistanceSquared(doorCorner_3, mainBankDoor)).toBe(0)
    const doorCorner_4 = { x: mainBankDoor[0] - mainBankDoor[2] / 2, y: mainBankDoor[1] }
    expect(Pathfinder.doorDistanceSquared(doorCorner_4, mainBankDoor)).toBe(0)
    // Test inside the door
    const doorInside = { x: mainBankDoor[0] - mainBankDoor[2] / 2, y: mainBankDoor[1] - mainBankDoor[3] / 2 }
    expect(Pathfinder.doorDistanceSquared(doorInside, mainBankDoor)).toBe(0)

    // Test outside the door
    const doorOutside_1 = { x: mainBankDoor[0] + mainBankDoor[2], y: mainBankDoor[1] - mainBankDoor[3] }
    expect(Pathfinder.doorDistanceSquared(doorOutside_1, mainBankDoor)).toBe((mainBankDoor [2] / 2) * (mainBankDoor [2] / 2))
})

test("Pathfinder.getPath", async () => {
    const mainSpawn: NodeData = { map: "main", x: Game.G.maps.main.spawns[0][0], y: Game.G.maps.main.spawns[0][1] }
    const mainOffset: NodeData = { map: "main", x: Game.G.maps.main.spawns[0][0] + 100, y: Game.G.maps.main.spawns[0][1] + 100 }
    const halloweenSpawn: NodeData = { map: "halloween", x: Game.G.maps.halloween.spawns[0][0], y: Game.G.maps.halloween.spawns[0][1] }

    // Simple line of sight path
    let path: LinkData[] | undefined
    expect(() => {
        path = Pathfinder.getPath(mainSpawn, mainOffset)
    }).not.toThrowError()
    expect(path).not.toBeUndefined()
    expect((path as LinkData[]).length).toBe(2)
    path = undefined

    // Complicated cross-map path
    expect(() => {
        path = Pathfinder.getPath(mainSpawn, halloweenSpawn)
    }).not.toThrowError()
    expect(path).not.toBeUndefined()
    path = undefined

    // Don't use town warps
    expect(() => {
        path = Pathfinder.getPath({ map: "main", x: 17, y: -152 }, { map: "main", x: 383, y: 1480 }, { avoidTownWarps: true })
    }).not.toThrowError()
    expect(path).not.toBeUndefined()
    for (const link of (path as unknown as LinkData[])) expect(link.type).not.toEqual("town")
})

test("Pathfinder.locateCraftNPC", () => {
    // craftsman location
    expect(Pathfinder.locateCraftNPC("pouchbow")).toStrictEqual<IPosition>({ map: "main", x: 92, y: 670 })
    // witch location
    expect(Pathfinder.locateCraftNPC("elixirpnres")).toStrictEqual<IPosition>({ map: "halloween", x: 858, y: -160 })
    // mcollector location
    expect(Pathfinder.locateCraftNPC("resistancering")).toStrictEqual<IPosition>({ map: "main", x: 81, y: -283 })
    // not craftable
    expect(() => { Pathfinder.locateCraftNPC("gem0") }).toThrowError()
})

test("Pathfinder.locateExchangeNPC", () => {
    // general exchangeable
    expect(Pathfinder.locateExchangeNPC("gem0")).toStrictEqual<IPosition>({ map: "main", x: -25, y: -478 })
    // token
    expect(Pathfinder.locateExchangeNPC("monstertoken")).toStrictEqual<IPosition>({ map: "main", x: 126, y: -413 })
    // quest
    expect(Pathfinder.locateExchangeNPC("leather")).toStrictEqual<IPosition>({ map: "winterland", x: 262, y: -48.5 })
    // not exchangeable
    expect(() => { Pathfinder.locateExchangeNPC("mpot0") }).toThrowError()
})

test("Pathfinder.locateMonster", () => {
    // harpy should have a lot of locations since it has a random spawn
    expect(Pathfinder.locateMonster("harpy").length).toBeGreaterThan(1)
})