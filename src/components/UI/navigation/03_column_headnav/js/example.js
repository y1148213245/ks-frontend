/**
 * Created by song 2018/3/21
 * 头部栏目导航组件
 */

import component from "../columnnav.vue";


const name = component.name; // 组件标签名

const title = "栏目导航组件"; // 组件title

const description = `头部栏目导航组件`; // 组件描述信息

const dev = {
  navigation: {
    navigation_03: {
      url: "../data/navigation_03_cloumn_headnav.json",
      params: {
        colId: '39', // 栏目ID
      }
    }
  }
};

const prod = {
  navigation: {
    navigation_03: {
      url: `${CONFIG.BASE_URL}spc/cms/col/getColNextLevelNode`,
      params: {
        colId: '39', // 栏目ID
      }
    }
  }
};

const platform = 'PC';
const pageType = ['index'];
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
