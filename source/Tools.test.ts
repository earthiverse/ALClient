import { Tools } from "./Tools"

test("Tools.distance", async () => {
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
    expect(Tools.distance(x0_y0, x0_y50)).toBe(50)

    // Test distance between rectangles
    expect(Tools.distance(x0_y0_h10_w10, x50_y0_h10_w10)).toBe(40) // The right of rectangle 1 should be 40 pixels to the left side of rectangle 2
    expect(Tools.distance(x0_y0_h10_w10, x0_y50_h10_w10)).toBe(40) // The top of rectangle 1 should be 40 pixels below rectangle 2
    expect(Tools.distance(x0_y0_h10_w10, x5_y5_h10_w10)).toBe(0) // The two rectangles should be overlapping

    // Test special case with a zero height rectangle (i.e. a line)
    const zero_height = { height: 0, width: 10, x: 50, y: 0 }
    expect(Tools.distance(x0_y0, zero_height)).toBe(45)
    expect(Tools.distance(x50_y0, zero_height)).toBe(0)

    // Test special case with a zero width rectangle (i.e. a line)
    const zero_width = { height: 10, width: 0, x: 0, y: -50 }
    expect(Tools.distance(x0_y0, zero_width)).toBe(40) // The top of the line should be 40 pixels below point 1
})