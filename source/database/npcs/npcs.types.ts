import type { Document, Model } from "mongoose"
import type { ServerRegion, ServerIdentifier } from "../../definitions/adventureland.js"
import type { MapName } from "../../definitions/adventureland-data.js"
import type { ItemDataTrade } from "../../definitions/adventureland-server.js"

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

export interface INPCDocument extends INPC, Document {}

export type INPCModel = Model<INPCDocument>
