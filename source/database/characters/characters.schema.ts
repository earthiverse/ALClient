import pkg from "mongoose"
const { Schema } = pkg

const CharacterSchema = new Schema({
    name: String,
    map: String,
    x: Number,
    y: Number,
    serverRegion: String,
    serverIdentifier: String,
    s: { type: Object, required: false },
    lastSeen: { type: Number, required: false }
})

CharacterSchema.index({ name: 1 }, { unique: true }) // Characters can only be on one server at a time
CharacterSchema.index({ serverRegion: 1, serverIdentifier: 1 })
CharacterSchema.index({ lastSeen: 1 })

export default CharacterSchema