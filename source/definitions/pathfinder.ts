import { MapName } from "./adventureland-data"

export type Grid = Uint8Array
export type Grids = { [T in MapName]?: Grid }

export type NodeData = {
    map: MapName,
    x: number,
    y: number
}

export type LinkData = NodeData & (
    /**
     * Used to travel through doors
     */
    {
        type: "transport"
        spawn: number
    }
    /**
     * Used to travel to the spawn point of the map
     */
    | {
        type: "town"
    } |
    /**
     * Used when leaving cyberland (TODO: Or jail?)
     */
    {
        type: "leave"
    }
    /**
     * Normal movement
     */
    | {
        type: "move"
    })