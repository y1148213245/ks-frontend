/**
 * Created by song on 2018/1/18.
 * 购买该书的用户还买  / 该作者其他图书
 */

import component from "../2ColsWithRank.vue";


const name = component.name;

const title = "图书列表组件";

const description = "图书列表组件，两列带排序";

const dev = {
  _2colsWithSort: {
    queryBookList: {
      url: '/data/ui_list_pic_17.json',
      params: {}
    }
  }
};

const prod = {
  _2colsWithSort: {
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
