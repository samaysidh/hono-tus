import { defineConfig } from "bunup";

export default defineConfig({
  entry: "src/index.ts",
  format: ["esm", "cjs"],
  minify: true,
  sourcemap: "linked",
  exports: true,
  unused: true,
});
