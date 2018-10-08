/*
 * @Author: zrn
 * @Date: 2018-09-25
 * 搜索结果列表,多资源类型,初衷只展示好书快听,电子书,有声书
 */

import component from "../searchResult.vue";

const name = component.name; // 组件标签名

const title = "搜索结果列表组件"; // 组件title

const description = `搜索结果列表 isMobileLoading 是否下拉加载默认不需要,展示多资源类型的数据,
1、有声书站点搜索结果页`; // 组件描述信息

const dev = {
  search: {
    search_result_07: {
      modulename: {
        url: "../data/work_search_07.json",
        param: {
          conditions:
            "[{pub_site_id:'42'},{pub_status:'1'},{pub_resource_type: 'REVIEW OR BOOK OR BOOK_MATERIAL',op: 'in'}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "10",
          searchText: ""
        },
        sysAdapter: "sykAdapter", // 系统字段
        typeAdapter: {
          "review":"reviewAdapter", 
          "book":"bookAdapter", 
          "bookMaterial":"bookMaterialAdapter"
        }, // 类型字段
        complicatedItem: {
          "review": [{
            name: 'img',
            field: 'picBig',
            display: '',
            method: 'toDetail'
          },{
            name: 'button',
            field: 'resName',
            display: '',
            method: 'toDetail'
          },{
            name: 'button',
            field: 'sysAuthors',
            display: '',
            method: ''
          },{
            name: 'button',
            field: 'synopsis',
            display: '',
            method: ''
          }],
          "book": [{
            name: 'img',
            field: 'picBig',
            display: '',
            method: 'toDetail'
          },{
            name: 'button',
            field: 'resName',
            display: '',
            method: 'toDetail'
          },{
            name: 'button',
            field: 'sysAuthors',
            display: '',
            method: ''
          },{
            name: 'button',
            field: 'synopsis',
            display: '',
            method: ''
          }],
          "bookMaterial": [{
            name: 'img',
            field: 'picBig',
            display: '',
            method: 'toDetail'
          },{
            name: 'button',
            field: 'resName',
            display: '',
            method: 'toDetail'
          },{
            name: 'button',
            field: 'sysAuthors',
            display: '',
            method: ''
          },{
            name: 'button',
            field: 'synopsis',
            display: '',
            method: ''
          }]
        },
        isShowTotalCountTag: false,
        pageSizes: [10, 20, 50, 100],
        eventName_loadDate: "showSearchResultTypes",
        toDetail:{
          url: "https://www.baidu.com",
          dataKeys:{
            pubId: "id"
          },
          fixedKeys:{}
        },
        isMobileLoading: true,
        isMoreFieldSearch: ["prod_name", "BOOK_SYNOPSIS", "pub_resource_name"],
        toOrderByBtn:{
          name:'排序：',
          isShow: false,
          itemFieldDefult: "pub_a_order desc pub_lastmodified desc id desc",
          itemList:[
            {
              name:"默认",
              itemField: {
                  order: "pub_a_order desc pub_lastmodified desc id desc",
                  sort: 'desc'
              },
              itemField2: {
                  order: "pub_a_order asc pub_lastmodified desc id asc",
                  sort: 'asc'
              }
            },{
              name:"最新",
              itemField: {
                  order:"pub_created desc id desc",
                  sort: 'desc'
              },
              itemField2: {
                  order: "pub_created asc id asc",
                  sort: 'asc'
              }
            },{
              name:"热门",
              itemField: {
                  order: "pub_read_num desc id desc",
                  sort: 'desc'
              },
              itemField2:{
                  order: "pub_read_num asc id asc",
                  sort: 'asc'
              }
            },
          ]
        },
        staticText: {
          total: "共",
          productQuantity: "件商品",
          noCover: "暂无封面",
          author: "作者：",
          copyright: "版权：",
          publish: "出版",
          yuan: "￥",
          commentQuanity: "条评论",
          noDigest: "暂无摘要",
          shareTo: "分享",
          buy: "购买",
          checkInfo: "查看",
          noDate: "暂无日期",
          noRelevantBooks: "暂无相关书籍"
        }
      }
    }
  }
};

const prod = {
  search: {
    search_result_07: {
      modulename: {
        url: "spc/cms/publish/list.do",
        param: {
          conditions:
            "[{pub_site_id:'42'},{pub_status:'1'},{pub_resource_type: 'REVIEW OR BOOK OR BOOK_MATERIAL',op: 'in'}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "10",
          searchText: ""
        },
        sysAdapter: "sykAdapter", // 系统字段
        typeAdapter: {
          "review":"reviewAdapter", 
          "book":"bookAdapter", 
          "bookMaterial":"bookMaterialAdapter"
        }, // 类型字段
        complicatedItem: {
          "review": [{
            name: 'img',
            field: 'picBig',
            display: '',
            method: 'toDetail'
          },{
            name: 'button',
            field: 'resName',
            display: '',
            method: 'toDetail'
          },{
            name: 'button',
            field: 'sysAuthors',
            display: '',
            method: ''
          },{
            name: 'button',
            field: 'synopsis',
            display: '',
            method: ''
          }],
          "book": [{
            name: 'img',
            field: 'picBig',
            display: '',
            method: 'toDetail'
          },{
            name: 'button',
            field: 'resName',
            display: '',
            method: 'toDetail'
          },{
            name: 'button',
            field: 'sysAuthors',
            display: '',
            method: ''
          },{
            name: 'button',
            field: 'synopsis',
            display: '',
            method: ''
          }],
          "bookMaterial": [{
            name: 'img',
            field: 'picBig',
            display: '',
            method: 'toDetail'
          },{
            name: 'button',
            field: 'resName',
            display: '',
            method: 'toDetail'
          },{
            name: 'button',
            field: 'sysAuthors',
            display: '',
            method: ''
          },{
            name: 'button',
            field: 'synopsis',
            display: '',
            method: ''
          }]
        },
        isShowTotalCountTag: false,
        pageSizes: [10, 20, 50, 100],
        eventName_loadDate: "showSearchResultTypes",
        detailHref: "./bookdetail.html?pubId=",
        isMobileLoading: false,
        isMoreFieldSearch: ["prod_name", "BOOK_SYNOPSIS", "pub_resource_name"],
        toOrderByBtn:{
          name:'排序：',
          isShow: false,
          itemFieldDefult: "pub_a_order desc pub_lastmodified desc id desc",
          itemList:[
            {
              name:"默认",
              itemField: {
                  order: "pub_a_order desc pub_lastmodified desc id desc",
                  sort: 'desc'
              },
              itemField2: {
                  order: "pub_a_order asc pub_lastmodified desc id asc",
                  sort: 'asc'
              }
            },{
              name:"最新",
              itemField: {
                  order:"pub_created desc id desc",
                  sort: 'desc'
              },
              itemField2: {
                  order: "pub_created asc id asc",
                  sort: 'asc'
              }
            },{
              name:"热门",
              itemField: {
                  order: "pub_read_num desc id desc",
                  sort: 'desc'
              },
              itemField2:{
                  order: "pub_read_num asc id asc",
                  sort: 'asc'
              }
            },
          ]
        },
        staticText: {
          total: "共",
          productQuanity: "件商品",
          noCover: "暂无封面",
          author: "作者：",
          copyright: "版权：",
          publish: "出版",
          yuan: "￥",
          commentQuanity: "条评论",
          noDigest: "暂无摘要",
          shareTo: "分享",
          buy: "购买",
          checkInfo: "查看",
          noDate: "暂无日期",
          noRelevantBooks: "暂无相关书籍"
        },
        isShowIsbn: false
      }
    }
  }
};

const platform = "PC";
const pageType = ["list"];
const resourceType = ["book"];
const childComponents = ["work_search_07", "ui_share_01"];

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
