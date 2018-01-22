/**
 * Created by qinff on 2018/1/18.
 * 图书列表组件
 */

import component from "../3ColsWithSort.vue";


const name = component.name;

const title = "图书列表组件";

const description = "图书列表组件，3列带排序按钮";

const dev = {
  _3colsWithSort: {
    queryBookList: {
      url: '/data/ui_list_pic_18.json',
      params: {}
    }
  }
};

const prod = {
  _3colsWithSort: {
    queryBookList: {
      url: BASE_URL + 'spc/cms/publish/list.do',
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

export {name, title, dev, prod, description};
