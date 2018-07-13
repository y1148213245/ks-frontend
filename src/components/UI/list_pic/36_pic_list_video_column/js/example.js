/*  课程列表展示组件  Created by yy 2018/05/10  */
import component from "../videoColumn.vue";

const name = component.name; // 组件标签名

const title = "课程列表展示组件"; // 组件title

const description = `课程列表展示组件`; // 组件描述信息

const dev = {
  list_pic: {
    list_pic_36: {
      'modulename': {
        display: {
          courseContain: '课程包含内容：',
          courseName: '课程名称',
          symbol: '、'
        },
        url: "spc/cms/publish/list.do",
        params: {
          conditions: "[{pub_parent_id:''}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "10",
          searchText: "",
        },
        sysAdapter: "sykAdapter", // 系统字段
        typeAdapter: "videoAdapter", // 类型字段
        toDetail: { // 去视频详情页面
          url: "../pages/videoplay.html",
          dataKeys: {
            parentId: "parentId", // id是从适配器里对应的
            id: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        maxNum: 10,
        pageSizes:[10,30,50,100],

      }
    },
  }
}

const prod = {
  list_pic: {
    list_pic_36: {
      'modulename': {
        display: {
          courseContain: '课程包含内容：',
          courseName: '课程名称',
          symbol: '、'
        },
        url: "spc/cms/publish/list.do",
        params: {
          conditions: "[{pub_parent_id:''}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "10",
          searchText: "",
        },
        sysAdapter: "sykAdapter", // 系统字段
        typeAdapter: "videoAdapter", // 类型字段
        toDetail: { // 去视频详情页面
          url: "../pages/videoplay.html",
          dataKeys: {
            parentId: "parentId", // id是从适配器里对应的
            id: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        maxNum: 10,
        pageSizes:[10,30,50,100],

      }
    },
  }
}

const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['video'];

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
