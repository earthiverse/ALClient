import pkg from "mongoose"
const { model } = pkg

import type { IBankDocument } from "./banks.types.js"
import BankSchema from "./banks.schema.js"

export const BankModel = model<IBankDocument>("bank", BankSchema)
BankModel.createIndexes().catch((e) => {
    if (pkg.connection.readyState) console.error(e)
})
