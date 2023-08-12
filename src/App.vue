<!--
 * @Description: main page
 * @Author: Sunly
 * @Date: 2023-08-05 04:07:11
-->
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useCursor } from "ipad-cursor/vue";
import type { IpadCursorConfig } from "ipad-cursor";
import { onMounted, reactive, ref } from "vue";
import { links } from "./data/links";
import { colors } from "./data/colors";

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const { bgColor, color, shallowColor } = colors.splice(randomIndex, 1)[0];
  return { bgColor, color, shallowColor };
};

const bgStyle = reactive(getRandomColor());
const getCursorStyle = (): IpadCursorConfig => ({
  normalStyle: { background: `${bgStyle.color}70` },
  textStyle: { background: `${bgStyle.color}70` },
  mouseDownStyle: { background: `${bgStyle.color}aa`, scale: 0.8 },
});
const updateCursorConfig = () => {
  updateConfig(getCursorStyle());
};
const { updateConfig } = useCursor({
  ...getCursorStyle(),
  enableMouseDownEffect: true,
});
onMounted(() => {
  document.body.style.backgroundColor = bgStyle.bgColor;
});

const isChanging = ref(false);
const handleChangeTheme = () => {
  if (isChanging.value) return;
  isChanging.value = true;
  const { bgColor, color, shallowColor } = getRandomColor();
  colors.push({ ...bgStyle });
  bgStyle.bgColor = bgColor;
  bgStyle.color = color;
  bgStyle.shallowColor = shallowColor;
  updateCursorConfig();
  setTimeout(() => {
    document.body.style.backgroundColor = bgColor;
    setTimeout(() => {
      isChanging.value = false;
    }, 100);
  }, 1000);
};
</script>

<template>
  <div
    data-cursor="block"
    data-cursor-style="radius: 50%"
    :class="{ 'theme-switch': true, 'is-rotate': isChanging }"
    :style="{ backgroundColor: bgStyle.shallowColor, color: bgStyle.color }"
    @click="handleChangeTheme"
  >
    <Icon icon="vaadin:magic" />
  </div>
  <div
    :class="{ 'front-mask': true, 'is-full': isChanging }"
    :style="{ backgroundColor: bgStyle.bgColor }"
  />

  <main :style="{ color: bgStyle.color }">
    <h1>
      <span data-cursor="text"> Hi, I'm Sunly </span>
      <span data-cursor="block" class="hi-emoji-wrapper">
        <span class="hi-emoji"> 👋 </span>
      </span>
    </h1>
    <p class="bio">
      <span data-cursor="text"> I'm a front-end developer :) </span>
    </p>
    <p class="links">
      <span data-cursor="text">
        You can find me through the following ways:
      </span>
    </p>
    <div v-for="(group, i) of links" :key="i">
      <div
        class="link-wrapper"
        v-for="link of group"
        :key="link.href"
        data-cursor="block"
        data-cursor-style="radius: 6px"
      >
        <a
          :href="link.href"
          :style="{
            color: bgStyle.color,
            backgroundColor: bgStyle.shallowColor,
          }"
          target="_blank"
        >
          <Icon :icon="link.icon" />
          <span> {{ link.text }} </span>
        </a>
      </div>
    </div>
  </main>

  <footer :style="{ color: bgStyle.color }">
    <p data-cursor="text">
      © 2023
      {{
        new Date().getFullYear() > 2023 ? "- " + new Date().getFullYear() : ""
      }}
      Sunly
    </p>
  </footer>
</template>
