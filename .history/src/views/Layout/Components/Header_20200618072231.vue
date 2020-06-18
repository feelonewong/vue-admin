<template>
  <div id="header-wrap">
      <svg-icon ></svg-icon>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #header-wrap{
        position: fixed;
        top: 0;
        left: $navMenuWidth;
        height: 75px;
        background-color: #fff;
        box-shadow: 0 3px 16px rgba(0,0,0,.1);
        width: 100%;
    }
</style>