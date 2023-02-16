import typescript from "rollup-plugin-typescript2";

const config = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs"
    },
    {
      file: "dist/index.es.js",
      format: "esm"
    }
  ],
  plugins: [typescript()]
};

export default config;
