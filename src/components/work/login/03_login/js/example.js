/*
 *带自动登录的登录组件
 */

import component from "../login.vue";

const name = component.name;  // 组件标签名

const title = "登录组件";  // 组件title

const description = `带自动登录的登录组件`;  // 组件描述信息

const dev = {
  name: 'login',
  login: {
    work_login_03: {
      loginUrl: "login.do",
      staticText: {
        loginSys: "登录",
        inputUserName: "请输入用户名",
        inputPwd: "请输入密码",
        forgetPwd: "忘记密码",
        noAccount: "还没有账号？",
        signUpNow: "立即注册",
        accountFrozenInfo: "账号已被冻结，请联系管理员",
        loginFailed:"登录失败",
        usernameAndPwdCannotBeEmpty:"用户名或密码不能为空",
        userNameCannotBeEmpty: "用户名不能为空",
        accountAndPwdError: "账号或密码错误",
        pwdCannotBeEmpty: "密码不能为空",
        inputCode:'请输入验证码',
        codeFailed:'验证码输入错误'
      }
    }
  }
};

const prod = {
  name: 'login',
  login: {
    work_login_03: {
      disBacks: ['register.html', 'register_success.html', 'forgetPassword.html'],
      indexPath: './index.html',
      thirdParty: {
        topic:'社交账号登陆',
        url:'auth/login.do?type=',
        target:"_self",
        showItem: [
          {
            title: 'QQ',/* 鼠标悬浮提示 */
            type: 'QQ',/* 参数 */
            tag:'qq',/* 样式名后缀 */
          }/*, {
            "title": "微信",
            "type": "WeiXin",
            "tag": "wenxin"
          }, {
            "title": "微博",
            "type": "WeiBo",
            "tag": "weibo"
          }*/],
        customShowItem: [
          // {
          //   title: '登陆',/* 鼠标悬浮提示 */
          //   href: 'http://',/* 链接 */
          //   text: '文字',/* 文字 */
          //   tag:'jj'
          // }
        ]
      },
      // showItem:['code'],/* code:验证码功能 */
      staticText: {
        loginSys: "登录",
        inputUserName: "请输入用户名",
        inputPwd: "请输入密码",
        forgetPwd: "忘记密码",
        noAccount: "还没有账号？",
        signUpNow: "立即注册",
        accountFrozenInfo: "账号已被冻结，请联系管理员",
        loginFailed:"登录失败",
        usernameAndPwdCannotBeEmpty:"用户名或密码不能为空",
        accountAndPwdError: "账号或密码错误",
        userNameCannotBeEmpty: "用户名不能为空",
        pwdCannotBeEmpty: "密码不能为空",
        inputCode:'请输入验证码',
        codeFailed:'验证码输入错误'
      }
    }
  }
};

const platform = 'PC';
const pageType = ['login'];
const resourceType = ['others'];

export { name, title, dev, prod, description, platform, pageType, resourceType };

/* const style = `
.login_03_content {
  box-shadow: 0 0 10px #e5e5e5;
  background: #fff;
}
.login_03_titlebox {
  border-bottom-style: solid;
  border-bottom-color: #cccccc;
  font-size: 18px;
}
.login_03_userinput,
.login_03_password {
  border-style: solid;
  border-color: #e0e0e0;
  color: #939393;
  background-color: transparent;
  outline: none;
  background: url(../img/bg_10.png) no-repeat;
}
.login_03_userinput{
  background-position: -574px -93px;
}
.login_03_password{
  background-position: -574px -130px;
}
input:focus.login_03_userinput,
input:focus.login_03_password {
  border-style: solid;
  border-color: #bf3636;
  outline-color: #bf3636;
  color: #bf3636;
}
.login_03_box_01_forgetpassword {
  color: #c50000;
  text-decoration-line: none;
}
.login_03_box_02_button {
  border-radius: 5px;
  background: #c50000;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}
input:focus.login_03_box_02_button{
  outline: none;
}
.login_03_box_03 {
  color: #a6a6a6;
  font-size: 14px;
}
.login_03_box_03_register {
  color: #c50000;
  text-decoration-line: none;
}
` */
