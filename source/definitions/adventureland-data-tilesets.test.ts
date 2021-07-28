/* eslint-disable sort-keys */
import { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 683 (2021-07-28)
 * It is used to confirm type correctness
 */

test("G.tilesets type validation", async () => {
    const G_tilesets: Pick<GData, "tilesets"> = {
        "tilesets": {
            "house": {
                "file": "/images/tiles/map/house.png?v=4"
            },
            "puzzle": {
                "frames": 3,
                "frame_width": 16,
                "file": "/images/tiles/map/puzzle.png?v=7"
            },
            "custom2": {
                "file": "/images/tiles/map/custom2.png?v=14"
            },
            "ship": {
                "file": "/images/tiles/map/ship.png"
            },
            "dungeon": {
                "file": "/images/tiles/map/dungeon.png?v=5"
            },
            "stands": {
                "file": "/images/tiles/items/stands.png?v=6"
            },
            "winter": {
                "file": "/images/tiles/map/winter.png?v=5"
            },
            "custom": {
                "file": "/images/tiles/map/custom.png?v=12"
            },
            "outside": {
                "file": "/images/tiles/map/outside.png?v=7"
            },
            "doors": {
                "file": "/images/tiles/map/doors.png"
            },
            "new": {
                "file": "/images/tiles/map/new.png?v=15"
            },
            "beach": {
                "file": "/images/tiles/map/beach_v2.png"
            },
            "custom_a": {
                "frames": 3,
                "frame_width": 16,
                "file": "/images/tiles/map/custom_a.png?v=5"
            },
            "water": {
                "frames": 3,
                "frame_width": 48,
                "file": "/images/tiles/map/water_updated.png?v=13"
            },
            "ash": {
                "file": "/images/tiles/map/ashlands.png"
            },
            "fort": {
                "file": "/images/tiles/map/fort.png?v=3"
            },
            "dark": {
                "file": "/images/tiles/map/dark_dimension.png?v=0"
            },
            "inside": {
                "file": "/images/tiles/map/inside.png?v=9"
            },
            "tree": {
                "file": "/images/tiles/map/tree.png"
            },
            "jungle": {
                "file": "/images/tiles/map/jungle.png?v=2"
            },
            "castle": {
                "file": "/images/tiles/map/castle.png?v=2"
            },
            "ruins": {
                "file": "/images/tiles/map/ruins.png?v=2"
            },
            "licht": {
                "file": "/images/tiles/monsters/monster_lich.png"
            }
        }
    }
    expect(G_tilesets).not.toBe(undefined)
})