import { ItemType } from "./definitions/adventureland.js"
import { Attribute, GItem, ItemName, SkillName, TitleName } from "./definitions/adventureland-data.js"
import { ItemData } from "./definitions/adventureland-server.js"
import { Game } from "./Game.js"

export class Item implements ItemData, GItem {
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
    public ability?: SkillName | "burn" | "freeze" | "poke" | "posion" | "restore_mp" | "secondchance" | "sugarrush" | "weave"
    public armor = 0
    public attack = 0
    public dex = 0
    public gift = 0
    public int = 0
    public p?: TitleName
    public resistance = 0
    public stat = 0
    public str = 0
    public v?: string

    public constructor(data: ItemData | ItemData) {
        // Set soft properties
        // NOTE: If `data` contains different values, we will overwrite these later
        const gData = Game.G.items[data.name]
        for (const gKey in gData) {
            this[gKey] = Game.G.items[data.name][gKey]
        }

        // Set everything else
        for (const key in data) this[key] = data[key]

        // Calculate additional stats from item level
        for (let i = 0; i < this.level; i++) {
            if (gData.upgrade) {
                for (const s in gData.upgrade) {
                    const add = gData.upgrade[s]
                    let multiplier = 1
                    if (i == 7) multiplier = 1.25
                    if (i == 8) multiplier = 1.5
                    if (i == 9) multiplier = 2
                    if (i == 10) multiplier = 3
                    if (i == 11) multiplier = 1.25
                    if (i == 12) multiplier = 1.25
                    if (s == "stat") {
                        this.stat += Math.round(add * multiplier)
                        if (i >= 7) this.stat += 1
                    } else {
                        this[s] += add * multiplier
                    }
                }
            } else if (gData.compound) {
                for (const s in gData.compound) {
                    const add = gData.upgrade[s]
                    let multiplier = 1
                    if (i == 5) multiplier = 1.25
                    if (i == 6) multiplier = 1.5
                    if (i == 7) multiplier = 2
                    if (i >= 8) multiplier = 3
                    if (s == "stat") {
                        this.stat += Math.round(add * multiplier)
                        if (i >= 7) this.stat += 1
                    } else {
                        this[s] += add * multiplier
                    }
                }
            }
        }

        if (this.p == "shiny") {
            // This item is shiny, add shiny stats
            if (this.attack) {
                this.attack += 4
                if (gData.wtype == "axe" || gData.wtype == "basher" || gData.wtype == "great_staff") this.attack += 3
            } else if (this.stat) {
                this.stat += 2
            } else if (this.armor) {
                this.armor += 12
                if (!this.resistance) this.resistance = 0
                this.resistance = (this.resistance ?? 0) + 10
            } else {
                this.dex += 1
                this.int += 1
                this.str += 1
            }
        } else if (this.p && Game.G.titles[this.p]) {
            // This item has a title, add the extra stats the title gives
            const gTitle = Game.G.titles[this.p]
            for (const prop in gTitle) {
                if (prop == "achievement" || prop == "consecutive_200p_range_last_hits" || prop == "manual" || prop == "misc" || prop == "source" || prop == "title" || prop == "type") continue
                this[prop] += gTitle[prop]
            }
        }
    }

    public calculateMinimumCost(): number {
        const gInfo = Game.G.items[this.name]

        // Base cost
        let cost = this.g

        // Cost to upgrade using lowest level scroll
        if (gInfo.compound) {
            for (let i = 0; i < this.level; i++) {
                cost *= 3 // Three of the current level items are required
                let scrollLevel = 0
                for (const grade of gInfo.grades) {
                    if (i + 1 < grade) {
                        const scrollInfo = Game.G.items[`cscroll${scrollLevel}` as ItemName]
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
                        const scrollInfo = Game.G.items[`scroll${scrollLevel}` as ItemName]
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
     * Returns true if the item is glitched, false otherwise. Glitched items give a bonus random stat.
     */
    public isGlitched(): boolean {
        return this.p == "glitched"
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