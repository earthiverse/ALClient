import { HitData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-04-22 to 2021-04-23
 * It is used to confirm type correctness
 */

test("HitData type validation", async () => {
    const killMonster: HitData = {
        "hid": "Wolfff",
        "source": "attack",
        "pid": "wMoXut",
        "projectile": "momentum",
        "id": "808131",
        "anim": "slash1",
        "damage": 2323,
        "kill": true
    }
    expect(killMonster).not.toBe(undefined)

    const killPlayer: HitData = {
        "hid": "2884433",
        "source": "attack",
        "pid": "zNrJc9",
        "projectile": "stone",
        "id": "BadgerMage",
        "anim": "slash1",
        "damage": 51,
        "kill": true
    }
    expect(killPlayer).not.toBe(undefined)

    const burn: HitData = {
        "source": "burn",
        "hid": "Casmer",
        "id": "833320",
        "damage": 538,
        "kill": false
    }
    expect(burn).not.toBe(undefined)

    const burn2: HitData = {
        "anim": "explode_c",
        "burn": true,
        "damage": 149,
        "hid": "3454686",
        "id": "PriestMain",
        "mobbing": 706,
        "pid": "R0sK4T",
        "projectile": "mmagic",
        "source": "attack"
    }
    expect(burn2).not.toBe(undefined)

    const cleave: HitData = {
        "anim": "slash1",
        "aoe": true,
        "damage": 3235,
        "hid": "earthWar",
        "id": "2549449",
        "kill": true,
        "lifesteal": 21,
        "no_lines": true,
        "pid": "PUc91s",
        "projectile": "momentum",
        "source": "cleave"
    }
    expect(cleave).not.toBe(undefined)

    const curse: HitData = {
        "hid": "Tsumiki",
        "source": "curse",
        "pid": "Rfrh76",
        "projectile": "curse",
        "id": "808131",
        "anim": "curse",
        "damage": 0
    }
    expect(curse).not.toBe(undefined)

    const evaded: HitData = {
        "pid": "k8tW8A",
        "hid": "2866470",
        "id": "DoubleG",
        "anim": "miss",
        "damage": 0,
        "evade": true
    }
    expect(evaded).not.toBe(undefined)

    const heal: HitData = {
        "hid": "earthPri",
        "source": "heal",
        "pid": "lGUeW1",
        "projectile": "fireball",
        "id": "earthPri",
        "anim": "heal",
        "heal": 768
    }
    expect(heal).not.toBe(undefined)

    const manaSteal: HitData = {
        "hid": "Trexnamedtut",
        "source": "attack",
        "pid": "gd3S5D",
        "projectile": "fireball",
        "id": "2859937",
        "anim": "explode_c",
        "damage": 2537,
        "lifesteal": 70,
        "manasteal": 3,
        "kill": true
    }
    expect(manaSteal).not.toBe(undefined)

    const missData: HitData = {
        "pid": "JGgAkq",
        "hid": "Trexnamedtut",
        "id": "2859876",
        "anim": "miss",
        "damage": 0,
        "miss": true
    }
    expect(missData).not.toBe(undefined)

    const reflected: HitData = {
        "pid": "LPT7be",
        "hid": "3982690",
        "id": "earthPri",
        "anim": "reflect",
        "damage": 0,
        "reflect": 154
    }
    expect(reflected).not.toBe(undefined)
})