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
        .content{

        }
    }
</style>