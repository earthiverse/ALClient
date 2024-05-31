import type { PQData } from "./adventureland-server"

/**
 * The following is from socket events received 2022-09-13
 * It is used to confirm type correctness
 */

test("PQData type validation", async () => {
    const inProgress: PQData = {
        num: 0,
        p: {
            chance: 0.7,
            level: 3,
            name: "wshield",
            nums: [9],
            scroll: "scroll0",
        },
        q: {
            upgrade: {
                len: 4000,
                ms: 3098,
                num: 0,
            },
        },
    }
    expect(inProgress).toBeDefined()

    const success: PQData = {
        num: 0,
        p: {
            chance: 0.6086488548038897,
            level: 4,
            name: "wshield",
            nums: [9, 9, 4, 1],
            scroll: "scroll0",
            success: true,
        },
        q: {
            upgrade: {
                len: 5590.169943749474,
                ms: 1085.1699437494744,
                num: 0,
            },
        },
    }
    expect(success).toBeDefined()

    const failure: PQData = {
        num: 0,
        p: {
            chance: 0.4529399177932608,
            failure: true,
            level: 5,
            name: "wshield",
            nums: [9, 8, 5, 8],
            scroll: "scroll0",
        },
        q: {
            upgrade: {
                len: 7348.469228349533,
                ms: 1458.4692283495333,
                num: 0,
            },
        },
    }
    expect(failure).toBeDefined()
})
