import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // server: {
  //   port: 3001,
  //   proxy: {
  //     "^/api/.*": {
  //       target: "http://192.168.222.133:3000",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  // base: "/",
  test: {
    // ...
  },
  resolve: {
    alias: {
      interface: path.resolve(__dirname, "./src/interface"),
      common: path.resolve(__dirname, "./src/common"),
      config: path.resolve(__dirname, "./src/config"),
      app: path.resolve(__dirname, "./src/app"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
});
