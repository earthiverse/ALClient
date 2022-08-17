import { GameResponseData } from "./adventureland-server"

/**
 * The following is from socket events received 2022-04-30 to 2022-08-17
 * It is used to confirm type correctness
 */

test("GameEventData type validation", async () => {
    const donate: GameResponseData = {
        "gold": 1,
        "response": "donate_low",
        "xprate": 3.2
    }
    expect(donate).not.toBe(undefined)

    const donateGum: GameResponseData = {
        "gold": 123456,
        "response": "donate_gum",
        "xprate": 3.2
    }
    expect(donateGum).not.toBe(undefined)

    const donateThanks: GameResponseData = {
        "gold": 1000000,
        "response": "donate_thx",
        "xprate": 3.2
    }
    expect(donateThanks).not.toBe(undefined)

    const lostAndFoundInfo: GameResponseData = {
        "gold": 32279215800.782036,
        "response": "lostandfound_info"
    }
    expect(lostAndFoundInfo).not.toBe(undefined)

    const threeShotFailNoMP: GameResponseData = {
        "failed": true,
        "place": "3shot",
        "response": "no_mp"
    }
    expect(threeShotFailNoMP).not.toBe(undefined)

    const threeShotFailCooldown: GameResponseData = {
        "failed": true,
        "ms": 622.4492040176268,
        "place": "3shot",
        "response": "cooldown",
        "skill": "3shot"
    }
    expect(threeShotFailCooldown).not.toBe(undefined)

    const threeShotSuccess: GameResponseData = {
        "place": "3shot",
        "response": "data",
        "success": true
    }
    expect(threeShotSuccess).not.toBe(undefined)

    const attackFailCooldown: GameResponseData = {
        "failed": true,
        "id": "932688",
        "ms": 409.6360189217063,
        "place": "attack",
        "response": "cooldown",
        "skill": "attack"
    }

    const attackFailNoMP: GameResponseData = {
        "failed": true,
        "id": "522687",
        "place": "attack",
        "reason": "no_mp",
        "response": "data"
    }
    expect(attackFailNoMP).not.toBe(undefined)

    const attackSuccess: GameResponseData = {
        "attacker": "attacking",
        "damage": 859,
        "eta": 400,
        "m": 0,
        "pid": "cdaC7L",
        "place": "attack",
        "projectile": "arrow",
        "response": "data",
        "source": "attack",
        "target": "914530",
        "type": "attack",
        "x": -277.6960744236569,
        "y": 850.4417119785537
    }
    expect(attackSuccess).not.toBe(undefined)
})