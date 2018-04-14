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
          url:'spc/cms/col/getColumnByIdForSite',
          params:{
            colId:104
          },
          keys:{
            id:'id',
            name:'name',
          }
        },
        toMoreList:{
          isShow: true,//是否显示
          url: './booklist.html',//链接
          keys: { //动态参数，左为参数名，右为内部数据的字段名
            colId: 'id'
          },
          fixedKeys: { //固定参数，左为参数名，右为参数值，可自行扩展。
            app: 1
          }
        },
        toDetailType: {
          type:'phone',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
          phone: {
            functionName: 'appbook',/* app方法名 */
            values:['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
          },
          href: {/* 转跳页面 */
            url:'',
            keys:{
              'pubId':'pubId'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
            },
            fixedKeys:{
              'app':'1'/* 左侧为转跳参数；右侧为值 */
            }
          }
        },
      
      }
    }
  }
};
const platform = 'mobile';
const pageType = ['index','channel'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };