/*
 * @Author: song 
 * @Date: 2018-09-03 17:40:11 
 * @Last Modified by: song
 * @Last Modified time: 2018-09-04 13:32:43
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
        langsObj: [{ // 双语配置
          order: 0,
          name: '中文',
          lang: 'cn',
          href: './test.html'
        }, {
          order: 1,
          name: '朝鲜语',
          lang: 'ko',
          href: './test_k.html'
        }]
      }
    }
  }
}

const prod = {
  ui_international: {
    ui_international_01: {
      modulename: {
        langsObj: [{ // 双语配置
          order: 0,
          name: '中文',
          lang: 'cn',
          href: './test.html'
        }, {
          order: 1,
          name: '朝鲜语',
          lang: 'ko',
          href: './test_k.html'
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
