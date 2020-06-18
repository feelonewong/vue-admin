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
        width: 100%;
        height: 100%;
        padding-top: 30px;
        padding-left: 30px;
        box-sizing: border-box;
        .content{
            width: 100%;
            height: 100%;
            padding-top: 30px;;
        }
    }
</style>