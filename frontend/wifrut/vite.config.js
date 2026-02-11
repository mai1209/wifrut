import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  base: "./",
  server: {
    host: true,
    allowedHosts: [
      "https://wifrut-livid.vercel.app",
     
    ],
  },
  preview: {
    host: true,
    allowedHosts: [
      "https://wifrut-livid.vercel.app",
  
    ],
  },
});
