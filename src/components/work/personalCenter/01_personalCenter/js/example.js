/**
 * created by song 2017/12/21
 * 个人中心的配置文件 放请求的url、params...
 */
import component from "../personalCenter.vue";


const name = component.name;  // 组件标签名

const title = "个人中心组件";  // 组件title

const description = `个人中心`;  // 组件描述信息

const dev = {
  personalCenter: {
      personalCenter_01: {
        url: '/data/personalCenter_01_personalCenter.json',
        picLinkUrl: ''
      }
    }
  };
  
  const prod = {
    personalCenter: {
      personalCenter_01: {
        params: {
            loginName: "",
            siteId: SITE_CONFIG.siteId,
            timeStamp: new Date().getTime(), // 加时间戳是为了不从缓存里取数据
        },
        bookType: '91',  // 纸质书
        ebookType: '94', // 电子书
        picLinkUrl: ''
      }
    }
  };

  export {name, title, dev, prod, description};
  