<template>
	<div class="work_login_login">
		<el-form :model="member" :rules="loginRules" ref="member">
			<el-form-item label="邮 箱" prop="loginName">
				<el-input id="login_02-input-email" type="text" v-model="member.loginName" auto-complete="off" placeholder="请输入邮箱"></el-input>
			</el-form-item>
			<el-form-item label="密 码" prop="password">
				<el-input id="login_02-input-password" type="password" v-model="member.password" auto-complete="off" placeholder="请输入密码" @keyup.enter.native="submitLoginForm"></el-input>
			</el-form-item>
		</el-form>
		<div class="col_full nobottommargin">
			<el-button id="login_02-input-submit" type="primary" @click="submitLoginForm()" class="button nomargin">提交</el-button>
			<el-button id="login_02-input-to_forgetpassword" type="text" @click="backMain" class="fright">忘记密码?</el-button>
		</div>
	</div>
</template>
<script>
import { ValidateRules } from "@common";
import * as interfaces from "@work/login/common/interfaces.js";
import { mapActions } from "vuex";
import URL from "url";
import PROJECT_CONFIG from "projectConfig";

export default {
	name: "work_login_02_login",
	reused: true,
	props: ["namespace"],
	data () {
		return {
			PROJECT: null,
			member: {
				loginName: "",
				password: ""
			},
			loginRules: {
				loginName: [{ validator: ValidateRules.validateLogin, trigger: "blur" }],
				password: [{ validator: ValidateRules.validatePassWord, trigger: "blur" }]
			}
		};
	},
	mounted: function () {
		this.PROJECT = PROJECT_CONFIG[this.namespace].login.work_login_02;
	},
	methods: {
		...mapActions("login", {
			login: interfaces.ACTION_LOGIN,
		}),
		backMain () {
			//				window.location.href = "./index.html";
			$(".retrievePasswordBox").css("display", "block");
			$("#title-nav").css("display", "none");
			$("#content").css("display", "none");
		},
		submitLoginForm () {
			/* 登陆 */
			this.$refs.member.validate(valid => {
				if (valid) {
					this.login({ member: this.member }).then((rep) => {
						//如果data == ""的时候，为登录失败

						let datas = rep.data;
						if (!datas.data) {
							this.loginValid();
						} else if (datas.data.checkStatus == 0 || datas.data.checkStatus == "0") {
							this.$message({
								type: "error",
								message: "账号已被冻结，请联系管理员"
							});
						} else {
							let query = URL.parse(document.URL, true).query;
							let url = query["service"];
							if (url && url.indexOf("login.html") == -1) {
								window.location.href = url;
							} else {
								window.location.href = this.PROJECT.toMainPages;
							}
						}
					});
				}
			});
		},
		loginValid () {
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
		resetForm (formName) {
			this.$nextTick(function () {
				this.$refs[formName].resetFields();
			})
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

#code {
  width: 80px;
  font-family: Arial;
  font-style: italic;
  font-weight: bold;
  border: 0;
  letter-spacing: 2px;
  color: #33938d;
}
</style>
