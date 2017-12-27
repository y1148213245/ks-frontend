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
			url:"http://172.19.57.153/portal/api/spc/cms/publish/list.do",
			param:{
				conditions: "[{pub_col_id:'131'},{pub_status:'1'}]",
				groupBy: "pub_resource_id",
				orderBy: "pub_read_num desc",
				pageNo: "1",
				pageSize: "4",
				searchText: ""
			},
			number:4,
			href:"./bookDetail.html?pubId="
		}
	}
}