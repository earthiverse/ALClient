import pkg from "mongoose"
const { Schema } = pkg

const DeathSchema = new Schema({
    __v: {
        select: false,
        type: Number
    },
    _id: {
        auto: true,
        select: false,
        type: Schema.Types.ObjectId
    },
    name: String,
    cause: String,
    map: String,
    x: Number,
    y: Number,
    serverRegion: String,
    serverIdentifier: String,
    time: Number
})

DeathSchema.index({ serverRegion: 1, serverIdentifier: 1 })
DeathSchema.index({ name: 1 })
DeathSchema.index({ time: 1 })

export default DeathSchema