/*  提交订单成功组件  Created by zong 2018/06/08  */
import component from "../bugOrder.vue";

const name = component.name; // 组件标签名

const title = "提交订单成功组件"; // 组件title

const description = `提交订单成功组件,可配置`; // 组件描述信息

const dev = {
  shoppingcartsuccess: {
    work_shoppingcartsuccess_04: {
      'modulename': {
        getResourceDetail: { // 获取某一栏目下的数据列表
          url: "book/getBookDetail.do",
          params: {
            pubId: "",
            loginName: ""
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "bookAdapter", // 类型字段
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
            field: 'picBig', // 取什么字段
            display: '', // 固定显示内容是什么
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'button',
            field: 'resName',
            display: '',
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'price',
            field: 'memberPrice',
            display: '电子书价格：',
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'price',
            field: 'ebPrice',
            display: '',
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'price',
            field: 'price',
            display: '纸书定价：',
            method: '', // 方法名 要在下面配置
            className: "",
          }],
        },
        toDetail: { // 去资讯详情页面
          url: "../pages/informationdetail.html",
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        toMore: { // 去更多（资讯列表）页面
          url: "../pages/informationlist.html",
          dataKeys: {
            colId: "id", // colId是从适配器里对应的
          },
          fixedKeys: {}
        },
        infoImgWidth: 320, // 资讯图片的宽 要和图片外层容器  宽一样
        infoImgHeight: 220, // 资讯图片的高 要和图片外层容器  高一样
        buttonList:{
          button_one:{
            name:"继续逛书城",
            method:"toIndex",
          },
          button_two:{
            name:"去书架查看",
            method:"toIndex",
          }
        },
        moneyList:{
          money_one:{
            name:"本次消费",
            unit:"元",
          },
          money_two:{
            name:"账户余额",
            unit:"元",
          }
        },
      },
    }
  }
}

const prod = {
  shoppingcartsuccess: {
    work_shoppingcartsuccess_04: {
      'modulename': {
        getResourceDetail: { // 获取某一栏目下的数据列表
          url: "book/getBookDetail.do",
          params: {
            pubId: "",
            loginName: ""
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "bookAdapter", // 类型字段
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
            field: 'picBig', // 取什么字段
            display: '', // 固定显示内容是什么
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'button',
            field: 'resName',
            display: '',
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'price',
            field: 'memberPrice',
            display: '电子书价格：',
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'price',
            field: 'ebPrice',
            display: '',
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'price',
            field: 'price',
            display: '纸书定价：',
            method: '', // 方法名 要在下面配置
            className: "",
          }],
        },
        toDetail: { // 去资讯详情页面
          url: "../pages/informationdetail.html",
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        toSuccess: { // 去资讯详情页面
          url: "../pages/orderSuccess.html",
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        toMore: { // 去更多（资讯列表）页面
          url: "../pages/informationlist.html",
          dataKeys: {
            colId: "id", // colId是从适配器里对应的
          },
          fixedKeys: {}
        },
        infoImgWidth: 320, // 资讯图片的宽 要和图片外层容器  宽一样
        infoImgHeight: 220, // 资讯图片的高 要和图片外层容器  高一样
        buttonList:{
          button_one:{
            name:"继续逛书城",
            method:"toIndex",
          },
          button_two:{
            name:"去书架查看",
            method:"toIndex",
          }
        },
        moneyList:{
          money_one:{
            name:"本次消费",
            unit:"元",
          },
          money_two:{
            name:"账户余额",
            unit:"元",
          }
        },
      },
    }
  }
}

const platform = 'PC';
const pageType = [];
const resourceType = [];

const childComponents = [];

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
