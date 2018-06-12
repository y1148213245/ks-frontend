/**
 * Created by codingnuts on 2017/12/21.
 */

export default {
	name: "common",
	search: {
		Category_Search: {
			searchHrefPage: "./searchresult.html"
		}
	},
	navigation: {
		headerNavigation_01: {
			navigationTitleWordList: [
				{
					name: "资讯",
					id: 42
				},
				{
					name: "图书",
					id: 43
				},
				{
					name: "电子书",
					id: 44
				},
				{
					name: "资源",
					id: 45
				},
				{
					name: "天猫旗舰店",
					id: -1,
					href: "https://shrmms.tmall.com/",
					type: "shopLink",
					childHref: [
						{
							name: "亚马逊",
							href: "#"
						}, {
							name: "京东",
							href: "#"
						}, {
							name: "当当网",
							href: "#"
						}
					]
				},
			],
			showItemFromColId:['46','48','49','51','54','56'],
			url:  'spc/cms/col/getAllColBySiteId.do?siteId=1&chId=0'
		}
	}
}
