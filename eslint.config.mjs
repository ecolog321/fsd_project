import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import i18nextPlugin from "eslint-plugin-i18next";
import orminaPlugin from "eslint-plugin-ormina-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "build/**",
      "storybook/**",
      "storybook-static/**",
      "config/jest/**",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: pluginReact,
      "react-hooks": reactHooks,
      i18next: i18nextPlugin,
      "ormina-plugin": orminaPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      indent: "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/display-name": "off",
      "i18next/no-literal-string": ["error", { markupOnly: true }],
      "ormina-plugin/path-cheker": ["error", { alias: "@" }],
      "ormina-plugin/layer-imports":['error', {
        alias:'@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing']
      }],
      "ormina-plugin/public-api-imports": [
        "error",
        {
          alias: "@",
          testFilesPatterns: [
            "**/*.test.ts",
            "**/*.test.ts",
            "**/StoreDecorator.tsx",
          ],
        },
      ],
      //"i180ally.so":['warn', true],
      //"i18n-ally.keepFulfilled": ['warn', true],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
