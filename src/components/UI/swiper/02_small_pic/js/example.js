/**
 * Created by codingnuts on 2017/12/12.
 */
const dev = {
	swiper: {
    smallPic_02: {
			url: './data/swiper_02_smallPic_list.json',
      picLinkUrl:"/pages/bookDetail/bookDetail.html?pubId="
		}
	}
}

const prod = {
	swiper: {
    smallPic_02: {
			url: 'http://172.19.57.153:9092/spc-portal-web/spc/cms/publish/list.do',
			params: {
        conditions: "[{pub_resource_type:'BOOK'}]",
        orderBy: "BOOK_PUBDATE desc",
        pageNo: "1",
        pageSize: "15",
        searchText: null
			},
      picLinkUrl:"./bookdetail.html?pubId="
		}
	}
};
