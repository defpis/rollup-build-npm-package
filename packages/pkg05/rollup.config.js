import typescript from "rollup-plugin-typescript2";

export default {
  external: ["**/node_modules/**", "react", "@arco-design/web-react"],
  input: "src/index.tsx",
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
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: "./tsconfig.json",
    }),
  ],
};
