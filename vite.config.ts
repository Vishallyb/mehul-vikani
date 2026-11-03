import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  server: {
    // Forward API calls and the admin panel to the backend during development
    proxy: {
      "/api": process.env.VITE_PROXY_TARGET || "http://localhost:5000",
      "^/admin(/|$)": process.env.VITE_PROXY_TARGET || "http://localhost:5000",
      "/uploads": process.env.VITE_PROXY_TARGET || "http://localhost:5000",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
