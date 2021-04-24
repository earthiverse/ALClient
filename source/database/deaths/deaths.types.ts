import { Document, Model } from "mongoose"
import { ServerRegion, ServerIdentifier } from "../../definitions/adventureland"
import { MapName } from "../../definitions/adventureland-data"

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

export interface IDeathDocument extends IDeath, Document { }

export type IDeathModel = Model<IDeathDocument>
// export interface IUserModel extends Model<IUserDocument> { }