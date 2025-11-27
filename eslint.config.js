// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    ignores: ["coverage/**/*", "dist/**/*"],
  },
  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.jest.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
    },
  },
);
