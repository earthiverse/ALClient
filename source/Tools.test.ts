import { Game } from "./Game"
import { Tools } from "./Tools"

beforeAll(async () => {
    await Game.getGData(true, false)
}, 60000)

test("Tools.distance && Tools.squaredDistance", async () => {
    const x0_y0 = { x: 0, y: 0 }
    const x50_y0 = { x: 50, y: 0 }
    const x0_y50 = { x: 0, y: 50 }

    /**
     *  NOTE: The rectangles in Adventure Land work like this, where X is the point (x,y):
     *   _______
     *  |       |
     *  |       |
     *  |___X___|
     */

    const x0_y0_h10_w10 = { height: 10, width: 10, x: 0, y: 0 }
    const x5_y5_h10_w10 = { height: 10, width: 10, x: 5, y: 5 }
    const x50_y0_h10_w10 = { height: 10, width: 10, x: 50, y: 0 }
    const x0_y50_h10_w10 = { height: 10, width: 10, x: 0, y: 50 }

    // Test distance between points
    expect(Tools.distance(x0_y0, x50_y0)).toBe(50)
    expect(Tools.squaredDistance(x0_y0, x50_y0)).toBe(50 * 50)
    expect(Tools.distance(x0_y0, x0_y50)).toBe(50)
    expect(Tools.squaredDistance(x0_y0, x0_y50)).toBe(50 * 50)

    // Test distance between rectangles
    expect(Tools.distance(x0_y0_h10_w10, x50_y0_h10_w10)).toBe(40) // The right of rectangle 1 should be 40 pixels to the left side of rectangle 2
    expect(Tools.squaredDistance(x0_y0_h10_w10, x50_y0_h10_w10)).toBe(40 * 40)
    expect(Tools.distance(x0_y0_h10_w10, x0_y50_h10_w10)).toBe(40) // The top of rectangle 1 should be 40 pixels below rectangle 2
    expect(Tools.squaredDistance(x0_y0_h10_w10, x0_y50_h10_w10)).toBe(40 * 40)
    expect(Tools.distance(x0_y0_h10_w10, x5_y5_h10_w10)).toBe(0) // The two rectangles should be overlapping
    expect(Tools.squaredDistance(x0_y0_h10_w10, x5_y5_h10_w10)).toBe(0)

    // Test special case with a zero height rectangle (i.e. a line)
    const zero_height = { height: 0, width: 10, x: 50, y: 0 }
    expect(Tools.distance(x0_y0, zero_height)).toBe(45)
    expect(Tools.squaredDistance(x0_y0, zero_height)).toBe(45 * 45)
    expect(Tools.distance(x50_y0, zero_height)).toBe(0)
    expect(Tools.squaredDistance(x50_y0, zero_height)).toBe(0)

    // Test special case with a zero width rectangle (i.e. a line)
    const zero_width = { height: 10, width: 0, x: 0, y: 50 }
    expect(Tools.distance(x0_y0, zero_width)).toBe(40) // The top of the line should be 40 pixels below point 1
    expect(Tools.squaredDistance(x0_y0, zero_width)).toBe(40 * 40) // The top of the line should be 40 pixels below point 1
})

test("Pathfinder.doorDistance", async () => {
    const door = Game.G.maps.main.doors[2]
    const doorPoint = { x: door[0], y: door[1] }
    const doorRectangle = { x: door[0], y: door[1], width: door[2], height: door[3] }

    // Test the door base coordinate
    expect(Tools.squaredDistance(doorPoint, doorRectangle)).toBe(0)
    // Test the corners of the door
    const doorCorner_1 = { x: door[0] + door[2] / 2, y: door[1] - door[3] }
    expect(Tools.squaredDistance(doorCorner_1, doorRectangle)).toBe(0)
    const doorCorner_2 = { x: door[0] - door[2] / 2, y: door[1] - door[3] }
    expect(Tools.squaredDistance(doorCorner_2, doorRectangle)).toBe(0)
    const doorCorner_3 = { x: door[0] - door[2] / 2, y: door[1] }
    expect(Tools.squaredDistance(doorCorner_3, doorRectangle)).toBe(0)
    const doorCorner_4 = { x: door[0] - door[2] / 2, y: door[1] }
    expect(Tools.squaredDistance(doorCorner_4, doorRectangle)).toBe(0)
    // Test inside the door
    const doorInside = { x: door[0] - door[2] / 2, y: door[1] - door[3] / 2 }
    expect(Tools.squaredDistance(doorInside, doorRectangle)).toBe(0)

    // Test outside the door
    const doorOutside_1 = { x: door[0] + door[2], y: door[1] - door[3] }
    expect(Tools.squaredDistance(doorOutside_1, doorRectangle)).toBe((door[2] / 2) * (door[2] / 2))
})
