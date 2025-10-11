import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        footbook: resolve(__dirname, "footbook.html"),
        "808": resolve(__dirname, "808.html"),
        A5479: resolve(__dirname, "A5479.html"),
      },
    },
  },
});
