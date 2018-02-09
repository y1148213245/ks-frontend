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
      eventName_search: ''
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_04: {
      url: BASE_URL + 'spc/cms/publish/list.do',
      keys: {
        place: 'place',
        school: 'school',
        group: 'group',
        searchText: 'searchText',
      },
      eventName_search: '',
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };