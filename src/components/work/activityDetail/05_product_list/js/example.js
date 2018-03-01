import component from '../productList.vue'
const name = component.name;  // 组件标签名
const title = '作品列表组件';  // 组件title
const description = `作品列表组件
  接受viewType属性，默认‘complete’，可选值‘simple’，显示完成功能或简易功能`;  // 组件描述信息
const dev = {
  activityDetail: {
    work_activitydetail_05: {
      'module1': {
        url: '/data/work_activitydetail_05.json',
        keys: {
          title: 'title',
          author: 'author',
          date: 'date',
          abstract: 'abstract',
          teacherCommentNum: 'teacherCommentNum',
          voteNum: 'voteNum'
        },
        eventName_listenLoadedData: '',
        eventName_listenSearch: '',
        isDevelopment: true,
      }

    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_05: {
      'module1': {
        url: 'spc/prodb/getWorkList.do',
        toProductDetailUrl: 'productiondetail.html',
        params: {
          doclibCode: 'PORTAL_WORKS',
          relations: '1',
          cols: 'ACTIVITYID',
          symbols: '2',
          vals: '601858',
          memberType: '4',
          toProductDetailParam_resourceType: 'PORTAL_WORKS'
        },
        keys: {
          title: 'SYS_TOPIC',
          author: 'POTHUNTER_NAME',
          date: 'VOTE_COUNT',
          abstract: 'DESCRIPTION',
          teacherCommentNum: 'DIS_COUNT_NUM',
          voteNum: 'VOTE_COUNT',
          resourceId: 'SYS_DOCUMENTID',
          resourceName: 'SYS_TOPIC',
          activityId: 'ACTIVITYID',
          toProductDetailParam_resourceType: 'resourceType',
          toProductDetailParam_resourceId: 'resourceId',
          toProductDetailParam_colId: 'colId',
          toProductDetailParam_resourceName: 'resourceName',
          toProductDetailParam_activityId: 'activityId',
        },
        eventName_listenLoadedData: '',
        eventName_listenSearch: '',
        isDevelopment: false,
      }

    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };