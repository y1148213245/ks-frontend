import component from '../swiper_pic_group.vue'
const name = component.name;  // 组件标签名
const title = '图片轮播组件';  // 组件title
const description = `轮播图组件,从getPicGroupDetailList.do接口获取数据，根据获取到的数据类型跳转页面`;  // 组件描述信息
const dev = {
  ui_mobile_swiper: {
    ui_mobile_swiper_03: {
      'modulename': {
        phone: {    //调APP接口
          functionName: 'appbook',/* app方法名 */
          values:['picAddress'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
        },
        showTitle:false,     //是否显示图片标题
        interval:3000,         //图片轮播间隔
        openTarget:'_blank',  //在新页面打开   
        picGroupAlias:"appTest",  //图片组别名
        getPicGroupUrl:'picture/getPicGroupDetailList.do', //获取图片组接口
        getAllColUrl:"spc/cms/col/getAllColBySiteId", //获取所有栏目接口
        maxNum: 10,   //轮播图片数量
      }
    }
  }
};
const prod = {
  ui_mobile_swiper: {
    ui_mobile_swiper_03: {
      'modulename': {
        phone: {   //调APP接口
          functionName: 'appbook',/* app方法名 */
          values:['picAddress'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
        },
        showTitle:false,    //是否显示图片标题
        interval:3000,       //图片轮播间隔
        openTarget:'_blank',    //在新页面打开       
        picGroupAlias:"appTest",    //图片组别名
        getPicGroupUrl:'picture/getPicGroupDetailList.do',   //获取图片组接口
        getAllColUrl:"spc/cms/col/getAllColBySiteId",   //获取所有栏目接口
        maxNum: 10,   //轮播图片数量
      }
    }
  }
};
const platform = 'mobile';
const pageType = ['index'];
const resourceType = ['book','entry','others'];
export { name, title, dev, prod, description, platform, pageType, resourceType };

