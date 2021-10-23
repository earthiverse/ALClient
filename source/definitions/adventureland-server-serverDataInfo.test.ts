import { ServerInfoData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-04-23
 * It is used to confirm type correctness
 */

test("ServerInfoData type validation", async () => {
    const serverInfos: ServerInfoData[] = [
        // Nothing special
        {},
        // One special monster
        {
            "snowman": { "live": true, "map": "winterland", "hp": 1800, "max_hp": 1800, "x": 1215.967342559024, "y": -893.8701953344164 }
        },
        // Two special monsters
        {
            "snowman": { "live": true, "map": "winterland", "hp": 2648, "max_hp": 3000, "x": 1166.5833760719556, "y": -851.0492250610178 },
            "franky": { "live": true, "map": "level2w", "hp": 120000000, "max_hp": 120000000, "x": -367.3625548158354, "y": 179.9524135479731 }
        },
        // With target
        {
            "snowman": { "live": true, "map": "winterland", "hp": 1097, "max_hp": 1200, "target": "earthWar", "x": 1297.5140892582497, "y": -758.6716972073393 },
            "franky": { "live": true, "map": "level2w", "hp": 120000000, "max_hp": 120000000, "x": -442.1560348761702, "y": 138.29909855870474 }
        },
        // Easter Event
        {
            "wabbit": {
                "live": false,
                "spawn": "2021-03-25T21:49:01.074Z",
            },
            "egghunt": true,
            "franky": {
                "x": -384.01145233491366,
                "y": 113.42281882021942,
                "live": true,
                "map": "level2w",
                "hp": 120000000,
                "max_hp": 120000000,
            }
        },
        // Halloween Event
        {
            "mrpumpkin": {
                "live": false,
                "spawn": "2021-10-23T22:19:07.741Z"
            },
            "mrgreen": {
                "live": false,
                "spawn": "2021-10-23T22:46:21.998Z"
            },
            "slenderman": {
                "live": true,
                "map": "halloween",
                "hp": 66666,
                "max_hp": 66666
            },
            "halloween": true
        }
    ]
    for (const serverInfo of serverInfos) expect(serverInfo).not.toBe(undefined)
})