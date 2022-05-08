import { DiceData } from "./adventureland-server"

/**
 * The following is from socket events received 2022-05-05
 * It is used to confirm type correctness
 */

test("DiceData type validation", async () => {
    const rolling: DiceData = {
        "state": "roll"
    }
    expect(rolling).not.toBe(undefined)

    const locks: DiceData[] = [
        {
            "key": "QhAbCnWvm1xmo0sZ6xL0MuR",
            "num": "03.72",
            "state": "lock",
            "text": "Num: 03.72 Initials: a Random: QiyhOCAmZJiQ7kunV"
        },
        {
            "key": "gdSH646vMDIPwlf9t5zpw6ALRq",
            "num": "88.81",
            "state": "lock",
            "text": "Num: 88.81 Initials: a Random: TxxtXyoRLB9rxnPlZ"
        }
    ]
    for (const lock of locks) expect(lock).not.toBe(undefined)

    const bets: DiceData[] = [
        {
            "algorithm": "hmac-sha256",
            "hex": "08d51c94eb2bafcfe16d65931971038092792f2d48e1a7da2106a646c1b1a67e",
            "state": "bets"
        },
        {
            "algorithm": "hmac-sha256",
            "hex": "3d11c1a06c82b535df1276a339aad32478405e17c72734e0c55693c52d79f39e",
            "state": "bets"
        }
    ]
    for (const bet of bets) expect(bet).not.toBe(undefined)
})