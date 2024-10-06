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
  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer(".fr"),
    }),
    daisyui,
  ],
};
