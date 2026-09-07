import fs from "fs"
import path from "path"
import prettier from "prettier"

const gFile = process.argv[2] || "G_5140.json"
const targetTypes = process.argv.slice(3)
const gPath = path.resolve(process.cwd(), gFile)
const dataFilePath = path.resolve(process.cwd(), "source/definitions/adventureland-data.ts")

if (!fs.existsSync(gPath)) {
    console.error(`File not found: ${gPath}`)
    process.exit(1)
}

if (!fs.existsSync(dataFilePath)) {
    console.error(`File not found: ${dataFilePath}`)
    process.exit(1)
}

const g = JSON.parse(fs.readFileSync(gPath, "utf8"))
const prettierConfig = (await prettier.resolveConfig(path.resolve(process.cwd(), ".prettierrc"))) || {}

// Map of TypeScript type names in adventureland-data.ts to keys in G
const typeToGKey = {
    AchievementName: "achievements",
    AnimationName: "animations",
    CharacterType: "classes",
    ConditionName: "conditions",
    DropName: "drops",
    ImageSetName: "imagesets",
    ItemName: "items",
    MapName: "maps",
    MonsterName: "monsters",
    NPCName: "npcs",
    ProjectileName: "projectiles",
    SetName: "sets",
    SkillName: "skills",
    TilesetName: "tilesets",
    TitleName: "titles",
}

const typeExclusions = {
    DropName: new Set(["gold", "maps", "monsters", "monsters_home_server", "skins"]),
}

let content = fs.readFileSync(dataFilePath, "utf8")
const typesToProcess = targetTypes.length > 0 ? targetTypes : Object.keys(typeToGKey)

let updatedCount = 0

for (const typeName of typesToProcess) {
    const gKey = typeToGKey[typeName]
    if (!gKey) {
        console.warn(`Unknown type "${typeName}". Valid types: ${Object.keys(typeToGKey).join(", ")}`)
        continue
    }

    if (!(gKey in g)) {
        console.warn(`Key "${gKey}" not found in ${gFile}, skipping ${typeName}...`)
        continue
    }

    const exclusions = typeExclusions[typeName] || new Set()
    const keys = Object.keys(g[gKey] || {})
        .filter((key) => !exclusions.has(key))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    if (keys.length === 0) {
        console.warn(`No entries found for "${gKey}", skipping ${typeName}...`)
        continue
    }

    // Match export type <TypeName> = ... up to the next export, JSDoc comment, or empty block
    const regex = new RegExp(`export type ${typeName} =([\\s\\S]*?)(?=\\n\\s*\\/\\*\\*|\\n\\s*export|$)`)
    if (!regex.test(content)) {
        console.warn(`Could not find "export type ${typeName} =" in ${dataFilePath}`)
        continue
    }

    const newDefinition = `export type ${typeName} =\n    | "${keys.join('"\n    | "')}"`
    content = content.replace(regex, newDefinition)
    console.log(`Updated ${typeName} (${keys.length} items from G.${gKey})`)
    updatedCount++
}

if (updatedCount > 0) {
    const formatted = await prettier.format(content, {
        ...prettierConfig,
        parser: "typescript",
    })
    fs.writeFileSync(dataFilePath, formatted, "utf8")
    console.log(`Successfully formatted and saved ${dataFilePath}`)
}
