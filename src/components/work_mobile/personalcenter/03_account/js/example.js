/*
 * @Author: song
 * @Date: 2018-06-06 16:16:12
 * @Last Modified by: song
 * @Last Modified time: 2018-06-13 16:28:04
 * 个人资料
 */
/*    */
import component from "../account.vue";

const name = component.name; // 组件标签名

const title = "个人资料"; // 组件title

const description = `个人中心的个人资料`; // 组件描述信息

const dev = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_03: {
      emitEvent: { // 发广播事件名称
        contextEventName: 'showContext'
      },
      showLists: [{
        title: "头像",
        tag: "picture",
        hasLink: false,
      }, {
        title: "账号",
        tag: "loginName",
        hasLink: false,
      }, {
        title: "昵称",
        tag: "nickName",
        hasLink: true,
      }, {
        title: "邮箱",
        tag: "email",
        hasLink: true,
      }, {
        title: "手机号",
        tag: "mobileno",
        hasLink: true,
      }, {
        title: "修改密码",
        tag: "password",
        hasLink: true,
      }, {
        title: "签名",
        tag: "introduction",
        hasLink: true,
      }],
      display: {
        navTitle: "个人资料",
        navnickName: '修改昵称',
        navintroduction: '修改签名',
        navemail: '修改邮箱',
        navpassword: '修改密码',
        navmobileno: '修改手机号',
        noNickname: '昵称不能为空',
        noIntroduction: '签名不能为空',
        noEmail: '邮箱不能为空',
        noPassword: '密码不能为空',
        noMobileno: '手机号不能为空',
        noMobileCode: '验证码不能为空',
        errorCode: '验证码不正确',
        nickName: '昵称',
        email: '邮箱',
        password: '密码',
        currentPwd: '当前密码',
        newPwd: '新密码',
        mobileno: '手机号',
        introduction: '签名',
        save: '保存',
        sure: '确定',
        sendCheckEmail: '发送验证邮件',
        sendCode: '发送验证码',
        reSendCode: '重新发送',
        noData: '暂无数据',
        noPic: '暂无头像',
        failedOp: '操作失败',
        maxNum: 30,
        textSrc: '../assets/img/openEyes.png',  //明文密码图片
        passwordSrc: '../assets/img/closeEyes.png',  //密文密码图片
        sendCodeTime: 60,  //控制验证码重新发送的时间
        timeUnit: 's',  //时间单位
        EmailIsBound:'很抱歉，邮箱已被绑定',
        directUrl: '../pages/subpersonalcenter.html#account',
      },
      editPersonalInfo: { // 编辑个人信息：昵称 签名
        url: "user/editMemberByName.do",
        params: {
          loginName: ''
        }
      },
      getMemberInfo: {
        url: "user/getMemberByName.do",  // 根据用户名获取用户信息
        params: {
          loginName: ""
        }
      },
      sendMobileCodeInfo: {
        url: "user/sendMobileMessage.do",
        params: {
          mobileNum: ''
        }
      },
      sendEmailCodeInfo: {
        url: "user/sendEmail.do",
        params: {
          email: ''
        }
      },
      updatePasswordInfo: {
        url: "user/updatePassword.do",
        params: {
          loginName: '',
          oldPassword: '',
          newPassword: ''
        }
      },
      checkEmailCodeInfo:{
        url: "user/checkUserInfo.do",
        params: {
          checkText:'',
          checkType:'2'
        }
      }
    },
  }
}

const prod = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_03: {
      emitEvent: { // 发广播事件名称
        contextEventName: 'showContext'
      },
      showLists: [{
        title: "头像",
        tag: "picture",
        hasLink: false,
      }, {
        title: "账号",
        tag: "loginName",
        hasLink: false,
      }, {
        title: "昵称",
        tag: "nickName",
        hasLink: true,
      }, {
        title: "邮箱",
        tag: "email",
        hasLink: true,
      }, {
        title: "手机号",
        tag: "mobileno",
        hasLink: true,
      }, {
        title: "修改密码",
        tag: "password",
        hasLink: true,
      }, {
        title: "签名",
        tag: "introduction",
        hasLink: true,
      }],
      display: {
        navTitle: "个人资料",
        navnickName: '修改昵称',
        navintroduction: '修改签名',
        navemail: '修改邮箱',
        navpassword: '修改密码',
        navmobileno: '修改手机号',
        noNickname: '昵称不能为空',
        noIntroduction: '签名不能为空',
        noEmail: '邮箱不能为空',
        noPassword: '密码不能为空',
        noMobileno: '手机号不能为空',
        noMobileCode: '验证码不能为空',
        errorCode: '验证码不正确',
        nickName: '昵称',
        email: '邮箱',
        password: '密码',
        currentPwd: '当前密码',
        newPwd: '新密码',
        mobileno: '手机号',
        introduction: '签名',
        save: '保存',
        sure: '确定',
        sendCheckEmail: '发送验证邮件',
        sendCode: '发送验证码',
        reSendCode: '重新发送',
        noData: '暂无数据',
        noPic: '暂无头像',
        failedOp: '操作失败',
        maxNum: 30,
        textSrc: '../assets/img/openEyes.png',  //明文密码图片
        passwordSrc: '../assets/img/closeEyes.png',  //密文密码图片
        sendCodeTime: 60,  //控制验证码重新发送的时间
        timeUnit: 's',  //时间单位
        EmailIsBound:'很抱歉，邮箱已被绑定',
        directUrl: '../pages/subpersonalcenter.html#account',
      },
      editPersonalInfo: { // 编辑个人信息：昵称 签名
        url: "user/editMemberByName.do",
        params: {
          loginName: ''
        }
      },
      getMemberInfo: {
        url: "user/getMemberByName.do",  // 根据用户名获取用户信息
        params: {
          loginName: ""
        }
      },
      sendMobileCodeInfo: {
        url: "user/sendMobileMessage.do",
        params: {
          mobileNum: ''
        }
      },
      sendEmailCodeInfo: {
        url: "user/sendEmail.do",
        params: {
          email: ''
        }
      },
      updatePasswordInfo: {
        url: "user/updatePassword.do",
        params: {
          loginName: '',
          oldPassword: '',
          newPassword: ''
        }
      },
      checkEmailCodeInfo:{
        url: "user/checkUserInfo.do",
        params: {
          checkText:'',
          checkType:'2'
        }
      }
    },
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
