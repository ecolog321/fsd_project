import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["**/node_modules/", "**/build/"]),

    { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], rules:{"indent": [2,4]} },

    { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals:{ ...globals.browser, ...globals.es2021 }} },

    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins:{
            "react-hooks":reactHooks,
        },
        rules:{
            "indent": "on",
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "error",
            "react/jsx-uses-vars": "error",
            "react/jsx-indent":[2,4],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            "no-unused-vars":"warn",
            "react/display-name": "off",
            "@typescript-eslint/no-unused-vars": "warn",
        },
        settings:{
            react:{
                version:'detect'
            }
        }
    }
]);
