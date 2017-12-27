/**
 * Created by codingnuts on 2017/12/21.
 */

export default {
	name: "common",
	search: {
		Category_Search: {
			searchHrefPage: "./searchResult.html"
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
	},
	list_pic:{
		picListBook:{
			url:"/data/ui_list_pic_06.json",
			number:4,
			href:"./bookDetail.html?pubId="
		}
	}
}