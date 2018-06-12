/**
 * Created by admin on 2017/12/26.
 */
/**
 * Created by song on 2017/12/14.
 * 课件
 */
export default {
  name: "courseware",
  list_pic: {
    pic_list_download_02: {
      url: '/data/list_pic_02_picListDownload_list.json',
      params: {
        conditions: "[{information_a_type:0},{pub_col_id:'56'}]",   // 数目下载栏目id=56
        orderBy: 'pub_a_order asc pub_lastmodified desc',
        pageNo: "1",
        pageSize: "15",
        searchText: null
      },
      picLinkUrl: ''
    }
  }
};
