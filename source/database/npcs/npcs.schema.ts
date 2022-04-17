import pkg from "mongoose"
const { Schema } = pkg

const NPCSchema = new Schema({
    __v: {
        select: false,
        type: Number
    },
    name: String,
    map: String,
    x: Number,
    y: Number,
    serverRegion: String,
    serverIdentifier: String,
    lastSeen: { type: Number, required: false }
})

NPCSchema.index({ serverRegion: 1, serverIdentifier: 1, name: 1 }, { unique: true })
NPCSchema.index({ lastSeen: 1 })

export default NPCSchema