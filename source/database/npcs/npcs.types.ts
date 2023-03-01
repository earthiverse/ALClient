import { Document, Model } from "mongoose"
import { ServerRegion, ServerIdentifier } from "../../definitions/adventureland.js"
import { MapName } from "../../definitions/adventureland-data.js"
import { ItemDataTrade } from "../../index.js"

export interface INPC {
    name: string
    map: MapName
    x: number
    y: number
    items?: ItemDataTrade[]
    serverRegion: ServerRegion
    serverIdentifier: ServerIdentifier
    lastSeen?: number
}

export interface INPCDocument extends INPC, Document { }

export type INPCModel = Model<INPCDocument>