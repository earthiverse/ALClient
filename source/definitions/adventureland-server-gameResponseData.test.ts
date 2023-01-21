import { GameResponseData } from "./adventureland-server"

/**
 * The following is from socket events received 2022-04-30 to 2022-09-24
 * It is used to confirm type correctness
 */

test("GameEventData type validation", async () => {
    const donate: GameResponseData = {
        "gold": 1,
        "response": "donate_low",
        "xprate": 3.2
    }
    expect(donate).toBeDefined()

    const donateGum: GameResponseData = {
        "gold": 123456,
        "response": "donate_gum",
        "xprate": 3.2
    }
    expect(donateGum).toBeDefined()

    const donateThanks: GameResponseData = {
        "gold": 1000000,
        "response": "donate_thx",
        "xprate": 3.2
    }
    expect(donateThanks).toBeDefined()

    const lostAndFoundInfo: GameResponseData = {
        "gold": 32279215800.782036,
        "response": "lostandfound_info"
    }
    expect(lostAndFoundInfo).toBeDefined()

    const threeShotFailNoMP: GameResponseData = {
        "failed": true,
        "place": "3shot",
        "response": "no_mp"
    }
    expect(threeShotFailNoMP).toBeDefined()

    const threeShotFailCooldown: GameResponseData = {
        "failed": true,
        "ms": 622.4492040176268,
        "place": "3shot",
        "response": "cooldown",
        "skill": "3shot"
    }
    expect(threeShotFailCooldown).toBeDefined()

    const threeShotSuccess: GameResponseData = {
        "place": "3shot",
        "response": "data",
        "success": true
    }
    expect(threeShotSuccess).toBeDefined()

    const attackFailCooldown: GameResponseData = {
        "failed": true,
        "id": "932688",
        "ms": 409.6360189217063,
        "place": "attack",
        "response": "cooldown",
        "skill": "attack"
    }
    expect(attackFailCooldown).toBeDefined()

    const attackFailNoMP: GameResponseData = {
        "failed": true,
        "id": "522687",
        "place": "attack",
        "reason": "no_mp",
        "response": "data"
    }
    expect(attackFailNoMP).toBeDefined()

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
    expect(attackSuccess).toBeDefined()

    const buySuccess: GameResponseData = {
        "cevent": "buy",
        "cost": 100,
        "name": "mpot1",
        "num": 38,
        "place": "buy",
        "q": 1,
        "response": "buy_success",
        "success": true
    }
    expect(buySuccess).toBeDefined()

    const setHomeSuccess: GameResponseData = {
        "home": "USII",
        "place": "set_home",
        "response": "home_set",
        "success": true
    }
    expect(setHomeSuccess).toBeDefined()

    const setHomeFail: GameResponseData = {
        "failed": true,
        "hours": 35.94051777777778,
        "place": "set_home",
        "response": "sh_time"
    }
    expect(setHomeFail).toBeDefined()
})