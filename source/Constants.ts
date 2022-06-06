import { MapName, MonsterName } from "./definitions/adventureland-data.js"

export class Constants {
    /** Various client related things */
    static PATHFINDER_FIRST_MAP: MapName = "main"
    static MAX_PINGS = 50
    static PING_EVERY_MS = 30000
    static CONNECT_TIMEOUT_MS = 10000
    static RECONNECT_TIMEOUT_MS = 40000
    static STALE_MONSTER_MS = 60000
    static STALE_PROJECTILE_MS = 10000
    static TIMEOUT = 1000
    static UPDATE_POSITIONS_EVERY_MS = 25 // Equivalent to 40 FPS

    /** Various distance related things */
    static MAX_VISIBLE_RANGE = 800
    static MAX_VISIBLE_RANGE_SQUARED = 640_000
    static NPC_INTERACTION_DISTANCE = 400
    static NPC_INTERACTION_DISTANCE_SQUARED = 160_000
    static DASH_DISTANCE = 40
    static DOOR_REACH_DISTANCE = 39
    static DOOR_REACH_DISTANCE_SQUARED = 1521
    static TRANSPORTER_REACH_DISTANCE = 159
    static TRANSPORTER_REACH_DISTANCE_SQUARED = 25_281
    static BASE = {
        h: 8,
        v: 7,
        vn: 2
    }

    /** Character size */
    static CHARACTER_WIDTH = 27
    static CHARACTER_HEIGHT = 34

    /** Miscellaneous game related things */
    static BANK_PACK_SIZE = 42
    static MAX_PARTY_SIZE = 9 // TODO: It might actually be 9 + 1 merchant?
    static PONTY_MARKUP = 1.2

    /** Mongo related things */
    static MONGO_UPDATE_MS = 5000

    /** Monsters that are worth tracking in our database */
    static MONSTER_RESPAWN_TIMES: { [T in MonsterName]?: number} = {
        "franky": 20 * 60 * 60 * 1000, // 20 hours (This is an estimate based on #game_events in Discord)
        "icegolem": 22 * 60 * 60 * 1000, // 22 hours (This is an estimate based on #game_events in Discord)
        "snowman": 20 * 60 * 60 * 1000 // 20 hours (This is an estimate based on #game_events in Discord) NOTE: If the winter event is happening, they respawn faster
    }
    static ONE_SPAWN_MONSTERS: MonsterName[] = ["dragold", "fvampire", "franky", "greenjr", "grinch", "icegolem", "jr", "mrgreen", "mrpumpkin", "mvampire", "phoenix", "pinkgoo", "rudolph", "skeletor", "slenderman", "snowman", "stompy", "tiger", "wabbit"]
    static SERVER_INFO_MONSTERS: MonsterName[] = ["dragold", "franky", "grinch", "icegolem", "pinkgoo", "slenderman", "snowman", "tiger", "wabbit"]
    static SPECIAL_MONSTERS: MonsterName[] = [
        // Noraml monsters
        "cutebee", "dragold", "fvampire", "franky", "goldenbat", "greenjr", "grinch", "icegolem", "jr", "mrgreen", "mrpumpkin", "mvampire", "phoenix", "pinkgoo", "rudolph", "skeletor", "slenderman", "snowman", "stompy", "tiger", "tinyp", "wabbit",
        // Crypt monsters
        "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "vbat", "xmagefi", "xmagefz", "xmagen", "xmagex"
    ]
}