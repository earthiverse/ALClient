import { ItemType, WeaponType } from "./definitions/adventureland.js"
import { Attribute, CharacterType, GData, GItem, ItemName, SkillName, TitleName } from "./definitions/adventureland-data.js"
import { ItemData } from "./definitions/adventureland-server.js"

export class Item implements ItemData, GItem {
    // ItemData (required)
    public name: ItemName

    // ItemData (optional)
    public expires?: string
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
    public q?: number
    public range = 0
    public resistance = 0
    public stat = 0
    public str = 0
    public class?: CharacterType[]
    public compound?: { [T in Attribute]?: number }
    public e?: number
    public upgrade?: { [T in Attribute]?: number }
    public v?: string
    /** Set if `type` is `weapon` */
    public wtype?: WeaponType

    public G: GData

    public constructor(data: ItemData | ItemData, g: GData) {
        this.G = g
        // Set soft properties
        // NOTE: If `data` contains different values, we will overwrite these later
        const gData = g.items[data.name]
        for (const gKey in gData) {
            this[gKey] = g.items[data.name][gKey]
        }

        // Set everything else
        for (const key in data) this[key] = data[key]

        // Calculate additional stats from item level
        for (let i = 1; i <= this.level; i++) {
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
                        this[s] += Math.round(add * multiplier)
                        if (i >= 7) this[s] += 1
                    } else {
                        this[s] += add * multiplier
                    }
                }
            } else if (gData.compound) {
                for (const s in gData.compound) {
                    const add = gData.compound[s]
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
                this.resistance += 10
            } else {
                this.dex += 1
                this.int += 1
                this.str += 1
            }
        } else if (this.p && g.titles[this.p]) {
            // This item has a title, add the extra stats the title gives
            const gTitle = g.titles[this.p]
            for (const prop in gTitle) {
                if (prop == "achievement" || prop == "consecutive_200p_range_last_hits" || prop == "manual" || prop == "misc" || prop == "source" || prop == "title" || prop == "type") continue
                this[prop] += gTitle[prop]
            }
        }

        // Set stats based on attributes
        // TODO: Improve this for different stat scroll items
        if (this.stat_type && this.stat) this[this.stat_type] = (this[this.stat_type] ?? 0) + this.stat
    }

    public calculateGrade(): number {
        const gInfo = this.G.items[this.name]
        if (!gInfo.grades) return undefined // No information in G about this item
        let grade = 0
        for (const level of gInfo.grades) {
            if (this.level < level) break
            grade++
        }
        return grade
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
     * How much the player could get for selling this item to an NPC
     */
    public calculateNpcValue(): number {
        return Math.round(this.calculateValue() * this.G.multipliers.buy_to_sell)
    }

    /**
     * Returns the same value as the game's `calculate_item_value`
     */
    public calculateValue(): number {
        if (this.gift) return 1

        const gInfo = this.G.items[this.name]
        let value = gInfo.cash ? gInfo.g : gInfo.g
        if (gInfo.markup) value /= gInfo.markup
        if (this.level) {
            let grade = 0
            const grades = gInfo.grades || [11, 12]
            if (gInfo.compound) {
                for (let level = 1; level <= this.level; level++) {
                    value *= gInfo.cash ? 1.5 : 3.2
                    if (level > grades[1]) grade = 2
                    else if (level > grades[0]) grade = 1
                    if (gInfo.type === "booster") value *= 0.75
                    else value += this.G.items[`cscroll${grade}`].g / 2.4
                }
            } else {
                let sValue = 0
                for (let level = 1; level <= this.level; level++) {
                    if (level > grades[1]) grade = 2
                    else if (level > grades[0]) grade = 1
                    sValue += this.G.items[`scroll${grade}`].g / 2
                    if (level >= 7) {
                        value *= 3
                        sValue *= 1.32
                    } else if (level >= 6) {
                        value *= 2.4
                    } else if (level >= 4) {
                        value *= 2
                    }
                    if (level === 9) {
                        value *= 2.64
                        value += 400_000
                    }
                    if (level === 10) {
                        value *= 5
                    }
                    if (level === 12) {
                        value *= 0.8
                    }
                }
                value += sValue
            }
        }
        if (this.expires) value /= 8

        return Math.round(value)
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