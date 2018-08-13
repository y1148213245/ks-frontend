import component from "../myorderlist.vue";

const name = component.name; // 组件标签名

const title = "我的订单"; // 组件title


const description = `个人中心我的订单组件`; // 组件描述信息


const dev = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_15: {
      display: {
        tabTitle: ["图书", "期刊", "知识服务"],
        empty: '暂无订单',
        pendingPayment: "待付款",
        collectGoods: "进行中",
        complete: "已完成",
        cancel: "已取消",
        pendingDelivery: "待发货",
        alreadyShipped: "已发货",
        receivedGoods: "已收货",
        cancelOrder: "取消订单",
        payment: "付款",
        all: "共",
        money: "¥",
        numtext: "件商品",
        orderNumber: "订单编号：",
        lookLogistics: "查看物流",
        confirmReceipt: "确认收货",
        deleteOrder: "删除订单",
        total: "总计",
        express: "快递",
        realPay: "实付款"
      },
      //列表页接口
      getMyOrder: {
        url: "order/getOrderListByLoginName.do",
        params: {
          pageIndex: '1', // 页码
          pageSize: '15', // 每页的数量
          siteId: '', // 站点id
          payStatus: "", // 支付状态 1：已支付  0：待支付
          status: "", // 订单状态
          orderType: "book" // 总单类型
        }
      },
      // 详情页接口
      getOrderDetails: {
        url: "order/getProductListByOrderId.do",
      },
      //取消订单接口
      cancelOrder: {
        url: "order/cancelParentOrder.do",
      },
      //删除订单接口
      deleteOrder: {
        url: "order/deleteParentOrder.do",
      },
      //确认收货接口
      confirmReceipt: {
        url: "order/confirmReceipt.do",
      },
      toBookDetailUrl:'./bookdetail.html',
      toperiodicalDetailsUrl:'./maginfo.html',
    },
  }
}

const prod = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_15: {
      display: {
        tabTitle: ["图书", "期刊", "知识服务"],
        empty: '暂无订单',
        pendingPayment: "待付款",
        collectGoods: "待收货",
        complete: "已完成",
        cancel: "已取消",
        cancelOrder: "取消订单",
        payment: "付款",
        lookLogistics: "查看物流",
        confirmReceipt: "确认收货",
        deleteOrder: "删除订单",
        total: "总计",
        express: "快递",
        realPay: "实付款"
      },
      //列表页接口
      getMyOrder: {
        url: "order/getOrderListByLoginName.do",
        params: {
          pageIndex: '1', // 页码
          pageSize: '15', // 每页的数量
          siteId: '', // 站点id
          payStatus: "", // 支付状态 1：已支付  0：待支付
          status: "", // 订单状态
          orderType: "book" // 总单类型
        }
      },
      // 详情页接口
      getOrderDetails: {
        url: "order/getProductListByOrderId.do",
      },
      //取消订单接口
      cancelOrder: {
        url: "order/cancelParentOrder.do",
      },
      //删除订单接口
      deleteOrder: {
        url: "order/deleteParentOrder.do",
      },
      toBookDetailUrl:'./bookdetail.html',
      toperiodicalDetailsUrl:'./maginfo.html',
    },
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
