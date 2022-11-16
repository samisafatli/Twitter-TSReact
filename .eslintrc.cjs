/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript"
  ],
  rules: {
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/triple-slash-reference": "off",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["vite.config.ts", ".eslintrc.cjs"],
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.config.json",
      },
    },
  ],
};