/**
 * Created by codingnuts on 2017/12/12.
 */
const dev = {
  swiper: {
    pic_word_03: {
      url: '/data/swiper_03_pic_words.json',
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
      }
    }
  }
};
