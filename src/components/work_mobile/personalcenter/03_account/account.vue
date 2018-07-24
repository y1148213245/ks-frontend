/*
 * @Author: song
 * @Date: 2018-06-05 17:38:28
 * @Last Modified by: song
 * @Last Modified time: 2018-07-06 11:04:52
 * 个人资料
 */
 <template>
  <div class="work_mobile_personalcenter_03" v-loading="loading">

    <!-- 个人资料 -->
    <div class="work_mobile_personalcenter_03_info" v-if="showItem == 'default'">
      <van-cell-group class="work_mobile_personalcenter_03_cellgroup" v-if="getMember">
        <van-cell class="work_mobile_personalcenter_03_cell" :class="'work_mobile_personalcenter_03_' + nav.tag" v-for="(nav, index) in showLists" :key="index" :title="nav.title" :is-link="nav.hasLink" @click="enterEditModule(nav)">
          <!-- 头像在微信端不可更改，未设置头像用户显示默认头像，用第三方账号登录直接显示第三方账号头像 -->
          <div class="work_mobile_personalcenter_03_picturecon" v-if="nav.tag == 'picture'">
            <img v-if="JSON.stringify(getMember) != '{}' && getMember[nav.tag]" :src="getMember[nav.tag]" :alt="display.noPic || '暂无头像'" />
            <img v-if="JSON.stringify(getMember) != '{}' && !getMember[nav.tag]" :src="require('@static/img/people.jpg')" :alt="display.noPic || '暂无头像'" />
          </div>
          <div class="work_mobile_personalcenter_03_other" v-else>
            <span v-if="nav.tag == 'password'"></span>
            <span v-else> {{getMember[nav.tag] || display.noData || '暂无数据'}} </span>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <!-- END 个人资料 -->

    <!-- 修改昵称 -->
    <div class="work_mobile_personalcenter_03_editname" v-if="showItem == 'nickName'">
      <div class="work_mobile_personalcenter_03_editname_nickname">{{display.nickName || '昵称'}}</div>
      <div class="work_mobile_personalcenter_03_editname_con">
        <form action="">
          <input class="work_mobile_personalcenter_03_editname_name" @change="editUserInfo('nickName')" type="text" v-model="getMember.nickName" maxlength="10">
        </form>
        <i class="el-icon-close" @click="removeName(showItem)" v-if="getMember.nickName"></i>
        <!-- 文本框有内容时显示清除按钮 -->
      </div>
      <div v-if="!getMember.nickName" class="work_mobile_personalcenter_03_nonn">{{CONFIG.display.noNickname}}</div>
      <div class="work_mobile_personalcenter_03_savenn">
        <van-button size="normal" @click="editUserInfo('nickName')">{{display.save || '保存'}}</van-button>
      </div>

    </div>
    <!-- END 修改昵称 -->

    <!--修改邮箱-->
    <div class="work_mobile_personalcenter_03_editemail" v-if="showItem == 'email'">
      <div class="work_mobile_personalcenter_03_editemail_email" >{{display.email || '邮箱'}}</div>
      <div class="work_mobile_personalcenter_03_editemail_con">
        <el-form :rules="rules" ref="getMember" :model="getMember">
          <el-form-item prop="email">
            <el-input clearable class="work_mobile_personalcenter_03_editemail_content"  type="text" v-model="getMember.email"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="work_mobile_personalcenter_03_sendCode">
        <input type="text" v-model="checkCode"/>
        <van-button size="normal" @click="sendCode(getMember.email,'getMember',showItem)" v-show="!isSendEmailCode">{{display.sendCode || '发送验证码'}}</van-button>
        <van-button size="normal" @click="reSendCode(getMember.email,showItem)" v-show="isSendEmailCode">{{display.reSendCode || '重新发送'}}({{sendCodeTime}}{{CONFIG.display.timeUnit}})</van-button>
      </div>
      <div class="work_mobile_personalcenter_03_savenn">
        <van-button size="normal" @click="editUserInfo('email')">{{display.sure || '确定'}}</van-button>
      </div>
    </div>
    <!--END 修改邮箱-->

    <!--修改手机号-->
    <div class="work_mobile_personalcenter_03_editphone" v-if="showItem == 'mobileno'">
      <div class="work_mobile_personalcenter_03_editphone_phone" >{{display.mobileno || '手机号'}}</div>
      <div class="work_mobile_personalcenter_03_editphone_con">
        <el-form :rules="rules" ref="getMember" :model="getMember">
          <el-form-item prop="mobileno">
            <el-input clearable class="work_mobile_personalcenter_03_editphone_content" type="text" v-model.number="getMember.mobileno"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="work_mobile_personalcenter_03_sendCode">
        <input type="text" v-model="checkCode"/>
        <van-button size="normal" @click="sendCode(getMember.mobileno,'getMember',showItem)" v-show="!isSend">{{display.sendCode || '发送验证码'}}</van-button>
        <van-button size="normal" @click="reSendCode(getMember.mobileno,showItem)" v-show="isSend">{{display.reSendCode || '重新发送'}}({{sendCodeTime}}{{CONFIG.display.timeUnit}})</van-button>
      </div>
      <div class="work_mobile_personalcenter_03_savenn">
        <van-button size="normal" @click="editUserInfo('mobileno')">{{display.sure || '确定'}}</van-button>
      </div>
    </div>
    <!--END 修改手机号-->

    <!--修改密码-->
    <div class="work_mobile_personalcenter_03_editpassword" v-if="showItem == 'password'">
      <!--<div v-if="!getMember.password" class="work_mobile_personalcenter_03_nonn">{{CONFIG.display.noPassword}}</div>-->
      <div class="work_mobile_personalcenter_03_editpassword_con">
        <el-form :rules="rules" ref="passwordObj" :model="passwordObj">
          <el-form-item>
            <div class="work_mobile_personalcenter_03_editpassword_currentPwd">{{display.currentPwd || '当前密码'}}</div>
          </el-form-item>
          <el-form-item prop="oldpass">
            <input clearable class="work_mobile_personalcenter_03_editpassword_content" type="text" v-model="passwordObj.oldpass">
          </el-form-item>
          <el-form-item>
            <div class="work_mobile_personalcenter_03_editpassword_newPwd">{{display.newPwd || '新密码'}}</div>
          </el-form-item>
          <el-form-item prop="newpass">
            <el-input clearable class="work_mobile_personalcenter_03_editpassword_content_newpwd" type="text" v-model="passwordObj.newpass" v-if="isSeen"></el-input>
            <el-input clearable class="work_mobile_personalcenter_03_editpassword_content_newpwd" type="password" v-model="passwordObj.newpass" v-else></el-input>
          </el-form-item>
        </el-form>
        <img :src="isSeen?CONFIG.display.textSrc:CONFIG.display.passwordSrc" @click="changeType()">
      </div>
      <div class="work_mobile_personalcenter_03_savenn">
        <van-button size="normal" @click="editUserInfo('password','passwordObj')">{{display.sure || '确定'}}</van-button>
      </div>
    </div>
    <!--END 修改密码-->

    <!-- 修改签名 -->
    <div class="work_mobile_personalcenter_03_editintro" v-if="showItem == 'introduction'">
      <div class="work_mobile_personalcenter_03_editintro_intro">{{display.introduction || '签名'}}</div>
      <div class="work_mobile_personalcenter_03_editintro_con">
        <textarea class="work_mobile_personalcenter_03_editintro_textarea" :maxlength="display.maxNum" @change="editUserInfo('introduction')" v-model="getMember.introduction"></textarea>
        <span class="work_mobile_personalcenter_03_editintro_textarea_count">{{getMember.introduction.length}}/{{display.maxNum}}</span>
      </div>
      <div v-if="!getMember.introduction" class="work_mobile_personalcenter_03_nointro">{{CONFIG.display.noIntroduction}}</div>
      <div class="work_mobile_personalcenter_03_saveintro">
        <van-button size="normal" @click="editUserInfo('introduction')">{{display.save || '保存'}}</van-button>
      </div>
    </div>
    <!-- END 修改签名 -->

  </div>
</template>

 <script>
import Vue from "vue";
import { Get, Post } from "@common";
import { mapGetters } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import PROJECT_CONFIG from 'projectConfig';
import { Button, Toast } from 'vant';
import { ValidateRules } from "@common";

Vue.use(Button);

export default {
  name: 'work_mobile_personalcenter_03',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      showLists: [],
      display: {}, //组件静态文本
      showItem: "default",
      getMember: {}, // 个人信息
      // noNickname: false, // 昵称为空
      // noIntroduction: false, //签名为空
      // remainNum: '',  //剩余的可输入字数
      loading: true,
      checkCode: '',  //用于接收验证码的
      oldPassword: '',
      // newPassword: '1111',  //设置新密码
      textSrc: '',
      passwordSrc: '',
      isSeen: false,  //默认为隐藏密码模式
      isSend: false,  //默认为未发送验证码模式
      isSendEmailCode: false,  //默认为未发送验证码模式
      sendCodeTime: '',
      timer: '',  //用于存放定时器的
      codeNum: '',  //用于存放手机接收的验证码
      rules: {
        email: [{ validator: ValidateRules.validateEmail, trigger: 'blur' }],
        mobileno: [{ validator: ValidateRules.mobileCheck, trigger: 'blur' }],
        newpass: [{validator: ValidateRules.validatePass2, trigger: 'blur'}],
        oldpass: [{required: true, message: '请输入旧密码', trigger: 'blur' }]
      },
      passwordObj: {
        newpass: '',
        oldpass: ''
      }

    };
  },
  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].work_mobile_personalcenter.work_mobile_personalcenter_03;
    this.display = this.CONFIG.display;
    this.showLists = this.CONFIG.showLists;
    this.sendCodeTime = this.display.sendCodeTime;
  },

  mounted () {
    this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.CONFIG.display.navTitle);
    var _this = this;
    $(document).ready(function () {
      if (window.history && window.history.pushState) {
        $(window).on('popstate', function () { // 监听浏览器页面回退
          if (_this.showItem !== 'default') { // 在修改昵称或者修改签名页面回退
            _this.$bus.$emit(_this.CONFIG.emitEvent.contextEventName, _this.CONFIG.display.navTitle);
            _this.showItem = 'default';
          } else { // 在个人资料页面回退
            window.history.go(-1);
            return false;
          }
          history.pushState(null, null, document.URL); // 点击回退时向历史记录插入一条 以便阻止下一次点击回退
          window.history.forward(1); // forward 加载历史记录列表中的下一个URL
        });
      }
      /* 页面载入时使用 pushState 插入一条历史记录 原因：onpopstate事件只能监听pushState插入的历史记录 超链接<a>或者location.href跳转不受控制
       * history.pushState(state, title, url)
       * state 可以是字符串 也可以是一个JS对象 该参数设置的值在可以在响应onpopstate事件时event对象上获取
       * title 设置历史记录中的标题
       * url   历史记录中的URL地址
       */
      window.history.pushState(null, null, document.URL);
      window.history.forward(1);
    });
  },

  methods: {
    /* descInput(){
        this.remainNum = this.display.maxNum - this.getMember.introduction.length;
    }, */
    getMemberInfo (loginName) {
      Get(CONFIG.BASE_URL + this.CONFIG.getMemberInfo.url + '?loginName=' + loginName).then((resp) => {
        let res = resp.data;
        if (res.result == '1' && res.data) {
          this.getMember = res.data;
          // this.noNickname = this.getMember.nickName ? false : true; // 是否有昵称
          // this.noIntroduction = this.getMember.introduction ? false : true; // 是否有签名
          // this.descInput();
        }
        this.loading = false;
      })
    },
    enterEditModule (item) {
      if (item.tag == 'picture' || item.tag == 'loginName') {
        return false;
      }
      this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.CONFIG.display['nav' + item.tag]); // 发广播修改导航文字内容
      this.showItem = item.tag;
    },
    removeName (item) {
      if(item == 'newPassword'){
        this.newPassword = '';
      }else if(this.getMember[item]){
        this.getMember[item] = '';
      }

    },
    editUserInfo (item,formName) {  // 保存昵称和个性签名的修改
      // TODO: 后端修改Post请求的接参数方式后优化合并以下代码
      if (item == 'introduction') { // 更改个性签名
        if (this.getMember.introduction == '') { // 昵称为空时不能保存
          // this.noIntroduction = true;
          return false;
        } else {
          // this.noIntroduction = false;
          Post(CONFIG.BASE_URL + this.CONFIG.editPersonalInfo.url + '?loginName=' + this.getMember.loginName + '&introduction=' + this.getMember.introduction).then((resp) => {
            let res = resp.data;
            if (res.result == '1') {
              let msg = res.data.msg;
              Toast.success({
                duration: 1000,
                message: msg
              });
            } else {
              Toast.fail({
                duration: 1000,
                message: this.display.failedOp
              });
            }
          })
        }
      }
      else if (item == 'nickName') {// 更改昵称
        if (this.getMember.nickName == '') { // 昵称为空时不能保存
          // this.noNickname = true;
          return false;
        } else {
          /*let paramsObj = Object.assign({}, this.CONFIG.editPersonalInfo.params);
           paramsObj.loginName = this.member.loginName;
          paramsObj[item] = item == 'nickName' ? this.nickName : this.introduction; */
          // this.noNickname = false;
          Post(CONFIG.BASE_URL + this.CONFIG.editPersonalInfo.url + '?loginName=' + this.getMember.loginName + '&userNick=' + this.getMember.nickName).then((resp) => {
            let res = resp.data;
            if (res.result == '1') {
              let msg = res.data.msg;
              Toast.success({
                duration: 1000,
                message: msg
              });
            } else {
              Toast.fail({
                duration: 1000,
                message: this.display.failedOp
              });
            }
          })
        }
      }else if(item == 'email') {  //更改邮箱
        //TODO：...
        if(this.checkCode == ''){
          Toast.fail({
            duration: 1000,
            message: this.display.noMobileCode
          });
        }else if(this.codeNum != this.checkCode){
          Toast.fail({
            duration: 1000,
            message: this.display.errorCode
          });
        }else if(this.codeNum == this.checkCode){
          Post(CONFIG.BASE_URL + this.CONFIG.editPersonalInfo.url + '?loginName=' + this.getMember.loginName + '&email=' + this.getMember.email).then((resp) => {
            let res = resp.data;
            if (res.result == '1') {
              let msg = res.data.msg;
              Toast.success({
                duration: 1000,
                message: msg
              });
              this.checkCode = '';
            } else {
              Toast.fail({
                duration: 1000,
                message: this.display.failedOp
              });
            }
          })
        }
      }else if(item == 'mobileno') {  //更改手机号
        //TODO：...
        if(this.checkCode == ''){
          Toast.fail({
            duration: 1000,
            message: this.display.noMobileCode
          });
        }else if(this.codeNum != this.checkCode){
          Toast.fail({
            duration: 1000,
            message: this.display.errorCode
          });
        }else if(this.codeNum == this.checkCode){
          Post(CONFIG.BASE_URL + this.CONFIG.editPersonalInfo.url + '?loginName=' + this.getMember.loginName + '&mobileNo=' + this.getMember.mobileno).then((resp) => {
            let res = resp.data;
            if (res.result == '1') {
              let msg = res.data.msg;
              Toast.success({
                duration: 1000,
                message: msg
              });
              this.checkCode = '';
            } else {
              Toast.fail({
                duration: 1000,
                message: this.display.failedOp
              });
            }
          })
        }
      }else if(item == 'password') {  //更改密码
        //TODO：...
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = Object.assign({},this.CONFIG.updatePasswordInfo.params);
            params.loginName = this.getMember.loginName;
            params.newPassword = this.passwordObj.newpass;
            params.oldPassword = this.passwordObj.oldpass;
            console.log(params.newPassword);
            console.log(params.oldPassword);
            Post(CONFIG.BASE_URL + this.CONFIG.updatePasswordInfo.url + '?loginName=' + params.loginName + '&oldPassword=' + params.oldPassword + '&newPassword=' + params.newPassword).then((resp) => {
              let res = resp.data;
              if (res.result == '1') {
                let msg = res.data.msg;
                Toast.success({
                  duration: 1000,
                  message: msg
                });
              } else {
                let msg = res.error.errorMsg;
                Toast.fail({
                  duration: 1000,
                  message: msg
                });
              }
            })
          } else {
            Toast.fail({
              duration: 1000,
              message: this.display.failedOp
            });
            return false;
          }
        });

      }
    },
    sendCode(num,formName,name){
      clearInterval(this.timer);
      this.sendCodeTime = this.display.sendCodeTime;
      //执行发送验证码操作
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _self = this;
          _self.timeInterval(_self);
          if(name == 'mobileno'){
            _self.isSend = true;
            _self.getMobileCode(num);
          }else if(name == 'email'){
            _self.isSendEmailCode = true;
            _self.getEmailCode(num);
            // Toast.fail({
            //   duration: 1000,
            //   message: '暂时还没有给邮箱发验证码这个借口，未完待续...'
            // });
          }

        } else {
          Toast.fail({
            duration: 1000,
            message: this.display.failedOp
          });
          return false;
        }
      });

    },
    reSendCode(num,name){
      let _self = this;
      _self.sendCodeTime = _self.display.sendCodeTime;
      clearInterval(_self.timer);
      _self.timeInterval(_self);
      if(name == 'mobileno'){
        _self.getMobileCode(num);
      }else if(name == 'email'){
        _self.getEmailCode(num);
        // Toast.fail({
        //   duration: 1000,
        //   message: '暂时还没有给邮箱发验证码这个借口，未完待续...'
        // });
      }
    },
    timeInterval(_self){
      //setInterval不可以传参，因此用两个函数来解决这个问题，_fn是一个桥梁，用于返回一个不需要传参数的函数
      let fn = function(_self) {
        // console.log( _self.sendCodeTime);
        if(_self.sendCodeTime - 0 <= 0){
          // console.log('进来了');
          _self.isSend = false;
          _self.isSendEmailCode = false;
          _self.sendCodeTime = _self.display.sendCodeTime;
          // console.log(_self.sendCodeTime);
          clearInterval(_self.timer);
        }else {
          _self.sendCodeTime -= 1;
        }
      };
      let _fn = function (_self) {
        return function(){
          fn(_self);
        }
      };
      _self.timer = setInterval(_fn(_self),1000);
    },
    getMobileCode(num){
      if(num){
        let params = Object.assign({},this.CONFIG.sendMobileCodeInfo.params);
        params.mobileNum = num;
        Get(CONFIG.BASE_URL + this.CONFIG.sendMobileCodeInfo.url + '?mobileNum=' + params.mobileNum).then((resp) => {
          let res = resp.data;
          if (res.result == '1') {
            let msg = '验证码发送成功';
            this.codeNum = res.data;
            Toast.success({
              duration: 1000,
              message: msg
            });
          } else {
            Toast.fail({
              duration: 1000,
              message: this.display.failedOp
            });
          }
        })
      }
    },
    getEmailCode(num){
      if(num){
        //首先验证邮箱是否可用
        let params = Object.assign({},this.CONFIG.checkEmailCodeInfo.params);
        params.checkText = num;
        Get(CONFIG.BASE_URL + this.CONFIG.checkEmailCodeInfo.url + '?checkText=' + params.checkText + '&checkType=' + params.checkType).then((resp) => {
          let res = resp.data;
          if (res.result == '1') {
            //如果邮箱可用，在调修改邮箱借口
            let params = Object.assign({},this.CONFIG.sendEmailCodeInfo.params);
            params.email = num;
            Get(CONFIG.BASE_URL + this.CONFIG.sendEmailCodeInfo.url + '?email=' + params.email).then((resp) => {
              let res = resp.data;
              if (res.result == '1') {
                let msg = '验证码发送成功';
                this.codeNum = res.data;
                Toast.success({
                  duration: 1000,
                  message: msg
                });
              } else {
                Toast.fail({
                  duration: 1000,
                  message: this.display.failedOp
                });
              }
            })
          } else {
            let msg = res.error.errorMsg;
            Toast.fail({
              duration: 1000,
              message: msg
            });
          }
        })
      }
    },
    changeType(){
      this.isSeen = !this.isSeen;
    }
  },
  watch: {
    member: function (newValue, oldValue) {
      if (newValue.loginName && newValue.loginName !== oldValue.loginName) {
        this.getMemberInfo(newValue.loginName); // 根据用户名获取用户信息
        this.getMember.nickName = this.getMember.nickName ? this.getMember.nickName : newValue.loginName;  //首次修改昵称，输入框内显示用户名
      }
    }
  }
}
</script>
<style>
.work_mobile_personalcenter_03 {
  font-size: 0.35rem;
}

.work_mobile_personalcenter_03 .van-cell:not(:last-child)::after {
  left: 0px;
}

.work_mobile_personalcenter_03_other {
  text-align: left;
}

.work_mobile_personalcenter_03_editname {
  padding: 0.5rem;
}

.work_mobile_personalcenter_03_editname_name {
  width: 100%;
  height: 0.8rem;
  border: 0.01rem solid #ccc;
  border-radius: 0.15rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  margin: 0.3rem 0;
}

.work_mobile_personalcenter_03_editname_con {
  position: relative;
}

.work_mobile_personalcenter_03_editname_con .el-icon-close {
  position: absolute;
  right: 0.2rem;
  top: 0.52rem;
}
.work_mobile_personalcenter_03_editemail {
  padding: 0.5rem;
}

.work_mobile_personalcenter_03_editemail_content {
  width: 100%;
  height: 0.8rem;
  border: 0.01rem solid #ccc;
  border-radius: 0.15rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  margin: 0.3rem 0;
}

.work_mobile_personalcenter_03_editemail_con {
  position: relative;
}

.work_mobile_personalcenter_03_editameil_con .el-icon-close {
  position: absolute;
  right: 0.2rem;
  top: 0.52rem;
}
.work_mobile_personalcenter_03_editphone {
  padding: 0.5rem;
}

.work_mobile_personalcenter_03_editphone_content {
  width: 100%;
  height: 0.8rem;
  border: 0.01rem solid #ccc;
  border-radius: 0.15rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  margin: 0.3rem 0;
}

.work_mobile_personalcenter_03_editphone_con {
  position: relative;
}

.work_mobile_personalcenter_03_editphone_con .el-icon-close {
  position: absolute;
  right: 0.2rem;
  top: 0.52rem;
}
.work_mobile_personalcenter_03_editpassword {
  padding: 0.5rem;
}

.work_mobile_personalcenter_03_editpassword_content {
  width: 100%;
  height: 0.8rem;
  border: 0.01rem solid #ccc;
  border-radius: 0.15rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  margin: 0.3rem 0;
}

.work_mobile_personalcenter_03_editpassword_con {
  position: relative;
}

.work_mobile_personalcenter_03_editpassword_con .el-icon-close {
  position: absolute;
  right: 0.2rem;
  top: 0.52rem;
}
.work_mobile_personalcenter_01_picture {
  height: 2rem;
  line-height: 2rem;
}

.work_mobile_personalcenter_03_picturecon {
  width: 1.8rem;
  height: 1.8rem;
  float: right;
  border-radius: 50%;
  overflow: hidden;
}

.work_mobile_personalcenter_03_picturecon img {
  width: 100%;
  height: 100%;
}

.work_mobile_personalcenter_03_cellgroup
  .work_mobile_personalcenter_03_cell:nth-child(3) {
  margin-top: 0.3rem;
}

.work_mobile_personalcenter_03_nonn {
  height: 0.8rem;
  color: red;
}
.work_mobile_personalcenter_03_nointro {
  height: 0.8rem;
  color: red;
}

.work_mobile_personalcenter_03_savenn {
  text-align: center;
}

.work_mobile_personalcenter_03_editintro {
  padding: 0.5rem;
}

.work_mobile_personalcenter_03_editintro_textarea {
  border-radius: 0.15rem;
  width: 100%;
  height: 2.5rem;
  padding: 0.3rem;
  box-sizing: border-box;
  resize: none;
  margin: 0.3rem 0;
}
</style>
