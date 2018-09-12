/**
 * Created by zrn 2018/09/11
 * 移动端图书分类组件
 */

import component from "../classification.vue";

const name = component.name; // 组件标签名

const title = "图书分类组件"; // 组件title

const description = `移动端图书分类组件,可发广播(一级分类)
1、有声书站点分类`; // 组件描述信息

const dev = {
  classification: {
    classification_02: {
      queryClassification: {
        url: '../data/classification_02_classification.json', // 请求分类
        params: {
          code: "BOOK"
        },
        keys: { // 字段兼容
          cascadeId: "cascadeId", // 分类Id
          text: "text", // 分类名
          children: "children", // 分类下的子类
        },
      },
      queryCount: {
        url: "../data/classification_01_count.json", // 各个分类下对应有几本书
        params: {
          conditions: '[{pub_resource_type:"BOOK"},{pub_status:"1"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"},{BOOK_BOOK_CASCADID:"",op:"lk"}]',
          facetFields: "BOOK_BOOK_CASCADID_1", // 按书分类ID查询
          groupBy: "pub_resource_id", // 为了去重
          orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc", // 默认传这个值 为了与后台顺序一致
          pageNo: "1",
          pageSize: "10",
          searchText: null
        },
      },
      staticText : {
        zeroBook:"共 0 本",
        total: "共",
        unit: "本"
      },
      broadcastName: "showClassify"
    }
  }
};

const prod = {
  classification: {
    classification_02: {
      queryClassification: {
        url:  "spc/prodb/treeByCode.do", // 请求分类
        params: {
          code: "BOOK"
        },
        keys: { // 字段兼容
          cascadeId: "cascadeId", // 分类Id
          text: "text", // 分类名
          children: "children", // 分类下的子类
        }
      },
      queryCount: {
        url:  "spc/cms/publish/listCount.do", // 各个分类下对应有几本书
        params: {
          conditions: '[{pub_resource_type:"BOOK"},{pub_status:"1"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"},{BOOK_BOOK_CASCADID:"",op:"lk"}]',
          facetFields: "BOOK_BOOK_CASCADID_1", // 按书分类ID查询
          groupBy: "pub_resource_id", // 为了去重
          orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc", // 默认传这个值 为了与后台顺序一致
          pageNo: "1",
          pageSize: "10",
          searchText: null
        },
      },
      staticText : {
        zeroBook:"共 0 本",
        total: "共",
        unit: "本"
      },
      broadcastName: "showClassify"
    }
  }
};

const platform = 'mobile';
const pageType = ['channel'];
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
