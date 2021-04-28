import { ItemType } from "./definitions/adventureland"
import { Attribute, GData2, GItem, ItemName, SkillName } from "./definitions/adventureland-data"
import { ItemData } from "./definitions/adventureland-server"

export class Item implements ItemData, ItemData, GItem {
    protected G: GData2

    // ItemData (required)
    public name: ItemName
    // ItemData (optional)
    public l?: "s" | "x"
    public level?: number
    public stat_type?: Attribute

    // GItem (required)
    public id: ItemName
    public skin: string
    public type: ItemType
    // GItem (optional)
    public a: boolean | number = false
    public ability?: "burn" | "freeze" | "posion" | "poke" | "restore_mp" | "secondchance" | "sugarrush" | "weave" | SkillName
    public acolor?: string
    public action?: string
    public g: number

    public constructor(data: ItemData | ItemData, G: GData2) {
        this.G = G

        // Set soft properties
        // NOTE: If `data` contains different values, we will overwrite these later
        for (const gKey in G.items[data.name]) {
            this[gKey] = G.items[data.name][gKey]
        }

        // Set everything else
        for (const key in data) this[key] = data[key]
    }

    public calculateMinimumCost(): number {
        const gInfo = this.G.items[this.name]

        // Base cost
        let cost = this.g

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

    /**
     * Returns true if the item is locked, false otherwise. If the item is locked, you cannot sell or trade it.
     *
     * @memberof Item
     */
    public isLocked(): boolean {
        return this.l !== undefined
    }
}