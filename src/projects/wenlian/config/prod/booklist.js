/**
 * Created by qinff on 2018/1/16.
 */

export default {
  name: 'booklist',
  _2colsWithSort: {
    queryBookList: {
      url: BASE_URL + 'spc/cms/publish/list.do',
      params: {
        conditions: '',
        orderBy: '',
        pageNo: '',
        pageSize: '',
        searchText: '',
        groupBy: 'pub_resource_id'
      }
    }
  },
  _3colsWithSort: {
    queryBookList: {
      url: BASE_URL + 'spc/cms/publish/list.do',
      params: {
        conditions: '',
        orderBy: '',
        pageNo: '',
        pageSize: '',
        searchText: '',
        groupBy: 'pub_resource_id'
      }
    }
  }
}
