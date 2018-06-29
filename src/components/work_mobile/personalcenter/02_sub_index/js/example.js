/*
 * @Author: song
 * @Date: 2018-06-07 17:34:57
 * @Last Modified by: song
 * @Last Modified time: 2018-06-28 13:42:39
 * 个人中心二级页面
 */

import component from "../subPersonalIndex.vue";

const name = component.name; // 组件标签名

const title = "个人中心二级页面组件"; // 组件title

const description = `个人中心二级页面组件`; // 组件描述信息


const dev = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_02: {}
  }
}

const prod = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_02: {}
  }
}

const platform = 'mobile';
const pageType = ['others'];
const resourceType = ['others'];

const childComponents = ['work_mobile_personalcenter_02', 'work_mobile_personalcenter_03', 'work_mobile_personalcenter_04', 'work_mobile_personalcenter_05', 'work_mobile_personalcenter_06', 'work_mobile_personalcenter_07', 'work_mobile_personalcenter_08', 'work_mobile_personalcenter_09', 'work_mobile_personalcenter_10', 'work_mobile_personalcenter_14','work_mobile_personalcenter_15'];

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
