import component from '../swiper_simple.vue'
const name = component.name;  // 组件标签名
const title = '轮播图组件';  // 组件title
const description = `轮播图组件`;  // 组件描述信息
const dev = {
  swiper: {
    ui_mobile_swiper_01: {
      url: '',
    }
  }
};
const prod = {
  swiper: {
    ui_mobile_swiper_01: {
      'module1': {
        getList: {
          url: 'spc/cms/publish/list.do',
          params: {/* 参数配置 */
            conditions: [/* 条件配置 */
              { pub_resource_type: 'BOOK' },
              { pub_status: '1' },
              { pub_site_id: '5' },
              { pub_col_id: 104 }
            ],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "10",
            searchText: "",
          },
          keys:{
            id:'id',
            pic:'pub_picBig',
            poster:'pub_POSTER'
          }
        },
        getColDetail:{
          url:'spc/cms/col/getColumnByIdForSite?colId=104',
          keys:{
            id:'id',
            name:'name',
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