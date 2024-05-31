import { Document, Model } from "mongoose"
import { ServerRegion, ServerIdentifier } from "../../definitions/adventureland.js"
import { MonsterName } from "../../definitions/adventureland-data.js"

export interface IRespawn {
    estimatedRespawn: number
    serverRegion: ServerRegion
    serverIdentifier: ServerIdentifier
    type: MonsterName
}

export interface IRespawnDocument extends IRespawn, Document {}

export type IRespawnModel = Model<IRespawnDocument>
