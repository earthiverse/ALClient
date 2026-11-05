import { jest } from "@jest/globals"
import { EventEmitter } from "events"
import { CodeBridge } from "./CodeBridge.js"
import type { Character } from "../Character.js"

describe("CodeBridge", () => {
    test("ignores code_eval while disabled", async () => {
        const socket = new EventEmitter() as EventEmitter & {
            on: typeof EventEmitter.prototype.on
            off: typeof EventEmitter.prototype.off
        }
        const character = {
            socket,
            equip: jest.fn(async () => undefined),
        } as unknown as Character

        const bridge = new CodeBridge(character)
        socket.emit("code_eval", `equip(0)`)
        await new Promise((r) => setTimeout(r, 20))
        expect(character.equip).not.toHaveBeenCalled()

        bridge.enable()
        await bridge.handle(`(async function(){await equip(2,"helmet");})();`)
        expect(character.equip).toHaveBeenCalledWith(2, "helmet")

        bridge.disable()
        ;(character.equip as jest.Mock).mockClear()
        socket.emit("code_eval", `equip(1)`)
        await Promise.resolve()
        expect(character.equip).not.toHaveBeenCalled()
    })
})
