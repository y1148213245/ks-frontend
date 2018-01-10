/**
 * Created by codingnuts on 2017/12/12.
 */

import component from "../SmallPic_Swiper.vue";


const name = component.name;  // 组件标签名

const title = "图书轮播组件";  // 组件title

const description = `图书轮播，手动轮播`;  // 组件描述信息

const dev = {
	swiper: {
    smallPic_02: {
			url: './data/swiper_02_smallPic_list.json',
      picLinkUrl:"./bookdetail.html?pubId=",
			columnId:"51"
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
      picLinkUrl:"./bookdetail.html?pubId=",
			columnId:"51"
		}
	}
};

export {name, title, dev, prod, description};
