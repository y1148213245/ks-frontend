/**
 * Created by teng.ym on 2018/02/05.
 * 活动列表展示页
 */

import component from "../picListcolumn.vue";

const name = component.name;  // 组件标签名

const title = "栏目列表组件";  // 组件title

const description = `栏目列表`;  // 组件描述信息

const dev = {
  staticText: {
    activityTime: "活动时间：",
    seeMore: "查看更多...",
    noImg: "暂无图片",
    to: "至",
    notBegin: "未开始",
    inProgress: "进行中",
    appraisalBonus: "评奖中",
    haveFinished: "已结束",
    noDate: "暂无日期"
}
};

const prod = {
  list_pic:{
    ui_list_pic_22:{
      url:`spc/cms/col/getColNextLevelNode`,
      params:{
        colId:'248'
      },
      activityListUrl:"./activitylist.html",
      showActivityTypeStr:'ACTIVITY',/* 显示栏目类型包含当前字符串的栏目 */
      keys:{
        small_pic:"small_pic",
        id:"id",
        name:"name",
        contentCode:'contentCode'
      },
      getActivityList:{
        url:'spc/cms/publish/list.do',
        params: {
          conditions: [{"pub_col_id":"253"}],
          orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc', // 默认orderBy
          pageNo: "1",
          pageSize: "3",
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
            reviewDate:''
          },
          'show':{
            topic: "PORTAL_SHOWACTIVITY_SYS_TOPIC",
            beginTime: "",
            endTime: "",
            reviewDate:'',
          }

        }
      },
      staticText: {
        activityTime: "活动时间：",
        seeMore: "查看更多...",
        noImg: "暂无图片",
        to: "至",
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

export {name, title, dev, prod, description, platform, pageType, resourceType};
