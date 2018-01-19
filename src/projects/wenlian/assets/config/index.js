/**
 * Created by qinff on 2017/12/26.
 */

var BASE_URL = "http://172.19.57.153/portal/api/";
// var BASE_URL = "http://172.19.36.70:9092/spc-portal-web/";//曼曼本地

var SITE_CONFIG = {
  siteId: 2,
  chId: 0
};

//面包屑
var CRUMB_TYPE = [{
  name: 'author',
  title: '作者详情',
}, {
  name: 'editor',
  title: '编辑详情',
},{
  name: 'aboutus',
  title: '关于我们',
}];

// 图书列表根据栏目ID控制显示类型
var BOOK_LIST_TYPE= {
  _2_COLS:[57],
  _3_COLS:[0,59,130]
};

var GO_CONTRIBUTE={
  // baseURL:'http://172.19.36.42:8080/wenlian/ssoWenlianLogin.do?'   //去投稿
  //  baseURL:'http://172.19.36.67:8080/wenlian/ssoWenlianLogin.do?',  //去投稿
  baseURL: 'http://192.168.6.21:8080/wenlian/ssoWenlianLogin.do?'// 文联现场投稿地址
};
var READ_CONFIG = {
  baseURL: 'http://172.19.57.153:80/portal/spc-reader',
  // baseURL: 'http://12.0.0.2:8944/spc-reader',//协和现场服务器
};

var $_$ = {
  /*index: {
   swiper: {
   pic_01: {
   url: '/data/swiper_01_pic_list.json',
   height: "480px",
   interval: 1000
   }
   }
   }*/
   indexPage:{
     authorMoreHref:'./authorlist.html',  // 首页作者列表页面
   }
};
