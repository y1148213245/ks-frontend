/**
 * created by song 2017/12/19
 * 左侧分类导航栏组件的配置文件 放请求的url、params...
 */

import component from "../tab.vue";

const name = component.name;  // 组件标签名

const title = "华育活动竞赛项目组件";  // 组件title

const description = `华育活动竞赛项目组件`;  // 组件描述信息

const dev = {
  activityDetail: {
    work_acitivityrace_07: {
      tabArr: [
        {
          tag:'activityInstructions',
          title:'活动说明'
        },
        {
          tag:'activityPlan',
          title:'活动方案'
        },
        {
          tag:'activityNews',
          title:'活动新闻'
        },
        {
          tag:'activityProduct',
          title:'参赛作品'
        },
        {
          tag:'activityProductWinning',
          title:'获奖作品'
        },
        {
          tag:'activityTeather',
          title:'名师指导'
        }],
      staticText: {
        announcement: "公告",
        displayExcellentWorks: "优秀作品展示",
        yes: "是",
        pleaseWaitForTheReview: "请等待评审"
      }
    }
  }
};

const prod = {
  activityDetail: {
    work_acitivityrace_07: {
      tabArr: [
        {
          tag:'activityInstructions',
          title:'活动说明'
        },
        {
          tag:'activityPlan',
          title:'活动方案'
        },
        {
          tag:'activityNews',
          title:'活动新闻',
          subModules:['notice','goodProduct']
        },
        {
          tag:'activityProduct',
          title:'参赛作品',
          subModules:['notice','goodProduct']
        },
        {
          tag:'activityProductWinning',
          title:'获奖作品'
        },
        {
          tag:'activityTeather',
          title:'名师指导',
          subModules:['notice','goodProduct']
        }],
      staticText: {
        announcement: "公告",
        displayExcellentWorks: "优秀作品展示",
        yes: "是",
        pleaseWaitForTheReview: "请等待评审"
      }
    }

  }
};
const childComponents = ["work_acitivityrace_07", "work_activitydetail_01", "work_activitydetail_02", "work_activitydetail_03", "work_activitydetail_04", "work_activitydetail_05", "work_activitydetail_06", "work_bookreview_02"];
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['activity'];

export { name, title, dev, prod, description, platform, pageType, resourceType, childComponents };

