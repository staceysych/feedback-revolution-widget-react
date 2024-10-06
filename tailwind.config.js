/** @type {import('tailwindcss').Config} */

import {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} from "tailwindcss-scoped-preflight";

import daisyui from "daisyui";

export default {
  important: ".fr",
  prefix: "fr-",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  extend: {
    colors: {
      brandWhite: "#FAF7F7",
      brandDarkBlue: "#251055",
    },
  },
  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer(".fr"),
    }),
    daisyui,
  ],
};
