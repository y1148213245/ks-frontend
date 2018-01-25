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
      herf: "./bookdetail.html?pubId="
    }
  }
}

const prod = {
  swiper: {
    'modules': {
      pic_word_03: {
        url: BASE_URL + 'spc/cms/publish/list.do',
        params: {
          conditions: "[{pub_resource_type:'BOOK'},{pub_col_id:'240'}]",
          orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
          pageNo: "1",
          pageSize: "15",
          searchText: null
        },
        herf: "./bookdetail.html?pubId="
      }
    }
  }
};

const platform = 'PC';
const pageType = ['index'];
const resourceType = ['book'];

export { name, title, dev, prod, description, platform, pageType, resourceType };