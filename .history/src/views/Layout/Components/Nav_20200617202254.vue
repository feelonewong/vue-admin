<template>
  <div id="nav-wrap">
    <el-menu
      style="border-right: 1px solid #344a5f"
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#344a5f"
      text-color="#fff"
      router
    >
      <template v-for="(item,index) in routes">
        <el-submenu :index="index+'' " :key="item.id" v-if="!item.hide">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.meta.name}}</span>
          </template>
          <el-menu-item
            v-for="childItem in item.children"
            :key="childItem.id"
            :index="childItem.path"
          >{{childItem.meta.name}} </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
    <!-- <svg-icon/> -->
  </div>
</template>

<script>
import { ref, reactive } from "@vue/composition-api";
export default {
  setup(prop, context) {
    const isCollapse = ref(false);
    const routes = reactive(context.root.$router.options.routes);
    console.log(routes);
    const handleOpen = () => {};
    const handleClose = () => {};
    return {
      isCollapse,
      handleOpen,
      handleClose,
      routes
    };
  }
};
</script>

<style  lang="scss">
#nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: $navMenuWidth;
  height: 100vh;
  background-color: #344a5f;
}

</style>