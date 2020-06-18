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
<div>
  <el-tag
  v-for="tag in selected"
  closable
  :disable-transitions="true"
  :key="tag"
  type="info"
  @close="handleClose(tag)"
>
  <span class="el-select__tags-text">{{ tag }}</span>
</el-tag>
</div>

  </div>
</template>

<script>
export default {
  
    data() {
      return {
        restaurants: [],
        cSubcategoryNo: '',  
        selected:[], // 获得value值
        selectedValue:[],  //获得code值
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          
           
        ];
      },
//多选栏中的删除
    handleClose(tag) {
      let item = this.selected.indexOf(tag);
        this.selected.splice(item, 1);
        this.selectedValue.splice(item, 1);
        console.log(this.selectedValue)
      },
//值
      handleSelect(item) {
        this.selected.push(item.value)
        this.selectedValue.push(item.address)
        this.cSubcategoryNo =""
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
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