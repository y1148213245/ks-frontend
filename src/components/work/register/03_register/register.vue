<!--  -->
<template>
<section>
 <div class="register_02_register" v-if="step==1">
    <div class="register_02_register_titlebox">
      <span class="register_02_register_title">新用户注册</span>
    </div>
    <form id="register-form" name="register-form" class="register_02_register_form" action="#" >
      <div class="register_02_register_form_box">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="loginName" class="register_02_register_form_box_usernamebox">
              <i class="register_02_register_form_box_usernamebox_icon"></i><span class="register_02_register_form_box_usernamebox_label">用户名:</span><el-input type="text"  v-model="ruleForm.loginName" placeholder="支持6~16位数字、字母、下划线" class="register_02_register_form_box_usernamebox_input" style="height:20px" ></el-input>
              <div v-show="this.cheStatus==0" class="el-form-item__error">很抱歉，用户名已存在</div>
              <div v-show="this.cheStatus==1" class="el-form-item__error" style="color:green" >恭喜您!可以使用</div>
            </el-form-item>

            <el-form-item prop="pass" class="register_02_register_form_box_passwordbox">
              <i class="register_02_register_form_box_passwordbox_icon"></i><span class="register_02_register_form_box_passwordbox_label">设置新密码:</span><el-input type="password" v-model="ruleForm.pass" placeholder="密码支持6-16位字符" class="register_02_register_form_box_passwordbox_input"></el-input>
            </el-form-item>

            <el-form-item prop="checkPass" class="register_02_register_form_box_confirm-password-box">
             <i class="register_02_register_form_box_confirm-password-box_icon"></i><span class="register_02_register_form_box_confirm-password-box_label">确认密码:</span><el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" class="register_02_register_form_box_confirm-password-box_input"></el-input>
            </el-form-item>

            <el-form-item prop="captcha" >
              <div class="register_02_register_form_box_validate-code-box" >
                <i class="register_02_register_form_box_validate-code-box_icon"></i>
                <span class="register_02_register_form_box_validate-code-box_label">验证码:</span>
                <el-input type="text" v-model="ruleForm.captcha" placeholder="请输入验证码" id="input"  class="register_02_register_form_box_validate-code-box_input"></el-input>
                <input type="button" id="code" @click="createCode"/>
                <el-button type="text" @click="refresh">
                  <span class="yzm_04"></span>
                  <a href="javascript:void(0)"  class="register_02_register_form_box_validate-code-box_change-picture">换一张</a>
                  <i class="register_02_register_form_box_validate-code-box_change-icon">刷新</i>
                </el-button>
              </div>
            </el-form-item>
          </el-form>
          <div class="register_02_register_next-box"><input type="button" class="register_02_register_next-box_button" value="下一步" @click="toNext"/></div>
          
      </div>
    </form>
  </div>
  <!-- 第二步 -->
  <div class="register_02_bind"  v-if="step==2">
		<div class="register_02_bind_nav-box">
			<span class="register_02_bind_nav-box_title" :class="{'register_02_bind_nav-box_bind--on':isBindMail}" @click="showBindMail">邮箱绑定</span>
      |<span class="register_02_bind_nav-box_title"  :class="{'register_02_bind_nav-box_bind--on':!isBindMail}" @click="showBindPhone">手机绑定</span>
		</div>

		<div class="register_02_bind_content">
			<div class="register_02_bind_content_mail" v-show="isBindMail && !isMailsend">
        <el-form :model="ruleFormE" :rules="rulesE" ref="ruleFormE" onkeydown="if(event.keyCode==13)return false;">
          <el-form-item prop="Email" >
            <div class="register_02_bind_content_mail_input-box">
              <i class="register_02_bind_content_mail_input-box_icon"></i>
              <span class="register_02_bind_content_mail_input-box_label">邮箱:</span>
              <el-input type="text" v-model="ruleFormE.Email" placeholder="请输入邮箱 email@mail.com" class="register_02_bind_content_mail_input-box_input"
                        @keyup.enter.native="submitFormE($event,'ruleFormE')"></el-input>
            </div>
          </el-form-item>
          <el-button type="primary" @click="submitFormE('ruleFormE')" class="register_02_bind_content_mail_input-box_button">立即注册</el-button>
        </el-form>
			</div>



			<div class="register_02_bind_content_mobile" v-show="!isBindMail">
        <el-form :model="ruleFormM" :rules="rulesM" ref="ruleFormM">
          <el-form-item prop="mobileNum" >
            <div class="register_02_bind_content_mobile_input-box">
              <i class="register_02_bind_content_mobile_input-box_mobile-icon"></i>
              <span class="register_02_bind_content_mobile_input-box_mobile-label">手机号:</span>
              <el-input type="text" v-model="ruleFormM.mobileNum" placeholder="请输入手机号" class="register_02_bind_content_mobile_input-box_mobile-input"></el-input>
              <div v-show="this.cheStatus==0" class="el-form-item__error">手机号已被绑定</div>
              <el-button @click="getCode(ruleFormM.mobileNum)" class="register_02_bind_content_mobile_input-box_mobile-button" v-show="this.cheStatus!=0">获取验证码</el-button>
            </div>
          </el-form-item>
          <el-form-item prop="sendNum">
            <div class="register_02_bind_content_mobile_input-box">
              <i class="register_02_bind_content_mobile_input-box_validate-icon"></i>
              <span class="register_02_bind_content_mobile_input-box_validate-label">验证码:</span>
              <el-input type="text" v-model="ruleFormM.sendNum" placeholder="请输入手机验证码"  class="register_02_bind_content_mobile_input-box_validate-input"></el-input>
            </div>
          </el-form-item>
          <el-button type="primary" @click="submitFormM('ruleFormM')" class="register_02_bind_content_mobile_input-box_button">立即注册</el-button>  
        </el-form>
      
			</div>


			<div class="register_02_bind_content" v-show="isMailsend && isBindMail">
				<div class="register_02_bind_content_mail" style="padding-left:0px;">
					<div class="register_02_bind_content_mail_success-title"></div>
          <div class="register_02_bind_content_mail_success-content">您的邮箱将会收到一封<span class="register_02_bind_content_mail_success-content-text">验证</span>邮件 <br/> 请登录你的邮箱查看
          </div>
				</div>
			</div>

    </div>
	</div>
  </section>
</template>

<script>
import { ValidateRules, CreateCode } from '@common';
import * as interfaces from '@work/register/common/interfaces.js';
import { mapActions } from 'vuex';
export default {
  name: 'work_register_03',
  reused: true,
  props: {},
  data () {
    /* 用户名格式验证 */
    var validateloginName = (rule, value, callback, regStatus) => {
      if (value === "") {
        this.cheStatus = 2,
          callback(new Error("请输入用户名"));
      } else if (value != value.match(/^[a-z]\w{5,15}$/)) {
        this.cheStatus = 2,
          callback(new Error("请以字母开头，可以使用数字、字母、下划线，长度6到16位"));
      } else if (value) {
        var params = {
          text: this.ruleForm.loginName,
          type: "1",
        };
        this.action_checkUserInfo(params).then((resp) => {
          let checkStatus = resp.data.result;
          this.firstcallback(checkStatus);
          if (checkStatus == 0) {
            callback(new Error());
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
        callback(new Error('格式错误，密码仅支持汉字、字母、数字、"-"、"_"的组合'));
      } else if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length <= 5) {
        callback(new Error("密码至少为6位数"));
      } else if (value.length >= 17) {
        callback(new Error("密码最多为16位数"));
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
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    /* 注册验证码验证 */
    var validateCaptcha = (rule, value, callback) => {
      var inputCode = value.toUpperCase();
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (inputCode == 1) {
        callback();
      } else if (inputCode != this.code) {
        callback(new Error("验证码输入错误！!"));
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
        callback(new Error("请输入手机验证码"));
      } else if (value != this.cbSendNum) {
        callback(new Error("验证码错误"));
      } else {
        callback();
      }
    };

    /* 手机号格式验证 */
    var validateMobile = (rule, value, callback) => {
      if (value === "") {
        this.cheStatus = 2;
        callback(new Error("请输入手机号"));
      } else if (value != value.match(/^[1][3,4,5,6,7,8,9][0-9]{9}$/)) {
        this.cheStatus = 2;
        callback(new Error("请输入正确的手机号"));
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
          callback(new Error());
        } else {
          callback();
        }
      } else {
        if (this.ruleFormM.sendNum == "") {
          callback(new Error());
        }
        callback();
      }
    };


    return {
      step: 1,
      isBindMail: true,
      isMailsend: false,
      code: "",
      cheStatus: "2",
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
        Email: [{ validator: ValidateRules.validateEmail, trigger: "blur" }]
      },
    };
  },

  computed: {},

  created () { },

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
          message: "请输入手机号"
        });
      } else if (mobileNum != mobileNum.match(/^[1][3,4,5,6,7,8,9][0-9]{9}$/)) {

      } else {
        var params = {
          mobileNum: mobileNum,
        };
        let loading = this.$loading({ text: "验证码发送中..." });
        this.action_sendMobileNum(params).then((resp) => {
          let sendStatus = resp.data.result;
          let sendNum = resp.data.data;
          this.MobileCallback.cb(sendStatus, sendNum);
          loading.close();
        }).catch((err) => {
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
          let loading = this.$loading({ text: "验证码发送中..." });
          this.antion_register_byMobile(params).then((resp) => {
            let MStatus = resp.data.result;
            this.Mcallback(MStatus, resp);
            loading.close();
          }).catch((err) => {
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
          message: "注册失败," + response.data.error.errorMsg
        });
      } else {
        this.toLogin();
      }
    },
    toLogin () {
      this.$alert("手机号绑定成功", "恭喜", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: "3秒后返回登录界面"
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
      this.$refs.ruleFormE.validate(valid => {

        if (valid) {
          this.Email = this.ruleFormE.Email;
          var params = {
            loginName: this.loginName,
            checkPass: this.checkPass,
            email: this.Email,
          };
          /* 注册 */
          let loading = this.$loading({ text: "验证码发送中..." });
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
            message: "请求失败"
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
          message: "注册失败," + rep.data.error.errorMsg
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
      this.isBindMail = false;
    },
    showBindMail () {
      this.isBindMail = true;
    }
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
.register_02_bind_content_mail,
.register_02_bind_content_mobile {
  padding: 85px 0 0 60px;
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