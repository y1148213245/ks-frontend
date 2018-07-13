/*
 * @Author: song 
 * @Date: 2018-07-11 14:23:52 
 * @Last Modified by: song
 * @Last Modified time: 2018-07-12 17:44:23
 * 栏目树导航组件
 */

import component from "../commonNavigation.vue";

const name = component.name;  // 组件标签名

const title = "通用栏目树组件";  // 组件title

const description = `通用栏目树组件`; // 组件描述信息

const dev = {
  navigation: {
    navigation_09: {
      "modulename": {
        parentColId: '369', // 以此栏目id为根节点创建栏目树
        componentTitle: { // 是否显示标题 非基础配置
          isShow: true,
          titleName: '课程列表',
        },
        getComponentTitle: { //获取栏目标题
          url: "../data/ui_navigation_08_data.json",
          params: {
            colId: '369'
          }
        },
        getColumnTree: { // 获取整个站点的栏目树
          url: "spc/cms/col/getAllColBySiteId.do",
        },
        emitEvent: { // 事件对象
          emitColumnInfo: 'columnInfo', // 与右侧列表进行交互
        }
      }
    }
  }
}

const prod = {
  ui_navigation: {
    ui_navigation_09: {
      "modulename": {
        parentColId: '369', // 以此栏目id为根节点创建栏目树
        componentTitle: { // 是否显示标题 非基础配置
          isShow: true,
          titleName: '课程列表',
        },
        getComponentTitle: { //获取栏目标题
          url: "spc/cms/col/getColumnByIdForSite",
          params: {
            colId: '369'
          }
        },
        getColumnTree: { // 获取整个站点的栏目树
          url: "spc/cms/col/getAllColBySiteId.do",
        },
        emitEvent: { // 事件对象
          emitColumnInfo: 'columnInfo', // 与右侧列表进行交互
        }
      }
    }
  }
}

const platform = 'PC';
const pageType = [];
const resourceType = [];

export {name, title, dev, prod, description, platform, pageType, resourceType};
