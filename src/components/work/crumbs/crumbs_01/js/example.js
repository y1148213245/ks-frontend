/*
 *带自动登录的登录组件
 */

import component from "../crumbs.vue";

const name = component.name;  // 组件标签名

const title = "文联面包屑导航组件";  // 组件title

const description = `文联面包屑导航组件`;  // 组件描述信息

const dev = {
  crumbs:{
    url:'./index.html',
    showWord:{
      location:'您的位置',
      index:'首页'
    },
    getCrumbdOn:'setCrumbs',  //事件监听
    crumbType:[{ //面包屑
      name: 'author',
      title: '作者详情',
    }, {
      name: 'editor',
      title: '编辑详情',
    }, {
      name: 'aboutus',
      title: '关于我们',
    }]
  },
};

const prod = {
  crumbs:{
    url:'./index.html',
    showWord:{
      location:'您的位置',
      index:'首页'
    },
    getCrumbdOn:'setCrumbs',  //事件监听
    crumbType:[{ //面包屑
      name: 'author',
      title: '作者详情',
    }, {
      name: 'editor',
      title: '编辑详情',
    }, {
      name: 'aboutus',
      title: '关于我们',
    }]
  },
};

const platform = 'pc';
const pageType = ['list','channel'];
const resourceType = ['others'];

export {name, title, dev, prod, description, platform, pageType, resourceType};

