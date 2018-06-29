import component from '../retrievePassword.vue'
const name = component.name;  // 组件标签名
const title = '密码找回组件';  // 组件title
const description = `密码找回组件`;  // 组件描述信息
const dev = {
  findPassword: {
    work_findpassword_01: {
      findPasswordUrl:  "user/findPassword.do?email=",
      setPasswordUrl:  "user/setPassword1.do?email=",
      href: "../pages/login.html",
      checkMobileUrl:'user/checkExistMember.do',/* 验证手机号是否已注册url */
      sendMobileUrl:'user/sendMobileMessage.do',
      setPasswordByMobileUrl:'user/findPasswordByMobile.do',/* 通过手机号设置密码 */
      staticText: {
        inputEmail:"输入邮箱",
        inputEmailVerifiCode:"填写邮箱验证码",
        updatePwd: "更改密码",
        findSuccess: "找回完成",
        email: "邮箱",
        pleaseInputEmail: "请输入邮箱",
        verifiCode: "验证码",
        pleaseInputVeirifiCode: "请输入验证码",
        canNotSeeClearly: "看不清楚",
        nextStep: "下一步",
        emailVerifiCode: "邮箱验证码",
        pleaseInputEmailVerifiCode: "请输入邮箱验证码",
        submit: "提交",
        verifiCodeInvalidInfo: "验证码已失效，请重新验证",
        pleaseInputNewPwd: "请输入新密码",
        pleaseConfirmNewPwd: "请确认新密码",
        mailboxFormatIsIncorrect:"邮箱格式不正确",
        pleaseInputEmailVerifiCode:"请输入邮箱验证码",
        verifiCodeError: "验证码输入错误！",
        formatError: "格式错误，密码仅支持汉字、字母、数字、\"-\"、\"_\"的组合",
        pleaseInputPwd: "请输入密码",
        passwordAtLeastSixDigits: "密码至少为6位数",
        passwordCanBeUpToSixTeenDigits: "密码最多为16位数",
        pleaseInputPwdAgain: "请再次输入密码",
        twoPwdsDoNotMatch: "两次密码输入不一致",
        pleaseInputVerifiCode: "请输入验证码"

  }

},
  }
};
const prod = {
  findPassword: {
    work_findpassword_01: {
      findPasswordUrl:  "user/findPassword.do?email=",
      setPasswordUrl:  "user/setPassword1.do?email=",
      href: "../pages/login.html",
      checkMobileUrl:'user/checkExistMember.do',/* 验证手机号是否已注册url */
      sendMobileUrl:'user/sendMobileMessage.do',
      setPasswordByMobileUrl:'user/findPasswordByMobile.do',/* 通过手机号设置密码 */
      staticText: {
        inputEmail:"输入邮箱",
        inputEmailVerifiCode:"填写邮箱验证码",
        updatePwd: "更改密码",
        findSuccess: "找回完成",
        email: "邮箱",
        pleaseInputEmail: "请输入邮箱",
        verifiCode: "验证码",
        pleaseInputVeirifiCode: "请输入验证码",
        canNotSeeClearly: "看不清楚",
        nextStep: "下一步",
        emailVerifiCode: "邮箱验证码",
        pleaseInputEmailVerifiCode: "请输入邮箱验证码",
        submit: "提交",
        verifiCodeInvalidInfo: "验证码已失效，请重新验证",
        pleaseInputNewPwd: "请输入新密码",
        pleaseConfirmNewPwd: "请确认新密码",
        mailboxFormatIsIncorrect:"邮箱格式不正确",
        pleaseInputEmailVerifiCode:"请输入邮箱验证码",
        verifiCodeError: "验证码输入错误！",
        formatError: "格式错误，密码仅支持汉字、字母、数字、\"-\"、\"_\"的组合",
        pleaseInputPwd: "请输入密码",
        passwordAtLeastSixDigits: "密码至少为6位数",
        passwordCanBeUpToSixTeenDigits: "密码最多为16位数",
        pleaseInputPwdAgain: "请再次输入密码",
        twoPwdsDoNotMatch: "两次密码输入不一致",
        pleaseInputVerifiCode: "请输入验证码"
      }
    },
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };
