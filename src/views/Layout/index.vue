<template>
  <div :class="[menuStatus ? 'close' : 'open']">>
      <LayoutHeader/>
      <LayoutNav/>
      <LayoutMain/>
  </div>
</template>

<script>
import LayoutHeader from "./Components/Header"
import LayoutNav from "./Components/Nav"
import LayoutMain from "./Components/Main"
import { computed } from '@vue/composition-api'
export default {
    components:{
        LayoutHeader,LayoutNav,LayoutMain
    },
    setup(props,context){
        const menuStatus = computed( ()=>context.root.$store.state.app.isCollapse )
        return {
            menuStatus
        }
    }
}
</script>

<style>

</style>