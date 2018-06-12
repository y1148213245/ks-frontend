import component from '../getMember.vue'
const name = component.name;  // 组件标签名
const title = '用户信息获取组件';  // 组件title
const description = `活动详情组件
  未登录时显示文字“[登陆]”，可通过在标签中插入文字来覆盖未登录时显示的文字`;  // 组件描述信息
const dev = {
  login: {
    work_login_04: {
      toLoginHref:'../pages/login.html',
      toPersonalCenterHref:'../pages/personalcenter.html',
      toExit:{
        type:'function',
        href:'',
        func:{
          funcName:'',
          params:[],
        }
      }
    }
  }
};
const prod = {
  login: {
    work_login_04: {
      toLoginHref:'../pages/login.html',
      toPersonalCenterHref:'../pages/personalcenter.html',
      toExit:{/* 退出配置 */
        type:'function',/* function：调方法退出  href：转跳退出*/
        href:'',
        func:{
          funcName:'',/* 方法名 */
          params:[],/* 参数 */
        }
      }
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };