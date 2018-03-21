/**
 * Created by song on 2018/3/20
 */

import component from "../headernav.vue";


const name = component.name; // 组件标签名

const title = "导航组件"; // 组件title

const description = `头部导航`; // 组件描述信息

const dev = {
  navigation: {
    navigation_01: {
      left: {
        url: "",
        icon: "el-icon-arrow-left"
      },
      right: {
        url: "../pages/search.html",
        icon: "el-icon-search"
      }
    }
  }
}

const prod = {
  navigation: {
    navigation_01: {
      left: {
        url: "",
        icon: "el-icon-arrow-left"
      },
      right: {
        url: "../pages/search.html",
        icon: "el-icon-search"
      }
    }
  }
};

const platform = 'mobile';
const pageType = ['others'];
const resourceType = ['others'];

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