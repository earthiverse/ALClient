// @ts-check

import eslint from "@eslint/js"
import { defineConfig } from "eslint/config"
import eslintConfigPrettier from "eslint-config-prettier"
import tseslint from "typescript-eslint"

// TODO: Fix problems when `tseslint.configs.strict` is added
export default defineConfig(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        ignores: ["build/*"],
        rules: {
            "@typescript-eslint/consistent-type-imports": "error",
        },
    },
    {
        files: ["source/definitions/**/*.test.ts"],
        rules: {
            "no-loss-of-precision": "off",
            "@typescript-eslint/no-loss-of-precision": "off",
        },
    },
)
