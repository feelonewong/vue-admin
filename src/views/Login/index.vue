<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          :class="{current:item.current}"
          v-for="item in menuTab"
          @click="toggleMenu(item)"
          :key="item.id"
        >{{item.txt}}</li>
      </ul>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form">
        <el-form-item prop="username" class="form-item">
          <label>用户名</label>
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="form-item">
          <label>密码</label>
          <el-input 
            type="password" 
            v-model="ruleForm.password" 
            minlength="6"
            maxlength="20"
            autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="code" class="form-item">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input 
                v-model.number="ruleForm.code"
                maxlength="6"
                minlength="6"
                ></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="block">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item class="form-item">
          <el-button type="primary" @click="submitForm('ruleForm')" class="block login-btn">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var usernameValidate = (rule, value, callback) => {
      let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/; 
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }else if(!reg.test(value)){
        return callback(new Error("用户名格式有误"));
      }else{
        callback()
      }
    };
    var passwordValidate = (rule, value, callback) => {
      let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if(!reg.test(value)){
        return callback(new Error("密码格式有误"));
      }else{
         callback();
      }
    };
    var codeValidate = (rule, value, callback) => {
       let reg = /^[a-z0-9]{6}$/;
      if (value === "") {
        return callback(new Error("请输入验证码"));
      } else if (!reg.test(value)) {
        return callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    };
    return {
      menuTab: [
        { txt: "登录", current: true },
        { txt: "注册", current: false }
      ],
      ruleForm: {
        username: "",
        password: "",
        code: ""
      },
      rules: {
        username: [{ validator: usernameValidate, trigger: "blur" }],
        password: [{ validator: passwordValidate, trigger: "blur" }],
        code: [{ validator: codeValidate, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toggleMenu(value) {
      this.menuTab.forEach(element => {
        element.current = false;
      });
      value.current = true;
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  background: #344a5f;
  height: 100vh;
}
.login-wrap {
  width: 330px;
  margin: auto;
  .menu-tab {
    text-align: center;
    li {
      width: 88px;
      display: inline-block;
      font-size: 14px;
      color: #fff;
      border-radius: 2px;
      cursor: pointer;
    }
    .current {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .login-form {
    margin-top: 19px;
    .form-item {
      margin-bottom: 13px;
    }
    label {
      color: #fff;
      font-size: 14px;
      margin-bottom: 3px;
    }
    .login-btn {
      margin-top: 19px;
    }
  }
}
.block {
  display: block;
  width: 100%;
}
</style>