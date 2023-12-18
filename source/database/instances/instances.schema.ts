import pkg from "mongoose"
const { Schema } = pkg

const InstanceSchema = new Schema({
    __v: {
        select: false,
        type: Number
    },
    firstEntered: Number,
    in: String,
    killed: { required: false, type: Object },
    lastEntered: Number,
    map: String,
    serverIdentifier: String,
    serverRegion: String,
})

InstanceSchema.index({ in: 1, serverIdentifier: 1, serverRegion: 1 }, { partialFilterExpression: { in: { $type: "string" } }, unique: true })

export default InstanceSchema