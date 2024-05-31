export default {
    globals: {
        "ts-jest": {
            useESM: true,
        },
    },
    moduleDirectories: ["node_modules", "source"],
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    preset: "ts-jest/presets/default-esm",
    roots: ["<rootDir>/source"],
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
}
