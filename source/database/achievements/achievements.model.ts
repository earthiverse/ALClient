import pkg from "mongoose"
const { model } = pkg

import { IAchievementDocument } from "./achievements.types.js"
import AchievementSchema from "./achievements.schema.js"

export const AchievementModel = model<IAchievementDocument>("achievement", AchievementSchema)
AchievementModel.createIndexes().catch((e) => {
    if (pkg.connection.readyState) console.error(e)
})
