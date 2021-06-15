import { MapName, MonsterName } from "./definitions/adventureland-data"

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
    static MAX_VISIBLE_RANGE = 600
    static NPC_INTERACTION_DISTANCE = 400
    static DOOR_REACH_DISTANCE = 40
    static TRANSPORTER_REACH_DISTANCE = 75
    static BASE = {
        h: 8,
        v: 7,
        vn: 2
    }

    /** Miscellaneous game related things */
    static BANK_PACK_SIZE = 42
    static MAX_PARTY_SIZE = 9 // TODO: It might actually be 9 + 1 merchant?
    static PONTY_MARKUP = 1.2

    /** Mongo related things */
    static MONGO_UPDATE_MS = 5000

    /** Monsters that are worth tracking in our database */
    static ONE_SPAWN_MONSTERS: MonsterName[] = ["dragold", "fvampire", "franky", "greenjr", "grinch", "jr", "mrgreen", "mrpumpkin", "mvampire", "phoenix", "pinkgoo", "rudolph", "snowman", "stompy", "wabbit"]
    static SPECIAL_MONSTERS: MonsterName[] = ["cutebee", "dragold", "fvampire", "franky", "goldenbat", "greenjr", "grinch", "jr", "mrgreen", "mrpumpkin", "mvampire", "phoenix", "pinkgoo", "rudolph", "snowman", "stompy", "tinyp", "wabbit"]
}