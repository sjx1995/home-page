<!--
 * @Description: main page
 * @Author: Sunly
 * @Date: 2023-08-05 04:07:11
-->
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useCursor } from "ipad-cursor/vue";
useCursor();
</script>

<template>
  <main>
    <h1>
      <span v-cursor-text> Hi, I'm Sunly </span>
      <span v-cursor-block class="hi-emoji-wrapper">
        <span class="hi-emoji"> 👋 </span>
      </span>
    </h1>
    <p class="bio" v-cursor-text>I'm a front-end developer :)</p>
    <p v-cursor-text class="links">
      You can find me through the following ways:
    </p>
    <p>
      <a v-cursor-block href="https://github.com/sjx1995">
        <Icon icon="ri:github-fill" />
        <span> Github </span>
      </a>
    </p>
    <p>
      <a v-cursor-block href="mailto: sunjingxiang1995@gmail.com">
        <Icon icon="iconamoon:email-duotone" />
        <span> Email </span>
      </a>
    </p>
  </main>

  <footer>
    <p v-cursor-text>
      © 2023
      {{
        new Date().getFullYear() > 2023 ? "- " + new Date().getFullYear() : ""
      }}
      Sunly
    </p>
  </footer>
</template>

<style>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

#app {
  position: relative;
  max-width: 960px;
  min-width: 320px;
  height: calc(100vh - 8rem);
  min-height: 20rem;
  box-sizing: border-box;
  margin: 4rem 2rem;
  text-align: right;
}

h1 {
  font-size: 3em;
  line-height: 1.1;
  font-weight: 500;
  margin: 0 0 2rem;
}

h1 .hi-emoji-wrapper {
  display: inline-block;
  padding: 0 4px;
  border-radius: 4px;
}

h1 .hi-emoji {
  display: inline-block;
  animation: greet 3s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
}

@keyframes greet {
  0% {
    transform: rotate(70deg);
  }
  5% {
    transform: rotate(70deg);
  }
  45% {
    transform: rotate(0deg);
  }
  55% {
    transform: rotate(0deg);
  }
  95% {
    transform: rotate(70deg);
  }
  100% {
    transform: rotate(70deg);
  }
}

.bio {
  font-size: 1.3em;
  font-weight: 300;
  margin: 0 0 2rem;
}

p {
  margin: 0.75rem 0;
}

P.links {
  margin-bottom: 1rem;
}

a {
  display: inline-flex;
  align-items: center;
  font-size: 1em;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  background: #555;
}

a svg {
  margin-right: 6px;
}

footer {
  position: absolute;
  bottom: 0;
  right: 0;
  border-top: 1px solid #777;
  opacity: 0.3;
}
footer p {
  font-size: 0.5rem;
}
footer p:last-child {
  margin-bottom: 0;
}
</style>
