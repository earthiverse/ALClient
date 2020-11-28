import pkg from "mongoose"
const { model } = pkg

import { ICharacterDocument } from "./characters.types"
import CharacterSchema from "./characters.schema"

export const CharacterModel = model<ICharacterDocument>("character", CharacterSchema)
CharacterModel.createIndexes()