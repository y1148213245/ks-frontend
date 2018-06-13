/*
 * @Author: song 
 * @Date: 2018-06-06 13:31:34 
 * @Last Modified by: song
 * @Last Modified time: 2018-06-13 15:44:43
 */

import component from "../headNavigation.vue";

const name = component.name;  // 组件标签名

const title = "微信端头部导航组件";  // 组件title

const description = `微信端个人中心头部导航组件`;  // 组件描述信息

const dev = {
  navigation: {
    navigation_03: {
      "modulename": {
        showItem: [{
          title: "",
          icon: "van-icon van-icon-arrow-left",
          url: "",
          tag: 'back', // tag 是拼样式名区分样式
        }, {
          title: "",
          icon: "van-icon van-icon-home",
          url: "../pages/index.html",
          tag: 'index'
        }],
        onEvent: { // 接收的事件名称
          contextEventName: 'showContext'
        },
      }
    }
  }
}

const prod = {
  navigation: {
    navigation_03: {
      "modulename": {
        showItem: [{
          title: "",
          icon: "van-icon van-icon-arrow",
          url: ""
        }, {
          title: "",
          icon: "van-icon van-icon-home",
          url: "../pages/index.html"
        }],
        onEvent: { // 接收的事件名称
          contextEventName: 'showContext'
        },
      }
    }
  }
}

const platform = 'mobile';
const pageType = ['others'];
const resourceType = ['others'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
