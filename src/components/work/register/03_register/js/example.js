/*
 *带自动登录的登录组件
 */

import component from "../register.vue";

const name = component.name; // 组件标签名

const title = "注册组件"; // 组件title

const description = `通过绑定邮箱或手机号来注册`; // 组件描述信息

const dev = {
  register: {
    work_register_03: {
      sendNum: {
        url: 'user/sendMobileMessage.do' /* /user/sendToMobile.do 文联用  user/sendMobileMessage.do 华育用 */
      },
      showItem: ['bindMobile'] /* 控制功能显示,'bindEmail'绑定邮箱 'bindMobile'绑定手机 */ ,
      staticText: {
        userRegister: "新用户注册",
        userName: "用户名:",
        userNameSupportCode: "支持6~16位数字、字母、下划线",
        userExistInfo: "很抱歉，用户名已存在",
        canUseInfo: "恭喜您!可以使用",
        setNewPwd: "设置新密码:",
        pwdSupportCode: "密码支持6-16位字符",
        confirmPwd: "确认密码：",
        inputPwdAgain: "请再次输入密码",
        verifiCode: "验证码:",
        inputVerifiCode: "请输入验证码",
        changeAnotherPage: "换一张",
        refreshInfo: "刷新",
        nextStep: "下一步",
        emailBind: "邮箱绑定",
        phoneNumBind: "手机绑定",
        email: "邮箱:",
        inputEmailInfo: "请输入邮箱 email@mail.com",
        registerNow: "立即注册",
        phoneNum: "手机号:",
        inputPhoneNum: "请输入手机号",
        inputCorrectPhoneNum: "请输入正确手机号",
        phoneNumBoundInfo: "手机号已被绑定",
        inputPhoneVerifiCode: "请输入手机验证码",
        yourEmailWillReceive: "您的邮箱将会收到一封",
        verify: "验证",
        mail: "邮件",
        checkOutEmail: "请登录你的邮箱查看",
        backToLogin: "返回登录页",
        pleaseInputUserName: "请输入用户名",
        userNameFormatInfo: "请以字母开头，可以使用数字、字母、下划线，长度6到16位",
        pwdFormatErrorInfo: '格式错误，密码仅支持汉字、字母、数字、"-"、"_"的组合',
        pleaseInputPwd: "请输入密码",
        pwdAtLeastSixDigits: "密码至少为6位数",
        pwdCanBeUpToSixteenDigits: "密码最多为16位数",
        twoPwdDoNotMatch: "两次输入密码不一致!",
        verifiCodeInputError: "验证码输入错误！!",
        verifiCodeError: "验证码错误",
        inputTheCorrectPhoneNum: "请输入正确的手机号",
        getVerifiCode: "获取验证码",
        verifiCodeIsSending: "验证码发送中...",
        sendSuccess: "发送成功",
        networkTimeout: "网络超时",
        registerFailed: "注册失败，",
        phoneNumWasSuccessfullyBound: "手机号绑定成功",
        congratulations: "恭喜",
        yes: "确定",
        returnToLoginAfterThreeSeconds: "3秒后返回登录界面",
        requestFailed: "请求失败",
        inputEmail: '请输入邮箱'
      },
      directLoginHref: './login.html', // 跳转登录页面
    }
  }
};

const prod = {
  register: {
    work_register_03: {
      sendNum: {
        url: 'user/sendMobileMessage.do' /* /user/sendToMobile.do 文联用  user/sendMobileMessage.do 华育用 */
      },
      showItem: ['bindMobile'] /* 控制功能显示,'bindEmail'绑定邮箱 'bindMobile'绑定手机 */ ,
      staticText: {
        userRegister: "新用户注册",
        userName: "用户名:",
        userNameSupportCode: "支持6~16位数字、字母、下划线",
        userExistInfo: "很抱歉，用户名已存在",
        canUseInfo: "恭喜您!可以使用",
        setNewPwd: "设置新密码:",
        pwdSupportCode: "密码支持6-16位字符",
        confirmPwd: "确认密码：",
        inputPwdAgain: "请再次输入密码",
        verifiCode: "验证码:",
        inputVerifiCode: "请输入验证码",
        changeAnotherPage: "换一张",
        refreshInfo: "刷新",
        nextStep: "下一步",
        emailBind: "邮箱绑定",
        phoneNumBind: "手机绑定",
        email: "邮箱:",
        inputEmailInfo: "请输入邮箱 email@mail.com",
        registerNow: "立即注册",
        phoneNum: "手机号:",
        inputPhoneNum: "请输入手机号",
        inputCorrectPhoneNum: "请输入正确手机号",
        phoneNumBoundInfo: "手机号已被绑定",
        inputPhoneVerifiCode: "请输入手机验证码",
        yourEmailWillReceive: "您的邮箱将会收到一封",
        verify: "验证",
        mail: "邮件",
        checkOutEmail: "请登录你的邮箱查看",
        backToLogin: "返回登录页",
        pleaseInputUserName: "请输入用户名",
        userNameFormatInfo: "请以字母开头，可以使用数字、字母、下划线，长度6到16位",
        pwdFormatErrorInfo: '格式错误，密码仅支持汉字、字母、数字、"-"、"_"的组合',
        pleaseInputPwd: "请输入密码",
        pwdAtLeastSixDigits: "密码至少为6位数",
        pwdCanBeUpToSixteenDigits: "密码最多为16位数",
        twoPwdDoNotMatch: "两次输入密码不一致!",
        verifiCodeInputError: "验证码输入错误！!",
        verifiCodeError: "验证码错误",
        inputTheCorrectPhoneNum: "请输入正确的手机号",
        getVerifiCode: "获取验证码",
        verifiCodeIsSending: "验证码发送中...",
        sendSuccess: "发送成功",
        networkTimeout: "网络超时",
        registerFailed: "注册失败，",
        phoneNumWasSuccessfullyBound: "手机号绑定成功",
        congratulations: "恭喜",
        yes: "确定",
        returnToLoginAfterThreeSeconds: "3秒后返回登录界面",
        requestFailed: "请求失败",
        inputEmail: '请输入邮箱'
      },
      directLoginHref: './login.html', // 跳转登录页面
    }
  }
};

const platform = 'PC';
const pageType = ['register'];
const resourceType = ['others'];

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

/* const style = '' */
