**NOTE: This code is very much a work in progress. Things will quickly change, and your code will likely break between changes.**

-----

This is a node client for the game [Adventure Land - The Code MMORPG](https://adventure.land). It's 99% custom code that seems *much* more efficient than running the code in-game, or using the game's official CLI.

This code is **NOT** a 1-to-1 drop in, like [ALBot](https://github.com/NexusNull/ALBot) aims to be. The code that you run in the console in game **WILL NOT** run as-is if you try to run it using this project.

# Requirements
* Node
    * Tested with **14.13.1**

# Basic Usage
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
import alclient from "alclient"
const { Game, Pathfinder } = alclient

async function run() {
    await Promise.all([Game.loginJSONFile("../credentials.json"), Pathfinder.prepare()])

    const merchant = await Game.startMerchant("earthMer2", "ASIA", "I")
    console.log("Moving to main")
    await merchant.smartMove("main")
    console.log("Moving to cyberland")
    await merchant.smartMove("cyberland")
    console.log("Moving to halloween")
    await merchant.smartMove("halloween")

    Game.disconnect()
}
run()
```