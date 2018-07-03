import component from '../register_status.vue'
const name = component.name;  // 组件标签名
const title = '注册状态组件';  // 组件title
const description = `注册状态组件`;  // 组件描述信息
const dev = {
  common: {
    work_common_04: {
      getLocationParam:{
        keys:{
          status:'status',
          token:'token'
        }
      },
      toLoginHref: './login.html',
      toLoginType: 'auto',/* 是否自动跳到登录页，‘auto’：自动 ‘’：手动 */
      staticText: {
        registerSuccessInfo: "恭喜您,注册成功！",
        waitingLoginInfo: "秒后自动登录...",
        loginInfo: "登&nbsp;&nbsp;录",
        userExistInfo: "用户已经存在",
        verifyTimeOut: "验证超时",
        userNameNotExist: "用户名不存在"
      }
    }
  }
};
const prod = {
  common: {
    work_common_04: {
      getLocationParam:{
        keys:{
          status:'status',
          token:'token'
        }
      },
      toLoginHref: './login.html',
      toLoginType: 'auto',/* 是否自动跳到登录页，‘auto’：自动 ‘’：手动 */
      staticText: {
        registerSuccessInfo: "恭喜您,注册成功！",
        waitingLoginInfo: "秒后自动登录...",
        loginInfo: "登&nbsp;&nbsp;录",
        userExistInfo: "用户已经存在",
        verifyTimeOut: "验证超时",
        userNameNotExist: "用户名不存在"
      }
    }
  }
};
const platform = 'PC';
const pageType = ['index'];
const resourceType = ['others'];
export { name, title, dev, prod, description, platform, pageType, resourceType };
