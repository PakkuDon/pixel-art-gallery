module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:jest-dom/recommended",
    "airbnb",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "jest-dom"],
  rules: {
    quotes: ["error", "double"],
    semi: "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.*"] },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": "off",
    // Project doesn't use PropTypes
    "react/require-default-props": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
}
