import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js and TypeScript configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add Prettier support
  ...compat.extends("plugin:prettier/recommended"),

  {
    rules: {
      // Your custom rules
      "no-unused-vars": "off",
      "react-hooks/rules-of-hooks": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "react/react-in-jsx-scope": "off",
      // You can also explicitly enable the Prettier rule:
      "prettier/prettier": "warn",
    },
  },
];

export default eslintConfig;
