/**
 * Created by teng.ym on 2018/02/05.
 * 活动列表展示页
 */

import component from "../picListActivity.vue";

const name = component.name; // 组件标签名

const title = "活动列表组件"; // 组件title

const description = `活动列表`; // 组件描述信息

const dev = {
  list_pic: {
    ui_list_pic_21: {
      url: "../data/ui_list_pic_21.json",
      staticText: {
        activityTime: "活动时间：",
        to: "至",
        noImg: "暂无图片",
        notBegin: "未开始",
        inProgress: "进行中",
        appraisalBonus: "评奖中",
        haveFinished: "已结束",
        noDate: "暂无日期"
      }
    }
  }
};

const prod = {
  list_pic: {
    ui_list_pic_21: {
      url:  'spc/cms/publish/list.do',
      params: {
        conditions: '[{"pub_col_id":"253"}]',
        orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc', // 默认orderBy
        pageNo: "1",
        pageSize: "8",
        searchText: null
      },
      detailHref: {
        activityrace:'./activityrace.html',
        activityvote:'./activityvote.html',
        activityshow:'./activityshow.html'
      },
      baseKeys:{
        id: "id",
        resourceType:'pub_resource_type',
        pub_picMiddle: "pub_picMiddle"
      },
      keys: {
        'contribute':{
          topic: "PORTAL_ACTIVITY_SYS_TOPIC",
          beginTime: "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
          endTime: "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
          reviewDate:'PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW',
        },
        'vote':{
          topic: "PORTAL_VOTEACTIVITY_SYS_TOPIC",
          beginTime: "PORTAL_VOTEACTIVITY_BEGIN_TIMESTAMPNEW",
          endTime: "PORTAL_VOTEACTIVITY_END_TIMESTAMPNEW",
          reviewDate:'',
        },
        'show':{
          topic: "PORTAL_SHOWACTIVITY_SYS_TOPIC",
          beginTime: "",
          endTime: "",
          reviewDate:'',
        }

      },
      pageSizes:[8,16,32,48],
      showItem:['title'],/* 控制显示,目前控制父栏目标题 title */
      getColDetail:{
        url:'spc/cms/col/getColumnByIdForSite',
        keys:{
          name:'name'
        },
        params:{
          colId:'colId'
        }
      },
      staticText: {
        activityTime: "活动时间：",
        to: "至",
        noImg: "暂无图片",
        notBegin: "未开始",
        inProgress: "进行中",
        appraisalBonus: "评奖中",
        haveFinished: "已结束",
        noDate: "暂无日期"
      }
    }
  }
};

const platform = 'PC';
const pageType = ['index'];
const resourceType = ['information'];

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
