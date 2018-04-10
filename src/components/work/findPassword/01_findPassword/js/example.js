import component from '../retrievePassword.vue'
const name = component.name;  // 组件标签名
const title = '密码找回组件';  // 组件title
const description = `密码找回组件`;  // 组件描述信息
const dev = {
  findPassword: {
    work_findPassword_01: {
      findPasswordUrl:  "user/findPassword.do?email=",
      setPasswordUrl:  "user/setPassword1.do?email=",
      href: "../pages/login.html"
    },
  }
};
const prod = {
  findPassword: {
    work_findPassword_01: {
      findPasswordUrl:  "user/findPassword.do?email=",
      setPasswordUrl:  "user/setPassword1.do?email=",
      href: "../pages/login.html"
    },
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };