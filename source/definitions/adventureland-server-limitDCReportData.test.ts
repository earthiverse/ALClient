import { LimitDCReportData } from "./adventureland-server"

/** 
 * The following is from socket events received 2021-04-24
 * It is used to confirm type correctness
 */

test("LimitDCReportData type validation", async () => {
    const reports: LimitDCReportData[] = [
        {
            "mcalls": {
                "loaded": 1,
                "send_updates": 51,
                "ping_trig": 1
            },
            "climit": 25,
            "total": 5
        }
    ]
    for (const report of reports) expect(report).not.toBe(undefined)
})