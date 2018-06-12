/**
 * Created by song on 2018/05/03.
 * 视频列表组件
 */


import component from "../videoListContent.vue";


const name = component.name;

const title = "视频列表组件";

const description = `视频列表组件
showItem: 控制显示哪些项 videoIcon(视频图标) resName(资源名称) salePrice(售价) time(时长) cata（分类） starnum（评分）
视频封面的宽高要和div.ui_video_01_cover这个元素的宽高一致
`;

const dev = {
  ui_video: {
    ui_video_01: {
      "modulename": {
        getResourceList: {
          url: "../data/ui_video_01_data.json",
          params: {
            conditions: "[{pub_col_id:'261'},{pub_status:'1'}]",
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "videoAdapter", // 类型字段
          videoWidth: 380, // 视频封面的宽高
          videoHeight: 240,// 视频封面的宽高
          coverSrc: "dynamicFile/coverStrem.do?recordID=", //视频封面图片链接
        },
        showItem: ["videoIcon", "resName", "salePrice", "time", "cata", "starnum"], // 控制显示哪些项 videoIcon(视频图标) resName(资源名称) salePrice(售价) time(时长) cata（分类） starnum（评分）
        display: { // template 固定显示内容
        },
        maxNum: 4,
        toDetail: {  // 去视频详情页面
          url: "../pages/videodetail.html",
          dataKeys: {
            pubId: "id",
            resourceId: "VIDEO-MEDIA_RESOURCEID"
          },
          fixedKeys: {}
        }
      }
    }
  }
}

const prod = {
  ui_video: {
    ui_video_01: {
      "modulename": {
        getResourceList: {
          url: "spc/cms/publish/list.do",
          queryLocation:{/* 取地址栏参数,赋值给params中的请求参数 */
            isQuery:false,
            keys:{
              "colId":"pub_col_id"/* key为location参数名,value为params.condition中的参数名 */
            }
          },
          params: {
            conditions: [{pub_col_id:'261'},{pub_status:'1'}],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "videoAdapter", // 类型字段
          videoWidth: 380, // 视频封面的宽高
          videoHeight: 240,// 视频封面的宽高
          coverSrc: "dynamicFile/coverStrem.do?recordID=", //视频封面图片链接
        },
        showItem: ["videoIcon", "resName", "salePrice", "time", "cata", "starnum"], // 控制显示哪些项 videoIcon(视频图标) resName(资源名称) salePrice(售价) time(时长) cata（分类） starnum（评分） paging(分页)
        display: { // template 固定显示内容
        },
        maxNum: 4,
        toDetail: {  // 去视频详情页面
          url: "../pages/videodetail.html",
          dataKeys: {
            pubId: "id",
          },
          fixedKeys: {}
        }
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
