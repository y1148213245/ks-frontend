/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-08 16:26:20 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-01-08 17:13:29
 */

export default {
  name: 'authorlist',
	list_pic: {
		ui_list_pic_14: {
			url: BASE_URL + 'spc/cms/publish/list.do',
			toDetailHref:'./detail.html?pubId=',
			pageSizes:[10,20,50,100],
		}
	}
}