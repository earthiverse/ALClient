import { Document, Model } from "mongoose"
import { MonsterName } from "../../definitions/adventureland-data.js"

export interface IAchievement {
    date: number
    name: string
    monsters: { [T in MonsterName]: [number, string] }
    max: { [T in MonsterName]: number }
}

export interface IAchievementDocument extends IAchievement, Document {}

export type IAchievementModel = Model<IAchievementDocument>
