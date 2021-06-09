import { ActionData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-04-22
 * It is used to confirm type correctness
 */

test("ActionData type validation", async () => {
    const curse: ActionData = {
        "attacker": "Tsumiki",
        "target": "806887",
        "type": "curse",
        "source": "curse",
        "x": -486.02278423668105,
        "y": 675.491341680662,
        "eta": 400,
        "m": 0,
        "pid": "D3TiuJ",
        "projectile": "curse"
    }
    expect(curse).not.toBe(undefined)

    const heal: ActionData = {
        "attacker": "Nindr",
        "target": "Casmer",
        "type": "heal",
        "source": "heal",
        "x": -405,
        "y": -2105,
        "eta": 400,
        "m": 20,
        "pid": "qVCq7b",
        "projectile": "magic_purple",
        "heal": 3248
    }
    expect(heal).not.toBe(undefined)

    const taunt: ActionData = {
        "attacker": "Punda",
        "target": "806887",
        "type": "taunt",
        "source": "taunt",
        "x": -486.02278423668105,
        "y": 675.491341680662,
        "eta": 400,
        "m": 0,
        "pid": "wNJOwf",
        "projectile": "stone",
        "damage": 1
    }
    expect(taunt).not.toBe(undefined)

    const momentum: ActionData = {
        "attacker": "Wolfff",
        "target": "806887",
        "type": "attack",
        "source": "attack",
        "x": -486.02278423668105,
        "y": 675.491341680662,
        "eta": 400,
        "m": 0,
        "pid": "eorKsC",
        "projectile": "momentum",
        "damage": 1734
    }
    expect(momentum).not.toBe(undefined)

    const magicAttack: ActionData = {
        "attacker": "Logus",
        "target": "806887",
        "type": "attack",
        "source": "attack",
        "x": -486.02278423668105,
        "y": 675.491341680662,
        "eta": 400,
        "m": 0,
        "pid": "ambEXT",
        "projectile": "pmagic",
        "damage": 1848
    }
    expect(magicAttack).not.toBe(undefined)

    const fireball: ActionData = {
        "attacker": "Riano",
        "target": "807771",
        "type": "attack",
        "source": "attack",
        "x": -1299.5785271749164,
        "y": -6.7909283252051145,
        "eta": 400,
        "m": 0,
        "pid": "HonTH4",
        "projectile": "fireball",
        "damage": 1809
    }
    expect(fireball).not.toBe(undefined)

    const fiveShot: ActionData = {
        "attacker": "Persephone",
        "target": "808030",
        "type": "5shot",
        "source": "5shot",
        "x": 392,
        "y": -2840,
        "eta": 400,
        "m": 0,
        "pid": "OsicKP",
        "projectile": "arrow",
        "damage": 852
    }
    expect(fiveShot).not.toBe(undefined)
})