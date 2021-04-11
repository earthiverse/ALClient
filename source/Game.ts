import axios from "axios"
import fs from "fs"
import { ServerData, CharacterListData, MailData, MailMessageData, PullMerchantCharData, PullMerchantData } from "./definitions/adventureland-server"
import { ServerRegion, ServerIdentifier, CharacterType } from "./definitions/adventureland"
import { Mage } from "./Mage"
import { Merchant } from "./Merchant"
import { Observer } from "./Observer"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter"
import { Character } from "./Character"
import { Priest } from "./Priest"
import { Ranger } from "./Ranger"
import { Rogue } from "./Rogue"
import { Warrior } from "./Warrior"
import { GData2 } from "./definitions/adventureland-data"

export class Game {
    protected static user: { userID: string, userAuth: string }

    // TODO: Move this type to type definitions
    protected static servers: { [T in ServerRegion]?: { [T in ServerIdentifier]?: ServerData } } = {}
    // TODO: Move this type to type definitions
    protected static characters: { [T in string]?: CharacterListData } = {}

    public static players: { [T in string]: Character } = {}
    public static observers: { [T in string]: Observer } = {}

    public static G: GData2

    protected constructor() {
        // Private to force static methods
    }

    public static async disconnect(): Promise<void> {
        // Stop all characters
        await this.stopAllCharacters()

        // Stop all observers
        await this.stopAllObservers()
    }

    static async getGData(): Promise<GData2> {
        if (this.G) return this.G

        console.debug("Updating 'G' data...")
        const response = await axios.get("http://adventure.land/data.js")
        if (response.status == 200) {
            // Update G with the latest data
            const matches = response.data.match(/var\s+G\s*=\s*(\{.+\});/)
            this.G = JSON.parse(matches[1]) as GData2
            console.debug("Updated 'G' data!")
            return this.G
        } else {
            console.error(response)
            console.error("Error fetching http://adventure.land/data.js")
        }
    }

    static async getMail(all = true): Promise<MailMessageData[]> {
        if (!this.user) return Promise.reject("You must login first.")
        let data = await axios.post<MailData[]>("http://adventure.land/api/pull_mail", "method=pull_mail&arguments={}", { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
        const mail: MailMessageData[] = []

        while (data.data.length > 0) {
            mail.push(...data.data[0].mail)

            if (all && data.data[0].more) {
                // Get more mail
                data = await axios.post("http://adventure.land/api/pull_mail", `method=pull_mail&arguments={"cursor":"${data.data[0].cursor}"}`, { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
            } else {
                break
            }
        }

        return mail
    }

    static async getMerchants(): Promise<PullMerchantCharData[]> {
        if (!this.user) return Promise.reject("You must login first.")
        //const merchants: PullMerchantsData[] = []
        const merchants: PullMerchantCharData[] = []

        const data = await axios.post<PullMerchantData[]>("http://adventure.land/api/pull_merchants", "method=pull_merchants", { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
        for(const datum of data.data) {
            if(datum.type == "merchants") {
                for(const char of datum.chars) {
                    merchants.push(char)
                }
            }
        }

        return merchants
    }

    /**
     * The following function will tell the server that we've read the following mail message
     * @param mailID The mail message to mark as 'read'
     */
    static async markMailAsRead(mailID: string): Promise<void> {
        if (!this.user) return Promise.reject("You must login first.")
        const data = await axios.post("http://adventure.land/api/read_mail", `method=read_mail&arguments={"mail": "${mailID}"}`, { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
        return data.data[0]
    }

    static async login(email: string, password: string): Promise<boolean> {
        // See if we already have a userAuth stored in our database

        // Login and save the auth
        console.debug("Logging in...")
        const login = await axios.post("https://adventure.land/api/signup_or_login", `method=signup_or_login&arguments={"email":"${email}","password":"${password}","only_login":true}`)
        let loginResult
        for (const datum of login.data) {
            if (datum.message) {
                loginResult = datum
                break
            }
        }
        if (loginResult && loginResult.message == "Logged In!") {
            console.debug("Logged in!")
            // We successfully logged in
            // Find the auth cookie and save it
            for (const cookie of login.headers["set-cookie"]) {
                const result = /^auth=(.+?);/.exec(cookie)
                if (result) {
                    // Save our data to the database
                    this.user = {
                        userID: result[1].split("-")[0],
                        userAuth: result[1].split("-")[1]
                    }
                    break
                }
            }
        } else if (loginResult && loginResult.message) {
            // We failed logging in, and we have a reason from the server
            console.error(loginResult.message)
            return Promise.reject(loginResult.message)
        } else {
            // We failed logging in, but we don't know what went wrong
            console.error(login.data)
            return Promise.reject()
        }

        return this.updateServersAndCharacters()
    }

    static async loginJSONFile(path: string): Promise<boolean> {
        const data: { email: string, password: string } = JSON.parse(fs.readFileSync(path, "utf8"))
        return this.login(data.email, data.password)
    }

    static async startCharacter(cName: string, sRegion: ServerRegion, sID: ServerIdentifier, cType?: CharacterType): Promise<PingCompensatedCharacter> {
        if (!this.user) return Promise.reject("You must login first.")
        if (!this.characters) await this.updateServersAndCharacters()
        if (!this.G) await this.getGData()

        const userID = this.user.userID
        const userAuth = this.user.userAuth
        const characterID = this.characters[cName].id

        try {
            // Create the player and connect
            let player: PingCompensatedCharacter
            if (cType == "mage") player = new Mage(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
            else if (cType == "merchant") player = new Merchant(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
            else if (cType == "priest") player = new Priest(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
            else if (cType == "ranger") player = new Ranger(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
            else if (cType == "rogue") player = new Rogue(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
            else if (cType == "warrior") player = new Warrior(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
            else player = new PingCompensatedCharacter(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])

            await player.connect()

            this.players[cName] = player
            return player
        } catch (e) {
            return Promise.reject(e)
        }
    }

    static async startMage(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Mage> {
        return await Game.startCharacter(cName, sRegion, sID, "mage") as Mage
    }

    static async startMerchant(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Merchant> {
        return await Game.startCharacter(cName, sRegion, sID, "merchant") as Merchant
    }

    static async startPriest(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Priest> {
        return await Game.startCharacter(cName, sRegion, sID, "priest") as Priest
    }

    static async startRanger(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Ranger> {
        return await Game.startCharacter(cName, sRegion, sID, "ranger") as Ranger
    }

    static async startRogue(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Rogue> {
        return await Game.startCharacter(cName, sRegion, sID, "rogue") as Rogue
    }

    static async startWarrior(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Warrior> {
        return await Game.startCharacter(cName, sRegion, sID, "warrior") as Warrior
    }

    static async startObserver(region: ServerRegion, id: ServerIdentifier): Promise<Observer> {
        try {
            const g = await Game.getGData()
            const observer = new Observer(this.servers[region][id], g, true)
            await observer.connect()

            this.observers[this.servers[region][id].key] = observer
            return observer
        } catch (e) {
            return Promise.reject(e)
        }
    }

    static async stopAllCharacters(): Promise<void> {
        for (const characterName in this.players) await this.stopCharacter(characterName)
    }

    static async stopAllObservers(): Promise<void> {
        for (const region in this.observers)
            for (const id in this.observers[region])
                await this.stopObserver(region as ServerRegion, id as ServerIdentifier)
    }

    public static async stopCharacter(characterName: string): Promise<void> {
        await this.players[characterName].disconnect()
        delete this.players[characterName]
    }

    public static async stopObserver(region: ServerRegion, id: ServerIdentifier): Promise<void> {
        this.observers[this.servers[region][id].key].socket.close()
        this.observers[this.servers[region][id].key].socket.removeAllListeners()
        delete this.observers[region][id]
    }

    static async updateServersAndCharacters(): Promise<boolean> {
        if (!this.user) return Promise.reject("You must login first.")
        const data = await axios.post("http://adventure.land/api/servers_and_characters", "method=servers_and_characters&arguments={}", { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })

        if (data.status == 200) {
            // Populate server information
            for (const serverData of data.data[0].servers as ServerData[]) {
                if (!this.servers[serverData.region]) this.servers[serverData.region] = {}
                this.servers[serverData.region][serverData.name] = serverData
            }

            // Populate character information
            for (const characterData of data.data[0].characters as CharacterListData[]) {
                this.characters[characterData.name] = characterData
            }

            return Promise.resolve(true)
        } else {
            console.error(data)
        }

        return Promise.reject("Error fetching http://adventure.land/api/servers_and_characters")
    }
}