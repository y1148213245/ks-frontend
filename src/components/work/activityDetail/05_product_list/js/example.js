import component from '../productList.vue'
const name = component.name;  // 组件标签名
const title = '作品列表组件';  // 组件title
const description = `作品列表组件`;  // 组件描述信息
const dev = {
  activityDetail: {
    work_activitydetail_05: {
      url: '/data/work_activitydetail_05.json',
      keys:{
        title:'title',
        author:'author',
        date:'date',
        abstract:'abstract',
        teacherCommentNum:'teacherCommentNum',
        voteNum:'voteNum'
      },
      eventName_listenLoadedData:'',
      eventName_listenSearch:'',
      isDevelopment:true,
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_05: {
      url: 'spc/prodb/searchNL.do',
      params:{
        doclibCode:'PORTAL_WORKS',
        relations:'1',
        cols:'ACTIVITYID',
        symbols:'2',
        vals:'601858',
      },
      keys:{
        title:'SYS_TOPIC',
        author:'POTHUNTER_NAME',
        date:'VOTE_COUNT',
        abstract:'DESCRIPTION',
        teacherCommentNum:'VOTE_COUNT',
        voteNum:'VOTE_COUNT'
      },
      eventName_listenLoadedData:'',
      eventName_listenSearch:'',
      isDevelopment:false,
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };