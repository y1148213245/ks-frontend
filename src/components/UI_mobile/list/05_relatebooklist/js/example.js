import component from "../relatebooklist";

const name = component.name;  // 组件标签名

const title = "相关图书列表";  // 组件title

const description = `相关图书列表`;  // 组件描述信息

const dev = {
  relatebooklist: {
    relatebooklist_01: {
      url: '../data/list_05_relatebooklist.json',
      keys: { //接口字段兼容
        pic:"pub_picBig",
        Bookname: "pub_resource_name",
        BookId:"id"
      },
      maxRelateNumber: 7, // 显示多少个数据
    }
  }
};

const prod = {
  relatebooklist: {
    relatebooklist_01: {
      url: CONFIG.BASE_URL + "spc/cms/publish/related.do",
      params: {
        size: "3",
        pubId: "52",
      },
      keys: { //接口字段兼容
        pic:"pub_picBig",
        Bookname: "pub_resource_name",
        BookId:"id"
      },
      maxRelateNumber: 7, // 显示多少个数据
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
};

const platform = 'mobile';
const pageType = ['list'];//不确定
const resourceType = ['book', 'information'];//不确定

export {name, title, dev, prod, description, platform, pageType, resourceType};
