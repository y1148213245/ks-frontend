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
			href:"./bookDetail.html?pubId="
		},
		picListEditor:{
			url:"/data/ui_list_pic_08.json",
			href:"./editorList.html",
			locationHref:"authorDetail.html?pubId="
		},
		popularBook:{
			url:"/data/ui_list_pic_07.json",
			number:15,
			href:"../bookDetail/bookDetail.html?pubId="
		},
		refinedBook:{
			url:"/data/ui_list_pic_10.json",
			href:"../bookDetail/bookDetail.html?pubId=",
			pubId:59
		}
	}
}