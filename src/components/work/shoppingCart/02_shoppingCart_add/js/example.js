/**
 * created by song 2018/1/18
 * 加入购物车提示页面
 */
import component from "../addcart.vue";


const name = component.name;  // 组件标签名

const title = "加入购物车提示组件";  // 组件title

const description = `加入购物车提示页面`;  // 组件描述信息

const dev = {
    shoppingCart: {
        shoppingCart_02: {
        url: '/data/shoppingCart_02_add.json'
      }
    }
  };
  
  const prod = {
    shoppingCart: {
        shoppingCart_02: {
        url: CONFIG.BASE_URL + 'api/book/getBookDetail.do',
        params: {
            loginName: "",
            pubId: "",
            siteId: CONFIG.SITE_CONFIG.siteId,
        },
        bookType: '91',  // 纸质书
        ebookType: '94', // 电子书
      }
    }
  };

const platform = 'PC';
const pageType = ['cart'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
  