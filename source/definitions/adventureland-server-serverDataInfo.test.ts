import { ServerInfoData } from "./adventureland-server"

/** 
 * The following is from socket events received 2021-04-23
 * It is used to confirm type correctness
 */

test("ServerInfoData type validation", async () => {
    const serverInfos: ServerInfoData[] = [
        {},
        {
            "snowman": { "live": true, "map": "winterland", "hp": 2648, "max_hp": 3000, "x": 1166.5833760719556, "y": -851.0492250610178 },
            "franky": { "live": true, "map": "level2w", "hp": 120000000, "max_hp": 120000000, "x": -367.3625548158354, "y": 179.9524135479731 }
        },
        {
            "snowman": { "live": true, "map": "winterland", "hp": 1800, "max_hp": 1800, "x": 1215.967342559024, "y": -893.8701953344164 }
        }
    ]
    for (const serverInfo of serverInfos) expect(serverInfo).not.toBe(undefined)
})