import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unfonts({
      custom: {
        display: "swap",
        families: {
          vt323: {
            src: "./src/assets/vt323-v17-latin-regular.woff2",
          },
        },
      },
    }),
    vue(),
  ],
});
