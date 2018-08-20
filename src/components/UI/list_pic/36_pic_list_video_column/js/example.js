/*  课程列表展示组件  Created by yy 2018/05/10  */
import component from "../videoColumn.vue";

const name = component.name; // 组件标签名

const title = "课程列表展示组件"; // 组件title

const description = `课程列表展示组件`; // 组件描述信息

const dev = {
  list_pic: {
    list_pic_36: {
      'modulename': {
        showTest: false,  //是否有测试卷功能，默认没有
        display: {
          courseContain: '课程包含内容：',
          courseName: '课程名称',
          symbol: '、',
          play: "播放",
          test: "测试卷",
          book: "BOOK",
          video: "VIDEO-MEDIA",
          audio: "AUDIO-MEDIA",
          noData: "暂无数据"
        },
        url: "spc/cms/publish/list.do",
        params: {
          conditions: [
            {
              "pub_parent_id": ""
            },
            {
              "pub_site_id": ""
            }
          ],
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "10",
          searchText: "",
        },
        sysAdapter: "sykAdapter", // 系统字段
        typeAdapter: "videoAdapter", // 类型字段
        toEbook: {
          url: "",
          params: {
            bookId: "",
            readType: 1,
            bookName: "",
            userName: "",
            siteType: ""
          }
        },
        toPlayAudio: {
          url: "../pages/videoplay.html",
          dataKeys: {
            id: "id",
            parentId: "parentId", // id是从适配器里对应的
            resType: "pubResType"
          },
          fixedKeys: {},
          params: {
            audioResId:"AUDIO-MEDIA_RESOURCEID"
          }
        },
        toPlayVideo: { // 去视频详情页面
          url: "../pages/videoplay.html",
          dataKeys: {
            parentId: "parentId", // id是从适配器里对应的
            id: "id", // id是从适配器里对应的
            resType: "pubResType"
          },
          fixedKeys: {},
          params: {
            videoResId:"VIDEO-MEDIA_RESOURCEID"
          }
        },
        maxNum: 10,
        pageSizes:[10,30,50,100],

      },
    },
  }
}

const prod = {
  list_pic: {
    list_pic_36: {
      'modulename': {
        showTest: false,  //是否有测试卷功能，默认没有
        display: {
          courseContain: '课程包含内容：',
          courseName: '课程名称',
          symbol: '、',
          play: "播放",
          test: "测试卷",
          book: "BOOK",
          video: "VIDEO-MEDIA",
          audio: "AUDIO-MEDIA",
          noData: "暂无数据"
        },
        url: "spc/cms/publish/list.do",
        params: {
          conditions: [
            {
              "pub_parent_id": ""
            },
            {
              "pub_site_id": ""
            }
          ],
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "10",
          searchText: "",
        },
        sysAdapter: "sykAdapter", // 系统字段
        typeAdapter: "videoAdapter", // 类型字段
        toEbook: {
          url: "",
          params: {
            bookId: "",
            readType: 1,
            bookName: "",
            userName: "",
            siteType: ""
          }
        },
        toPlayAudio: {
          url: "../pages/videoplay.html",
          dataKeys: {
            id: "id",
            parentId: "parentId", // id是从适配器里对应的
            resType: "pubResType"
          },
          fixedKeys: {},
          params: {
            audioResId:"AUDIO-MEDIA_RESOURCEID"
          }
        },
        toPlayVideo: { // 去视频详情页面
          url: "../pages/videoplay.html",
          dataKeys: {
            parentId: "parentId", // id是从适配器里对应的
            id: "id", // id是从适配器里对应的
            resType: "pubResType"
          },
          fixedKeys: {},
          params: {
            videoResId:"VIDEO-MEDIA_RESOURCEID"
          }
        },
        maxNum: 10,
        pageSizes:[10,30,50,100],

      },
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
