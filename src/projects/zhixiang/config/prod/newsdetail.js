export default {
  name: "informationDetail",
  informationDetail: {
    work_informationdetail_01: {
      url:  'spc/cms/publish/detail.do',
      params:{
        pubId:'',
        loginName:''
      },
      keys:{
        information_SYS_TOPIC:'information_SYS_TOPIC',
        information_SYS_AUTHORS:'information_SYS_AUTHORS',
        information_a_pubTime:'information_a_pubTime',
        information_a_source:'information_a_source',
        information_a_content:'information_a_content'
      }
    }
  },
  list_pic: {
    work_list_pic_20: {
      url:  "spc/cms/publish/relatedZX.do?pubId=",
      toDetailUrl:'./newsdetail.html?pubId='
    }
  }
}
