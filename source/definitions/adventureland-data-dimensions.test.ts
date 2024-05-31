/* eslint-disable sort-keys */
import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 683 (2021-07-28)
 * It is used to confirm type correctness
 */

test("G.dimensions type validation", async () => {
    const G_dimensions: Pick<GData, "dimensions"> = {
        dimensions: {
            rudolph: [60, 64, -3],
            wolfie: [60, 48, -3],
            fireroamer: [24, 40, -3],
            xscorpion: [30, 30, 1.5],
            kitty3: [20, 20, 0, 6, 5],
            boar: [42, 36, -4],
            skeletor: [24, 36, -4],
            poisio: [36, 34, -4],
            kitty4: [20, 20, 0, 6, 5],
            scorpion: [30, 30, 1.5],
            kitty1: [20, 20, 0, 6, 5],
            frog: [36, 24, -4],
            kitty2: [20, 20, 0, 6, 5],
            puppy4: [20, 20, 0, 6, 5],
            plantoid: [30, 36, -2],
            hen: [20, 20],
            jrat: [30, 22, -1],
            wabbit: [30, 22],
            bbpompom: [32, 35, 1],
            spider: [30, 20, 1.5],
            armadillo: [36, 34, -4],
            snake: [30, 24, -1],
            puppy3: [20, 20, 0, 6, 5],
            bscorpion: [30, 30],
            puppy1: [20, 20, 0, 6, 5],
            bat: [38, 36, -1],
            iceroamer: [22, 36, -2],
            grinch: [23, 36],
            crabx: [36, 26, -1],
            bee: [26, 33],
            pinkgoblin: [26, 30],
            minimush: [23, 22, -1],
            squig: [34, 26, -10, 1],
            default_character: [26, 35],
            oneeye: [30, 40],
            puppy2: [20, 20, 0, 6, 5],
            rooster: [20, 20],
            rat: [30, 22, -1],
            mole: [30, 20, -1],
            gscorpion: [30, 30, 1.5],
            goo: [23, 22, -3, 7, 6],
            dknight2: [47, 48],
            croc: [45, 32, -3],
            ent: [47, 50, -3],
            mechagnome: [18, 26],
            stoneworm: [30, 24, -1],
            pinkgoo: [23, 22, -1],
            squigtoad: [36, 30, -4],
            phoenix: [61, 55],
            pppompom: [23, 22, -1],
            arcticbee: [26, 33],
            osnake: [30, 22, -1],
            prat: [30, 22, 5],
            ghost: [27, 35, -2],
            cgoo: [23, 22, -3],
            tortoise: [36, 27, -3],
            bigbird: [58, 54],
            goldenbat: [38, 36, -1],
            wolf: [60, 48, -3],
        },
    }
    expect(G_dimensions).toBeDefined()
})
