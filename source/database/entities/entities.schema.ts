import pkg from "mongoose"
const { Schema } = pkg

const EntitySchema = new Schema({
    __v: {
        select: false,
        type: Number
    },
    hp: { required: false, type: Number },
    in: String,
    lastSeen: { required: false, type: Number },
    level: { required: false, type: Number },
    map: String,
    name: { required: false, type: String },
    serverIdentifier: String,
    serverRegion: String,
    target: { required: false, type: String },
    type: String,
    x: Number,
    y: Number
})

EntitySchema.index({ type: 1 })
EntitySchema.index({ name: 1, serverIdentifier: 1, serverRegion: 1, type: 1 }, { unique: true })
EntitySchema.index({ lastSeen: 1 })

export default EntitySchema