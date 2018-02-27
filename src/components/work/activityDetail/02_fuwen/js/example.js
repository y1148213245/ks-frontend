/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-07 15:34:23 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-02-27 11:20:30
 */

import component from '../fuwen.vue'
const name = component.name;  // 组件标签名
const title = '辅文详情组件';  // 组件title
const description = `
  辅文详情组件,监听eventName_listen事件 接受第一个参数取出相关id`;  // 组件描述信息
const dev = {
  activityDetail: {
    work_activitydetail_02: {
      "module": {
        url: '/data/work_activitydetail_02.json',
        topic: '奖项设置',//辅文标题
        keys: {
          topic: 'topic',//辅文标题字段
          content: 'content' //辅文内容字段
        },
        eventName_listen: "loadSearchResult",//监听详情数据加载完毕
        isDevelopment: true,
      }
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_02: {
      "module": {
        url: BASE_URL + 'spc/prodb/getPublicize.do',
        topic: '奖项设置',//辅文标题
        keys: {
          topic: 'topic',//辅文标题字段
          content: 'content',//辅文内容字段
          eventName_listen_resourceId:'pub_resource_id',//详情数据资源id字段
          eventName_listen_resourceType:'pub_resource_type',//详情数据资源类型字段
          requestUrlParam_docId:'docID',//请求辅文数据：资源id字段
          requestUrlParam_code:'code',//请求辅文数据：资源类型字段
        },
        eventName_listen: 'loadSearchResult',//监听详情数据加载完毕
      }
    }
  }
};
const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['activity'];
export { name, title, dev, prod, description, platform, pageType, resourceType };