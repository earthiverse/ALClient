import * as alpathfinder from "alpathfinder"
import type { GData as WasmGData, MapKey } from "typed-adventureland"
import type { IPosition } from "./definitions/adventureland.js"
import type { GData, GMap, ItemName, MapName, MonsterName, NPCName } from "./definitions/adventureland-data.js"
import type { NodeData, PathfinderOptions, PathNode } from "./definitions/pathfinder.js"
import { Constants } from "./Constants.js"

export class Pathfinder {
    public static G: GData
    protected static prepared = false
    protected static preparedMaps: Set<MapName> = new Set()

    protected static FIRST_MAP: MapName = "main"
    public static DOOR_COST = 0.812 // 812ms penalty_cd
    public static ENTER_COST = 0.812 // 812ms penalty_cd
    public static LEAVE_COST = 0.812 // 812ms penalty_cd
    public static TOWN_COST = 3.812 // 3s for channel + 812ms penalty_cd
    public static TRANSPORT_COST = 3.2 // 3.2s penalty_cd

    /**
     * Checks if we can stand at the given location. Useful for `blink()`.
     */
    public static canStand(location: IPosition): boolean {
        if (!this.G || !this.prepared) throw new Error("Prepare pathfinding before querying canStand()!")
        try {
            return alpathfinder.isWalkable(location.map as MapKey, location.x, location.y)
        } catch {
            return false
        }
    }

    /**
     * Checks if we can walk from `from` to `to`. Useful for `move()`.
     */
    public static canWalkPath(from: IPosition, to: IPosition): boolean {
        if (!this.G || !this.prepared) throw new Error("Prepare pathfinding before querying canWalkPath()!")
        if (from.map !== to.map) return false // We can't walk across maps
        try {
            return alpathfinder.canWalkPath(from.map as MapKey, from.x, from.y, to.x, to.y)
        } catch {
            return false
        }
    }

    public static computeLinkCost(from: NodeData, to: NodeData, link?: PathNode, options?: PathfinderOptions): number {
        const speed = options?.speed ?? 50.0

        if (link?.method == "door") {
            return Pathfinder.DOOR_COST
        } else if (link?.method == "transport") {
            return Pathfinder.TRANSPORT_COST
        } else if (link?.method == "leave") {
            return Pathfinder.LEAVE_COST
        } else if (link?.method == "enter") {
            return Pathfinder.ENTER_COST
        } else if (link?.method == "town") {
            if (options?.avoidTownWarps) return Number.POSITIVE_INFINITY
            else return Pathfinder.TOWN_COST
        } else if (link?.method == "unknown") {
            return Number.POSITIVE_INFINITY
        }

        // We are walking
        if (from.map == to.map) return Math.hypot(to.x - from.x, to.y - from.y) / speed
        return 0
    }

    /**
     * Calculates the cost of a path
     * @param path
     * @param options
     * @returns An estimate how long (in seconds) it would take to traverse the given path
     */
    public static computePathCost(
        path: PathNode[],
        options: PathfinderOptions = {
            avoidTownWarps: false,
        },
    ): number {
        let cost = 0
        let current: PathNode = path[0]
        for (let i = 1; i < path.length; i++) {
            const next = path[i]
            cost += this.computeLinkCost(current, next, next, options)
            current = next
        }
        return cost
    }

    public static getGrid(map: MapName): boolean {
        if (!this.G) throw new Error("Prepare pathfinding before querying getGrid()!")
        return this.preparedMaps.has(map)
    }

    public static getPath(from: NodeData, to: NodeData, options?: PathfinderOptions): PathNode[] {
        if (!this.G || !this.prepared) throw new Error("Prepare pathfinding before querying getPath()!")

        const speed = options?.avoidTownWarps ? 100_000 : (options?.speed ?? 50)
        const rawPath = alpathfinder.getPath(from.map as MapKey, from.x, from.y, to.map as MapKey, to.x, to.y, speed)

        if (!rawPath || rawPath.length === 0) {
            throw new Error(
                `We did not find a path from '${from.map}:${from.x},${from.y}' to '${to.map}:${to.x},${to.y}'...`,
            )
        }

        // Ensure the path starts at `from`
        if (rawPath[0].x !== from.x || rawPath[0].y !== from.y || rawPath[0].map !== from.map) {
            rawPath.unshift({
                map: from.map as MapKey,
                x: from.x,
                y: from.y,
                method: "move",
            })
        }

        if (options?.showConsole) {
            console.debug(`Path from ${from.map}:${from.x},${from.y} to ${to.map}:${to.x},${to.y} found!`)
        }
        return rawPath
    }

    /**
     * If we were to walk from `from` to `to`, and `to` was unreachable, get the furthest `to` we can walk to.
     */
    public static getSafeWalkTo(from: IPosition, to: IPosition): IPosition {
        if (from.map !== to.map) throw new Error("We can't walk across maps.")
        if (!this.G || !this.prepared) throw new Error("Prepare pathfinding before querying getSafeWalkTo()!")

        const safe = alpathfinder.getSafeWalkTo(from.map as MapKey, from.x, from.y, to.x, to.y)
        if (safe) {
            if (safe.x === Math.fround(to.x) && safe.y === Math.fround(to.y)) {
                return { map: safe.map as MapName, x: to.x, y: to.y }
            }
            return { map: safe.map as MapName, x: safe.x, y: safe.y }
        }

        return { map: from.map, x: from.x, y: from.y }
    }

    public static async prepare(
        g: GData,
        options: {
            base?: {
                h: number
                v: number
                vn: number
            }
            cheat?: boolean
            remove_abtesting?: boolean
            remove_bank_b?: boolean
            remove_bank_u?: boolean
            remove_goobrawl?: boolean
            remove_test?: boolean
            maps?: MapName[]
            showConsole?: boolean
        } = {},
    ): Promise<void> {
        if (!g) throw new Error("Please provide GData. You can use Game.getGData().")
        this.G = g

        if (!options) options = {}
        if (options.showConsole) console.debug("Preparing pathfinding...")
        const start = Date.now()

        let mapsToInclude: MapName[] = options.maps
        if (!mapsToInclude) {
            // Prepare all connected maps
            mapsToInclude = [Constants.PATHFINDER_FIRST_MAP]
            for (let i = 0; i < mapsToInclude.length; i++) {
                const map = mapsToInclude[i]

                // Add the connected maps
                if (this.G.maps[map]?.doors) {
                    for (const door of this.G.maps[map].doors) {
                        if (!mapsToInclude.includes(door[4] as MapName)) mapsToInclude.push(door[4] as MapName)
                    }
                }
            }

            // Add maps that we can reach through the teleporter
            if (this.G.npcs?.transporter?.places) {
                for (const map in this.G.npcs.transporter.places) {
                    if (!mapsToInclude.includes(map as MapName)) mapsToInclude.push(map as MapName)
                }
            }

            // Add disconnected maps
            mapsToInclude.push("abtesting", "goobrawl", "jail")
        }

        if (options.remove_abtesting) mapsToInclude = mapsToInclude.filter((m) => m !== "abtesting")
        if (options.remove_bank_b) mapsToInclude = mapsToInclude.filter((m) => m !== "bank_b")
        if (options.remove_bank_u) mapsToInclude = mapsToInclude.filter((m) => m !== "bank_u")
        if (options.remove_goobrawl) mapsToInclude = mapsToInclude.filter((m) => m !== "goobrawl")
        if (options.remove_test) mapsToInclude = mapsToInclude.filter((m) => m !== "test")

        if (options.cheat) {
            const cheatPathList: [MapName, number, number, number, number][] = [
                // arena
                ["arena", 199, -360, 233, -391],
                ["arena", 565, -332, 531, -359],
                // cave
                ["cave", 121, -1051, 23, -1075],
                // level1
                ["level1", -271, 616, -297, 557],
                // level2e
                ["level2e", 295, 176, 329, 160],
                ["level2e", 311, 240, 345, 237],
                ["level2e", 487, 349, 471, 384],
                // level2n
                ["level2n", 97, -248, 71, -275],
                // level2s
                ["level2s", -121, 640, -87, 613],
                ["level2s", 207, 416, 249, 424],
                ["level2s", 199, 528, 233, 536],
                ["level2s", 199, 581, 233, 573],
                // level3
                ["level3", 73, -387, 7, -403],
                // level4
                ["level4", 55, -8, 89, -16],
                // main
                ["main", -95, 229, -137, 248],
                ["main", -95, 533, -137, 549],
                ["main", -311, 149, -345, 160],
                ["main", 303, 808, 433, 805],
                // spookytown
                ["spookytown", 95, 1264, 161, 1221],
                // winter_cove
                ["winter_cove", -607, -352, -729, -379],
                ["winter_cove", -519, -1368, -585, -1475],
                ["winter_cove", -423, -1720, -505, -1811],
                ["winter_cove", -39, -1976, -153, -1955],
                ["winter_cove", 41, -2040, 41, -2163],
                ["winter_cove", 649, -347, 567, -256],
                ["winter_cove", -287, -907, -337, -800],
                ["winter_cove", -167, -896, -249, -939],
                ["winter_cove", 7, -1024, 73, -1107],
                ["winter_cove", 87, -1160, 185, -1203],
                ["winter_cove", 247, -1203, 345, -1211],
                ["winter_cove", 169, -1240, 71, -1315],
                ["winter_cove", -23, -1336, -57, -1344],
                ["winter_cove", -239, -1360, -305, -1379],
                ["winter_cove", 329, -1744, 287, -1803],
                ["winter_cove", 193, -1872, 119, -1955],
                ["winter_cove", 313, -1619, 247, -1528],
                ["winter_cove", 217, -1512, 151, -1587],
                // winterland
                ["winterland", 721, 277, 737, 352],
            ]

            for (const [m, x1, y1, x2, y2] of cheatPathList) {
                if (mapsToInclude.includes(m)) {
                    alpathfinder.addCheatPath(m as MapKey, x1, y1, x2, y2)
                }
            }
        }

        // Calculate excluded maps from g.maps
        const excludedMaps: MapKey[] = []
        for (const mapName in this.G.maps) {
            if (!mapsToInclude.includes(mapName as MapName)) {
                excludedMaps.push(mapName as MapKey)
            }
        }

        alpathfinder.prepare(g as unknown as WasmGData, excludedMaps)
        this.prepared = true
        this.preparedMaps = new Set(mapsToInclude)

        if (options.showConsole) {
            console.debug(`Pathfinding prepared! (${((Date.now() - start) / 1000).toFixed(3)}s)`)
        }
    }

    public static findClosestSpawn(
        map: MapName,
        x: number,
        y: number,
    ): { map: MapName; x: number; y: number; distance: number } {
        const closest = {
            distance: Number.MAX_VALUE,
            map: map,
            x: Number.MAX_VALUE,
            y: Number.MAX_VALUE,
        }
        for (const spawn of this.G.maps[map].spawns) {
            const distance = (x - spawn[0]) * (x - spawn[0]) + (y - spawn[1]) * (y - spawn[1])
            if (distance < closest.distance) {
                closest.x = spawn[0]
                closest.y = spawn[1]
                closest.distance = distance
            }
        }
        return closest
    }

    public static locateMonster(mTypes: MonsterName | MonsterName[]): IPosition[] {
        if (typeof mTypes == "string") mTypes = [mTypes]

        const specialMonsters: Partial<Record<MonsterName, MonsterName>> = {
            goldenbat: "bat",
            snowman: "snowman",
        }

        const locations: IPosition[] = []

        for (const mapName in this.G.maps) {
            const map: GMap = this.G.maps[mapName as MapName]
            if (map.ignore) continue
            if (map.instance || !map.monsters || map.monsters.length == 0) continue

            for (const monsterSpawn of map.monsters) {
                if (!mTypes.includes(specialMonsters[monsterSpawn.type] ?? monsterSpawn.type)) continue

                if (monsterSpawn.random) {
                    for (const spawn of map.spawns) {
                        locations.push({ map: mapName as MapName, x: spawn[0], y: spawn[1] })
                    }
                } else if (monsterSpawn.boundary) {
                    locations.push({
                        map: mapName as MapName,
                        x: (monsterSpawn.boundary[0] + monsterSpawn.boundary[2]) / 2,
                        y: (monsterSpawn.boundary[1] + monsterSpawn.boundary[3]) / 2,
                    })
                } else if (monsterSpawn.boundaries) {
                    for (const boundary of monsterSpawn.boundaries) {
                        locations.push({
                            map: boundary[0],
                            x: (boundary[1] + boundary[3]) / 2,
                            y: (boundary[2] + boundary[4]) / 2,
                        })
                    }
                }
            }
        }

        return locations
    }

    public static locateNPC(npcID: NPCName): IPosition[] {
        const locations: IPosition[] = []
        for (const mapName in this.G.maps) {
            const map = this.G.maps[mapName as MapName]
            if (map.ignore) continue
            if (map.instance || !map.npcs || map.npcs.length == 0) continue

            for (const npc of map.npcs) {
                if (npc.id !== npcID) continue

                if (npc.position) {
                    locations.push({ map: mapName as MapName, x: npc.position[0], y: npc.position[1] })
                } else if (npc.positions) {
                    for (const position of npc.positions) {
                        locations.push({ map: mapName as MapName, x: position[0], y: position[1] })
                    }
                }
            }
        }

        return locations
    }

    public static locateCraftNPC(itemName: ItemName): IPosition {
        const gCraft = this.G.craft[itemName]
        if (gCraft) {
            const npcToLocate = gCraft.quest ? gCraft.quest : "craftsman"
            for (const mapName in this.G.maps) {
                const gMap = this.G.maps[mapName as MapName]
                if (gMap.ignore) continue

                for (const npc of gMap.npcs) {
                    if (npc.id == npcToLocate) {
                        return { map: mapName as MapName, x: npc.position[0], y: npc.position[1] }
                    }
                }
            }
        }

        throw new Error(`${itemName} is not craftable.`)
    }

    public static locateExchangeNPC(itemName: ItemName): IPosition {
        const gItem = this.G.items[itemName]
        if (gItem.quest) {
            let npcToLocate: NPCName
            for (const npcName in this.G.npcs) {
                const gNPC = this.G.npcs[npcName as NPCName]
                if (gNPC.ignore) continue

                if (gNPC.quest == gItem.quest) {
                    npcToLocate = gNPC.id
                    break
                }
            }
            if (npcToLocate) {
                for (const mapName in this.G.maps) {
                    const gMap = this.G.maps[mapName as MapName]
                    if (gMap.ignore) continue

                    for (const npc of gMap.npcs) {
                        if (npc.id == npcToLocate) {
                            return { map: mapName as MapName, x: npc.position[0], y: npc.position[1] }
                        }
                    }
                }
            }
        }

        if (gItem.type == "token") {
            let npcToLocate: NPCName
            for (const npcName in this.G.npcs) {
                const gNPC = this.G.npcs[npcName as NPCName]
                if (gNPC.ignore) continue

                if (gNPC.token == itemName) {
                    npcToLocate = gNPC.id
                    break
                }
            }
            if (npcToLocate) {
                for (const mapName in this.G.maps) {
                    const gMap = this.G.maps[mapName as MapName]
                    if (gMap.ignore) continue

                    for (const npc of gMap.npcs) {
                        if (npc.id == npcToLocate) {
                            return { map: mapName as MapName, x: npc.position[0], y: npc.position[1] }
                        }
                    }
                }
            }
        }

        if (gItem.e) {
            for (const mapName in this.G.maps) {
                const gMap = this.G.maps[mapName as MapName]
                if (gMap.ignore) continue

                for (const npc of gMap.npcs) {
                    if (npc.id == "exchange") {
                        return { map: mapName as MapName, x: npc.position[0], y: npc.position[1] }
                    }
                }
            }
        }

        throw new Error(`${itemName} is not exchangeable`)
    }
}
