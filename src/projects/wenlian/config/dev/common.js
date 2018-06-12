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
	list_pic:{
		picListBook:{
			url:"/data/ui_list_pic_06.json",
			href:"./bookdetail.html?pubId="
		},
		picListEditor:{
			url:"/data/ui_list_pic_08.json",
			href:"./editorList.html",
			locationHref:"authordetail.html?pubId="
		},
		popularBook:{
			url:"/data/ui_list_pic_07.json",
			number:15,
			href:"./bookdetail.html?pubId="
		},
		refinedBook:{
			url:"/data/ui_list_pic_10.json",
			href:"./bookdetail.html?pubId=",
			pubId:59
		}
	}
}