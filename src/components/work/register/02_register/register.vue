<template>
	<div class="work_register_02">
		<!--:rules="rules"-->
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
			<el-form-item label="邮 箱" prop="email">
				<el-input id="register_02-input-email" type="text" v-model="ruleForm.email" auto-complete="off" placeholder="请输入邮箱"></el-input>
			</el-form-item>
			<el-form-item label="密 码" prop="pass">
				<el-input id="register_02-input-password" type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="密码支持6-16位字符,仅支持汉字、字母、数字、'-'、'_'的组合"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPass">
				<el-input id="register_02-input-password_2" type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="请再次输入密码"></el-input>
			</el-form-item>
			<el-form-item label="验证码" prop="captcha">
				<div class="captcha">
					<el-input id="register_02-input-validate" type="text" v-model="ruleForm.captcha" auto-complete="off" placeholder="请确输入验证码"  style="width:150px;" @keyup.enter.native="submitRegisterForm('ruleForm')"></el-input>
					<input id="register_02-input-code" type="button" class="createcode" @click="createCode()"/>
					<el-button id="register_02-input-update" type="text" @click="createCode">看不清楚</el-button>
				</div>
			</el-form-item>
		</el-form>
		<div class="col_full nobottommargin">
			<el-button id="register_02-input-submit" type="primary" @click="submitRegisterForm('ruleForm')" class="button nomargin">提交</el-button>
			<el-button id="register_02-input-reset" @click="resetForm('ruleForm')" class="button nomargin">重置</el-button>
		</div>
	</div>
	<!-- END 注册 -->
</template>
<script>
import { ValidateRules, CreateCode } from "@common";
import * as interfaces from "@work/register/common/interfaces.js";
import { mapActions } from "vuex";
import PROJECT_CONFIG from "projectConfig";
import URL from "url";

export default {
	name: "work_register_02",
	reused: true,
	props: ["namespace"],

	data () {
		var validatePass3 = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("请再次输入密码"));
			} else if (value !== this.ruleForm.pass) {
				callback(new Error("两次输入密码不一致!"));
			} else {
				callback();
			}
		};
		var validateCaptcha = (rule, value, callback) => {
			let inputCode = value.toUpperCase();
			let orignalCode = this.$el.querySelector(".createcode").value;
			if (inputCode == 1) {
				callback();
			}
			else if (value === "") {
				callback(new Error("请输入验证码"));
			} else if (inputCode != orignalCode) {
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
			ruleForm: {
				email: "",
				pass: "",
				checkPass: "",
				captcha: ""
			},
			rules: {
				email: [{ validator: ValidateRules.validateEmail, trigger: "blur" }],
				pass: [{ validator: ValidateRules.validatePass2, trigger: "blur" }],
				checkPass: [{ validator: validatePass3, trigger: "blur" }],
				captcha: [{ validator: validateCaptcha, trigger: "blur" }]
			}
		};
	},
	mounted: function () {
		this.createCode();
		this.PROJECT = PROJECT_CONFIG[this.namespace].register.work_register_02;
	},
	methods: {
		...mapActions("register", {
			register: interfaces.ACTION_REGISTER
		}),
		submitRegisterForm () {
			var obj = this;
			this.$refs.ruleForm.validate((valid) => {
				if (valid) {
					this.register({ loginName: this.ruleForm.email, password: this.ruleForm.checkPass })
						.then(response => {
							var _data = response.data;
							if (_data.result == 1) {
								this.$message({
									type: "success",
									message: "注册成功,请登录"
								});
								window.setTimeout(function () {
									window.location.href = obj.PROJECT.toLoginPages;
								}, 3000);
							} else if (_data.result == 0) {
								this.$message({
									type: "info",
									message: "注册失败" + _data.error.errorMsg
								});
							} else {
								this.$message({
									type: "info",
									message: "注册失败，请重试"
								});
							}
						},
						error => {
							console.log(error);
						}
						);
				}
			})
		},
		resetForm (formName) {
			this.$nextTick(function () {
				this.$refs[formName].resetFields();
			})
		},
		createCode () {
			this.$el.querySelector(".createcode").value = CreateCode();
		}
	}
};
</script>
<style scoped>
.captcha input {
  display: inline-block;
  border-radius: 3px;
  height: 36px;
}

.captcha .input1 {
  width: 150px;
}

#register_02-input-code {
  width: 80px;
  font-family: Arial;
  font-style: italic;
  font-weight: bold;
  border: 0;
  letter-spacing: 2px;
  color: #33938d;
}
</style>