// 相关图书
import component from "../picList.vue";

const name = component.name;

const title = "图书组件";

const description = `可用于展示相关图书、您的历史记录、图书热卖榜等`;

const dev = {
  list_pic: {
    pic_list_04: {
      url: '/data/list_pic_04_pic_list.json',
      picLinkUrl: ''
    }
  }
};
const prod = {
  list_pic: {
    pic_list_04: {
      url: CONFIG.BASE_URL + 'cms/publish/list.do',
      params: {
        conditions: "[{pub_resource_type:'BOOK'}]",
        orderBy: "pub_resource_id",
        pageNo: "1",
        pageSize: "8",
        searchText: null
      },
      picLinkUrl: ''
    }
  }
};

const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
