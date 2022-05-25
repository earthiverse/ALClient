import { Game } from "./Game"
import { GData } from "./definitions/adventureland-data"
import { Pathfinder } from "./Pathfinder"
import { LinkData, NodeData } from "./definitions/pathfinder"

let G: GData
beforeAll(async () => {
    G = await Game.getGData(true, false)
}, 60000)

test("Pathfinder.prepare", async () => {
    expect(() => { Pathfinder.getGrid("main") }).toThrowError()

    expect(() => { Pathfinder.prepare(G, {
        include_bank_b: true,
        include_bank_u: true,
        include_test: true
    }) }).not.toThrowError()

    expect(Pathfinder.getGrid("main")).toBeDefined()
})

test("Pathfinder.doorDistance", async () => {
    const mainBankDoor = G.maps.main.doors[2]

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
    const mainSpawn: NodeData = { map: "main", x: G.maps.main.spawns[0][0], y: G.maps.main.spawns[0][1] }
    const mainOffset: NodeData = { map: "main", x: G.maps.main.spawns[0][0] + 100, y: G.maps.main.spawns[0][1] + 100 }
    const halloweenSpawn: NodeData = { map: "halloween", x: G.maps.halloween.spawns[0][0], y: G.maps.halloween.spawns[0][1] }

    // Simple line of sight path
    let path: LinkData[]
    expect(() => {
        path = Pathfinder.getPath(mainSpawn, mainOffset)
    }).not.toThrowError()
    expect(path).not.toBeUndefined()
    expect(path.length).toBe(2)
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
    for (const link of path) expect(link.type).not.toEqual("town")
})