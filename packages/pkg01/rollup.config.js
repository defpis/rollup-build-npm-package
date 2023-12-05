export default {
  input: "index.js",
  output: [
    {
      file: "dist/cjs/index.cjs",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/esm/index.mjs",
      format: "es",
      sourcemap: true,
    },
  ],
};
