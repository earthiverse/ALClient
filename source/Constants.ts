import type { MapName, MonsterName } from "./definitions/adventureland-data.js"

export class Constants {
    // Various client related things
    static PATHFINDER_FIRST_MAP: MapName = "main"
    static MAX_PINGS = 50
    static PING_EVERY_MS = 30000
    static CONNECT_TIMEOUT_MS = 10000
    static RECONNECT_TIMEOUT_MS = 40000
    static STALE_MONSTER_MS = 60000
    static STALE_PROJECTILE_MS = 10000
    /** How often to check smart move's `stopIfTrue` option */
    static SMART_MOVE_STOP_CHECK_MS = 1000
    /** How long we wait for a response from the server before rejecting the promise */
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
        vn: 2,
    }

    /** Character size */
    static CHARACTER_WIDTH = 27
    static CHARACTER_HEIGHT = 34

    /** Miscellaneous game related things */
    static BANK_PACK_SIZE = 42
    static MAX_PARTY_SIZE = 9 // TODO: It might actually be 9 + 1 merchant?
    /** Ponty sells items for more than `G.items[itemName].g`. */
    static PONTY_MARKUP = 1.2
    /**
     * @deprecated use `G.multipliers.buy_to_sell` instead
     *
     * NPCs buy items for less than `G.items[itemName].g`. They pay 0.6x that `g` value.
     */
    static NPC_SELL_TAX = 0.6

    /** Mongo related things */
    static MONGO_UPDATE_MS = 5000

    static BANK_MAPS: MapName[] = ["bank", "bank_b", "bank_u"]

    /** Monsters that are worth tracking in our database */
    static MONSTER_RESPAWN_TIMES: { [T in MonsterName]?: number } = {
        snowman: 20 * 60 * 60 * 1000, // 20 hours (This is an estimate based on #game_events in Discord) NOTE: If the winter event is happening, they respawn faster
    }
    static ONE_SPAWN_MONSTERS: MonsterName[] = [
        "crabxx",
        "dragold",
        "fvampire",
        "franky",
        "greenjr",
        "grinch",
        "icegolem",
        "jr",
        "mrgreen",
        "mrpumpkin",
        "mvampire",
        "phoenix",
        "pinkgoo",
        "rharpy",
        "rudolph",
        "skeletor",
        "slenderman",
        "snowman",
        "stompy",
        "tiger",
        "wabbit",
    ]
    static SERVER_INFO_MONSTERS: MonsterName[] = [
        "crabxx",
        "dragold",
        "franky",
        "grinch",
        "icegolem",
        "mrgreen",
        "mrpumpkin",
        "pinkgoo",
        "slenderman",
        "snowman",
        "tiger",
        "wabbit",
    ]
    static SPECIAL_MONSTERS: MonsterName[] = [
        // Noraml monsters
        "crabxx",
        "cutebee",
        "dragold",
        "fvampire",
        "franky",
        "gbluepro",
        "ggreenpro",
        "goldenbat",
        "goldenbot",
        "gredpro",
        "gpurplepro",
        "greenjr",
        "grinch",
        "harpy",
        "icegolem",
        "jr",
        "mrgreen",
        "mrpumpkin",
        "mvampire",
        "phoenix",
        "pinkgoo",
        "rharpy",
        "rudolph",
        "skeletor",
        "slenderman",
        "snowman",
        "spiderbl",
        "spiderbr",
        "spiderr",
        "stompy",
        "tiger",
        "tinyp",
        "wabbit",
        // Goo Brawl
        "rgoo",
        // Crypt monsters
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a7",
        "a8",
        "vbat",
        "xmagefi",
        "xmagefz",
        "xmagen",
        "xmagex",
    ]
}
