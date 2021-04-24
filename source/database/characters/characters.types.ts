import { Document, Model } from "mongoose"
import { ServerRegion, ServerIdentifier, StatusInfo } from "../../definitions/adventureland"
import { MapName } from "../../definitions/adventureland-data"

export interface ICharacter {
    name: string
    map: MapName
    x: number
    y: number
    serverRegion: ServerRegion
    serverIdentifier: ServerIdentifier
    s?: StatusInfo
    lastSeen?: number
}

export interface ICharacterDocument extends ICharacter, Document { }

export type ICharacterModel = Model<ICharacterDocument>
// export interface IUserModel extends Model<IUserDocument> { }