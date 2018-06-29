/*  图书详情组件  Created by song 2018/05/18  */
import component from "../bookdetail.vue";

const name = component.name; // 组件标签名

const title = "图书详情组件"; // 组件title

const description = `图书详情组件`; // 组件描述信息

const dev = {
  work_bookdetail: {
    work_bookdetail_04: {
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
          }, {
            name: 'probation',
            field: '',
            display: '免费试读',
            display1: '全文阅读',
            method: 'toProbation', // 方法名 要在下面配置
            className: "fas fa-book",
          }, {
            name: 'addcart',
            field: '',
            display: '加入购物车',
            method: 'addCart', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'addebcart',
            field: '',
            display: '电子书加入购物车',
            method: 'addCart', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'like',
            field: '',
            display: '点赞',
            method: 'collectOrLike',
            className: "fas fa-thumbs-up",
          }, {
            name: 'collect',
            field: '',
            display: '收藏',
            method: 'collectOrLike',
            className: "fas fa-heart",
          }, {
            name: 'share',
            field: '',
            display: '',
            method: '',
            className: "",
          }],
        },
        toProbation: {
          url: CONFIG.READ_URL,
          dataKeys: {
            bookId: "resId", // key是地址请求参数名 value是从适配器里取对应的
            bookName: "resName"
          },
          fixedKeys: {
            siteType: 0,
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
        toMore: { // 去更多（资讯列表）页面
          url: "../pages/informationlist.html",
          dataKeys: {
            colId: "id", // colId是从适配器里对应的
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
        infoImgWidth: 320, // 资讯图片的宽 要和图片外层容器  宽一样
        infoImgHeight: 220, // 资讯图片的高 要和图片外层容器  高一样
        tabConfigList:{           //tab切换配置
          tabShow:true,
          reviewShow:true,
          tabList:["详情","评论"],   //只能改字哦，
          tabActiveIndex:0, //默认展示第一个就是0 默认第二个就是1
          toAllReviewName:"查看全部评论",     //查看全部评论
          toAllReviewMethod:{
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
        bugButton:{
          display:"立即购买",
          method: "toBuy",
          display1:"加入书架",
          method1: "toBuy",
          display2:"开始阅读",
          method2: "toProbation",
        }
      },
      staticText: {
        noImg: "暂无图片",
        noResource: "暂无",
        quantityOfGoodsMustNotExceedTwoHundred:"商品数量不能大于200",
        systemPrompt: "系统提示",
        OK: "确定",
        noPaperBookInfo: "该书没有对应纸质书，无法加入购物车",
        noEBookInfo:"该书没有对应电子书，无法加入购物车"
      }

    }
  }
}

const prod = {
  work_bookdetail: {
    work_bookdetail_04: {
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
          }, {
            name: 'probation',
            field: '',
            display: '免费试读',
            display1: '全文阅读',
            method: 'toProbation', // 方法名 要在下面配置
            className: "fas fa-book",
          }, {
            name: 'addcart',
            field: '',
            display: '加入购物车',
            method: 'addCart', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'addebcart',
            field: '',
            display: '电子书加入购物车',
            method: 'addCart', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'like',
            field: '',
            display: '点赞',
            method: 'collectOrLike',
            className: "fas fa-thumbs-up",
          }, {
            name: 'collect',
            field: '',
            display: '收藏',
            method: 'collectOrLike',
            className: "fas fa-heart",
          }, {
            name: 'share',
            field: '',
            display: '',
            method: '',
            className: "",
          }],
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
        tabConfigList:{           //tab切换配置
          tabShow:true,
          reviewShow:true,
          tabList:["详情","评论"],   //只能改字哦，
          tabActiveIndex:0, //默认展示第一个就是0 默认第二个就是1
          toAllReviewName:"查看全部评论",     //查看全部评论
          toAllReviewMethod:{
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
        bugButton:{
          display:"立即购买",
          method: "toBuy",
          display1:"加入书架",
          method1: "toBuy",
          display2:"开始阅读",
          method2: "toProbation",
        },
        bookContentType: { // 书的类型  纸书：91 电子书 94
          bookType: '91',
          ebookType: '94',
        },
      },
      staticText: {
        noImg: "暂无图片",
        noResource: "暂无",
        quantityOfGoodsMustNotExceedTwoHundred:"商品数量不能大于200",
        systemPrompt: "系统提示",
        OK: "确定",
        noPaperBookInfo: "该书没有对应纸质书，无法加入购物车",
        noEBookInfo:"该书没有对应电子书，无法加入购物车"
      }

    }
  }
}

const platform = 'PC';
const pageType = [];
const resourceType = [];

const childComponents = ['work_bookdetail_04','work_bookreview_01','ui_share_01'];

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
