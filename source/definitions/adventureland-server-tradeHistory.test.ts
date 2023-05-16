import { TrackerData, TradeHistoryData } from "./adventureland-server"

/**
 * The following is from socket events received 2023-05-16
 * It is used to confirm type correctness
 */

test("TradeHistory type validation", async () => {
    const reports: TradeHistoryData[] = [
        [
            [
                "sell",
                "earthMer",
                {
                    "q": 1,
                    "price": 1,
                    "name": "wshoes",
                    "rid": "Jhv6",
                    "level": 0
                },
                1
            ],
            [
                "buy",
                "Rentaro",
                {
                    "p": "shiny",
                    "price": 24000,
                    "name": "hpamulet",
                    "rid": "T7gA",
                    "level": 0,
                    "q": 1
                },
                24000
            ],
            [
                "buy",
                "Rentaro",
                {
                    "price": 28800,
                    "name": "ringsj",
                    "rid": "HMu0",
                    "level": 0,
                    "q": 1
                },
                28800
            ]
        ]
    ]
    for (const report of reports) expect(report).toBeDefined()
})