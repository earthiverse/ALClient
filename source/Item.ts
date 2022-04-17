import { ItemType } from "./definitions/adventureland.js"
import { Attribute, GData, GItem, ItemName, SkillName } from "./definitions/adventureland-data.js"
import { ItemData } from "./definitions/adventureland-server.js"

export class Item implements ItemData, GItem {
    protected G: GData

    // ItemData (required)
    public name: ItemName
    // ItemData (optional)
    public l?: "l" | "s" | "x"
    public level?: number
    public stat_type?: Attribute

    // Required
    public g: number
    public id: ItemName
    public skin: string
    public type: ItemType

    // Optional
    public a: boolean | number = false
    public ability?: SkillName | "burn" | "freeze" | "poke" | "posion" | "restore_mp" | "secondchance" | "sugarrush" | "weave"
    public acolor?: string
    public action?: string
    public gift = 0
    public v?: string

    public constructor(data: ItemData | ItemData, g: GData) {
        this.G = g

        // Set soft properties
        // NOTE: If `data` contains different values, we will overwrite these later
        for (const gKey in g.items[data.name]) {
            this[gKey] = g.items[data.name][gKey]
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

        // The first level of a gifted item is only worth 1 gold.
        if (this.gift) cost -= (gInfo.g - 1)

        return cost
    }

    /**
     * Returns true if the item is locked, false otherwise. If the item is locked, you cannot sell or trade it.
     *
     * @memberof Item
     */
    public isLocked(): boolean {
        return this.l == "l"
    }

    /**
     * Returns true if the item is PVP marked. If you die to another player, there is a chance to lose this item to the other player.
     *
     * @memberof Item
     */
    public isPVPMarked(): boolean {
        return this.v !== undefined
    }
}