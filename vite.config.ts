import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://accel12.github.io/Softtek/",
  plugins: [react()],
});
