import type { Document, Model } from "mongoose"
import type { ServerInfoData } from "../../definitions/adventureland-server.js"
import type { ServerIdentifier, ServerRegion } from "../../definitions/adventureland.js"

export interface IServer {
    S: ServerInfoData
    lastUpdated: number
    serverIdentifier: ServerIdentifier
    serverRegion: ServerRegion
}

export interface IServerDocument extends IServer, Document {}

export type IServerModel = Model<IServerDocument>
