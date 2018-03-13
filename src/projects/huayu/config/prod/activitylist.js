export default {
  name: "activitylist",
  list_pic:{
    ui_list_pic_21:{
      url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
      params: {
        conditions: '[{"pub_col_id":"253"}]',
        orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc',  // 默认orderBy
        pageNo: "1",
        pageSize: "15",
        searchText: null
      },
      detailHref:"./activityrace.html",
      keys:{
        pub_picMiddle:"pub_picMiddle",
        id:"id",
        PORTAL_ACTIVITY_SYS_TOPIC:"PORTAL_ACTIVITY_SYS_TOPIC",
        PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW:"PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
        PORTAL_ACTIVITY_END_TIMESTAMPNEW:"PORTAL_ACTIVITY_END_TIMESTAMPNEW",
        activityStatus:"activityStatus"
      }
    }
  }
};
