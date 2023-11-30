import pkg from "mongoose"
const { model } = pkg

import { IServerDocument } from "./instances.types.js"
import ServerSchema from "./instances.schema.js"

export const InstanceModel = model<IServerDocument>("instance", ServerSchema)
InstanceModel.createIndexes().catch((e) => { if (pkg.connection.readyState) console.error(e) })