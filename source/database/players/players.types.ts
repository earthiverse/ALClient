import { Document, Model } from "mongoose"
import { ServerRegion, ServerIdentifier, StatusInfo } from "../../definitions/adventureland"
import { MapName } from "../../definitions/adventureland-data"

export interface IPlayer {
    name: string
    map: MapName
    x: number
    y: number
    serverRegion: ServerRegion
    serverIdentifier: ServerIdentifier
    s?: StatusInfo
    lastSeen?: number
}

export interface IPlayerDocument extends IPlayer, Document { }

export type IPlayerModel = Model<IPlayerDocument>
// export interface IPlayerModel extends Model<IPlayerDocument> { }