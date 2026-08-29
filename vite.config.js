import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this project from https://nahuelbrizu.github.io/Portfolio/
// so every built asset path must be prefixed with /Portfolio/.
export default defineConfig({
  base: "/Portfolio/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
