/*
 * @Author: yan.chaoming
 * @Date: 2018-01-04 16:44:27
 * @Last Modified by: song
 * @Last Modified time: 2018-03-12 14:18:06
 * @Last Modified by: zong mobileLoading
 * @Last Modified time: 2018-06-24
 * @Last Modified by: song
 * @Last Modified time: 2018-07-09 15:56:40
 * 搜索结果列表
 */

import component from "../searchResult.vue";


const name = component.name; // 组件标签名

const title = "高级搜索结果列表组件"; // 组件title

const description = `搜索结果列表 isMobileLoading 是否下拉加载默认不需要`; // 组件描述信息

const dev = {
};

const prod = {
};

const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book','vedio','radio'];
const childComponents = ['ui_list_pic_37', 'ui_list_pic_29','work_search_04'];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType,
  childComponents
};
