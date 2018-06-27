<template>
	<div class="retrievePasswordBox">
		<div class="cent">
			<!-- 导航tab -->
			<el-tabs v-model="activeTab" @tab-click="changeTab">
				<!-- 邮箱找回密码 -->
				<el-tab-pane label="通过邮箱找回" name="email">
					<el-steps :space="120" :active="active" finish-status="success" align-center>
						<el-step title="输入邮箱"></el-step>
						<el-step title="填写邮箱验证码"></el-step>
						<el-step title="更改密码"></el-step>
						<el-step title="找回完成"></el-step>
					</el-steps>
					<!-- 发送邮箱验证码 -->
					<div style="margin-top: 20px; height: 200px;" v-if="showStep == 'sendEmeil'">
						<el-form :model="ruleForm" :rules="rules" ref="sendEmeil">
							<el-form-item label="邮 箱" prop="email">
								<el-input id="retrieve_02-input-email" type="text" v-model="ruleForm.email" auto-complete="off" placeholder="请输入邮箱" style="display:inline-block;width:300px;"></el-input>
							</el-form-item>
							<el-form-item label="验证码" prop="captcha">
								<div class="captcha">
									<el-input id="retrieve_02-input-validate" type="text" v-model="ruleForm.captcha" auto-complete="off" placeholder="请确输入验证码" style="width:150px;" @keyup.enter.native="submitForm('sendEmeil')"></el-input>
									<input id="retrieve_02-input-code" type="button" class="createcode" />
									<el-button id="retrieve_02-input-update" type="text" @click="createCode">看不清楚</el-button>
								</div>
							</el-form-item>
							<div class="col_full nobottommargin btnbox">
								<el-button type="primary" @click="submitForm('sendEmeil')" class="button nomargin">下一步</el-button>
							</div>
						</el-form>
					</div>
					<!-- 验证邮箱验证码 -->
					<div style="margin-top: 20px; height: 200px;" v-if="showStep == 'validEmail'">
						<el-form :model="ruleForm" :rules="rules" ref="validEmail">
							<el-form-item label="邮箱验证码" prop="emailnum" v-if="butt">
								<el-input id="retrieve_02-input-email_validate" type="text" v-model="ruleForm.emailnum" auto-complete="off" placeholder="请输入邮箱验证码" style="display:inline-block;width:300px;"></el-input>
							</el-form-item>

							<div class="col_full nobottommargin btnbox">
								<el-button id="retrieve_02-input-submit" type="primary" @click="submitForm('validEmail')" class="button nomargin" v-if="butt">提交（{{time}}）</el-button>
								<el-button id="retrieve_02-input-reset" type="text" :disabled="true" class="button nomargin" v-show="!butt">验证码已失效，请重新验证</el-button>
							</div>
						</el-form>
					</div>
				</el-tab-pane>

				<!-- 手机找回密码 -->
				<el-tab-pane label="通过手机找回" name="mobile">
					<el-steps :space="120" :active="mobileStepsActive" finish-status="success" align-center>
						<el-step title="手机验证"></el-step>
						<el-step title="更改密码"></el-step>
						<el-step title="找回完成"></el-step>
					</el-steps>
					<!-- 发送验证码验证手机 -->
					<div style="margin-top: 20px; height: 200px;">
						<el-form :model="ruleForm" :rules="rules" ref="validMobile">
							<el-form-item label="手 机" prop="mobile">
								<el-input id="retrieve_02-input-email" type="text" v-model="ruleForm.mobile" auto-complete="off" placeholder="请输入手机号" style="display:inline-block;width:220px;"></el-input>
								<el-button type="primary" size="medium" @click="submitForm('validMobile')" class="button nomargin">发送验证码</el-button>
							</el-form-item>
							<el-form-item label="验证码" prop="mobilecCaptcha">
								<div class="captcha">
									<el-input id="retrieve_02-input-validate" type="text" v-model="ruleForm.mobilecCaptcha" auto-complete="off" placeholder="请确输入验证码" style="width:150px;" @keyup.enter.native="submitForm('validMobile')"></el-input>
								</div>
							</el-form-item>
							<div class="col_full nobottommargin btnbox">
								<el-button type="primary" @click="submitForm('sendEmeil')" class="button nomargin">下一步</el-button>
							</div>
						</el-form>
					</div>
				</el-tab-pane>
			</el-tabs>

			<!-- 修改密码 -->
			<div style="margin-top: 20px; height: 200px;" v-if="showStep == 'changePassword'">
				<el-form :model="ruleForm" :rules="rules" ref="changePassword">
					<el-form-item label="请输入新密码" prop="pass">
						<el-input id="retrieve_02-input-password" type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入新密码"></el-input>
					</el-form-item>
					<el-form-item label="请确认新密码" prop="checkPass">
						<el-input id="retrieve_02-input-password_2" type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="请确认新密码" @keyup.enter.native="submitForm('changePassword')"></el-input>
					</el-form-item>
					<div class="col_full nobottommargin btnbox">
						<el-button type="primary" @click="submitForm('changePassword')" class="button nomargin">提交</el-button>
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
		this.PROJECT = PROJECT_CONFIG[this.namespace].findPassword.work_findpassword_01;
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
				callback(new Error("请输入邮箱"));
			} else if (
				value !=
				value.match(
					/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
				)
			) {
				callback(new Error("邮箱格式不正确"));
			} else {
				callback();
			}
		};
		var validateEmailnum = (rule, value, callback) => {
			let inputCode = value.toUpperCase();
			if (value === "") {
				callback(new Error("请输入邮箱验证码"));
			} else if (inputCode != this.findNum) {
				this.$message({
					type: "warning",
					message: "验证码输入错误！"
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
				callback(new Error('格式错误，密码仅支持汉字、字母、数字、"-"、"_"的组合'));
			} else if (value === "") {
				callback(new Error("请输入密码"));
			} else if (value.length <= 5) {
				callback(new Error("密码至少为6位数"));
			} else if (value.length >= 17) {
				callback(new Error("密码最多为16位数"));
			} else {
				if (obj.ruleForm.checkPass !== "") {
					obj.$refs.ruleForm.validateField("checkPass");
				}
				callback();
			}
		};
		var validateCheckPass = (rule, value, callback) => {
			var obj = this;
			if (value === "") {
				callback(new Error("请再次输入密码"));
			} else if (value !== obj.ruleForm.pass) {
				callback(new Error("两次输入密码不一致!"));
			} else {
				callback();
			}
		};
		var validateCaptcha = (rule, value, callback) => {
			let inputCode = value.toUpperCase();
			let orignalCode = this.$el.querySelector(".createcode").value;
			if (value === "") {
				callback(new Error("请输入验证码"));
			} else if (inputCode != orignalCode && !(isTest && inputCode == 1)) {
				this.$message({
					type: "warning",
					message: "验证码输入错误！"
				});
				this.createCode();
				return false;
			} else {
				callback();
			}
		};
		return {
			PROJECT: null,
			activeTab: 'email',
			time: 120,
			list: [{}],
			active: 0,
			mobileStepsActive: 0,
			showStep: 'sendEmeil',/*显示页面: sendEmeil发送邮箱验证码,validEmail验证邮箱验证码,changePassword修改密码 */
			butt: true,
			code: "",
			ruleForm: {
				email: "",
				captcha: "",
				emailnum: "",
				pass: "",
				checkPass: "",
				mobile: '',
				mobilecCaptcha: ''
			},
			rules: {
				email: [{ validator: validateEmail, trigger: "blur" }],
				pass: [{ validator: validatePass, trigger: "blur" }],
				checkPass: [{ validator: validateCheckPass, trigger: "blur" }],
				captcha: [{ validator: validateCaptcha, trigger: "blur" }],
				emailnum: [{ validator: validateEmailnum, trigger: "blur" }],
				mobile: [{ validator: ValidateRules.mobileCheck, trigger: "blur" }]
			}
		};
	},
	methods: {
		changeTab () {

		},
		/* 提交 */
		submitForm (ruleForm) {
			this.$refs[ruleForm].validate(valid => {
				switch (ruleForm) {
					case 'sendEmeil': {
						if (valid) {
							var params = {
								email: this.ruleForm.email,
								cb: this.findPasswordCallb
							};
							let loading = Vue.prototype.$loading({ text: "正在加载中..." });
							Get(CONFIG.BASE_URL + this.PROJECT.findPasswordUrl + params.email).then(function (response) {
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
							this.showStep = 'changePassword'
							this.active = 2;
							this.$message({
								type: "success",
								message: "验证码输入正确，请重新设置密码"
							});
						} else {
							this.$message({
								type: "error",
								message: "验证码输入错误，请重试"
							});
							console.log("error submit!!");
							return false;
						}
						break;
					}
					case 'changePassword': {
						if (valid) {
							var params = {
								email: this.ruleForm.email,
								checkPass: this.ruleForm.checkPass,
								cb: this.setPasswordCallb
							};
							Post(CONFIG.BASE_URL + this.PROJECT.setPasswordUrl + params.email + '&password=' + params.checkPass).then(function (response) {
								let setStatus = response.data.result;
								params.cb(setStatus);
							});
							this.active = 3;
						} else {
							console.log("error submit!!");
							return false;
						}
					}
					case 'validMobile': {
						if (valid) {
							this.checkMobile().then(resp=>{
								console.log(resp.data);
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
			if (this.PROJECT.hasOwnProperty('checkMobileUrl')) {
				url = this.PROJECT.checkMobileUrl;
			} else {
				url = 'user/checkExistMember.do'
			}

			let params = {
				checkText: this.ruleForm.mobile
			}
			return Get(CONFIG.BASE_URL + url, { params })

		},
		findPasswordCallb (findStatus, findNum, rep) {
			this.findNum = findNum;
			if (findStatus == 1) {
				this.showStep = 'validEmail'
				this.active = 1;
				this.$message({
					type: "success",
					message: "已发送验证码至您邮箱,请在2分钟内输入验证"
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
				this.active = 4;
				this.open();
			} else {
				console.log("error submit!!");
				return false;
			}
		},
		open () {
			var obj = this;
			this.$alert("密码重置成功", "恭喜", {
				confirmButtonText: "确定",
				callback: action => {
					this.$message({
						type: "info",
						message: "3秒后返回登录界面"
					});
					window.setTimeout(function () {
						window.location.href = obj.PROJECT.href;
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