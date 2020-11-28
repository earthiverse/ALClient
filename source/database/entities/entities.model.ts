import pkg from "mongoose"
const { model } = pkg

import { IEntityDocument } from "./entities.types"
import EntitySchema from "./entities.schema"

export const EntityModel = model<IEntityDocument>("entity", EntitySchema)
EntityModel.createIndexes()