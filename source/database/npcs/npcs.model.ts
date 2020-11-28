import pkg from "mongoose"
const { model } = pkg

import { INPCDocument } from "./npcs.types"
import NPCSchema from "./npcs.schema"

export const NPCModel = model<INPCDocument>("npc", NPCSchema)
NPCModel.createIndexes()