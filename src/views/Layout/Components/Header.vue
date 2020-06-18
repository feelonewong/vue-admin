<template>
  <div id="header-wrap">
    <div class="header header-icon">
      <div @click="handleMenuStatus">
        <svg-icon iconClass="menu" class="menu"></svg-icon>
      </div>
      <div class="user-info">
        <svg-icon iconClass="admin" class="admin"></svg-icon>
        <span class="admin">管理员</span>

        <svg-icon iconClass="exit" class="exit"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/composition-api";
export default {
  setup(prop, context) {
    const handleMenuStatus = () => {
        context.root.$store.commit("SET_COLLAPSE")
    };
    return {
      handleMenuStatus
    };
  }
};
</script>

<style lang="scss" scoped>
#header-wrap {
  position: fixed;
  top: 0;
  left: $navMenuWidth;
  height: 75px;
  transition: all .3s ease 0s;
  line-height: 75px;
  background-color: #fff;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.1);
  width: calc(100% - 250px);
  .header-icon {
    padding-left: 32px;
    svg {
      fill: currentColor;
      color: #000;
      cursor: pointer;
      font-size: 25px;
      margin-bottom: -8px;
    }
    svg.exit {
      padding: 0 20px;
      border-left: 2px solid #bbb;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  .admin {
    margin: 0 15px;
  }
  
}
.close{
      #header-wrap {
        left: 65px;
        width: calc(100% - 65px);
      }
  }
  .open {
      #header-wrap {
        left: $navMenuWidth;
        width: calc(100% - 250px);
      }
  }
</style>