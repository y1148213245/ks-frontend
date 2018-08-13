/*
* @Author: song
* @Date: 2018-06-14 10:50:00
 * @Last Modified by: song
 * @Last Modified time: 2018-07-02 18:15:34
* @Last edit by: zong
* @Last edit time: 2018-06-26 11:10
* 通过手机号找回密码
*/
<template>
  <div class="ui_work_findpassword_01">

    <!-- 找回界面 -->
    <div class="ui_work_findpassword_01_first" v-if="showItem == 'default'">
      <div class="ui_work_findpassword_01_first_div">
        <van-cell-group class="ui_work_findpassword_01_group">
          <!-- 邮箱找回密码 -->
          <van-field class="ui_work_findpassword_01_phone" v-model="phoneNumber" :placeholder="display.emailPlaceholder" icon="clear" @click-icon="phoneNumber = ''" @blur="formatPhoneNumber(false)" v-if="CONFIG.findPasswordWay && CONFIG.findPasswordWay == 'Email'" />
          <!-- 手机号找回密码 -->
          <van-field class="ui_work_findpassword_01_phone" v-model="phoneNumber" :placeholder="display.phoneNumber" icon="clear" @click-icon="phoneNumber = ''" @blur="formatPhoneNumber(false)" type="tel" maxlength="11" v-else/>
          <van-field class="ui_work_findpassword_01_check" v-model="checkNumber" :placeholder="display.checkNumber" center></van-field>
        </van-cell-group>

        <van-button class="ui_work_findpassword_01_sendcheck" slot="button" size="small" type="primary" v-if="!isCountDown" @click="sendCheckNumber()">
          <!-- 未进入倒计时状态 -->
          <span v-if="time" class="ui_work_findpassword_01_sendcheck_sendcheck">{{display.sendCheckNumber}}</span>
          <span v-if="!time" class="ui_work_findpassword_01_sendcheck_resendcheck">{{display.resendCheckNumber}}</span>
        </van-button>
        <van-button class="ui_work_findpassword_01_resendcheck" slot="button" size="small" type="primary" v-if="isCountDown">
          <!-- 进入倒计时状态 -->
          <span class="ui_work_findpassword_01_resendcheck_resendcheck">{{display.resendCheckNumber}}</span>
          <span v-if="time" class="ui_work_findpassword_01_resendcheck_time">{{'(' + time + 's)'}}</span>
        </van-button>
      </div>
      <div class="ui_work_findpassword_01_errormsg" v-text="errormsg" v-show="isWrongPhone || isWrongOthers"></div>
      <div class="ui_work_findpassword_01_nextstep">
        <van-button size="large" type="danger" v-text="display.nextStep" @click="nextStep()"></van-button>
      </div>
    </div>

    <!-- 设置密码界面 -->
    <div class="ui_work_findpassword_01_second" v-if="showItem == 'setPassword'">
      <van-field class="ui_work_findpassword_01_password" v-model="password" :placeholder="display.setPassword" icon="clear" @click-icon="password = ''" @blur="formatPassword()" type="tel" maxlength="16" />
      <div class="ui_work_findpassword_01_errorpassword" v-text="errorPassword" v-show="isWrongPassword"></div>
      <div class="ui_work_findpassword_01_confirm">
        <van-button size="large" type="danger" v-text="display.confirm" @click="confirmSet()"></van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Field, Button, Cell, CellGroup, Toast } from 'vant';
import PROJECT_CONFIG from 'projectConfig';
import { Get, Post } from "@common";

Vue.use(Field).use(Button).use(Cell).use(CellGroup);

export default {
  name: 'ui_work_findpassword_01',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      display: null,   // 组件静态文本
      phoneNumber: '', // 手机号
      checkNumber: '', // 验证码
      correctCheckNum: null,
      isWrongPhone: false,
      isWrongOthers: false,
      time: 60, // 倒计时
      errormsg: '', // 注册页面的 错误信息
      isCountDown: false, // 是否进入倒计时状态
      showItem: 'default', //  显示那一页
      password: '', // 密码
      errorPassword: '', // 设置密码页面的 密码错误信息
      isWrongPassword: false, // 密码错误状态
    };
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].ui_work_findpassword.ui_work_findpassword_01;
    this.display = this.CONFIG.display;
    this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.CONFIG.display.navTitle);
  },

  mounted () {
    var _this = this;
    $(document).ready(function () {
      if (window.history && window.history.pushState) {
        $(window).on('popstate', function () { // 监听浏览器页面回退
          if (_this.showItem !== 'default') { // 在设置密码页面回退
            _this.$bus.$emit(_this.CONFIG.emitEvent.contextEventName, _this.CONFIG.display.navTitle);
            _this.showItem = 'default';
          } else { // 在注册页面回退
            window.history.go(-1);
            return false;
          }
          history.pushState(null, null, document.URL);
          window.history.forward(1);
        });
      }
      window.history.pushState(null, null, document.URL);
      window.history.forward(1);
    });
  },

  methods: {
    formatPhoneNumber (flag) { // 手机号校验
      let checkReg; // 校验规则: 手机号 && 邮箱
      if (this.CONFIG.findPasswordWay && this.CONFIG.findPasswordWay == 'Email') { // 邮箱找回密码
        checkReg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
          if (this.phoneNumber == '') {  // 邮箱为空
          this.errormsg = this.display.EmailIsEmpty; // 请输入邮箱
          this.isWrongPhone = true;
        } else if (!checkReg.test(this.phoneNumber)) { // 邮箱格式有误
          this.errormsg = this.display.rightEmail; // 请输入正确的邮箱
          this.isWrongPhone = true;
        } else { // 邮箱格式正确 在格式正确的基础上去校验是否已经注册过
          this.isWrongPhone = false;
          this.checkExistPhoneNumber(flag);  // 校验是否存在
        }
      } else {  // 手机找回密码
        checkReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (this.phoneNumber == '') {  // 手机号为空
          this.errormsg = this.display.phoneNumber; // 请输入手机号
          this.isWrongPhone = true;
        } else if (!checkReg.test(this.phoneNumber)) { // 手机号格式有误
          this.errormsg = this.display.rightPhoneNumber; // 请输入正确的手机号
          this.isWrongPhone = true;
        } else { // 手机号格式正确 在格式正确的基础上去校验是否已经注册过
          this.isWrongPhone = false;
          this.checkExistPhoneNumber(flag);  // 校验是否存在
        }
      }

    },
    checkExistPhoneNumber (flag) { // 校验手机号是否已经注册过
      let setConfig = this.CONFIG.checkPhoneNumeber;
      let paramsObj = Object.assign({}, setConfig.params);
      paramsObj.checkText = this.phoneNumber;
      Get(CONFIG.BASE_URL + setConfig.url, { 'params': paramsObj }).then((resp) => { // 验证用户信息 查寻手机号是否已经注册过
        let res = resp.data;
        if (res.result == '1') { // 手机号可以使用 即 手机号已经注册过 才去调取发送验证码的操作
          this.isWrongPhone = false;
          if (flag == true) { // 点击发送验证码的按钮
            this.doSendCheckNumber();
          }
        } else { // 验证类型错误或用户已存在
          let errorMsg = res.error && res.error.errorMsg ? res.error.errorMsg : this.display.failOperation;
          // Toast.fail(errorMsg);
          this.errormsg = errorMsg;
          this.isWrongPhone = true;
        }
        if (this.isWrongPhone) {
          return false;
        }
      })
    },
    doSendCheckNumber () { //  发送验证码方法
      var inter = null; // 定时器变量
      let sendConfig;
      let paramsObj;
      if (this.CONFIG.findPasswordWay && this.CONFIG.findPasswordWay == 'Email') {
        sendConfig = this.CONFIG.sendCheckEmail;
        paramsObj = Object.assign({}, sendConfig.params);
        paramsObj.email = this.phoneNumber;
      } else {
        sendConfig = this.CONFIG.sendCheckNumber;
        paramsObj = Object.assign({}, sendConfig.params);
        paramsObj.mobileNum = this.phoneNumber;
      }
      let tempInfo = this.display.sendCheckNumber; // 暂存信息
      this.display.sendCheckNumber = this.display.sending; // 正在发送中...

      Get(CONFIG.BASE_URL + sendConfig.url, { params: paramsObj }).then((resp) => { // 发送验证码
        let res = resp.data;
        if (res.result == '1') { // 请求成功
          this.correctCheckNum = res.data; // 请求回来的验证码
          this.isCountDown = true; // 进入倒计时状态
          this.time = 60;
          var _this = this;
          inter = setInterval(function () {
            if (_this.time > 0) {
              _this.time = _this.time - 1;
            } else {
              window.clearInterval(inter); // 清除定时器
              _this.isCountDown = false;  // 退出倒计时状态
            }
          }, 1000)
        } else { // 发送失败
          let errorMsg = res.error && res.error.errorMsg ? res.error.errorMsg : this.display.failOperation;
          Toast.fail({
            duration: 1000,
            message: errorMsg
          });
        }
        this.display.sendCheckNumber = tempInfo; // 发送验证码
      })
    },
    sendCheckNumber () { // 点击发送验证码按钮
      this.formatPhoneNumber(true); //  需要调发送验证码的接口 所以传 true
    },
    nextStep () { // 下一步
      // this.formatPhoneNumber(this.CONFIG.findPasswordWay && this.CONFIG.findPasswordWay == 'Email' ? true : false);
      this.formatPhoneNumber(false);

      if (this.isWrongPhone) { // 手机号 格式 和 空情况
        return false;
      }
      if (this.checkNumber == '') { // 验证码为空
        this.errormsg = this.display.inputCheckNumber; // 请输入验证码
        this.isWrongOthers = true;
        return false;
      }
      if (this.checkNumber == this.correctCheckNum) { // 验证码输入正确
        this.showItem = 'setPassword';
        this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.CONFIG.display.setPasswordTitle);
      } else {
        this.errormsg = this.display.inputRightCheckNumber; // 请输入正确的验证码
        this.isWrongOthers = true;
      }
    },
    formatPassword () { // 密码格式
      let passwordReg = /^[0-9a-zA-Z]{6,12}$/; // 6-12位字母或数字
      if (this.password == '') {  // 密码为空
        this.errorPassword = this.display.inputPassword; // 请输入密码
        this.isWrongPassword = true;
      } else if (!passwordReg.test(this.password)) { // 密码格式有误
        this.errorPassword = this.display.setPassword; // 密码应为6-16位字母或数字
        this.isWrongPassword = true;
      } else { // 手机号填写正确
        this.isWrongPassword = false;
      }
    },
    confirmSet () {
      this.formatPassword(); // 先校验一下密码格式
      if (!this.isWrongPassword) { // 格式正确
        let setConfig;
        let paramsObj;
        /* 邮箱找回密码 设置密码 */
        if (this.CONFIG.findPasswordWay && this.CONFIG.findPasswordWay == 'Email') {
          setConfig = this.CONFIG.setPasswordByEmail;
          paramsObj = Object.assign({}, setConfig.params);
          Post(CONFIG.BASE_URL + setConfig.url + '?email=' + this.phoneNumber + '&password=' + this.password).then((resp) => { // 找回密码
            this.dealResponse(resp);
          })
        } else {/* 手机号找回密码 设置密码 */
          setConfig = this.CONFIG.setPassword;
          paramsObj = Object.assign({}, setConfig.params);
          paramsObj.mobileNum = this.phoneNumber;
          paramsObj.passWord = this.password;
          paramsObj.code = this.checkNumber;
          Get(CONFIG.BASE_URL + setConfig.url, { 'params': paramsObj }).then((resp) => { // 找回密码
            this.dealResponse(resp);
          })
        }

      }
    },
    dealResponse (resp) {
      let res = resp.data;
      if (res.result == '1') { // 找回密码设置密码成功
        Toast.success({
          duration: 1000,
          message: this.display.successPassword
        });
        setTimeout(() => { // 设置成功以后跳转登录页面
          window.location.href = this.CONFIG.directUrl;
        }, 1000);
      } else { // 找回失败
        let errorMsg = res.error && res.error.errorMsg ? res.error.errorMsg : this.display.failOperation;
        Toast.fail({
          duration: 1000,
          message: errorMsg
        });
      }
    }
  }

}
</script>
<style>
.ui_work_findpassword_01 {
  font-size: 0.4rem;
}

.ui_work_findpassword_01_errormsg {
  color: red;
}

.ui_work_findpassword_01_errorpassword {
  color: red;
}

.ui_work_findpassword_01_sendcheck {
  color: #35b8e4;
  border: none;
  background-color: #fff;
}

.ui_work_findpassword_01_resendcheck {
  color: #35b8e4;
  border: none;
  background-color: #fff;
}
</style>
