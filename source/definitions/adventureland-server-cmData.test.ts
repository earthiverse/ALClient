import { CMData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-05-20
 * It is used to confirm type correctness
 */

test("CMData type validation", async () => {
    const cms: CMData[] = [
        { "name": "earthPal", "message": "{\"message\":\"hi\"}" }
    ]
    for (const cm of cms) expect(cm).not.toBe(undefined)
})