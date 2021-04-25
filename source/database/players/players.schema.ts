import pkg from "mongoose"
const { Schema } = pkg

const PlayerSchema = new Schema({
    name: { type: String, required: true },
    map: String,
    x: Number,
    y: Number,
    serverRegion: String,
    serverIdentifier: String,
    s: { type: Object, required: false },
    lastSeen: { type: Number, required: false }
})

PlayerSchema.index({ name: 1 }, { unique: true }) // Characters can only be on one server at a time
PlayerSchema.index({ serverRegion: 1, serverIdentifier: 1 })
PlayerSchema.index({ lastSeen: 1 })

export default PlayerSchema