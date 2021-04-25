import pkg from "mongoose"
const { Schema } = pkg

const EntitySchema = new Schema({
    map: String,
    x: Number,
    y: Number,
    serverRegion: String,
    serverIdentifier: String,
    type: String,
    name: { type: String, required: false },
    level: { type: Number, required: false },
    hp: { type: Number, required: false },
    target: { type: String, required: false },
    lastSeen: { type: Number, required: false }
})

EntitySchema.index({ type: 1 })
EntitySchema.index({ serverRegion: 1, serverIdentifier: 1, name: 1, type: 1 }, { unique: true })
EntitySchema.index({ lastSeen: 1 })

export default EntitySchema