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
    extend: {
      colors: {
        brandWhite: "#FAF7F7",
        brandDarkBlue: "#251055",
        brandLight: "#F0EAEA",
        brandLightHover: "#EBE5E5",
      },
    },
  },

  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer(".fr"),
    }),
    daisyui,
  ],
};
