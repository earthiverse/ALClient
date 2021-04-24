import { PlayersData } from "./adventureland-server"

/** 
 * The following is from socket events received 2021-04-24
 * It is used to confirm type correctness
 */

test("PlayersData type validation", async () => {
    const playersData: PlayersData = [
        { "name": "LambChop", "map": "winterland", "age": 991, "level": 92, "type": "priest", "afk": 1, "party": "LambChop" },
        { "name": "Boado", "map": "main", "age": 262, "level": 81, "type": "ranger", "afk": 1, "party": "Nachura" },
        { "name": "Nachura", "map": "main", "age": 263, "level": 81, "type": "mage", "afk": 1, "party": "Nachura" },
        { "name": "Riano", "map": "main", "age": 263, "level": 81, "type": "mage", "afk": 1, "party": "Nachura" },
        { "name": "Suarez", "map": "main", "age": 262, "level": 70, "type": "merchant", "afk": 1, "party": "Nachura" },
        { "name": "Casmer", "map": "desertland", "age": 242, "level": 88, "type": "warrior", "afk": 1, "party": "Casmer" },
        { "name": "Ancilla", "map": "desertland", "age": 326, "level": 89, "type": "rogue", "afk": 1, "party": "Casmer" },
        { "name": "Buttercup", "map": "winterland", "age": 1002, "level": 90, "type": "warrior", "afk": 1, "party": "LambChop" },
        { "name": "Persephone", "map": "winterland", "age": 928, "level": 90, "type": "ranger", "afk": 1, "party": "LambChop" },
        { "name": "SophiaxI", "map": "desertland", "age": 323, "level": 77, "type": "merchant", "afk": 1, "party": "Casmer" },
        { "name": "Nindr", "map": "desertland", "age": 324, "level": 89, "type": "priest", "afk": 1, "party": "Casmer" },
        { "name": "earthMer2", "map": "cave", "age": 444, "level": 53, "type": "merchant", "afk": 0, "party": "" }]
    expect(playersData).not.toBe(undefined)
})