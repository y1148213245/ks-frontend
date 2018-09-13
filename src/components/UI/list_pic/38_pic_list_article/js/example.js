/*  稿件列表组件  Created by zrn 2018/08/04  */
import component from "../information.vue";

const name = component.name; // 组件标签名

const title = "稿件组件"; // 组件title

const description = `稿件组件，获取某一期期刊下的所有稿件，并依据稿件栏目来归类
使用页面: 1 金融微信书城 maginfo.html页面;
         2 金融博览财富 magazineinfo.html页面`; // 组件描述信息

const dev = {
  list_pic: {
    list_pic_38: {
      'modulename': {
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "../data/38_data_article.json",
          params: {
            conditions: [{
                pub_parent_id: '3950'
              },
              {
                "PRODUCT-ARTICLE_COLUMNNAME": ""
              },
              {
                  pub_site_id: "35"
              },
              {
                pub_status: '1'
              }
            ],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          startNum: 0, // 从第几条开始取
          maxNum: 100, // 取到第几条
          freeNum: 2,
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "productArticleAdapter", // 类型字段
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
            field: 'picBig', // 取什么字段
            display: '', // 固定显示内容是什么
            method: '', // 方法名 要在下面配置
          }, {
            name: 'button',
            field: 'pages',
            display: '',
            method: '', // 方法名 要在下面配置
          }, {
            name: 'button',
            field: 'resName',
            display: '',
            method: '', // 方法名 要在下面配置
          }],
        },
        toFree:  "../pages/articledetail.html",
        toFee:  "../pages/articledetail.html",
        staticText: {
          noImg: "暂无图片",
          noData: "暂无数据",
          noDate:"暂无日期",
          yuan:"￥",
          free: "免费",
          nofree: "付费"
        }
      }
    }
  }
}

const prod = {
  list_pic: {
    list_pic_38: {
      'modulename': {
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "spc/cms/publish/list.do",
          params: {
            conditions: [{
                pub_parent_id: '3950'
              },
              {
                "PRODUCT-ARTICLE_COLUMNNAME": ""
              },
              {
                  pub_site_id: "35"
              },
              {
                pub_status: '1'
              }
            ],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          startNum: 0, // 从第几条开始取
          maxNum: 100, // 取到第几条
          freeNum: 2,
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "productArticleAdapter", // 类型字段
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
            field: 'picBig', // 取什么字段
            display: '', // 固定显示内容是什么
            method: '', // 方法名 要在下面配置
          }, {
            name: 'button',
            field: 'pages',
            display: '',
            method: '', // 方法名 要在下面配置
          }, {
            name: 'button',
            field: 'resName',
            display: '',
            method: '', // 方法名 要在下面配置
          }],
        },
        toFree:  "../pages/articledetail.html",
        toFee:  "../pages/articledetail.html",
        useIsBuy:true,//是否需要判断数据的isBuy属性来控制稿件的阅读
        staticText: {
          noImg: "暂无图片",
          noData: "暂无数据",
          noDate:"暂无日期",
          yuan:"￥",
          free: "免费",
          nofree: "付费"
        }
      }
    }
  }
}

const platform = 'PC';
const pageType = [];
const resourceType = [];

const childComponents = ["ui_list_pic_38"];

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
