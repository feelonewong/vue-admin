<template>
    <div>
        <svg :class="svgClass" aria-hidden="true">
            <use :xlink:href="name"></use>
        </svg>
    </div>
</template>

<script>
import {reactive, ref , onMounted } from "@vue/composition-api";
export default {
    name: "svgIcon",
    props:[ "iconClass", "className"],
    setup(){
        console.log(props.iconClass,className);
    }
}
</script>

<style lang="scss" scoped>

</style>