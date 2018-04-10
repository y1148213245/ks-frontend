export default {
  name: 'authordetail',
  crumbs:{
    url:'./index.html',
    showWord:{
      location:'您的位置',
      index:'首页'
    },
    getCrumbdOn:'setCrumbs',  //事件监听
    crumbType:[{ //面包屑
      name: 'author',
      title: '作者详情',
    }, {
      name: 'editor',
      title: '编辑详情',
    }, {
      name: 'aboutus',
      title: '关于我们',
    }]
  },
  components: {

    common: {
      // url:  'spc/cms/publish/detail.do',
      url:`${CONFIG.BASE_URL}spc/cms/publish/detail.do`,
      // swiperUrl: 'spc/cms/publish/list.do',
      swiperUrl:`${CONFIG.BASE_URL}spc/cms/publish/relatedZX.do`,
      params: {
        pubId:'',
        loginName:''
      },
      swiperParams: {
        // conditions:'[{"BOOK_SYS_AUTHORS":""},{"pub_site_id":"'+CONFIG.SITE_CONFIG.siteId+'"}]',
        // groupBy:"pub_resource_id",
        // orderBy:"BOOK_PUBDATE desc",
        // pageNo:"1",
        // pageSize:"4",
        // searchText:""
        pubId:''
      },
      getCrumbEmit:'setCrumbs',  //事件触发
    }
  },
  toDetailAddress:{
    url:'./bookdetail.html',
    params:'pubId'
  }
}
