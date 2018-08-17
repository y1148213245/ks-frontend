/*  期刊订阅提交订单组件  Created by zong 2018/06/07  */
import component from "../bugOrder.vue";

const name = component.name; // 组件标签名

const title = "期刊订阅提交订单组件"; // 组件title

const description = `期刊订阅提交订单组件,可配置`; // 组件描述信息

const dev = {
  shoppingCart: {
    shoppingCart_05: {
      'modulename': {
        changeBuy:[
          {
            name:"实体版订阅",
            toUrl:"../pages/buyMag.html",   //留空代表不跳转
          },
          {
            name:"电子版版订阅",
            toUrl:"../pages/buyMagEle.html",   //留空代表不跳转
          }
        ],   //切换购买方式区域
        aboutMsg:"aboutMsgaboutMsgaboutMsgaboutMsgaboutMsgaboutMsgaboutMsg", //介绍信息
        magType:{  // 期刊类型配置
          titleName:"选择期刊种类",
          buttonName:"选择",
          checkMagTypeName:"", //默认类型，谨慎配置
          selectButtonName:"确定",   //期刊列表页按钮名称
        },
        delivery:{  //配送方式配置
          deliveryShow:true,
          titleName:"配送方式"
        },
        buyNumDiv:{ //订购数量配置
          buyNumDivShow:true,
          titleName:"订购数量",
          unit:"套",
          priceTitle:"价格",
        },
        otherDiv:{ //其他信息配置
          otherDivShow:true,
          titleName:"填加信息",
        },
        billInfo:{  //发票配置
          billInfoShow:true,
          titleName:"是否需要发票",
        },
        descDiv:{  //备注配置
          descDivShow:true,
          titleName:"备注",
        },
        takeType:{  //订阅方式配置
          descDivShow:true,
          titleName:"订阅方式",
          checkMagTypeName:"",
          buttonName:"选择订阅方式",
          selectButtonName:"确定",
        },


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
        payType:{
          payTypeShow:true,
          defaultPay:"Balance",    //Balance Weixin
          Balance:{
            BalanceShow:true,
            iconClass:"Balance_icon",
            name:"余额支付",
            moneyShow:true,   //余额是否展示
            moneyUnit:"元",
            goRechargeShow:true,
            goRechargeButton:"充值",
            goRechargeUrl:"../goRecharge.html",
            balanceHint:"余额不足，请选择充值或者其他支付方式",
          },
          Weixin:{
            WeixinShow:true,
            iconClass:"Weixin_icon",
            name:"微信支付",
          }
        },
        orderButton:"提交订单",
        orderSuccessUrl: '../pages/orderSuccess.html', // 方法名 要在下面配置
        noLoginUrl:"../pages/login.html", //没登陆的话跳转到哪
        platform: "wxShop"  // wxShop:微信商城   pc:pc端
      },
    }
  }
}

const prod = {
  shoppingCart: {
    shoppingCart_05: {
      'modulename': {
        changeBuy:[
          {
            name:"实体版订阅",
            toUrl:"../pages/buyMag.html",   //留空代表不跳转
          },
          {
            name:"电子版版订阅",
            toUrl:"../pages/buyMagEle.html",   //留空代表不跳转
          }
        ],   //切换购买方式区域
        aboutMsg:"aboutMsgaboutMsgaboutMsgaboutMsgaboutMsgaboutMsgaboutMsg", //介绍信息
        checkMagTypeNameDefault:"",    //默认刊种名称 获取配置中默认的刊种名称 并且获取详情  //如果配置不对 那展示会失败
        magType:{  // 期刊类型配置
          titleName:"选择期刊种类",
          buttonName:"选择",
          checkMagTypeName:"", //默认类型，谨慎配置
          selectButtonName:"确定",   //期刊列表页按钮名称
        },
        delivery:{  //配送方式配置
          deliveryShow:true,
          titleName:"配送方式"
        },
        buyNumDiv:{ //订购数量配置
          buyNumDivShow:true,
          titleName:"订购数量",
          unit:"套",
          priceTitle:"价格",
        },
        otherDiv:{ //其他信息配置
          otherDivShow:true,
          titleName:"填加信息",
        },
        billInfo:{  //发票配置
          billInfoShow:true,
          titleName:"是否需要发票",
        },
        descDiv:{  //备注配置
          descDivShow:true,
          titleName:"备注",
        },
        takeType:{  //订阅方式配置
          descDivShow:true,
          titleName:"订阅方式",
          checkMagTypeName:"",
          buttonName:"选择订阅方式",
          selectButtonName:"确定",
        },


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
        payType:{
          payTypeShow:true,
          defaultPay:"Balance",    //Balance Weixin
          Balance:{
            BalanceShow:true,
            iconClass:"Balance_icon",
            name:"余额支付",
            moneyShow:true,   //余额是否展示
            moneyUnit:"元",
            goRechargeShow:true,
            goRechargeButton:"充值",
            goRechargeUrl:"../goRecharge.html",
            balanceHint:"余额不足，请选择充值或者其他支付方式",
          },
          Weixin:{
            WeixinShow:true,
            iconClass:"Weixin_icon",
            name:"微信支付",
          }
        },
        orderButton:"提交订单",
        orderSuccessUrl: '../pages/orderSuccess.html', // 方法名 要在下面配置
        noLoginUrl:"../pages/login.html", //没登陆的话跳转到哪
        platform: "wxShop"  // wxShop:微信商城   pc:pc端
      },
    }
  }
}

const platform = 'mobile';
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
