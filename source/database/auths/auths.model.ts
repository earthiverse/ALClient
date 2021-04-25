import pkg from "mongoose"
const { model } = pkg

import { IAuthDocument } from "./auths.types"
import AuthSchema from "./auths.schema"

export const AuthModel = model<IAuthDocument>("auth", AuthSchema)
AuthModel.createIndexes()