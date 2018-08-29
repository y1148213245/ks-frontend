/**
 * Created by song on 2018/1/18.
 * 购买该书的用户还买  / 该作者其他图书
 */

import component from "../2ColsWithRank.vue";


const name = component.name;

const title = "图书列表组件";

const description = "图书列表组件，两列带排序";

const dev = {
  _2colsWithSort: {
    queryBookList: {
      url: '/data/ui_list_pic_17.json',
      params: {},
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
        check:"查看",
        noAuthor:"暂无作者",
        share:"分享"
      },
      toIndexHref:"../pages/index.html",
      toEBookHref: "../pages/ebook.html",
      toBookDetailHref: "../pages/bookdetail.html",
    }
  }
};

const prod = {
  _2colsWithSort: {
    queryBookList: {
      url:  'spc/cms/publish/list.do',
      params: {
        conditions: '',
        orderBy: '',
        pageNo: '',
        pageSize: '',
        searchText: '',
        groupBy: 'pub_resource_id'
      },
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
        check:"查看",
        noAuthor:"暂无作者",
        share:"分享"
      },
      toIndexHref:"../pages/index.html",
      toEBookHref: "../pages/ebook.html",
      toBookDetailHref: "../pages/bookdetail.html",
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
