import { Database } from "./database/Database"
import { GData2 } from "./definitions/adventureland-data"
import { Entity } from "./Entity"
import { Game } from "./Game"

let G: GData2
let burningToDeathHen: Entity
let idleBBPompom: Entity
// const projectiles = new Map<string, ActionData>()
beforeAll(async () => {
    Database.connect()
    G = await Game.getGData(true)

    idleBBPompom = new Entity({
        "speed": 20.88,
        "hp": 64000,
        "mp": 32,
        "attack": 800,
        "xp": 114000,
        "frequency": 1.008,
        "armor": 0,
        "max_hp": 64000,
        "id": "4271596",
        "x": 303.54083141458585,
        "y": -204.76398569325568,
        "moving": true,
        "going_x": 140.92303024483888,
        "going_y": -345.89075399863316,
        "abs": false,
        "move_num": 50933470,
        "angle": -139.04714031777658,
        "type": "bbpompom",
        "cid": 19,
        "s": {},
        "level": 19
    }, "main", G)

    burningToDeathHen = new Entity({
        "mp": 1,
        "armor": 0,
        "resistance": 0,
        "id": "5366920",
        "x": -39.19254454220768,
        "y": -274.509516416441,
        "moving": true,
        "going_x": -51.08535044613559,
        "going_y": -265.7636183077833,
        "abs": false,
        "move_num": 50938494,
        "angle": 143.66945967091306,
        "type": "hen",
        "cid": 1,
        "s": {
            burned: {
                ms: 10000,
                intensity: 1000,
                f: "earthiverse"
            }
        }
    }, "main", G)
}, 60000)

afterAll(async () => {
    Database.disconnect()
})

test("Entity.willBurnToDeath", () => {
    // Won't burn to death
    expect(idleBBPompom.willBurnToDeath()).toBe(false)

    // Will burn to death
    expect(burningToDeathHen.willBurnToDeath()).toBe(true)
})