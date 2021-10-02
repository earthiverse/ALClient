import Mongoose from "mongoose"
export * from "./achievements/achievements.model.js"
export * from "./achievements/achievements.types.js"
export * from "./auths/auths.model.js"
export * from "./auths/auths.types.js"
export * from "./deaths/deaths.model.js"
export * from "./deaths/deaths.types.js"
export * from "./entities/entities.model.js"
export * from "./entities/entities.types.js"
export * from "./npcs/npcs.model.js"
export * from "./npcs/npcs.types.js"
export * from "./players/players.model.js"
export * from "./players/players.types.js"

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

        const connect = await Mongoose.connect(uri)

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