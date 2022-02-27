import { ActionData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-04-22
 * It is used to confirm type correctness
 */

test("ActionData type validation", async () => {
    const curse: ActionData = {
        "attacker": "Tsumiki",
        "eta": 400,
        "m": 0,
        "pid": "D3TiuJ",
        "projectile": "curse",
        "source": "curse",
        "target": "806887",
        "type": "curse",
        "x": -486.02278423668105,
        "y": 675.491341680662
    }
    expect(curse).not.toBe(undefined)

    const heal: ActionData = {
        "attacker": "Nindr",
        "eta": 400,
        "heal": 3248,
        "m": 20,
        "pid": "qVCq7b",
        "projectile": "magic_purple",
        "source": "heal",
        "target": "Casmer",
        "type": "heal",
        "x": -405,
        "y": -2105
    }
    expect(heal).not.toBe(undefined)

    const taunt: ActionData = {
        "attacker": "Punda",
        "damage": 1,
        "eta": 400,
        "m": 0,
        "pid": "wNJOwf",
        "projectile": "stone",
        "source": "taunt",
        "target": "806887",
        "type": "taunt",
        "x": -486.02278423668105,
        "y": 675.491341680662
    }
    expect(taunt).not.toBe(undefined)

    const momentum: ActionData = {
        "attacker": "Wolfff",
        "damage": 1734,
        "eta": 400,
        "m": 0,
        "pid": "eorKsC",
        "projectile": "momentum",
        "source": "attack",
        "target": "806887",
        "type": "attack",
        "x": -486.02278423668105,
        "y": 675.491341680662
    }
    expect(momentum).not.toBe(undefined)

    const magicAttack: ActionData = {
        "attacker": "Logus",
        "damage": 1848,
        "eta": 400,
        "m": 0,
        "pid": "ambEXT",
        "projectile": "pmagic",
        "source": "attack",
        "target": "806887",
        "type": "attack",
        "x": -486.02278423668105,
        "y": 675.491341680662
    }
    expect(magicAttack).not.toBe(undefined)

    const fireball: ActionData = {
        "attacker": "Riano",
        "damage": 1809,
        "eta": 400,
        "m": 0,
        "pid": "HonTH4",
        "projectile": "fireball",
        "source": "attack",
        "target": "807771",
        "type": "attack",
        "x": -1299.5785271749164,
        "y": -6.7909283252051145
    }
    expect(fireball).not.toBe(undefined)

    const fiveShot: ActionData = {
        "attacker": "Persephone",
        "damage": 852,
        "eta": 400,
        "m": 0,
        "pid": "OsicKP",
        "projectile": "arrow",
        "source": "5shot",
        "target": "808030",
        "type": "5shot",
        "x": 392,
        "y": -2840
    }
    expect(fiveShot).not.toBe(undefined)

    const cburst: ActionData = {
        "attacker": "attackMag3",
        "damage": 1332.0000000000002,
        "eta": 400,
        "instant": true,
        "m": 0,
        "pid": "JUcoui",
        "ray": "burst",
        "source": "cburst",
        "target": "6157941",
        "type": "cburst",
        "x": -50.64963979880396,
        "y": 1472.632007837244
    }
    expect(cburst).not.toBe(undefined)

    const zapperZap: ActionData = {
        "attacker": "earthWar",
        "damage": 200,
        "eta": 400,
        "instant": true,
        "m": 0,
        "pid": "zIktt1",
        "ray": "burst",
        "source": "zapperzap",
        "target": "8957498",
        "type": "zapperzap",
        "x": 32.16258422906021,
        "y": 199.46870572032924
    }
    expect(zapperZap).not.toBe(undefined)
})