<template>
  <div id="header-wrap">
      <div class="header header-icon">
          <svg-icon iconClass="menu" className="menu"></svg-icon>
      </div>
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
        line-height: 75px;
        background-color: #fff;
        box-shadow: 0 3px 16px rgba(0,0,0,.1);
        width: 100%;
        .header-icon{
            padding: 0 32px;
            svg{
                cursor: pointer;
                font-size: 25px;
                margin-bottom: -8px;
            }
        }
    }
</style>