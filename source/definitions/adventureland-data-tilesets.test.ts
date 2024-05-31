/* eslint-disable sort-keys */
import { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 683 (2021-07-28)
 * It is used to confirm type correctness
 */

test("G.tilesets type validation", async () => {
    const G_tilesets: Pick<GData, "tilesets"> = {
        tilesets: {
            ash: {
                file: "/images/tiles/map/ashlands.png",
            },
            beach: {
                file: "/images/tiles/map/beach_v2.png",
            },
            castle: {
                file: "/images/tiles/map/castle.png?v=2",
            },
            custom: {
                file: "/images/tiles/map/custom.png?v=12",
            },
            custom2: {
                file: "/images/tiles/map/custom2.png?v=14",
            },
            custom_a: {
                file: "/images/tiles/map/custom_a.png?v=5",
                frame_width: 16,
                frames: 3,
            },
            dark: {
                file: "/images/tiles/map/dark_dimension.png?v=0",
            },
            doors: {
                file: "/images/tiles/map/doors.png",
            },
            dungeon: {
                file: "/images/tiles/map/dungeon.png?v=5",
            },
            fort: {
                file: "/images/tiles/map/fort.png?v=3",
            },
            house: {
                file: "/images/tiles/map/house.png?v=4",
            },
            inside: {
                file: "/images/tiles/map/inside.png?v=9",
            },
            jungle: {
                file: "/images/tiles/map/jungle.png?v=2",
            },
            licht: {
                file: "/images/tiles/monsters/monster_lich.png",
            },
            lights: {
                file: "/images/tiles/map/lights.png?v=3",
                light: "yes",
            },
            new: {
                file: "/images/tiles/map/new.png?v=15",
            },
            outside: {
                file: "/images/tiles/map/outside.png?v=7",
            },
            puzzle: {
                file: "/images/tiles/map/puzzle.png?v=7",
                frame_width: 16,
                frames: 3,
            },
            ruins: {
                file: "/images/tiles/map/ruins.png?v=2",
            },
            ship: {
                file: "/images/tiles/map/ship.png",
            },
            stands: {
                file: "/images/tiles/items/stands.png?v=8",
            },
            tree: {
                file: "/images/tiles/map/tree.png",
            },
            water: {
                file: "/images/tiles/map/water_updated.png?v=13",
                frame_width: 48,
                frames: 3,
            },
            winter: {
                file: "/images/tiles/map/winter.png?v=5",
            },
        },
    }
    expect(G_tilesets).toBeDefined()
})
