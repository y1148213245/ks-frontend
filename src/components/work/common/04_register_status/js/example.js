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
    }
  }
};
const platform = 'PC';
const pageType = ['index'];
const resourceType = ['others'];
export { name, title, dev, prod, description, platform, pageType, resourceType };