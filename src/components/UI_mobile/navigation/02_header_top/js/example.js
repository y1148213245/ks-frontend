/*  手机端头部列表组件  Created by zong 2018/06/01  */
import component from "../headerTop.vue";

const name = component.name; // 组件标签名

const title = "手机端头部列表组件"; // 组件title

const description = "手机端头部列表组件 url配置 backUrl 是返回 配置为空是不跳转 personUrl是个人中心 多两个参数 在例子里面有"; // 组件描述信息

const dev = {
  navigation: {
    navigation_02: {
      'modulename': {
        headerLists: [// 分享配置
          {
            name: '返回', //
            url: 'backUrl', //
            class: 'class_qzone', //
          },
          {
            name: '个人中心', //
            url: 'personUrl', //
            loginUrl: '../pages/login.html', //
            personUrl: '../pages/person.html', //
            class: 'class_person', //
          },
          {
            name: 'TITLE',
            url: '../pageslist.html',
            class: 'tsina',
          },
          {
            name: '购物车',
            url: '',
            class: 'tsina',
          }
        ]
      }
    }
  }
}

const prod = {
  navigation: {
    navigation_02: {
      'modulename': {
        headerLists: [// 分享配置
          {
            name: '返回', //
            url: 'backUrl', //
            class: 'class_qzone', //
          },
          {
            name: '个人中心', //
            url: 'personUrl', //
            loginUrl: '../pages/login.html', //
            personUrl: '../pages/person.html', //
            class: 'class_person', //
          },
          {
            name: 'TITLE',
            url: '../pages/list.html',
            class: 'tsina',
          },
          {
            name: '购物车',
            url: '',
            class: 'tsina',
          }
        ]
      }
    }
  }
}

const platform = 'mobile';
const pageType = ['others'];
const resourceType = ['others'];

const childComponents = ["ui_mobile_navigation_02", "ui_mobile_navigation"];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType,
  childComponents
};
