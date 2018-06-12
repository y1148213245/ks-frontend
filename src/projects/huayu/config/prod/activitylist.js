export default {
  name: "activitylist",
  common: {
    work_common_06: {
      'name': {
        getColDetail: {
          url: 'spc/cms/col/getColumnByIdForSite',
          keys: {
            name: 'name'
          },
          params: {
            colId: 'colId'
          }
        },
        showItem:['title'],/* 控制显示,目前控制父栏目标题 title */
      }
    }
  },
  list_pic:{
    ui_list_pic_21:{
      url:  'spc/cms/publish/list.do',
      params: {
        conditions: '[{"pub_col_id":"253"}]',
        orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc',  // 默认orderBy
        pageNo: "1",
        pageSize: "8",
        searchText: null
      },
      detailHref:"./activityrace.html",
      keys:{
        pub_picMiddle:"pub_picMiddle",
        id:"id",
        PORTAL_ACTIVITY_SYS_TOPIC:"PORTAL_ACTIVITY_SYS_TOPIC",
        PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW:"PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
        PORTAL_ACTIVITY_END_TIMESTAMPNEW:"PORTAL_ACTIVITY_END_TIMESTAMPNEW",
        reviewDate:'PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW'
      },
      pageSizes:[8,16,32,48],
      showItem:['title'],/* 控制显示,目前控制父栏目标题 title */
      getColDetail:{
        url:'spc/cms/col/getColumnByIdForSite',
        keys:{
          name:'name'
        },
        params:{
          colId:'colId'
        }
      }
    }
  }
};
