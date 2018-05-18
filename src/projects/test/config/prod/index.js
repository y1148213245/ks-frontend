export default {
  name: "index",
  swiper: {
    swiper_pic_01: {
      "index": {
        url: 'spc/cms/publish/list.do',
        params: {
          conditions: "[{'pub_col_id':'225'}]",
          orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
          pageNo: "1",
          pageSize: "15",
          searchText: null
        },
        showItem: [],
        display: {},
        keys: { //字段兼容
          imgUrl: "pub_picBig"
        },
        height: "480px",
        interval: 5000
      }
    }
  },
  ui_vedio: {
    ui_vedio_01: {
      "vedio": {
        url: "spc/cms/publish/list.do",
        params: {
          conditions: "[{pub_col_id:'261'},{pub_status:'1'}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "15",
          searchText: "",
        },
        showItem: [], // 控制显示哪些项
        display: { // template 固定显示内容
        },
        maxNum: 4,
        toPlayVedio: {
          url: "../pages/vedioplay.html",
          dataKeys: {
            id: "id",
          },
          fixedKeys: {}
        },
        toDetail: {
          url: "../pages/vediodetail.html",
          dataKeys: {
            id: "id",
          },
          fixedKeys: {}
        }
      }

    }
  }
}
