<template>
   <section id="content">
    <div class="content-wrap">
      <div class="scoped_container clearfix">
        <div class="accordion accordion-lg divcenter nobottommargin clearfix" style="max-width: 550px;">
          <!-- 登陆 -->
          <div class="acctitle">
            <i class="acc-closed icon-lock3"></i>
            <i class="acc-open icon-unlock"></i>登 录</div>
            
              <div class="acc_content clearfix">
                <!-- 登陆接口组件 -->
                <work_login_01 :member="member" :login-success-callback="loginSuccessCallback" :namespace="namespace">
                  <template slot="content" slot-scope="props">
                    <el-form :model="member" :rules="loginRules" ref="member">
                      <el-form-item label="邮 箱" prop="loginName">
                        <el-input type="text" v-model="member.loginName" auto-complete="off" placeholder="请输入邮箱"></el-input>
                      </el-form-item>
                      <el-form-item label="密 码" prop="password">
                        <el-input type="password" v-model="member.password" auto-complete="off" placeholder="请输入密码"></el-input>
                      </el-form-item>
                    </el-form>
                    <div class="col_full nobottommargin">
                      <el-button type="primary" @click="submitLoginForm(props.login)" class="button nomargin" id="login-form-submit">提交</el-button>
                      <el-button type="text" @click="backMain" class="fright">忘记密码?</el-button>
                    </div>
                  </template>
                </work_login_01>
                <!-- END 登陆接口组件 -->
              </div>  
            <!-- END 登陆 -->

          <!-- 注册 -->
          <div class="acctitle">
            <i class="acc-closed icon-user4"></i>
            <i class="acc-open icon-ok-sign"></i>未注册? 创建账号</div>
            
          <div class="acc_content clearfix">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item label="邮 箱" prop="email">
                  <el-input type="text" v-model="ruleForm.email" auto-complete="off" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密 码" prop="pass">
                  <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="密码支持6-16位字符"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="请再次输入密码"></el-input>
                </el-form-item>

                <el-form-item label="验证码" prop="captcha">
                  <div class="captcha">
                    <el-input type="text" v-model="ruleForm.captcha" auto-complete="off" placeholder="请确输入验证码" id="input" style="width:150px;"></el-input>
                    <input type="button" id="code" @click="createCode()" />
                    <el-button type="text" @click="refresh">看不清楚</el-button>
                  </div>
                </el-form-item>
              </el-form>
              <div class="col_full nobottommargin">
                <el-button type="primary" @click="submitForm('ruleForm')" class="button nomargin">提交</el-button>
                <el-button @click="resetForm('ruleForm')" class="button nomargin">重置</el-button>
              </div>
          </div>
          <!-- END 注册 -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import PROJECT_CONFIG from "projectConfig";
export default {
  name: "components_login_content",
  reused: true,
  props: {
    namespace: {
      type: String,
      required: true
    }
  },
  mounted: function () {
    this.createCode();
    this.initConfig();
  },
  data () {
    let validateLogin = (rule, value, callback) => {
      if (value === " " || value === "") {
        callback(new Error("请输入邮箱"));
      } else if (value == 1) {
        // 开发账号
        callback();
      } else if (
        value !=
        value.match(
          /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        )
      ) {
        // 开发账号
        callback(new Error("请输入正确邮箱格式"));
      } else {
        callback();
      }
    };
    let validatePassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value == 1) {
        //开发密码
        callback();
      } else if (value.length <= 5 || value.length >= 17) {
        //开发密码
        callback(new Error("密码在6-16位字符"));
      } else {
        callback();
      }
    };
    let validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (
        value !=
        value.match(
          /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        )
      ) {
        callback(new Error("请输入正确邮箱格式"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      let i;
      let char;
      let badword;
      badword = ';|<>`&!*(~^)#?:"/$=\\' + "'";
      for (i = 0; i < value.length; i++) {
        char = value.charAt(i);
      }
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
    let validatePass3 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    let validateCaptcha = (rule, value, callback) => {
      let inputCode = value.toUpperCase();
      if (inputCode == 1) {
        callback();
      } else if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (inputCode != this.code) {
        this.$message({
          type: "warning",
          message: "验证码输入错误！"
        });
        value = "";
        this.code = "";
        this.createCode();
        return false;
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      projectConfig: null,
      code: "",
      member: {
        loginName: "",
        password: ""
      },
      ruleForm: {
        email: "",
        pass: "",
        checkPass: "",
        captcha: ""
      },
      loginRules: {
        loginName: [{ validator: validateLogin, trigger: "blur" }],
        password: [{ validator: validatePassWord, trigger: "blur" }]
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        pass: [{ validator: validatePass2, trigger: "blur" }],
        checkPass: [{ validator: validatePass3, trigger: "blur" }],
        captcha: [{ validator: validateCaptcha, trigger: "blur" }]
      }
    };
  },

  methods: {
    initConfig () {
      this.projectConfig =
        PROJECT_CONFIG[this.namespace].login.components_login_content;
    },
    backMain () {
      // this.$router.push("retrievePassword");
    },
    submitLoginForm (login) {
      /* 登陆 */
      this.$refs.member.validate(valid => {
        if (valid && login instanceof Function) {
          login();
        } else {
          return false;
        }
      });
    },
    loginSuccessCallback () {
      var url = document.referrer;
      if (this.projectConfig) {
        if (this.projectConfig["loginSuccessHref"]) {
          window.location.href = this.projectConfig["loginSuccessHref"];
        } else {
          let loginSuccessDontHrefPage = this.projectConfig["loginSuccessDontHrefPage"];
          if (loginSuccessDontHrefPage) {
            let dont = loginSuccessDontHrefPage["dont"];
            let to = loginSuccessDontHrefPage["to"];
            if (dont && to && dont instanceof Array) {
              for (let i = 0, len = dont.length; i < len; i++) {
                let htmlName = dont[i];
                if (url.indexOf(htmlName) >= 0) {
                  window.location.href = to;
                  return
                }
              }
            }
          } else {
            window.history.back();
          }
        }
      }
    },
    submitForm (ruleForm) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log("submit!");
          let url = type.API_CONFIG.baseURL;
          this.$axios
            .post(
            url +
            "/user/registerSys.do?loginName=" +
            this.ruleForm.email +
            "&passWord=" +
            this.ruleForm.checkPass
            )
            .then(
            response => {
              this.Idata = response.data;
              if (this.Idata.result == 1) {
                this.$message({
                  type: "success",
                  message: "注册成功,请登录"
                });
                window.setTimeout(function () {
                  window.location.href = "../login/login.html";
                }, 3000);
              } else if (this.Idata.result == 0) {
                this.$message({
                  type: "info",
                  message: "注册失败" + this.Idata.error.errorMsg
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
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$nextTick(function () {
        this.$refs[formName].resetFields();
      });
    },

    createCode () {
      this.code = '';
      let codeLength = 4;
      let checkCode = document.getElementById("code");
      let random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
      for (let i = 0; i < codeLength; i++) {
        let index = Math.floor(Math.random() * 36);
        this.code += random[index];
      }
      checkCode.value = this.code;
    },

    refresh () {
      this.code = "";
      this.createCode();
    }
  }
};
</script>
<style scoped>
.scoped_container {
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
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