/*
 * @Author: yan.chaoming 
 * @Date: 2018-09-06 14:27:33 
 * @Last Modified by:   yan.chaoming 
 * @Last Modified time: 2018-09-06 14:27:33 
 */

import component from '../payOrder.vue'
const name = component.name;  // 组件标签名
const title = '支付订单组件';  // 组件title
const description = `支付订单组件
功能:
  1.根据地址栏参数获取订单信息参数
  2.支付方式可配置
`;  // 组件描述信息
const dev = {
  shoppingCart: {
    work_shoppingcart_06: {
    }
  }
};
const prod = {
  "shoppingCart": {
    "work_shoppingcart_06": {
      "showList":[
        {
          "label":"商品名称:",
          "tag":"name",
          "dataKey":"name"
        },
        {
          "label":"价格:",
          "tag":"price",
          "dataKey":"price"
        }
      ],
      "payMethods":[
        {
          "name": "虚拟币",
          "payMethod": "Balance"
        },
        {
          "name":"支付宝",
          "payMethod":"Alipay"
        },
        {
          "name": "微信",
          "payMethod": "Weixin"
        }
      ],
      "commitOrder":{
        "url":"order/submitKnowledgeOrder.do"
      }

    }
  }
};
const platform = 'PC';
const pageType = ['cart'];
const resourceType = ['others'];
export { name, title, dev, prod, description, platform, pageType, resourceType };