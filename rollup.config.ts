import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

const config = {
  input: "src/FeedbackWidget.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
  external: ["react", "react-dom"],
};

export default config;
