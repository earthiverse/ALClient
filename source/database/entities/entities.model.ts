import pkg from "mongoose"
const { model } = pkg

import { IEntityDocument } from "./entities.types.js"
import EntitySchema from "./entities.schema.js"

export const EntityModel = model<IEntityDocument>("entity", EntitySchema)
EntityModel.createIndexes().catch((e) => {
    if (pkg.connection.readyState) console.error(e)
})
