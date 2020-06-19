<template>
  <div id="main-wrap">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#main-wrap {
  border: 30px solid #f7f7f7;
  border-bottom: none;
  position: fixed;
  top: 75px;
  right: 0;
  left: $navMenuWidth;
  background: #fff;
  box-sizing: border-box;
  transition: transition, all .3s ease 0s;
  padding: 30px;
  height: calc(100vh - 75px);
}
.open {
  #main-wrap {
    left: $navMenuWidth;
  }
}
.close {
  #main-wrap {
    left: 65px;
  }
}
</style>