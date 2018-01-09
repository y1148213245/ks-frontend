/**
 * Created by qinff on 2018/1/8.
 */
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
      url: BASE_URL + 'spc/cms/publish/list.do',
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
