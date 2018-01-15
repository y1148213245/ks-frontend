/**
 * Created by codingnuts on 2017/12/12.
 */
const dev = {
	indexBestSale: {
			url: './data/components_index_bestsale.json',
      picLinkUrl:"/pages/bookdetail.html?pubId=",
		  columnId:"51"
	}
}

const prod = {
	indexBestSale: {
			url: 'http://172.19.57.153:9092/spc-portal-web/spc/cms/publish/list.do',
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
