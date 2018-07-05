/*
 * @Author: yan.chaoming
 * @Date: 2018-01-02 13:56:35
 * @Last Modified by: song
 * @Last Modified time: 2018-03-23 09:18:12
 * 作者展示
 */

import component from "../picListAuthor.vue";


const name = component.name;

const title = "作者展示组件";

const description = `作者展示`;

const dev = {
  list_pic: {
    list_pic_11: {
      url: '/data/ui_list_pic_11.json',
      detailHref: '',
      colId: 116,
      staticText:{
        noCover: "暂无封面",
        seeMore: "查看更多",
      }
    }
  }
}

const prod = {
  list_pic: {
    list_pic_11: {
      url:  'spc/cms/publish/list.do',
      param: {
        conditions: "[{pub_col_id:'116'},{pub_status:'1'}]",
        groupBy: 'pub_resource_id',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        pageNo: '1',
        pageSize: '15',
        searchText: ''
      },
      detailHref: '',
      colId: 116,
      staticText: {
        noCover: "暂无封面",
        seeMore: "查看更多",
      }
    }
  }
}

const platform = 'PC';
const pageType = ['index'];
const resourceType = ['book'];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType
};
