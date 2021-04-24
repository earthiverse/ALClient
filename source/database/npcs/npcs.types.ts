import { Document, Model } from "mongoose"
import { ServerRegion, ServerIdentifier } from "../../definitions/adventureland"
import { MapName } from "../../definitions/adventureland-data"

export interface INPC {
    name: string
    map: MapName
    x: number
    y: number
    serverRegion: ServerRegion
    serverIdentifier: ServerIdentifier
    lastSeen?: number
}

export interface INPCDocument extends INPC, Document { }

export type IEntityModel = Model<INPCDocument>
// export interface IEntityModel extends Model<IUserDocument> { }