import pkg from "mongoose"
const { model } = pkg

import { INPCDocument } from "./npcs.types.js"
import NPCSchema from "./npcs.schema.js"

export const NPCModel = model<INPCDocument>("npc", NPCSchema)
NPCModel.createIndexes().catch((e) => {
    if (pkg.connection.readyState) console.error(e)
})
