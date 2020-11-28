import pkg from "mongoose"
const { model } = pkg

import { IDeathDocument } from "./deaths.types"
import DeathSchema from "./deaths.schema"

export const DeathModel = model<IDeathDocument>("Death", DeathSchema)
DeathModel.createIndexes()