import type { GData } from "./definitions/adventureland-data"
import { Entity } from "./Entity"
import { Game } from "./Game"
import { Tools } from "./Tools"

let G: GData
let burningToDeathHen: Entity
let idleBBPompom: Entity
// const projectiles = new Map<string, ActionData>()
beforeAll(async () => {
    G = await Game.getGData(true, false)

    idleBBPompom = new Entity(
        {
            speed: 20.88,
            hp: 64000,
            mp: 32,
            attack: 800,
            xp: 114000,
            frequency: 1.008,
            armor: 0,
            max_hp: 64000,
            id: "4271596",
            x: 303.54083141458585,
            y: -204.76398569325568,
            moving: true,
            going_x: 140.92303024483888,
            going_y: -345.89075399863316,
            abs: false,
            move_num: 50933470,
            angle: -139.04714031777658,
            type: "bbpompom",
            cid: 19,
            s: {},
            level: 19,
        },
        "main",
        "main",
        G,
    )

    burningToDeathHen = new Entity(
        {
            mp: 1,
            armor: 0,
            resistance: 0,
            id: "5366920",
            x: -39.19254454220768,
            y: -274.509516416441,
            moving: true,
            going_x: -51.08535044613559,
            going_y: -265.7636183077833,
            abs: false,
            move_num: 50938494,
            angle: 143.66945967091306,
            type: "hen",
            cid: 1,
            s: {
                burned: {
                    ms: 10000,
                    intensity: 1000,
                    f: "earthiverse",
                    fid: "earthiverse",
                    last: new Date().toISOString(),
                },
            },
        },
        "main",
        "main",
        G,
    )
}, 60000)

test("Entity.level", () => {
    // Entity's level is not specified, should be initialized to 1
    expect(burningToDeathHen.level).toBe(1)

    // Entity's level is specified
    expect(idleBBPompom.level).toBe(19)
})

test("Entity.willBurnToDeath", () => {
    // Won't burn to death
    expect(idleBBPompom.willBurnToDeath()).toBe(false)

    // Will burn to death
    expect(burningToDeathHen.willBurnToDeath()).toBe(true)
})

test("Entity.calculateDamageRange", () => {
    // Normal physical/magical damage + programmatic incdmgamp (cursed + hexed + marked = +50%)
    const defMult =
        idleBBPompom.damage_type == "magical"
            ? Tools.damage_multiplier(burningToDeathHen.resistance - idleBBPompom.rpiercing)
            : Tools.damage_multiplier(burningToDeathHen.armor - idleBBPompom.apiercing)
    const base = idleBBPompom.attack * defMult
    const normal = idleBBPompom.calculateDamageRange(burningToDeathHen)
    expect(normal[0]).toBeCloseTo(base * 0.9)
    expect(normal[1]).toBeCloseTo(base * 1.1)

    burningToDeathHen.s.cursed = { ms: 5000 }
    burningToDeathHen.s.hexed = { ms: 5000 }
    burningToDeathHen.s.marked = { ms: 5000 }
    const amplified = idleBBPompom.calculateDamageRange(burningToDeathHen)
    expect(amplified[0]).toBeCloseTo(base * 0.9 * 1.5)
    expect(amplified[1]).toBeCloseTo(base * 1.1 * 1.5)
    delete burningToDeathHen.s.cursed
    delete burningToDeathHen.s.hexed
    delete burningToDeathHen.s.marked

    // Invincible defender takes [0, 0]
    burningToDeathHen.s.invincible = { ms: 5000 }
    expect(idleBBPompom.calculateDamageRange(burningToDeathHen)).toEqual([0, 0])
    delete burningToDeathHen.s.invincible

    // 1hp defender respects monster crit (0%, 50%, 100%) and rimeshatter non-crit
    burningToDeathHen["1hp"] = true
    expect(idleBBPompom.calculateDamageRange(burningToDeathHen)).toEqual([1, 1])
    idleBBPompom.crit = 50
    expect(idleBBPompom.calculateDamageRange(burningToDeathHen)).toEqual([1, 2])
    expect(idleBBPompom.calculateDamageRange(burningToDeathHen, "rimeshatter")).toEqual([1, 1])
    idleBBPompom.crit = 100
    expect(idleBBPompom.calculateDamageRange(burningToDeathHen)).toEqual([2, 2])
    idleBBPompom.crit = 0
    burningToDeathHen["1hp"] = false

    // Monster skills: zap (1200 pure) and fireball (4000 magical)
    expect(idleBBPompom.calculateDamageRange(burningToDeathHen, "zap")).toEqual([1200, 1200])
    const fireballRange = idleBBPompom.calculateDamageRange(burningToDeathHen, "fireball")
    expect(fireballRange[0]).toBeCloseTo(4000 * 0.9)
    expect(fireballRange[1]).toBeCloseTo(4000 * 1.1)
})
