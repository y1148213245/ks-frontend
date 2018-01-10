/**
 * Created by codingnuts on 2017/12/12.
 */

import component from "../Pic_Word_Swiper.vue";


const name = component.name;  // 组件标签名

const title = "图书轮播组件";  // 组件title

const description = `图书轮播，自动轮播`;  // 组件描述信息

const dev = {
  swiper: {
    pic_word_03: {
      url: './data/swiper_03_pic_words.json',
      herf:"./bookDetail.html?pubId="
    }
  }
}

const prod = {
  swiper: {
    pic_word_03: {
      url: 'http://172.19.57.153:9092/spc-portal-web/spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_resource_type:'BOOK'}]",
        orderBy: null,
        pageNo:  "1",
        pageSize: "15",
        searchText: null
      },
      herf:"./bookDetail.html?pubId="
    }
  }
};

export {name, title, dev, prod, description};