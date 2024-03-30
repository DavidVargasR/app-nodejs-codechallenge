import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  outDir: "build",
  minify: false,
  sourcemap: false,
  splitting: false,
  clean: true,
  dts: true,
  bundle: false,
});
