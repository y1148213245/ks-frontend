export default {
  name: 'authordetail',
  components: {
    common: {
      // url: CONFIG.BASE_URL + 'spc/cms/publish/detail.do',
      url:`${CONFIG.BASE_URL}spc/cms/publish/detail.do`,
      // swiperUrl:CONFIG.BASE_URL + 'spc/cms/publish/list.do',
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
    }
  },
  toDetailAddress:{
    url:'./bookdetail.html',
    params:'pubId'
  }
}
