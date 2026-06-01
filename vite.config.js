import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/akwithcode-site/",
  server: {
    host: "localhost",
    port: 5173,
    strictPort: true,
  },
  plugins: [react(), tailwindcss()],
});
