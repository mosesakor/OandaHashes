<script setup lang="ts">
import { ref } from "vue";

withDefaults(defineProps<{ title: string }>(), { title: "" });

const collapse = ref(false);

const onClick = () => {
  collapse.value = !collapse.value;
};
</script>

<template>
  <div class="container">
    <div :class="{ title: true, collapse }" @click="onClick">
      <div class="name">
        <span>{{ title }}</span>
      </div>
      <div class="indicator">{{ collapse ? "-" : "+" }}</div>
    </div>
    <div :class="{ reveal: true, collapse }"><slot /></div>
  </div>
</template>

<style scoped lang="less">
.container {
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
}

.title {
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--heading);
  border-bottom: 1px solid var(--border-full);

  &.collapse {
    color: var(--link-active);
  }
}

.reveal {
  display: flex;
  flex-direction: row;
  max-height: 0;
  font-weight: 300;
  line-height: 1.1rem;
  transition: max-height 0.15s ease;
  overflow: hidden;

  &.collapse {
    max-height: 50rem;
  }
}

.name {
  display: flex;
  align-items: center;
}

.indicator {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
