import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Tube-Recipe-Book/",
  plugins: [react()],
});
