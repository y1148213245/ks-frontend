/*
 * @Author: yan.chaoming
 * @Date: 2018-03-14 15:29:43
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-03-15 16:20:04
 */
export default {
  name: 'index',
  list: {
    ui_mobile_list_01: {
      'zhongbang': {
        getList: {
          url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
          params: {/* 参数配置 */
            conditions: [/* 条件配置 */
              { pub_resource_type: 'BOOK' },
              { pub_status: '1' },
              { pub_site_id: '5' },
              { pub_col_id: 104 }
            ],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc",
            pageNo: "1",
            pageSize: "10",
            searchText: "",
          },
          keys: {
            id: 'id',
            title: "BOOK_SYS_TOPIC",
            pic: 'pub_picBig',
            author: 'BOOK_SYS_AUTHORS',
          }
        },
        getColDetail: {
          url: CONFIG.BASE_URL + 'spc/cms/col/getColumnByIdForSite?colId=104',
          keys:{
            id:'id',
            name:'name',
          }
        }
      }
    },
    ui_mobile_list_03:{
      newbook:{
        url:`${CONFIG.BASE_URL}spc/cms/publish/list.do`,
        params:{
          conditions :  '[{"pub_resource_type":"BOOK"},{"pub_status":"1"},{"pub_site_id":"5"},{"pub_col_id":110}]',
          groupBy : "pub_resource_id",
          orderBy : "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          pageNo : "1",
          pageSize : "10",
          searchText :  "",
        },
        navUrl:`${CONFIG.BASE_URL}spc/cms/col/getAllColBySiteId.do`,
        navParams:{
          siteId:5,
          chId:0
        },
        keys:{
          pub_site_id:"pub_site_id",
        },
        colId:110,
        title:'编辑力推超值好书',
        classFloat:'left'
      },
      newfree:{
        url:`${CONFIG.BASE_URL}spc/cms/publish/list.do`,
        params:{
          conditions :  '[{"pub_resource_type":"BOOK"},{"pub_status":"1"},{"pub_site_id":"5"},{"pub_col_id":111}]',
          groupBy : "pub_resource_id",
          orderBy : "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          pageNo : "1",
          pageSize : "10",
          searchText :  "",
        },
        navUrl:`${CONFIG.BASE_URL}spc/cms/col/getAllColBySiteId.do`,
        navParams:{
          siteId:5,
          chId:0
        },
        keys:{
          pub_site_id:"pub_site_id"
        },
        colId:111,
        title:'多种图书免费长读',
        classFloat:'right'
      },
      newsale:{
        url:`${CONFIG.BASE_URL}/spc/cms/publish/list.do`,
        params:{
          conditions :  "[{pub_resource_type:'BOOK'},{pub_status:'1'},{pub_site_id:'5'},{pub_col_id:112}]",
          groupBy : "pub_resource_id",
          orderBy : "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          pageNo : "1",
          pageSize : "10",
          searchText :  "",
        },
        navUrl:`${CONFIG.BASE_URL}spc/cms/col/getAllColBySiteId.do`,
        navParams:{
          siteId:5,
          chId:0
        },
        keys:{
          pub_site_id:"pub_site_id"
        },
        colId:112,
        title:'特价好书买不停',
        classFloat:'right'
      }
    }
  },
  header:{
    work_mobile_header_01:{
      display:[{   //控制头部菜单栏展示
        name:"推荐",
        url:"./index.html"
      },{
        name:"榜单",
        url:"./bookRank.html"
      },{
        name:"分类",
        url:"./classify.html"
      }],
      toSearch:"./search.html"
    }
  }
}
