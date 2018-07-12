<!--  -->
<template>
  <section>
    <div class="register_02_register" v-if="step==1">
      <div class="register_02_register_titlebox">
        <span class="register_02_register_title">{{getStaticText('userRegister') ? getStaticText('userRegister') : '新用户注册'}}</span>
      </div>
      <form id="register-form" name="register-form" class="register_02_register_form" action="#">
        <div class="register_02_register_form_box">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="loginName" class="register_02_register_form_box_usernamebox">
              <i class="register_02_register_form_box_usernamebox_icon"></i>
              <span class="register_02_register_form_box_usernamebox_label">{{getStaticText('userName') ? getStaticText('userName') : '用户名:'}}</span>
              <el-input type="text" v-model="ruleForm.loginName" :placeholder="getStaticText('userNameSupportCode') ? getStaticText('userNameSupportCode') : '支持6~16位数字、字母、下划线'" class="register_02_register_form_box_usernamebox_input" style="height:20px"></el-input>
              <div v-show="this.cheStatus==0" class="el-form-item__error">
                {{getStaticText('userExistInfo') ? getStaticText('userExistInfo') : '很抱歉，用户名已存在'}}</div>
              <div v-show="this.cheStatus==1" class="el-form-item__error" style="color:green">
                {{getStaticText('canUseInfo') ? getStaticText('canUseInfo') : '恭喜您!可以使用'}}</div>
            </el-form-item>

            <el-form-item prop="pass" class="register_02_register_form_box_passwordbox">
              <i class="register_02_register_form_box_passwordbox_icon"></i>
              <span class="register_02_register_form_box_passwordbox_label">{{getStaticText('setNewPwd') ? getStaticText('setNewPwd'): '设置新密码:'}}</span>
              <el-input type="password" v-model="ruleForm.pass" :placeholder="getStaticText('pwdSupportCode') ? getStaticText('pwdSupportCode') : '密码支持6-16位字符'" class="register_02_register_form_box_passwordbox_input"></el-input>
            </el-form-item>

            <el-form-item prop="checkPass" class="register_02_register_form_box_confirm-password-box">
              <i class="register_02_register_form_box_confirm-password-box_icon"></i>
              <span class="register_02_register_form_box_confirm-password-box_label">{{getStaticText('staticText.confirmPwd') ? getStaticText('staticText.confirmPwd') : '确认密码:'}}</span>
              <el-input type="password" v-model="ruleForm.checkPass" :placeholder="getStaticText('enterPwdAgain') ? getStaticText('enterPwdAgain') : '请再次输入密码'" class="register_02_register_form_box_confirm-password-box_input"></el-input>
            </el-form-item>

            <el-form-item prop="captcha">
              <div class="register_02_register_form_box_validate-code-box">
                <i class="register_02_register_form_box_validate-code-box_icon"></i>
                <span class="register_02_register_form_box_validate-code-box_label">{{getStaticText('verifiCode') ? getStaticText('verifiCode') : '验证码:' }}</span>
                <el-input type="text" v-model="ruleForm.captcha" :placeholder="getStaticText('inputVerifiCode') ? getStaticText('inputVerifiCode') : '请输入验证码'" id="input" class="register_02_register_form_box_validate-code-box_input"></el-input>
                <input type="button" id="code" @click="createCode" />
                <el-button type="text" @click="refresh">
                  <span class="yzm_04"></span>
                  <a href="javascript:void(0)" class="register_02_register_form_box_validate-code-box_change-picture">{{getStaticText('changeAnotherPage') ? getStaticText('changeAnotherPage') : '换一张'}}</a>
                  <i class="register_02_register_form_box_validate-code-box_change-icon">{{getStaticText('refreshInfo') ? getStaticText('refreshInfo') : '刷新'}}</i>
                </el-button>
              </div>
            </el-form-item>
          </el-form>
          <div class="register_02_register_next-box"><input type="button" class="register_02_register_next-box_button" :value="getStaticText('nextStep') ? getStaticText('nextStep') : '下一步'" @click="toNext" /></div>

        </div>
      </form>
    </div>
    <!-- 第二步 -->
    <div class="register_02_bind" v-if="step==2">
      <div class="register_02_bind_nav-box">
        <span class="register_02_bind_nav-box_title" v-if="showItem('bindEmail')" :class="{'register_02_bind_nav-box_bind--on':currentSept=='bindEmail'}" @click="showBindMail">{{getStaticText('emailBind') ? getStaticText('emailBind'): '邮箱绑定'}}</span>
        <span v-if="showTag()">|</span>
        <span class="register_02_bind_nav-box_title" v-if="showItem('bindMobile')" :class="{'register_02_bind_nav-box_bind--on':currentSept=='bindMobile'}" @click="showBindPhone">{{getStaticText('phoneNumBind') ? getStaticText('phoneNumBind') : '手机绑定'}}</span>
      </div>

      <!-- 绑定邮箱 -->
      <div class="register_02_bind_content">
        <!-- 无邮箱后缀选择 -->
        <div class="register_02_bind_content_mail" v-show="currentSept=='bindEmail' && !isMailsend && !getShowEmailPostfix()">
          <el-form :model="ruleFormE" :rules="rulesE" ref="ruleFormE" onkeydown="if(event.keyCode==13)return false;">
            <el-form-item prop="Email">
              <div class="register_02_bind_content_mail_input-box">
                <i class="register_02_bind_content_mail_input-box_icon"></i>
                <span class="register_02_bind_content_mail_input-box_label">{{getStaticText('email') ? getStaticText('email') : '邮箱:'}}</span>

                <el-input type="text" v-model="ruleFormE.Email" :placeholder="getStaticText('inputEmailInfo') ? getStaticText('inputEmailInfo') : '请输入邮箱 email@mail.com'" class="register_02_bind_content_mail_input-box_input" @keyup.enter.native="submitFormE($event,'ruleFormE')"></el-input>

              </div>
            </el-form-item>
            <el-button type="primary" @click="submitFormE('ruleFormE')" class="register_02_bind_content_mail_input-box_button">{{getStaticText('registerNow') ? getStaticText('registerNow') : '立即注册'}}</el-button>
          </el-form>
        </div>

        <!-- 有邮箱后缀选择 -->
        <div class="register_02_bind_content_mail-postFix" v-show="currentSept=='bindEmail' && !isMailsend && getShowEmailPostfix()">
          <el-form :model="ruleFormPE" :rules="rulesPE" ref="ruleFormPE" onkeydown="if(event.keyCode==13)return false;">
            <el-form-item prop="subfixEmail">
              <div class="register_02_bind_content_mail_input-postFix-box">
                <i class="register_02_bind_content_mail_input-box_icon"></i>
                <span class="register_02_bind_content_mail_input-postFix-box_label">{{getStaticText('email') ? getStaticText('email') : '邮箱:'}}</span>

                <div class="register_02_bind_content_mail-postFix_email" v-if="getShowEmailPostfix()">
                  <el-input type="text" v-model="ruleFormPE.subfixEmail" :placeholder="getStaticText('inputEmailInfo') ? getStaticText('inputEmailInfo') : '请输入邮箱'" class="register_02_bind_content_mail_input-postFix-box_input" @keyup.enter.native="submitFormE($event,'ruleFormPE')"></el-input>
                  @
                  <el-select v-model="emailPostfix" :placeholder="getStaticText('postFixEmail') ? getStaticText('postFixEmail') : '邮箱'">
                    <el-option v-for="(item,index) in CONFIG.bindMobileConfig.postfix" :key="index" :label="item" :value="item">
                    </el-option>
                  </el-select>
                </div>

              </div>
            </el-form-item>
            <el-button type="primary" @click="submitFormE($event,'ruleFormPE')" class="register_02_bind_content_mail_input-postFix-box_button">{{getStaticText('registerNow') ? getStaticText('registerNow') : '立即注册'}}</el-button>
          </el-form>
        </div>

        <!-- 绑定手机 -->
        <div class="register_02_bind_content_mobile" v-show="currentSept=='bindMobile'">
          <el-form :model="ruleFormM" :rules="rulesM" ref="ruleFormM">
            <el-form-item prop="mobileNum">
              <div class="register_02_bind_content_mobile_input-box">
                <i class="register_02_bind_content_mobile_input-box_mobile-icon"></i>
                <span class="register_02_bind_content_mobile_input-box_mobile-label">{{getStaticText('phoneNum') ? getStaticText('phoneNum') : '手机号:'}}</span>
                <el-input type="text" v-model="ruleFormM.mobileNum" :placeholder="getStaticText('inputPhoneNum') ? getStaticText('inputPhoneNum') : '请输入手机号'" class="register_02_bind_content_mobile_input-box_mobile-input"></el-input>
                <div v-show="this.cheStatus==0" class="el-form-item__error">{{getStaticText('phoneNumBoundInfo') ? getStaticText('phoneNumBoundInfo') : '手机号已被绑定'}}</div>
                <el-button @click="getCode(ruleFormM.mobileNum)" class="register_02_bind_content_mobile_input-box_mobile-button" v-show="this.cheStatus!=0" :disabled="isTimeLimit" v-text="buttonMsg"></el-button>
              </div>
            </el-form-item>
            <el-form-item prop="sendNum">
              <div class="register_02_bind_content_mobile_input-box">
                <i class="register_02_bind_content_mobile_input-box_validate-icon"></i>
                <span class="register_02_bind_content_mobile_input-box_validate-label">{{getStaticText('verifiCode') ? getStaticText('verifiCode') : '验证码:'}}</span>
                <el-input type="text" v-model="ruleFormM.sendNum" :placeholder="getStaticText('inputPhoneVerifiCode') ? getStaticText('inputPhoneVerifiCode'): '请输入手机验证码'" class="register_02_bind_content_mobile_input-box_validate-input"></el-input>
              </div>
            </el-form-item>
            <el-button type="primary" :disabled="islimitRegisterMobile" @click="submitFormM('ruleFormM')" class="register_02_bind_content_mobile_input-box_button">{{getStaticText('registerNow') ? getStaticText('registerNow') : '立即注册'}}</el-button>
          </el-form>

        </div>

        <!-- 邮箱发送后提示页 -->
        <div class="register_02_bind_content" v-show="isMailsend && currentSept=='bindEmail'">
          <div class="register_02_bind_content_mail" style="padding-left:0px;">
            <div class="register_02_bind_content_mail_success-title"></div>
            <div class="register_02_bind_content_mail_success-content">{{getStaticText('yourEmailWillReceive') ? getStaticText('yourEmailWillReceive') : '您的邮箱将会收到一封'}}
              <span class="register_02_bind_content_mail_success-content-text">{{getStaticText('verify') ? getStaticText('verufy') : '验证'}}</span>
              {{getStaticText('email') ? getStaticText('email'): '邮件 '}}<br/> {{getStaticText('checkOutEmail') ? getStaticText('checkOutEmail') : '请登录你的邮箱查看'}}</div>
            <el-button class="register_02_bind_content-button" type="primary" @click="backLogin">
              {{getStaticText('backToLogin') ? getStaticText('backToLogin'): '返回登陆页'}}</el-button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import PROJECT_CONFIG from "projectConfig";
import { ValidateRules, CreateCode } from '@common';
import * as interfaces from '@work/register/common/interfaces.js';
import { mapActions } from 'vuex';
export default {
  name: 'work_register_03',
  reused: true,
  props: {
    namespace: String
  },
  data () {
    var isTest;
    if (CONFIG.hasOwnProperty('IS_VALIDATE_TEST')) {
      isTest = CONFIG.IS_VALIDATE_TEST;
    } else {
      isTest = false;
    }
    /* 用户名格式验证 */
    var validateloginName = (rule, value, callback, regStatus) => {
      if (value === "") {
        this.cheStatus = 2,
          callback(new Error(this.getStaticText('pleaseInputUserName') ? this.getStaticText('pleaseInputUserName') : "请输入用户名"));
      } else if (value != value.match(/^[a-z|A-Z]\w{5,15}$/)) {
        this.cheStatus = 2,
          callback(new Error(this.getStaticText('userNameFormatInfo') ? this.getStaticText('userNameFormatInfo') : "请以字母开头，可以使用数字、字母、下划线，长度6到16位"));
      } else if (value) {
        var params = {
          text: this.ruleForm.loginName,
          type: "1",
        };
        this.action_checkUserInfo(params).then((resp) => {
          let checkStatus = resp.data.result;
          this.firstcallback(checkStatus);
          if (checkStatus == 0) {
            return false;
          } else {
            callback();
          }
        }); /* 检查用户信息 */

      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    /* 密码格式验证 */
    var validatePass2 = (rule, value, callback) => {
      var i;
      var char;
      var badword;
      badword = ';|<>`&!*(~^)#?:"/$=\\' + "'"
      for (i = 0; i < value.length; i++) {
        char = value.charAt(i);      }
      if (badword.indexOf(char) >= 0) {
        callback(new Error(this.getStaticText('pwdFormatErrorInfo') ? this.getStaticText('pwdFormatErrorInfo') : '格式错误，密码仅支持汉字、字母、数字、"-"、"_"的组合'));
      } else if (value === "") {
        callback(new Error(this.getStaticText('pleaseInputPwd') ? this.getStaticText('pleaseInputPwd') : "请输入密码"));
      } else if (value.length <= 5) {
        callback(new Error(this.getStaticText('pwdAtLeastSixDigits') ? this.getStaticText('pwdAtLeastSixDigits') : "密码至少为6位数"));
      } else if (value.length >= 17) {
        callback(new Error(this.getStaticText('pwdCanBeUpToSixteenDigits') ? this.getStaticText('pwdCanBeUpToSixteenDigits') : "密码最多为16位数"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    /* 确认密码验证 */
    var validatePass3 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.getStaticText('inputPwdAgain') ? this.getStaticText('inputPwdAgain') : "请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error(this.getStaticText('twoPwdDoNotMatch') ? this.getStaticText('twoPwdDoNotMatch') : "两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    /* 注册验证码验证 */
    var validateCaptcha = (rule, value, callback) => {
      var inputCode = value.toUpperCase();
      if (value === "") {
        callback(new Error(this.getStaticText('inputVerifiCode') ? this.getStaticText('inputVerifiCode') : "请输入验证码"));
      } else if (inputCode != this.code && !(isTest && inputCode == 1)) {
        callback(new Error(this.getStaticText('verifiCodeInputError') ? this.getStaticText('verifiCodeInputError') : "验证码输入错误！!"));
        value = "";
        this.code = "";
        this.createCode();
        return false;
      }
      else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    /* 手机验证码验证 */
    var validateSendNum = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.getStaticText('inputPhoneVerifiCode') ? this.getStaticText('inputPhoneVerifiCode') : "请输入手机验证码"));
      } else if (value != this.cbSendNum) {
        callback(new Error(this.getStaticText('verifiCodeError') ? this.getStaticText('verifiCodeError') : "验证码错误"));
      } else {
        callback();
      }
    };

    /* 手机号格式验证 */
    var validateMobile = (rule, value, callback) => {
      if (value === "") {
        this.cheStatus = 2;
        callback(new Error(this.getStaticText('inputPhoneNum') ? this.getStaticText('inputPhoneNum') : "请输入手机号"));
      } else if (value != value.match(/^[1][3,4,5,6,7,8,9][0-9]{9}$/)) {
        this.cheStatus = 2;
        callback(new Error(this.getStaticText('inputTheCorrectPhoneNum') ? this.getStaticText('inputTheCorrectPhoneNum') : "请输入正确的手机号"));
      } else if (value) {
        var params = {
          text: this.ruleFormM.mobileNum,
          type: "3"
        };
        this.action_checkUserInfo(params).then((resp) => {
          let checkStatus = resp.data.result;
          this.firstcallback(checkStatus);
        }); /* 检查用户信息 */
        if (this.cheStatus == 0) {
          return false;
        } else {
          callback();
        }
      } else {
        if (this.ruleFormM.sendNum == "") {
          return false;
        }
        callback();
      }
    };
    var validateSubfixEmail = (rule, value, callback) => {
      debugger
      if (value === "") {
        callback(new Error(this.getStaticText('inputEmail') ? this.getStaticText('inputEmail') : "请输入邮箱"));
      }else if(/^[A-Za-z\d]+$/.test(value)){
        callback(new Error(this.getStaticText('inputEmailFormatError') ? this.getStaticText('inputEmailFormatError') : "请输入邮箱格式"))
      }else{
        callback();
      }
    }

    return {
      CONFIG: null,
      step: 1,
      currentSept: 'bindEmail',
      isMailsend: false,
      code: "",
      cheStatus: "2",
      isTimeLimit: false,
      islimitRegisterMobile: false,
      buttonMsg: "",
      emailPostfix: "",/* 邮箱后缀 */
      ruleForm: {
        loginName: "",
        pass: "",
        checkPass: "",
        captcha: "",
      },
      ruleFormM: {
        mobileNum: "",
        sendNum: ""
      },
      ruleFormE: {
        Email: ""
      },
      ruleFormPE: {
        subfixEmail: ""
      },
      rules: {
        loginName: [{ validator: validateloginName, trigger: "blur" }],
        pass: [{ validator: validatePass2, trigger: "blur" }],
        checkPass: [{ validator: validatePass3, trigger: "blur" }],
        captcha: [{ validator: validateCaptcha, trigger: "blur" }]
      },
      rulesM: {
        mobileNum: [{ validator: validateMobile, trigger: "blur" }],
        sendNum: [{ validator: validateSendNum, trigger: "blur" }],
      },
      rulesE: {
        Email: [{ validator: ValidateRules.validateEmail, trigger: "blur" }],
      },
      rulesPE: {
        subfixEmail: [{ validator: validateSubfixEmail, trigger: "blur" }]
      }
    };
  },

  computed: {},

  created () {
    this.initConfig();
    if (this.CONFIG.showItem) {
      this.currentSept = this.CONFIG.showItem[0]
    }
    this.buttonMsg = this.getStaticText('getVerifiCode') ? this.getStaticText('getVerifiCode') : '获取验证码';
  },

  mounted () {
    this.createCode();
  },

  methods: {
    ...mapActions('register', {
      action_register: interfaces.ACTION_REGISTER_EMAIL,
      action_checkUserInfo: interfaces.ACTION_CHECK_USERINFO,
      action_sendMobileNum: interfaces.ACTION_SEND_MOBILE_NUM,
      antion_register_byMobile: interfaces.ACTION_REGISTER_MOBILE,
    })
    ,
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].register.work_register_03;

    },
    showItem (item) {
      if (!this.CONFIG.showItem) {
        return true
      }
      if (this.CONFIG.showItem.indexOf(item) > -1) {
        return true
      } else {
        return false
      }
    },
    getShowEmailPostfix () {
      let vconfig = this.CONFIG.bindMobileConfig;
      if (vconfig && vconfig.showPostfix) {
        return true
      } else {
        return false
      }
    },
    showTag () {
      if (!this.CONFIG.showItem) {
        return true
      }

      if (this.CONFIG.showItem.length > 1) {
        return true
      } else {
        return false
      }
    },
    /* 检查用户信息后回调 */
    firstcallback (cheStatus) {
      this.cheStatus = cheStatus;
    },
    /* 下一步 */
    toNext (ruleForm) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.cheStatus = 2;
          this.step = 2;
          this.loginName = this.ruleForm.loginName;
          this.checkPass = this.ruleForm.checkPass;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    /* 发送手机验证码 */
    getCode (mobileNum) {
      if (mobileNum === "") {
        loading.close();
        this.$message({
          type: "error",
          message: this.getStaticText('inputPhoneNum') ? this.getStaticText('inputPhoneNum') : "请输入手机号"
        });
      } else if (mobileNum != mobileNum.match(/^[1][3,4,5,6,7,8,9][0-9]{9}$/)) {
        this.$message({
          type: "error",
          message: this.getStaticText('inputCorrectPhoneNum') ? this.getStaticText('inputCorrectPhoneNum') : "请输入正确手机号"
        });
      } else {
        var params = {
          url: this.CONFIG.sendNum.url,
          mobileNum: mobileNum
        };
        let loading = this.$loading({ text: this.getStaticText('verifiCodeIsSending') ? this.getStaticText('verifiCodeIsSending') : "验证码发送中..." });
        this.action_sendMobileNum(params).then((resp) => {
          let sendStatus = resp.data.result;
          let sendNum = resp.data.data;
          let vError = resp.data.error;
          if (vError) {
            let msg = vError.errorMsg
            this.$message.error(msg)
          } else {
            this.$message({
              message: this.getStaticText('sendSuccess') ? this.getStaticText('sendSuccess') : '发送成功',
              type: 'success'
            });
            this.isTimeLimit = true
            let num = 60;
            let interval = setInterval(() => {
              if (num < 0) {
                this.buttonMsg = this.getStaticText('getVerifiCode') ? this.getStaticText('getVerifiCode') : '获取验证码'
                this.isTimeLimit = false;
                clearTimeout(interval)
              } else {
                this.buttonMsg = num + 's'
              }
              num--;
            }, 1000)
            this.MobileCallback(sendStatus, sendNum);
          }
          loading.close();

        }).catch((err) => {
          this.$message.error(this.getStaticText('networkTimeout') ? this.getStaticText('networkTimeout') : '网络超时')
          loading.close();
        });
      }
    },
    MobileCallback (sendStatus, cbSendNum) {
      this.cbSendNum = cbSendNum;
    },
    /* 绑定手机号注册 */
    submitFormM (ruleFormM) {
      this.$refs.ruleFormM.validate(valid => {

        if (valid) {
          this.mobile = this.ruleFormM.mobileNum;
          var params = {
            mobileNum: this.mobile,
            loginName: this.loginName,
            checkPass: this.checkPass,
          };
          let loading = this.$loading({ text: this.getStaticText('verifiCodeIsSending') ? this.getStaticText('verifiCodeIsSending') : "验证码发送中..." });
          this.islimitRegisterMobile = true;
          this.antion_register_byMobile(params).then((resp) => {
            let MStatus = resp.data.result;
            this.Mcallback(MStatus, resp);
            this.islimitRegisterMobile = false;
            loading.close();
          }).catch((err) => {
            this.islimitRegisterMobile = false;
            loading.close();
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    /* 绑定手机号注册回调 */
    Mcallback (MStatus, response) {
      if (MStatus == 0) {
        this.$message({
          type: "info",
          message: (this.getStaticText('registerFailed') ? this.getStaticText('registerFailed') : "注册失败,") + response.data.error.errorMsg
        });
      } else {
        this.toLogin();
      }
    },
    backLogin () {
      window.location.href = './login.html';
    },
    toLogin () {
      this.$alert(this.getStaticText('phoneNumWasSuccessfullyBound') ? this.getStaticText('phoneNumWasSuccessfullyBound') : "手机号绑定成功", this.getStaticText('congratulations') ? this.getStaticText('congratulations') : "恭喜", {
        confirmButtonText: this.getStaticText('yes') ? this.getStaticText('yes') : "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: this.getStaticText('returnToLoginAfterThreeSeconds') ? this.getStaticText('returnToLoginAfterThreeSeconds') : "3秒后返回登录界面"
          });
          window.setTimeout(function () {
            window.location.href =
              './login.html';
          }, 3000);
        }
      });
    },
    /* 绑定邮箱注册 */
    submitFormE (e, ruleFormE) {
      debugger
      this.$refs[ruleFormE].validate(valid => {

        if (valid) {
          this.Email = this.ruleFormE.Email;
          var params = {
            loginName: this.loginName,
            checkPass: this.checkPass,
            email:''
          };

          if (!this.getShowEmailPostfix()) {/* 判断是否有后缀选择 */
            params.email = this.Email
          } else {
            params.email = this.Email + '@' + this.subfixEmail
          }

          /* 注册 */
          let loading = this.$loading({ text: this.getStaticText('verifiCodeIsSending') ? this.getStaticText('verifiCodeIsSending') : "验证码发送中..." });
          this.action_register(params).then((resp) => {
            let EStatus = resp.data.result;
            this.Ecallback(EStatus, resp);
            loading.close();
          }).catch((err) => {
            loading.close();
          });
        } else {
          this.$message({
            type: "info",
            message: this.getStaticText('requestFailed') ? this.getStaticText('requestFailed') : "请求失败"
          });
          return false;
        }
      });
    },
    /* 注册回调 */
    Ecallback (EStatus, rep) {
      if (EStatus == 0) {
        this.$message({
          type: "info",
          message: (this.getStaticText('registerFailed') ? this.getStaticText('registerFailed') : "注册失败,") + rep.data.error.errorMsg
        });
      } else {
        this.isMailsend = true;
      }
    },
    /* 创建验证码 */
    createCode () {
      let checkCode = document.getElementById("code");
      this.code = CreateCode();
      checkCode.value = this.code;
    },
    /* 刷新 */
    refresh () {
      this.code = "";
      this.createCode();
    },
    showBindPhone () {
      this.currentSept = 'bindMobile';
    },
    showBindMail () {
      this.currentSept = 'bindEmail';
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
  }
}

</script>
<style>
.register_02_register {
  margin: 44px auto 55px auto;
  width: 748px;
  padding-bottom: 80px;
  border-width: 1px;
  overflow: hidden;

  border-style: solid;
  border-color: #d9d9d9;
  background-color: #fff;
}
.register_02_register_titlebox {
  margin: 0 18px 0 18px;
  height: 70px;
  line-height: 70px;
  border-bottom-width: 1px;

  border-bottom-style: solid;
  border-bottom-color: #bfbfbf;
}
.register_02_register_title {
  display: inline-block;
  margin-left: 30px;
  padding: 0px 6px;
  height: 68px;
  line-height: 68px;
  border-bottom-width: 5px;

  border-bottom-style: solid;
  border-bottom-color: #c50000;
  color: #c50000;
  font-size: 16px;
}
.register_02_register_form {
  width: 480px;
  margin: 0 auto;
}
.register_02_register_form_box {
  padding: 50px 0px 0px 60px;
}
.register_02_register_form_box_usernamebox {
  margin-top: 30px;
  margin-left: 23px;
  margin-bottom: 22px;
}
.register_02_register_form_box_usernamebox_icon {
  display: inline-block;
  margin-right: 10px;
  height: 18px;
  width: 15px;
  vertical-align: middle;
  text-indent: -9999px;

  font-style: normal;
  background-position: -5px -142px;
  background: url(./img/bg_10.png) no-repeat;
}
.register_02_register_form_box_usernamebox_label {
  margin-right: 15px;

  color: #727272;
  font-size: 14px;
}
.register_02_register_form_box_usernamebox_input {
  width: 235px;
  height: 35px;
}

.register_02_register_form_box_passwordbox {
  margin-bottom: 22px;
  margin-top: 30px;
}
.register_02_register_form_box_passwordbox_icon {
  display: inline-block;
  margin-right: 5px;
  height: 16px;
  width: 15px;
  vertical-align: middle;
  text-indent: -9999px;

  background-position: -8px -324px;
  background: url(./img/bg_10.png) no-repeat;
  font-style: normal;
}
.register_02_register_form_box_passwordbox_label {
  margin-right: 15px;

  color: #727272;
  font-size: 14px;
}
.register_02_register_form_box_passwordbox_input {
  width: 235px;
  height: 35px;
}

.register_02_register_form_box_confirm-password-box {
  margin-bottom: 0px;
  margin-top: 30px;
}
.register_02_register_form_box_confirm-password-box_icon {
  display: inline-block;
  margin-right: 18px;
  height: 18px;
  width: 17px;
  vertical-align: middle;
  text-indent: -9999px;

  background-position: -8px -354px;
  background: url(./img/bg_10.png) no-repeat;
  font-style: normal;
}
.register_02_register_form_box_confirm-password-box_label {
  margin-right: 15px;

  color: #727272;
  font-size: 14px;
}
.register_02_register_form_box_confirm-password-box_input {
  width: 235px;
  height: 35px;
}
.register_02_register_form_box_validate-code-box {
  margin-left: 16px;
  margin-top: 30px;
}
.register_02_register_form_box_validate-code-box_icon {
  display: inline-block;
  margin-right: 8px;
  height: 18px;
  width: 17px;
  vertical-align: middle;
  text-indent: -9999px;

  background: url(./img/bg_10.png) no-repeat;
  background-position: -7px -176px;
  font-style: normal;
}
.register_02_register_form_box_validate-code-box_label {
  margin-right: 15px;

  color: #727272;
  font-size: 14px;
}
.register_02_register_form_box_validate-code-box_input {
  width: 117px;
}
.register_02_register_form_box_validate-code-box_change-picture {
  font-size: 12px;
  text-decoration: none;
}
.register_02_register_form_box_validate-code-box_change-icon {
  display: inline-block;
  height: 15px;
  width: 15px;
  vertical-align: middle;
  text-indent: -9999px;

  background-position: -5px -380px;
  background: url(./img/bg_10.png) no-repeat;
  font-style: normal;
}
.register_02_register_next-box {
  margin-left: 23px;
}
.register_02_register_next-box_button {
  margin-left: 85px;
  margin-top: 20px;
  width: 88px;
  height: 30px;
  line-height: 30px;
  border: 0px;

  cursor: pointer;
  background-color: #c50000;
  color: #fff;
  font-size: 14px;
  outline: none;
}
.register_02_bind {
  width: 748px;
  margin: 44px auto 55px auto;
  padding-bottom: 80px;
  border-width: 1px;
  overflow: hidden;

  border-style: solid;
  border-color: #d9d9d9;
  background-color: #fff;
}
.register_02_bind_nav-box {
  margin: 0 18px 0 18px;
  line-height: 70px;
  height: 70px;
  border-bottom-width: 1px;

  border-bottom-style: solid;
  border-bottom-color: #bfbfbf;
  color: #515151;
}
.register_02_bind_nav-box_title {
  padding-right: 6px;
  padding-left: 6px;
  margin-right: 30px;
  margin-left: 30px;

  cursor: pointer;
  font-size: 16px;
}
.register_02_bind_nav-box_bind--on {
  display: inline-block;
  line-height: 68px;
  height: 67px;
  border-bottom-width: 5px;

  color: #c50000;
  border-bottom-style: solid;
  border-bottom-color: #c50000;
}
.register_02_bind_content {
  width: 480px;
  margin: 0 auto;
}
.register_02_bind_content_mail {
  text-align: center;
}
.register_02_bind_content_mail,
.register_02_bind_content_mobile {
  padding: 85px 0 0 60px;
}
.register_02_bind_content_mail-postFix_email {
  display: inline-block;
}
.register_02_bind_content_mail_input-box,
.register_02_bind_content_mobile_input-box {
  margin-top: 30px;
}
.register_02_bind_content_mail_input-box_icon {
  display: inline-block;
  margin-right: 5px;
  height: 15px;
  width: 17px;
  vertical-align: middle;
  text-indent: -9999px;

  background-position: -8px -294px;
  background: url(./img/bg_10.png) no-repeat;
  font-style: normal;
}
.register_02_bind_content_mail_input-box_label {
  margin-right: 30px;

  color: #727272;
  font-size: 14px;
}
.register_02_bind_content_mail_input-box_input {
  width: 230px;
}
.register_02_bind_content_mail_input-box_button {
  margin-left: 85px;
  margin-top: 20px;
  height: 35px;
  border: 0px;
  cursor: pointer;
}
/* 邮箱后缀输入框 */
.register_02_bind_content_mail-postFix .el-form {
  padding: 0px;
  padding-top: 130px;
  text-align: center;
  box-shadow: none;
  border: none;
}
.register_02_bind_content_mail-postFix
  .register_02_bind_content_mail_input-postFix-box_input {
  width: 200px;
}
.register_02_bind_content_mail-postFix .el-select {
  width: 120px;
}
/* END 邮箱后缀输入框 */
.register_02_bind_content_mobile_input-box_mobile-icon {
  display: inline-block;
  margin-right: 5px;
  height: 18px;
  width: 15px;
  text-indent: -9999px;
  vertical-align: middle;

  background-position: -8px -264px;
  background: url(./img/bg_10.png) no-repeat;
  font-style: normal;
}
.register_02_bind_content_mobile_input-box_mobile-label {
  margin-right: 15px;

  color: #727272;
  font-size: 14px;
}
.register_02_bind_content_mobile_input-box_mobile-input {
  width: 135px;
  height: 35px;
}
.register_02_bind_content_mobile_input-box_mobile-button {
}

.register_02_bind_content_mobile_input-box_validate-icon {
  display: inline-block;
  margin-right: 5px;
  height: 18px;
  width: 17px;
  vertical-align: middle;
  text-indent: -9999px;

  background-position: -7px -176px;
  background: url(./img/bg_10.png) no-repeat;
}
.register_02_bind_content_mobile_input-box_validate-label {
  margin-right: 15px;

  color: #727272;
  font-size: 14px;
}
.register_02_bind_content_mobile_input-box_validate-input {
  width: 115px;
  height: 35px;
}
.register_02_bind_content_mobile_input-box_button {
  margin-left: 85px;
  margin-top: 20px;
  height: 35px;
  border: 0px;
  cursor: pointer;
}
.register_02_bind_content_mail_success-title {
  margin-top: 30px;
}
.register_02_bind_content_mail_success-content {
  margin-bottom: 35px;
  color: #727272;
  font-size: 18px;
  text-align: center;
}
.register_02_bind_content_mail_success-content-text {
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
