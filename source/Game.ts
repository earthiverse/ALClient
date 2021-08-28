import axios from "axios"
import fs from "fs"
import { AuthModel, Database, PlayerModel } from "./database/Database"
import { ServerRegion, ServerIdentifier } from "./definitions/adventureland"
import { CharacterType, GData } from "./definitions/adventureland-data"
import { ServerData, CharacterListData, MailData, MailMessageData, PullMerchantsCharData, PullMerchantsData } from "./definitions/adventureland-server"
import { Paladin } from "./Paladin"
import { Mage } from "./Mage"
import { Merchant } from "./Merchant"
import { Observer } from "./Observer"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter"
import { Priest } from "./Priest"
import { Ranger } from "./Ranger"
import { Rogue } from "./Rogue"
import { Warrior } from "./Warrior"

export class Game {
    protected static user: { userID: string, userAuth: string }

    public static servers: { [T in ServerRegion]?: { [T in ServerIdentifier]?: ServerData } } = {}
    public static characters: { [T in string]?: CharacterListData } = {}

    public static G: GData
    public static version: number

    protected constructor() {
        // Private to force static methods
    }

    static async getGData(cache = false): Promise<GData> {
        if (this.G) return this.G
        if (!this.version) await this.getVersion()
        const gFile = `G_${this.version}.json`
        try {
            // Check if there's cached data
            this.G = JSON.parse(fs.readFileSync(gFile, "utf8")) as GData
            return this.G
        } catch (e) {
            // There's no cached data, download it
            console.debug("Updating 'G' data...")
            const response = await axios.get<string>("http://adventure.land/data.js")
            if (response.status == 200) {
                // Update G with the latest data
                const matches = response.data.match(/var\s+G\s*=\s*(\{.+\});/)
                const rawG = matches[1]
                this.G = JSON.parse(rawG) as GData

                console.debug("Updated 'G' data!")

                if (cache) fs.writeFileSync(gFile, rawG)
                return this.G
            } else {
                console.error(response)
                console.error("Error fetching http://adventure.land/data.js")
            }
        }
    }

    static async getMail(all = true): Promise<MailMessageData[]> {
        if (!this.user) return Promise.reject("You must login first.")
        let response = await axios.post<MailData[]>("http://adventure.land/api/pull_mail", "method=pull_mail&arguments={}", { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
        const mail: MailMessageData[] = []

        while (response.data.length > 0) {
            mail.push(...response.data[0].mail)

            if (all && response.data[0].more) {
                // Get more mail
                response = await axios.post("http://adventure.land/api/pull_mail", `method=pull_mail&arguments={"cursor":"${response.data[0].cursor}"}`, { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
            } else {
                break
            }
        }

        return mail
    }

    static async getMerchants(): Promise<PullMerchantsCharData[]> {
        if (!this.user) return Promise.reject("You must login first.")
        //const merchants: PullMerchantsData[] = []
        const merchants: PullMerchantsCharData[] = []

        const data = await axios.post<PullMerchantsData[]>("http://adventure.land/api/pull_merchants", "method=pull_merchants", { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
        for (const datum of data.data) {
            if (datum.type == "merchants") {
                for (const char of datum.chars) {
                    merchants.push(char)
                }
            }
        }

        if (Database.connection) {
            const informationDate = Date.now() - 300000 /** Assume the information is 5 minutes old */

            // Update the database with the merchant's information
            const promises: Promise<unknown>[] = []
            for (const merchant of merchants) {
                const server = merchant.server.split(" ")
                promises.push(PlayerModel.updateOne({ lastSeen: { $lt: informationDate }, name: merchant.name }, {
                    lastSeen: informationDate,
                    map: merchant.map,
                    serverIdentifier: server[1] as ServerIdentifier,
                    serverRegion: server[0] as ServerRegion,
                    // We have to update all of the trade slots individually so we don't overwrite what they have equipped
                    "slots.trade1": merchant.slots.trade1,
                    "slots.trade2": merchant.slots.trade2,
                    "slots.trade3": merchant.slots.trade3,
                    "slots.trade4": merchant.slots.trade4,
                    "slots.trade5": merchant.slots.trade5,
                    "slots.trade6": merchant.slots.trade6,
                    "slots.trade7": merchant.slots.trade7,
                    "slots.trade8": merchant.slots.trade8,
                    "slots.trade9": merchant.slots.trade9,
                    "slots.trade10": merchant.slots.trade10,
                    "slots.trade11": merchant.slots.trade11,
                    "slots.trade12": merchant.slots.trade12,
                    "slots.trade13": merchant.slots.trade13,
                    "slots.trade14": merchant.slots.trade14,
                    "slots.trade15": merchant.slots.trade15,
                    "slots.trade16": merchant.slots.trade16,
                    "slots.trade17": merchant.slots.trade17,
                    "slots.trade18": merchant.slots.trade18,
                    "slots.trade19": merchant.slots.trade19,
                    "slots.trade20": merchant.slots.trade20,
                    "slots.trade21": merchant.slots.trade21,
                    "slots.trade22": merchant.slots.trade22,
                    "slots.trade23": merchant.slots.trade23,
                    "slots.trade24": merchant.slots.trade24,
                    "slots.trade25": merchant.slots.trade25,
                    "slots.trade26": merchant.slots.trade26,
                    "slots.trade27": merchant.slots.trade27,
                    "slots.trade28": merchant.slots.trade28,
                    "slots.trade29": merchant.slots.trade29,
                    "slots.trade30": merchant.slots.trade30,
                    x: merchant.x,
                    y: merchant.y
                }).exec())
            }
            await Promise.all(promises)
        }

        return merchants
    }

    static async getVersion(): Promise<number> {
        const response = await axios.get("http://adventure.land/comm")
        if (response.status == 200) {
            // Find the version
            const matches = (response.data as string).match(/var\s+VERSION\s*=\s*'(\d+)/)
            this.version = Number.parseInt(matches[1])

            return this.version
        } else {
            console.error(response)
            console.error("Error fetching http://adventure.land/comm")
        }
    }

    /**
     * The following function will tell the server that we've read the following mail message
     * @param mailID The mail message to mark as 'read'
     */
    static async markMailAsRead(mailID: string): Promise<void> {
        if (!this.user) return Promise.reject("You must login first.")
        const response = await axios.post("http://adventure.land/api/read_mail", `method=read_mail&arguments={"mail": "${mailID}"}`, { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
        return response.data[0]
    }

    static async login(email: string, password?: string, mongo?: string): Promise<boolean> {
        // Connect to Mongo
        if (mongo) await Database.connect(mongo)

        if (Database.connection) {
            // Use existing userAuth stored in our database if possible
            const find = await AuthModel.findOne({ email: email }).lean().exec()
            if (find?.userID && find?.userAuth) {
                console.debug("Using auth data from database...")
                this.user = { userAuth: find.userAuth, userID: find.userID }

                // TODO: Test and see if it's still a good auth. If it's not, delete it.

                return this.updateServersAndCharacters()
            }
        }

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
                        userAuth: result[1].split("-")[1],
                        userID: result[1].split("-")[0]
                    }
                    if (Database.connection) await AuthModel.updateOne({ email: email }, { userAuth: this.user.userAuth, userID: this.user.userID }, { upsert: true }).lean().exec()
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
            return Promise.reject("Failed logging in.")
        }

        return this.updateServersAndCharacters()
    }

    static async loginJSONFile(path: string): Promise<boolean> {
        const data: { email: string, password: string, mongo: string } = JSON.parse(fs.readFileSync(path, "utf8"))
        return this.login(data.email, data.password, data.mongo)
    }

    static async logoutEverywhere(): Promise<unknown> {
        if (!this.user) return Promise.reject("You must login first.")

        const response = await axios.post<unknown>("http://adventure.land/api/logout_everywhere", "method=logout_everywhere", { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })

        // Remove the auth from the database
        if (Database.connection) await AuthModel.deleteOne({ userID: this.user.userID }).exec()
        this.user = undefined

        return response.data
    }

    static async startCharacter(cName: string, sRegion: ServerRegion, sID: ServerIdentifier, cType?: CharacterType): Promise<PingCompensatedCharacter> {
        if (!this.user) return Promise.reject("You must login first.")
        if (!this.characters) await this.updateServersAndCharacters()
        if (!this.G) await this.getGData()

        const userID = this.user.userID
        const userAuth = this.user.userAuth
        if (!this.characters[cName]) return Promise.reject(`You don't have a character with the name '${cName}'`)
        const characterID = this.characters[cName].id

        try {
            // Create the player and connect
            let player: PingCompensatedCharacter
            if (cType == "mage") player = new Mage(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
            else if (cType == "merchant") player = new Merchant(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
            else if (cType == "paladin") player = new Paladin(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
            else if (cType == "priest") player = new Priest(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
            else if (cType == "ranger") player = new Ranger(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
            else if (cType == "rogue") player = new Rogue(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
            else if (cType == "warrior") player = new Warrior(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
            else player = new PingCompensatedCharacter(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])

            try {
                await player.connect()
            } catch (e) {
                return Promise.reject(e)
            }

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

    static async startPaladin(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Paladin> {
        return await Game.startCharacter(cName, sRegion, sID, "paladin") as Paladin
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
            if (!this.G) await this.getGData()
            const observer = new Observer(this.servers[region][id], this.G)

            await observer.connect(true)

            return observer
        } catch (e) {
            return Promise.reject(e)
        }
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