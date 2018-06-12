/**
 * Created by song on 2018/05/05.
 * 视频详情页面
 */


import component from "../videoDetail.vue";


const name = component.name;

const title = "视频详情组件";

const description = `视频详情组件`;

const dev = {
  work_videodetail: {
    work_videodetail_02: {
      "modulename": {
        getResourceDetail: {
          url: "../data/work_video_detail_01_data.json",
          params: {
            pubId: "",
            loginName: "",
            siteId: CONFIG.SITE_CONFIG.siteId,
            attachTypes: "video", // 附件类型
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "videoAdapter", // 类型字段
        },
        showItem: ["price", "author", "pressname", "pubdate", "time", "description", "videolists"], // 控制显示哪些项
        display: { // template 固定显示内容
          price: "价格：",
          author: "作者：",
          pressname: "出版社：",
          pubdate: "出版时间：",
          time: "视频时长：",
          description: "描述信息：",
          videolists: "视频列表："
        },
        sysAdapter: "sykAdapter", // 系统字段
        typeAdapter: "videoAdapter", // 类型字段
      }
    }
  }
}

const prod = {
  work_videodetail: {
    work_videodetail_02: {
      "modulename": {
        getResourceDetail: {
          url: "resource/detail.do",
          params: {
            pubId: "",
            loginName: "william",
            siteId: CONFIG.SITE_CONFIG.siteId,
            attachTypes: "video", // 附件类型
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "videoAdapter", // 类型字段
        },
        showItem: ["price", "author", "pressname", "pubdate", "time", "description", "videolists"], // 控制显示哪些项
        display: { // template 固定显示内容
          price: "价格：",
          author: "作者：",
          pressname: "出版社：",
          pubdate: "出版时间：",
          time: "视频时长：",
          description: "描述信息：",
          videolists: "视频列表："
        },
      }
    }
  }
}

const platform = 'PC';
const pageType = ['index', 'channel'];
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
