<template>
  <div id="main-wrap">
      <div class="main-content">
          <div class="content"></div>
      </div>
    <router-view />
</div>


</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #main-wrap{
        height: calc(100vh - 75px);
    }
    .main-content{
        border:30px solid #f7f7f7;
        border-bottom:none;
        position: fixed;
        top: 75px;
        right:0;
        left:$navMenuWidth;
        background: #fff;
        box-sizing: border-box;
    }
    .content{
        paddint-top
    }
</style>