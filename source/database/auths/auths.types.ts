import { Document, Model } from "mongoose"

export interface IAuth {
    email: string
    userID?: string
    userAuth?: string
}

export interface IAuthDocument extends IAuth, Document { }

export type IAuthModel = Model<IAuthDocument>
// export interface IUserModel extends Model<IAuthDocument> { }