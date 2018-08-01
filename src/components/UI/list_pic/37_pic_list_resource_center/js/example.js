/*  课程列表展示组件  Created by yy 2018/05/10  */
import component from "../resourceCenter.vue";

const name = component.name; // 组件标签名

const title = "资料中心列表展示组件"; // 组件title

const description = `资料中心列表展示组件`; // 组件描述信息

const dev = {
  list_pic: {
    list_pic_37: {
      'resourceCenter': {
        colId: 510,  //资料中心栏目id
        display: {
          resourceTitle: '',
          noData: '暂无数据',
          book: 'BOOK',
          video: 'VIDEO-MEDIA',
          audio: 'AUDIO-MEDIA',
          download: 'ZILIAOKU',   //TODO:去下载字段待确定
        },
        tabList: [],  //存放tab的数组 通过栏目树传进来的参数格式如下
        tHeadList: [  //存放table头部信息的数组
          '文件类型',
          '资料名称',
          '日期'
        ],
        tBodyList: [],
        sysAdapter: 'sykAdapter',
        typeAdapter: 'systemAdapter',
        transTitle: "transNavTitle",
        toEbook: {
          url: '',  //去电子书阅读器
          params:{
            bookId:'',
            readType:1,
            bookName:'',
            userName:'',
            siteType:''
          }
        },
        toPlayAudio: {
          url: '../pages/bookdetail.html',  //去播放音频的地址
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        toPlayVideo: {
          url: '../pages/bookdetail.html',  //去播放视频的地址
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
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
        getList: {
          url: 'spc/cms/publish/list.do',
          params: {
            conditions: "[{pub_col_id:''}]",
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "10",
            searchText: "",
          }
        },
        pageSizes:[10,30,50,100]
      }
    }
  }
}

const prod = {
  list_pic: {
    list_pic_37: {
      'resourceCenter': {
        colId: 510,  //资料中心栏目id
        display: {
          resourceTitle: '',
          noData: '暂无数据',
          book: 'BOOK',
          video: 'VIDEO-MEDIA',
          audio: 'AUDIO-MEDIA',
          download: 'ZILIAOKU',   //TODO:去下载字段待确定
        },
        tabList: [],  //存放tab的数组 通过栏目树传进来的参数格式如下
        tHeadList: [  //存放table头部信息的数组
          '文件类型',
          '资料名称',
          '日期'
        ],
        tBodyList: [],
        sysAdapter: 'sykAdapter',
        typeAdapter: 'systemAdapter',
        transTitle: "transNavTitle",
        toEbook: {
          url: '',  //去电子书阅读器
          params:{
            bookId:'',
            readType:1,
            bookName:'',
            userName:'',
            siteType:''
          }
        },
        toPlayAudio: {
          url: '../pages/bookdetail.html',  //去播放音频的地址
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        toPlayVideo: {
          url: '../pages/bookdetail.html',  //去播放视频的地址
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
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
        getList: {
          url: 'spc/cms/publish/list.do',
          params: {
            conditions: "[{pub_col_id:''}]",
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "10",
            searchText: "",
          }
        },
        pageSizes:[10,30,50,100]
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
