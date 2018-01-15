/**
 * Created by song 2018/1/15.
 * 图书详情页 —— 相关图书组件
 */

import component from "../relativeBookList.vue";


const name = component.name;

const title = "相关图书组件";

const description = `相关图书列表，只有图书封面和图书名称`;

const dev = {
  list_pic: {
    list_pic_16_relative: {
      title: '相关图书',
      url:"/data/ui_list_pic_16.json",
    }
  }
};

const prod = {
  list_pic: {
    list_pic_16_relative: {
      title: '相关图书',
      url: BASE_URL + "spc/cms/publish/related.do",
      params: {
        pubId: '',
        size: 3,
      },
    }
  }
};

export {name, title, dev, prod, description};