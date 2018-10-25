import component from '../01_login_loading.vue'
const name = component.name;  // 组件标签名
const title = '第三方登陆loading组件';  // 组件title
const description = `判断是否绑定账号,进行登陆转跳,实际是获取第三方信息进行注册和登陆`;  // 组件描述信息
const dev = {
  login: {
    work_login_01: {
      url: '',
    }
  }
};
const prod = {
  login: {
    work_login_01: {
      // showItem:['dontBind','input','bindBtn']/* dontBind:不绑定直接登陆功能 */,
      isAutoLogin:false,/* 直接登录 */
      toIndexHref:'./index.html',
      staticText:{
        userName: '用户名',
        password:'密码',
        bind:'绑定',
        notBind:'不绑定直接登录',
        autoLogin:'s后自动登陆',
        userNotExist:'用户不存在',
        pleaseInputUserName:'请输入用户名',
        pleaseInputPass:'请输入密码'
      }

    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };


