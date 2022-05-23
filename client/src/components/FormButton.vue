<script setup lang="ts">
withDefaults(defineProps<{ disabled?: boolean }>(), { disabled: false });
</script>

<template>
  <button :class="{ button: true, disabled }" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped lang="less">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  font-size: 1rem;
  font-weight: 600;
  background-color: var(--background);
  color: var(--text);
  cursor: pointer;

  &:hover:not(.disabled) {
    background-color: var(--background-tertiary);
    color: var(--link-active);
  }

  &.disabled {
    background-color: var(--background-tertiary);
    cursor: pointer;
    cursor: not-allowed;
  }

  span {
    cursor: pointer;
  }
}
</style>
