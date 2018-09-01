/*  课程列表展示组件  Created by yy 2018/05/10  */
import component from "../resourceCenter.vue";

const name = component.name; // 组件标签名

const title = "资料中心列表展示组件"; // 组件title

const description = `资料中心列表展示组件`; // 组件描述信息

const dev = {
  list_pic: {
    "list_pic_37": {
      "colId": 510,
      "display": {
        "resourceTitle": "",
        "noData": "暂无数据",
        "book": "BOOK",
        "video": "VIDEO-MEDIA",
        "audio": "AUDIO-MEDIA",
        "download": "ZILIAOKU"
      },
      "tabList": [],
      "tHeadList": [
        "文件类型",
        "资料名称",
        "日期"
      ],
      "tBodyList": [],
      "sysAdapter": "sykAdapter",
      "typeAdapter": "systemAdapter",
      "transTitle": "transNavTitle",
      "transDefaultColId": "transDefaultColId",
      "toEbook": {
        "url": "",
        "params": {
          "bookId": "",
          "readType": 1,
          "bookName": "",
          "userName": "",
          "siteType": ""
        }
      },
      "toPlayAudio": {
        "url": "../pages/bookdetail.html",
        "dataKeys": {
          "id": "id",
          "resType": "pubResType"
        },
        "fixedKeys": {},
        params: {
          audioResId:"AUDIO-MEDIA_RESOURCEID"
        }
      },
      "toPlayVideo": {
        "url": "../pages/bookdetail.html",
        "dataKeys": {
          "id": "id",
          "resType": "pubResType"
        },
        "fixedKeys": {},
        params: {
          videoResId:"VIDEO-MEDIA_RESOURCEID"
        }
      },
      getZipAttachment: {
        url: "resource/detail.do",
        params: {
          loginName: "",
          pubId: "",
          siteId: '',
          attachTypes: "all", // 附件类型
        },
      },
      toDownload: {
        url: 'dynamicFile/file.do',  //去下载文件
        dataKeys: {
          recordID: "fileRecordID", // id是从适配器里对应的
        },
        fixedKeys: {}
      },
      "getList": {
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": "[{pub_col_id:''}]",
          "groupBy": "pub_resource_id",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "10",
          "searchText": ""
        }
      },
      "pageSizes": [
        10,
        30,
        50,
        100
      ]
    }
  }
}

const prod = {
  list_pic: {
    "list_pic_37": {
      "modulename": {
        "colId": 510,
        "display": {
          "resourceTitle": "",
          "noData": "暂无数据",
          "book": "BOOK",
          "video": "VIDEO-MEDIA",
          "audio": "AUDIO-MEDIA",
          "download": "ZILIAOKU",
          "bookShow": "电子书",
          "videShow": "视频",
          "audioShow": "音频",
          "downloadShow": "下载",
          "bookIconShow": "pdf",
          "videIconShow": "video",
          "audioIconShow": "audio",
          "downloadIconShow": "archive",
          "description": "描述："
        },
        "tabList": [],
        "tHeadList": [
          "文件类型",
          "资料名称",
          "日期"
        ],
        "tBodyList": [],
        "sysAdapter": "sykAdapter",
        "typeAdapter": "systemAdapter",
        "transTitle": "transNavTitle",
        "transDefaultColId": "transDefaultColId",
        "toEbook": {
          "url": "",
          "params": {
            "bookId": "",
            "readType": 1,
            "bookName": "",
            "userName": "",
            "siteType": ""
          }
        },
        "toPlayAudio": {
          "url": "../pages/bookdetail.html",
          "dataKeys": {
            "id": "id",
            "resType": "pubResType"
          },
          "fixedKeys": {},
          params: {
            audioResId:"AUDIO-MEDIA_RESOURCEID"
          }
        },
        "toPlayVideo": {
          "url": "../pages/bookdetail.html",
          "dataKeys": {
            "id": "id",
            "resType": "pubResType"
          },
          "fixedKeys": {},
          params: {
            videoResId:"VIDEO-MEDIA_RESOURCEID"
          }
        },
        getZipAttachment: {
          url: "resource/detail.do",
          params: {
            loginName: "",
            pubId: "",
            siteId: '',
            attachTypes: "all", // 附件类型
          },
        },
        toDownload: {
          url: 'dynamicFile/file.do',  //去下载文件
          dataKeys: {
            recordID: "fileRecordID", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        "getList": {
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": "[{pub_col_id:''}]",
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "10",
            "searchText": ""
          },
          isGetSubColsData:false //是否获取栏目子栏目下(递归)所有数据
        },
        "getAllCols":{
          url:'spc/cms/col/getAllColBySiteId.do',
          params:{
            chId:0
          }
        },
        "pageSizes": [
         10,
          30,
          50,
          100
        ]
      }
    }
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
