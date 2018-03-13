/**
 * created by song 2017/12/21
 * 我的购物车的配置文件 放请求的url、params...
 */
import component from "../cartContent.vue";


const name = component.name; // 组件标签名

const title = "购物车组件"; // 组件 title

const description = `我的购物车`; // 组件描述信息

const dev = {
  shoppingCart: {
    shoppingCart_01: {
      url: '/data/shoppingCart_01_shoppingCart.json',
      picLinkUrl: ''
    }
  }
};

const prod = {
  shoppingCart: {
    shoppingCart_01: {
      url: CONFIG.BASE_URL + 'cart/getCartAndActivity.do',
      params: {
        loginName: "",
        siteId: CONFIG.SITE_CONFIG.siteId,
        timeStamp: new Date().getTime(), // 加时间戳是为了不从缓存里取数据
      },
      bookType: '91', // 纸质书
      ebookType: '94', // 电子书
      picLinkUrl: ''
    }
  }
};

const platform = 'PC';
const pageType = ['cart'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};

