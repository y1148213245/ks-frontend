<!-- 第三方登陆判断 -->
<template>
 <div class="work_login_01">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="work_login_01-ruleForm" v-if="status == 1 ">
      <el-form-item v-if="getItemIsShow('input')" :label="getStaticText('userName') ? getStaticText('userName') : '用户名'" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item v-if="getItemIsShow('input')" :label="getStaticText('password') ? getStaticText('password') : '密码'" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="getItemIsShow('bindBtn')" type="primary" @click="submitForm('ruleForm')">{{getStaticText('bind') ? getStaticText('bind') : '绑定'}}</el-button>
        <el-button v-if="getItemIsShow('dontBind')" type="warning" @click="bind('0')">{{getStaticText('notBind') ? getStaticText('notBind') : '不绑定直接登陆'}}</el-button>
      </el-form-item>
    </el-form>
    <div class="work_login_01-result" v-if="status == 2 ">
        <span v-text="second"></span>{{getStaticText('autoLogin') ? getStaticText('autoLogin') : 's后自动登录'}}
    </div>
 </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import * as interfaces from "@work/register/common/interfaces.js";
import { mapActions } from "vuex";
import { Post, CookieUtils } from "@common";
export default {
  name: "work_login_01",
  reused: true,
  props: {
    namespace: String
  },
  data() {
    let validateloginName;

    return {
      CONFIG: null,
      status: "" /* 第三方账号状态 1待绑定 2已注册 */,
      query: "" /* 地址栏参数对象 */,
      second: 3 /* 返回登陆前的页面的倒计时 */,
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        // username: [
        //   { required: true, message: '请输入用户名', trigger: 'blur' },
        //   { validator: validateloginName, trigger: "blur" }
        // ],
        // password: [
        //   { required: true, message: '请输入密码', trigger: 'blur' },
        // ],
      }
    };
  },

  computed: {},

  created() {
    this.initConfig();
    this.query = URL.parse(document.URL, true).query;
    this.status = this.query.status;
    this.validateloginName = (rule, value, callback, regStatus) => {
      var params = {
        text: this.ruleForm.username,
        type: "1"
      };
      this.action_checkUserInfo(params).then(resp => {
        let checkStatus = resp.data.result;
        if (checkStatus == 1) {
          callback(
            new Error(
              this.getStaticText("userNotExist")
                ? this.getStaticText("userNotExist")
                : "用户不存在"
            )
          );
        } else {
          callback();
        }
      }); /* 检查用户信息 */
    };

    this.rules = {
      username: [
        {
          required: true,
          message: this.getStaticText("pleaseInputUserName")
            ? this.getStaticText("pleaseInputUserName")
            : "请输入用户名",
          trigger: "blur"
        },
        { validator: this.validateloginName, trigger: "blur" }
      ],
      password: [
        {
          required: true,
          message: this.getStaticText("pleaseInputPass")
            ? this.getStaticText("pleaseInputPass")
            : "请输入密码",
          trigger: "blur"
        }
      ]
    };
    /* 判断是否配置直接登录 */
    if (this.CONFIG.isAutoLogin) {
      this.bind("0");
    }
  },

  mounted() {
    let token = this.query.t;
    if (token && this.status == 2) {
      this.toLogin(token);
    }
  },

  methods: {
    ...mapActions("register", {
      action_checkUserInfo: interfaces.ACTION_CHECK_USERINFO,
      action_bindThirdparty: interfaces.ACTION_BIND_THIRDPARTY
    }),
    initConfig() {
      this.CONFIG = PROJECT_CONFIG[this.namespace].login.work_login_01;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.bind("1");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    bind(type) {
      let params = {
        loginName: this.ruleForm.username,
        passWord: this.ruleForm.password,
        identifyId: this.query.id,
        nickName: this.query.nickName,
        picture: this.query.picture,
        type: type /* 类型:0未绑定 1绑定 */,
        loginType: this.query.loginType /* 登录类型QQ,WeiXin,WeiBo */
      };
      this.action_bindThirdparty(params).then(resp => {
        let result = resp.data.result;
        let error = resp.data.error;
        let token = resp.data.token;

        if (result == "1") {
          this.toLogin(token);
        } else {
          if (error) {
            let msg = error.errorMsg;
            this.$message({
              type: "warning",
              message: msg
            });
          }
        }
        console.log(resp.data);
      });
    },
    toLogin(token) {
      window.localStorage.setItem("token", token);
      /* 登录与退出的cookie依赖全局配置CONFIG
      CONFIG.COOKIE
      CONFIG.COOKIE.DAY 过期时间
      CONFIG.COOKIE.DOMAIN 
      */
      if (CONFIG && CONFIG.COOKIE) {
        let day, domain;
        if (CONFIG.COOKIE.DAY) {
          day = CONFIG.COOKIE.DAY;
        } else {
          day = 1;
        }
        if (CONFIG.COOKIE.DOMAIN) {
          domain = CONFIG.COOKIE.DOMAIN;
        }
        CookieUtils.setCookie("token", token, day, domain);
      }
      let _this = this;
      _this.status = 2;
      let interval = setInterval(() => {
        _this.second--;
        if (_this.second < 1) {
          clearInterval(interval);
          let reffer = window.localStorage.getItem("loginReferr");
          window.localStorage.setItem("loginReferr", "");
          window.location.href =
            reffer ||
            (_this.CONFIG.toIndexHref
              ? _this.CONFIG.toIndexHref
              : "./index.html");
        }
      }, 1000);
    },
    getItemIsShow(text) {
      let config = this.CONFIG.showItem;
      if (config) {
        if (config.indexOf(text) > -1) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    getStaticText(text) {
      if (
        this.CONFIG &&
        this.CONFIG.staticText &&
        this.CONFIG.staticText[text]
      ) {
        return this.CONFIG.staticText[text];
      } else {
        return false;
      }
    }
  }
};
</script>
<style>
</style>
