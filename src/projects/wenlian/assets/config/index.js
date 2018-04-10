/**
 * Created by qinff on 2017/12/26.
 */

var CONFIG = {
  // BASE_URL: "http://172.19.57.153/portal/api/",
  BASE_URL: "http://test.founder.com.cn/ynxh/portal/api/",
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
  CRUMB_TYPE: [{ //面包屑
    name: 'author',
    title: '作者详情',
  }, {
    name: 'editor',
    title: '编辑详情',
  }, {
    name: 'aboutus',
    title: '关于我们',
  }],
  BOOK_LIST_TYPE: { // 图书列表根据栏目ID控制显示类型
    _2_COLS: [57],
    _3_COLS: [0, 59, 130]
  },
  READ_CONFIG: {
    siteType: 0,  // 0 网站 1 微信
  },
}

var $_$ = {
  indexPage: {
    authorMoreHref: './authorlist.html',  // 首页作者列表页面
  },
  information: {
    information_info_content: {

      queryDetail: {
        url:  'spc/cms/publish/detail.do',
        params: {
          pubId: '2715',
          loginName: ''
        }
      },
      collectOrLike: {
        url:  'collection/addCollect.do',
        params: {
          loginName: '',
          pubId: '',
          operateType: '',
          siteId: ''
        }
      }
    }
  }
};
