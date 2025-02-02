// @ts-check

import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
    eslint.configs.recommended,
    tsEslint.configs.strictTypeChecked,
    tsEslint.configs.stylisticTypeChecked,
    tsEslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ['**/*.js'],
        extends: [tsEslint.configs.disableTypeChecked],
    },
    {
        ignores: [
            ".angular",
            ".idea",
            ".vscode",
            "dist",
            "node_modules",
            "public",
            "src/main.ts",
            "src/polyfills.ts",
        ]
    }
);
