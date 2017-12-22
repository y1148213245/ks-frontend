/**
 * created by song 2017/12/21
 * 我的购物车的配置文件 放请求的url、params...
 */
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
        url: BASE_URL + 'cart/getCartAndActivity.do',
        params: {
            loginName: "song@163.com",
            siteId: SITE_CONFIG.siteId,
            timeStamp: new Date().getTime(), // 加时间戳是为了不从缓存里去数据
        },
        bookType: '91',  // 纸质书
        ebookType: '94', // 电子书
        picLinkUrl: ''
      }
    }
  };
  