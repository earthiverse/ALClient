import pkg from "mongoose"
const { model } = pkg

import { IPlayerDocument } from "./players.types"
import PlayerSchema from "./players.schema"

export const PlayerModel = model<IPlayerDocument>("player", PlayerSchema)
PlayerModel.createIndexes()