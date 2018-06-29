/**
 * created by song 2018/3/25
 * 分类导航
 */

import component from "../classification.vue";

const name = component.name; // 组件标签名

const title = "分类导航组件"; // 组件title

const description = `分类导航`; // 组件描述信息

const dev = {
  classification: {
    classification_02: {
      url: '../data/ui_classification_02_data.json',
      staticText: {
        allClassifications: "全部分类",
        showAll: "显示全部",
        closeAll: "收起全部"
      }
    }
  }
};

const prod = {
  classification: {
    classification_02: { // 图书分类导航
      url:  'spc/prodb/treeByCode.do',
      params: {
        code: "BOOK",
        layer: 2
      },
      bookListUrl: '../pages/bookList.html',
      staticText: {
        allClassifications: "全部分类",
        showAll: "显示全部",
        closeAll: "收起全部"
      }
    }
  }
};

const platform = 'PC';
const pageType = ['list', 'channel'];
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
