/**
 * Created by qinff on 2017/12/26.
 * Edit by song on 2018/4/25.
 */

var CONFIG = {
  BASE_URL: "http://172.19.57.153/portal/api/",
  // BASE_URL: "http://test.founder.com.cn/ynxh/portal/api/",
  // BASE_URL: "../../../api/",//服務器打包

  // READ_URL: "http://172.19.57.153:8945/spc-reader/ebook/read.jsp",  // 阅读地址
  READ_URL: "http://test.founder.com.cn/ynxh/portal/reader/ebook/read.jsp",  // 
  // READ_URL: "../../../reader/ebook/read.jsp",  // 临时打包

  GO_CONTRIBUTE_URL: "http://172.19.57.168:8989/wenlian/ssoWenlianLogin.do?",
  PAGE_MANAGEMENT_URL: "http://172.19.92.76:8085/spc/api/",  // 页面管理系统地址
  SITE_CONFIG: {
    siteId: 2,
    chId: 0
  },
  READ_CONFIG: {
    siteType: 0,  // 0 网站 1 微信
  },
}

var $_$ = {};
