/*
 * @Description: main
 * @Author: Sunly
 * @Date: 2023-08-05 04:07:11
 */
import { createApp } from "vue";
import App from "./App.vue";
import "unfonts.css";
import "./main.css";
import { ipadCursorPlugin } from "ipad-cursor/vue";

createApp(App)
  .use(ipadCursorPlugin, {
    blockStyle: { radius: "auto" },
  })
  .mount("#app");
