export class Constants {
    /** Various client related things */
    static MAX_PINGS = 100
    static PING_EVERY_MS = 30000
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
}