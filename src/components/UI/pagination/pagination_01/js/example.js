/**
 * created by song 2018/1/9
 * 分页组件
 */

import component from "../ui_pagination_01.vue";


const name = component.name;  // 组件标签名

const title = "详情分页组件";  // 组件title

const description = `分页`;  // 组件描述信息

const dev = {
  pagination: {
    ui_pagination_01: {
      url: `spc/cms/publish/searchNext.do`,
      params:{
        conditions:'',
        orderBy:'',
        pageNo:'',
        pageSize:'',
        id:''
      },
      prevNextUrl: "./informationdetail.html?",
      staticText:{
        backToList:"返回列表",
        previousChap:"上一篇",
        nextChap:"下一篇",
      }
    }
  }
};

const prod = {
  pagination: {
    ui_pagination_01: {
      url: `spc/cms/publish/searchNext.do`,
      queryKeys:{/* 请求参数  key为参数名 value为location参数的参数名.目是取location参数到请求参数中 */
        id:'pubId',
        conditions:'conditions',
        orderBy:'orderBy',
        pageNo:'pageNo',
        pageSize:'pageSize'
      },
      getDetail:{
        url:'spc/cms/publish/detail.do',
        keys:{
          title:'information_SYS_TOPIC'
        }
      },
      prevNextUrl: "./informationdetail.html?",
      pageConfig:{/* 控制请求页码与页容 */
        isGetLocationQuery:false,
        keys:{/* 映射请求参数key */
          pageNo:'pageNo',
          pageSize:'pageSize'
        },
        pageNo:'1',
        pageSize:'999'
      },
      staticText : {
        backToList:"返回列表",
        previousChap:"上一篇",
        nextChap:"下一篇",
      }
    }
  }
};

const platform = 'PC';
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
