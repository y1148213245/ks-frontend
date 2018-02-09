import component from '../teacherList.vue'
const name = component.name;  // 组件标签名
const title = '活动详情组件';  // 组件title
const description = `活动详情组件`;  // 组件描述信息

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
      url: BASE_URL + 'spc/cms/publish/list.do',
      keys: {},
      eventName_listen: 'loadSearchResult',
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };