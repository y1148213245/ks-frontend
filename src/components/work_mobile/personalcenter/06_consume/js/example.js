/*
 * @Author: song 
 * @Date: 2018-06-07 15:26:18 
 * @Last Modified by: song
 * @Last Modified time: 2018-06-13 16:26:10
 * 个人中心消费记录
 */


import component from "../consume.vue";

const name = component.name; // 组件标签名

const title = "消费记录"; // 组件title


const description = `个人中心消费记录组件`; // 组件描述信息


const dev = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_06: {
      display: { // 组件静态文本
        navTitle: '消费记录',
        record: '消费记录',
        empty: '暂无消费记录',
        money: '元',
        wxpay: '微信支付',
        balancepay: '余额支付'
      },
      emitEvent: { // 发广播事件名称
        contextEventName: 'showContext'
      },
      getMyOrder: {
        url: "order/getOrderListByLoginName.do",
        params: {
          pageIndex: '1', // 页码
          pageSize: '15', // 每页的数量
          siteId: '', // 站点id
          payStatus: "", // 支付状态 1：已支付  0：待支付
          status: "", // 订单状态
        }
      }
    }
  }
}

const prod = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_06: {
      display: { // 组件静态文本
        navTitle: '消费记录',
        record: '消费记录',
        empty: '暂无消费记录',
        money: '元',
        wxpay: '微信支付',
        balancepay: '余额支付'
      },
      emitEvent: { // 发广播事件名称
        contextEventName: 'showContext'
      },
      getMyOrder: {
        url: "order/getOrderListByLoginName.do",
        params: {
          pageIndex: '1', // 页码
          pageSize: '15', // 每页的数量
          siteId: '', // 站点id
          payStatus: "", // 支付状态 1：已支付  0：待支付
          status: "", // 订单状态
        }
      }
    }
  }
}

const platform = 'mobile';
const pageType = ['others'];
const resourceType = ['others'];

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
