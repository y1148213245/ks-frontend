/**
 * Created by song 2018/3/15
 * 图书列表组件
 */

import component from "../ui_mobile_list_03.vue";

const name = component.name; // 组件标签名

const title = "首页新书上架、免费专区、最新特价"; // 组件title

const description = `首页新书上架、免费专区、最新特价组件`; // 组件描述信息

const dev = {
  ui_mobile_list_03:{
    newbook:{
      url:'../data/list_03_book_recommend_img.json',
      params:{
        conditions :  '[{"pub_resource_type":"BOOK"},{"pub_status":"1"},{"pub_site_id":"5"},{"pub_col_id":110}]',
        groupBy : "pub_resource_id",
        orderBy : "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
        pageNo : "1",
        pageSize : "10",
        searchText :  "",
      },
      navUrl:'../data/list_03_book_recommend.json',
      navParams:{
        siteId:5,
        chId:0
      },
      keys:{
        pub_site_id:"pub_site_id",
      },
      colId:110,
      title:'编辑力推超值好书',
      classFloat:'left',
      titleColor:"#c40001"
    },
    newfree:{
      url:'../data/list_03_book_recommend_img.json',
      params:{
        conditions :  '[{"pub_resource_type":"BOOK"},{"pub_status":"1"},{"pub_site_id":"5"},{"pub_col_id":111}]',
        groupBy : "pub_resource_id",
        orderBy : "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
        pageNo : "1",
        pageSize : "10",
        searchText :  "",
      },
      navUrl:'../data/list_03_book_recommend.json',
      navParams:{
        siteId:5,
        chId:0
      },
      keys:{
        pub_site_id:"pub_site_id"
      },
      colId:111,
      title:'多种图书免费长读',
      classFloat:'right',
      titleColor:"#4dbe6f"
    },
    newsale:{
      url:'../data/list_03_book_recommend_img.json',
      params:{
        conditions :  "[{pub_resource_type:'BOOK'},{pub_status:'1'},{pub_site_id:'5'},{pub_col_id:112}]",
        groupBy : "pub_resource_id",
        orderBy : "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
        pageNo : "1",
        pageSize : "10",
        searchText :  "",
      },
      navUrl:'../data/list_03_book_recommend.json',
      navParams:{
        siteId:5,
        chId:0
      },
      keys:{
        pub_site_id:"pub_site_id"
      },
      colId:112,
      title:'特价好书买不停',
      classFloat:'right',
      titleColor:"#54b1e1"
    }
  }
};

const prod = {
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
};

const platform = 'mobile';
const pageType = ['index','channel'];
const resourceType = ['book','information'];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType
};
