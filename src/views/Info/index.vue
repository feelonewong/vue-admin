<template>
  <div>
    <el-form :inline="true" :model="formInline">
      <el-row type="flex">
        <el-col :span="5">
          <el-form-item label="行业信息:">
            <el-select v-model="infoSelect" placeholder="请选择" size="mini" style="width:120px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="日期:">
            <el-date-picker
              size="mini"
              v-model="currentDate"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="关键字:">
            <el-row type="flex">
              <el-col :span="8">
                <el-select size="mini" v-model="search_key" style="width:80px;">
                  <el-option
                    v-for="item in searchOptions"
                    :label="item.label"
                    :value="item.value"
                    :key="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="16">
                <el-input size="mini" v-model="search_value" placeholder="请输入搜索内容"></el-input>
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item>
            <el-row type="flex" :gutter="2">
              <el-col>
                <el-button size="mini" type="primary" @click="handleSearch">搜索</el-button>
              </el-col>
              <el-col>
                <el-button size="mini" type="primary" @click="handleAdd">新增</el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!-- table表格 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="title" align="center" label="标题" width="400"></el-table-column>
      <el-table-column prop="category" align="center" label="类别" width="120"></el-table-column>
      <el-table-column prop="date" align="center" label="日期" width="160"></el-table-column>
      <el-table-column prop="user" align="center" label="管理人" width="140"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
        
          <el-button type="danger" size="mini">删除</el-button>
          <el-button type="success" size="mini">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 页面底部 -->
    <el-row style="margin-top:20px;" type="flex" justify="space-between">
      <el-col >
        <el-button size="medium">批量删除</el-button>
      </el-col>
      <el-col>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage2"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="10"
          layout="total,sizes, prev, pager, next"
          :total="totalCount"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, reactive, onMounted, refs } from "@vue/composition-api";
export default {
  setup(props, context) {
    const formInline = reactive({});
    const infoSelect = ref("");
    const options = reactive([
      {
        value: 1,
        label: "国际信息"
      },
      {
        value: 2,
        label: "国内信息"
      },
      {
        value: 3,
        label: "行业信息"
      }
    ]);
    const currentDate = reactive([new Date(), new Date()]);
    const searchOptions = reactive([
      {
        label: "ID",
        value: "id"
      },
      {
        label: "标题",
        value: "title"
      }
    ]);
    const search_key = ref("id");
    const search_value = ref("");
    const totalCount = ref(100);
    const currentPage2 = ref(5);
    const tableData = reactive([
      {
        title: "123",
        category: "123",
        date: "123",
        user: "admin"
      }
    ]);
    const handleCurrentChange = ()=>{};
    const handleSizeChange = ()=>{};
    const handleAdd = () => {};
    const handleSearch = () => {};
    return {
      options,
      infoSelect,
      formInline,
      currentDate,
      searchOptions,
      search_key,
      search_value,
      handleAdd,
      handleSearch,
      tableData,
      handleCurrentChange,
      handleSizeChange,
      totalCount,
      currentPage2
    };
  }
};
</script>

<style lang="scss" scoped>
</style>