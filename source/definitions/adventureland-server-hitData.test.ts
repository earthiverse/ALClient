import { HitData } from "./adventureland-server"

/** 
 * The following is from socket events received 2021-04-22
 * It is used to confirm type correctness
 */

test("HitData type validation", async () => {
    const kill: HitData = {
        "hid": "Wolfff",
        "source": "attack",
        "pid": "wMoXut",
        "projectile": "momentum",
        "id": "808131",
        "anim": "slash1",
        "damage": 2323,
        "kill": true
    }
    expect(kill).not.toBe(undefined)

    const burn: HitData = {
        "source":"burn",
        "hid":"Casmer",
        "id":"833320",
        "damage":538,
        "kill":false
    }
    expect(burn).not.toBe(undefined)

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
})