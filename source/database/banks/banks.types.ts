import type { Document, Model } from "mongoose"
import type { BankInfo } from "../../definitions/adventureland.js"

export interface IBank extends BankInfo {
    lastUpdated?: number
    owner: string
}

export interface IBankDocument extends IBank, Document {}

export type IBankModel = Model<IBankDocument>
