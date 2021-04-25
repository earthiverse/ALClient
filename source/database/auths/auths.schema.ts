import pkg from "mongoose"
const { Schema } = pkg

const AuthSchema = new Schema({
    email: String,
    userID: { type: String, required: false },
    userAuth: { type: String, required: false }
})

AuthSchema.index({ email: 1 }, { unique: true })

export default AuthSchema