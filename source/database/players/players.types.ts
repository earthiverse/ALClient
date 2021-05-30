import { Document, Model } from "mongoose"
import { ServerRegion, ServerIdentifier, StatusInfo, SlotInfo } from "../../definitions/adventureland"
import { CharacterType, MapName } from "../../definitions/adventureland-data"

export interface IPlayer {
    name: string
    map: MapName
    x: number
    y: number
    serverRegion: ServerRegion
    serverIdentifier: ServerIdentifier
    s?: StatusInfo
    type: CharacterType
    slots: SlotInfo
    lastSeen?: number
}

export interface IPlayerDocument extends IPlayer, Document { }

export type IPlayerModel = Model<IPlayerDocument>
// export interface IPlayerModel extends Model<IPlayerDocument> { }