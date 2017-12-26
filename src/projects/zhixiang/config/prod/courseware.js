/**
 * Created by song on 2017/12/14.
 * 书目下载
 */

export default {
  name: "courseware",
  list_pic: {
    pic_list_download_02: {
      url: BASE_URL + 'spc/cms/publish/list.do',
      params: {
        conditions: "[{information_a_type:0},{pub_col_id:'54'}]",   // 课件栏目id=56
        orderBy: 'pub_a_order asc pub_lastmodified desc',
        pageNo: "1",
        pageSize: "15",
        searchText: null
      },
      picLinkUrl: ''
    }
  }
};
