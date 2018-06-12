
import component from "../advertisementList.vue";


const name = component.name;  // 组件标签名

const title = "广告列表组件";  // 组件title

const description = `广告列表组件，可配置显示广告的数量以及从第几条显示`;  // 组件描述信息

const dev = {
  swiper: {
    swiper_08: {
      "modulename": {
        display: { // vue template 固定显示内容
        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "../data_swiper_08_adv_data.json",
          params: {
            conditions: "[{pub_col_id: 133}]",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          startNum: 1, // 从第几条开始取
          maxNum: 4, // 取的条数
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
        },
        imgMaxWidth: 300, //图片最大宽度
        imgMaxHeight: 100, //图片最大高度
        toDetail: { // 去广告详情页面
          url: "",
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        toMore: { // 去更多页面
          url: "",
          dataKeys: {
            colId: "colId", // colId是从适配器里对应的
          },
          fixedKeys: {}
        }
      }
    }
  }
}

const prod = {
  swiper: {
    swiper_08: {
      "modulename": {
        display: { // vue template 固定显示内容
        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "spc/cms/publish/list.do",
          params: {
            conditions: "[{pub_col_id: 133}]",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          startNum: 1, // 从第几条开始取
          maxNum: 4, // 取的条数
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
        },
        imgMaxWidth: 300, //图片最大宽度
        imgMaxHeight: 100, //图片最大高度
        toDetail: { // 去广告详情页面
          url: "",
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        toMore: { // 去更多页面
          url: "",
          dataKeys: {
            colId: "colId", // colId是从适配器里对应的
          },
          fixedKeys: {}
        }
      }
    }
  }
};

const platform = 'PC';
const pageType = ['others'];
const resourceType = ['others'];

export { name, title, dev, prod, description, platform, pageType, resourceType };
