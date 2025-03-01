import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // JSX Formatting
      "react/jsx-tag-spacing": ["error", {
        "closingSlash": "never",
        "beforeSelfClosing": "never",
        "afterOpening": "never",
        "beforeClosing": "never"
      }],

      // Whitespace rules
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "indent": ["error", 2],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],

      // TypeScript best practices
      "@typescript-eslint/explicit-function-return-type": ["error", {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true
      }],
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": ["error", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }],
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/consistent-type-imports": ["error", { "prefer": "type-imports" }],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

      // React/Next.js best practices
      "react/self-closing-comp": "error",
      "react/no-unknown-property": "error",
      "react/jsx-curly-brace-presence": ["error", {
        "props": "never",
        "children": "never"
      }]
    }
  }
];

export default eslintConfig;
