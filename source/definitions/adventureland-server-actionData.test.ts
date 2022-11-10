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
    expect(curse).toBeDefined()

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
    expect(heal).toBeDefined()

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
    expect(taunt).toBeDefined()

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
    expect(momentum).toBeDefined()

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
    expect(magicAttack).toBeDefined()

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
    expect(fireball).toBeDefined()

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
    expect(fiveShot).toBeDefined()

    const cburst: ActionData = {
        "attacker": "facilitating",
        "damage": 1.11,
        "eta": 400,
        "instant": true,
        "m": 0,
        "pid": "Tfs1At",
        "projectile": "burst",
        "source": "cburst",
        "target": "89776",
        "type": "cburst",
        "x": -1258.7406861256309,
        "y": 659.3266795166778
    }
    expect(cburst).toBeDefined()

    const zapperZap: ActionData = {
        "attacker": "earthiverse",
        "damage": 200,
        "eta": 400,
        "instant": true,
        "m": 0,
        "pid": "TgyqoR",
        "projectile": "gburst",
        "source": "zapperzap",
        "target": "83873",
        "type": "zapperzap",
        "x": 271.10034441380475,
        "y": -239.95362827974216
    }
    expect(zapperZap).toBeDefined()

    const burned: ActionData = {
        "attacker": "Majima",
        "conditions": [
            "burned"
        ],
        "damage": 1033,
        "eta": 400,
        "m": 0,
        "pid": "kiettq",
        "projectile": "momentum",
        "source": "attack",
        "target": "3409546",
        "type": "attack",
        "x": -312,
        "y": -1278.629999333129
    }
    expect(burned).toBeDefined()
})