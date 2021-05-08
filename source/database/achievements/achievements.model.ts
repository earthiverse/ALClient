import pkg from "mongoose"
const { model } = pkg

import { IAchievementDocument } from "./achievements.types"
import AchievementSchema from "./achievements.schema"

export const AchievementModel = model<IAchievementDocument>("achievement", AchievementSchema)
AchievementModel.createIndexes()