import component from '../teacherList.vue'
const name = component.name;  // 组件标签名
const title = '当前活动教师评论列表组件';  // 组件title
const description = `当前活动教师评论列表`;  // 组件描述信息

const dev = {
  activityDetail: {
    work_activitydetail_06: {
      url: '/data/work_activitydetail_06',
      keys: {
        name:'name',
        picUrl:'picUrl',
        comment:'comment',
        abstract:'abstract',
      },
      toDetailHref:'',
      isDevelopment:true,
      eventName_listen:'loadSearchResult'
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_06: {
      url:  'comment/getActivityDiscussDetail.do',
      params:{
        paging_pageSizes:[15,30,50,100],
        requestParam_memberType:'4',
        requestParam_pageNo:'1',
        requestParam_pageSize:'15'
      },
      keys: {
        name:'userName',
        picUrl:'picture',
        commentProduct:'resourceName',
        commentContent:'disContent',
        requestParam_activityId:'activityId',
        requestParam_memberType:'memberType',
        requestParam_pageNo:'pageNo',
        requestParam_pageSize:'pageSize',
        eventName_listenData_activityId:'pub_resource_id',
      },
      eventName_listen: 'loadSearchResult',
      toProductDetail:{/* 去作品详情页配置 */
        url:'./productiondetail.html',
        superKeys:{/* key为参数名，value为从监听事件返回的数据中取数据的字段名，取出对应字段的值 */
          activityId:'pub_resource_id'
        },
        dataKeys:{/* key为参数名，value为从列表数据中取数据的字段名，取出对应字段的值 */
          resourceId:'resourceId',
          resourceName:'resourceName',
          
        },
        fixKeys:{/* 固定参数 key为参数名，value为值*/
          resourceType:'PORTAL_WORKS',
          colId:''
        }
      }
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };