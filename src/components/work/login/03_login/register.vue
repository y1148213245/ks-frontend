<!--  -->
<template>
<section>
 <div class="zhuce" v-if="step==1">
    <div class="zhuce_name">
      <span class="mingcheng f16 color_c50 ml30">新用户注册</span>
    </div>
    <form id="register-form" name="register-form" class="zhuce_con" action="#" >
      <div class="zhuce_con_1" style="padding:50px 0 0 60px;">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="loginName" class="zhuce_con1_ymh mt30 ml23">
            <i class="yhm_01 mr10"></i><span class="yhm_02 f14 color_727 mr15">用户名:</span><el-input type="text"  v-model="ruleForm.loginName" placeholder="支持6~16位数字、字母、下划线"  style="width:235px;height:35px;"></el-input>
            <div v-show="this.cheStatus==0" class="el-form-item__error">很抱歉，用户名已存在</div>
            <div v-show="this.cheStatus==1" class="el-form-item__error" style="color:green" >恭喜您!可以使用</div>
            </el-form-item>
            <el-form-item prop="pass" class="zhuce_con2_szxmm mt30">
              <i class="szxmm_01 mr05"></i><span class="szxmm_02 f14 color_727 mr15">设置新密码:</span><el-input type="password" v-model="ruleForm.pass" placeholder="密码支持6-16位字符" style="width:235px;height:35px;"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass" class="zhuce_con3_qrmm mt30" style="margin-bottom:0px;">
             <i class="qrmm_01 mr18"></i><span class="qrmm_02 f14 color_727 mr15">确认密码:</span><el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" style="width:235px;height:35px;"></el-input>
            </el-form-item>
            <el-form-item prop="captcha" >
              <div class="zhuce_con_yzm mt30 ml23">
                <i class="yzm_01 mr08"></i>
                <span class="yzm_02 f14 color_727 mr15">验证码:</span>
                <el-input type="text" v-model="ruleForm.captcha" placeholder="请输入验证码" id="input"  style="width:117px;"></el-input>
                <input type="button" id="code" @click="createCode"/>
                <el-button type="text" @click="refresh">
                  <span class="yzm_04"></span>
                  <a href="javascript:void(0)"  class="color_c50" style="font-size:12px;">换一张</a>
                  <i class="yzm_05">刷新</i>
                </el-button>
              </div>
            </el-form-item>
          </el-form>
          <div class="col_full nobottommargin">
            <div class="ml23"><input type="button" class="zhuce_xyb f14 color_fff" value="下一步" @click="toNext"/></div>
          </div>
      </div>
    </form>
  </div>
  <!-- 第二步 -->
  <div class="bangding"  v-if="step==2">
		<div class="bangding_name color_515">
			<span class="f16 ml30 mr30 pl06 pr06" :class="{mingcheng_on:isBindMail}" @click="showBindMail">邮箱绑定</span>
      |<span class="f16  ml30 pl06 pr06"  :class="{mingcheng_on:!isBindMail}" @click="showBindPhone">手机绑定</span>
		</div>

		<div class="bangding_con">
			<div class="bangding_con_1" v-show="isBindMail && !isMailsend">
        <el-form :model="ruleFormE" :rules="rulesE" ref="ruleFormE" onkeydown="if(event.keyCode==13)return false;">
          <el-form-item prop="Email" >
            <div class="bangding_con_2_yx mt30"><i class="yx_01 mr05"></i><span
              class="yx_02 f14 color_727 mr30">邮箱:</span>
              <el-input type="text" v-model="ruleFormE.Email" placeholder="请输入邮箱 email@mail.com" style="width:230px;"
                        @keyup.enter.native="submitFormE($event,'ruleFormE')"></el-input>
            </div>
          </el-form-item>
          <el-button type="primary" @click="submitFormE('ruleFormE')" class="bangding_sj_xyb f14 color_fff lh11">立即注册</el-button>
        </el-form>
			</div>



			<div class="bangding_con_1" v-show="!isBindMail">
        <el-form :model="ruleFormM" :rules="rulesM" ref="ruleFormM">
          <el-form-item prop="mobileNum" >
          <div class="bangding_con_1_sj mt30"><i class="sj_01 mr05"></i><span class="sj_02 f14 color_727 mr15">手机号:</span>
          <el-input type="text" v-model="ruleFormM.mobileNum" placeholder="请输入手机号"  style="width:115px;height:35px;"></el-input>
          <div v-show="this.cheStatus==0" class="el-form-item__error">手机号已被绑定</div>
          <el-button @click="getCode(ruleFormM.mobileNum)" class="yzm_04 color_7e7" v-show="this.cheStatus!=0">获取验证码</el-button>
          </div>
          </el-form-item>
          <div class="bangding_con_1_yzm mt30">
            <el-form-item prop="sendNum"><i class="yzm_01 mr05"></i><span class="yzm_02 f14 color_727 mr15">验证码:</span>
          <el-input type="text" v-model="ruleFormM.sendNum" placeholder="请输入手机验证码"  style="width:115px;height:35px;"></el-input>
          </el-form-item>
          </div>
          <el-button type="primary" @click="submitFormM('ruleFormM')" class="bangding_sj_xyb f14 color_fff lh11">立即注册</el-button>  
        </el-form>
      
			</div>


			<div class="bangding_con" v-show="isMailsend && isBindMail">
				<div class="bangding_con_1" style="padding-left:0px;">
					<div class="zhuce_cg_con_wc mt30 mb20"></div>
          <div class="zhuce_cg_con_ts f18 color_727 mb35">您的邮箱将会收到一封<span class="color_c50">验证</span>邮件 <br/> 请登录你的邮箱查看
          </div>
				</div>
			</div>

    </div>
	</div>
  </section>
</template>

<script>
import { ValidateRules, CreateCode } from '@common';
import * as interfaces from '@work/login/common/interfaces.js';
import { mapActions } from 'vuex';
export default {
  name: 'work_login_03_register',
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
        }); /* 检查用户信息 */
        if (this.cheStatus == 0) {
          callback(new Error());
        } else {
          callback();
        }
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
    ...mapActions('login_02', {
      action_register: interfaces.ACTION_REGISTER_EMAIL,
      action_checkUserInfo: interfaces.ACTION_CHECK_USERINFO,
      action_sendMobileNum: interfaces.ACTION_SEND_MOBILE_NUM,
      antion_register_byMobile: interfaces.ACTION_REGISTER_MOBILE,
    })
    ,
    firstcallback (cheStatus) {
      this.cheStatus = cheStatus;
    },
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
    submitFormM (ruleFormM) {/* 绑定手机号注册 */
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
    submitFormE (e, ruleFormE) {/* 绑定邮箱注册 */
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
    createCode () {
      let checkCode = document.getElementById("code");
      this.code = CreateCode();
      checkCode.value = this.code;
    },

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
.lh11 {
  line-height: 11px;
}
</style>