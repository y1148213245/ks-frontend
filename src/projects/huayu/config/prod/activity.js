/**
 * Created by song on 2018/2/5.
 * 华育活动
 */

export default {
  name: "activity",
  swiper: {
    swiper_07: {
      url: BASE_URL + 'spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_col_id:'253'}]",   // 华育活动轮播图id=253
				orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc',  // 默认orderBy
				pageNo: "1",
				pageSize: "15",
				searchText: null
      },
      height: "360px",
      interval: 5000,
      keys: {  // 接口字段兼容
        bigPicture: 'pub_picBig',
        pubId: 'id',
      },
      relatedZXurl: BASE_URL + 'spc/cms/publish/relatedZX.do',
      relatedZXparams: {
        pubId: '',
      },
      detailurl: '../pages/informationdetail.html?pubId=',
    }
  },
  list_pic:{
    ui_list_pic_22:{
      url:`${BASE_URL}spc/cms/col/getColNextLevelNode`,
      params:{
        colId:'248'
      },
      activityListUrl:"./activitylist.html",
      keys:{
        small_pic:"small_pic",
        id:"id",
        name:"name"
      }
    }
  }
};
