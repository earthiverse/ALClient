import pkg from "mongoose"
const { model } = pkg

import { IAuthDocument } from "./auths.types"
import AuthSchema from "./auths.schema"

export const UserModel = model<IAuthDocument>("user", AuthSchema)
UserModel.createIndexes()