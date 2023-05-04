import postcss from "rollup-plugin-postcss";
import pluginAlias from "@rollup/plugin-alias";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json" assert { type: "json" };
import tsconfig from "./tsconfig.json" assert { type: "json" };
import convertTsConfigPathsToPluginAlias from "./scripts/convertTsConfigPathsToPluginAlias.js";

const aliases = convertTsConfigPathsToPluginAlias(tsconfig);

const config = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "esm",
    },
  ],
  plugins: [
    pluginAlias({
      entries: aliases,
    }),
    typescript(),
    postcss(),
  ],
};

export default config;
