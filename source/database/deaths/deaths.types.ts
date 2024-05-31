import type { Document, Model } from "mongoose"
import type { ServerRegion, ServerIdentifier } from "../../definitions/adventureland.js"
import type { MapName } from "../../definitions/adventureland-data.js"

export interface IDeath {
    name: string
    cause: string
    map: MapName
    x: number
    y: number
    serverRegion: ServerRegion
    serverIdentifier: ServerIdentifier
    time: number
}

export interface IDeathDocument extends IDeath, Document {}

export type IDeathModel = Model<IDeathDocument>
