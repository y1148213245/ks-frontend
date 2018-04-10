/*
 * @Author: yan.chaoming
 * @Date: 2018-01-08 17:25:11
 * @Last Modified by: song
 * @Last Modified time: 2018-03-12 14:17:13
 */
export default {
  name: 'editorlist',
  list_pic: {
    ui_list_pic_15: {
      url:  'spc/cms/col/getColNextLevelNode',
      param: {
        colId:'118'
      },
      resultUrl:`${CONFIG.BASE_URL}spc/cms/publish/list.do`,
      resultParam:{
        pageNo: '1',
        pageSize: '10',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        searchText: '',
        groupBy: 'pub_resource_id'
      },
      toDetailHref: './detail.html?pubId=',
      pageSizes: [10, 20, 50, 100],
      contributeBaseUrl: '',
    }
  }
}
