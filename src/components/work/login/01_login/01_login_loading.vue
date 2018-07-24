<!-- 第三方登陆判断 -->
<template>
 <div class="work_login_01">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="work_login_01-ruleForm" v-if="status == 1 ">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">  
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">绑定</el-button>
        <el-button v-if="getItemIsShow('dontBind')" type="warning" @click="bind('0')">不绑定直接登陆</el-button>
      </el-form-item>
    </el-form>
    <div class="work_login_01-result" v-if="status == 2 ">
        <span v-text="second"></span>s后自动登录
    </div>
 </div>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import * as interfaces from '@work/register/common/interfaces.js'
import { mapActions } from 'vuex'
import { Post } from '@common'
export default {
  name: 'work_login_01',
  reused: true,
  props: {
    namespace: String,
  },
  data () {

    let validateloginName = (rule, value, callback, regStatus) => {
      var params = {
        text: this.ruleForm.username,
        type: "1",
      };
      this.action_checkUserInfo(params).then((resp) => {
        let checkStatus = resp.data.result;

        if (checkStatus == 1) {
          callback(new Error('用户不存在'));
        } else {
          callback();
        }
      }); /* 检查用户信息 */
    }
    return {
      CONFIG: null,
      status: '',/* 第三方账号状态 1待绑定 2已注册 */
      query: '',/* 地址栏参数对象 */
      second: 3,/* 返回登陆前的页面的倒计时 */
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { validator: validateloginName, trigger: "blur" }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      }
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.query = URL.parse(document.URL, true).query;
    this.status = this.query.status
    
  },

  mounted () { 
    let token = this.query.t;
    if (token && this.status==2) {
       this.toLogin(token)
    } 
  },

  methods: {
    ...mapActions('register', {
      action_checkUserInfo: interfaces.ACTION_CHECK_USERINFO,
      action_bindThirdparty: interfaces.ACTION_BIND_THIRDPARTY
    }),
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].login.work_login_01
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.bind('1')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    bind (type) {
      let params = {
        loginName: this.ruleForm.username,
        passWord: this.ruleForm.password,
        identifyId: this.query.id,
        nickName: this.query.nickName,
        picture: this.query.picture,
        type: type,/* 类型:0未绑定 1绑定 */
        loginType: this.query.loginType/* 登录类型QQ,WeiXin,WeiBo */
      }
      this.action_bindThirdparty(params).then(resp => {
        
        let result = resp.data.result;
        let error = resp.data.error;
        let token = resp.data.token;

        if (result == '1') {
          this.toLogin(token)
        } else {
          if (error) {
            let msg = error.errorMsg;
            this.$message({
              type: "warning",
              message: msg
            });
          }
        }
        console.log(resp.data)
      })
    },
    toLogin (token) {
      window.localStorage.setItem('token', token);
      let _this = this;
      let interval = setInterval(() => {
        _this.second--;
        if (_this.second < 1) {
          
          clearInterval(interval)
          let reffer = window.localStorage.getItem('loginReferr')
          window.localStorage.setItem('loginReferr','')
          window.location.href = reffer || './index.html';
        }
      }, 1000);
    },
    getItemIsShow(text){
      let config = this.CONFIG.showItem;
      if (config) {
        if (config.indexOf(text)>-1) {
          return true
        }else{
          return false
        }
      }else{
        return true
      }
    }
  }
}
</script>
<style>
</style>
