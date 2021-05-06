import Mongoose from "mongoose"

export class Database {
    public static lastMongoUpdate = new Map<string, Date>()
    public static connection: Mongoose.Connection

    protected constructor() {
        // Private to force static methods
    }

    public static connect(): void {
        // TODO: Move this to a config file
        const uri = "mongodb://localhost:27017/adventureland"

        // Check if we're already connected
        if (this.connection) return

        Mongoose.connect(uri, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })

        this.connection = Mongoose.connection

        this.connection.on("error", () => {
            console.error("Error connecting to MongoDB")
        })
    }

    public static disconnect(): void {
        // Check if we never connected
        if (!this.connection) return

        Mongoose.disconnect()
    }
}