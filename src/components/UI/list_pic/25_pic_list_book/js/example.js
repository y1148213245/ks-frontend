/**
 * created by song 2017/12/19
 * 左侧分类导航栏组件的配置文件 放请求的url、params...
 */

import component from "../Book_List_Adapter.vue";

const name = component.name;  // 组件标签名

const title = "文联图书列表项目组件";  // 组件title

const description = `文联图书列表项目组件`;  // 组件描述信息

const dev = {
  _2colsWithSort: {
    queryBookList: {
      url: '/data/ui_list_pic_17.json',
      params: {}
    }
  },
  _3colsWithSort: {
    queryBookList: {
      url: '/data/ui_list_pic_18.json',
      params: {}
    }
  }
};

const prod = {
  _2colsWithSort: {
    queryBookList: {
      url:  'spc/cms/publish/list.do',
      params: {
        conditions: '',
        orderBy: '',
        pageNo: '',
        pageSize: '',
        searchText: '',
        groupBy: 'pub_resource_id'
      }
    }
  },
  _3colsWithSort: {
    queryBookList: {
      url:  'spc/cms/publish/list.do',
      params: {
        conditions: '',
        orderBy: '',
        pageNo: '',
        pageSize: '',
        searchText: '',
        groupBy: 'pub_resource_id'
      }
    }
  }
};
const childComponents = ["ui_list_pic_25", "ui_list_pic_18_2_cols_with_rank", "ui_list_pic_17_3_cols_with_sort"]; 
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType,childComponents};

