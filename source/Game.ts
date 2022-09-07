import axios from "axios"
import fs from "fs"
import url from "url"
import { Database, PlayerModel } from "./database/Database.js"
import { ServerRegion, ServerIdentifier } from "./definitions/adventureland.js"
import { GData, GGeometry, GMonster, ItemName, MapName, MonsterName } from "./definitions/adventureland-data.js"
import { ServerData, CharacterListData, MailData, MailMessageData, PullMerchantsCharData, PullMerchantsData, LoginData, MailDeleteResponse, DisconnectCharacterResponse } from "./definitions/adventureland-server.js"
import { Paladin } from "./Paladin.js"
import { Mage } from "./Mage.js"
import { Merchant } from "./Merchant.js"
import { Observer } from "./Observer.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"
import { Priest } from "./Priest.js"
import { Ranger } from "./Ranger.js"
import { Rogue } from "./Rogue.js"
import { Warrior } from "./Warrior.js"

export class Game {
    protected static user: { userID: string, userAuth: string, secure: boolean }

    public static servers: { [T in ServerRegion]?: { [T in ServerIdentifier]?: ServerData } } = {}
    public static characters: { [T in string]?: CharacterListData } = {}

    public static G: GData
    public static version: number

    protected constructor() {
        // Private to force static methods
    }

    static async deleteMail(mailID: string): Promise<boolean> {
        if (!this.user) throw new Error("You must login first.")
        const response = await axios.post<MailDeleteResponse[]>("https://adventure.land/api/delete_mail", `method=delete_mail&arguments={"mid":"${mailID}"}`, { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
        const data = response.data[0]
        if (data.message == "Mail deleted.") return true
        return false
    }

    static async disconnectCharacter(characterName: string): Promise<boolean> {
        if (!this.user) throw new Error("You must login first.")
        const response = await axios.post<DisconnectCharacterResponse[]>("https://adventure.land/api/disconnect_character", `method=disconnect_character&arguments={"name":"${characterName}"}`, { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
        const data = response.data[0]
        if (data.message == "Sent the disconnect signal to the server" || data.message == "Character is not in game.") return true
        return false
    }

    static async getGData(cache = false, optimize = false): Promise<GData> {
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
            const response = await axios.get<string>("https://adventure.land/data.js")
            if (response.status == 200) {
                // Update G with the latest data
                const matches = response.data.match(/var\s+G\s*=\s*(\{.+\});/)
                const rawG = matches[1]
                this.G = JSON.parse(rawG) as GData

                if (optimize) this.G = this.optimizeG(this.G)

                console.debug("Updated 'G' data!")

                if (cache) fs.writeFileSync(gFile, JSON.stringify(this.G))
                return this.G
            } else {
                console.error(response)
                console.error("Error fetching https://adventure.land/data.js")
            }
        }
    }

    static async getMail(all = true): Promise<MailMessageData[]> {
        if (!this.user) throw new Error("You must login first.")
        let response = await axios.post<MailData[]>("https://adventure.land/api/pull_mail", "method=pull_mail&arguments={}", { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
        const mail: MailMessageData[] = []

        while (response.data.length > 0) {
            mail.push(...response.data[0].mail)

            if (all && response.data[0].more) {
                // Get more mail
                response = await axios.post("https://adventure.land/api/pull_mail", `method=pull_mail&arguments={"cursor":"${response.data[0].cursor}"}`, { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
            } else {
                break
            }
        }

        return mail
    }

    static async getMerchants(): Promise<PullMerchantsCharData[]> {
        if (!this.user) throw new Error("You must login first.")
        //const merchants: PullMerchantsData[] = []
        const merchants: PullMerchantsCharData[] = []

        const data = await axios.post<PullMerchantsData[]>("https://adventure.land/api/pull_merchants", "method=pull_merchants", { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
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
                }).lean().exec())
            }
            await Promise.all(promises)
        }

        return merchants
    }

    static async getVersion(): Promise<number> {
        const response = await axios.get("https://adventure.land/comm")
        if (response.status == 200) {
            // Find the version
            const matches = (response.data as string).match(/var\s+VERSION\s*=\s*'(\d+)/)
            this.version = Number.parseInt(matches[1])

            return this.version
        } else {
            console.error(response)
            console.error("Error fetching https://adventure.land/comm")
        }
    }

    /**
     * The following function will tell the server that we've read the following mail message
     * @param mailID The mail message to mark as 'read'
     */
    static async markMailAsRead(mailID: string): Promise<void> {
        if (!this.user) throw new Error("You must login first.")
        const response = await axios.post("https://adventure.land/api/read_mail", `method=read_mail&arguments={"mail": "${mailID}"}`, { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
        return response.data[0]
    }

    static async login(email: string, password?: string, mongo?: string, secure = true): Promise<boolean> {
        // Connect to Mongo
        if (!Database.connection && mongo) await Database.connect(mongo)

        if (!this.user) {
            // Login and save the auth
            console.debug("Logging in...")
            const params = new url.URLSearchParams()
            params.append("method", "signup_or_login")
            params.append("arguments", JSON.stringify({ email: email, only_login: true, password: password }))
            const login = await axios.post<LoginData>(
                "https://adventure.land/api/signup_or_login",
                params.toString())
            let loginResult
            for (const datum of login.data) {
                if (datum["message"]) {
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
                            secure: secure,
                            userAuth: result[1].split("-")[1],
                            userID: result[1].split("-")[0]
                        }
                        break
                    }
                }
            } else if (loginResult && loginResult.message) {
            // We failed logging in, and we have a reason from the server
                console.error(loginResult.message)
                throw new Error(loginResult.message)
            } else {
            // We failed logging in, but we don't know what went wrong
                console.error(login.data)
                throw new Error("Failed logging in.")
            }
        }

        return this.updateServersAndCharacters()
    }

    static async loginJSONFile(path: string, secure = true): Promise<boolean> {
        let fileData: string
        try {
            fileData = fs.readFileSync(path, "utf8")
        } catch (e) {
            throw new Error(`Could not locate '${path}'.`)
        }
        const data: { email: string, password: string, mongo: string, userAuth?: string, userID?: string } = JSON.parse(fileData)

        // Set UserID & UserAuth if it exists in the credentials file
        if (data.userID && data.userAuth) {
            this.user = {
                secure: secure,
                userAuth: data.userAuth,
                userID: data.userID
            }
        }

        try {
            await this.login(data.email, data.password, data.mongo, secure)
        } catch (e) {
            if (data.userID && data.userAuth) {
                // Delete the userAuth and userID, and try again
                delete data.userAuth
                delete data.userID
                fs.writeFileSync(path, JSON.stringify(data, undefined, 4), "utf8")
                delete this.user
                return this.loginJSONFile(path, secure)
            }

            return false
        }
        if (this.user && this.user.userAuth !== data.userAuth) {
            // Update the credentials file with the new auth
            data.userAuth = this.user.userAuth
            data.userID = this.user.userID
            fs.writeFileSync(path, JSON.stringify(data, undefined, 4), "utf8")

        }
        return true
    }

    static async logoutEverywhere(): Promise<unknown> {
        if (!this.user) throw new Error("You must login first.")

        const response = await axios.post<unknown>("https://adventure.land/api/logout_everywhere", "method=logout_everywhere", { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })
        this.user = undefined

        return response.data
    }

    /**
     * This function optimizes G for ALClient. It removes unnecessary things, and optimizes other things to improve processing time.
     *
     * @static
     * @param {GData} g
     * @memberof Game
     */
    static optimizeG(g: GData): GData {
        // Delete GUI-only stuff to reduce file size and subsequent JSON parsing time
        delete g.animations
        delete g.docs
        delete g.images
        delete g.imagesets
        delete g.sprites
        delete g.positions
        delete g.tilesets

        // Optimize items to reduce file size and subsequent JSON parsing time
        for (const itemName in g.items) {
            const gItem = g.items[itemName as ItemName]
            delete gItem.cx
            delete gItem.explanation
            delete gItem.trex
            delete gItem.skin
            delete gItem.skin_a
            delete gItem.skin_c
            delete gItem.skin_r
            delete gItem.xcx
        }

        // Optimize min and max values to improve pathfinding generation
        for (const mapName in g.geometry) {
            const gGeometry = (g.geometry[mapName as MapName]) as GGeometry
            delete gGeometry.groups
            delete gGeometry.placements
            delete gGeometry.points
            delete gGeometry.rectangles
            if (!gGeometry.x_lines || !gGeometry.y_lines) continue // No geometry
            let newMinX = Number.MAX_VALUE
            let newMinY = Number.MAX_VALUE
            let newMaxX = Number.MIN_VALUE
            let newMaxY = Number.MIN_VALUE
            for (const [x, y1, y2] of gGeometry.x_lines) {
                if (x - 1 < newMinX) newMinX = x - 1
                if (y1 - 1 < newMinY) newMinY = y1 - 1
                if (y2 - 1 < newMinY) newMinY = y2 - 1
                if (x + 1 > newMaxX) newMaxX = x + 1
                if (y1 + 1 > newMaxY) newMaxY = y1 + 1
                if (y2 + 1 > newMaxY) newMaxY = y2 + 1
            }
            for (const [y, x1, x2] of gGeometry.y_lines) {
                if (x1 - 1 < newMinX) newMinX = x1 - 1
                if (x2 - 1 < newMinX) newMinX = x2 - 1
                if (y - 1 < newMinY) newMinY = y - 1
                if (x1 + 1 > newMaxX) newMaxX = x1 + 1
                if (x2 + 1 > newMaxX) newMaxX = x2 + 1
                if (y + 1 > newMaxY) newMaxY = y + 1
            }
            gGeometry.min_x = newMinX
            gGeometry.min_y = newMinY
            gGeometry.max_x = newMaxX
            gGeometry.max_y = newMaxY
        }

        // Optimize monsters to reduce file size and subsequent JSON parsing time
        for (const monsterName in g.monsters) {
            const gMonster = g.monsters[monsterName as MonsterName] as GMonster
            delete gMonster.explanation
            delete gMonster.skin
        }

        return g
    }

    static async startCharacter(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<PingCompensatedCharacter> {
        if (!this.user) throw new Error("You must login first.")
        if (!this.characters) await this.updateServersAndCharacters()
        if (!this.G) await this.getGData()

        const userID = this.user.userID
        const userAuth = this.user.userAuth
        if (!this.characters[cName]) throw new Error(`You don't have a character with the name '${cName}'`)
        const characterID = this.characters[cName].id

        // Create the player and connect
        let player: PingCompensatedCharacter
        switch (this.characters[cName].type) {
            case "mage":
                player = new Mage(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
                break
            case "merchant":
                player = new Merchant(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
                break
            case "paladin":
                player = new Paladin(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
                break
            case "priest":
                player = new Priest(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
                break
            case "ranger":
                player = new Ranger(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
                break
            case "rogue":
                player = new Rogue(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
                break
            case "warrior":
                player = new Warrior(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
                break
            default:
                player = new PingCompensatedCharacter(userID, userAuth, characterID, Game.G, this.servers[sRegion][sID])
                break
        }

        await player.connect()
        return player
    }

    static async startMage(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Mage> {
        return await Game.startCharacter(cName, sRegion, sID) as Mage
    }

    static async startMerchant(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Merchant> {
        return await Game.startCharacter(cName, sRegion, sID) as Merchant
    }

    static async startPaladin(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Paladin> {
        return await Game.startCharacter(cName, sRegion, sID) as Paladin
    }

    static async startPriest(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Priest> {
        return await Game.startCharacter(cName, sRegion, sID) as Priest
    }

    static async startRanger(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Ranger> {
        return await Game.startCharacter(cName, sRegion, sID) as Ranger
    }

    static async startRogue(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Rogue> {
        return await Game.startCharacter(cName, sRegion, sID) as Rogue
    }

    static async startWarrior(cName: string, sRegion: ServerRegion, sID: ServerIdentifier): Promise<Warrior> {
        return await Game.startCharacter(cName, sRegion, sID) as Warrior
    }

    static async startObserver(region: ServerRegion, id: ServerIdentifier): Promise<Observer> {
        if (!this.user) throw new Error("You must login first.")
        if (!this.characters) await this.updateServersAndCharacters()
        if (!this.G) await this.getGData()

        const observer = new Observer(this.servers[region][id], this.G)
        await observer.connect(true)
        return observer
    }

    /**
     * Retrieves your character list, and a list of available servers.
     * @returns true if successfully updated
     */
    static async updateServersAndCharacters(): Promise<boolean> {
        if (!this.user) throw new Error("You must login first.")
        const data = await axios.post(`http${this.user.secure ? "s" : ""}://adventure.land/api/servers_and_characters`, "method=servers_and_characters&arguments={}", { headers: { "cookie": `auth=${this.user.userID}-${this.user.userAuth}` } })

        if (data.status == 200) {
            // Populate server information
            for (const serverData of data.data[0].servers as ServerData[]) {
                if (!this.servers[serverData.region]) this.servers[serverData.region] = {}
                this.servers[serverData.region][serverData.name] = serverData
                this.servers[serverData.region][serverData.name].secure = this.user.secure
            }

            // Populate character information
            for (const characterData of data.data[0].characters as CharacterListData[]) {
                this.characters[characterData.name] = characterData
            }

            return true
        } else {
            console.error(data)
        }

        throw new Error("Error fetching http://adventure.land/api/servers_and_characters")
    }
}