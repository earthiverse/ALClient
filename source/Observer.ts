import socketio from "socket.io-client"
import { ServerData, WelcomeData, LoadedData } from "./definitions/adventureland-server"
import { ServerRegion, ServerIdentifier, GData, MapName } from "./definitions/adventureland"

export class Observer {
    public socket: SocketIOClient.Socket;

    public G: GData;

    protected serverRegion: ServerRegion;
    protected serverIdentifier: ServerIdentifier;
    protected map: MapName;
    protected x: number;
    protected y: number;

    constructor(serverData: ServerData, g: GData, reconnect = false) {
        this.serverRegion = serverData.region
        this.serverIdentifier = serverData.name
        this.G = g

        this.socket = socketio(`ws://${serverData.addr}:${serverData.port}`, {
            autoConnect: false,
            reconnection: reconnect,
            transports: ["websocket"]
        })

        this.socket.on("welcome", () => {
            // Send a response that we're ready to go
            this.socket.emit("loaded", {
                height: 1080,
                width: 1920,
                scale: 2,
                success: 1
            } as LoadedData)
        })
    }

    public async connect(): Promise<unknown> {
        console.log(`Connecting to ${this.serverRegion}${this.serverIdentifier}...`)
        const connected = new Promise<unknown>((resolve, reject) => {
            this.socket.on("welcome", (data: WelcomeData) => {
                if (data.region !== this.serverRegion || data.name !== this.serverIdentifier) {
                    reject(`We wanted the server ${this.serverRegion}${this.serverIdentifier}, but we are on ${data.region}${data.name}.`)
                }

                resolve()
            })

            setTimeout(() => {
                reject("Failed to start within 10s.")
            }, 10000)
        })

        this.socket.open()
        return connected
    }
}