import pkg from "mongoose"
const { model } = pkg

import type { IPlayerDocument } from "./players.types.js"
import PlayerSchema from "./players.schema.js"

export const PlayerModel = model<IPlayerDocument>("player", PlayerSchema)
PlayerModel.createIndexes().catch((e) => {
    if (pkg.connection.readyState) console.error(e)
})
