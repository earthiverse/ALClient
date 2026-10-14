import type { PathNode, SafeWalkPoint } from "alpathfinder"
import type { MapName } from "./adventureland-data.js"

export type { PathNode, SafeWalkPoint }

export type NodeData = {
    map: MapName
    x: number
    y: number
}

export type PathfinderOptions = {
    avoidTownWarps?: boolean | undefined
    avoidMaps?: MapName[] | undefined
    getWithin?: number | undefined
    useBlink?: boolean | undefined
    costs?:
        | {
              blink?: number | undefined
          }
        | undefined
    speed?: number | undefined
    /** If set, we will console.log() messages */
    showConsole?: boolean | undefined
}
