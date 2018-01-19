<!--  -->
<template>
  <div class="login_03_content">
    <div class="login_03_titlebox">登录</div>
    <input type="text" class="login_03_userinput" v-model="member.loginName" placeholder="请输入用户名"/>
    <input type="password" class="login_03_password" v-model="member.password" placeholder="请输入密码"/>
    <div class="login_03_box_01">
      <input type="checkbox" value="" class="login_03_box_01_checkbox" />自动登录
      <a href="../login/forgetPassword.html" class="login_03_box_01_forgetpassword">忘记密码</a>
    </div>
    <div class="login_03_box_02"><input type="button" id="login-form-submit" value="登录" class="login_03_box_02_button" @click="login"/></div>
    <div class="login_03_box_03">还没有账号？
      <a href="./register.html" class="login_03_box_03_register">立即注册</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import * as interfaces from '@work/login/common/interfaces.js';
import URL from 'url';

export default {
  name: 'work_login_03_login',
  reused: true,
  props: {},
  data () {
    return {
      member: {
        loginName: '',
        password: '',
      }
    };
  },

  computed: {},

  created () { },

  mounted () { },

  methods: {
    ...mapActions('login_store', {
      action_login: interfaces.ACTION_LOGIN,
    }),
    login: function () {
      this.action_login({ member: this.member }).then((rep) => {
        if (!rep.data) {
          this.loginValid();
        } else if (rep.data.checkStatus == 0 || rep.data.checkStatus == "0") {
          this.$message({
            type: "error",
            message: "账号已被冻结，请联系管理员"
          });
        } else {
          let query = URL.parse(document.URL, true).query;
          let url = query["service"];
          if (url && url.indexOf("login.html") == -1) {
            window.location.href = url;
          } else {
            window.location.href = "./index.html";
          }
        }
      });
    },
    loginValid: function () {
      if (this.member.loginName.trim() == '' || this.member.password.trim() == '') {
        this.$message({
          type: 'warning',
          message: "用户名或密码不能为空"
        });
      } else {
        this.$message({
          type: 'error',
          message: "账号或密码错误"
        });
      }
    },
  }
}

</script>
<style>
.login_03_content {
  width: 354px;
  height: 358px;
  padding: 15px 30px;

  /* box-shadow: 0 0 10px #e5e5e5;
  background: #fff; */
}
.login_03_titlebox {
  line-height: 35px;
  border-bottom-width: 1px;

  /* font-size: 18px; */
  /* border-bottom-style: solid;
  border-bottom-color: #cccccc; */
}
.login_03_userinput,
.login_03_password {
  display: inline-block;
  margin-top: 25px;
  width: 310px;
  height: 40px;
  border-width: 1px;
  padding-left: 40px;
  vertical-align: middle;

  /* border-style: solid;
  border-color: #e0e0e0;
  color: #939393;
  background-color: transparent;
  outline: none; */
  /* background: url(../img/bg_10.png) no-repeat; */
  /* background-position: -574px -93px; */
}
.login_03_password {
}
input:focus.login_03_userinput,
input:focus.login_03_password {
  border-width: 1px;

  /* border-style: solid;
  border-color: #bf3636;
  outline-color: #bf3636;
  color: #bf3636; */
}

.login_03_box_01 {
  margin-top: 15px;
}
.login_03_box_01_checkbox {
  margin-bottom: 2px;
  vertical-align: middle;
}
.login_03_box_01_forgetpassword {
  float: right;

  /* color: #c50000; */
}
.login_03_box_02 {
  margin-top: 30px;
}
.login_03_box_02_button {
  border: 0px;
  line-height: 42px;
  height: 42px;
  width: 350px;

  /* border-radius: 5px;
  background: #c50000;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer; */
}

.login_03_box_03 {
  margin-top: 15px;

  /* color: #a6a6a6;
  font-size: 14px; */
}
.login_03_box_03_register {
  float: right;

  /* color: #c50000; */
}
</style>