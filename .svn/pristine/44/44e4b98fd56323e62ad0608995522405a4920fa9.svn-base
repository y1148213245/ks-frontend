/**
 * created by song 2017/12/14
 * 数目下载组件的配置文件 放请求的url、params...
 */
const dev = {
  list_pic: {
    pic_list_download_02: {
      url: '/data/list_pic_02_picListDownload_list.json',
      picLinkUrl: ''
    }
  }
};

const prod = {
  list_pic: {
    pic_list_download_02: {
      url: 'http://172.19.57.153:9092/spc-portal-web/spc/cms/publish/list.do',
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
