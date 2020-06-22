<template>
  <div>
    <el-dialog
      width="580px"
      title="新增"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <el-form :label-position="labelPosition" label-width="70px" :model="formData">
        <el-form-item label="标题">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-input v-model="formData.category"></el-input>
        </el-form-item>
        <el-form-item label="概况">
          <el-input v-model="formData.date" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="infoForm-dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleSubmit('formData')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
export default {
  props: {
    dialogVisible: {
      type: Boolean
    }
  },
  setup(props, context) {
    const formData = reactive({
      title: "",
      category: "",
      date: "",
      user: ""
    });
    const labelPosition = ref("left");

    /*methods
     */
    const handleClose = () => {
      //context.root.emit("close", false);
      //debugger;
      context.emit("close", false);
      // console.log(context.root.$emit)
    };
    const handleSubmit = () => {};
    return {
      formData,
      handleClose,
      labelPosition,
      handleSubmit
    };
  },
  methods: {
    //   handleClose(){
    //  this.$emit("update:dialogVisible", false);
    //   }
  }
};
</script>

<style  lang="scss">
.infoForm-dialog-footer {
  display: flex;
  justify-content: center;
}
</style>