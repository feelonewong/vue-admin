<template>
  <div id="header-wrap">
      <div class="header header-icon">
          <div>
              <svg-icon iconClass="menu" className="menu"></svg-icon>
          </div>
          <div class="user-info">
              <span>用户名</span>
              <span>头像</span>
              <svg-icon iconClass="exit" className="exit"></svg-icon>
          </div>
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
        width: calc(100% - 250px );
        .header-icon{
            padding: 0 10px 0 32px;
            svg{
                 fill: currentColor;
                 color: #000;
                cursor: pointer;
                font-size: 25px;
                margin-bottom: -8px;
            }
        }
        .header{
            display: flex;
            justify-content: space-between;
        }
    }
</style>