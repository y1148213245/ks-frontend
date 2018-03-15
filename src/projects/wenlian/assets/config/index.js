/**
 * Created by qinff on 2017/12/26.
 */

var CONFIG = {
  // BASE_URL: "http://172.19.57.153/portal/api/",
  BASE_URL: "/portal/api/",//临时打包
  
  // READ_URL: "http://172.19.57.153:8945/spc-reader",  // 阅读地址
  READ_URL: "/spc-reader",  // 临时打包
  
  GO_CONTRIBUTE_URL: "http://192.168.6.21:8080/wenlian/ssoWenlianLogin.do?",
	SITE_CONFIG: {
		siteId: 2,
  	chId: 0
  },
  CRUMB_TYPE: [{ //面包屑
    name: 'author',
    title: '作者详情',
  }, {
    name: 'editor',
    title: '编辑详情',
  },{
    name: 'aboutus',
    title: '关于我们',
  }],
  BOOK_LIST_TYPE: { // 图书列表根据栏目ID控制显示类型
    _2_COLS:[57],
    _3_COLS:[0,59,130]
  },
}

var $_$ = {
   indexPage:{
     authorMoreHref:'./authorlist.html',  // 首页作者列表页面
   }
};
