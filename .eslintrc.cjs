module.exports = {
  extends: ["mantine", "plugin:@next/next/recommended", "plugin:jest/recommended", "prettier"],
  plugins: ["testing-library", "jest"],
  overrides: [
    {
      files: ["**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/extensions": "off",
    "@typescript-eslint/semi": "off",
    "max-len": ["error", { code: 120 }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
  settings: {
    next: {
      rootDir: true,
    },
  },
}
