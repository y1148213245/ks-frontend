<template>
    <el-row>
        <el-col :span="24">
            <slot name="content" :login="login"></slot>
        </el-col>
    </el-row>
</template>
<script type="text/ecmascript-6">
import * as type from '../common/constConfig.js';

export default {
  name: "work_login_01",
  reused: true,
  props: {
    loginSuccessCallback: Function /* 登陆成功回调 */,
    member: {
      /* 登陆信息对象 */
      type: Object,
      required: true,
      default() {
        return {
          loginName: "" /* 登陆名 */,
          password: "" /* 密码 */
        };
      }
    }
  },
  methods: {
    login() {
      //console.log(this.member);
      this.$store.dispatch('login_01/'+type.LOGIN, {
        member: this.member,
        cb: this.loginSuccessCallback,
        /* cb() {                          //老智享成功callback函数
          //locationUtils.redirectToServ();
          var url = document.referrer;
          if (
            url.indexOf("register.html") >= 0 ||
            url.indexOf("register_success.html") >= 0 ||
            url.indexOf("forgetPassword.html") >= 0
          ) {
            window.location.href = "../index/index.html";
          } else if (url.indexOf("register.html") == -1) {
            window.history.back();
          }
        }, */
        loginErr: this.loginValid,
        loginFreeze: this.loginFreeze
      });
    },
    loginValid() {
      if (
        this.member.loginName.trim() == "" ||
        this.member.password.trim() == ""
      ) {
        this.$message({
          type: "warning",
          message: "用户名或密码不能为空"
        });
      } else {
        this.$message({
          type: "error",
          message: "账号或密码错误"
        });
      }
    },
    loginFreeze() {
      this.$message({
        type: "error",
        message: "账号已被冻结，请联系管理员"
      });
    }
  }
};
</script>
