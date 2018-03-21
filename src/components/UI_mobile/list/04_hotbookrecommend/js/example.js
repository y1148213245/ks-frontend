import component from "../hotbookrecommend";

const name = component.name;  // 组件标签名

const title = "热门推荐";  // 组件title

const description = `搜索下面的热门推荐`;  // 组件描述信息

const dev = {
  hotbookrecommend: {
    hotbookrecommend_01: {
      url: '../data/list_04_hotbookrecommend.json',
      keys: { //接口字段兼容
        Bookname: "pub_resource_name",
        author: "BOOK_SYS_AUTHORS",
        BookId:"id"
      },
      maxNumber: 10, // 显示多少个数据
    }
  }
};

const prod = {
  hotbookrecommend: {
    hotbookrecommend_01: {
      url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
      params: {
        conditions: '[{pub_resource_type:"BOOK"},{pub_status:"1"},{pub_col_id:"113"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"}]',//热门推荐栏目id为113
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "10",
        searchText: ""
      },
      keys: { //接口字段兼容
        Bookname: "pub_resource_name",
        author: "BOOK_SYS_AUTHORS",
        BookId:"id"
      },
      maxNumber: 10, // 显示多少个数据
    }
  }
};

const platform = 'mobile';
const pageType = ['others'];
const resourceType = ['book', 'information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
