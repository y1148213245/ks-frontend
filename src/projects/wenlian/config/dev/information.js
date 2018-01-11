/**
 * Created by qinff on 2018/1/9.
 */
export default {
  name: 'information',
  information_info_content: {
    queryDetail: {
      url: '/data/work_information_query_detail.json',
      params: {
        pubId: '2715',
        loginName: ''
      }
    },
    collectOrLike: {
      url: '/data/work_information_collect_like.json',
      params: {
        loginName: '',
        pubId: '',
        operateType: '',
        siteId: ''
      }
    }
  }
}
