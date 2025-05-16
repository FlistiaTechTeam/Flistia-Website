import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { compression } from "vite-plugin-compression2";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({
      algorithm: "gzip",
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    compression({
      algorithm: "brotliCompress",
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  base: "/",
  build: {
    minify: "esbuild",
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true,
    //     pure_funcs: ["console.log", "console.info", "console.debug"],
    //   },
    // },
    esbuild: {
      drop: ["console", "debugger"],
      pure: ["console.log", "console.info", "console.debug"],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // “vendor” suitcase: React and friends
          vendor: ["react", "react-dom", "react-router-dom"],

          // “mui” suitcase: Material UI
          mui: ["@mui/material", "@mui/icons-material"],

          // “framer” suitcase: Framer Motion
          framer: ["framer-motion"],
        },
      },
    },
    chunkSizeWarningLimit: 200,
    sourcemap: false,
  },
  server: {
    host: "0.0.0.0", // must match your URL
    // this port is initial and can be changed by vite if it is already in use
    port: 5173,
    hmr: {
      protocol: "ws", // or 'wss' if using HTTPS
      host: "0.0.0.0",
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@mui/material",
      "@mui/icons-material",
    ],
  },
});
