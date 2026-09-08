import fs from "fs"
import path from "path"
import prettier from "prettier"

const gFile = process.argv[2] || "G_5202.json"
const targetKeys = process.argv.slice(3)
const gPath = path.resolve(process.cwd(), gFile)

if (!fs.existsSync(gPath)) {
    console.error(`File not found: ${gPath}`)
    process.exit(1)
}

const g = JSON.parse(fs.readFileSync(gPath, "utf8"))
const prettierConfig = (await prettier.resolveConfig(path.resolve(process.cwd(), ".prettierrc"))) || {}

// All G keys that map to adventureland-data-<key>.test.ts
const allKeys = [
    "achievements",
    "animations",
    "classes",
    "conditions",
    "cosmetics",
    "craft",
    "dimensions",
    "dismantle",
    "drops",
    "events",
    "geometry",
    "items",
    "levels",
    "maps",
    "monsters",
    "multipliers",
    "npcs",
    "positions",
    "projectiles",
    "sets",
    "skills",
    "sprites",
    "tilesets",
    "titles",
    "tokens",
]

const keysToGenerate = targetKeys.length > 0 ? targetKeys : allKeys
const outputDir = path.resolve(process.cwd(), "source/definitions")
const date = new Date().toISOString().split("T")[0]

function sortObject(value) {
    if (Array.isArray(value)) {
        return value.map(sortObject)
    } else if (value !== null && typeof value === "object") {
        return Object.keys(value)
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
            .reduce((acc, key) => {
                acc[key] = sortObject(value[key])
                return acc
            }, {})
    }
    return value
}

for (const key of keysToGenerate) {
    if (!(key in g)) {
        console.warn(`Key "${key}" not found in ${gFile}, skipping...`)
        continue
    }

    const sortedData = sortObject(g[key])

    const rawContent = `import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version ${g.version ?? "unknown"} (${date})
 * It is used to confirm type correctness
 */

test("G.${key} type validation", async () => {
    const G_${key}: Pick<GData, "${key}"> = {
        ${key}: ${JSON.stringify(sortedData)},
    }
    expect(G_${key}).toBeDefined()
})
`

    const formatted = await prettier.format(rawContent, {
        ...prettierConfig,
        parser: "typescript",
    })

    const targetPath = path.join(outputDir, `adventureland-data-${key}.test.ts`)
    fs.writeFileSync(targetPath, formatted, "utf8")
    console.log(`Generated ${targetPath}`)
}
