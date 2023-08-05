<!--
 * @Description: main page
 * @Author: Sunly
 * @Date: 2023-08-05 04:07:11
-->
<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";
import { Icon } from "@iconify/vue";
import { useCursor } from "ipad-cursor/vue";
useCursor();

const isDark = useLocalStorage<boolean>("LINK_PAGE_DARK_MODE", false);

const links = [
  {
    icon: "ri:github-fill",
    text: "Github",
    href: "https://github.com/sjx1995",
  },
  {
    icon: "iconamoon:email-duotone",
    text: "Email",
    href: "mailto: sunjingxiang1995@gmail.com",
  },
];
</script>

<template>
  <div
    v-cursor-block
    :class="{ 'dark-switch': true, 'is-dark': isDark }"
    @click="() => (isDark = !isDark)"
  >
    <Icon v-if="isDark" icon="akar-icons:sun-fill" />
    <Icon v-else icon="akar-icons:moon-fill" />
  </div>
  <div :class="{ 'dark-bg': true, 'is-full': isDark }" />

  <main :class="{ 'is-dark': isDark }">
    <h1>
      <span v-cursor-text> Hi, I'm Sunly </span>
      <span v-cursor-block class="hi-emoji-wrapper">
        <span class="hi-emoji"> 👋 </span>
      </span>
    </h1>
    <p class="bio">
      <span v-cursor-text> I'm a front-end developer : ) </span>
    </p>
    <p class="links">
      <span v-cursor-text> You can find me through the following ways: </span>
    </p>
    <p v-for="link of links" :key="link.href">
      <a v-cursor-block :href="link.href">
        <Icon :icon="link.icon" />
        <span> {{ link.text }} </span>
      </a>
    </p>
  </main>

  <footer :class="{ 'is-dark': isDark }">
    <p v-cursor-text>
      © 2023
      {{
        new Date().getFullYear() > 2023 ? "- " + new Date().getFullYear() : ""
      }}
      Sunly
    </p>
  </footer>
</template>
