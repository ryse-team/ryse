import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";

export default [
    {
        files: ["**/*.vue"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            vue: pluginVue,
            prettier: prettierPlugin,
        },
        rules: {
            ...pluginVue.configs["flat/recommended"][0].rules,
            "vue/multi-word-component-names": "off",
            "prettier/prettier": "error",
        },
    },
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "prettier/prettier": [
                "error",
                {},
                {
                    usePrettierrc: true,
                },
            ],
        },
    },
];
