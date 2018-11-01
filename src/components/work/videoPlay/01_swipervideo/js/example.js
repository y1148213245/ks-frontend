/*
 * @Author: song 
 * @Date: 2018-07-03 10:55:04 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-09-18 17:07:31
 * 视频播放组件 列表是轮播图形式的
 */

import component from "../swipervideo.vue";

const name = component.name; // 组件标签名

const title = "视频播放组件"; // 组件title

const description = `视频播放组件，列表是轮播图形式的。
1、视频播放页是从视频组里面取数据，传参如下：
conditions: [{ // 配置成对象 组件里面传值要转成字符串
  pub_parent_id: ''
}]
2、从某个栏目下取视频数据，参数如下：
conditions: [{ // 配置成对象 组件里面传值要转成字符串
  pub_col_id: '1024'
}, { // 配置成对象 组件里面传值要转成字符串
  pub_site_id: ''
}]
* 新增
180918 新增jwplayer插件替换DPlayer插件，jwplayer依赖文件位于工程根目录下static/js/jwplayer文件夹内
       新增地址栏获取播放文件类型：参数名为mediaType，值例如：mp3,flv,rtmp,jpg,png,gif,swf,rbs,3gp,mp4,m4v
       新增配置获取播放文件类型：参数名为mediaType，值例如：mp3,flv,rtmp,jpg,png,gif,swf,rbs,3gp,mp4,m4v
       新增浏览器flash开关状态监测
`; // 组件描述信息

const dev = {
  work_videoplay: {
    "work_videoplay_01": {
      "modulename": {
        "getResourceLists": {
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": [   // 配置成对象 组件里面传值要转成字符串
              {
                "pub_parent_id": ""
              },
              {
                "pub_site_id": ""
              }
            ],
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "10",
            "searchText": ""
          },
          "sysAdapter": "sykAdapter",    // 系统字段
          "typeAdapter": "videoAdapter",    // 类型字段
          "typeAdapter1": "audioAdapter",  //类型字段1
          "typeAdapter2": "ziliaoku"
        },
        "complicatedItem": [
          {
            "name": "title",
            "field": "resName",
            "display": "",
            "method": ""   // 方法名 要在下面配置
          },
          {
            "name": "img",
            "field": "picBig",
            "display": "",
            "method": ""
          }
        ],
        "playVideoUrl": "dynamicFile/stream.do?recordID=",    // 视频播放地址
        "showVideoList": true,  // 是否显示下方视频轮播列表
        "queryParamsType": "url",  //  取参数的方式 'url'表示从地址栏里面取；
        "getDetailById": {   //获取当前播放视频的详情信息
          "url": "spc/cms/publish/detail.do",
          "params": {
            "pubId": "",
            "loginName": ""
          }
        },
        getResourceDetail: { // 
          url: "resource/detail.do",
          params: {
            pubId: "",
            loginName: "",
            attachTypes: "video"    //附件类型
          }
        },
      },
    }
  }
}

const prod = {
  work_videoplay: {
    "work_videoplay_01": {
      "modulename": {
        mediaType:'mp4',//播放的视频类型 flv，mp4
        "getResourceLists": {
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": [     // 配置成对象 组件里面传值要转成字符串
              {
                "pub_parent_id": ""
              },
              {
                "pub_site_id": ""
              }
            ],
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "10",
            "searchText": ""
          },
          "sysAdapter": "sykAdapter",    // 系统字段
          "typeAdapter": "videoAdapter",    // 类型字段
          "typeAdapter1": "audioAdapter",
          "typeAdapter2": "ziliaoku"
        },
        "complicatedItem": [
          {
            "name": "title",
            "field": "resName",
            "display": "",
            "method": ""    // 方法名 要在下面配置
          },
          {
            "name": "img",
            "field": "picBig",
            "display": "",
            "method": ""
          }
        ],
        "playVideoUrl": "dynamicFile/stream.do?recordID=",     // 视频播放地址
        "showVideoList": true,   // 是否显示下方视频轮播列表
        "queryParamsType": "url",   //  取参数的方式 'url'表示从地址栏里面取；
        "getDetailById": {   //获取当前播放视频的详情信息
          "url": "spc/cms/publish/detail.do",
          "params": {
            "pubId": "",
            "loginName": ""
          }
        },
        getResourceDetail: { // 
          url: "resource/detail.do",
          params: {
            pubId: "",
            loginName: "",
            attachTypes: "video"    //附件类型
          }
        },
        "staticText": {
          "noNextVideo": "没有下一个视频啦",
          "noNextAudio": "没有下一个音频啦"
        },
        event:{
          emitDetail_name:'resourceDetailLoaded'
        }
      },
    }
  }
}

const platform = 'PC';
const pageType = ['channel'];
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
