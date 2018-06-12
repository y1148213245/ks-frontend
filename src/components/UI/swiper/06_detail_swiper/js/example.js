import component from '../detailSwiper.vue'
const name = component.name;  // 组件标签名
const title = '轮播组件';  // 组件title
const description = `轮播组件
通过props传递轮播图数据
props数据结构:
  pics:[
    {
      href:'',/* 图片的链接 */
      url:''/* 图片地址 */
    }
  ]`;  // 组件描述信息
const dev = {
  swiper: {
    ui_swiper_06: {
    }
  }
};
const prod = {
  swiper: {
    ui_swiper_06: {
    }
  }
};
const platform = 'PC';
const pageType = ['index', 'detail', 'list', 'channel', 'others'];
const resourceType = ['book', 'information', 'journal', 'radio', 'vedio', 'activity'];
export { name, title, dev, prod, description, platform, pageType, resourceType };