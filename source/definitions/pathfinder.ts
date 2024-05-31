import type { ItemName, MapName } from "./adventureland-data.js"

export type Grid = Uint8Array
export type Grids = { [T in MapName]?: Grid }

export type NodeData = {
    map: MapName
    x: number
    y: number
}

export type LinkData = NodeData &
    /**
     * Used to travel through doors
     */
    (| {
              type: "transport"
              spawn: number
          }
        /**
         * Used to travel to the spawn point of the map
         */
        | {
              type: "town"
          }
        /**
         * Used when entering a crypt
         */
        | {
              key: ItemName
              type: "enter"
          }
        /**
         * Used when leaving cyberland or jail
         */
        | {
              type: "leave"
          }
        /**
         * Normal movement
         */
        | {
              type: "move"
          }
    )

export type PathfinderOptions = {
    avoidMaps?: MapName[]
    avoidTownWarps?: boolean
    getWithin?: number
    useBlink?: boolean
    costs?: {
        blink?: number
        enter?: number
        town?: number
        transport?: number
    }
    /** If set, we will console.log() messages */
    showConsole?: boolean
}
