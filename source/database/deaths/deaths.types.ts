import { Document, Model } from "mongoose"
import { ServerRegion, MapName, ServerIdentifier } from "../../definitions/adventureland"

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