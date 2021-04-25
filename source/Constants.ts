import { MonsterName } from "./definitions/adventureland-data"

export class Constants {
    /** Various client related things */
    static MAX_PINGS = 100
    static PING_EVERY_MS = 30000
    static STALE_PROJECTILE_MS = 10000
    static TIMEOUT = 1000
    static UPDATE_POSITIONS_EVERY_MS = 25

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

    /** Mongo related things */
    static MONGO_UPDATE_ENTITY_MS = 1000

    /** Monsters that are worth tracking in our database */
    static ONE_SPAWN_MONSTERS: MonsterName[] = ["dragold", "fvampire", "franky", "greenjr", "grinch", "jr", "mrgreen", "mrpumpkin", "mvampire", "phoenix", "pinkgoo", "snowman", "wabbit"]
    static SPECIAL_MONSTERS: MonsterName[] = ["cutebee", "dragold", "fvampire", "franky", "goldenbat", "greenjr", "grinch", "jr", "mrgreen", "mrpumpkin", "mvampire", "phoenix", "pinkgoo", "snowman", "tinyp", "wabbit"]
}