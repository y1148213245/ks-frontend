/**
 * created by song 2017/12/21
 * 个人中心的配置文件 放请求的url、params...
 */
import component from "../personalCenter.vue";

const name = component.name; // 组件标签名

const title = "个人中心组件"; // 组件title

const description = `个人中心`; // 组件描述信息

const dev = {
  personalcenter: {
    personalcenter_01: {
      navList: [{
          title: "我的帐号",
          icon: "el-icon-edit",
          tag: "account"
        },
        {
          title: "我的订单",
          icon: "el-icon-goods",
          tag: "list"
        },
        {
          title: "我的书架",
          icon: "el-icon-tickets",
          tag: "book"
        },
        {
          title: "收藏夹",
          icon: "el-icon-star-on",
          tag: "collecting"
        },
        {
          title: "我的积分",
          icon: "el-icon-news",
          tag: "point"
        },
        {
          title: "售后记录",
          icon: "el-icon-service",
          tag: "afterservice"
        },
        {
          title: "我的优惠券",
          icon: "el-icon-menu",
          tag: "coupon"
        },
        {
          title: "随手记",
          icon: "el-icon-edit-outline",
          tag: "note"
        }
      ]
    }
  }
};

const prod = {
  personalcenter: {
    personalcenter_01: {
      navList: [{
          title: "我的帐号",
          icon: "el-icon-edit",
          tag: "account"
        },
        {
          title: "我的订单",
          icon: "el-icon-goods",
          tag: "list"
        },
        {
          title: "我的书架",
          icon: "el-icon-tickets",
          tag: "book"
        },
        {
          title: "收藏夹",
          icon: "el-icon-star-on",
          tag: "collecting"
        },
        {
          title: "我的积分",
          icon: "el-icon-news",
          tag: "point"
        },
        {
          title: "售后记录",
          icon: "el-icon-service",
          tag: "afterservice"
        },
        {
          title: "我的优惠券",
          icon: "el-icon-menu",
          tag: "coupon"
        },
        {
          title: "随手记",
          icon: "el-icon-edit-outline",
          tag: "note"
        }
      ]
    }
  }


};

const platform = 'PC';
const pageType = ['center'];
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
