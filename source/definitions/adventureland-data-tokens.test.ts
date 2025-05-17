import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 749 (2022-08-28)
 * It is used to confirm type correctness
 */

test("G.tokens type validation", async () => {
    const G_tokens: Pick<GData, "tokens"> = {
        tokens: {
            friendtoken: {},
            funtoken: {
                confetti: 0.01,
                exoarm: 999,
                mshield: 10,
                partyhat: 2,
                rabbitsfoot: 120,
                smoke: 0.05,
                xshield: 200,
            },
            monstertoken: {
                armorbox: 5,
                fieldgen0: 100,
                funtoken: 20,
                mcarmor: 12,
                mcboots: 15,
                mcgloves: 8,
                mchat: 7,
                mcpants: 11,
                mmarmor: 12,
                mmgloves: 8,
                mmhat: 7,
                mmpants: 11,
                mmshoes: 15,
                mparmor: 12,
                mpgloves: 8,
                mphat: 7,
                mppants: 11,
                mpshoes: 15,
                mrarmor: 12,
                mrboots: 15,
                mrgloves: 8,
                mrhood: 7,
                mrnarmor: 12,
                mrnboots: 15,
                mrngloves: 8,
                mrnhat: 7,
                mrnpants: 11,
                mrpants: 11,
                mwarmor: 12,
                mwboots: 15,
                mwgloves: 8,
                mwhelmet: 7,
                mwpants: 11,
                networkcard: 2000,
                tracker: 4,
                troll: 14,
            },
            pvptoken: {
                armorbox: 1,
                hammer: 120,
                harbringer: 25,
                spear: 1,
                t2bow: 1,
                weaponbox: 1,
            },
        },
    }
    expect(G_tokens).toBeDefined()
})
