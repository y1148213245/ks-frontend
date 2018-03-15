import component from '../xScroll_list.vue'
const name = component.name;  // 组件标签名
const title = '图书列表组件';  // 组件title
const description = `
横向展示,可左右滑动

参数配置:
  可修改conditions下的pub_col_id切换栏目
`;  // 组件描述信息
const dev = {
  list: {
    ui_mobile_list_01: {
      url: '',
    }
  }
};
const prod = {
  list: {
    ui_mobile_list_01: {
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
            orderBy: "pub_a_order asc pub_lastmodified desc",
            pageNo: "1",
            pageSize: "10",
            searchText: "",
          },
          keys:{
            id:'id',
            title: "BOOK_SYS_TOPIC",
            pic:'pub_picBig',
            author:'BOOK_SYS_AUTHORS',
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