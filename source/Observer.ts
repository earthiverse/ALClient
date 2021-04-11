import socketio from "socket.io-client"
import { ServerData, WelcomeData, LoadedData } from "./definitions/adventureland-server"
import { ServerRegion, ServerIdentifier } from "./definitions/adventureland"
import { GData2, MapName } from "./definitions/adventureland-data"

export class Observer {
    public socket: SocketIOClient.Socket;

    public G: GData2;

    protected serverRegion: ServerRegion;
    protected serverIdentifier: ServerIdentifier;
    protected map: MapName;
    protected x: number;
    protected y: number;

    constructor(serverData: ServerData, g: GData2, reconnect = false) {
        this.serverRegion = serverData.region
        this.serverIdentifier = serverData.name
        this.G = g

        this.socket = socketio(`ws://${serverData.addr}:${serverData.port}`, {
            autoConnect: false,
            reconnection: reconnect,
            transports: ["websocket"]
        })
    }

    public async connect(): Promise<void> {
        console.debug(`Connecting to ${this.serverRegion}${this.serverIdentifier}...`)
        const connected = new Promise<void>((resolve, reject) => {
            this.socket.on("welcome", (data: WelcomeData) => {
                if (data.region !== this.serverRegion || data.name !== this.serverIdentifier) {
                    reject(`We wanted the server ${this.serverRegion}${this.serverIdentifier}, but we are on ${data.region}${data.name}.`)
                } else {
                    this.socket.emit("loaded", {
                        height: 1080,
                        width: 1920,
                        scale: 2,
                        success: 1
                    } as LoadedData)
                    resolve()
                }
            })

            setTimeout(() => {
                reject("Failed to start within 10s.")
            }, 10000)
        })

        this.socket.open()
        return connected
    }
}