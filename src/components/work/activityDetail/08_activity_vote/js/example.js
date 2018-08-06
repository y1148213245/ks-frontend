import component from '../voteTab.vue'
const name = component.name;  // 组件标签名
const title = '投票活动复合组件';  // 组件title
const description = `投票活动复合组件`;  // 组件描述信息
const dev = {
  activityDetail: {
    work_activitydetail_08: {
      url: '',
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_08: {
      activityCandidate: {
        modulename: 'activityCandidate'
      },
      activityPlan: {
        modulename: 'activityPlan'
      },
      activityPrizewinner: {
        modulename: 'activityPrizewinner'
      },
      activityResult:{
        modulename:'activityResult'
      },
      activityNotice:{
        modulename:'activityNotice'
      },
      tabArr: [
        {
          tag: 'activityInstructions',
          title: '活动说明'
        },
        {
          tag: 'activityPlan',
          title: '活动方案'
        },
        {
          tag: 'activityNews',
          title: '活动新闻'
        },
        {
          tag: 'activityCandidate',
          title: '参训人'
        },
        {
          tag: 'activityPrizewinner',
          title: '获奖人展示'
        }],
      activityDetail: {/* 活动详情配置 */
        event: {
          listenName: 'eventName_loadedDatas',
        },
        sysAdapter: 'sykAdapter',
        typeAdapter: 'activityVoteAdapter',
      }
    }
  }
};

const childComponents = ["work_activitydetail_08", "work_activitydetail_02", "work_activitydetail_03", "work_activitydetail_09"];
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType, childComponents };