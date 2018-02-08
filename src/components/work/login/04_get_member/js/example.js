import component from '../getMember.vue'
const name = component.name;  // 组件标签名
const title = '用户信息获取组件';  // 组件title
const description = `活动详情组件
  未登录时显示文字“[登陆]”，可通过在标签中插入文字来覆盖未登录时显示的文字`;  // 组件描述信息
const dev = {
  login: {
    work_login_04: {
      toLoginHref:'',
      toPersonalCenterHref:''
    }
  }
};
const prod = {
  activityDetail: {
    work_login_04: {
      toLoginHref:'',
      toPersonalCenterHref:''
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };