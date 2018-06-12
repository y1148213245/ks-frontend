<template>
<div class="mobile_box_for_app">
    <div class="cent">
        <el-steps  :active="active" finish-status="success" align-center>
            <el-step title="输邮箱"></el-step>
            <el-step title="验证码"></el-step>
            <el-step title="改密码"></el-step>
            <el-step title="已完成"></el-step>
        </el-steps>
        <div style="margin-top:  1.25em; height: 10em;"v-if="show">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
                <el-form-item label="邮 箱:" prop="email" style="margin-left:3em">
                    <el-input type="text" v-model="ruleForm.email" auto-complete="off" placeholder="请输入邮箱" style="display:inline-block;width:15em;"></el-input>
                </el-form-item>
                <el-form-item label="验证码:" prop="captcha"  style="margin-left:3em">
                    <div class="captcha">
                        <el-input type="text" v-model="ruleForm.captcha" auto-complete="off" id="input" placeholder="请输入验证码" style="width:10em;"></el-input>
                        <input type="button" id="code" @click="refresh"/>
                    </div>
                </el-form-item>
                <div class="col_full nobottommargin btnbox" >
                    <el-button type="primary" @click="submitForm('ruleForm')" class="button nomargin">下一步</el-button>
                </div>
            </el-form>
        </div>
        <div style="margin-top: 1.25em; height:  10em;" v-if="show1">
            <el-form :model="ruleForm1" :rules="rules" ref="ruleForm1" >
                <el-form-item label="邮箱验证码：" prop="emailnum" v-show="butt" style="margin-left:3em">
                    <el-input type="text" v-model="ruleForm1.emailnum" auto-complete="off" placeholder="请输入邮箱验证码" style="display:inline-block;width:12em;"></el-input>
                </el-form-item>
                
                <div class="col_full nobottommargin btnbox">
                    <el-button type="primary" @click="submitForm1('ruleForm1')" class="button nomargin" v-show="butt">提交（{{time}}）</el-button>
					<el-button  type="text" :disabled="true" class="button nomargin" v-show="!butt">验证码已失效，请重新验证</el-button>
                </div>
            </el-form>
        </div>
        <div style="margin-top:  1.25em; height:  10em;" v-if="show2">
            <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" >
                <el-form-item label="请输入新密码：" prop="pass" style="margin-left:3em">
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入新密码" style="display:inline-block;width:12.5em;"></el-input>
                </el-form-item>
                <el-form-item label="请确认新密码：" prop="checkPass" style="margin-left:3em">
                    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请确认新密码" style="display:inline-block;width:12.5em;"></el-input>
                </el-form-item>
                <div class="col_full nobottommargin btnbox">
                    <el-button type="primary" @click="submitForm2('ruleForm2')" class="button nomargin">提交</el-button>
                </div>
            </el-form>
        </div>
		<div style="margin-top:  1.25em; height:  10em;" v-if="show3">

        </div>
    </div>
   </div>
</template>
<script>
import Vue from "vue";
var count = 120;
export default {
  name: "mobile_retrieve_password",
  reused: true,
  props: {
    namespace: String
  },
  mounted: function() {
    this.createCode();
  },
  data() {
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
    var validateCaptcha = (rule, value, callback) => {
      let inputCode = value.toUpperCase();
       if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (inputCode != this.code && !(isTest && inputCode == 1)) {
        callback(new Error("验证码输入错误！!"));
        value = "";
        this.code = "";
        this.createCode();
        return false;
      } else {
        callback();
      }
    };
    var validateEmailnum = (rule, value, callback) => {
      let inputCode = value.toUpperCase();
      if (value === "") {
        callback(new Error("请输入邮箱验证码"));
      } else if (inputCode != this.findNum) {
        callback(new Error("验证码输入错误！!"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length <= 5) {
        callback(new Error("密码至少为6位数"));
      } else if (value.length >= 16) {
        callback(new Error("密码最多为16位数"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      time: count,
      list: [{}],
      active: 0,
      show: true,
      show1: false,
      show2: false,
      show3: false,
      butt: true,
      code: "",
      ruleForm: {
        email: "",
        captcha: ""
      },
      ruleForm1: {
        emailnum: ""
      },
      ruleForm2: {
        pass: "",
        checkPass: ""
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        captcha: [{ validator: validateCaptcha, trigger: "blur" }],
        emailnum: [{ validator: validateEmailnum, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validateCheckPass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(ruleForm) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          var params = {
            email: this.ruleForm.email,
            cb: this.findPasswordCallb
          };
          this.$store.dispatch("personalCenter/findPassword", params);
          console.log("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    findPasswordCallb(findStatus, findNum, rep) {
      this.findNum = findNum;
      if (findStatus == 1) {
        this.show = false;
        this.show1 = true;
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
    submitForm1(ruleForm1) {
      this.$refs.ruleForm1.validate(valid => {
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
    submitForm2(ruleForm2) {
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          var params = {
            email: this.ruleForm.email,
            checkPass: this.ruleForm2.checkPass,
            cb: this.setPasswordCallb
          };
          this.$store.dispatch("personalCenter/setPassword", params);
          this.active = 3;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    setPasswordCallb(setStatus) {
      if (setStatus == 1) {
        this.active = 4;
        this.open();
      } else {
        console.log("error submit!!");
        return false;
      }
    },
    open() {
      this.show2 = false;
      this.show3 = true;
      this.$message({
        type: "info",
        message: "修改成功，请返回登录界面"
      });
    },
    times() {
      var self = this;
      setInterval(function() {
        self.time = count;
        Vue.set([self.time], "time", count);
        count--;
        if (count <= 0) {
          count = 0;
          self.butt = false;
        }
      }, 1000);
    },
    createCode() {
      this.code = "";
      let codeLength = 4;
      let checkCode = document.getElementById("code");
      let random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      for (let i = 0; i < codeLength; i++) {
        let index = Math.floor(Math.random() * 36);
        this.code += random[index];
      }
      checkCode.value = this.code;
    },
    refresh() {
      this.code = "";
      this.createCode();
    }
  }
};
</script>

<style scoped>
.mobile_box_for_app {
  width: 100%;
  height: 43em;
  position: relative;
}
.mobile_box_for_app .button {
  margin-right: 2.12em;
}

.mobile_box_for_app .cent {
  width: 25em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mobile_box_for_app .captcha input {
  display: inline-block;
  border-radius: 0.1875em;
  height: 2.25em;
}

.mobile_box_for_app #code {
  width: 3.5rem;
  font-family: Arial;
  font-style: italic;
  font-weight: bold;
  border: 0;
  letter-spacing: 0.15em;
  color: #33938d;
}
.mobile_box_for_app .btnbox {
  text-align: center;
}
.mobile_box_for_app .transition-box {
  margin-bottom: 0.625em;
  width: 12.5em;
  height: 6.25em;
  border-radius: 0.3em;
  background-color: #20a0ff;
  text-align: center;
  color: #fff;
  padding: 2.5em 1.25em;
  box-sizing: border-box;
  margin-right: 1.25em;
}
</style>
