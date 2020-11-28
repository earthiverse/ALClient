import pkg from "mongoose"
const { Schema } = pkg

const UserSchema = new Schema({
    email: String,
    password: String,
    userID: { type: String, required: false },
    userAuth: { type: String, required: false }
})

UserSchema.index({ email: 1 }, { unique: true })

export default UserSchema