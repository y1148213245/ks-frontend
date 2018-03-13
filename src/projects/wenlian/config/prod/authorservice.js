/**
 * Created by qinff on 2018/1/11.
 */

export default {
  name: 'authorservice',
  submission: {
    queryEditorList: {
      url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
      params: {
        conditions: '[{pub_col_id:226}]',
        pageNo: '1',
        pageSize: '15',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        searchText: '',
        groupBy: 'pub_resource_id'
      }
    }
  }
}
