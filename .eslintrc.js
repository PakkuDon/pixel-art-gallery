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
    "plugin:@next/next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "jest-dom"],
  rules: {
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
    "import/prefer-default-export": "off",
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
    // Skipped as project doesn't use Next' Image
    "@next/next/no-img-element": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
}
