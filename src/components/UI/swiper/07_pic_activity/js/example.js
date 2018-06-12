/*
 * @Author: song 
 * @Date: 2018-02-06 18:07:52 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-04-25 14:10:45
 */

import component from "../activityswiper.vue";

const name = component.name; // 组件标签名

const title = "资讯轮播组件"; // 组件title

const description = `资讯轮播`; // 组件描述信息

const dev = {
  swiper: {
    swiper_07: {
      url: '../data/swiper_07_data.json',
      height: "480px",
      interval: 5000
    }
  }
};

const prod = {
  swiper: {
    swiper_07: {
      getListData: {
        url: 'spc/cms/publish/list.do',
        params: {
          conditions: "[{pub_col_id:'253'}]",   // 华育活动轮播图id=253
          orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc',  // 默认orderBy
          pageNo: "1",
          pageSize: "15",
          searchText: null
        },
        keys: {  // 接口字段兼容
          bigPicture: 'pub_picBig',
          pubId: 'id',
          sourceUrl:'information_a_sourceUrl'
        }  
      },
      getRelatedData: {
        url: 'spc/cms/publish/relatedZX.do',
        params: {
          pubId: '',
        },
        toDetailurl: '../pages/informationdetail.html?pubId=',
      },
      height: "360px",
      interval: 5000,
      linkType: '',//轮播图点击后的链接方式（默认链接到相关稿件）： 'source' 链接到数据中的字段地址


    }
  }
};

const platform = 'PC';
const pageType = ['channel'];
const resourceType = ['information'];

export { name, title, dev, prod, description, platform, pageType, resourceType };
