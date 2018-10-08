/**
 * Created by zrn at 2018/09/29.
 */

import component from "../columnSwiper.vue";

const name = component.name; // 组件标签名

const title = "栏目轮播组件"; // 组件title

const description = `栏目轮播, 自动, 可配置显示项。
1 宗教图片库 index.html`; // 组件描述信息

const dev = {
  swiper: {
    ui_swiper_column_10: {
      "modulename": {
        comTitle: {
          isShow: true,
          isShowImg: false,
          name: ""
        },
        getParentData: {
          //获取父栏目信息
          url: "../data/column_swiper_parent_10.json",
          params: {
            colId: 1346
          }
        },
        getChildColumnData: {
          url: "../data/column_swiper_10.json",
          params: {
            colId: 1346
          }
        },
        sysAdapter: "sykAdapter", // 系统字段
        typeAdapter: "columnAdapter", // 类型字段
        startNum: 0,
        swiper: {
          autoplay: true,  // 是否自动切换
          interval: 5000,  // 自动切换时间间隔
          trigger: "click",  // 指示器触发方式
          arrow: "always",  // 切换箭头的显示时机
          height: "690px"
        },
        colIds: "1336, 1342, 1343",
        complicatedItem: [
          {
            name: "button",
            field: "name",
            display: "",
            method: "toUrl"
          },
          {
            name: "button",
            field: "describe",
            display: "",
            method: "toUrl"
          },
          {
            name: "button",
            field: "",
            display: "",
            method: "toUrl"
          },
          {
            name: "img",
            field: "bigPic",
            display: "",
            method: "toUrl"
          }
        ],
        toMore: {
          url: "../pages/list.html",
          dataKeys: {
            columnId: "id" 
          },
          fixedKeys: {}
        },
        staticText: {
          noImg: "暂无图片"
        }
      }
    }
  }
};

const prod = {
    swiper: {
      ui_swiper_column_10: {
        "modulename": {
          comTitle: {
            isShow: true,
            isShowImg: false,
            name: ""
          },
          getParentData: { //获取父栏目信息
            url: "spc/cms/col/getColumnByIdForSite",
            params: {
              colId: 1346
            }
          },
          getChildColumnData: {  // 获取子栏目信息
            url: "spc/cms/col/getColNextLevelNode",
            params: {
              colId: 1346
            }
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "columnAdapter", // 类型字段
          swiper: {
            autoplay: true,  // 是否自动切换
            interval: 5000,  // 自动切换时间间隔
            trigger: "click",  // 指示器触发方式
            arrow: "always",  // 切换箭头的显示时机
            height: "690px"
          },
          colIds: "1336, 1342, 1343",
          complicatedItem: [
            {
              name: "button",
              field: "name",
              display: "",
              method: "toUrl"
            },
            {
              name: "button",
              field: "describe",
              display: "",
              method: "toUrl"
            },
            {
              name: "button",
              field: "",
              display: "",
              method: "toUrl"
            },
            {
              name: "img",
              field: "bigPic",
              display: "",
              method: "toUrl"
            }
          ],
          toMore: {
            url: "../pages/list.html",
            dataKeys: {
              columnId: "id" 
            },
            fixedKeys: {}
          },
          staticText: {
            noImg: "暂无图片"
          }
        }
      }
    }
  };

const platform = "PC";
const pageType = ["list"];
const resourceType = ["book", "information", "journal", "vedio"];

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
