import { PartyData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-05-10
 * It is used to confirm type correctness
 */

test("PartyData type validation", async () => {
    const join: PartyData = {
        list: [
            "earthiverse",
            "earthMag",
            "earthMag2",
            "cclair",
            "fathergreen",
            "kakaka",
            "lolwutpear",
            "shoopdawhoop",
            "ytmnd"
        ],
        party: {
            earthiverse: {
                skin: "marmor5a",
                level: 88,
                type: "ranger",
                x: -1202.5,
                y: -66,
                in: "main",
                map: "main",
                share: 0.03257552565896711,
                pdps: 385742.19239877304,
                l: 9,
                xp: 40,
                luck: 0,
                gold: 5
            },
            earthMag: {
                skin: "fmage",
                level: 79,
                type: "mage",
                x: -1152.5,
                y: -16,
                in: "main",
                map: "main",
                share: 0.03257552565896711,
                pdps: 135383.53496847712,
                l: 9,
                xp: 40,
                luck: 0,
                gold: 5
            },
            earthMag2: {
                skin: "fmage",
                level: 74,
                type: "mage",
                x: -1252.5,
                y: -116,
                in: "main",
                map: "main",
                share: 0.03257552565896711,
                pdps: 149930.58958720914,
                l: 9,
                xp: 40,
                luck: 0,
                gold: 5
            },
            cclair: {
                skin: "mbody4g",
                level: 91,
                type: "mage",
                x: 1630.4252951147002,
                y: -874.9187882469664,
                in: "Fbt4eyFwLI8PkOlPWRTHnxIB",
                map: "crypt",
                share: 0.29623636611806886,
                pdps: 1903985.3091158269,
                l: 9,
                xp: 40,
                luck: 0,
                gold: 5
            },
            fathergreen: {
                skin: "mbody4g",
                level: 91,
                type: "priest",
                x: 1859.211698592765,
                y: -881.4034369881283,
                in: "Fbt4eyFwLI8PkOlPWRTHnxIB",
                map: "crypt",
                share: 0.29623636611806886,
                pdps: 723823.6745224842,
                l: 9,
                xp: 40,
                luck: 0,
                gold: 5
            },
            kakaka: {
                skin: "mbody2d",
                level: 89,
                type: "rogue",
                x: 1681.070481436204,
                y: -871.9451899420468,
                in: "Fbt4eyFwLI8PkOlPWRTHnxIB",
                map: "crypt",
                share: 0.29623636611806886,
                pdps: 4088221.9608696434,
                l: 9,
                xp: 40,
                luck: 0,
                gold: 5
            },
            lolwutpear: {
                skin: "mbody5f",
                level: 63,
                type: "mage",
                x: 346.5,
                y: -747,
                in: "halloween",
                map: "halloween",
                share: 0.004521440445185867,
                pdps: 132,
                l: 9,
                xp: 40,
                luck: 0,
                gold: 5
            },
            shoopdawhoop: {
                skin: "mbody5f",
                level: 64,
                type: "mage",
                x: 326.5,
                y: -747,
                in: "halloween",
                map: "halloween",
                share: 0.004521440445185867,
                pdps: 0,
                l: 9,
                xp: 40,
                luck: 0,
                gold: 5
            },
            ytmnd: {
                skin: "mbody5f",
                level: 64,
                type: "mage",
                x: 366.5,
                y: -747,
                in: "halloween",
                map: "halloween",
                share: 0.004521440445185867,
                pdps: 0,
                l: 9,
                xp: 40,
                luck: 0,
                gold: 5
            }
        },
        message: "ytmnd joined the party"
    }
    expect(join).not.toBe(undefined)
})