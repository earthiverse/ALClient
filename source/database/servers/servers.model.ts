import pkg from "mongoose"
const { model } = pkg

import { IServerDocument } from "./servers.types.js"
import ServerSchema from "./servers.schema.js"

export const ServerModel = model<IServerDocument>("server", ServerSchema)
ServerModel.createIndexes().catch((e) => { if (pkg.connection.readyState) console.error(e) })