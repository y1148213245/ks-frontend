/*
 * @Author: song 
 * @Date: 2018-07-03 10:55:04 
 * @Last Modified by: song
 * @Last Modified time: 2018-07-04 09:46:46
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
`; // 组件描述信息

const dev = {
  work_videoplay: {
    "work_videoplay_01": {
      "videoplay": {
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
          "sysAdapter": "sykAdapter",  // 系统字段
          "typeAdapter": "videoAdapter"  // 类型字段
        },
        "complicatedItem": [
          {
            "name": "",
            "field": "resName",
            "display": "",
            "method": ""  // 方法名 要在下面配置
          }
        ],
        "playVideoUrl": "dynamicFile/stream.do?recordID=",   // 视频播放地址
        "showVideoList": true,  // 是否显示下方视频轮播列表
        "queryParamsType": "url",  //  取参数的方式 'url'表示从地址栏里面取； ''表示从配置里取
      },
    }
  }
}

const prod = {
  work_videoplay: {
    "work_videoplay_01": {
      "videoplay": {
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
          "sysAdapter": "sykAdapter",  // 系统字段
          "typeAdapter": "videoAdapter"  // 类型字段
        },
        "complicatedItem": [
          {
            "name": "",
            "field": "resName",
            "display": "",
            "method": ""  // 方法名 要在下面配置
          }
        ],
        "playVideoUrl": "dynamicFile/stream.do?recordID=",   // 视频播放地址
        "showVideoList": true,  // 是否显示下方视频轮播列表
        "queryParamsType": "url",  //  取参数的方式 'url'表示从地址栏里面取； ''表示从配置里取
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
