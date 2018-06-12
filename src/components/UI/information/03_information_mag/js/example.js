/**
 * created by yy 2038/3/29
 * 咨询详情页组件的配置文件 放请求的url、params...
 */

import component from "../informationDetail.vue";

const name = component.name; // 组件标签名

const title = "期刊详情组件"; // 组件title

const description = `期刊详情组件，详情配置项为toTake 时跳转到订阅`; // 组件描述信息

const dev = {
  information: {
    information_03: {
      'modulename': {
        toTakeUrl:"../pages/maginfo.html",  //订阅跳转页面
        yearTab:{
          broadcastName: 'broadcastName',   //广播名称
        },
        sysAdapter: "zykAdapter", // 资源库
        typeAdapter: "magAdapter", // 类型字段  期刊
        yearTabShow: true, // 类型字段  期刊
        queryDetail:{
          url:'../data/03_query_detail.json',
          magName:'测试刊物',
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
            field: 'magName', // 取什么字段
            display: '', // 固定显示内容是什么
            method: 'toDetail', // 方法名 要在下面配置
          }, {
            name: 'button',
            field: 'magDesc',
            display: '',
            method: 'toDetail', // 方法名 要在下面配置
          }],
        }

      }

    }
  }
};

const prod = {  // 详情组件内含评论组件 评论组件作为子组件 配置不要提到父组件里面
  information: {
    information_03: {
      'modulename': {
        toTakeUrl:"../pages/maginfo.html",  //订阅跳转页面
        yearTab:{
          broadcastName: 'broadcastName',   //广播名称
        },
        sysAdapter: "zykAdapter", // 资源库
        typeAdapter: "magAdapter", // 类型字段  期刊
        yearTabShow: true, // 类型字段  期刊
        queryDetail:{
          url:'spc/prodb/getMagInfo.do',
          magName:'测试刊物',
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
            field: 'magName', // 取什么字段
            display: '', // 固定显示内容是什么
            method: 'toDetail', // 方法名 要在下面配置
          }, {
            name: 'button',
            field: 'magDesc',
            display: '',
            method: 'toDetail', // 方法名 要在下面配置
          }],
        }

      }

    }
  }

};

// 该父组件所包含的子组件，第一个是该父组件本身的组件name
const childComponents = [];

const platform = 'PC';
const pageType = ['detail', 'channel'];
const resourceType = ['information'];

export {
  name,
  title,
  dev,
  prod,
  description,
  childComponents,
  platform,
  pageType,
  resourceType
};
