import Delaunator from "delaunator"
import type { Graph, Link, Node } from "ngraph.graph"
import createGraph from "ngraph.graph"
import ngraph from "ngraph.path"
import type { IPosition } from "./definitions/adventureland.js"
import type {
    DoorInfo,
    GData,
    GMap,
    ItemName,
    MapName,
    MonsterName,
    NPCName,
} from "./definitions/adventureland-data.js"
import type { Grids, Grid, LinkData, NodeData, PathfinderOptions } from "./definitions/pathfinder.js"
import { Constants } from "./Constants.js"
import { Tools } from "./Tools.js"
import BitSet from "bitset"

const UNKNOWN = 2
const UNWALKABLE = 0
const WALKABLE = 1

export class Pathfinder {
    protected static G: GData

    protected static FIRST_MAP: MapName = "main"
    protected static TRANSPORT_COST = 75000
    protected static TOWN_COST = 200000
    protected static ENTER_COST = 1000000

    protected static grids: Grids = {}
    protected static graph: Graph<NodeData, LinkData> = createGraph({ multigraph: true })

    protected static addLinkToGraph(from: Node<NodeData>, to: Node<NodeData>, data?: LinkData): Link<LinkData> {
        return this.graph.addLink(from.id, to.id, data)
    }

    protected static addNodeToGraph(map: MapName, x: number, y: number): Node<NodeData> {
        const check = this.graph.getNode(`${map}:${x},${y}`)
        if (check) return check
        return this.graph.addNode(`${map}:${x},${y}`, { map: map, x: x, y: y })
    }

    /**
     * Checks if we can stand at the given location. Useful for `blink()`.
     *
     * @static
     * @param {IPosition} location Position to check if we can stand there
     * @return {*}  {boolean}
     * @memberof Pathfinder
     */
    public static canStand(location: IPosition): boolean {
        if (!this.G) throw new Error("Prepare pathfinding before querying canStand()!")

        const y = Math.trunc(location.y) - this.G.geometry[location.map].min_y
        const x = Math.trunc(location.x) - this.G.geometry[location.map].min_x
        const width = this.G.geometry[location.map].max_x - this.G.geometry[location.map].min_x

        try {
            const grid = this.getGrid(location.map)
            if (grid.get(y * width + x) == WALKABLE) return true
        } catch (e) {
            return false
        }

        return false
    }

    /**
     * Checks if we can walk from `from` to `to`. Useful for `move()`.
     * Adapted from http://eugen.dedu.free.fr/projects/bresenham/
     * @param from The starting position (where we start walking from)
     * @param to The ending position (where we walk to)
     */
    public static canWalkPath(from: IPosition, to: IPosition): boolean {
        if (!this.G) throw new Error("Prepare pathfinding before querying canWalkPath()!")
        if (from.map !== to.map) return false // We can't walk across maps

        const grid = this.getGrid(from.map)
        const width = this.G.geometry[from.map].max_x - this.G.geometry[from.map].min_x

        let xStep, yStep // the step on y and x axis
        let error // the error accumulated during the increment
        let errorPrev // *vision the previous value of the error variable
        let x = Math.trunc(from.x) - this.G.geometry[from.map].min_x,
            y = Math.trunc(from.y) - this.G.geometry[from.map].min_y // the line points
        let dx = Math.trunc(to.x) - Math.trunc(from.x)
        let dy = Math.trunc(to.y) - Math.trunc(from.y)

        if (grid.get(y * width + x) !== WALKABLE) return false

        if (dy < 0) {
            yStep = -1
            dy = -dy
        } else {
            yStep = 1
        }
        if (dx < 0) {
            xStep = -1
            dx = -dx
        } else {
            xStep = 1
        }
        const ddy = 2 * dy
        const ddx = 2 * dx

        if (ddx >= ddy) {
            // first octant (0 <= slope <= 1)
            // compulsory initialization (even for errorPrev, needed when dx==dy)
            errorPrev = error = dx // start in the middle of the square
            for (let i = 0; i < dx; i++) {
                // do not use the first point (already done)
                x += xStep
                error += ddy
                if (error > ddx) {
                    // increment y if AFTER the middle ( > )
                    y += yStep
                    error -= ddx
                    // three cases (octant == right->right-top for directions below):
                    if (error + errorPrev < ddx) {
                        // bottom square also
                        if (grid.get((y - yStep) * width + x) !== WALKABLE) return false
                    } else if (error + errorPrev > ddx) {
                        // left square also
                        if (grid.get(y * width + x - xStep) !== WALKABLE) return false
                    } else {
                        // corner: bottom and left squares also
                        if (grid.get((y - yStep) * width + x) !== WALKABLE) return false
                        if (grid.get(y * width + x - xStep) !== WALKABLE) return false
                    }
                }
                if (grid.get(y * width + x) !== WALKABLE) return false
                errorPrev = error
            }
        } else {
            // the same as above
            errorPrev = error = dy
            for (let i = 0; i < dy; i++) {
                y += yStep
                error += ddx
                if (error > ddy) {
                    x += xStep
                    error -= ddy
                    if (error + errorPrev < ddy) {
                        if (grid.get(y * width + x - xStep) !== WALKABLE) return false
                    } else if (error + errorPrev > ddy) {
                        if (grid.get((y - yStep) * width + x) !== WALKABLE) return false
                    } else {
                        if (grid.get(y * width + x - xStep) !== WALKABLE) return false
                        if (grid.get((y - yStep) * width + x) !== WALKABLE) return false
                    }
                }
                if (grid.get(y * width + x) !== WALKABLE) return false
                errorPrev = error
            }
        }

        return true
    }

    public static computeLinkCost(from: NodeData, to: NodeData, link?: LinkData, options?: PathfinderOptions): number {
        if (options?.avoidMaps?.includes(link?.map) || options?.avoidMaps?.includes(to?.map)) {
            // We want to avoid this map
            return 1000000000000
        } else if (link?.type == "leave" || link?.type == "transport") {
            // We are using the transporter
            if (link.map === "bank" || link.map === "bank_u") return 1000000 // The bank only lets one character in at a time, add a higher cost for it so we don't try to use it as a shortcut
            return options?.costs?.transport !== undefined ? options.costs.transport : Pathfinder.TRANSPORT_COST
        } else if (link?.type == "enter") {
            // We are entering a crypt
            return options?.costs?.enter !== undefined ? options.costs.enter : Pathfinder.ENTER_COST
        } else if (link?.type == "town") {
            // We are warping to town
            if (options?.avoidTownWarps) return 1000000000000
            else return options?.costs?.town !== undefined ? options.costs.town : Pathfinder.TOWN_COST
        }

        // We are walking
        if (from.map == to.map) return (from.x - to.x) ** 2 + (from.y - to.y) ** 2
    }

    public static computePathCost(
        path: LinkData[],
        options: PathfinderOptions = {
            avoidTownWarps: false,
        },
    ): number {
        let cost = 0
        let current: LinkData = path[0]
        for (let i = 1; i < path.length; i++) {
            const next = path[i]
            cost += this.computeLinkCost(current, next, next, options)
            current = next
        }
        return cost
    }

    /**
     * Generates a grid of walkable pixels that we use for pathfinding.
     * @param map The map to generate the grid for
     */
    public static getGrid(map: MapName, base = Constants.BASE): Grid {
        // Return the grid we've prepared if we have it.
        if (this.grids[map]) return this.grids[map]
        if (!this.G) throw new Error("Prepare pathfinding before querying getGrid()!")

        // console.debug(`Preparing ${map}...`)

        const width = this.G.geometry[map].max_x - this.G.geometry[map].min_x
        const height = this.G.geometry[map].max_y - this.G.geometry[map].min_y

        const uintGrid = new Uint8Array(height * width)
        const grid = new BitSet()
        uintGrid.fill(UNKNOWN)
        grid.setRange(0, height * width, UNWALKABLE)

        // Make the y_lines unwalkable
        for (const yLine of this.G.geometry[map].y_lines) {
            const fromY = Math.max(0, yLine[0] - this.G.geometry[map].min_y - base.vn)
            const toY = Math.min(yLine[0] - this.G.geometry[map].min_y + base.v, height - 1)
            for (let y = fromY; y <= toY; y++) {
                const fromX = Math.max(0, yLine[1] - this.G.geometry[map].min_x - base.h)
                const toX = Math.min(yLine[2] - this.G.geometry[map].min_x + base.h, width - 1)
                for (let x = fromX; x <= toX; x++) {
                    uintGrid[y * width + x] = UNWALKABLE
                }
            }
        }

        // Make the x_lines unwalkable
        for (const xLine of this.G.geometry[map].x_lines) {
            const fromX = Math.max(0, xLine[0] - this.G.geometry[map].min_x - base.h)
            const toX = Math.min(xLine[0] - this.G.geometry[map].min_x + base.h, width - 1)
            for (let x = fromX; x <= toX; x++) {
                const fromY = Math.max(0, xLine[1] - this.G.geometry[map].min_y - base.vn)
                const toY = Math.min(xLine[2] - this.G.geometry[map].min_y + base.v, height - 1)
                for (let y = fromY; y <= toY; y++) {
                    uintGrid[y * width + x] = UNWALKABLE
                }
            }
        }

        // Fill in the grid with walkable pixels
        for (const spawn of this.G.maps[map].spawns) {
            let x = Math.trunc(spawn[0]) - this.G.geometry[map].min_x
            let y = Math.trunc(spawn[1]) - this.G.geometry[map].min_y
            if (uintGrid[y * width + x] === WALKABLE) continue // We've already flood filled this
            const stack = [[y, x]]
            while (stack.length) {
                ;[y, x] = stack.pop()
                while (x >= 0 && uintGrid[y * width + x] == UNKNOWN) x--
                x++
                let spanAbove = 0
                let spanBelow = 0
                while (x < width && uintGrid[y * width + x] == UNKNOWN) {
                    uintGrid[y * width + x] = WALKABLE
                    grid.set(y * width + x, WALKABLE)
                    if (!spanAbove && y > 0 && uintGrid[(y - 1) * width + x] == UNKNOWN) {
                        stack.push([y - 1, x])
                        spanAbove = 1
                    } else if (spanAbove && y > 0 && uintGrid[(y - 1) * width + x] !== UNKNOWN) {
                        spanAbove = 0
                    }

                    if (!spanBelow && y < height - 1 && uintGrid[(y + 1) * width + x] == UNKNOWN) {
                        stack.push([y + 1, x])
                        spanBelow = 1
                    } else if (spanBelow && y < height - 1 && uintGrid[(y + 1) * width + x] !== UNKNOWN) {
                        spanBelow = 0
                    }
                    x++
                }
            }
        }

        // Add to our grids
        this.grids[map] = grid

        const walkableNodes: Node<NodeData>[] = []
        const points: number[] = []

        this.graph.beginUpdate()

        // Add nodes at corners
        // console.debug("  Adding corners...")
        // console.debug(`  # nodes: ${walkableNodes.length}`)
        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                const mC = grid.get(y * width + x)
                if (mC !== WALKABLE) continue

                const bL = grid.get((y - 1) * width + x - 1)
                const bC = grid.get((y - 1) * width + x)
                const bR = grid.get((y - 1) * width + x + 1)
                const mL = grid.get(y * width + x - 1)
                const mR = grid.get(y * width + x + 1)
                const uL = grid.get((y + 1) * width + x - 1)
                const uC = grid.get((y + 1) * width + x)
                const uR = grid.get((y + 1) * width + x + 1)

                const mapX = x + this.G.geometry[map].min_x
                const mapY = y + this.G.geometry[map].min_y

                if (
                    bL === UNWALKABLE &&
                    bC === UNWALKABLE &&
                    bR === UNWALKABLE &&
                    mL === UNWALKABLE &&
                    uL === UNWALKABLE
                ) {
                    // Inside-1
                    walkableNodes.push(this.addNodeToGraph(map, mapX, mapY))
                    points.push(mapX, mapY)
                } else if (
                    bL === UNWALKABLE &&
                    bC === UNWALKABLE &&
                    bR === UNWALKABLE &&
                    mR === UNWALKABLE &&
                    uR === UNWALKABLE
                ) {
                    // Inside-2
                    walkableNodes.push(this.addNodeToGraph(map, mapX, mapY))
                    points.push(mapX, mapY)
                } else if (
                    bR === UNWALKABLE &&
                    mR === UNWALKABLE &&
                    uL === UNWALKABLE &&
                    uC === UNWALKABLE &&
                    uR === UNWALKABLE
                ) {
                    // Inside-3
                    walkableNodes.push(this.addNodeToGraph(map, mapX, mapY))
                    points.push(mapX, mapY)
                } else if (
                    bL === UNWALKABLE &&
                    mL === UNWALKABLE &&
                    uL === UNWALKABLE &&
                    uC === UNWALKABLE &&
                    uR === UNWALKABLE
                ) {
                    // Inside-4
                    walkableNodes.push(this.addNodeToGraph(map, mapX, mapY))
                    points.push(mapX, mapY)
                } else if (bL === UNWALKABLE && bC === WALKABLE && mL === WALKABLE) {
                    // Outside-1
                    walkableNodes.push(this.addNodeToGraph(map, mapX, mapY))
                    points.push(mapX, mapY)
                } else if (bC === WALKABLE && bR === UNWALKABLE && mR === WALKABLE) {
                    // Outside-2
                    walkableNodes.push(this.addNodeToGraph(map, mapX, mapY))
                    points.push(mapX, mapY)
                } else if (mR === WALKABLE && uC === WALKABLE && uR === UNWALKABLE) {
                    // Outside-3
                    walkableNodes.push(this.addNodeToGraph(map, mapX, mapY))
                    points.push(mapX, mapY)
                } else if (mL === WALKABLE && uL === UNWALKABLE && uC === WALKABLE) {
                    // Outside-4
                    walkableNodes.push(this.addNodeToGraph(map, mapX, mapY))
                    points.push(mapX, mapY)
                }
            }
        }

        // Add nodes at transporters. We'll look for close nodes to doors later.
        // console.debug("  Adding transporter node and links...")
        // console.debug(`  # nodes: ${walkableNodes.length}`)
        const transporters = []
        for (const npc of (this.G.maps[map] as GMap).npcs) {
            if (npc.id !== "transporter") continue
            const closest = this.findClosestSpawn(map, npc.position[0], npc.position[1])
            const fromNode = this.addNodeToGraph(map, closest.x, closest.y)
            points.push(closest.x, closest.y)
            walkableNodes.push(fromNode)
            transporters.push(npc)

            // Make more points around the transporter
            for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 32) {
                const x = Math.trunc(npc.position[0] + Math.cos(angle) * (Constants.TRANSPORTER_REACH_DISTANCE - 10))
                const y = Math.trunc(npc.position[1] + Math.sin(angle) * (Constants.TRANSPORTER_REACH_DISTANCE - 10))
                if (this.canStand({ map, x, y })) {
                    const fromNode = this.addNodeToGraph(map, x, y)
                    points.push(x, y)
                    walkableNodes.push(fromNode)
                }
            }
        }

        // Add nodes at doors. We'll look for close nodes to doors later.
        // console.debug("  Adding door nodes and links...")
        // console.debug(`  # nodes: ${walkableNodes.length}`)
        const doors: DoorInfo[] = []
        for (const door of this.G.maps[map].doors) {
            // TODO: Figure out how to know if we have access to a locked door
            // if (door[8] == "complicated") continue

            // From
            const spawn = this.G.maps[map].spawns[door[6]]
            const fromDoor = this.addNodeToGraph(map, spawn[0], spawn[1])
            points.push(spawn[0], spawn[1])
            walkableNodes.push(fromDoor)
            doors.push(door)

            // Make more points around the door
            const doorX = door[0]
            const doorY = door[1]
            const doorWidth = door[2]
            const doorHeight = door[3]
            const doorCorners: IPosition[] = [
                { x: doorX - doorWidth / 2, y: doorY - doorHeight / 2 }, // Top left
                { x: doorX + doorWidth / 2, y: doorY - doorHeight / 2 }, // Top right
                { x: doorX - doorWidth / 2, y: doorY + doorHeight / 2 }, // Bottom right
                { x: doorX + doorWidth / 2, y: doorY + doorHeight / 2 }, // Bottom left
            ]
            for (const point of doorCorners) {
                for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 32) {
                    const x = Math.trunc(point.x + Math.cos(angle) * (Constants.DOOR_REACH_DISTANCE - 10))
                    const y = Math.trunc(point.y + Math.sin(angle) * (Constants.DOOR_REACH_DISTANCE - 10))
                    if (this.canStand({ map, x, y })) {
                        const fromNode = this.addNodeToGraph(map, x, y)
                        points.push(x, y)
                        walkableNodes.push(fromNode)
                    }
                }
            }
        }

        // Add nodes at spawns
        // console.debug("  Adding spawn nodes...")
        // console.debug(`  # nodes: ${walkableNodes.length}`)
        const townNode = this.addNodeToGraph(map, this.G.maps[map].spawns[0][0], this.G.maps[map].spawns[0][1])
        walkableNodes.push(townNode)
        points.push(townNode.data.x, townNode.data.y)
        const townLinkData: LinkData = { map: map, type: "town", x: townNode.data.x, y: townNode.data.y }
        for (let i = 1; i < this.G.maps[map].spawns.length; i++) {
            const spawn = this.G.maps[map].spawns[i]
            const node = this.addNodeToGraph(map, spawn[0], spawn[1])
            walkableNodes.push(node)
            points.push(node.data.x, node.data.y)
        }

        // console.debug("  Adding walkable links...")
        // console.debug(`  # nodes: ${walkableNodes.length}`)
        for (const fromNode of walkableNodes) {
            // Check if we can reach a door
            for (const door of doors) {
                if (
                    Tools.squaredDistance(fromNode.data, { x: door[0], y: door[1], width: door[2], height: door[3] }) >=
                    Constants.DOOR_REACH_DISTANCE_SQUARED
                )
                    continue // Door is too far away

                // To
                const spawn2 = this.G.maps[door[4]].spawns[door[5]]
                const toDoor = this.addNodeToGraph(door[4] as MapName, spawn2[0], spawn2[1])
                if (door[7] == "key") {
                    this.addLinkToGraph(fromNode, toDoor, {
                        key: door[8] as ItemName,
                        map: toDoor.data.map,
                        type: "enter",
                        x: toDoor.data.x,
                        y: toDoor.data.y,
                    })
                } else {
                    this.addLinkToGraph(fromNode, toDoor, {
                        map: toDoor.data.map,
                        spawn: door[5],
                        type: "transport",
                        x: toDoor.data.x,
                        y: toDoor.data.y,
                    })
                }
            }

            // Add destination nodes and links to maps that are reachable through the transporter
            for (const npc of transporters) {
                if (
                    (fromNode.data.x - npc.position[0]) * (fromNode.data.x - npc.position[0]) +
                        (fromNode.data.y - npc.position[1]) * (fromNode.data.y - npc.position[1]) >
                    Constants.TRANSPORTER_REACH_DISTANCE_SQUARED
                )
                    continue // Transporter is too far away
                for (const toMap in this.G.npcs.transporter.places) {
                    if (map == toMap) continue // Don't add links to ourself

                    const spawnID = this.G.npcs.transporter.places[toMap as MapName]
                    const spawn = this.G.maps[toMap as MapName].spawns[spawnID]
                    const toNode = this.addNodeToGraph(toMap as MapName, spawn[0], spawn[1])

                    this.addLinkToGraph(fromNode, toNode, {
                        map: toMap as MapName,
                        spawn: spawnID,
                        type: "transport",
                        x: toNode.data.x,
                        y: toNode.data.y,
                    })
                }
            }
        }

        const leaveLink = this.addNodeToGraph("main", this.G.maps.main.spawns[0][0], this.G.maps.main.spawns[0][1])
        const leaveLinkData: LinkData = {
            map: leaveLink.data.map,
            type: "leave",
            x: leaveLink.data.x,
            y: leaveLink.data.y,
        }
        for (const node of walkableNodes) {
            // Create town links
            if (node.id !== townNode.id) this.addLinkToGraph(node, townNode, townLinkData)

            // Create leave links
            if (map == "cyberland" || map == "jail") this.addLinkToGraph(node, leaveLink, leaveLinkData)
        }

        // Check if we can walk to other nodes
        const delaunay = new Delaunator(points)

        for (let i = 0; i < delaunay.halfedges.length; i++) {
            const halfedge = delaunay.halfedges[i]
            if (halfedge < i) continue
            const ti = delaunay.triangles[i]
            const tj = delaunay.triangles[halfedge]

            const x1 = delaunay.coords[ti * 2]
            const y1 = delaunay.coords[ti * 2 + 1]
            const x2 = delaunay.coords[tj * 2]
            const y2 = delaunay.coords[tj * 2 + 1]

            if (this.canWalkPath({ map: map, x: x1, y: y1 }, { map: map, x: x2, y: y2 })) {
                const from = `${map}:${x1},${y1}`
                const to = `${map}:${x2},${y2}`
                this.graph.addLink(from, to)
                this.graph.addLink(to, from)
            }
        }

        this.graph.endUpdate()

        return grid
    }

    public static findClosestNode(map: MapName, x: number, y: number): Node<NodeData> {
        let closest: { distance: number; node: Node<NodeData> } = { distance: Number.MAX_VALUE, node: undefined }
        let closestWalkable: { distance: number; node: Node<NodeData> } = {
            distance: Number.MAX_VALUE,
            node: undefined,
        }
        const from = { map, x, y }
        this.graph.forEachNode((node) => {
            if (node.data.map !== map) return
            const distance =
                (from.x - node.data.x) * (from.x - node.data.x) + (from.y - node.data.y) * (from.y - node.data.y)

            // If we're further than one we can already walk to, don't check further
            if (distance > closest.distance) return

            const walkable = this.canWalkPath(from, node.data)

            if (distance < closest.distance) closest = { distance, node }
            if (walkable && distance < closestWalkable.distance) closestWalkable = { distance, node }
            if (distance < 1) return true
        })

        return closestWalkable.node ? closestWalkable.node : closest.node
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
        // Look through all the spawns, and find the closest one
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

    public static getPath(from: NodeData, to: NodeData, options?: PathfinderOptions): LinkData[] {
        if (!this.G) throw new Error("Prepare pathfinding before querying getPath()!")
        if (!this.grids[from.map]) throw new Error(`We have not prepared ${from.map}!`)
        if (!this.grids[to.map]) throw new Error(`We have not prepared ${to.map}!`)

        if (
            from.map == to.map &&
            this.canWalkPath(from, to) &&
            (from.x - to.x) ** 2 + (from.y - to.y) ** 2 < (options?.costs?.town ?? this.TOWN_COST)
        ) {
            // Return a straight line to the destination
            return [
                { map: from.map, type: "move", x: from.x, y: from.y },
                { map: from.map, type: "move", x: to.x, y: to.y },
            ]
        }

        const fromNode = this.findClosestNode(from.map, from.x, from.y)
        const toNode = this.findClosestNode(to.map, to.x, to.y)

        const path: LinkData[] = []

        if (options?.showConsole)
            console.debug(
                `Looking for a path from ${fromNode.id} to ${toNode.id} (from ${from.map}:${from.x},${from.y} to ${to.map}:${to.x},${to.y})...`,
            )

        const pathfinder = ngraph.nba(Pathfinder.graph, {
            distance: (fromNode, toNode, link) => {
                return this.computeLinkCost(fromNode.data, toNode.data, link.data, options)
            },
            oriented: true,
        })

        const rawPath: Node<NodeData>[] = pathfinder.find(fromNode.id, toNode.id)

        if (rawPath.length == 0) throw new Error(`We did not find a path from '${fromNode.id}' to '${toNode.id}'...`)
        path.push({ map: fromNode.data.map, type: "move", x: fromNode.data.x, y: fromNode.data.y })
        for (let i = rawPath.length - 1; i > 0; i--) {
            const currentNode = rawPath[i]
            const nextNode = rawPath[i - 1]

            let lowestCostLinkData: LinkData
            let lowestCost = Number.MAX_VALUE
            for (const link of currentNode.links) {
                if (link.toId !== nextNode.id) continue
                const cost = this.computeLinkCost(currentNode.data, nextNode.data, link.data, options)
                if (cost < lowestCost || (cost == lowestCost && (link.data as LinkData)?.type == "move")) {
                    lowestCost = cost
                    lowestCostLinkData = link.data as LinkData
                }
            }

            if (lowestCostLinkData) {
                path.push(lowestCostLinkData)
                if (lowestCostLinkData.type == "town") {
                    // Town warps don't always go to the exact location, so sometimes we can't reach the next node.
                    // So... We will walk to the town node after town warping.
                    path.push({ map: lowestCostLinkData.map, type: "move", x: nextNode.data.x, y: nextNode.data.y })
                }
            } else {
                path.push({ map: nextNode.data.map, type: "move", x: nextNode.data.x, y: nextNode.data.y })
            }
        }
        path.push({ map: to.map, type: "move", x: to.x, y: to.y })

        // Clean the path
        for (let i = 0; i < path.length - 1; i++) {
            const current = path[i]
            const next = path[i + 1]

            // If anything is different, continue
            if (current.type !== next.type) continue
            if (current.map !== next.map) continue
            if (current.x !== next.x) continue
            if (current.y !== next.y) continue

            // The two nodes are the same, remove one
            path.splice(i, 1)
        }

        if (options?.showConsole) console.debug(`Path from ${fromNode.id} to ${toNode.id} found!`)
        return path
    }

    /**
     * If we were to walk from `from` to `to`, and `to` was unreachable, get the furthest `to` we can walk to.
     * Adapted from http://eugen.dedu.free.fr/projects/bresenham/
     * @param from
     * @param to
     */
    public static getSafeWalkTo(from: IPosition, to: IPosition): IPosition {
        if (from.map !== to.map) throw new Error("We can't walk across maps.")
        if (!this.G) throw new Error("Prepare pathfinding before querying getSafeWalkTo()!")

        const grid = this.getGrid(from.map)
        const width = this.G.geometry[from.map].max_x - this.G.geometry[from.map].min_x

        let xStep, yStep // the step on y and x axis
        let error // the error accumulated during the increment
        let errorPrev // *vision the previous value of the error variable
        let x = Math.trunc(from.x) - this.G.geometry[from.map].min_x,
            y = Math.trunc(from.y) - this.G.geometry[from.map].min_y // the line points
        let dx = Math.trunc(to.x) - Math.trunc(from.x)
        let dy = Math.trunc(to.y) - Math.trunc(from.y)

        if (grid.get(y * width + x) !== WALKABLE) {
            console.error(`We shouldn't be able to be where we are in from (${from.map}:${from.x},${from.y}).`)
            return Pathfinder.findClosestNode(from.map, from.x, from.y).data
        }

        if (dy < 0) {
            yStep = -1
            dy = -dy
        } else {
            yStep = 1
        }
        if (dx < 0) {
            xStep = -1
            dx = -dx
        } else {
            xStep = 1
        }
        const ddy = 2 * dy
        const ddx = 2 * dx

        if (ddx >= ddy) {
            // first octant (0 <= slope <= 1)
            // compulsory initialization (even for errorPrev, needed when dx==dy)
            errorPrev = error = dx // start in the middle of the square
            for (let i = 0; i < dx; i++) {
                // do not use the first point (already done)
                x += xStep
                error += ddy
                if (error > ddx) {
                    // increment y if AFTER the middle ( > )
                    y += yStep
                    error -= ddx
                    // three cases (octant == right->right-top for directions below):
                    if (error + errorPrev < ddx) {
                        // bottom square also
                        if (grid.get((y - yStep) * width + x) !== WALKABLE)
                            return {
                                map: from.map,
                                x: x - xStep + this.G.geometry[from.map].min_x,
                                y: y - yStep + this.G.geometry[from.map].min_y,
                            }
                    } else if (error + errorPrev > ddx) {
                        // left square also
                        if (grid.get(y * width + x - xStep) !== WALKABLE)
                            return {
                                map: from.map,
                                x: x - xStep + this.G.geometry[from.map].min_x,
                                y: y - yStep + this.G.geometry[from.map].min_y,
                            }
                    } else {
                        // corner: bottom and left squares also
                        if (grid.get((y - yStep) * width + x) !== WALKABLE)
                            return {
                                map: from.map,
                                x: x - xStep + this.G.geometry[from.map].min_x,
                                y: y - yStep + this.G.geometry[from.map].min_y,
                            }
                        if (grid.get(y * width + x - xStep) !== WALKABLE)
                            return {
                                map: from.map,
                                x: x - xStep + this.G.geometry[from.map].min_x,
                                y: y - yStep + this.G.geometry[from.map].min_y,
                            }
                    }
                }
                if (grid.get(y * width + x) !== WALKABLE)
                    return {
                        map: from.map,
                        x: x - xStep + this.G.geometry[from.map].min_x,
                        y: y + this.G.geometry[from.map].min_y,
                    }
                errorPrev = error
            }
        } else {
            // the same as above
            errorPrev = error = dy
            for (let i = 0; i < dy; i++) {
                y += yStep
                error += ddx
                if (error > ddy) {
                    x += xStep
                    error -= ddy
                    if (error + errorPrev < ddy) {
                        if (grid.get(y * width + x - xStep) !== WALKABLE)
                            return {
                                map: from.map,
                                x: x - xStep + this.G.geometry[from.map].min_x,
                                y: y - yStep + this.G.geometry[from.map].min_y,
                            }
                    } else if (error + errorPrev > ddy) {
                        if (grid.get((y - yStep) * width + x) !== WALKABLE)
                            return {
                                map: from.map,
                                x: x - xStep + this.G.geometry[from.map].min_x,
                                y: y - yStep + this.G.geometry[from.map].min_y,
                            }
                    } else {
                        if (grid.get(y * width + x - xStep) !== WALKABLE)
                            return {
                                map: from.map,
                                x: x - xStep + this.G.geometry[from.map].min_x,
                                y: y - yStep + this.G.geometry[from.map].min_y,
                            }
                        if (grid.get((y - yStep) * width + x) !== WALKABLE)
                            return {
                                map: from.map,
                                x: x - xStep + this.G.geometry[from.map].min_x,
                                y: y - yStep + this.G.geometry[from.map].min_y,
                            }
                    }
                }
                if (grid.get(y * width + x) !== WALKABLE)
                    return {
                        map: from.map,
                        x: x + this.G.geometry[from.map].min_x,
                        y: y - yStep + this.G.geometry[from.map].min_y,
                    }
                errorPrev = error
            }
        }

        return to
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
        if (!options.base) options.base = Constants.BASE
        const start = Date.now()

        if (!options.maps) {
            // Prepare all connected maps
            options.maps = [Constants.PATHFINDER_FIRST_MAP]
            for (let i = 0; i < options.maps.length; i++) {
                const map = options.maps[i]

                // Add the connected maps
                for (const door of this.G.maps[map].doors) {
                    if (!options.maps.includes(door[4] as MapName)) options.maps.push(door[4] as MapName)
                }
            }

            // Add maps that we can reach through the teleporter
            for (const map in this.G.npcs.transporter.places) {
                if (!options.maps.includes(map as MapName)) options.maps.push(map as MapName)
            }
        }

        // Add disconnected maps
        options.maps.push("abtesting", "goobrawl", "jail")

        if (options.remove_abtesting) options.maps = options.maps.filter((m) => m !== "abtesting")
        if (options.remove_bank_b) options.maps = options.maps.filter((m) => m !== "bank_b")
        if (options.remove_bank_u) options.maps = options.maps.filter((m) => m !== "bank_u")
        if (options.remove_goobrawl) options.maps = options.maps.filter((m) => m !== "goobrawl")
        if (options.remove_test) options.maps = options.maps.filter((m) => m !== "test")

        // Prepare each map
        for (const map of options.maps) {
            this.getGrid(map, options.base)
        }

        if (options.cheat) {
            const addCheatPath = (from: IPosition & { map: MapName }, to: IPosition & { map: MapName }) => {
                const fromNodeID = `${from.map}:${from.x},${from.y}`
                const toNodeID = `${to.map}:${to.x},${to.y}`
                const fromNode = this.graph.getNode(fromNodeID)
                if (!fromNode) {
                    console.log(`Can't cheat path on ${fromNodeID} to ${toNodeID} (missing from node)`)
                    return
                }
                const toNode = this.graph.getNode(toNodeID)
                if (!toNode) {
                    console.log(`Can't cheat path on ${fromNodeID} to ${toNodeID} (missing to node)`)
                    return
                }
                this.addLinkToGraph(fromNode, toNode)
                this.addLinkToGraph(toNode, fromNode)
            }

            if (options.maps.includes("arena")) {
                // Add paths to hop the northern ledges of the hill in the middle
                addCheatPath({ map: "arena", x: 199, y: -360 }, { map: "arena", x: 233, y: -391 })
                addCheatPath({ map: "arena", x: 565, y: -332 }, { map: "arena", x: 531, y: -359 })
            }

            if (options.maps.includes("cave")) {
                // Add path near bridge
                addCheatPath({ map: "cave", x: 121, y: -1051 }, { map: "cave", x: 23, y: -1075 })
            }

            if (options.maps.includes("level1")) {
                // Add path across cliff and water
                // addCheatPath({ map: "level1", x: -103, y: 160 }, { map: "level1", x: -297, y: 184 })
                // Add path up cliff to ladder
                addCheatPath({ map: "level1", x: -271, y: 616 }, { map: "level1", x: -297, y: 557 })
            }

            if (options.maps.includes("level2e")) {
                addCheatPath({ map: "level2e", x: 295, y: 176 }, { map: "level2e", x: 329, y: 160 })
                addCheatPath({ map: "level2e", x: 311, y: 240 }, { map: "level2e", x: 345, y: 237 })
                addCheatPath({ map: "level2e", x: 487, y: 349 }, { map: "level2e", x: 471, y: 384 })
            }

            if (options.maps.includes("level2n")) {
                addCheatPath({ map: "level2n", x: 97, y: -248 }, { map: "level2n", x: 71, y: -275 })
            }

            if (options.maps.includes("level2s")) {
                // Add path near ladder
                addCheatPath({ map: "level2s", x: -121, y: 640 }, { map: "level2s", x: -87, y: 613 })
                // Add paths near east door
                addCheatPath({ map: "level2s", x: 207, y: 416 }, { map: "level2s", x: 249, y: 424 })
                addCheatPath({ map: "level2s", x: 199, y: 528 }, { map: "level2s", x: 233, y: 536 })
                addCheatPath({ map: "level2s", x: 199, y: 581 }, { map: "level2s", x: 233, y: 573 })
            }

            if (options.maps.includes("level3")) {
                // Add path near ladder to level4
                addCheatPath({ map: "level3", x: 73, y: -387 }, { map: "level3", x: 7, y: -403 })
            }

            if (options.maps.includes("level4")) {
                // Add cheat path to mummies
                addCheatPath({ map: "level4", x: 55, y: -8 }, { map: "level4", x: 89, y: -16 })
            }

            if (options.maps.includes("main")) {
                // Add a path to hop the NE corner of the target monsters fence
                addCheatPath({ map: "main", x: -95, y: 229 }, { map: "main", x: -137, y: 248 })
                // Add a path to hop the SE corner of the target monsters fence
                addCheatPath({ map: "main", x: -95, y: 533 }, { map: "main", x: -137, y: 549 })
                // Add a path to hop the fence near Rose
                addCheatPath({ map: "main", x: -311, y: 149 }, { map: "main", x: -345, y: 160 })
                // Add a path across wall from goos to mansion
                addCheatPath({ map: "main", x: 303, y: 808 }, { map: "main", x: 433, y: 805 })
            }

            if (options.maps.includes("spookytown")) {
                addCheatPath({ map: "spookytown", x: 95, y: 1264 }, { map: "spookytown", x: 161, y: 1221 })
            }

            if (options.maps.includes("winter_cove")) {
                // Add paths to disconnected parts
                addCheatPath({ map: "winter_cove", x: -607, y: -352 }, { map: "winter_cove", x: -729, y: -379 })
                addCheatPath({ map: "winter_cove", x: -519, y: -1368 }, { map: "winter_cove", x: -585, y: -1475 })
                addCheatPath({ map: "winter_cove", x: -423, y: -1720 }, { map: "winter_cove", x: -505, y: -1811 })
                addCheatPath({ map: "winter_cove", x: -39, y: -1976 }, { map: "winter_cove", x: -153, y: -1955 })
                addCheatPath({ map: "winter_cove", x: 41, y: -2040 }, { map: "winter_cove", x: 41, y: -2163 })
                addCheatPath({ map: "winter_cove", x: 649, y: -347 }, { map: "winter_cove", x: 567, y: -256 })
                addCheatPath({ map: "winter_cove", x: -287, y: -907 }, { map: "winter_cove", x: -337, y: -800 })
                addCheatPath({ map: "winter_cove", x: -167, y: -896 }, { map: "winter_cove", x: -249, y: -939 })
                addCheatPath({ map: "winter_cove", x: 7, y: -1024 }, { map: "winter_cove", x: 73, y: -1107 })
                addCheatPath({ map: "winter_cove", x: 87, y: -1160 }, { map: "winter_cove", x: 185, y: -1203 })
                addCheatPath({ map: "winter_cove", x: 247, y: -1203 }, { map: "winter_cove", x: 345, y: -1211 })
                addCheatPath({ map: "winter_cove", x: 169, y: -1240 }, { map: "winter_cove", x: 71, y: -1315 })
                addCheatPath({ map: "winter_cove", x: -23, y: -1336 }, { map: "winter_cove", x: -57, y: -1344 })
                addCheatPath({ map: "winter_cove", x: -239, y: -1360 }, { map: "winter_cove", x: -305, y: -1379 })
                addCheatPath({ map: "winter_cove", x: 329, y: -1744 }, { map: "winter_cove", x: 287, y: -1803 })
                addCheatPath({ map: "winter_cove", x: 193, y: -1872 }, { map: "winter_cove", x: 119, y: -1955 })
                addCheatPath({ map: "winter_cove", x: 313, y: -1619 }, { map: "winter_cove", x: 247, y: -1528 })
                addCheatPath({ map: "winter_cove", x: 217, y: -1512 }, { map: "winter_cove", x: 151, y: -1587 })
            }

            if (options.maps.includes("winterland")) {
                // Add a path to the icegolem's place
                addCheatPath({ map: "winterland", x: 721, y: 277 }, { map: "winterland", x: 737, y: 352 })
            }
        }

        if (options.showConsole) {
            console.debug(`Pathfinding prepared! (${((Date.now() - start) / 1000).toFixed(3)}s)`)
            console.debug(`  # Nodes: ${this.graph.getNodeCount()}`)
            console.debug(`  # Links: ${this.graph.getLinkCount()}`)
        }
    }

    public static locateMonster(mTypes: MonsterName | MonsterName[]): IPosition[] {
        if (typeof mTypes == "string") mTypes = [mTypes]

        // We know the location of some special monsters
        const specialMonsters: Partial<Record<MonsterName, MonsterName>> = {
            goldenbat: "bat",
            snowman: "snowman",
        }

        const locations: IPosition[] = []

        for (const mapName in this.G.maps) {
            const map: GMap = this.G.maps[mapName as MapName]
            if (map.ignore) continue
            if (map.instance || !map.monsters || map.monsters.length == 0) continue // Map is unreachable, or there are no monsters

            for (const monsterSpawn of map.monsters) {
                if (!mTypes.includes(specialMonsters[monsterSpawn.type] ?? monsterSpawn.type)) continue

                if (monsterSpawn.random) {
                    // The monster can spawn at any spawn point on the map
                    for (const spawn of map.spawns) {
                        locations.push({ map: mapName as MapName, x: spawn[0], y: spawn[1] })
                    }
                } else if (monsterSpawn.boundary) {
                    // The monster has a single spawn boundary on this map
                    locations.push({
                        map: mapName as MapName,
                        x: (monsterSpawn.boundary[0] + monsterSpawn.boundary[2]) / 2,
                        y: (monsterSpawn.boundary[1] + monsterSpawn.boundary[3]) / 2,
                    })
                } else if (monsterSpawn.boundaries) {
                    // The monster can spawn on multiple maps
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
            if (map.instance || !map.npcs || map.npcs.length == 0) continue // Map is unreachable, or there are no NPCs

            for (const npc of map.npcs) {
                if (npc.id !== npcID) continue

                // TODO: If it's an NPC that moves around, check in the database for the latest location
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
        // Is the item craftable?
        const gCraft = this.G.craft[itemName]
        if (gCraft) {
            // If the item has a quest associated with it, use that npc, otherwise use the craftsman.
            const npcToLocate = gCraft.quest ? gCraft.quest : "craftsman"
            for (const mapName in this.G.maps) {
                const gMap = this.G.maps[mapName as MapName]
                if (gMap.ignore) continue

                for (const npc of gMap.npcs) {
                    if (npc.id == npcToLocate) {
                        // We found the NPC
                        return { map: mapName as MapName, x: npc.position[0], y: npc.position[1] }
                    }
                }
            }
        }

        throw new Error(`${itemName} is not craftable.`)
    }

    public static locateExchangeNPC(itemName: ItemName): IPosition {
        // Does the item have a quest involved?
        const gItem = this.G.items[itemName]
        if (gItem.quest) {
            // Find the NPC that accepts these quests
            let npcToLocate: NPCName
            for (const npcName in this.G.npcs) {
                const gNPC = this.G.npcs[npcName as NPCName]
                if (gNPC.ignore) continue

                if (gNPC.quest == gItem.quest) {
                    npcToLocate = gNPC.id
                    break
                }
            }
            // Look for the NPC in the maps
            if (npcToLocate) {
                for (const mapName in this.G.maps) {
                    const gMap = this.G.maps[mapName as MapName]
                    if (gMap.ignore) continue

                    for (const npc of gMap.npcs) {
                        if (npc.id == npcToLocate) {
                            // We found the NPC
                            return { map: mapName as MapName, x: npc.position[0], y: npc.position[1] }
                        }
                    }
                }
            }
        }

        // Is the item a token?
        if (gItem.type == "token") {
            // Find the NPC that accepts these tokens
            let npcToLocate: NPCName
            for (const npcName in this.G.npcs) {
                const gNPC = this.G.npcs[npcName as NPCName]
                if (gNPC.ignore) continue

                if (gNPC.token == itemName) {
                    npcToLocate = gNPC.id
                    break
                }
            }
            // Look for the NPC in the maps
            if (npcToLocate) {
                for (const mapName in this.G.maps) {
                    const gMap = this.G.maps[mapName as MapName]
                    if (gMap.ignore) continue

                    for (const npc of gMap.npcs) {
                        if (npc.id == npcToLocate) {
                            // We found the NPC
                            return { map: mapName as MapName, x: npc.position[0], y: npc.position[1] }
                        }
                    }
                }
            }
        }

        // Is the item exchangeable?
        if (gItem.e) {
            for (const mapName in this.G.maps) {
                const gMap = this.G.maps[mapName as MapName]
                if (gMap.ignore) continue

                for (const npc of gMap.npcs) {
                    if (npc.id == "exchange") {
                        // We found the NPC
                        return { map: mapName as MapName, x: npc.position[0], y: npc.position[1] }
                    }
                }
            }
        }

        throw new Error(`${itemName} is not exchangeable`)
    }
}
