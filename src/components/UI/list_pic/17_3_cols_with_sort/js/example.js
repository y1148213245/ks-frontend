/**
 * Created by qinff on 2018/1/18.
 * 图书列表组件
 */

import component from "../3ColsWithSort.vue";


const name = component.name;

const title = "图书列表组件";

const description = "图书列表组件，3列带排序按钮";

const dev = {
  _3colsWithSort: {
    queryBookList: {
      url: '/data/ui_list_pic_18.json',
      params: {},
      toIndexHref:"../pages/index.html",
      toEBookHref: "../pages/ebook.html",
      toBookDetailHref: "../pages/bookdetail.html",
      staticText:{
        homePage:"首页",
        ebay:"电子书城",
        moreBookList:"更多图书列表",
        defaultSort:"默认排序",
        pubTime:"发布时间",
        salesVolume:"销量",
        comment:"评论",
        noPic:"暂无图片",
        author:"作者",
        originalPrice:"原价",
        currentPrice:"现价",
        buy:"购买",
        check:"查看"
      }
    }
  }
};

const prod = {
  _3colsWithSort: {
    queryBookList: {
      url:  'spc/cms/publish/list.do',
      params: {
        conditions: '',
        orderBy: '',
        pageNo: '',
        pageSize: '',
        searchText: '',
        groupBy: 'pub_resource_id'
      }
    },
    showPrice: true,
    secondCrumbsName:"电子书城",
    secondCrumbsUrl:"../pages/ebook.html",
    toIndexHref:"../pages/index.html",
    toEBookHref: "../pages/ebook.html",
    toBookDetailHref: "../pages/bookdetail.html",
    staticText:{
      homePage:"首页",
      ebay:"电子书城",
      moreBookList:"更多图书列表",
      defaultSort:"默认排序",
      pubTime:"发布时间",
      salesVolume:"销量",
      comment:"评论",
      noPic:"暂无图片",
      author:"作者",
      originalPrice:"原价",
      currentPrice:"现价",
      buy:"购买",
      check:"查看"
    }
  }
};
const platform = 'PC';
const pageType = ['index', 'list'];
const resourceType = ['book'];

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
