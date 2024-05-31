import { Document, Model } from "mongoose"
import { ServerInfoData } from "../../definitions/adventureland-server.js"
import { ServerIdentifier, ServerRegion } from "../../definitions/adventureland.js"
import { MapName, MonsterName } from "../../definitions/adventureland-data.js"

export interface IInstance {
    S: ServerInfoData
    serverIdentifier: ServerIdentifier
    serverRegion: ServerRegion
    map: MapName
    /** Instance name */
    in: string
    firstEntered: number
    lastEntered: number
    killed?: {
        [T in MonsterName]?: number
    }
}

export interface IInstanceDocument extends IInstance, Document {}

export type IInstanceModel = Model<IInstanceDocument>
