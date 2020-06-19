<template>
  <div id="nav-wrap">
    <span class="logo">
      <img src="../../../assets/logo.png" alt="" width="50">
    </span>
    <el-menu
      style="border-right: 1px solid #344a5f"  
      :collapse="isCollapse"
      :collapse-transition	="false"
      background-color="#344a5f"
      text-color="#fff"
      router
    >
      <template v-for="(item,index) in routes">
        <el-submenu :index="index+'' " :key="item.id" v-if="!item.hide">
          <template slot="title">
           <svg-icon  :iconClass="item.meta.icon"  :className="item.meta.icon"/> 
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
  </div>
</template>

<script>
import { ref, reactive ,computed} from "@vue/composition-api";
export default {
  setup(prop, context) {
    const isCollapse = computed(() => context.root.$store.state.app.isCollapse);
    const routes = reactive(context.root.$router.options.routes);  
    return {
      isCollapse,
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
  transition: all .3s ease 0s;
  background-color: #344a5f;
  transition: transition, all .3s ease 0s;
}
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 0;
}
.open {
  #nav-wrap { width: $navMenuWidth; }
}
.close {
  #nav-wrap { width: 65px; }
}
</style>