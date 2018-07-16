<template>
	<div class="retrievePasswordBox">
		<div class="cent">
			<!-- 导航tab -->
			<el-tabs v-model="activeTab" @tab-click="changeTab">
				<!-- 邮箱找回密码 -->
				<el-tab-pane :label="getStaticText('findByEmail') ? getStaticText('findByEmail') : '通过邮箱找回'" name="email">
					<el-steps :space="120" :active="active" finish-status="success" align-center>
						<el-step :title="getStaticText('inputEmail') ? getStaticText('inputEmail') : '输入邮箱'"></el-step>
						<el-step :title="getStaticText('inputEmailVerifiCode') ? getStaticText('inputEmailVerifiCode') : '填写邮箱验证码'"></el-step>
						<el-step :title="getStaticText('updatePwd') ? getStaticText('updatePwd') : '更改密码'"></el-step>
						<el-step :title="getStaticText('findSuccess') ? getStaticText('findSuccess') : '找回完成'"></el-step>
					</el-steps>
					<!-- 发送邮箱验证码 -->
					<div style="margin-top: 20px; height: 200px;" v-if="showStep == 'sendEmeil'">
						<el-form :model="ruleForm" :rules="rules" ref="sendEmeil">
							<!-- 邮箱 -->
							<el-form-item v-if="!getShowEmailPostfix()" :label="getStaticText('email') ? getStaticText('email') : '邮箱'" prop="email">
								<el-input id="retrieve_02-input-email" type="text" v-model="ruleForm.email" auto-complete="off" :placeholder="getStaticText('pleaseInputEmail') ? getStaticText('pleaseInputEmail') : '请输入邮箱'" style="display:inline-block;width:300px;"></el-input>
							</el-form-item>
							<!-- 带选择后缀的邮箱 -->
							<el-form-item v-if="getShowEmailPostfix()" :label="getStaticText('email') ? getStaticText('email') : '邮箱'" prop="emailSubfix">
								
								<el-input class="retrievePasswordBox_subfix_email_input" type="text" v-model="ruleForm.emailSubfix" :placeholder="getStaticText('inputEmailInfo') ? getStaticText('inputEmailInfo') : '请输入邮箱'"></el-input>
								@
								<el-select class="retrievePasswordBox_postfix_email_select" v-model="ruleForm.emailPostfix"  :placeholder="getStaticText('postFixEmail') ? getStaticText('postFixEmail') : '邮箱'">
									<el-option v-for="(item,index) in GLOBLE_CONFIG.EMAIL_CONFIG.postfix" :key="index" :label="item" :value="item">
									</el-option>
								</el-select>

							</el-form-item>
							<!-- 验证码 -->
							<el-form-item :label="getStaticText('verifiCode') ? getStaticText('verifiCode') : '验证码'" prop="captcha">
								<div class="captcha">
									<el-input id="retrieve_02-input-validate" type="text" v-model="ruleForm.captcha" auto-complete="off" :placeholder="getStaticText('pleaseInputVeirifiCode') ? getStaticText('pleaseInputVeirifiCode') : '请输入验证码'" style="width:150px;" @keyup.enter.native="submitForm('sendEmeil')"></el-input>
									<input id="retrieve_02-input-code" type="button" class="createcode" />
									<el-button id="retrieve_02-input-update" type="text" @click="createCode">{{getStaticText('canNotSeeClearly') ? getStaticText('canNotSeeClearly') : '看不清楚'}}</el-button>
								</div>
							</el-form-item>

							<div class="col_full nobottommargin btnbox">
								<el-button id="retrieve_02-input-next" type="primary" @click="submitForm('sendEmeil')" class="button nomargin">{{getStaticText('nextStep') ? getStaticText('nextStep') : '下一步'}}</el-button>
							</div>
						</el-form>
					</div>
					<!-- 验证邮箱验证码 -->
					<div style="margin-top: 20px; height: 200px;" v-if="showStep == 'validEmail'">
						<el-form :model="ruleForm" :rules="rules" ref="validEmail">
							<el-form-item :label="getStaticText('emailVerifiCode') ? getStaticText('emailVerifiCode') : '邮箱验证码'" prop="emailnum" v-if="butt">
								<el-input id="retrieve_02-input-email_validate" type="text" v-model="ruleForm.emailnum" auto-complete="off" :placeholder="getStaticText('pleaseInputEmailVerifiCode') ? getStaticText('pleaseInputEmailVerifiCode') : '请输入邮箱验证码'" style="display:inline-block;width:300px;"></el-input>
							</el-form-item>

							<div class="col_full nobottommargin btnbox">
								<el-button id="retrieve_02-input-submit" type="primary" @click="submitForm('validEmail')" class="button nomargin" v-if="butt">{{getStaticText('submit') ? getStaticText('submit') : '提交'}}（{{time}}）</el-button>
								<el-button id="retrieve_02-input-reset" type="text" :disabled="true" class="button nomargin" v-show="!butt">{{getStaticText('verifiCodeInvalidInfo') ? getStaticText('verifiCodeInvalidInfo') : '验证码已失效，请重新验证'}}</el-button>
							</div>
						</el-form>
					</div>
				</el-tab-pane>

				<!-- 手机找回密码 -->
				<el-tab-pane :label=" getStaticText('findByMobilePhone') ? getStaticText('findByMobilePhone') : '通过手机找回'" name="mobile">
					<el-steps :space="120" :active="mobileStepsActive" finish-status="success" align-center>
						<el-step :title="getStaticText('mobilePhoneVerify') ? getStaticText('mobilePhoneVerify') : '手机验证'"></el-step>
						<el-step :title="getStaticText('updatePwd') ? getStaticText('updatePwd') : '更改密码'"></el-step>
						<el-step :title="getStaticText('findSuccess') ? getStaticText('findSuccess') : '找回完成'"></el-step>
					</el-steps>
					<!-- 发送验证码验证手机 -->
					<div style="margin-top: 20px; height: 200px;" v-if="mobileShowStep == 'validMobile'">
						<el-form :model="ruleForm" :rules="rules" ref="validMobile">
							<el-form-item label="手 机" prop="mobile">
								<el-input id="retrieve_02-input-email" type="text" v-model="ruleForm.mobile" auto-complete="off" :placeholder="getStaticText('pleaseInputPhoneNum') ? getStaticText('pleaseInputPhoneNum') : '请输入手机号'" style="display:inline-block;width:200px;"></el-input>
								<el-button type="primary" size="medium" @click="submitForm('validMobile')" class="button nomargin" :loading="mobileButtonIsLoading" :disabled="!!sendMobileInterval">
									<template v-if="!sendMobileInterval">{{getStaticText('sendVerifiCode') ? getStaticText('sendVerifiCode') : "发送验证码"}}</template>
									<template v-if="sendMobileInterval">&nbsp;&nbsp;{{sendMobileInterval}}s&nbsp;&nbsp;</template>
								</el-button>

							</el-form-item>
							<el-form-item :label="getStaticText('verifiCode') ? getStaticText('verifiCode') : '验证码'" prop="mobilecCaptcha">
								<div class="captcha">
									<el-input id="retrieve_02-input-validate" type="text" v-model="ruleForm.mobilecCaptcha" auto-complete="off" :placeholder="getStaticText('pleaseInputVeirifiCode') ? getStaticText('pleaseInputVeirifiCode') : '请确输入验证码'" style="width:150px;" @keyup.enter.native="submitForm('validMobile')"></el-input>
								</div>
							</el-form-item>
							<div class="col_full nobottommargin btnbox">
								<el-button type="primary" @click="checkMobileCode" class="button nomargin">{{getStaticText('nextStep') ? getStaticText('nextStep') : "下一步"}}</el-button>
							</div>
						</el-form>
					</div>
				</el-tab-pane>
			</el-tabs>

			<!-- 修改密码 -->
			<div style="margin-top: 20px; height: 200px;" v-if="(activeTab == 'email' && showStep == 'changePassword') || (activeTab == 'mobile'  &&  mobileShowStep == 'changePassword')">
				<el-form :model="ruleForm" :rules="rules" ref="changePassword">
					<el-form-item v-bind:label="getStaticText('pleaseInputNewPwd') ? getStaticText('pleaseInputNewPwd') : '请输入新密码'" prop="pass">
						<el-input id="retrieve_02-input-password" type="password" v-model="ruleForm.pass" auto-complete="off" :placeholder="getStaticText('pleaseInputNewPwd') ? getStaticText('pleaseInputNewPwd') : '请输入新密码'"></el-input>
					</el-form-item>
					<el-form-item :label="getStaticText('pleaseConfirmNewPwd')? getStaticText('pleaseConfirmNewPwd') : '请确认新密码'" prop="checkPass">
						<el-input id="retrieve_02-input-password_2" type="password" v-model="ruleForm.checkPass" auto-complete="off" :placeholder="getStaticText('pleaseConfirmNewPwd') ? getStaticText('pleaseConfirmNewPwd') : '请确认新密码'" @keyup.enter.native="submitForm('changePassword')"></el-input>
					</el-form-item>
					<div class="col_full nobottommargin btnbox">
						<el-button id="retrieve_02-input-password_submit" type="primary" @click="submitForm('changePassword')" class="button nomargin">{{getStaticText('submit') ? getStaticText('submit') : '提交'}}</el-button>
					</div>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import { ValidateRules, CreateCode, Get, Post } from "@common";
import * as interfaces from "@work/login/common/interfaces.js";
import PROJECT_CONFIG from "projectConfig";
import { mapActions } from "vuex";


export default {
	name: 'work_findpassword_01',
	reused: true,
	props: ['namespace'],
	mounted: function () {
		this.createCode();
	},
	data () {

    var isTest;
		if (CONFIG.hasOwnProperty('IS_VALIDATE_TEST')) {
			isTest = CONFIG.IS_VALIDATE_TEST;
		} else {
			isTest = false;
		}

		var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.getStaticText('pleaseInputEmail') ? this.getStaticText('pleaseInputEmail') : '请输入邮箱'));
      } else if (
        value !=
        value.match(
          /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        )
      ) {
        callback(new Error(this.getStaticText('mailboxFormatIsIncorrect') ? this.getStaticText('mailboxFormatIsIncorrect') : '邮箱格式不正确'));
      } else {
        callback();
      }
    };
		var validateEmailnum = (rule, value, callback) => {
			let inputCode = value.toUpperCase();
			if (value === "") {
				callback(new Error(this.getStaticText('pleaseInputEmailVerifiCode') ? this.getStaticText('pleaseInputEmailVerifiCode') : '请输入邮箱验证码'));
			} else if (inputCode != this.findNum) {
				this.$message({
					type: "warning",
					message: this.getStaticText('verifiCodeError') ? this.getStaticText('verifiCodeError') : '验证码输入错误！'
				});
			} else {
				callback();
			}
		};
		var validatePass = (rule, value, callback) => {
			var obj = this;
			var i;
			var char;
			var badword;
			badword = ';|<>`&!*(~^)#?:"/$=\\' + "'";
			for (i = 0; i < value.length; i++) {
				char = value.charAt(i);			}
			if (badword.indexOf(char) >= 0) {
				callback(new Error(this.getStaticText('formatError') ? this.getStaticText('formatError') : "格式错误，密码仅支持汉字、字母、数字、\"-\"、\"_\"的组合"));
			} else if (value === "") {
				callback(new Error(this.getStaticText('pleaseInputPwd') ? this.getStaticText('pleaseInputPwd') : "请输入密码"));
			} else if (value.length <= 5) {
				callback(new Error(this.getStaticText('passwordAtLeastSixDigits') ? this.getStaticText('passwordAtLeastSixDigits') : "密码至少为6位数"));
			} else if (value.length >= 17) {
				callback(new Error(this.getStaticText('passwordCanBeUpToSixTeenDigits') ? this.getStaticText('passwordCanBeUpToSixTeenDigits') : "密码最多为16位数"));
			} else {
				if (obj.ruleForm.checkPass !== "") {
					obj.$refs['changePassword'].validateField("checkPass");
				}
				callback();
			}
		};
		var validateCheckPass = (rule, value, callback) => {
			var obj = this;
			if (value === "") {
				callback(new Error(this.getStaticText('pleaseInputPwdAgain') ? this.getStaticText('pleaseInputPwdAgain') : "请再次输入密码"));
			} else if (value !== obj.ruleForm.pass) {
				callback(new Error(this.getStaticText('twoPwdsDoNotMatch') ? this.getStaticText('twoPwdsDoNotMatch') : "两次输入密码不一致!"));
			} else {
				callback();
			}
		};
		var validateCaptcha = (rule, value, callback) => {
			let inputCode = value.toUpperCase();
			let orignalCode = this.$el.querySelector(".createcode").value;
			if (value === "") {
				callback(new Error(this.getStaticText('pleaseInputVeirifiCode') ? this.getStaticText('pleaseInputVeirifiCode') : "请输入验证码"));
			} else if (inputCode != orignalCode && !(isTest && inputCode == 1)) {
				this.$message({
					type: "warning",
					message: this.getStaticText('verifiCodeError') ? this.getStaticText('verifiCodeError') : "验证码输入错误！"
				});
				this.createCode();
				return false;
			} else {
				callback();
			}
		};
		var validateSubfixEmail = (rule, value, callback) => {
     
      if (value === "") {
        callback(new Error(this.getStaticText('pleaseInputEmail') ? this.getStaticText('pleaseInputEmail') : "请输入邮箱"));
      }else if(!/^[A-Za-z\d]+$/.test(value)){
        callback(new Error(this.getStaticText('inputEmailFormatError') ? this.getStaticText('inputEmailFormatError') : "请输入正确邮箱格式"))
      }else{
        callback();
      }
    }
		return {
			CONFIG: "",
			GLOBLE_CONFIG:"",
			activeTab: 'email',
			time: 120,
			list: [{}],
			active: 0,
			mobileStepsActive: 0,
			showStep: 'sendEmeil',/*显示页面: sendEmeil发送邮箱验证码,validEmail验证邮箱验证码,changePassword修改
			密码 */
			mobileShowStep: 'validMobile',
			butt: true,
			code: "",
			mobileCode: null,/* 手机验证码 */
			mobileButtonIsLoading: false,/* 手机验证码是否发送中 */
			sendMobileInterval: 0,/* 发送手机验证码倒计时 */
			ruleForm: {
				email: "",
				emailSubfix:"",/* 邮箱@之前的部分 */
				emailPostfix:"",/* 邮箱@之后的部分 */
				captcha: "",
				emailnum: "",
				pass: "",
				checkPass: "",
				mobile: '',
				mobilecCaptcha: ''/* 输入的手机验证码 */
			},
			rules: {
				email: [{ validator: validateEmail, trigger: "blur" }],
				pass: [{ validator: validatePass, trigger: "blur" }],
				checkPass: [{ validator: validateCheckPass, trigger: "blur" }],
				captcha: [{ validator: validateCaptcha, trigger: "blur" }],
				emailnum: [{ validator: validateEmailnum, trigger: "blur" }],
				mobile: [{ validator: ValidateRules.mobileCheck, trigger: "blur" }],
				emailSubfix:[{ validator: validateSubfixEmail, trigger: "blur" }]
			}
		};
	},
  created() {
		this.CONFIG = PROJECT_CONFIG[this.namespace].findPassword.work_findpassword_01;
		this.GLOBLE_CONFIG = CONFIG;

		this.getShowEmailPostfix() ? this.ruleForm.emailPostfix = CONFIG.EMAIL_CONFIG.postfix[0] : '';
  },
	methods: {
		changeTab () {

		},
		/* 输入邮箱是否可选后缀 */
		getShowEmailPostfix () {
      
      let vconfig = CONFIG.EMAIL_CONFIG;
      if (vconfig && vconfig.showPostfix) {
        
        return true
      } else {
        return false
      }
    },
		getStaticText (text) {
			if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
				return this.CONFIG.staticText[text]
			} else {
				return false
			}
		},
		/* 提交 */
		submitForm (ruleForm) {
			this.$refs[ruleForm].validate(valid => {
				switch (ruleForm) {
					case 'sendEmeil': {
						let email = '';
						this.getShowEmailPostfix() ? email = this.ruleForm.emailSubfix + '@' + this.ruleForm.emailPostfix : email = this.ruleForm.email;
						if (valid) {
							var params = {
								email: email,
								cb: this.findPasswordCallb
							};
							let loading = Vue.prototype.$loading({ text: (this.getStaticText('loading') ? this.getStaticText('loading') : '正在加载中...')});
							Get(CONFIG.BASE_URL + this.CONFIG.findPasswordUrl + params.email).then(function (response) {
								let findStatus = response.data.result;
								let findNum = response.data.data;
								params.cb(findStatus, findNum, response);
								loading.close();
							})
							console.log("submit!");
						} else {
							console.log("error submit!!");
							return false;
						}
						break;
					}
					case 'validEmail': {
						if (valid) {
							console.log("submit!");
							this.ruleForm.pass = '';
							this.ruleForm.checkPass = '';
							this.showStep = 'changePassword'
							this.active = 2;
							this.$message({
								type: "success",
								message: this.getStaticText('verifiCodeCorrectInfoAndInputNewPwd') ? this.getStaticText('verifiCodeCorrectInfoAndInputNewPwd') : "验证码输入正确，请重新设置密码"
							});
						} else {
							this.$message({
								type: "error",
								message: this.getStaticText('verifiCodeIncorrectInfoAndRetry') ? this.getStaticText('verifiCodeIncorrectInfoAndRetry') : "验证码输入错误，请重试"
							});
							console.log("error submit!!");
							return false;
						}
						break;
					}
					case 'changePassword': {
						if (valid) {
							if (this.activeTab == 'email') {
								var params = {
									email: this.ruleForm.email,
									checkPass: this.ruleForm.checkPass,
									cb: this.setPasswordCallb
								};
								Post(CONFIG.BASE_URL + this.CONFIG.setPasswordUrl + params.email + '&password=' + params.checkPass).then(function (response) {
									let setStatus = response.data.result;
									params.cb(setStatus);
								});
								this.active = 3;
							} else if (this.activeTab == 'mobile') {
								let url;
								if (this.CONFIG.hasOwnProperty('setPasswordByMobileUrl')) {
									url = this.CONFIG.setPasswordByMobileUrl;
								} else {
									url = 'user/findPasswordByMobile.do';
								}
								var params = {
									mobileNum: this.ruleForm.mobile,
									passWord: this.ruleForm.checkPass,
									code: this.ruleForm.mobilecCaptcha
								}
								Get(CONFIG.BASE_URL + url, { params }).then(response => {
									let setStatus = response.data.result;
									this.setPasswordCallb(setStatus);
								});
							}

						} else {
							console.log("error submit!!");
							return false;
						}
						break;
					}
					case 'validMobile': {
						if (valid) {
							this.checkMobile().then(resp => {
								console.log(resp.data);
								if (resp.data.result == 1) {
									this.mobileButtonIsLoading = true;
									this.sendMobile().then(resp => {
										if (resp.data.result == 1) {
											this.$message({
												type: 'success',
												message: this.getStaticText('sendSuccess') ? this.getStaticText('sendSuccess') : '发送成功'
											})
											this.mobileCode = resp.data.data;
											let _this = this;
											_this.sendMobileInterval = 60
											let timer = setInterval(() => {
												if (_this.sendMobileInterval - 1 >= 0) {
													_this.sendMobileInterval--;
												} else {
													clearInterval(timer)
												}
											}, 1000)

										} else {
											this.$message.error(this.getStaticText('internetTimeOut') ? this.getStaticText('internetTimeOut') : '网络超时')
										}
										this.mobileButtonIsLoading = false
									}).catch(error => {
										this.$message.error(this.getStaticText('internetTimeOut') ? this.getStaticText('internetTimeOut') : '网络超时')
										this.mobileButtonIsLoading = false
									})
								} else {
									this.$message.error(resp.data.error.errorMsg)
								}
							})
						}

						break;
					}

					default:
						break;
				}
			});
		},
		/* 验证手机号 */
		checkMobile () {
			let url;
			this.CONFIG.hasOwnProperty('checkMobileUrl') ? url = this.CONFIG.checkMobileUrl : url = 'user/checkExistMember.do'

			let params = {
				checkText: this.ruleForm.mobile
			}
			return Get(CONFIG.BASE_URL + url, { params })

		},
		/* 发送验证码 */
		sendMobile () {
			let url;
			this.CONFIG.hasOwnProperty('sendMobileUrl') ? url = this.CONFIG.sendMobileUrl : url = 'user/sendMobileMessage.do'

			let params = {
				mobileNum: this.ruleForm.mobile
			}
			return Get(CONFIG.BASE_URL + url, { params })
		},
		/* 验证手机验证码 */
		checkMobileCode () {
			if (this.ruleForm.mobilecCaptcha == this.mobileCode) {
				this.mobileStepsActive = 1;
				this.ruleForm.pass = '';
				this.ruleForm.checkPass = '';
				this.mobileShowStep = 'changePassword';

			} else {
				this.$message.error(this.getStaticText('verifiCodeError') ? this.getStaticText('verifiCodeError') : '验证码输入错误');
			}
		},
		findPasswordCallb (findStatus, findNum, rep) {
			this.findNum = findNum;
			if (findStatus == 1) {
				this.showStep = 'validEmail'
				this.active = 1;
				this.$message({
					type: "success",
					message: this.getStaticText('verifiCodeHasSentToYourEmailAndVerifyQuickly') ? this.getStaticText('verifiCodeHasSentToYourEmailAndVerifyQuickly') : "已发送验证码至您邮箱,请在2分钟内输入验证"
				});
				this.times();
			} else {
				this.$message({
					type: "info",
					message: rep.data.error.errorMsg
				});
			}
		},
		setPasswordCallb (setStatus) {
			if (setStatus == 1) {
				if (this.activeTab == 'email') {
					this.active = 4;
				} else if (this.activeTab == 'mobile') {
					this.mobileStepsActive = 3;
				}
				this.open();
			} else {
				console.log("error submit!!");
				this.$message.error(this.getStaticText('resetFailed') ? this.getStaticText('resetFailed') : '重置失败')
				return false;
			}
		},
		open () {
			var obj = this;
			this.$alert(this.getStaticText('pwdResetSuccess') ? this.getStaticText('pwdResetSuccess') : "密码重置成功", this.getStaticText('congratulations') ? this.getStaticText('congratulations') : "恭喜", {
				confirmButtonText: this.getStaticText('yes') ? this.getStaticText('yes') : "确定",
				callback: action => {
					this.$message({
						type: "info",
						message: this.getStaticText('returnToLoginAfterThreeSeconds') ? this.getStaticText('returnToLoginAfterThreeSeconds') : "3秒后返回登录界面"
					});
					window.setTimeout(function () {
						window.location.href = obj.CONFIG.href;
					}, 3000);
				}
			});
		},
		times () {
			var self = this;
			var countTime = 120;
			setInterval(function () {
				self.time = countTime;
				Vue.set([self.time], "time", countTime);
				countTime--;
				if (countTime <= 0) {
					self.butt = false;
					countTime = 0;
				}
			}, 1000);
		},
		createCode () {
			this.$el.querySelector(".createcode").value = CreateCode();
		},

	}
}
</script>

<style>
.retrievePasswordBox {
  height: 600px;
  position: relative;
}
.retrievePasswordBox .el-tabs__header {
  margin: 15px 0 35px 0;
}
.retrievePasswordBox .cent {
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.retrievePasswordBox .captcha .retrieve_02-input-validate {
  display: inline-block;
  border-radius: 3px;
  height: 36px;
}

.retrievePasswordBox .captcha .input1 {
  width: 150px;
}
.retrievePasswordBox_subfix_email_input{
	width: 200px;
}
.retrievePasswordBox_postfix_email_select{
	width: 116px;
}
.retrievePasswordBox #retrieve_02-input-code {
  width: 80px;
  font-family: Arial;
  font-style: italic;
  font-weight: bold;
  border: 0;
  letter-spacing: 2px;
  color: #33938d;
}
.retrievePasswordBox .btnbox {
  text-align: center;
}
.retrievePasswordBox .transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #20a0ff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.retrievePasswordBox .el-step__icon.is-text {
  height: 28px;
  width: 28px;
}
.retrievePasswordBox .box .el-form {
  margin-left: 60px;
}
</style>
