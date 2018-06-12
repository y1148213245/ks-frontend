/**
 * Created by song 2018/1/9
 * 图书详情页 图书详细信息
 */

import component from "../authorservice.vue";


const name = component.name;

const title = "文联作者服务组件";  // 组件title

const description = `文联作者服务组件`;


const dev = {
  crumbs:{
    url:'./index.html',
    showWord:{
      location:'您的位置',
      index:'首页'
    },
    getCrumbdOn:'setCrumbs',  //面包屑事件监听
    getCrumbdEmit:'setCrumbs',  //面包屑事件触发
    crumbType:[{ //面包屑
      name: 'authorservice',
      title: '投稿方式',
    }]
  },
  colChangeOn:'colChange', //导航事件监听
  colChangeEmit:'colChange', //导航事件触发
  submission: {
    queryEditorList: {
      url: '/data/work_author_service.json'
    }
  }
};

const prod = {
  crumbs:{
    url:'./index.html',
    showWord:{
      location:'您的位置',
      index:'首页'
    },
    getCrumbdOn:'setCrumbs',  //面包屑事件监听
    getCrumbdEmit:'setCrumbs',  //面包屑事件触发
    crumbType:[{ //面包屑
      name: 'authorservice',
      title: '投稿方式',
    }]
  },
  colChangeOn:'colChange', //导航事件监听
  colChangeEmit:'colChange', //导航事件触发
  submission: {
    queryEditorList: {
      url:  'spc/cms/publish/list.do',
      params: {
        conditions: '[{pub_col_id:226}]',
        pageNo: '1',
        pageSize: '15',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        searchText: '',
        groupBy: 'pub_resource_id'
      }
    }
  }
};

const platform = 'PC';
const pageType = ['other'];
const resourceType = ['other'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
