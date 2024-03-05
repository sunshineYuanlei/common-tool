import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: "istanbul", // or 'v8',
      reporter: ["text", "json", "html"],
    },
  },
  resolve: {
    alias: {
      "@vmejs/shared": resolve(__dirname, "packages/shared/index.ts"),
      "@vmejs/core": resolve(__dirname, "packages/core/index.ts"),
    },
  },
});
