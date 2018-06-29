/*
 * @Author: ma.jw
 * @Date: 2018-06-09 11:28
 * @Last Modified by: ma.jw
 * 我的书架
 */

import component from "../booklist.vue";

const name = component.name; // 组件标签名

const title = "图书列表"; // 组件title


const description = `嵌套在我的书架和我的收藏的组件`; // 组件描述信息


const dev = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_08: {
      'bookmyshelf':{
        display: { // 组件静态文本
          navTitle: '我的书架',
          manage:'管理',
          cancel:'取消',
          empty: '您的书架是空的哦',
          btnname:"去书城逛逛",
          delete:'删除',
          readTrying: '试读',
          noProbation: '暂无试读文件'
        },
        probation:{
          url:'',
          params:{
            bookId:'',
            readType:0,
            bookName:'',
            userName:'',
            siteType:''
          }
        },
        toDetailUrl: '../pages/bookdetail.html',
        toBookLibraryUrl: '../pages/index.html', //TODO 暂时不知道书城地址,写了个详情的地址
        emitEvent: { // 发广播事件名称
          contextEventName: 'showContext'
        },
        getlist: {
          url: "/user/getBookShelfList.do",
          params: {
            loginName:'', //用户名
            pageIndex:'1', //页码
            pageSize:'15', //每页显示的页数
            type:'2',    //类型2：购买
            siteId:'', // 站点id
            productType:'', //商品类型电子期刊:periodical
            status:'1'  // 状态1:加入书架0：未加入书架
          }
        },
        delete:{
          url: "/user/deleteBookShelf.do",
          params: {
            loginName:'',  //用户名
            pubId:'1',     //图书发布ID
            siteId:'', // 站点id
          }
        }
      },
      'collection':{
        display: { // 组件静态文本
          navTitle: '我的收藏夹',
          manage:'管理',
          cancel:'取消',
          empty: '您的收藏夹是空的哦',
          btnname:"去书城逛逛",
          delete:'删除',
          readTrying: '试读',
          noProbation: '暂无试读文件'
        },
        toDetailUrl: '../pages/bookdetail.html',
        toBookLibraryUrl: '../pages/index.html', //TODO 暂时不知道书城地址,写了个详情的地址
        emitEvent: { // 发广播事件名称
          contextEventName: 'showContext'
        },
        getlist: {
          url: "/collection/getCollectList.do",
          params: {
            loginName:'',   //用户名
            pageIndex:'1',   //页码
            pageSize:'15',   //每页个数
            siteId:'',   //站点Id
            contentType:'',  //内容类型91纸质书 94电子书 PORTAL_WORKS:作品
          }
        },
        delete:{
          url: "/collection/cancelCollect.do",
          params: {
            pubIds:'12,13,14',      //收藏商品的pubIDs，以逗号隔开12,13,14
            loginName:'',   //用户名
            siteId:'',   //站点Id
          }
        }
      },

    }
  }
}

const prod = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_08: {
      'bookmyshelf':{
        display: { // 组件静态文本
          navTitle: '我的书架',
          manage:'管理',
          cancel:'取消',
          empty: '您的书架是空的哦',
          btnname:"去书城逛逛",
          delete:'删除',
          readTrying:'试读'
        },
        probation:{
          url:'',
          params:{
            bookId:'',
            readType:0,
            bookName:'',
            userName:'',
            siteType:''
          }
        },
        toDetailUrl: '../pages/bookdetail.html',
        toBookLibraryUrl: '../pages/bookdetail.html', //TODO 暂时不知道书城地址,写了个详情的地址
        emitEvent: { // 发广播事件名称
          contextEventName: 'showContext'
        },
        getlist: {
          url: "/user/getBookShelfList.do",
          params: {
            loginName:'', //用户名
            pageIndex:'1', //页码
            pageSize:'15', //每页显示的页数
            type:'2',    //类型2：购买
            siteId:'', // 站点id
            productType:'', //商品类型电子期刊:periodical
            status:'1'  // 状态1:加入书架0：未加入书架
          }
        },
        delete:{
          url: "/user/deleteBookShelf.do",
          params: {
            loginName:'',  //用户名
            pubId:'1',     //图书发布ID
            siteId:'', // 站点id
          }
        }
      },
      'collection':{
        display: { // 组件静态文本
          navTitle: '我的收藏夹',
          manage:'管理',
          cancel:'取消',
          empty: '您的收藏夹是空的哦',
          btnname:"去书城逛逛",
          delete:'删除',
          readTrying:'试读'
        },
        toDetailUrl: '../pages/bookdetail.html',
        toBookLibraryUrl: '../pages/bookdetail.html', //TODO 暂时不知道书城地址,写了个详情的地址
        emitEvent: { // 发广播事件名称
          contextEventName: 'showContext'
        },
        getlist: {
          url: "/collection/getCollectList.do",
          params: {
            loginName:'',   //用户名
            pageIndex:'1',   //页码
            pageSize:'15',   //每页个数
            siteId:'',   //站点Id
            contentType:'',  //内容类型91纸质书 94电子书 PORTAL_WORKS:作品
          }
        },
        delete:{
          url: "/collection/cancelCollect.do",
          params: {
            pubIds:'12,13,14',      //收藏商品的pubIDs，以逗号隔开12,13,14
            loginName:'',   //用户名
            siteId:'',   //站点Id
          }
        }
      },

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
