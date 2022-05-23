<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="less">
:root {
  --background: rgba(9, 9, 9, 0.9);
  --background-secondary: rgba(34, 34, 34, 0.9);
  --background-tertiary: rgba(16, 16, 16, 0.9);
  --border: rgba(84, 84, 84, 0.65);
  --border-full: rgb(84, 84, 84);
  --border-hover: rgba(84, 84, 84, 0.48);
  --heading: whitesmoke;
  --text: darken(#f5f5f5, 30%);
  --link-active: limegreen;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background: black;
  color: var(--text);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

*,
:after,
:before {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  outline: 0;
  border: 0;
}

*::-webkit-scrollbar {
  width: 1em;
}

*::-webkit-scrollbar-track {
  background-color: var(--background);
  border-radius: 8px 0 8px 8px;
  background-clip: padding-box;
}

*::-webkit-scrollbar-thumb {
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  background-color: #333333;
  border-radius: 8px;
}

a {
  color: var(--link-active);
}
</style>
