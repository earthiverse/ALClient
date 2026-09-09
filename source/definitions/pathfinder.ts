import type { PathNode, SafeWalkPoint } from "alpathfinder"
import type { MapName } from "./adventureland-data.js"

export type { PathNode, SafeWalkPoint }

export type NodeData = {
    map: MapName
    x: number
    y: number
}

export type PathfinderOptions = {
    avoidTownWarps?: boolean
    getWithin?: number
    useBlink?: boolean
    costs?: {
        blink?: number
    }
    speed?: number
    /** If set, we will console.log() messages */
    showConsole?: boolean
}
