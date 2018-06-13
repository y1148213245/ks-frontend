/*  微信端个人中心组件 Created by song on 2018/6/5 */
import component from "../personalIndex.vue";

const name = component.name; // 组件标签名

const title = "个人中心组件"; // 组件title

const description = `微信端个人中心组件`; // 组件描述信息

const dev = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_01: {
      "modulename": {
        showLists: [{
          title: "",
          tag: "account",
          hasLink: true
        }, {
          title: "余额",
          tag: "balance",
          hasLink: false
        }, {
          title: "充值记录",
          tag: "recharge",
          hasLink: true
        }, {
          title: "消费记录",
          tag: "consume",
          hasLink: true
        }, {
          title: "已购图书",
          tag: "purchased",
          hasLink: true
        }, {
          title: "我的书架",
          tag: "bookshelf",
          hasLink: true
        }, {
          title: "收藏",
          tag: "collection",
          hasLink: true
        }],
        toExit: { /* 退出配置 */
          type: 'href',
          /* function：调方法退出  href：转跳退出*/
          href: '../pages/login.html',
          func: {
            funcName: '',
            /* 方法名 */
            params: [],
            /* 参数 */
          }
        },
        emitEvent: { // 发广播事件名称
          contextEventName: 'showContext'
        },
        display: { // 组件显示的静态文本
          navTitle: "个人中心",
          logOut: "退出登录",
          recharge: "充值"
        },
        toSubPCUrl: "../pages/subpersonalcenter.html", // 个人中心二级页面
      }
    },
  }
}

const prod = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_01: {
      "modulename": {
        showLists: [{
          title: "",
          tag: "account",
          hasLink: true
        }, {
          title: "余额",
          tag: "balance",
          hasLink: false
        }, {
          title: "充值记录",
          tag: "recharge",
          hasLink: true
        }, {
          title: "消费记录",
          tag: "consume",
          hasLink: true
        }, {
          title: "已购图书",
          tag: "purchased",
          hasLink: true
        }, {
          title: "我的书架",
          tag: "bookshelf",
          hasLink: true
        }, {
          title: "收藏",
          tag: "collection",
          hasLink: true
        }],
        toExit: { /* 退出配置 */
          type: 'href',
          /* function：调方法退出  href：转跳退出*/
          href: '../pages/login.html',
          func: {
            funcName: '',
            /* 方法名 */
            params: [],
            /* 参数 */
          }
        },
        emitEvent: { // 发广播事件名称
          contextEventName: 'showContext'
        },
        display: { // 组件显示的静态文本
          navTitle: "个人中心",
          logOut: "退出登录",
          recharge: "充值"
        },
        toSubPCUrl: "../pages/subpersonalcenter.html", // 个人中心二级页面
      }
    },
  }
}

const platform = 'mobile';
const pageType = ['others'];
const resourceType = ['others'];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType
};
