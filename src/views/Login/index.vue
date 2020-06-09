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
          <label for="username">用户名</label>
          <el-input 
          id="username"
          type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="form-item">
          <label for="password">密码</label>
          <el-input
            id="password"
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
              <el-button type="success" class="block" @click="getSms">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item class="form-item">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="block login-btn"
            :disabled="loginButtonStatus"
          >{{model==="login"?"登录":"注册"}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { GetSms } from "../../api/login";
import { ref, reactive, onMounted } from "@vue/composition-api";
import {
  stripscript,
  emailValidator,
  passwordValidator,
  codeValidator
} from "@/utils/validate";

export default {
  setup(props, context) {
    /**
     * 数据相关
     */
    const model = ref("login");
    const loginButtonStatus = ref(true);
    const menuTab = reactive([
      { txt: "登录", current: true, type: "login" },
      { txt: "注册", current: false, type: "register" }
    ]);
    /*表单验证*/
    const ruleForm = reactive({
      username: "",
      password: "",
      passwords: "",
      code: ""
    });
    const usernameValidate = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (!emailValidator(value)) {
        return callback(new Error("用户名格式有误"));
      } else {
        callback();
      }
    };
    const passwordValidate = (rule, value, callback) => {
      ruleForm.password = stripscript(value);
      value = ruleForm.password;
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else if (!passwordValidator(value)) {
        return callback(new Error("密码格式有误"));
      } else {
        callback();
      }
    };
    const passwordValidates = (rule, value, callback) => {
      ruleForm.passwords = stripscript(value);
      value = ruleForm.passwords;
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value != ruleForm.password) {
        return callback(new Error("再次确认密码有误"));
      }
    };
    const codeValidate = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入验证码"));
      } else if (!codeValidator(value)) {
        return callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    };
    /**
     * 方法相关
     */
    const getSms = () => {
      if (!ruleForm.username) {
        context.root.$message.error("用户名不能为空");
        return false;
      }
      if(!emailValidator(ruleForm.username)){
        context.root.$message.error("用户名格式有误,请重新输入");
        return false;
      }
      let params = {
        username: ruleForm.username,
        model:model.value
      };
      console.log(params)
      GetSms(params).then(response => {
        let { message } = response.data;
        context.root.$message({
          message: message,
          type: "success"
        });
      }).catch(error=>{});
    };
    const submitForm = formName => {
      context.refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    const toggleMenu = value => {
      model.value = value.type;
      menuTab.forEach(element => {
        element.current = false;
      });
      value.current = true;
    };

    const rules = reactive({
      username: [{ validator: usernameValidate, trigger: "blur" }],
      password: [{ validator: passwordValidate, trigger: "blur" }],
      passwords: [{ validator: passwordValidates, trigger: "blur" }],
      code: [{ validator: codeValidate, trigger: "blur" }]
    });
    onMounted(() => {});

    return {
      menuTab,
      model,
      toggleMenu,
      rules,
      ruleForm,
      submitForm,
      codeValidate,
      loginButtonStatus,
      passwordValidates,
      passwordValidate,
      usernameValidate,
      getSms
    };
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