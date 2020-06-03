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
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="passwords" class="form-item" v-if="model==='register'">
          <label>确认密码</label>
          <el-input
            type="password"
            v-model="ruleForm.passwords"
            minlength="6"
            maxlength="20"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code" class="form-item">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input v-model.number="ruleForm.code" maxlength="6" minlength="6"></el-input>
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
import {
  stripscript,
  emailValidator,
  passwordValidator,
  codeValidator
} from "@/utils/validate";
export default {
  data() {
    var usernameValidate = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (!emailValidator(value)) {
        return callback(new Error("用户名格式有误"));
      } else {
        callback();
      }
    };
    var passwordValidate = (rule, value, callback) => {
      this.ruleForm.password = stripscript(value);
      value = this.ruleForm.password;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!passwordValidator(value)) {
        return callback(new Error("密码格式有误"));
      } else {
        callback();
      }
    };
    var passwordValidates = (rule, value, callback) => {
      this.ruleForm.passwords = stripscript(value);
      value = this.ruleForm.passwords;
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value!=this.ruleForm.password) {
        return callback(new Error("再次确认密码有误"));
      }
    };
    var codeValidate = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入验证码"));
      } else if (!passwordValidator(value)) {
        return callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    };
    return {
      menuTab: [
        { txt: "登录", current: true,type:"login" },
        { txt: "注册", current: false, type:"register" }
      ],
      ruleForm: {
        username: "",
        password: "",
        passwords: "",
        code: ""
      },
      rules: {
        username: [{ validator: usernameValidate, trigger: "blur" }],
        password: [{ validator: passwordValidate, trigger: "blur" }],
        passwords: [{ validator: passwordValidates, trigger: "blur" }],
        code: [{ validator: codeValidate, trigger: "blur" }]
      },
      model:"login"
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
      this.model = value.type
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