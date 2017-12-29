<template>
    <el-row>
        <el-col :span="24">
            <slot name="content" :login="login"></slot>
        </el-col>
    </el-row>
</template>
<script type="text/ecmascript-6">
import * as type from "../common/constConfig.js";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "work_login_01",
  reused: true,
  props: {
    loginSuccessCallback: Function /* 登陆成功回调 */,
    member: {
      /* 登陆信息对象 */
      type: Object /* 类型限制 */,
      required: true /* 必传 */,
      validator(val) {
        /* 值校验 */
        return (
          val.hasOwnProperty("loginName") && val.hasOwnProperty("password")
        );
      },
      default() {
        return {
          loginName: "" /* 登陆名 */,
          password: "" /* 密码 */
        };
      }
    },
    namespace: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      projectConfig: null
    };
  },
  mounted() {
    this.initConfig();
  },
  methods: {
    initConfig() {
      this.projectConfig = PROJECT_CONFIG[this.namespace].login.work_login_01;
    },
    login() {
      //console.log(this.member);
      this.$store.dispatch("login_01/" + type.LOGIN, {
        member: this.member,
        cb: this.loginSuccessCallback,
        loginErr: this.loginValid,
        loginFreeze: this.loginFreeze,
        url: this.projectConfig.loginUrl
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
