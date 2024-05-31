import pkg from "mongoose"
const { model } = pkg

import type { IInstanceDocument } from "./instances.types.js"
import InstanceSchema from "./instances.schema.js"

export const InstanceModel = model<IInstanceDocument>("instance", InstanceSchema)
InstanceModel.createIndexes().catch((e) => {
    if (pkg.connection.readyState) console.error(e)
})
