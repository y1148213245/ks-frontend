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
      targetType: '_blank',
      params: {
        colId: '39', // 栏目ID
      },
      currentSelect:[{
        id:'',
        htmls:[]
      }]
    }
  }
};

const prod = {
  navigation: {
    navigation_03: {
      url: `spc/cms/col/getColNextLevelNode`,
      targetType: '_blank',
      params: {
        colId: '39', // 栏目ID
      },
      currentSelect:[{
        id:'265',
        htmls:['index.html']
      },
      {
        id:'266',
        htmls:[]
      },
      {
        id:'267',
        htmls:[]
      },
      {
        id:'268',
        htmls:['informationdetail.html','informationlist.html']
      },
      {
        id:'269',
        htmls:[]
      },
      {
        id:'270',
        htmls:['activity.html','activityrace.html','activitylist.html']
      }]
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
