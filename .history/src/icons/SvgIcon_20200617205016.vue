<template>
    <div>
        <svg :class="svgClass" aria-hidden="true">
            <use :xlink:href="name"></use>
        </svg>
    </div>
</template>

<script>
import {reactive, ref , onMounted } from "@vue/composition-api"
setup(){
    return 
}
</script>

<style lang="scss" scoped>

</style>