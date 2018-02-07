/**
 * Created by song on 2018/2/5.
 * 华育活动
 */

export default {
  name: "activity",
  list_word: {
    list_word_01: {
      url: BASE_URL + 'spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_col_id:'249'}]",   // 华育资讯栏目id=249
				orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc',  // 默认orderBy
				pageNo: "1",
				pageSize: "15",
				searchText: null
      },
      maxNum: 8,
    },
  }
};
