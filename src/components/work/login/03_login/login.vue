<!--  -->
<template>
  <div class="login_03_content">
    <div class="login_03_titlebox">{{getStaticText('loginSys') ? getStaticText('loginSys') : '登录'}}</div>
    <div class="el-input el-input--prefix">
      <input type="text" v-if="isPC == 'true'" class="login_03_userinput" v-model="member.loginName" :placeholder="getStaticText('inputUserName') ? getStaticText('inputUserName') : '请输入用户名'" @keyup.enter="login" />
      <input type="text" v-if="isPC == 'false'" class="login_03_userinput" v-model="member.loginName" :placeholder="getStaticText('inputUserName') ? getStaticText('inputUserName') : '请输入用户名'" @keyup.enter="login" @blur="checkUsername"/>
      <span class="el-input__prefix">
        <i class="fa fa-user" aria-hidden="true"></i>
      </span>
    </div>
    <div class="el-input el-input--prefix">
      <input type="password" class="login_03_password" v-model="member.password" :placeholder="getStaticText('inputPwd') ? getStaticText('inputPwd') : '请输入密码'" @keyup.enter="login" />
      <span class="el-input__prefix">
        <i class="fa fa-lock" aria-hidden="true"></i>
      </span>
    </div>

    <div class="el-input el-input--prefix login_03_code_box" v-if="getShowItem('code')">
      <input type="text" class="login_03_code" v-model="inputCode" :placeholder="getStaticText('inputCode') ? getStaticText('inputCode') : '请输入验证码'" @keyup.enter="login" />
      <span class="el-input__prefix">
        <i class="fa fa-lock" aria-hidden="true"></i>
      </span>
      <input type="button" id="code" @click="createCode" />
    </div>

    <div class="login_03_box_01">
      <!-- <input type="checkbox" value="" class="login_03_box_01_checkbox" />自动登录 （暂未开发）-->
      <a href="./forgetPassword.html" class="login_03_box_01_forgetpassword">{{getStaticText('forgetPwd') ? getStaticText('forgetPwd') : '忘记密码'}}</a>
    </div>
    <div class="login_03_box_02"><input type="button" id="login-form-submit" :value="getStaticText('loginSys') ? getStaticText('loginSys') : '登录'" class="login_03_box_02_button" @click="login" /></div>
    <div class="login_03_box_03">{{getStaticText('noAccount') ? getStaticText('noAccount') : '还没有账号？'}}
      <a href="./register.html" class="login_03_box_03_register">{{getStaticText('signUpNow') ? getStaticText('signUpNow') : '立即注册'}}</a>
    </div>

    <div class="login_03_content-more_sign" v-if="CONFIG.thirdParty && CONFIG.thirdParty.showItem">
      <h6 v-text="CONFIG.thirdParty.topic"></h6>
      <ul>
        <template v-for="(item,i) in (CONFIG.thirdParty && CONFIG.thirdParty.showItem || [])">
          <li :key="i" :title="item.title">
            <a :class="'login_03-third_party_'+item.tag" :href="toThirdLogin(item.type)" :target="CONFIG.thirdParty.target">
              <i class="fa" :class="'fa-'+item.tag"></i>
            </a>
          </li>
        </template>

        <template v-for="(item,i) in (CONFIG.thirdParty && CONFIG.thirdParty.customShowItem || [])">
          <li :key="i+'a'" :title="item.title">
            <a :class="'login_03-third_party_'+item.tag" :href="item.href" :target="CONFIG.thirdParty.target">
              <i class="fa" :class="'fa-'+item.tag"></i>{{item.text}}</a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import * as interfaces from '@work/login/common/interfaces.js';
import URL from 'url';
import PROJECT_CONFIG from "projectConfig";
import { Get, CreateCode } from '@common';
export default {
  name: 'work_login_03_login',
  reused: true,
  props: {
    namespace: String
  },
  data () {
    return {
      CONFIG: "",
      isPC: '',
      member: {
        loginName: '',
        password: '',
        flag: 'pc'
      },
      inputCode: '',/* 输入验证码 */
      code: ''/* 随机验证码 */
    };
  },

  computed: {},

  created () {
    this.initConfig();
  },

  mounted () {
    this.saveReffer();
    if (this.getShowItem('code')) {
      this.createCode();
    }

  },

  methods: {
    ...mapActions('login', {
      action_login: interfaces.ACTION_LOGIN,
    }),
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].login.work_login_03;
      this.isPC = this.CONFIG.isPC ? this.CONFIG.isPC : 'true';
    },
    /* 创建验证码 */
    createCode () {
      let checkCode = document.getElementById("code");
      this.code = CreateCode();
      checkCode.value = this.code;
    },
    getShowItem (itemText) {
      if (this.CONFIG.showItem) {
        return this.CONFIG.showItem.indexOf(itemText) > -1
      } else {
        return false
      }
    },
    login: function () {
      // this.loginValid(); // 先校验是否为空
      /* 这样分开写是为了 当用户名填写不正确密码未填写时 提示为空 应该首先提示用户名不正确 */


      if (this.getShowItem('code')) { /* 是否配置验证码功能 */
        /* 验证 */
        if (this.inputCode.trim().toLowerCase() != this.code.toLowerCase()) {
          this.$message({
            type: 'warning',
            message: this.getStaticText('codeFailed') ? this.getStaticText('codeFailed') : "验证码输入错误"
          });
          return false
        }
      }

      if (this.member.loginName.trim() == '') { // 先校验用户名是否为空
        this.$message({
          type: 'warning',
          message: this.getStaticText('userNameCannotBeEmpty') ? this.getStaticText('userNameCannotBeEmpty') : "请输入账号"
        });
        return false;
      } else if (this.member.password.trim() == '') { //  再校验密码是否为空
        this.$message({
          type: 'warning',
          message: this.getStaticText("pwdCannotBeEmpty") ? this.getStaticText('pwdCannotBeEmpty') : "请输入密码"
        });
        return false;
      } else {
        this.checkMemberInfo();
        return false;
      }

    },
    checkMemberInfo () {
      this.action_login({ member: this.member }).then((rep) => {
        if (rep.data.result && rep.data.result == '1') {
          if (rep.data.data.checkStatus == 0 || rep.data.data.checkStatus == "0") {
            this.$message({
              type: "error",
              message: this.getStaticText('accountFrozenInfo') ? this.getStaticText('accountFrozenInfo') : "账号已被冻结，请联系管理员"
            });
          } else {

            if (!document.referrer) {
              window.location.href = this.CONFIG.indexPath ? this.CONFIG.indexPath : './index.html'
              return false
            }
            let referrName = this.getFileName(document.referrer)
            let len = this.CONFIG.disBacks.length;

            for (let i = 0; i < len; i++) {
              let item = this.CONFIG.disBacks[i];
              if (referrName == item) {
                window.location.href = this.CONFIG.indexPath ? this.CONFIG.indexPath : './index.html'
                return false
              }
            }

            window.location.href = document.referrer;

          }
        } else if (rep.data.result && rep.data.result == '0') {
          this.$message({
            type: "error",
            message: rep.data.error && rep.data.error.errorMsg ? rep.data.error.errorMsg : (this.getStaticText('loginFailed') ? this.getStaticText('loginFailed') : '登录失败')
          });
        }
        return false;
      });
    },
    checkUsername(){  //单独验证用户名
      let params = Object.assign({},this.CONFIG.checkUsername.params);
      params.checkText = this.member.loginName;
      Get(CONFIG.BASE_URL+this.CONFIG.checkUsername.url +'?checkText=' +params.checkText + '&checkType=' + params.checkType).then((rep) => {
        console.log(rep.data.result);
        if(rep.data.result == '1'){
          this.$message({
            type: "error",
            message: this.getStaticText('unRegisterName') ? this.getStaticText('unRegisterName') : '账号未注册'
          });
        }

      })
    },
    /*loginValid: function () {
      if (this.member.loginName.trim() == '' || this.member.password.trim() == '') { // 先校验是否为空
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
    },*/
    toThirdLogin (type) {
      return CONFIG.BASE_URL + this.CONFIG.thirdParty.url + type;
    },
    getFileName (path) {
      let pathName = URL.parse(path).pathname
      let arr = pathName.split('/');
      return arr[arr.length - 1];
    },
    saveReffer () {
      let referr = document.referrer;
      if (referr) {
        window.localStorage.setItem('loginReferr', referr)
      }
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    }
  }
}

</script>
<style>
.login_03_content {
  width: 354px;
  height: 358px;
  padding: 15px 30px;

  box-shadow: 0 0 10px #e5e5e5;
  background: #fff;
}
.login_03_titlebox {
  line-height: 35px;
  border-bottom-width: 1px;

  font-size: 18px;
  border-bottom-style: solid;
  border-bottom-color: #cccccc;
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

  border-style: solid;
  border-color: #e0e0e0;
  color: #939393;
  background-color: transparent;
  outline: none;
  background: url(./img/bg_10.png) no-repeat;
  background-position: -574px -93px;
}
.login_03_code_box {
  margin-top: 25px;
}
.login_03_code {
  display: inline-block;
  width: 120px;
  height: 40px;
  border-width: 1px;
  padding-left: 15px;
  vertical-align: middle;
  border-style: solid;
  border-color: #e0e0e0;
  color: #939393;
  background-color: transparent;
  outline: none;
}
.login_03_password {
}
input:focus.login_03_userinput,
input:focus.login_03_password {
  border-width: 1px;

  border-style: solid;
  border-color: #bf3636;
  outline-color: #bf3636;
  color: #bf3636;
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

  color: #c50000;
}
.login_03_box_02 {
  margin-top: 30px;
}
.login_03_box_02_button {
  border: 0px;
  line-height: 42px;
  height: 42px;
  width: 350px;

  border-radius: 5px;
  background: #c50000;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}

.login_03_box_03 {
  margin-top: 15px;

  color: #a6a6a6;
  font-size: 14px;
}
.login_03_box_03_register {
  float: right;

  color: #c50000;
}
</style>
<style scoped>
#code {
  width: 90px;
  height: 36px;
  font-family: Arial;
  font-style: italic;
  font-weight: bold;
  border: 1px solid rgb(217, 193, 191);
  border-radius: 4px;
  letter-spacing: 5px;
  color: #c50000;
}
</style>
