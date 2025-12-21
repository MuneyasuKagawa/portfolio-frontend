import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
  {
    ignores: [
      "dist/",
      "node_modules/",
      ".astro/",
      ".next/",
      "out/",
      "app/",
      "components/",
      "lib/",
      "hooks/",
      ".design/",
      "terraform/",
      "scripts/",
      "locales/",
      "public/",
    ],
  },
];
