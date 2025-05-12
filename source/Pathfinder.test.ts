import { jest } from "@jest/globals"
import { Game } from "./Game"
import { Pathfinder } from "./Pathfinder"
import type { LinkData, NodeData } from "./definitions/pathfinder"
import type { IPosition } from "./definitions/adventureland"

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

    await expect(async () => {
        await Pathfinder.prepare(Game.G, {
            showConsole: false,
        })
    }).not.toThrow()
    expect(Pathfinder.getGrid("main")).toBeDefined()
    expect(logMock).not.toHaveBeenCalled()
    expect(debugMock).not.toHaveBeenCalled()

    // Cheat
    await expect(async () => {
        await Pathfinder.prepare(Game.G, {
            cheat: true,
            showConsole: true,
        })
    }).not.toThrow()
    expect(logMock).not.toHaveBeenCalled()
    expect(debugMock).toHaveBeenCalled()

    // Set log back to normal
    console.log = log
    console.debug = debug
})

test("Pathfinder.getPath", async () => {
    const mainSpawn: NodeData = { map: "main", x: Game.G.maps.main.spawns[0][0], y: Game.G.maps.main.spawns[0][1] }
    const mainOffset: NodeData = {
        map: "main",
        x: Game.G.maps.main.spawns[0][0] + 100,
        y: Game.G.maps.main.spawns[0][1] + 100,
    }
    const halloweenSpawn: NodeData = {
        map: "halloween",
        x: Game.G.maps.halloween.spawns[0][0],
        y: Game.G.maps.halloween.spawns[0][1],
    }

    // Simple line of sight path
    expect(() => {
        const path = Pathfinder.getPath(mainSpawn, mainOffset)
        expect(path).toHaveLength(2)
    }).not.toThrow()

    // Complicated cross-map path
    expect(() => {
        const path = Pathfinder.getPath(mainSpawn, halloweenSpawn)
        expect(path.length).toBeTruthy()
    }).not.toThrow()

    // Don't use town warps
    expect(() => {
        const path = Pathfinder.getPath(
            { map: "main", x: 383, y: 1480 },
            { map: "main", x: 17, y: -152 },
            { avoidTownWarps: true },
        )
        expect(path.length).toBeTruthy
        for (const link of path as unknown as LinkData[]) expect(link.type).not.toEqual("town")
    }).not.toThrow()

    // Avoids bank
    expect(() => {
        const path = Pathfinder.getPath(
            { map: "main", x: 0, y: 0 },
            { map: "level2w", x: 0, y: 0 },
            { avoidMaps: ["bank", "bank_b", "bank_u"] },
        )
        expect(path.length).toBeTruthy()
        for (const link of path as unknown as LinkData[]) {
            if (link) expect(link.map).not.toMatch(/^bank/)
        }
    }).not.toThrow()

    // Still goes to bank if the destination is in the bank
    expect(() => {
        const path = Pathfinder.getPath(
            { map: "main", x: 2, y: 3 },
            { map: "bank_u", x: 4, y: 5 },
            { avoidMaps: ["bank", "bank_b", "bank_u"] },
        )
        expect(path.length).toBeTruthy()
        const end = path[path.length - 1]
        expect(end.map).toEqual("bank_u")
        expect(end.x).toEqual(4)
        expect(end.y).toEqual(5)
    }).not.toThrow()

    // Still exits bank if the start is in the bank
    expect(() => {
        const path = Pathfinder.getPath(
            { map: "bank_u", x: 2, y: 3 },
            { map: "main", x: 4, y: 5 },
            { avoidMaps: ["bank", "bank_b", "bank_u"] },
        )
        expect(path.length).toBeTruthy()
        const end = path[path.length - 1]
        expect(end.map).toEqual("main")
        expect(end.x).toEqual(4)
        expect(end.y).toEqual(5)
    }).not.toThrow()
})

test("Pathfinder.locateCraftNPC", () => {
    // craftsman location
    expect(Pathfinder.locateCraftNPC("pouchbow")).toStrictEqual<IPosition>({ map: "main", x: 92, y: 670 })
    // witch location
    expect(Pathfinder.locateCraftNPC("elixirpnres")).toStrictEqual<IPosition>({ map: "halloween", x: 858, y: -160 })
    // mcollector location
    expect(Pathfinder.locateCraftNPC("resistancering")).toStrictEqual<IPosition>({ map: "main", x: 81, y: -283 })
    // not craftable
    expect(() => {
        Pathfinder.locateCraftNPC("gem0")
    }).toThrow()
})

test("Pathfinder.locateExchangeNPC", () => {
    // general exchangeable
    expect(Pathfinder.locateExchangeNPC("gem0")).toStrictEqual<IPosition>({ map: "main", x: -25, y: -478 })
    // token
    expect(Pathfinder.locateExchangeNPC("monstertoken")).toStrictEqual<IPosition>({ map: "main", x: 126, y: -413 })
    // quest
    expect(Pathfinder.locateExchangeNPC("leather")).toStrictEqual<IPosition>({ map: "winterland", x: 262, y: -48.5 })
    // not exchangeable
    expect(() => {
        Pathfinder.locateExchangeNPC("mpot0")
    }).toThrow()
})

test("Pathfinder.locateMonster", () => {
    // harpy should have a lot of locations since it has a random spawn
    expect(Pathfinder.locateMonster("harpy").length).toBeGreaterThan(1)
})
