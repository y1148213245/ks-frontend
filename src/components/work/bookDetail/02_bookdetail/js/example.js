/**
 * Created by song 2018/1/9
 * 图书详情页 图书详细信息
 */

import component from "../bookDetailContent.vue";


const name = component.name;

const title = "图书详情组件";  // 组件title

const description = `图书详情组件`;

const dev = {
  book_detail: {
    book_detail_02: {
      buyBookUrl: 'http://book.dangdang.com/', // 购买纸书 跳转至当当网首页
      probationUrl: '/ebook/read.jsp',         //试读地址
    }
  }
};

const prod = {
  book_detail: {
    book_detail_02: {
      buyBookUrl: 'http://book.dangdang.com/', // 购买纸书 跳转至当当网首页
      probationUrl: '/ebook/read.jsp',         //试读地址
    }
  }
};

const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
