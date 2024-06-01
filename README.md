# ALClient

This is a node client for the game [Adventure Land - The Code MMORPG](https://adventure.land).

This code is **NOT** compatible with scripts written directly in the game. If you are just looking for a way to run your code headless, or with fewer resources, I recommend trying [caracAL](https://github.com/numbereself/caracAL).

## Basic Usage

1. Install the latest version of [node](https://nodejs.org/en/download/).
2. Create a new folder for your project
3. Run `npm init` and enter prompts. Check out [this link](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/#usingnpminittoinitializeaproject) for more information.
4. If you are using Typescript, which is strongly recommended, install it by running `npm install typescript`. Save your files as `.ts` files instead of `.js` files.
5. If you are using Typescript, build your code by running `npx tsc`.

### Notes

In your tsconfig.json, make sure `"esModuleInterop": true` is set.

In your package.json, make sure `"type": "module"` is set.

### General Steps

1. Install the package using `npm install alclient`.
2. Add a `credentials.json` file that looks like this:

```javascript
{
    "email": "hyprkookeez@gmail.com",
    "password": "thisisnotmyrealpasswordlol"
}
```

You can also optionally add a Mongo URI to track various data with a mongo database.

```javascript
{
    "email": "hyprkookeez@gmail.com",
    "password": "thisisnotmyrealpasswordlol",
    "mongo": "mongodb://localhost:27017/alclient"
}
```

3. Copy and run this example script that prepares the pathfinder, logs in, moves your character around to different maps, then disconnects.

```typescript
import AL from "alclient"

async function run() {
    await Promise.all([AL.Game.loginJSONFile("../credentials.json"), AL.Game.getGData()])
    await AL.Pathfinder.prepare(AL.Game.G)

    // Set `<<MERCHANT_NAME>>` to your merchant
    const merchant = await AL.Game.startMerchant("<<MERCHANT_NAME>>", "ASIA", "I")
    console.log("Moving to main")
    await merchant.smartMove("main")
    console.log("Moving to cyberland")
    await merchant.smartMove("cyberland")
    console.log("Moving to halloween")
    await merchant.smartMove("halloween")

    merchant.disconnect()
}
run()
```

4. While the code is running, you should be able to see your character using [/comm](https://adventure.land/comm)

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
    await Promise.all([AL.Game.loginJSONFile("../credentials.json"), AL.Game.getGData()])
    await AL.Pathfinder.prepare(AL.Game.G)
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
