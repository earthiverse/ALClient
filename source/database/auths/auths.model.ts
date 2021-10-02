import pkg from "mongoose"
const { model } = pkg

import { IAuthDocument } from "./auths.types.js"
import AuthSchema from "./auths.schema.js"

export const AuthModel = model<IAuthDocument>("auth", AuthSchema)
AuthModel.createIndexes().catch((e) => { if (pkg.connection.readyState) console.error(e) })