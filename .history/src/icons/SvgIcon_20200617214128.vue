<template>
  <div>
    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="name" />
    </svg>
  </div>
</template>

<script>
import { reactive, ref, onMounted, computed } from "@vue/composition-api";
export default {
  name: "svgIcon",
  props: ["iconClass", "className"],
  setup(props, context) {
    const iconName = computed(() => {
      `#icon-${props.iconClass}`;
    });
       const svgClass = computed(() => {
      `#icon-${props.className}`;
    });
    return {
      iconName,
      svgClass
    };
  }
};
</script>

<style lang="scss" scoped>
</style>