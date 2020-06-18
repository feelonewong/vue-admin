<template>
  <div id="main-wrap">
    <router-view />

<el-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</el-tag>
</div>


</template>

<script>
export default {
  
    data() {
      return {
          tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
      }
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