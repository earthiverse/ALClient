import { Game } from "./Game"
import { Character } from "./Character"
import type { ServerData } from "./definitions/adventureland-server"
import { Entity } from "./Entity"
import { Pathfinder } from "./Pathfinder"
import type { MapName } from "./definitions/adventureland-data"
import type { IPosition } from "./definitions/adventureland"

let priest: Character
let warrior: Character
const serverData: ServerData = { region: "ASIA", name: "I", addr: "test", port: 0, players: 0, key: "ASIAI" }
beforeAll(async () => {
    await Game.getGData(true, false)
    await Pathfinder.prepare(Game.G)
    priest = new Character("", "", "", Game.G, serverData)
    priest.parseCharacter({
        id: "earthPri",
        party: "earthMer",
        owner: "12345",
        abs: false,
        afk: "code",
        age: 404,
        angle: -85.76360520094116,
        apiercing: 9,
        armor: 162,
        attack: 4149,
        blast: 0,
        c: {},
        cash: 3036,
        cc: 6.5,
        cid: 60164,
        controller: "",
        courage: 2,
        crit: 0.75,
        critdamage: 0,
        ctype: "priest",
        cx: {},
        dex: 48,
        dreturn: 1,
        emx: { drop_egg: 1 },
        esize: 28,
        evasion: 3.5,
        explosion: 0,
        fear: 0,
        firesistance: 0,
        for: 30.25,
        frequency: 1.1786382113821139,
        fzresistance: 1,
        going_x: 671,
        going_y: -225,
        gold: 100000793,
        goldm: 1.2,
        hp: 11262,
        in: "mtunnel",
        int: 399,
        isize: 42,
        items: [
            { name: "computer" },
            { name: "tracker" },
            { q: 999, name: "mpot1" },
            { q: 1000, name: "hpot1" },
            { q: 9999, name: "beewings" },
            { q: 1000, name: "beewings" },
        ],
        level: 86,
        lifesteal: 2.5,
        luckm: 1.4849999999999999,
        m: 451,
        manasteal: 0,
        map: "mtunnel",
        max_hp: 11262,
        max_mp: 7525,
        max_xp: 6200000000,
        mcourage: 19,
        miss: 0,
        move_num: 18588709,
        moving: true,
        mp: 7125,
        mp_cost: 56,
        mp_reduction: 0,
        name: "earthPri",
        pcourage: 2,
        pdps: 181472.0016944313,
        pnresistance: 0,
        q: {},
        range: 214,
        reflection: 5,
        resistance: 363,
        rip: false,
        rpiercing: 91,
        s: { mlifesteal: { ms: 3521515 }, mluck: { ms: 3567460, f: "earthMer", strong: true } },
        skin: "fpriest",
        slots: {
            amulet: { level: 5, name: "intamulet" },
            belt: { level: 4, name: "intbelt" },
            cape: { acc: 35946, ps: ["festive"], name: "angelwings", level: 8, ach: "festive", p: "festive" },
            chest: { name: "wattire", level: 9, p: "shiny", stat_type: "int" },
            earring1: { level: 5, name: "intearring" },
            earring2: { level: 5, name: "intearring" },
            elixir: { expires: "2021-01-10T00:58:46.062Z", name: "elixirluck", ex: true },
            gloves: { stat_type: "int", name: "wgloves", level: 9 },
            helmet: { name: "wcap", level: 9, stat_type: "int" },
            mainhand: { acc: 1, name: "firestaff", level: 9 },
            offhand: { name: "wbook1", level: 3 },
            orb: { name: "jacko", level: 4 },
            pants: { acc: 3076803, name: "wbreeches", level: 9, ach: "gooped", stat_type: "int" },
            ring1: { name: "intring", level: 4 },
            ring2: { level: 4, name: "intring" },
            shoes: { level: 9, stat_type: "int", name: "wshoes" },
        },
        speed: 69,
        str: 52,
        stun: 0,
        target: "2067865",
        targets: 0,
        tax: 0.01,
        vit: 111,
        x: 667.4007558893662,
        xp: 2890596969.9000006,
        xpm: 1.19,
        xrange: 25,
        y: -176.41020450644513,
    })

    warrior = new Character("", "", "", Game.G, serverData)
    warrior.parseCharacter({
        hp: 8021,
        max_hp: 17379,
        mp: 1603,
        max_mp: 2015,
        xp: 358723304.59999967,
        attack: 2500,
        frequency: 1.2302949574138597,
        speed: 80,
        range: 43,
        armor: 541,
        resistance: 369,
        level: 87,
        party: "earthMer",
        rip: false,
        afk: "code",
        target: "1376991",
        s: {
            mlifesteal: {
                ms: 3421915,
            },
            mluck: {
                ms: 3027636,
                f: "earthMer",
                strong: true,
            },
            monsterhunt: {
                sn: "US II",
                id: "bbpompom",
                c: 148,
                ms: 1429212,
                dl: true,
            },
        },
        c: {
            town: {
                ms: 2583,
            },
        },
        q: {},
        age: 566,
        pdps: 387649.7774099083,
        id: "earthWar",
        x: 600,
        y: -1275,
        moving: false,
        going_x: 0,
        going_y: 11,
        abs: false,
        move_num: 15980872,
        angle: 113.52706394742098,
        cid: 8380,
        controller: "",
        skin: "fwarrior",
        cx: {},
        slots: {
            ring1: {
                level: 4,
                name: "strring",
            },
            ring2: {
                name: "strring",
                level: 5,
            },
            earring1: {
                level: 5,
                name: "strearring",
            },
            earring2: {
                name: "strearring",
                level: 5,
            },
            belt: {
                level: 5,
                name: "strbelt",
            },
            mainhand: {
                acc: 5,
                ps: ["firehazard"],
                name: "fireblade",
                level: 9,
                p: "firehazard",
            },
            offhand: {
                name: "candycanesword",
                level: 9,
            },
            helmet: {
                acc: 1,
                level: 9,
                stat_type: "str",
                name: "helmet1",
            },
            chest: {
                stat_type: "str",
                name: "coat1",
                level: 9,
            },
            pants: {
                acc: 315748,
                name: "pants1",
                level: 9,
                ach: "gooped",
                stat_type: "str",
            },
            shoes: {
                level: 9,
                stat_type: "str",
                name: "wingedboots",
            },
            gloves: {
                stat_type: "str",
                name: "gloves1",
                level: 9,
            },
            amulet: {
                name: "stramulet",
                level: 5,
            },
            orb: {
                level: 0,
                name: "jacko",
            },
            elixir: {
                expires: "2021-04-11T03:16:29.795Z",
                name: "elixirluck",
                ex: true,
            },
            cape: {
                acc: 343382,
                ps: ["festive"],
                name: "cape",
                level: 8,
                ach: "festive",
                p: "festive",
                stat_type: "str",
            },
        },
        ctype: "warrior",
        owner: "12345",
        int: 62,
        str: 378,
        dex: 58,
        vit: 103,
        for: 42.75,
        mp_cost: 14,
        mp_reduction: 0,
        max_xp: 7900000000,
        goldm: 1.1,
        xpm: 1.1400000000000001,
        luckm: 1.35,
        map: "winterland",
        in: "winterland",
        isize: 42,
        esize: 20,
        gold: 500046945,
        cash: 4336,
        targets: 0,
        m: 48,
        evasion: 1.25,
        miss: 0,
        reflection: 0.5,
        lifesteal: 2.5,
        manasteal: 0,
        rpiercing: 31,
        apiercing: 9,
        crit: 0.75,
        critdamage: 4,
        dreturn: 1,
        tax: 0.01,
        xrange: 25,
        pnresistance: 0,
        firesistance: 0,
        fzresistance: 1,
        stun: 0,
        blast: 0,
        explosion: 0,
        courage: 18,
        mcourage: 2,
        pcourage: 2,
        fear: 0,
        items: [
            null,
            {
                name: "tracker",
            },
            {
                q: 1000,
                name: "mpot1",
            },
            {
                q: 1000,
                name: "hpot1",
            },
            {
                level: 4,
                name: "orbg",
            },
            {
                acc: 1,
                level: 8,
                name: "bataxe",
            },
            {
                name: "carrotsword",
                level: 8,
            },
            {
                name: "shield",
                level: 8,
            },
            {
                acc: 1,
                name: "basher",
                level: 8,
            },
            {
                name: "swordofthedead",
                level: 9,
            },
            {
                name: "woodensword",
                level: 8,
            },
            {
                name: "test_orb",
                level: 1,
            },
            {
                name: "vitring",
                level: 0,
                v: "2022-01-29T00:31:16.690Z",
            },
            {
                name: "sshield",
                level: 8,
            },
            {
                name: "lantern",
                level: 3,
            },
            {
                name: "orbofstr",
                level: 2,
            },
            {
                name: "heartwood",
                level: 3,
                p: "glitched",
            },
            {
                name: "strring",
                level: 0,
            },
            {
                q: 1,
                name: "xptome",
            },
            {
                name: "ringsj",
                level: 0,
            },
            {
                name: "bfur",
                q: 1,
            },
            {
                name: "seashell",
                q: 1,
            },
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ],
        cc: 16,
        name: "earthWar",
    })
    warrior.entities.set(
        "310",
        new Entity(
            {
                x: 1132.9330374688902,
                y: -1490.2216005989717,
                type: "rudolph",
                hp: 12000000,
                max_hp: 12000000,
                mp: 60000,
                speed: 24,
                xp: 2000000,
                attack: 1600,
                frequency: 10,
                resistance: 1200,
                id: "310",
                move_num: 18599161,
                cid: 5,
                s: {},
                level: 1,
                moving: true,
                abs: false,
                going_x: 1099.9910932334997,
                going_y: -1489.247069218715,
                angle: 178.30549604505748,
            },
            "winterland",
            "winterland",
            Game.G,
        ),
    )
    warrior.entities.set(
        "3522746",
        new Entity(
            {
                speed: 20.48,
                hp: 9000,
                mp: 60,
                attack: 300,
                xp: 21600,
                frequency: 0.768,
                resistance: 0,
                max_hp: 18000,
                id: "3522746",
                x: -32.47015687797802,
                y: -1189.7117335078665,
                moving: true,
                going_x: -75.23303846301431,
                going_y: -923.8665561296592,
                abs: false,
                move_num: 18598332,
                angle: 99.13811034660513,
                type: "boar",
                cid: 2,
                s: {},
                level: 1,
            },
            "winterland",
            "winterland",
            Game.G,
        ),
    )
    warrior.entities.set(
        "3523318",
        new Entity(
            {
                speed: 20.48,
                hp: 18000,
                mp: 60,
                attack: 300,
                xp: 21600,
                frequency: 0.768,
                resistance: 0,
                max_hp: 18000,
                id: "3523318",
                x: 66.57447859556282,
                y: -823.8041679458063,
                moving: true,
                going_x: -72.08830589834515,
                going_y: -981.8175155998056,
                abs: false,
                move_num: 18620031,
                angle: -131.26819535494937,
                type: "boar",
                cid: 2,
                s: {},
                level: 2,
            },
            "winterland",
            "winterland",
            Game.G,
        ),
    )
}, 60000)

test("Character attributes", () => {
    expect(priest.damage_type).toBe<string>(Game.G.classes.priest.damage_type)
    expect(warrior.damage_type).toBe<string>(Game.G.classes.warrior.damage_type)
})

test("Character.calculateItemCost", async () => {
    // The costs below assume these G costs, so check that they're still good
    expect(Game.G.items.scroll0.g).toBe(1000)
    expect(Game.G.items.scroll1.g).toBe(40000)
    expect(Game.G.items.pants.g).toBe(7800)
    expect(Game.G.items.dexring.g).toBe(24000)

    // Normal item
    expect(priest.calculateItemCost({ name: "scroll0" })).toBe(1000)
    expect(priest.calculateItemCost({ name: "scroll1" })).toBe(40000)

    // Upgradable items
    expect(priest.calculateItemCost({ name: "pants", level: 0 })).toBe(7800)
    expect(priest.calculateItemCost({ name: "pants", level: 1 })).toBe(8800)
    expect(priest.calculateItemCost({ name: "pants", level: 2 })).toBe(9800)
    expect(priest.calculateItemCost({ name: "pants", level: 3 })).toBe(10800)
    expect(priest.calculateItemCost({ name: "pants", level: 4 })).toBe(11800)
    expect(priest.calculateItemCost({ name: "pants", level: 5 })).toBe(12800)
    expect(priest.calculateItemCost({ name: "pants", level: 6 })).toBe(13800)
    expect(priest.calculateItemCost({ name: "pants", level: 7 })).toBe(53800)

    // Compoundable items
    expect(priest.calculateItemCost({ name: "dexring", level: 0 })).toBe(24000)
    expect(priest.calculateItemCost({ name: "dexring", level: 1 })).toBe(78400)
    expect(priest.calculateItemCost({ name: "dexring", level: 2 })).toBe(241600)
    expect(priest.calculateItemCost({ name: "dexring", level: 3 })).toBe(964800)
    expect(priest.calculateItemCost({ name: "dexring", level: 4 })).toBe(3134400)
    expect(priest.calculateItemCost({ name: "dexring", level: 5 })).toBe(18603200)
})

test("Character.canBuy", () => {
    // Priest has a computer, warrior doesn't. You can buy the following from an NPC, so they should all return true
    expect(priest.canBuy("mpot1")).toBe(true)
    expect(warrior.canBuy("mpot1")).toBe(false)
    expect(priest.canBuy("elixirluck")).toBe(true)
    expect(warrior.canBuy("elixirluck")).toBe(false)

    // Ignore location
    expect(priest.canBuy("mpot1", { ignoreLocation: true })).toBe(true)
    expect(warrior.canBuy("mpot1", { ignoreLocation: true })).toBe(true)

    // You can't buy this from an NPC
    expect(priest.canBuy("computer")).toBe(false)
    expect(priest.canBuy("computer", { ignoreLocation: true })).toBe(false)
})

test("Character.canCraft", () => {
    // Backup so we can change things
    const itemsBackup = [...priest.items]
    const locationBackup = { map: priest.map, x: priest.x, y: priest.y }
    const craftsmanLocation = Pathfinder.locateNPC("craftsman")[0]
    const witchLocation = Pathfinder.locateNPC("witch")[0]

    // Insufficient items
    priest.items = [{ name: "computer" }, { name: "bow", level: 0 }, { name: "essenceoffrost", q: 2 }]
    expect(priest.canCraft("frostbow")).toBe(false)

    // Sufficient items
    priest.items = [{ name: "computer" }, { name: "bow", level: 0 }, { name: "essenceoffrost", q: 3 }]
    expect(priest.canCraft("frostbow")).toBe(true)

    // Wrong place
    priest.items = [
        { name: "bow", level: 0 },
        { name: "essenceoffrost", q: 3 },
    ]
    priest.map = witchLocation.map as MapName
    priest.x = witchLocation.x
    priest.y = witchLocation.y
    expect(priest.canCraft("frostbow")).toBe(false)
    expect(priest.canCraft("frostbow", { ignoreLocation: false })).toBe(false)
    expect(priest.canCraft("frostbow", { ignoreLocation: true })).toBe(true)

    // Right place
    priest.map = craftsmanLocation.map as MapName
    priest.x = craftsmanLocation.x
    priest.y = craftsmanLocation.y
    expect(priest.canCraft("frostbow")).toBe(true)
    expect(priest.canCraft("frostbow", { ignoreLocation: false })).toBe(true)
    expect(priest.canCraft("frostbow", { ignoreLocation: true })).toBe(true)

    // Wrong place (witch)
    priest.items = [
        { name: "cshell", q: 10 },
        { name: "hpot0", q: 9999 },
    ]
    priest.map = craftsmanLocation.map as MapName
    priest.x = craftsmanLocation.x
    priest.y = craftsmanLocation.y
    expect(priest.canCraft("elixirfires")).toBe(false)
    expect(priest.canCraft("elixirfires", { ignoreLocation: true })).toBe(true)

    // Right place (witch)
    priest.map = witchLocation.map as MapName
    priest.x = witchLocation.x
    priest.y = witchLocation.y
    expect(priest.canCraft("elixirfires")).toBe(true)

    priest.items = [
        { name: "throwingstars", level: 7 },
        { q: 2, name: "essenceoffire" },
        { name: "computer", l: "l" },
    ]
    expect(priest.canCraft("firestars")).toBe(false)
    priest.items = [
        { name: "throwingstars", level: 0 },
        { q: 2, name: "essenceoffire" },
        { name: "computer", l: "l" },
    ]
    expect(priest.canCraft("firestars")).toBe(true)
    priest.items = [
        { name: "throwingstars", level: 8 },
        { name: "throwingstars", level: 0 },
        { q: 2, name: "essenceoffire" },
        { name: "computer", l: "l" },
    ]
    expect(priest.canCraft("firestars")).toBe(true)
    // Restore
    priest.items = itemsBackup
    priest.map = locationBackup.map
    priest.x = locationBackup.x
    priest.y = locationBackup.y
})

test("Character.canExchange", async () => {
    // Backup so we can change things
    const itemsBackup = [...priest.items]
    const locationBackup = { map: priest.map, x: priest.x, y: priest.y }
    const xynLocation = Pathfinder.locateNPC("exchange")[0]
    const shellLocation = Pathfinder.locateNPC("fisherman")[0]

    // Insufficient items
    priest.items = [{ name: "computer" }, { name: "seashell", q: 1 }]
    expect(priest.canExchange("seashell")).toBe(false)

    // Sufficient items
    priest.items = [{ name: "computer" }, { name: "seashell", q: 20 }]
    expect(priest.canExchange("seashell")).toBe(true)

    // Exchangeable without an 'e'
    priest.items = [{ name: "computer" }, { level: 2, name: "lostearring" }]
    expect(priest.canExchange("lostearring")).toBe(true)

    // Wrong location
    priest.items = [{ name: "seashell", q: 20 }]
    priest.map = xynLocation.map as MapName
    priest.x = xynLocation.x
    priest.y = xynLocation.y
    expect(priest.canExchange("seashell")).toBe(false)
    expect(priest.canExchange("seashell", { ignoreLocation: true })).toBe(true)

    // Correct Location
    priest.items = [{ name: "seashell", q: 20 }]
    priest.map = shellLocation.map as MapName
    priest.x = shellLocation.x
    priest.y = shellLocation.y
    expect(priest.canExchange("seashell")).toBe(true)

    // Restore
    priest.items = itemsBackup
    priest.map = locationBackup.map
    priest.x = locationBackup.x
    priest.y = locationBackup.y
})

test("Character.canCompound", async () => {
    // Backup so we can change things
    const itemsBackup = [...priest.items]
    const locationBackup = { map: priest.map, x: priest.x, y: priest.y }

    // Set up the compound location
    expect(Game.G.maps.main.ref?.c_mid?.[0]).toBeDefined()
    expect(Game.G.maps.main.ref?.c_mid?.[1]).toBeDefined()
    const compoundLocation: IPosition = {
        map: "main",
        x: Game.G.maps.main.ref?.c_mid?.[0],
        y: Game.G.maps.main.ref?.c_mid?.[1],
    }

    // Compoundable
    priest.items = [
        { name: "computer" },
        { name: "cscroll0", q: 1 },
        { name: "dexearring", level: 0 },
        { name: "dexearring", level: 0 },
        { name: "dexearring", level: 0 },
    ]
    expect(priest.canCompound(2, 3, 4, 1)).toBe(true)

    // Compoundable with higher level scroll
    priest.items = [
        { name: "computer" },
        { name: "cscroll3", q: 1 },
        { name: "dexearring", level: 0 },
        { name: "dexearring", level: 0 },
        { name: "dexearring", level: 0 },
    ]
    expect(priest.canCompound(2, 3, 4, 1)).toBe(true)

    // Upgradable (not Compoundable)
    priest.items = [
        { name: "computer" },
        { name: "cscroll0", q: 1 },
        { name: "coat", level: 0 },
        { name: "coat", level: 0 },
        { name: "coat", level: 0 },
    ]
    expect(priest.canCompound(2, 3, 4, 1)).toBe(false)

    // Wrong location
    priest.items = [
        { name: "cscroll0", q: 1 },
        { name: "dexearring", level: 0 },
        { name: "dexearring", level: 0 },
        { name: "dexearring", level: 0 },
    ]
    priest.map = "winterland"
    priest.x = 0
    priest.y = 0
    expect(priest.canCompound(1, 2, 3, 0)).toBe(false)

    // Correct Location
    priest.items = [
        { name: "cscroll0", q: 1 },
        { name: "dexearring", level: 0 },
        { name: "dexearring", level: 0 },
        { name: "dexearring", level: 0 },
    ]
    priest.map = compoundLocation.map as MapName
    priest.x = compoundLocation.x
    priest.y = compoundLocation.y
    expect(priest.canCompound(1, 2, 3, 0)).toBe(true)

    // Restore
    priest.items = itemsBackup
    priest.map = locationBackup.map
    priest.x = locationBackup.x
    priest.y = locationBackup.y
})

test("Character.canUpgrade", async () => {
    // Backup so we can change things
    const itemsBackup = [...priest.items]
    const locationBackup = { map: priest.map, x: priest.x, y: priest.y }

    // Set up the upgrade location
    expect(Game.G.maps.main.ref?.u_mid?.[0]).toBeDefined()
    expect(Game.G.maps.main.ref?.u_mid?.[1]).toBeDefined()
    const upgradeLocation: IPosition = {
        map: "main",
        x: Game.G.maps.main.ref?.u_mid?.[0],
        y: Game.G.maps.main.ref?.u_mid?.[1],
    }

    // Upgradable
    priest.items = [{ name: "computer" }, { name: "scroll0", q: 1 }, { name: "coat", level: 0 }]
    expect(priest.canUpgrade(2, 1)).toBe(true)

    // Upgradable with higher level scroll
    priest.items = [{ name: "computer" }, { name: "scroll4", q: 1 }, { name: "coat", level: 0 }]
    expect(priest.canUpgrade(2, 1)).toBe(true)

    // Stat scroll - Grade 0 - Sufficient
    priest.items = [{ name: "computer" }, { name: "dexscroll", q: 1 }, { name: "coat", level: 0 }]
    expect(priest.canUpgrade(2, 1)).toBe(true)

    // Stat scroll - Grade 1 - Insufficient
    priest.items = [{ name: "computer" }, { name: "dexscroll", q: 9 }, { name: "coat", level: 7 }]
    expect(priest.canUpgrade(2, 1)).toBe(false)

    // Stat scroll - Grade 1 - Sufficient
    priest.items = [{ name: "computer" }, { name: "dexscroll", q: 10 }, { name: "coat", level: 7 }]
    expect(priest.canUpgrade(2, 1)).toBe(true)

    // Stat scroll - Grade 2 - Insufficient
    priest.items = [{ name: "computer" }, { name: "dexscroll", q: 99 }, { name: "coat", level: 9 }]
    expect(priest.canUpgrade(2, 1)).toBe(false)

    // Stat scroll - Grade 2 - Sufficient
    priest.items = [{ name: "computer" }, { name: "dexscroll", q: 100 }, { name: "coat", level: 9 }]
    expect(priest.canUpgrade(2, 1)).toBe(true)

    // Ore doable
    priest.items = [{ name: "computer" }, { name: "platinumnugget", q: 1 }, { name: "coat", level: 0 }]
    expect(priest.canUpgrade(2, 1)).toBe(false) // Doable, but put in scroll slot
    expect(priest.canUpgrade(2, undefined, 1)).toBe(true)

    // Ores are only doable with level 0 items
    priest.items = [{ name: "computer" }, { name: "platinumnugget", q: 1 }, { name: "coat", level: 1 }]
    expect(priest.canUpgrade(2, undefined, 1)).toBe(false)

    // Compoundable (not Upgradable)
    priest.items = [{ name: "computer" }, { name: "scroll0", q: 1 }, { name: "dexearring", level: 0 }]
    expect(priest.canUpgrade(2, 1)).toBe(false)

    // Wrong location
    priest.items = [
        { name: "scroll0", q: 1 },
        { name: "coat", level: 0 },
    ]
    priest.map = "winterland"
    priest.x = 0
    priest.y = 0
    expect(priest.canUpgrade(1, 0)).toBe(false)

    // Correct Location
    priest.items = [
        { name: "scroll0", q: 1 },
        { name: "coat", level: 0 },
    ]
    priest.map = upgradeLocation.map as MapName
    priest.x = upgradeLocation.x
    priest.y = upgradeLocation.y
    expect(priest.canUpgrade(1, 0)).toBe(true)

    // Restore
    priest.items = itemsBackup
    priest.map = locationBackup.map
    priest.x = locationBackup.x
    priest.y = locationBackup.y
})

test("Character.canKillInOneShot", () => {
    const bee = new Entity(
        {
            mp: 2,
            armor: 0,
            resistance: 0,
            id: "5185017",
            x: 70.32182893235411,
            y: 1487.9526638730226,
            moving: true,
            going_x: 206.28099056907251,
            going_y: 1485.9456975484566,
            abs: false,
            move_num: 49572238,
            angle: -0.8457123996441614,
            type: "bee",
            cid: 1,
            s: {
                young: {
                    ms: 340,
                },
            },
        },
        "main",
        "main",
        Game.G,
    )
    expect(priest.canKillInOneShot(bee)).toBe(true)
})

test("Character.canSell", () => {
    const locationBackup = { map: priest.map, x: priest.x, y: priest.y }
    const itemsBackup = [...priest.items]

    priest.items = [{ name: "helmet", level: 1 }]

    // Sellable location
    const standMerchant = Pathfinder.locateNPC("standmerchant")[0]
    priest.map = standMerchant.map as MapName
    priest.x = standMerchant.x
    priest.y = standMerchant.y
    expect(priest.canSell()).toBe(true)

    // Unsellable location
    priest.map = "arena"
    priest.x = Game.G.maps.arena.spawns[0][0]
    priest.y = Game.G.maps.arena.spawns[0][0]
    expect(priest.canSell()).toBe(false)
    // This time with a computer
    priest.items = [{ name: "computer" }, { name: "helmet", level: 1 }]
    expect(priest.canSell()).toBe(true)

    // Restore
    priest.items = itemsBackup
    priest.map = locationBackup.map
    priest.x = locationBackup.x
    priest.y = locationBackup.y
})

test("Character.canUse", () => {
    expect(priest.canUse("attack")).toBe(true)
    expect(priest.canUse("partyheal")).toBe(true)
    expect(priest.canUse("3shot")).toBe(false)
    expect(priest.canUse("blink")).toBe(false)

    // Make partyheal on cooldown
    const future = new Date()
    future.setFullYear(future.getFullYear() + 1)
    priest.nextSkill.set("partyheal", future)
    expect(priest.canUse("partyheal")).toBe(false)
    expect(priest.canUse("partyheal", { ignoreCooldown: true })).toBe(true)

    // Make character dead
    priest.rip = true
    expect(priest.canUse("attack")).toBe(false)
    priest.rip = false

    priest.s.dampened = { ms: 1000 }
    expect(priest.canUse("attack")).toBe(true)
    priest.s.stoned = { ms: 1000 }
    expect(priest.canUse("attack")).toBe(false)
    delete priest.s.stoned
    priest.s.fingered = { ms: 1000 }
    expect(priest.canUse("attack")).toBe(false)
    delete priest.s.fingered
    delete priest.s.dampened

    expect(warrior.canUse("blink")).toBe(false)
    expect(warrior.canUse("cleave")).toBe(false)
    expect(warrior.canUse("cleave", { ignoreEquipped: true })).toBe(true)

    // Equip axe
    warrior.slots.mainhand = {
        acc: 1,
        level: 8,
        name: "bataxe",
    }
    warrior.slots.offhand = null
    expect(warrior.canUse("cleave")).toBe(true)

    expect(warrior.canUse("zapperzap", { ignoreEquipped: true })).toBe(true)

    // Snowball skill needs a snowball in the inventory
    expect(warrior.canUse("snowball")).toBe(false)
    warrior.items.push({ name: "snowball", q: 200 })
    expect(warrior.canUse("snowball")).toBe(true)
    warrior.items.pop()
})

test("Character.countItem", () => {
    // Non-stackable items
    expect(priest.countItem("computer")).toBe(1)

    // Stackable items
    expect(priest.countItem("hpot0")).toBe(0)
    expect(priest.countItem("mpot0")).toBe(0)
    expect(priest.countItem("hpot1")).toBe(1000)
    expect(priest.countItem("mpot1")).toBe(999)

    // Multiple stacks of items
    expect(priest.countItem("beewings")).toBe(10999)
})

test("Character.getEntities", () => {
    // NOTE: When we created the warrior, we created it in winterland with 2 boars and 1 rudolph

    expect(warrior.getEntities().length).toBe(3)
    expect(warrior.getEntities({ type: "boar" }).length).toBe(2)
    expect(warrior.getEntities({ type: "goo" }).length).toBe(0)
    expect(warrior.getEntities({ typeList: ["boar"] }).length).toBe(2)
    expect(warrior.getEntities({ typeList: ["goo"] }).length).toBe(0)
    expect(warrior.getEntities({ typeList: ["boar", "goo"] }).length).toBe(2)

    expect(warrior.getEntities({ hpGreaterThan: 0 }).length).toBe(3)
    expect(warrior.getEntities({ hpGreaterThan: 10000000 }).length).toBe(1)
    expect(warrior.getEntities({ hpLessThan: 0 }).length).toBe(0)
    expect(warrior.getEntities({ hpLessThan: 10000000 }).length).toBe(2)

    expect(warrior.getEntities({ level: 1 }).length).toBe(2)
    expect(warrior.getEntities({ levelGreaterThan: 1 }).length).toBe(1)
    expect(warrior.getEntities({ levelGreaterThan: 2 }).length).toBe(0)
    expect(warrior.getEntities({ levelLessThan: 3 }).length).toBe(3)
    expect(warrior.getEntities({ levelLessThan: 2 }).length).toBe(2)

    const originalLength = warrior.entities.size
    expect(warrior.getEntities({ ignoreIDs: ["3522746"] }).length).toBe(originalLength - 1)
})

test("Character.getEntity", () => {
    // NOTE: When we created the warrior, we created it in winterland with some boars around it
    expect(warrior.getEntity()).not.toBeUndefined()
    expect(warrior.getEntity({ type: "boar" })).not.toBeUndefined()
    expect(warrior.getEntity({ type: "goo" })).toBeUndefined()
    expect(warrior.getEntity({ type: "boar", returnNearest: true })).not.toBeUndefined()
    expect(warrior.getEntity({ type: "goo", returnNearest: true })).toBeUndefined()

    warrior.entities.set(
        "nearbyMonster",
        new Entity(
            {
                x: warrior.x,
                y: warrior.y,
                type: "rudolph",
                hp: 12000000,
                max_hp: 12000000,
                mp: 60000,
                speed: 24,
                xp: 2000000,
                attack: 1600,
                frequency: 10,
                resistance: 1200,
                id: "nearbyMonster",
                move_num: 18599161,
                cid: 5,
                s: {},
                level: 1,
                moving: false,
                abs: false,
                going_x: warrior.x,
                going_y: warrior.y,
                angle: 0,
            },
            "winterland",
            "winterland",
            Game.G,
        ),
    )
    expect(warrior.getEntity({ type: "rudolph", returnNearest: true }).id).toBe("nearbyMonster")
})

test("Character.getTargetEntity", () => {
    priest.target = undefined
    expect(priest.getTargetEntity()).toBeUndefined()

    const bee = new Entity(
        {
            mp: 2,
            armor: 0,
            resistance: 0,
            id: "5185017",
            x: 70.32182893235411,
            y: 1487.9526638730226,
            moving: true,
            going_x: 206.28099056907251,
            going_y: 1485.9456975484566,
            abs: false,
            move_num: 49572238,
            angle: -0.8457123996441614,
            type: "bee",
            cid: 1,
            s: {
                young: {
                    ms: 340,
                },
            },
        },
        "main",
        "main",
        Game.G,
    )
    priest.entities.set(bee.id, bee)
    priest.target = bee.id
    expect(priest.getTargetEntity()).toBeTruthy()
    expect(priest.getTargetEntity().id).toBe(bee.id)
})

test("Character.hasItem", () => {
    const itemsBackup = [...priest.items]

    priest.items = [
        { name: "throwingstars", level: 7 },
        { q: 2, name: "essenceoffire" },
    ]
    expect(priest.hasItem("firestars")).toBe(false)
    expect(priest.hasItem("throwingstars")).toBe(true)
    expect(priest.hasItem(["firestars", "throwingstars"])).toBe(true)
    expect(priest.hasItem(["throwingstars", "firestars"])).toBe(true)
    expect(priest.hasItem(["wblade", "firestars"])).toBe(false)
    expect(
        priest.hasItem("throwingstars", priest.items, {
            level: 6,
        }),
    ).toBe(false)
    expect(
        priest.hasItem("throwingstars", priest.items, {
            level: 7,
        }),
    ).toBe(true)

    expect(!warrior.hasItem(["computer", "supercomputer"])).toBe(true)

    priest.items = itemsBackup
    priest.isize = priest.items.length
})

test("Character.hasPVPMarkedItem", () => {
    expect(priest.hasPvPMarkedItem()).toBeFalsy()
    expect(warrior.hasPvPMarkedItem()).toBeTruthy()
})

test("Character.isEquipped", () => {
    expect(priest.isEquipped("intamulet")).toBeTruthy()
    expect(priest.isEquipped("dexamulet")).toBeFalsy()
    expect(warrior.isEquipped("elixirluck")).toBeTruthy()

    expect(priest.isEquipped(["intamulet"])).toBeTruthy()
    expect(priest.isEquipped(["dexamulet", "pumpkinspice"])).toBeFalsy()
    expect(priest.isEquipped(["dexamulet", "pumpkinspice", "intamulet"])).toBeTruthy()
})

test("Character.isListedForPurchase", () => {
    // TODO: Implement
})

test("Character.isListedForSale", () => {
    // TODO: Implement
})

test("Character.isPVP", () => {
    // False if the map and server are not PVP
    priest.server = {
        S: {
            dragold: {
                live: false,
                spawn: "2023-01-21T05:28:15.387Z",
            },
            schedule: {
                dailies: [13, 20],
                night: false,
                nightlies: [23],
                time_offset: 7,
            },
        },
        region: "ASIA",
        name: "I",
        in: "main",
        map: "main",
        gameplay: "test",
        info: {},
        pvp: false,
        x: 0,
        y: 0,
    }
    priest.map = "main"
    expect(priest.isPVP()).toBe(false)

    // True if the server is PVP
    priest.server.pvp = true
    expect(priest.isPVP()).toBe(true)

    // True if the map is PVP
    priest.map = "arena"
    expect(priest.isPVP()).toBe(true)

    // False if the map is safe
    priest.map = "hut"
    expect(priest.isPVP()).toBe(false)
})

test("Character.locateItem", () => {
    // Create the character's inventory for testing
    const itemsBackup = [...priest.items]
    priest.items = [
        null,
        { name: "mpot0", q: 1 },
        { name: "mpot0", q: 10 },
        { name: "pants", level: 0, l: "l" },
        { name: "pants", level: 1 },
        { name: "coat", level: 2 },
        { name: "coat", level: 0 },
        { name: "zapper", level: 0, l: "l" },
        null,
    ]
    priest.isize = priest.items.length

    expect(priest.locateItem("pants")).toBeTruthy()
    expect(priest.locateItem("coat")).toBeTruthy()
    expect(priest.locateItem("pants", priest.items, { level: 0 })).toBe(3)
    expect(priest.locateItem("pants", priest.items, { level: 0, locked: true })).toBe(3)
    expect(priest.locateItem("pants", priest.items, { level: 0, locked: false })).toBe(undefined)
    expect(priest.locateItem("coat", priest.items, { level: 0 })).toBe(6)
    expect(priest.locateItem("pants", priest.items, { levelGreaterThan: 0 })).toBe(4)
    expect(priest.locateItem("coat", priest.items, { levelGreaterThan: 0 })).toBe(5)
    expect(priest.locateItem("pants", priest.items, { levelLessThan: 0 })).toBe(undefined)
    expect(priest.locateItem("pants", priest.items, { returnHighestLevel: true })).toBe(4)
    expect(priest.locateItem("pants", priest.items, { returnLowestLevel: true })).toBe(3)
    expect(priest.locateItem("zapper", priest.items, { returnHighestLevel: true })).toBe(7)
    expect(priest.locateItem("zapper", priest.items, { returnLowestLevel: true })).toBe(7)

    expect(priest.locateItem("mpot0")).toBeTruthy()
    expect(priest.locateItem("mpot0", priest.items, { quantityGreaterThan: 1 })).toBe(2)
    priest.items = itemsBackup
    priest.isize = priest.items.length
})

test("Character.locateItems", async () => {
    // Create the character's inventory for testing
    priest.esize = 2
    const itemsBackup = [...priest.items]
    priest.items = [
        { name: "mpot0", q: 1 },
        null,
        { name: "mpot0", q: 10 },
        { name: "pants", level: 0, l: "l" },
        { name: "pants", level: 1 },
        { name: "coat", level: 2 },
        { name: "coat", level: 0 },
        null,
        { name: "mpot0", q: 10 },
    ]
    priest.isize = priest.items.length

    expect(priest.locateItems("pants").length).toBe(2)
    expect(priest.locateItems("pants", priest.items, { level: 0 }).length).toBe(1)
    expect(priest.locateItems("pants", priest.items, { level: 0, locked: true }).length).toBe(1)
    expect(priest.locateItems("pants", priest.items, { level: 0, locked: false }).length).toBe(0)
    expect(priest.locateItems("pants", priest.items, { levelLessThan: 0 }).length).toBe(0)
    expect(priest.locateItems("pants", priest.items, { levelLessThan: 1 }).length).toBe(1)
    expect(priest.locateItems("pants", priest.items, { levelLessThan: 2 }).length).toBe(2)
    expect(priest.locateItems("pants", priest.items, { levelGreaterThan: 0 }).length).toBe(1)
    expect(priest.locateItems("mpot0", priest.items, { quantityGreaterThan: 1 }).length).toBe(2)
    priest.items = itemsBackup
})

test("Character.locateItemsByLevel", () => {
    const itemsBackup = [...priest.items]

    // This was previously returning the wrong amount of ringsj
    priest.isize = 42
    priest.esize = 0
    priest.items = [
        {
            name: "hpamulet",
            p: "shiny",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "cclaw",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "ringsj",
            level: 0,
        },
        {
            name: "ringsj",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "ringsj",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "ringsj",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "ringsj",
            level: 0,
        },
        {
            name: "ringsj",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            name: "hpbelt",
            level: 0,
        },
    ]
    const duplicates = priest.locateItemsByLevel(priest.items, { minAmount: 2 })
    expect(duplicates).toMatchObject({
        hpamulet: {
            "0": [0, 1, 2, 4, 6, 9, 12, 13, 14, 15, 16, 19, 20, 21, 26, 29, 31, 35],
        },
        hpbelt: {
            "0": [5, 7, 8, 10, 11, 17, 18, 22, 23, 24, 25, 32, 34, 36, 39, 40, 41],
        },
        ringsj: {
            "0": [27, 28, 30, 33, 37, 38],
        },
    })
    const sevenplicates = priest.locateItemsByLevel(priest.items, { minAmount: 7 })
    expect(sevenplicates).toMatchObject({
        hpamulet: {
            "0": [0, 1, 2, 4, 6, 9, 12, 13, 14, 15, 16, 19, 20, 21, 26, 29, 31, 35],
        },
        hpbelt: {
            "0": [5, 7, 8, 10, 11, 17, 18, 22, 23, 24, 25, 32, 34, 36, 39, 40, 41],
        },
    })
    const noSpecial = priest.locateItemsByLevel(priest.items, { minAmount: 2, excludeSpecialItems: true })
    expect(noSpecial).toMatchObject({
        hpamulet: {
            "0": [1, 2, 4, 6, 9, 12, 13, 14, 15, 16, 19, 20, 21, 26, 29, 31, 35],
        },
        hpbelt: {
            "0": [5, 7, 8, 10, 11, 17, 18, 22, 23, 24, 25, 32, 34, 36, 39, 40, 41],
        },
        ringsj: {
            "0": [27, 28, 30, 33, 37, 38],
        },
    })

    priest.isize = 42
    priest.esize = 22
    priest.items = [
        {
            q: 200,
            name: "hpot0",
            gift: 1,
        },
        {
            q: 156,
            name: "mpot0",
            gift: 1,
        },
        {
            name: "hpbelt",
            level: 0,
        },
        {
            q: 2,
            name: "gslime",
        },
        {
            q: 217,
            name: "beewings",
        },
        {
            name: "ringsj",
            level: 0,
        },
        {
            name: "hpamulet",
            level: 0,
        },
        null,
        null,
        {
            name: "wshoes",
            level: 0,
        },
        null,
        null,
        null,
        {
            name: "wcap",
            level: 0,
        },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ]
    const noDuplicates = priest.locateItemsByLevel(priest.items, { minAmount: 2 })
    expect(noDuplicates).toMatchObject({})

    priest.items = itemsBackup
})
