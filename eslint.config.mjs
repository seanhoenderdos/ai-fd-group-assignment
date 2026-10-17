import { defineConfig } from "eslint/config";
import html from "@html-eslint/eslint-plugin";
import css from "@eslint/css";

export default defineConfig([
    {
        ignores: [
            "**/node_modules/**",
            "**/.npm-cache/**",
            "Css/all.min.css",
            "assets/**",
            "webfonts/**",
            "evidence/**",
        ],
    },
    {
        files: ["**/*.html"],
        plugins: { html },
        language: "html/html",
        extends: ["html/recommended"],
        rules: {
            // Prettier owns formatting so the tools agree on save.
            "html/attrs-newline": "off",
            "html/element-newline": "off",
            "html/indent": "off",
            "html/no-extra-spacing-tags": "off",
            "html/quotes": "off",
            "html/require-closing-tags": ["error", { selfClosing: "always" }],

            // The assignment does not specify a Baseline browser support target.
            "html/use-baseline": "off",
        },
    },
    {
        files: ["**/*.css"],
        plugins: { css },
        language: "css/css",
        extends: ["css/recommended"],
        rules: {
            // Page styles use variables defined in the shared Css/style.css file.
            "css/no-invalid-properties": ["error", { allowUnknownVariables: true }],

            // Keep the existing accessibility utility and page overrides valid.
            "css/no-important": "off",
            "css/use-baseline": "off",
        },
    },
]);
