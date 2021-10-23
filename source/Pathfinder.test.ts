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