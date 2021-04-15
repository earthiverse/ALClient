# ALClient README

**NOTE: This code is very much a work in progress. Things will quickly change, and your code will likely break between changes.**

-----

This is a node client for the game [Adventure Land - The Code MMORPG](https://adventure.land). It's 99% custom code that seems *much* more efficient than running the code in-game, or using the game's official CLI.

This code is **NOT** a 1-to-1 drop in, like [ALBot](https://github.com/NexusNull/ALBot) aims to be. The code that you run in the console in game **WILL NOT** run as-is if you try to run your in-game code using this project.

## Requirements

* Node
  * Tested with **14.9**

## Basic Usage

1. Install the package using `npm install alclient`.
2. Add a `credentials.json` file that looks like this:

```javascript
{
    "email": "hyprkookeez@gmail.com",
    "password": "thisisnotmyrealpasswordlol"
}
```

3. Copy and run this example script that prepares the pathfinder, logs in, moves your character around to different maps, then disconnects.

```typescript
import AL from "alclient"

async function run() {
    await Promise.all([AL.Game.loginJSONFile("../credentials.json"), AL.Pathfinder.prepare()])

    const merchant = await AL.Game.startMerchant("earthMer2", "ASIA", "I")
    console.log("Moving to main")
    await merchant.smartMove("main")
    console.log("Moving to cyberland")
    await merchant.smartMove("cyberland")
    console.log("Moving to halloween")
    await merchant.smartMove("halloween")

    AL.Game.disconnect()
}
run()
```

## Notable differences from 'native' Adventure Land code.

1. Most actions like `move()` are on the `Character` in alclient.

```typescript
import AL from "alclient"

async function run() {
    await AL.Game.loginJSONFile("../credentials.json")
    const ranger = await AL.Game.startRanger("earthiverse", "US", "I")

    while (true) {
        await ranger.move(50, 50)
        await ranger.move(50, -50)
        await ranger.move(-50, -50)
        await ranger.move(-50, 50)
    }
}
run()
```

2. Some functions are renamed, most notably `attack()` is `basicAttack()`.

```typescript
import AL from "alclient"

async function run() {
    await Promise.all([AL.Game.loginJSONFile("../credentials.json"), AL.Pathfinder.prepare()])
    const ranger = await AL.Game.startRanger("earthiverse", "US", "I")

    await ranger.smartMove("hen")

    while (true) {
        if (ranger.canUse("attack") && ranger.isPVP()) {
            // We can attack players
            for (const [, player] of ranger.players) {
                if (AL.Tools.distance(ranger, player) > ranger.range) continue // Too far to attack

                // We found a player to attack!
                await ranger.basicAttack(player.id)
                break
            }

        }
        if (ranger.canUse("attack")) {
            for (const [, entity] of ranger.entities) {
                if (AL.Tools.distance(ranger, entity) > ranger.range) continue // Too far to attack
                
                // We found an entity to attack!
                await ranger.basicAttack(entity.id)
                break
            }
        }
    }
}
run()
```
