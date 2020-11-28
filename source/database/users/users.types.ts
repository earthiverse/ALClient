import { Document, Model } from "mongoose"

export interface IUser {
    email: string
    password: string
    userID?: string
    userAuth?: string
}

export interface IUserDocument extends IUser, Document { }

export type IUserModel = Model<IUserDocument>
// export interface IUserModel extends Model<IUserDocument> { }