import path from "path";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";
import { BuildSettings } from "./devtools/build-settings/BuildSettings";

export default defineConfig({
  css: {
    postcss: {
      plugins: [require("autoprefixer")],
    },
  },
  resolve: {
    alias: BuildSettings.aliases,
  },
  server: {
    host: "localhost",
    port: 3000,
    open: true,
  },
  build: {
    minify: "terser",
    target: "es2015",
    outDir: "build",
  },
  base: process.env.NODE_ENV !== "production" ? "/" : "/siennas-bday",
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      entry: path.join(BuildSettings.SRC, "Root/index.tsx"),
      template: "public/index.html",
      viteNext: true,
    }),
    viteCompression({
      algorithm: "gzip",
      filter: /.(js|mjs|json|css|html|jpg|webp|png|avif)$/i,
    }),
    viteCompression({
      algorithm: "brotliCompress",
      filter: /.(js|mjs|json|css|html|jpg|webp|png|avif)$/i,
    }),
  ],
  optimizeDeps: {
    include: ["@figliolia/ripples"],
  },
});
