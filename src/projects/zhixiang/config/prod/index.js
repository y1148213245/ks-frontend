/**
 * Created by codingnuts on 2017/11/1.
 */

export default {
	name: "index",
	swiper: {
		pic_01: {
			height: "480px",
			interval: 5000,
			url: BASE_URL + '/spc/cms/publish/list.do',
			params: {
				conditions: "[{'pub_col_id':'225'}]",
				orderBy: null,
				pageNo: "1",
				pageSize: "15",
				searchText: null
			}
     },
    smallPic_02: {
      height: "480px",
      width:"200px",
      interval: 5000,
      url: BASE_URL+'/spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_resource_type:'BOOK'}]",
        orderBy: "BOOK_PUBDATE desc",
        pageNo: "1",
        pageSize: "15",
        searchText: null
      },
      picLinkUrl:"./bookdetail.html?pubId=",
      columnId:"51"
    },
    pic_word_03: {
      url: BASE_URL+'/spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_resource_type:'BOOK'}]",
        orderBy: null,
        pageNo:  "1",
        pageSize: "15",
        searchText: null
      },
      herf:"./bookDetail.html?pubId="
    }
	},
  indexBestSale: {
    url: BASE_URL+'/spc/cms/publish/list.do',
    params: {
      conditions: "[{pub_resource_type:'BOOK'}]",
      orderBy:  null,
      pageNo: "1",
      pageSize: "15",
      searchText: null
    },
    picLinkUrl:"./bookdetail.html?pubId=",
    columnId:"51"
  }
};
