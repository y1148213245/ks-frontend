<template>
  <div class="retrievePasswordBox" v-show="false">
    <div class="cent">
      <el-steps :space="120" :active="active" finish-status="success" align-center>
        <el-step title="输入邮箱"></el-step>
        <el-step title="填写邮箱验证码"></el-step>
        <el-step title="更改密码"></el-step>
        <el-step title="找回完成"></el-step>
      </el-steps>
      <div style="margin-top: 20px; height: 200px;" v-if="show">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
          <el-form-item label="邮 箱" prop="email">
            <el-input type="text" v-model="ruleForm.email" auto-complete="off" placeholder="请输入邮箱" style="display:inline-block;width:300px;" id="ffcs"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="captcha">
            <div class="captcha">
              <el-input type="text" v-model="ruleForm.captcha" auto-complete="off" placeholder="请确输入验证码" id="input1" style="width:150px;"></el-input>
              <input type="button" class="createcode" id="code1" />
              <el-button type="text" @click="createCode">看不清楚</el-button>
            </div>
          </el-form-item>
          <div class="col_full nobottommargin btnbox" >
            <el-button type="primary" @click="submitForm('ruleForm')" class="button nomargin">下一步</el-button>
          </div>
        </el-form>
      </div>
      <div style="margin-top: 20px; height: 200px;" v-if="show1">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
          <el-form-item label="邮箱验证码" prop="emailnum"  v-if="butt">
            <el-input type="text" v-model="ruleForm.emailnum" auto-complete="off" placeholder="请输入邮箱验证码" style="display:inline-block;width:300px;"></el-input>
          </el-form-item>

          <div class="col_full nobottommargin btnbox">
            <el-button type="primary" @click="submitForm1('ruleForm')" class="button nomargin" v-if="butt">提交（{{time}}）</el-button>
            <el-button  type="text" :disabled="true" class="button nomargin" v-show="!butt">验证码已失效，请重新验证</el-button>
          </div>
        </el-form>
      </div>
      <div style="margin-top: 20px; height: 200px;" v-if="show2">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
          <el-form-item label="请输入新密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入新密码"></el-input>
          </el-form-item>
          <el-form-item label="请确认新密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="请确认新密码"></el-input>
          </el-form-item>
          <div class="col_full nobottommargin btnbox">
            <el-button type="primary" @click="submitForm2('ruleForm')" class="button nomargin">提交</el-button>
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
	name: 'work_login_02_retrieve_password',
	reused: true,
	props: ['namespace'],
	mounted: function () {
		this.createCode();
		this.PROJECT = PROJECT_CONFIG[this.namespace].login.work_login_02.findPassword;
	},
	data () {
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
			time: 120,
			list: [{}],
			active: 0,
			show: true,
			show1: false,
			show2: false,
			butt: true,
			code: "",
			ruleForm: {
				email: "",
				captcha: "",
				emailnum: "",
				pass: "",
				checkPass: ""
			},
			//				ruleForm1: {
			//					emailnum: ""
			//				},
			//				ruleForm2: {
			//					pass: "",
			//					checkPass: ""
			//				},
			rules: {
				email: [{ validator: validateEmail, trigger: "blur" }],
				pass: [{ validator: validatePass, trigger: "blur" }],
				checkPass: [{ validator: validateCheckPass, trigger: "blur" }],
				captcha: [{ validator: validateCaptcha, trigger: "blur" }],
				emailnum: [{ validator: validateEmailnum, trigger: "blur" }]
			}
		};
	},
	methods: {
		submitForm (ruleForm) {
			this.$refs.ruleForm.validate(valid => {
				if (valid) {
					var params = {
						email: this.ruleForm.email,
						cb: this.findPasswordCallb
					};
					let loading = Vue.prototype.$loading({ text: "正在加载中..." });
					Get(this.PROJECT.findPasswordUrl + params.email).then(function (response) {
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
			});
		},
		findPasswordCallb (findStatus, findNum, rep) {
			this.findNum = findNum;
			if (findStatus == 1) {
				this.show = false;
				this.show1 = true;
				this.active = 1;
				this.$message({
					type: "success",
					message: "已发送验证码至您邮箱,请在2分钟内输入验证"
				});
				//this.times();
			} else {
				this.$message({
					type: "info",
					message: rep.data.error.errorMsg
				});
			}
		},
		submitForm1 (ruleForm) {
			this.$refs.ruleForm.validate(valid => {
				if (valid) {
					console.log("submit!");
					this.show1 = false;
					this.show2 = true;
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
			});
		},
		submitForm2 (ruleForm) {
			this.$refs.ruleForm.validate(valid => {
				if (valid) {
					var params = {
						email: this.ruleForm.email,
						checkPass: this.ruleForm.checkPass,
						cb: this.setPasswordCallb
					};
					Post(this.PROJECT.setPasswordUrl + params.email + '&password=' + params.checkPass).then(function (response) {
						let setStatus = response.data.result;
						params.cb(setStatus);
					});
					this.active = 3;
				} else {
					console.log("error submit!!");
					return false;
				}
			});
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

.retrievePasswordBox .captcha input1 {
  display: inline-block;
  border-radius: 3px;
  height: 36px;
}

.retrievePasswordBox .captcha .input1 {
  width: 150px;
}

.retrievePasswordBox #code1 {
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