import pkg from "mongoose"
const { Schema } = pkg

const RespawnSchema = new Schema({
    __v: {
        select: false,
        type: Number,
    },
    estimatedRespawn: Number,
    serverIdentifier: String,
    serverRegion: String,
    type: String,
    map: String,
    x: Number,
    y: Number,
})

RespawnSchema.index({ type: 1 })
RespawnSchema.index({ serverIdentifier: 1, serverRegion: 1, type: 1 }, { unique: true })
RespawnSchema.index({ estimatedRespawn: 1 })

export default RespawnSchema
