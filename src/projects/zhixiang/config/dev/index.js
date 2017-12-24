/**
 * Created by codingnuts on 2017/11/1.
 */

export default {
	name: "index",
	swiper: {
		pic_01: {
			url: '/data/swiper_01_pic_list.json',
			height: "480px",
			interval: 5000
		},
    smallPic_02: {
      url: '/data/swiper_02_smallPic_list.json',
      picLinkUrl:"/pages/bookDetail/bookDetail.html?pubId="
    },
    pic_word_03: {
      url: '/data/swiper_03_pic_words.json',
    }
	},
	navigation:{
		headerNavigation_01:{
			navigationTitleWordList:[
				{
					name:"资讯",
					columnType:0
				},
				{
					name:"图书",
					columnType:2
				},
				{
					name:"电子书",
					columnType:3
				},
				{
					name:"资源",
					columnType:1
				},
				{
					name:"天猫旗舰店",
					columnType:4,
					href:"https://shrmms.tmall.com/",
					type:"shopLink",
					childHref:[
						{
							name:"亚马逊",
							href:"#"
						},{
							name:"京东",
							href:"#"
						},{
							name:"当当网",
							href:"#"
						}
					]
				},
			],
			url: '/data/snavigation_01_headerNavigation.json'
		}
	}
};
