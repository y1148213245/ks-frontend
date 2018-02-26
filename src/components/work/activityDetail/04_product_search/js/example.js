import component from '../searchCondition.vue'
const name = component.name;  // 组件标签名
const title = '活动详情组件';  // 组件title
const description = `活动详情组件`;  // 组件描述信息
const dev = {
  activityDetail: {
    work_activitydetail_04: {
      url: '',
      keys: {
        place: 'place',
        school: 'school',
        group: 'group',
        searchText: 'searchText',
      },
      eventName_search: '',
      isDevelopment:true,
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_04: {
      url: BASE_URL + 'spc/prodb/detail.do?doclibCode=PORTAL_ACTIVITY&docID=601858',
      keys: {
        place: 'place',
        school: 'school',
        group: 'group',
        searchText: 'searchText',
      },
      eventName_search: '',
      eventName_listenLoadedData: 'eventName_loadedDatas',
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };