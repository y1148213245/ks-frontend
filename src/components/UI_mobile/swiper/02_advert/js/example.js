import component from "../advert.vue";

const name = component.name;  // 组件标签名

const title = "广告";  // 组件title

const description = `广告图片`;  // 组件描述信息

const dev = {
  swiper: {
    ui_mobile_swiper_02: {
      url: '../data/swiper_02_advert.json',
      keys:{ //接口字段兼容
        pic: "pub_picBig",
      },
      maxNum: 1, // 取多少个数据
    }
  }
};

const prod = {
  swiper: {
    ui_mobile_swiper_02: {
      url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
      params: {
        conditions: '[{pub_resource_type:"BOOK"},{pub_status:"1"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"},{pub_col_id:133}]',//广告栏目id为133
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "10",
        searchText: "",
      },
      keys:{ //接口字段兼容
        pic: "pub_picBig",
      },
      maxNum: 1, // 取多少个数据
    }
  }
};

const platform = 'mobile';
const pageType = ['index','channel'];
const resourceType = ['book','information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
