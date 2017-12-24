/**
 * Created by codingnuts on 2017/11/1.
 */

export default {
	name: "index",
	swiper: {
		pic_01: {
			height: "480px",
			interval: 5000,
			url: BASE_URL + '/spc/cms/publish/list.do',
			params: {
				conditions: "[{'pub_col_id':'225'}]",
				orderBy: null,
				pageNo: "1",
				pageSize: "15",
				searchText: null
			}
     },
    smallPic_02: {
      height: "480px",
      width:"200px",
      interval: 5000,
      url: BASE_URL+'/spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_resource_type:'BOOK'}]",
        orderBy: "BOOK_PUBDATE desc",
        pageNo: "1",
        pageSize: "15",
        searchText: null
      },
      picLinkUrl:"/pages/bookDetail/bookDetail.html?pubId="
    },
    pic_word_03: {
      url: BASE_URL+'/spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_resource_type:'BOOK'}]",
        orderBy: null,
        pageNo:  "1",
        pageSize: "15",
        searchText: null
      }
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
