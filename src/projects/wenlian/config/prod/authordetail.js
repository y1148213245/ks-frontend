export default {
  name: 'authordetail',
  components: {
    common: {
      url: BASE_URL + 'spc/cms/publish/detail.do',
      swiperUrl:BASE_URL + 'spc/cms/publish/list.do',
      params: {
        pubId:'',
        loginName:''
      },
      swiperParams: {
        conditions:'[{"BOOK_SYS_AUTHORS":""},{"pub_site_id":"'+SITE_CONFIG.siteId+'"}]',
        groupBy:"pub_resource_id",
        orderBy:"BOOK_PUBDATE desc",
        pageNo:"1",
        pageSize:"4",
        searchText:""
      }
    }
  },
  toDetailAddress:{
    url:'./bookdetail.html',
    params:'pubId'
  }
}
