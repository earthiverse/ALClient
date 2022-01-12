import pkg from "mongoose"
const { model } = pkg

import { IRespawnDocument } from "./respawns.types.js"
import RespawnSchema from "./respawns.schema.js"

export const RespawnModel = model<IRespawnDocument>("respawn", RespawnSchema)
RespawnModel.createIndexes().catch((e) => { if (pkg.connection.readyState) console.error(e) })