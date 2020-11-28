import pkg from "mongoose"
const { model } = pkg

import { IUserDocument } from "./users.types"
import UserSchema from "./users.schema"

export const UserModel = model<IUserDocument>("user", UserSchema)
UserModel.createIndexes()