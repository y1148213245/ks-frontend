export default {
  name: "bookdetail",
  bookdetail: {
    bookdetail_01: {
      url: CONFIG.BASE_URL + "mobileBook/getBookDetail.do",
      params: {
        pubId: "",
        loginName:"",
      },
      keys: { //接口字段兼容
        pic: "bigPic",
        title:"resourceName",
        author: "author",
        memberPrice:"memberPrice",
        bookPrice:"bookPrice",
        bookSize:'bookSize',
        starNum:"starNum",
        bookmemory:"bookPrice",
        abstract:'bookAbstract',
      },
      
    }
  },
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
        type:'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
        phone: {
          functionName: 'appbook',/* app方法名 */
          values:['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
        },
        href: {/* 转跳页面 */
          url:'./bookdetail.html',
          keys:{
            'pubId':'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
          },
          fixedKeys:{
            'app':'1'/* 左侧为转跳参数；右侧为值 */
          }
        }
      },
    },
    
  }
};
