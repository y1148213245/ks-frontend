/*  课程列表展示组件  Created by yy 2018/05/10  */
import component from "../videoColumn.vue";

const name = component.name; // 组件标签名

const title = "课程列表展示组件"; // 组件title

const description = `课程列表展示组件；
    需要展示图片附件时，后台上传的答案图片，必须要包含“答案”两个字，要不前台没法判断是展示“答案”图片还是“测试卷”图片；
`; // 组件描述信息

const dev = {
  list_pic: {
    list_pic_36: {
      'modulename': {
        showTest: false,  //是否有测试卷功能，默认没有
        needtobuy: false,   //需要判断是否购买课程，来展示课程列表，如果课程是免费的，则不需要配置该项，或者设置为false
        "freeCourseNum": 1,  //展示免费课程的数量
        getResourceDetail: { // 是否需要获取课程的详情信息，如果不需要则不必配置该项
          url: "resource/detail.do",
          params: {
            pubId: "",
            loginName: "",
            attachTypes: ""    //附件类型
          }
        },
        "ziliaozuAttachType": "lowqualitypdf",  //低精度PDF=>lowqualitypdf,  视频=>video
        getAttachPictureUrl: "dynamicFile/stream.do?recordID=",  //展示附件接口
        display: {
          courseContain: '课程包含内容：',
          courseName: '课程名称',
          symbol: '、',
          play: "播放",
          "read": "阅读",
          test: "测试卷",
          book: "BOOK",
          video: "VIDEO-MEDIA",
          audio: "AUDIO-MEDIA",
          ziliao: "ZILIAOKU",
          noData: "暂无数据",
          anwser: "答案",
          testWord: "测试"
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
        "toPlayZLKVideo": {
          "url": "../pages/videoplay.html",
          "dataKeys": {
            
            "id": "id",
            "resType": "pubResType"
          },
          "fixedKeys": {}
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
        needtobuy: false,   //需要判断是否购买课程，来展示课程列表，如果课程是免费的，则不需要配置该项，或者设置为false
        "freeCourseNum": 1,  //展示免费课程的数量，如果不配置，默认为1
        getResourceDetail: { // 是否需要获取课程的详情信息，如果不需要则不必配置该项
          url: "resource/detail.do",
          params: {
            pubId: "",
            loginName: "",
            attachTypes: ""    //附件类型
          }
        },
        ziliaozuAttachType: "lowqualitypdf",  //低精度PDF=>lowqualitypdf,  视频=>video
        getAttachPictureUrl: "dynamicFile/stream.do?recordID=",  //展示附件接口
        display: {
          courseContain: '课程包含内容：',
          courseName: '课程名称',
          symbol: '、',
          play: "播放",
          "read": "阅读",
          test: "测试卷",
          book: "BOOK",
          video: "VIDEO-MEDIA",
          audio: "AUDIO-MEDIA",
          ziliao: "ZILIAOKU",
          noData: "暂无数据",
          anwser: "答案",
          testWord: "测试"
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
        "toPlayZLKVideo": {
          "url": "../pages/videoplay.html",
          "dataKeys": {
            
            "id": "id",
            "resType": "pubResType"
          },
          "fixedKeys": {}
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
