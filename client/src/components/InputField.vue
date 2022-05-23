<script setup lang="ts">
defineProps<{
  placeholder?: string;
  type?: string;
  name?: string;
  required?: boolean;
  modelValue?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <input
    :placeholder="placeholder"
    :type="type"
    :name="name"
    :required="required"
    @change="handleChange"
  />
</template>

<style scoped lang="less">
input {
  display: flex;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--background);
  border: 1px solid var(--border);
  transition: background-color 0.15s ease, color 0.15s ease;
  color: whitesmoke;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: var(--background-tertiary);
    color: var(--link-active);
  }
}
</style>
