/**
 * Created by song 2018/1/9
 * 图书详情页 图书详细信息
 */

import component from "../bookDetailContent.vue";


const name = component.name;

const title = "图书详情组件";  // 组件title

const description = `图书详情`;


const dev = {
  bookdetail: {
    bookdetail_01: {
      url: '/data/bookDetail_01_bookDetail.json'
    }
  }
};

const prod = {
  
};

const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
