/*
 * @Author: song 
 * @Date: 2018-09-03 17:40:11 
 * @Last Modified by: song
 * @Last Modified time: 2018-09-04 19:38:00
 */
/*    */
/* import component from "../...vue";

const name = component.name;  // 组件标签名 */
const name = 'ui_international_01';

const title = "国际化组件"; // 组件title

const description = `多语言`; // 组件描述信息

const dev = {
  ui_international: {
    ui_international_01: {
      modulename: {
        langsObj: [{
          order: 1,
          name: '朝鲜语',
          lang: 'ko',
          href: '_k'
        }, {
          order: 0,
          name: '中文',
          lang: 'cn',
          href: ''
        }]
      }
    }
  }
}

const prod = {
  ui_international: {
    ui_international_01: {
      modulename: {
        langsObj: [{
          order: 1,
          name: '朝鲜语',
          lang: 'ko',
          href: '_k'
        }, {
          order: 0,
          name: '中文',
          lang: 'cn',
          href: ''
        }]
      }
    }
  }
}

const platform = 'PC';
const pageType = [];
const resourceType = [];

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
