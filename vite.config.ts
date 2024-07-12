import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@container", replacement: "/src/container" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@shared", replacement: "/src/shared" },
      { find: "@redux", replacement: "/src/redux" },
      { find: "@axios", replacement: "/src/axios" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@", replacement: "/src" },
    ],
  },
  // server: {
  //   proxy: {
  //     // Proxy 설정을 통해 CORS 문제 해결
  //     "/api": {
  //       target: "http://localhost:5173",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
