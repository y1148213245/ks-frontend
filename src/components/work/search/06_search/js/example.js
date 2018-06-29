/**
 * Created by song on 2018/3/22
 * 搜索组件
 */

import component from "../search.vue";


const name = component.name; // 组件标签名

const title = "搜索组件"; // 组件title

const description = `搜索组件`; // 组件描述信息

const dev = {
  search: {
    search_01: {
      searchUrl: "../pages/search.html", // 搜索链接
      advSearchUrl: "../pages/searchadvanced.html", // 高级检索链接
      searchConditionArr: [{
        name: "全部",
        tag: "all"
      }, {
        name: "图书",
        tag: "BOOK"
      }, {
        name: "资讯",
        tag: "information"
      }, {
        name: "视频",
        tag: "VIDEO-MEDIA"
      }],
      staticText: {
        search: "搜索",
        inputKeyWord: "输入关键字",
        advancedSearch: "高级搜索"
      }
    }
  }
}

const prod = {
  search: {
    search_01: {
      searchUrl: "../pages/search.html", // 搜索链接
      advSearchUrl: "../pages/searchadvanced.html", // 高级检索链接
      searchConditionArr: [{
        name: "全部",
        tag: "all"
      }, {
        name: "图书",
        tag: "BOOK"
      }, {
        name: "资讯",
        tag: "information"
      }, {
        name: "视频",
        tag: "VIDEO-MEDIA"
      }],
      staticText: {
        search: "搜索",
        inputKeyWord: "输入关键字",
        advancedSearch: "高级检索"
      }
    }
  }
};

const platform = 'PC';
const pageType = ['index'];
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
