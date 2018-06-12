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
      url:'spc/cms/publish/list.do',
      keys: {},
      eventName_loadDate: 'loadSearchResult',
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };