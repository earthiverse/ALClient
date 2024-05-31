// @ts-check

import eslint from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import tseslint from "typescript-eslint"

// TODO: Fix problems when `tseslint.configs.strict` is added
export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier, {
    ignores: ["build/*"],
    rules: {
        "@typescript-eslint/consistent-type-imports": "error",
    },
})
