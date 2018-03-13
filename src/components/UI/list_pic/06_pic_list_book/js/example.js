/**
 * Created by ma.jw on 2017/12/15.
 * 热销排行
 */

import component from "../picListBook.vue";


const name = component.name;

const title = "热销排行组件";

const description = `热销排行`;

const dev = {
  picListBook: {
    hotsalebank: {
      title: '热销排行',
      url: "/data/ui_list_pic_06.json",
      href: "./bookdetail.html?pubId="
    },
    historyrecord: {
      title: '浏览历史',
      href: "./bookdetail.html?pubId="
    }
  },
};

const prod = {
  picListBook: {
    hotsalebank: {
      title: '热销排行',
      url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'131'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_read_num desc",
        pageNo: "1",
        pageSize: "4",
        searchText: ""
      },
      href: "./bookdetail.html?pubId="
    },
    historyrecord: {
      title: '浏览历史',
      url: CONFIG.BASE_URL + "browserHistory/getHistoryList.do",
      params: {
        num: 3,
        username: "",
        siteId: CONFIG.SITE_CONFIG.siteId
      },
      href: "./bookdetail.html?pubId="
    }
  }
};

const platform = 'PC';
const pageType = ['index', 'list', 'channel'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
