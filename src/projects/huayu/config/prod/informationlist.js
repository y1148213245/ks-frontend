/*
 * @Author: song 
 * @Date: 2018-02-05 17:29:18 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-05-16 10:39:52
 * 活动资讯列表
 */
export default {
  name: "list",
  list_word: {
    list_word_02: {
      url:  'spc/cms/publish/list.do',
      params: {
        conditions: [{pub_col_id:'273'}],   // 华育资讯栏目id=249
				orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc',  // 默认orderBy
				pageNo: "1",
				pageSize: "15",
				searchText: null
      },
      locationQuery:{
        keys:{
          colId:'colId'
        }
      }
    }
  }
};
