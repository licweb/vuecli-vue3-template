<script setup lang="ts">
import { defineProps, computed } from "vue";
const props = defineProps<{
  name: string;
  color?: string;
  size?: string | number;
}>();
const iconSize = computed(() => {
  if (
    (typeof props.size === "string" && /^\d+$/.test(props.size)) ||
    typeof props.size === "number"
  ) {
    return props.size + "px";
  }
  return props.size;
});
const iconName = computed(() => `#icon-${props.name}`);
const iconColor = computed(() => props.color || "currentColor");
</script>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: v-bind(iconColor);
  font-size: v-bind(iconSize);
}
</style>
