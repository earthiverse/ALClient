import pkg from "mongoose"
const { Schema } = pkg

const ServerSchema = new Schema({
    __v: {
        select: false,
        type: Number
    },
    S: { required: false, type: Object },
    lastUpdated: { type: Number },
    serverIdentifier: String,
    serverRegion: String,
})

ServerSchema.index({ serverIdentifier: 1, serverRegion: 1 }, { unique: true })

export default ServerSchema