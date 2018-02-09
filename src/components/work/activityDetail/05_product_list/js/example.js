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
      url: '',
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
      isDevelopment:false,
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };