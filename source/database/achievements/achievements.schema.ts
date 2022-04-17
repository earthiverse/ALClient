import pkg from "mongoose"
const { Schema } = pkg

const AchievementSchema = new Schema({
    __v: {
        select: false,
        type: Number
    },
    date: { type: Number, required: true },
    name: { type: String, required: true },
    monsters: { type: Object, required: true },
    max: { type: Object, required: true }
})

AchievementSchema.index({ name: 1, date: 1 }, { unique: true })

export default AchievementSchema