/*
 * @Author: song 
 * @Date: 2018-06-14 10:43:10 
 * @Last Modified by: song
 * @Last Modified time: 2018-06-19 13:43:27
 */

import component from "../findpassword.vue";

const name = component.name; // 组件标签名

const title = "手机号找回密码组件"; // 组件title

const description = `手机号找回密码组件`; // 组件描述信息

const dev = {
  ui_work_findpassword: {
    ui_work_findpassword_01: {
      emitEvent: { // 发广播事件名称
        contextEventName: 'showContext'
      },
      display: { // 组件静态文本
        navTitle: '密码找回',
        phoneNumber: '请输入手机号',
        rightPhoneNumber: '请输入正确的手机号',
        checkNumber: '验证码',
        sendCheckNumber: '发送验证码',
        resendCheckNumber: '重新发送',
        sending: '发送中...',
        nextStep: '下一步',
        inputCheckNumber: '请输入验证码',
        inputRightCheckNumber: '验证码错误',
        setPasswordTitle: '设置密码',
        inputPassword: '请输入密码',
        setPassword: '设置6-16位字母或数字的密码',
        successPassword: '密码设置成功',
        confirm: '确定',
        failOperation: '操作失败',
      },
      directUrl: '../pages/login.html',
      checkPhoneNumeber: { // 验证用户信息 查寻手机号是否已经注册过 [手机号找回密码]
        url: 'user/checkExistMember.do',
        params: {
          checkText: '', // 验证文本
        }
      },
      sendCheckNumber: {
        url: 'user/sendMessageYanBian.do',
        params: {
          mobileNum: ''
        }
      },
      setPassword: {
        url: 'user/findPasswordByMobile.do',
        params: {
          mobileNum: '',
          passWord: '',
          code: ''
        }
      }
    }
  }
}

const prod = {
  ui_work_findpassword: {
    ui_work_findpassword_01: {
      emitEvent: { // 发广播事件名称
        contextEventName: 'showContext'
      },
      display: { // 组件静态文本
        navTitle: '密码找回',
        phoneNumber: '请输入手机号',
        rightPhoneNumber: '请输入正确的手机号',
        checkNumber: '验证码',
        sendCheckNumber: '发送验证码',
        resendCheckNumber: '重新发送',
        sending: '发送中...',
        nextStep: '下一步',
        inputCheckNumber: '请输入验证码',
        inputRightCheckNumber: '验证码错误',
        setPasswordTitle: '设置密码',
        inputPassword: '请输入密码',
        setPassword: '设置6-16位字母或数字的密码',
        successPassword: '密码设置成功',
        confirm: '确定',
        failOperation: '操作失败',
      },
      directUrl: '../pages/login.html',
      checkPhoneNumeber: { // 验证用户信息 查寻手机号是否已经注册过 [手机号找回密码]
        url: 'user/checkExistMember.do',
        params: {
          checkText: '', // 验证文本
        }
      },
      sendCheckNumber: {
        url: 'user/sendMessageYanBian.do',
        params: {
          mobileNum: ''
        }
      },
      setPassword: {
        url: 'user/findPasswordByMobile.do',
        params: {
          mobileNum: '',
          passWord: '',
          code: ''
        }
      }
    }
  }
}

const platform = 'PC';
const pageType = [];
const resourceType = [];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType
};
