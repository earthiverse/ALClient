module.exports = {
    "moduleDirectories": [
        "node_modules",
        "source"
    ],
    "roots": [
        "<rootDir>/source"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "testEnvironment": "node"
}