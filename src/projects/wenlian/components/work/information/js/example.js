/**
 * Created by qinff on 2018/1/10.
 */

import component from "../Info_Content.vue";

const name = component.name;
const title = "资讯详情组件";
const description = "资讯详情组件，通过点击首页资讯进入，显示资讯详情和评论列表组件。";
const dev = {
  queryDetail: {
    url: '/data/work_information_query_detail.json',
    params: {
      pubId: '2715',
      loginName: ''
    }
  },
  collectOrLike: {
    url: '/data/work_information_collect_like.json',
    params: {
      loginName: '',
      pubId: '',
      operateType: '',
      siteId: ''
    }
  }
};
const prod = {
  queryDetail: {
    url:  'spc/cms/publish/detail.do',
    params: {
      pubId: '2715',
      loginName: ''
    }
  },
  collectOrLike: {
    url:  'collection/addCollect.do',
    params: {
      loginName: '',
      pubId: '',
      operateType: '',
      siteId: ''
    }
  }
};


const platform = 'PC';
const pageType = ['index', 'channel'];
const resourceType = ['book', 'information'];

export {name, title, dev, prod, description};
