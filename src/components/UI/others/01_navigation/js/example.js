/*
 * @Author: zrn
 * @Date: 2018-10-17
 * 标签导航tab
 */

import component from "../navigation.vue";

const name = component.name;  // 组件标签名

const title = "标签导航tab";  // 组件title

const description = `标签导航tab组件,数据在example.js里面配置, 该组件只负责发广播;
1 金融博览站点 栏目列表页`;  // 组件描述信息

const dev = {
  others: {
    ui_others_navigation_01: {
      "modulename":{
        navigationLists:[{
            id: 0,
            fieldName: "",
            name: "全部"
        },{
            id: 1,
            fieldName: "资讯",
            name: "资讯"
        },{
            id: 2,
            fieldName: "观点",
            name: "观点"
        },{
            id: 3,
            fieldName: "速览",
            name: "速览"
        }],
        broadcastName: "showField_name"
      }
    }
  }
};

const prod = {
    others: {
        ui_others_navigation_01: {
        "modulename":{
          navigationLists:[{
              id: 0,
              fieldName: "",
              name: "全部"
          },{
              id: 1,
              fieldName: "资讯",
              name: "资讯"
          },{
              id: 2,
              fieldName: "观点",
              name: "观点"
          },{
              id: 3,
              fieldName: "速览",
              name: "速览"
          }],
          broadcastName: "showField_name"
        }
      }
    }
  };



const platform = 'PC';
const pageType = [];
const resourceType = [];

export {name, title, dev, prod, description, platform, pageType, resourceType};
