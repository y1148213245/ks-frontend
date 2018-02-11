/*
 * @Author: song
 * @Date: 2018-02-06 11:12:46
 * @Last Modified by: song
 * @Last Modified time: 2018-02-06 11:13:10
 */
export default {
  name: "informationdetail",
  informationDetail: {
    work_informationdetail_01: {
      // url: `${BASE_URL}spc/cms/publish/detail.do?pubId=`,
      url: `${BASE_URL}spc/cms/publish/detail.do`,
      params: {
        pubId: '',
        loginName:''
      },
      keys:{
        show_key:false,
        information_SYS_AUTHORS:'information_SYS_AUTHORS',
        information_a_pubTime:'information_a_pubTime',
        information_SYS_TOPIC:'information_SYS_TOPIC',
        information_a_content:'information_a_content',
        information_collect:'information_collect',
        information_share:'information_share'
      },
      collectOrLike: {
        url: `${BASE_URL}collection/addCollect.do`,
        params: {
          pubId: '',
          operateType: '0',
          siteId: ''
        }
      }
    }
  },
  pagination:{
    ui_pagination_01:{
      url:`${BASE_URL}spc/cms/publish/searchNext.do`,
      params:{
        conditions:'',
        id:'',
        orderBy:'',
        pageNo:'1',
        pageSize:'15'
      },
      prevNextUrl:"./informationdetail.html"
    }
  }
};
