import component from '../04_sidebar.vue'
const name = component.name;  // 组件标签名
const title = '侧边栏导航组件';  // 组件title
const description = `侧边栏导航组件`;  // 组件描述信息
const dev = {
  navigation: {
    ui_navigation_04: {
      url: '',
    }
  }
};
const prod = {
  navigation: {
    ui_navigation_04: {
      "modulename": {
        showItem: ['QQ', 'toTop'],
        display: {
          qq: '联系我们',
          toTop: '返回顶部'
        },
        toQQ: {
          url: 'http://wpa.qq.com/msgrd?v=3&amp;uin=378365117&amp;site=qq&amp;menu=yes'
        }
      }

    }
  }
};
const platform = 'PC';
const pageType = ['other'];
const resourceType = ['other'];
export { name, title, dev, prod, description, platform, pageType, resourceType };