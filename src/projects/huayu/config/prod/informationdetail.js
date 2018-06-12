/*
 * @Author: song
 * @Date: 2018-02-06 11:12:46
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-05-19 15:13:54
 */
export default {
  name: "informationdetail",
  informationDetail: {
    work_informationdetail_01: {
      // url: `spc/cms/publish/detail.do?pubId=`,
      url: `spc/cms/publish/detail.do`,
      params: {
        pubId: '',
        loginName: ''
      },
      keys: {
        show_key: false,
        information_SYS_AUTHORS: 'information_SYS_AUTHORS',
        information_a_pubTime: 'information_a_pubTime',
        information_SYS_TOPIC: 'information_SYS_TOPIC',
        information_a_content: 'information_a_content',
        information_collect: 'information_collect',
        information_share: 'information_share',
        pub_widget_url:'pub_widget_url',
        pub_widget_content:'pub_widget_content'
      },
      collectOrLike: {
        url: `collection/addCollect.do`,
        params: {
          pubId: '',
          operateType: '0',
          siteId: ''
        }
      },
      showItem:['attach'],/* 目前控制附件  attach:附件 */
      event:{
        detailReady:'listenInfoDetail'/* 详情信息加载完毕事件名 */
      }
    }
  },
  pagination: {
    ui_pagination_01: {
      url: `spc/cms/publish/searchNext.do`,
      queryKeys:{/* 请求参数  key为参数名 value为location参数的参数名.目是取location参数到请求参数中 */
        id:'pubId',
        conditions:'conditions',
        orderBy:'orderBy',
        pageNo:'pageNo',
        pageSize:'pageSize'
      },
      prevNextUrl: "./informationdetail.html?",
      pageConfig:{/* 控制请求页码与页容 */
        isGetLocationQuery:false,
        keys:{/* 映射请求参数key */
          pageNo:'pageNo',
          pageSize:'pageSize'
        },
        pageNo:'1',
        pageSize:'999'
      }
    }
  }
};
