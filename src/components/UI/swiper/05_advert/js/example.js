/**
 * Created by qinff on 2018/1/8.
 */

import component from "../Advert_Swiper.vue";


const name = component.name; // 组件标签名

const title = "广告组件"; // 组件title

const description = `广告，展示一张广告图。`; // 组件描述信息

const dev = {
  swiper: {
    pic_advert_05: {
      url: './data/swiper_05_advert.json'
    }
  }
};

const prod = {
  swiper: {
    pic_advert_05: {
      url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_col_id:'214'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      infoUrlPrefix: "informationInfo.html?pubId="
    }
  }
};

const platform = 'PC';
const pageType = ['index'];
const resourceType = ['book', 'information', 'journal'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
