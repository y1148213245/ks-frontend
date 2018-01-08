/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-08 17:25:11 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-01-08 18:05:29
 */
export default {
  name: 'editorlist',
  list_pic: {
    ui_list_pic_15: {
      url: BASE_URL + 'spc/cms/publish/list.do',
      param: {
        conditions: "[{pub_col_id:'117'},{pub_status:'1'}]",
        groupBy: 'pub_resource_id',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        pageNo: '1',
        pageSize: '10',
        searchText: ''
      },
      toDetailHref: './detail.html?pubId=',
      pageSizes: [10, 20, 50, 100],
      contributeBaseUrl: '',
    }
  }
}