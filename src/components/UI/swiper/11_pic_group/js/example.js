/**
 * Created by codingnuts on 2017/12/12.
 */

import component from "../pic_group_swiper.vue";


const name = component.name;  // 组件标签名

const title = "图片轮播组件";  // 组件title

const description = `轮播图，从getPicGroupDetailList.do接口获取数据，根据获取到的数据类型跳转页面`;  // 组件描述信息

const dev = {
  swiper: {
    pic_group_11: {
      height: "480px",
      interval: 5000,
      openTarget:"_blank",
      picGroupAlias: "modifytest",  //图片组别名
      picGroupLength: 5,        //轮播图片数量
      getPicGroupUrl: "picture/getPicGroupDetailList.do",   //获取图片组接口
      getAllColUrl: "spc/cms/col/getAllColBySiteId",    //获取所有栏目接口
      getDetailUrl: "book/getBookDetail.do",   //获取图书详清
      showTitle: true,  // 控制是否显示图片标题
      toResDetail: {
        91: {
          detailUrl: "./bookdetail.html?pubId=",
        },
        94: {
          detailUrl: "./bookdetail.html?pubId="
        },
        151: {
          detailUrl: "./image_detail.html?pubId="
        },
        136: {
          detailUrl: "./videoplay.html?id="
        },
        144: {
          detailUrl: "./periodical_detail.html?pubId="
        },
        93: {
          detailUrl: "./newsdetail.html?pubId="
        },
        145: {
          detailUrl: "./audiodetail.html?pubId="
        },
      },
      staticText: {
        noImg: "暂无图片",
        noDate: "暂无日期",
        yuan: "￥"
      }
    }
  }
}

const prod = {
  swiper: {
    pic_group_11: {
      height: "480px",
      interval: 5000,
      openTarget:"_blank",
      picGroupAlias: "modifytest",  //图片组别名
      picGroupLength: 5,        //轮播图片数量
      getPicGroupUrl: "picture/getPicGroupDetailList.do",
      getAllColUrl: "spc/cms/col/getAllColBySiteId",
      getDetailUrl: "book/getBookDetail.do",
      showTitle: true,  // 控制是否显示图片标题
      toResDetail: {
        91: {
          detailUrl: "./bookdetail.html?pubId=",
        },
        94: {
          detailUrl: "./bookdetail.html?pubId="
        },
        151: {
          detailUrl: "./image_detail.html?pubId="
        },
        136: {
          detailUrl: "./videoplay.html?id="
        },
        144: {
          detailUrl: "./periodical_detail.html?pubId="
        },
        93: {
          detailUrl: "./newsdetail.html?pubId="
        },
        145: {
          detailUrl: "./audiodetail.html?pubId="
        },
      },
      staticText: {
        noImg: "暂无图片",
        noDate: "暂无日期",
        yuan: "￥"
      }
    }
  }
};

const platform = 'PC';
const pageType = ['index'];
const resourceType = ['book', 'information', 'journal', 'vedio','radio','entry','others'];

export { name, title, dev, prod, description, platform, pageType, resourceType };
