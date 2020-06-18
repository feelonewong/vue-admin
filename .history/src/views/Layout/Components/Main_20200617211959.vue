<template>
  <div id="main-wrap">
    <router-view />

    <el-autocomplete
  class="inline-input"
  v-model="cSubcategoryNo"
  :fetch-suggestions="querySearch"
  placeholder="请输入内容"
  @select="handleSelect"
></el-autocomplete>
<el-tag
  v-for="tag in selected"
  closable
  :disable-transitions="true"
  :key="tag"
  type="info"
  @close="handleClose(tag)"  # 定义了handleClose函数惨可以点击 ❌ 消除tag，这点官方文档好像有误
>
  <span class="el-select__tags-text">{{ tag }}</span>
</el-tag>
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