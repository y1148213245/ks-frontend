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
    navigation_06: {
      url: "../data/navigation_06_cloumn_headnav.json",
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
    navigation_06: {
      targetType: '_blank',/* 跳转方式配置 */
      getCols:{
        url: 'spc/cms/col/getAllColBySiteId',
        type:'get',/* 请求方式 */
        params: {/* 查询参数key:参数名  value:参数值.*/
          // colId: '39', // 栏目ID
          siteId:'',
          chId:'0'
        },
        getGlobalParams:{/* 获取全局参数 key:全局对象属性,请求参数名*/
          siteId:'siteId'
        },
        keys:{
          id:"id",
          parentId:'parentId',
          name:'name'
        }
      },
      showType:{/* 首行栏目显示方式 */
        parentId:'0',/* 指定起始id */
        showChildNav:[268]/* 指定可显示子导航的id */ 
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
