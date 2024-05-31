import type { Document, Model } from "mongoose"
import type { ServerInfoData } from "../../definitions/adventureland-server.js"
import type { ServerIdentifier, ServerRegion } from "../../definitions/adventureland.js"
import type { MapName, MonsterName } from "../../definitions/adventureland-data.js"

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
