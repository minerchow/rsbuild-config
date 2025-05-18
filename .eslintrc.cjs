module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "rsbuild.config.js"],
  parser: "@typescript-eslint/parser",
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-ts-comments': 'off',
  },
};