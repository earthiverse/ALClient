import { ItemInfo } from "./definitions/adventureland"
import { GData2, ItemName } from "./definitions/adventureland-data"

export class Item {
    protected G: GData2

    public level: number
    public name: ItemName

    public constructor(data: ItemInfo, G: GData2) {
        this.G = G
    }

    public calculateMinimumCost(): number {
        const gInfo = this.G.items[this.name]

        // Base cost
        let cost = gInfo.g

        // Cost to upgrade using lowest level scroll
        if (gInfo.compound) {
            for (let i = 0; i < this.level; i++) {
                cost *= 3 // Three of the current level items are required
                let scrollLevel = 0
                for (const grade of gInfo.grades) {
                    if (i + 1 < grade) {
                        const scrollInfo = this.G.items[`cscroll${scrollLevel}` as ItemName]
                        cost += scrollInfo.g
                        break
                    }
                    scrollLevel++
                }
            }
        } else if (gInfo.upgrade) {
            for (let i = 0; i < this.level; i++) {
                let scrollLevel = 0
                for (const grade of gInfo.grades) {
                    if (i + 1 < grade) {
                        const scrollInfo = this.G.items[`scroll${scrollLevel}` as ItemName]
                        cost += scrollInfo.g
                        break
                    }
                    scrollLevel++
                }
            }
        }

        return cost
    }
}