// vite.config.ts
import { defineConfig } from "vitest/config"; // Import from vitest/config instead of vite
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
