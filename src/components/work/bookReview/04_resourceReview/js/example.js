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
      event: {
        listenDetailLoadedName: 'resourceDetailLoaded',
        detailAdapter: {
          sysAdapter: 'sykAdapter',
          typeAdapter: 'bookAdapter'
        }
      },
      addComment: {
        url: 'comment/addComment.do',
        params: {
          parentId: "0",
          type: "1"
        }
      }
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };