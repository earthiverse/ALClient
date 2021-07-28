/* eslint-disable sort-keys */
import { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 683 (2021-07-28)
 * It is used to confirm type correctness
 */

test("G.tokens type validation", async () => {
    const G_tokens: Pick<GData, "tokens"> = {
        "tokens": {
            "pvptoken": {
                "harbringer": 25,
                "spear": 1,
                "weaponbox": 1,
                "armorbox": 1,
                "t2bow": 1,
                "hammer": 120
            },
            "funtoken": {
                "partyhat": 2,
                "rabbitsfoot": 120,
                "mshield": 10,
                "exoarm": 999,
                "xshield": 200,
                "smoke": 0.05,
                "confetti": 0.01
            },
            "monstertoken": {
                "mcpants": 11,
                "mrnhat": 7,
                "mpgloves": 8,
                "networkcard": 2000,
                "mcboots": 15,
                "mparmor": 12,
                "mppants": 11,
                "fieldgen0": 100,
                "mmhat": 7,
                "mrgloves": 8,
                "mrnboots": 15,
                "mmarmor": 12,
                "mcgloves": 8,
                "mwboots": 15,
                "mmshoes": 15,
                "troll": 14,
                "mchat": 7,
                "mphat": 7,
                "mrarmor": 12,
                "mmgloves": 8,
                "mwgloves": 8,
                "mwpants": 11,
                "mrngloves": 8,
                "armorbox": 5,
                "mrhood": 7,
                "tracker": 4,
                "mcarmor": 12,
                "mpshoes": 15,
                "mrboots": 15,
                "mrnpants": 11,
                "mwarmor": 12,
                "mmpants": 11,
                "mrpants": 11,
                "mrnarmor": 12,
                "mwhelmet": 7
            }
        }
    }
    expect(G_tokens).not.toBe(undefined)
})