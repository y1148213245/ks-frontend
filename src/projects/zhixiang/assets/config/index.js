/**
 * Created by codingnuts on 2017/12/14.
 */

// var BASE_URL = "http://172.19.57.153:80/portal/api/";
var BASE_URL = "http://172.19.36.70:9092/spc-portal-web/";
// var BASE_URL = "http://book.clapnet.cn:9092/spc-portal-web/";

var SITE_CONFIG = {
	siteId: 1,
	chId: 0
};
 

var $_$ = {
	bookContentType: {   // 书的类型  纸书：91 电子书 94
		bookType: '91',
		ebookType: '94',
	},
	columnType: {   // 后台栏目 图书（新书：48 热销：49） 推荐（电子书：51）
		48: {
			url: '../pages/newbook.html'
		},
		49: {
			url: '../pages/bestsale.html'
		},
		51: {
			url: '../pages/recommend.html'
		}
	}
	/*index: {
		swiper: {
			pic_01: {
				url: '/data/swiper_01_pic_list.json',
				height: "480px",
				interval: 1000
			}
		}
	}*/
};