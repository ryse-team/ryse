import js from "@eslint/js"
import pluginVue from "eslint-plugin-vue"
import globals from "globals"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginPrettier from "eslint-plugin-prettier"

export default [
    {
        name: "app/files-to-lint",
        files: ["**/*.{js,mjs,jsx,vue}"],
    },

    {
        name: "app/files-to-ignore",
        ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**", "**/*.local"],
    },

    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    js.configs.recommended,
    ...pluginVue.configs["flat/recommended"],
    ...pluginVue.configs["flat/vue3-recommended"],

    eslintConfigPrettier, // Disable ESLint rules that conflict with Prettier
    {
        rules: {
            "prettier/prettier": "error", // Report Prettier formatting issues as ESLint errors
        },
        plugins: {
            prettier: eslintPluginPrettier,
        },
    },

    {
        rules: {
            "vue/multi-word-component-names": "error",
            "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        }
    }
]
