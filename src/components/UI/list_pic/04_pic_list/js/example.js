// 相关图书
import component from "../picList.vue";

const name = component.name;

const title = "相关图书组件";

const description = `相关图书`;

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
      url: 'http://172.19.57.153:9092/spc-portal-web/spc/cms/publish/list.do',
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

export {name, title, dev, prod, description};
