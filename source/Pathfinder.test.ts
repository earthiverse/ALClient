import { Game } from "./Game"
import { GData } from "./definitions/adventureland-data"
import { Pathfinder } from "./Pathfinder"

let G: GData
beforeAll(async () => {
    G = await Game.getGData(true)
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