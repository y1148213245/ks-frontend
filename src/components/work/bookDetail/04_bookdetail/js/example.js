/*  图书详情组件  Created by song 2018/05/18  */
import component from "../bookdetail.vue";

const name = component.name; // 组件标签名

const title = "图书详情组件"; // 组件title

const description = `图书详情组件
{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
    name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
    field: 'picBig', // 取什么字段
    display: '', // 固定显示内容是什么 前
    afterDisplay: '',//固定显示内容是什么 后
    method: '', // 方法名 要在下面配置
    className: "",
  }, {
    name: 'button',
    field: 'sysTopic',
    display: '',
    afterDisplay: '',//固定显示内容是什么 后
    method: '', // 方法名 要在下面配置
    className: "",
  }, {
    name: 'title',
    field: 'courseTitle',  //待定
    display: '',
    afterDisplay: '',//固定显示内容是什么 后
    method: '', // 方法名 要在下面配置
    className: "",
  }, {
    name: 'courseNumber',
    field: 'courseNumber',  //待定
    display: '课程总数：',
    afterDisplay: '讲',//固定显示内容是什么 后
    method: '', // 方法名 要在下面配置
    className: "",
  }, {
    name: 'courseDuration',
    field: 'courseDuration',  //待定
    display: '课程：',
    afterDisplay: '日',//固定显示内容是什么 后
    method: '', // 方法名 要在下面配置
    className: "",
  }, {
    name: 'coursePrice',
    field: 'coursePrice',  //待定
    display: '费用：',
    afterDisplay: '',//固定显示内容是什么 后
    method: '', // 方法名 要在下面配置
    className: "",
  }, {
    name: 'button',
    field: '',
    display: '购买',
    afterDisplay: '',//固定显示内容是什么 后
    method: 'toBuyLayer', // 方法名 要在下面配置
    className: "",
  },{   //免费的资源，这样配置
    name: 'free',
    field: 'free',  //待定
    display: '费用：',
    afterDisplay: '免费',//固定显示内容是什么 后
    method: '', // 方法名 要在下面配置
    className: "",
  }
[新增]
取地址栏参数从索引库中取资源pubId

/* 默认配置 */
getPubidByLocationQueryFromSyk:{/* 通过地址栏参数从索引中查图书详情所需的pubId */
  url:'spc/cms/publish/list.do',
  params:{
    conditions: [],/* 条件配置 */
    groupBy: "pub_resource_id",
    orderBy: "pub_a_order asc pub_lastmodified desc",
    pageNo: "1",
    pageSize: "10",
    searchText: "",
  },
  queryParams:{ /* 取地址栏参数,值赋给查询参数. key:地址栏参数名,value:查询条件字段名 */
    title:'BOOK_SYS_TOPIC'
  }
},
[ END 新增]
`; // 组件描述信息

const dev = {
  work_bookdetail: {
    work_bookdetail_04: {
      modulename: {
        showDialog: false,  //控制购买按钮是否显示
        zhentiContentType: '123',  //真题页面需要的配置
        display: {
          courseUseTime: "使用期限：",
          buyCourse: "课程购买",
          sure: "确认支付",
          cancel: "取消",
          needPay: "需支付：",
          payWay: "支付方式",
          zhifubao: "支付宝",
          weixin: "微信",
          drumpPage: "正在跳转支付页面..."
        },
        getResourceDetail: { // 获取某一栏目下的数据列表
          url: "book/getBookDetail.do",
          params: {
            pubId: "",
            loginName: "",
            attachTypes: 'video'  //获取视频时需要传的参数
          },
          "ZILIAOZU": {
            "sysAdapter": "sykAdapter",
            "typeAdapter": "ziliaozu"
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "bookAdapter", // 类型字段
          defaultSaleUrl:"https://www.tmall.com/",
          complicatedItem: {
            "one": [{
              name: '',
              field: '',
              display: '',
              afterDisplay: '',//固定显示内容是什么 后
              method: '',
              className: "",
            }],
            "two": [{
              name: '',
              field: '',
              display: '',
              afterDisplay: '',//固定显示内容是什么 后
              method: '',
              className: "",
            }],
          },
        },
        toProbation: {
          url: CONFIG.READ_URL,
          dataKeys: {
            bookId: "resId", // key是地址请求参数名 value是从适配器里取对应的
            bookName: "resName"
          },
          fixedKeys: {
            siteType: 0, // 0 网站 1 微信
            readType: 0, // 0 试读 1 全读
          }
        },
        toDetail: { // 去资讯详情页面
          url: "../pages/informationdetail.html",
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        toBuy: { // 去购买
          url: "../pages/bookBuy.html",
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
        tabConfigList: { //tab切换配置
          tabShow: true,
          reviewShow: true,
          tabList: ["详情", "评论"], //只能改字哦，
          tabActiveIndex: 0, //默认展示第一个就是0 默认第二个就是1
          toAllReviewName: "查看全部评论", //查看全部评论
          toAllReviewMethod: {
            method: 'toReviewList',
          },
        },
        getPublicizeInfo: { // 获取图书相关信息(前言、图书简介、作者简介、目录、后记等)
          url: "spc/prodb/publicize.do",
          params: {
            doclibCode: "BOOK",
            docID: ""
          },
          isShowPublicize: true, // 是否显示相关信息
          showPublicize: ["前言", "内容简介", "目录"], // 数组过滤需要显示的内容
        },
        getAudioAttachment: { // 获取有声书音频附件
          url: "resource/detail.do",
          params: {
            loginName: "",
            pubId: "",
            siteId: CONFIG.SITE_CONFIG.siteId,
            attachTypes: "audio", // 附件类型
          },
          isShowAudio: true, // 是否显示音频列表
        },
        addCart: { // 加入购物车
          url: "cart/addCart.do",
          params: {
            number: "",
            loginName: "",
            activityId: 0,
            pubId: "",
            siteId: CONFIG.SITE_CONFIG.siteId
          }
        },
        collectOrLike: { // 收藏 或 点赞 操作
          url: "collection/addCollect.do",
          params: {
            loginName: "",
            pubId: "",
            operateType: 0, // 0 收藏 1 点赞
            productId: "",
            siteId: CONFIG.SITE_CONFIG.siteId
          }
        },
        toReviewList: { // 去评论列表页面
          url: "../pages/reviewlist.html",
          dataKeys: {
            colId: "id", // colId是从适配器里对应的
          },
          fixedKeys: {}
        },
        bugButton: {
          display: "立即购买",
          method: "toBuy",
          display1: "加入书架",
          method1: "toBuy",
          display2: "开始阅读",
          method2: "toProbation",
        },
        bookContentType: { // 书的类型  纸书：91 电子书 94
          bookType: '91',
          ebookType: '94',
        },
        getPubidByLocationQueryFromSyk:{/* 通过地址栏参数从索引中查图书详情所需的pubId */
          url:'spc/cms/publish/list.do',
          params:{
            conditions: [/* 条件配置 */
            ],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc",
            pageNo: "1",
            pageSize: "10",
            searchText: "",
          },
          queryParams:{
            title:'BOOK_SYS_TOPIC'
          }
        },
        staticText: {
          noImg: "暂无图片",
          noResource: "暂无",
          quantityOfGoodsMustNotExceedTwoHundred: "商品数量不能大于200",
          systemPrompt: "系统提示",
          OK: "确定",
          noPaperBookInfo: "该书没有对应纸质书，无法加入购物车",
          noEBookInfo: "该书没有对应电子书，无法加入购物车",
          noDate:"暂无日期",
          yuan:"￥"
        },
        getPayMethodsBySiteId: {  //获取站点的支付方式
          url: "cart/getPayMethod.do",
          params: {
            siteId: ''
          }
        },
        commitOrderUrl: "order/submitSplitOrder.do", //提交订单接口
        "combinateProductCfg":{
          "show":true,  // 是否显示组合购买
          "title":"组合购买",   // 组合购买数据的标题名称
          "lastBtn":"加入购物车",  // 最后一个按钮显示内容
          "showThisBook":false,  //是否展示本图书
          "showCombinateItem":3,  //展示图书个数
          "addCart":{
            "url":"cart/addCombinateProductToCart.do",
            "params":{
              "loginName": "",
              "siteId": 37,
              "combinateId":""
            }
          },
          "toDetail":{
            "url":"booldetail.html", // 跳转的详情页
            "params":{}
          }
        },
        "loginUrl": "../../pages/login.html",  //跳登录页
        judgeInventory: {  //库存量配置
          showInventory: true,
          noPaperBook: "没有对应的纸质书",
          lessInventory: "纸质书库存不足"
        },

      },

    }
  }
}

const prod = {
  work_bookdetail: {
    work_bookdetail_04: {
      modulename: {
        showDialog: false,  //控制购买按钮是否显示
        zhentiContentType: '123',  //真题页面需要的配置
        display: {
          courseUseTime: "使用期限：",
          buyCourse: "课程购买",
          sure: "确认支付",
          cancel: "取消",
          needPay: "需支付：",
          payWay: "支付方式",
          zhifubao: "支付宝",
          weixin: "微信",
          drumpPage: "正在跳转支付页面..."
        },
        getResourceDetail: { // 获取某一栏目下的数据列表
          url: "book/getBookDetail.do",
          params: {
            pubId: "",
            loginName: "",
            attachTypes: 'video'  //获取视频时需要传的参数
          },
          "ZILIAOZU": {
            "sysAdapter": "sykAdapter",
            "typeAdapter": "ziliaozu"
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "bookAdapter", // 类型字段
          defaultSaleUrl:"https://www.tmall.com/",
          complicatedItem: {
            "one": [{
              name: '',
              field: '',
              display: '',
              afterDisplay: '',//固定显示内容是什么 后
              method: '',
              className: "",
            }],
            "two": [{
              name: '',
              field: '',
              display: '',
              afterDisplay: '',//固定显示内容是什么 后
              method: '',
              className: "",
            }],
          },
        },
        toProbation: {
          url: "",
          dataKeys: {
            bookId: "resId", // key是地址请求参数名 value是从适配器里取对应的
            bookName: "resName"
          },
          fixedKeys: {
            siteType: 0, // 0 网站 1 微信
            readType: 0, // 0 试读 1 全读
          }
        },
        toDetail: { // 去资讯详情页面
          url: "../pages/informationdetail.html",
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        toBuy: { // 去购买
          url: "../pages/bookBuy.html",
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
        tabConfigList: { //tab切换配置
          tabShow: true,
          reviewShow: true,
          tabList: ["详情", "评论"], //只能改字哦，
          tabActiveIndex: 0, //默认展示第一个就是0 默认第二个就是1
          toAllReviewName: "查看全部评论", //查看全部评论
          toAllReviewMethod: {
            method: 'toReviewList',
          },
        },
        getPublicizeInfo: { // 获取图书相关信息(前言、图书简介、作者简介、目录、后记等)
          url: "spc/prodb/publicize.do",
          params: {
            doclibCode: "BOOK",
            docID: ""
          },
          isShowPublicize: true, // 是否显示相关信息
          showPublicize: ["前言", "内容简介", "目录"], // 数组过滤需要显示的内容
        },
        getAudioAttachment: { // 获取有声书音频附件
          url: "resource/detail.do",
          params: {
            loginName: "",
            pubId: "",
            siteId: CONFIG.SITE_CONFIG.siteId,
            attachTypes: "audio", // 附件类型
          },
          isShowAudio: true, // 是否显示音频列表
        },
        addCart: { // 加入购物车
          url: "cart/addCart.do",
          params: {
            number: "",
            loginName: "",
            activityId: 0,
            pubId: "",
            siteId: CONFIG.SITE_CONFIG.siteId
          }
        },
        collectOrLike: { // 收藏 或 点赞 操作
          url: "collection/addCollect.do",
          params: {
            loginName: "",
            pubId: "",
            operateType: 0, // 0 收藏 1 点赞
            productId: "",
            siteId: CONFIG.SITE_CONFIG.siteId
          }
        },
        toReviewList: { // 去评论列表页面
          url: "../pages/reviewlist.html",
          dataKeys: {
            colId: "id", // colId是从适配器里对应的
          },
          fixedKeys: {}
        },
        bugButton: {
          display: "立即购买",
          method: "toBuy",
          display1: "加入书架",
          method1: "toBuy",
          display2: "开始阅读",
          method2: "toProbation",
        },
        bookContentType: { // 书的类型  纸书：91 电子书 94
          bookType: '91',
          ebookType: '94',
        },
        getPubidByLocationQueryFromSyk:{/* 通过地址栏参数从索引中查图书详情所需的pubId */
          url:'spc/cms/publish/list.do',
          params:{
            conditions: [/* 条件配置 */
            ],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc",
            pageNo: "1",
            pageSize: "10",
            searchText: "",
          },
          queryParams:{
            title:'BOOK_SYS_TOPIC'
          }
        },
        staticText: {
          noImg: "暂无图片",
          noResource: "暂无",
          quantityOfGoodsMustNotExceedTwoHundred: "商品数量不能大于200",
          systemPrompt: "系统提示",
          OK: "确定",
          noPaperBookInfo: "该书没有对应纸质书，无法加入购物车",
          noEBookInfo: "该书没有对应电子书，无法加入购物车",
          noDate:"暂无日期",
          yuan:"￥"
        },
        getPayMethodsBySiteId: {  //获取站点的支付方式
          url: "cart/getPayMethod.do",
          params: {
            siteId: ''
          }
        },
        commitOrderUrl: "order/submitSplitOrder.do", //提交订单接口
        "combinateProductCfg":{
          "show":true,  // 是否显示组合购买
          "title":"组合购买",   // 组合购买数据的标题名称
          "lastBtn":"加入购物车",  // 最后一个按钮显示内容
          "showThisBook":true,  //是否展示本图书
          "showCombinateItem":3,  //展示图书个数
          "addCart":{
            "url":"cart/addCombinateProductToCart.do",
            "params":{
              "loginName": "",
              "siteId": 37,
              "combinateId":""
            }
          },
          "toDetail":{
            "url":"booldetail.html", // 跳转的详情页
            "params":{}
          }
        },
        "loginUrl": "../../pages/login.html",  //跳登录页
        judgeInventory: {  //库存量配置
          showInventory: true,
          noPaperBook: "没有对应的纸质书",
          lessInventory: "纸质书库存不足"
        },

      },

    }
  }
}

const platform = 'PC';
const pageType = [];
const resourceType = [];

const childComponents = ['work_bookdetail_04', 'work_bookreview_01', 'ui_share_01'];

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
