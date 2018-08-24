import component from '../resourceReview.vue'
const name = component.name;  // 组件标签名
const title = '资源评论组件';  // 组件title
const description = `资源评论组件`;  // 组件描述信息
const dev = {
  bookreview: {
    work_bookreview_04: {
      url: '',
    }
  }
};
const prod = {
  bookreview: {
    work_bookreview_04: {
      event:{
        listenDetailLoadedName:'detailLoaded',

      },
      url: 'spc/cms/publish/list.do',
      keys: {},
      eventName_loadDate: 'loadSearchResult',
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };