import { Document, Model } from "mongoose"
import { ServerInfoData } from "../../definitions/adventureland-server.js"
import { ServerIdentifier, ServerRegion } from "../../definitions/adventureland.js"

export interface IServer {
    S: ServerInfoData
    lastUpdated: number
    serverIdentifier: ServerIdentifier
    serverRegion: ServerRegion
}

export interface IServerDocument extends IServer, Document { }

export type IServerModel = Model<IServerDocument>