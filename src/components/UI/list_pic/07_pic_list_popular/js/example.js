/**
 * Created by ma.jw on 2017/12/27.
 * 热门书籍
 */

 
import component from "../popularBook.vue";


const name = component.name;

const title = "热门书籍组件";

const description = `热门书籍`;

const dev ={
	popularBook:{
		url:"/data/ui_list_pic_07.json",
		number:15,
		href:"../bookDetail/bookDetail.html?pubId="
	}
}

const prod = {
	popularBook:{
		url:"http://172.19.57.153/portal/api/spc/cms/publish/list.do",
		param:{
			condition: "[{pub_col_id:'57'},{pub_status:'1'}]",
			groupBy: "pub_resource_id",
			orderBy: "pub_a_order asc pub_lastmodified desc id asc",
			pageNo: "1",
			pageSize: "15",
			searchText: "",
		},
		number:15,
		href:"../bookDetail/bookDetail.html?pubId="
	}
}

export {name, title, dev, prod, description};

