/**
 * Created by ma.jw on 2018/6/23.
 */

/*
 * @Author: ma.jw
 * @Date: 2018-06-09 11:28
 * @Last Modified by: ma.jw
 * 我的书架
 */

import component from "../mycollection.vue";

const name = component.name; // 组件标签名

const title = "收藏组件"; // 组件title


const description = `这是收藏组件`; // 组件描述信息


const dev = {
	work_mobile_personalcenter: {
    work_mobile_personalcenter_14: {
      display:{
        navTitle: '我的收藏',
        tabTitle:[
          {index:0,title:'图书'},
          {index:1,title:'期刊'},
          {index:2,title:'知识服务'}
        ],
        allCancelCollection:'批量取消收藏',
        cancelCollection:'取消收藏',
        author:'作者',
        classification:'分类',
        source:'视频来源',
        publicationDate:'出版时间',
        priceType:'￥',
        isbn: 'ISBN:'
      },
      toKnowledgeService: 'https://www.baidu.com/', //TODO知识服务外链，还没有地址，先这么写
      getCollectList: {
        url: "collection/getCollectList.do",
        params: {
          loginName:'',   //用户名
          pageIndex:'1',   //页码
          pageSize:'15',   //每页个数
          siteId:'',   //站点Id
          contentType:'94',  //内容类型91纸质书 94电子书 PORTAL_WORKS:作品
        }
      },
      cancelCollect:{
        url: "/collection/cancelCollect.do",
        params: {
          pubIds:'12,13,14',      //收藏商品的pubIDs，以逗号隔开12,13,14
          loginName:'',   //用户名
          siteId:'',   //站点Id
        }
      },
      emitEvent: {//发广播的事件名称
        contextEventName: 'showContext'
      }
    }
	}
}

const prod = {
  work_mobile_personalcenter_14: {
    display:{
      navTitle: '我的收藏',
      tabTitle:[
        {index:0,title:'图书'},
        {index:1,title:'期刊'},
        {index:2,title:'知识服务'}
      ],
      allCancelCollection:'批量取消收藏',
      cancelCollection:'取消收藏',
      author:'作者',
      classification:'分类',
      source:'视频来源',
      publicationDate:'出版时间',
      priceType:'￥',
      isbn: 'ISBN:'
    },
    toKnowledgeService: 'https://www.baidu.com/', //TODO知识服务外链，还没有地址，先这么写
    getCollectList: {
      url: "collection/getCollectList.do",
      params: {
        loginName:'',   //用户名
        pageIndex:'1',   //页码
        pageSize:'15',   //每页个数
        siteId:'',   //站点Id
        contentType:'94',  //内容类型91纸质书 94电子书 PORTAL_WORKS:作品
      }
    },
    cancelCollect:{
      url: "/collection/cancelCollect.do",
      params: {
        pubIds:'12,13,14',      //收藏商品的pubIDs，以逗号隔开12,13,14
        loginName:'',   //用户名
        siteId:'',   //站点Id
      }
    },
    emitEvent: {//发广播的事件名称
      contextEventName: 'showContext'
    }
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
