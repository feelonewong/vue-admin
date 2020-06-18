<template>
  <div id="main-wrap">
     .main-content
    <router-view />
</div>


</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #main-wrap{
        border:30px solid #f7f7f7;
        border-bottom:none;
        position: fixed;
        top: 75px;
        right:0;
        left:$navMenuWidth;
        background: #fff;
        box-sizing: border-box;
        height: calc(100vh - 75px);
    }
</style>