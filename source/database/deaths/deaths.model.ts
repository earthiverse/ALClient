import pkg from "mongoose"
const { model } = pkg

import type { IDeathDocument } from "./deaths.types.js"
import DeathSchema from "./deaths.schema.js"

export const DeathModel = model<IDeathDocument>("Death", DeathSchema)
DeathModel.createIndexes().catch((e) => {
    if (pkg.connection.readyState) console.error(e)
})
