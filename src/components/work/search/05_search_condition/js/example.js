/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-04 16:44:27 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-01-05 18:16:29
 * 高级检索
 */

import component from "../searchCondition.vue";


const name = component.name;  // 组件标签名

const title = "高级检索组件";  // 组件title

const description = `高级检索条件`;  // 组件描述信息

const dev = {
  search: {
    search_condition_05: {
    }
  }
};

const prod = {
  search: {
    search_condition_05: {
      conditions:"{pub_resource_type:'BOOK'},{pub_site_id:'2'}",
      eventName:'loadSearchResult',
    }
  }
};

const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};