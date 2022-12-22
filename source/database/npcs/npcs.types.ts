import { Document, Model } from "mongoose"
import { ServerRegion, ServerIdentifier } from "../../definitions/adventureland.js"
import { MapName } from "../../definitions/adventureland-data.js"

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

export type INPCModel = Model<INPCDocument>