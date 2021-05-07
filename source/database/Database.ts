import Mongoose from "mongoose"
export * from "./auths/auths.model"
export * from "./deaths/deaths.model"
export * from "./entities/entities.model"
export * from "./npcs/npcs.model"
export * from "./players/players.model"

export class Database {
    public static lastMongoUpdate = new Map<string, Date>()
    public static connection: Mongoose.Connection

    protected constructor() {
        // Private to force static methods
    }

    public static async connect(uri = "mongodb://localhost:27017/alclient"): Promise<typeof Mongoose> {
        // Check if we're already connected
        if (this.connection) {
            await Mongoose.disconnect()
        }

        const connect = Mongoose.connect(uri, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })

        this.connection = Mongoose.connection

        this.connection.on("error", () => {
            console.error("Error connecting to MongoDB")
        })

        return connect
    }

    public static disconnect(): void {
        // Check if we never connected
        if (!this.connection) return

        Mongoose.disconnect()
    }
}