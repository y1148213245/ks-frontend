<!--  -->
<template>
  <div class="main_login_con fr">
    <div class="color_c50 f18 line-h35 main_login_con_title">登录</div>
    <input type="text" class="login_k mt25 color_939" v-model="member.loginName" placeholder="请输入用户名"/>
    <input type="password" class="password_k mt25 color_939" v-model="member.password" placeholder="请输入密码"/>
    <div class="mt15">
      <input type="checkbox" value="" class="login_zddl" />自动登录
      <a href="../login/forgetPassword.html" class="fr color_c50">忘记密码</a>
    </div>
    <div class="mt30"><input type="button" id="login-form-submit" value="登录" class="login_btn" @click="login"/></div>
    <div class="mt15 f14 color_a6a">还没有账号？
      <a href="./register.html" class="fr color_c50">立即注册</a>
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
    ...mapActions('login_02', {
      action_login: interfaces.ACTION_LOGIN,
    }),
    login: function () {
      this.action_login(this.member).then((rep) => {
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
<style scoped>

</style>