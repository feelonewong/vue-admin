<template>

    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName" />
    </svg>
 
</template>

<script>
import { reactive, ref, onMounted, computed } from "@vue/composition-api";
export default {
  name: "svgIcon",
  props: ["iconClass", "className"],
  setup(props, context) {
   const iconName = computed(() => `#icon-${props.iconClass}`)
     const svgClass = computed(() => {
            if(props.className) {
                return `svg-icon ${props.className}`
            }else{
                return `svg-icon`
            }
        })
    return {
      iconName,
      svgClass 
    };
  }
};
</script>

<style lang="scss" scoped>
    .svg-icon{
        font-size: 12px;
        fill: currentColor;
        color: #fff;
        margin-right:10px;
    }
</style>