import component from '../payOrder.vue'
const name = component.name;  // 组件标签名
const title = '支付订单组件';  // 组件title
const description = `支付订单组件
功能:
  根据地址栏获取订单信息参数
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
      ]

    }
  }
};
const platform = 'PC';
const pageType = ['cart'];
const resourceType = ['others'];
export { name, title, dev, prod, description, platform, pageType, resourceType };