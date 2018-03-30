import component from '../work_mobile_header.vue'
const name = component.name; // 组件标签名
const title = '头部菜单栏'; // 组件title
const description = `
横向展示,可左右滑动

参数配置:
`; // 组件描述信息
const dev = {
  header: {
    work_mobile_header_01: {
      toCartType:{
        type:'phone',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
          phone: {
            functionName: '',/* app方法名 */
            values:[],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
          },
          href: {/* 转跳页面 */
            url:'',
            keys:{/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
            },
            fixedKeys:{/* 左侧为转跳参数；右侧为值 */
            }
          }
      },
      display: [{ //控制头部菜单栏展示
        name: "推荐",
        url: "./index.html"
      }, {
        name: "榜单",
        url: "./bookrank.html"
      }, {
        name: "分类",
        url: "./classify.html"
      }],
      toSearch: "./search.html"
    }
  }
};
const prod = {
  header: {
    work_mobile_header_01: {
      toCartType:{
        type:'phone',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
          phone: {
            functionName: '',/* app方法名 */
            values:[],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
          },
          href: {/* 转跳页面 */
            url:'',
            keys:{/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
            },
            fixedKeys:{/* 左侧为转跳参数；右侧为值 */
            }
          }
      },
      display: [{ //控制头部菜单栏展示
        name: "推荐",
        url: "./index.html"
      }, {
        name: "榜单",
        url: "./bookrank.html"
      }, {
        name: "分类",
        url: "./classify.html"
      }],
      toSearch: "./search.html"
    }
  }
};
const platform = 'mobile';
const pageType = ['index', 'channel'];
const resourceType = ['others'];
export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType
};
