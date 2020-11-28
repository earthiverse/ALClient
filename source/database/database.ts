import Mongoose from "mongoose"

let database: Mongoose.Connection
export const connect = (): void => {
    // TODO: Move this to a config file
    const uri = "mongodb://localhost:27017/adventureland"

    if (database) {
        return
    }

    Mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })

    database = Mongoose.connection

    database.on("error", () => {
        console.error("Error connecting to MongoDB")
    })
}

export const disconnect = (): void => {
    if (!database) {
        return
    }

    Mongoose.disconnect()
}