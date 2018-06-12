import component from '../01_advert.vue'
const name = component.name;  // 组件标签名
const title = '广告图组件';  // 组件title
const description = `广告图组件`;  // 组件描述信息
const dev = {
  advert: {
    ui_advert_01: {
      url: '',
    }
  }
};
const prod = {
  advert: {
    ui_advert_01: {
      "modulename": {
        getList: {
          url: 'spc/cms/publish/list.do',
          params: {
            conditions: "[{pub_col_id:'263'}]",
            orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc',  // 默认orderBy
            pageNo: "1",
            pageSize: "15",
            searchText: null
          },
          keys: {
            pic: 'pub_picBig',
            sourceLink:'information_a_sourceUrl'
          }
        }
      }
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };