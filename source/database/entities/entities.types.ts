import { Document, Model } from "mongoose"
import { ServerRegion, MapName, ServerIdentifier, MonsterName } from "../../definitions/adventureland"

export interface IEntity {
    map: MapName
    x: number
    y: number
    serverRegion: ServerRegion
    serverIdentifier: ServerIdentifier
    type: MonsterName
    name?: string
    level?: number
    hp?: number
    target?: string
    lastSeen?: number
}

export interface IEntityDocument extends IEntity, Document { }

export type IEntityModel = Model<IEntityDocument>
// export interface IEntityModel extends Model<IUserDocument> { }