import { Document, Model } from "mongoose"
import { ServerRegion, MapName, ServerIdentifier } from "../../definitions/adventureland"

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