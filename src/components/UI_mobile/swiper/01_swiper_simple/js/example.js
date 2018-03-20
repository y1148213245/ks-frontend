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
        getList: {
          url: 'spc/cms/publish/list.do',
          params: {/* 参数配置 */
            conditions: [/* 条件配置 */
              { pub_resource_type: 'BOOK' },/* 资源类型条件 */
              { pub_status: '1' },   /* 发布状态条件 */
              { pub_site_id: '5' },/* 站点id条件 */
              { pub_col_id: 104 }/* 栏目id条件 */
            ],
            groupBy: "pub_resource_id",/* 去重条件 */
            orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",/* 排序条件 */
            pageNo: "1",
            pageSize: "10",
            searchText: "",
          },
          keys: {
            id: 'id',
            pic: 'pub_picBig',/* 封面字段 */
            poster: 'pub_POSTER'/* 海报字段 */
          }
        },
      }
    }
  }
};
const platform = 'mobile';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };