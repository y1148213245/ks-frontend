import component from '../candidateList.vue'
const name = component.name;  // 组件标签名
const title = '参赛人列表组件';  // 组件title
const description = `参赛人列表组件`;  // 组件描述信息
const dev = {
  activityDetail: {
    work_activitydetail_09: {
      "activityCandidate": {
        url: 'spc/cms/publish/list.do',
        keys: {},
        eventName_loadDate: 'loadSearchResult',
      }
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_09: {
      "activityCandidate": {
        showType: 'candidate',/* candidate:参选人,prizewinner:获奖人 */
        getCandidateList: {
          url: 'spc/prodb/searchNLP.do',
          params: {
            doclibCode: 'PORTAL_VOTE'
          },
          fixedParams:[{
            relations: '5',
            cols: 'TEXT',
            symbols: '5',
            vals: '5'
          }],
          getActivityDetailData: [{
            relations: '1',
            cols: 'ACTIVITYID',
            symbols: '2',
            vals: 'resId'
          }],
          sysAdapter: 'zykAdapter',
          typeAdapter: 'candidateAdapter',
        },
        getAwardList: {/* 获取奖项列表配置 */
          url: 'spc/prodb/searchNL.do',
          params: {
            doclibCode: 'PORTAL_AWARD',
            page: 1,
            size: 99
          },
          sysAdapter:'zykAdapter',
          typeAdapter:'activityAwardAdapter',

          getActivityDetailData: [{
            relations: '1',
            cols: 'ACTIVITYID',
            symbols: '2',
            vals: 'resId'
          }]
        },
        activityDetail: {/* 活动详情配置 */
          event: {
            listenName: 'eventName_loadedDatas',
          },
          sysAdapter: 'sykAdapter',
          typeAdapter: 'activityVoteAdapter',
        }
      }

    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };