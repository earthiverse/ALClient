import { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 666 (2021-04-27)
 * It is used to confirm type correctness
 */

test("G.emotions type validation", async () => {
    const G_emotions: Pick<GData, "emotions"> = {
        "emotions": {
            "drop_egg": {
                "fx": "drop_egg",
                "cooldown": 2000
            },
            "hearts_single": {
                "fx": "hearts_single",
                "cooldown": 2000
            }
        }
    }
    expect(G_emotions).not.toBe(undefined)
})