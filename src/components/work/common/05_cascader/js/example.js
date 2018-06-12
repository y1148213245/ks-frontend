/*
 * @Author: yan.chaoming 
 * @Date: 2018-05-20 20:10:22 
 * @Last Modified by:   yan.chaoming 
 * @Last Modified time: 2018-05-20 20:10:22 
 */

import component from '../cascader.vue'
const name = component.name;  // 组件标签名
const title = '城市级联组件';  // 组件title
const description = `城市级联组件
props:
  areastr-原地区字符串
  currentarea-当前选中地区
  config-{                        /* 配置 */
    splitTag:{                    /* 分割符配置 */
      item:';',                   /* 每个地区 */
      category:'~'                /* 每个地区的级别 */
    }
  }

想要currentarea的值流向父组件属性,父组件传值写法 :currentarea.sync="父组件属性"
`;  // 组件描述信息
const dev = {
  common: {
    work_common_05: {
      modulename:{
        
      }
    }
  }
};
const prod = {
  common: {
    work_common_05: {
      modulename:{
      }
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };