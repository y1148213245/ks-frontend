/**
 * 分类导航组件  
 * Created by song 2018/5/28  
 */

import component from "../classification.vue";

const name = component.name; // 组件标签名

const title = "分类导航组件"; // 组件title

const description = `分类导航`; // 组件描述信息

const dev = {
  ui_classification: {
    ui_classification_03: {
      "modulename": {
        url: '../data/ui_classification_03_data.json',
        params: {
          code: "BOOK",
          layer: 2
        },
        toBookLists: { // 去图书列表
          url: '../pages/bookList.html',
          params: {
            cascadeId: "cascadeId"
          }
        }
      }
    }
  }
};

const prod = {
  ui_classification: {
    ui_classification_03: { // 图书分类导航
      "modulename": {
        url: 'spc/prodb/treeByCode.do',
        params: {
          code: "BOOK",
          layer: 2
        },
        toBookLists: { // 去图书列表
          url: '../pages/bookList.html',
          dataKeys: {
            cascadeId: "cascadeId"
          }
        }
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
