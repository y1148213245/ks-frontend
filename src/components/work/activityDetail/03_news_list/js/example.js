/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-07 16:27:52 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-04-20 18:11:08
 */

import component from '../newsList.vue'
const name = component.name;  // 组件标签名
const title = '活动新闻列表组件';  // 组件title
const description = `活动新闻列表组件`;  // 组件描述信息
const dev = {
  activityDetail: {
    work_activitydetail_03: {
      url: '/data/work_activitydetail_03.json',
      keys: {
        title: "title",
        picUrl: "picUrl",
        date: "date",
        abstract: "abstract"
      },
      eventName_listen:'',
      isDevelopment:true,//自动加载数据 不需要事件触发
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_03: {
      url:  'spc/prodb/activity/activityNews.do',
      getPicUrl: 'dynamicFile/stream.do',
      params:{
        getListParam_pageNo:'1',
        getListParam_pageSize:'10',
        getListParam_orderBy:'SYS_DOCUMENTID DESC',
      },
      keys: {
        title: "SYS_TOPIC",
        picId: "COVERID",
        date: "SYS_CREATED",
        abstract: "ABSTRACT",
        eventListenData_activityId:'pub_resource_id',/* 加载数据所需要的要取事件传过来的数据 的字段名*/
        getPicParam_coverId:'recordID',/* 图片查询参数 活动id */
        getListParam_activityID:'activityID',/* 列表查询参数 活动id */
        getListParam_pageNo:'page',/* 列表查询参数 页码 */
        getListParam_pageSize:'pageSize',/* 列表查询参数 页容 */
        getListParam_orderBy:'orderBy',/* 列表查询参数 排序 */
      },
      toDetailMode:{/* 去详情页模式 ，选其一：'event'抛出事件传入参数,一个参数为当前新闻数据,第二个参数为列表查询参数对象(详情上一篇下一篇会用到)，'href' href转跳 */
        event:{
          name:'eventName_toNewsDetail',/* 事件名 */
        },
        href:{
          url:'./newsdetail.html',/* 转跳url */
          params:{/* 查询参数 对象的key为参数名,value为从组件新闻数据中获取的字段名 */
            'docID':'SYS_DOCUMENTID'
          },
          activityParams:{/* 查询参数 对象的key为参数名,value为从组件活动数据中获取的字段名 */
            'activityID':'activityId'
          },
          fixedParams:{/* 查询参数 对象的key为参数名,value为值 */
            'page':'1',
            'pageSize':'10',
            'orderBy':'SYS_DOCUMENTID DESC',
          }
        }
      },
      eventName_listen:''/* 监听事件名,事件获取参数后加载数据 */
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };