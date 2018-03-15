/*
 * @Author: yan.chaoming 
 * @Date: 2018-03-14 15:29:43 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-03-15 16:20:04
 */
export default {
  name: 'index',
  list: {
    ui_mobile_list_01: {
      'zhongbang': {
        getList: {
          url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
          params: {/* 参数配置 */
            conditions: [/* 条件配置 */
              { pub_resource_type: 'BOOK' },
              { pub_status: '1' },
              { pub_site_id: '5' },
              { pub_col_id: 104 }
            ],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc",
            pageNo: "1",
            pageSize: "10",
            searchText: "",
          },
          keys: {
            id: 'id',
            title: "BOOK_SYS_TOPIC",
            pic: 'pub_picBig',
            author: 'BOOK_SYS_AUTHORS',
          }
        },
        getColDetail: {
          url: CONFIG.BASE_URL + 'spc/cms/col/getColumnByIdForSite?colId=104',
          keys:{
            id:'id',
            name:'name',
          }
        }
      }
    }
  }
}