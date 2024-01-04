import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const ENV = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    base: ENV.VITE_BASE_URL,
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
