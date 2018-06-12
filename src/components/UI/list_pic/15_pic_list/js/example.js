/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-08 16:21:31 
 * @Last Modified by: song
 * @Last Modified time: 2018-03-12 14:17:52
 * 编辑列表
 */

import component from "../picList.vue";

const name = component.name;

const title = "编辑列表组件";

const description = `编辑列表`;

const dev = {
  list_pic: {
    ui_list_pic_15: {
      url: '/data/ui_list_pic_11.json',
      detailHref: '',
      contributeBaseUrl: '',
    }
  }
}

const prod = {
  list_pic: {
    ui_list_pic_15: {
      url:  'spc/cms/publish/list.do',
      param: {
        conditions: "[{pub_col_id:'117'},{pub_status:'1'}]",
        groupBy: 'pub_resource_id',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        pageNo: '1',
        pageSize: '15',
        searchText: ''
      },
      contributeBaseUrl: '',
    }
  }
}

const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];

export { name, title, dev, prod, description, platform, pageType, resourceType };
