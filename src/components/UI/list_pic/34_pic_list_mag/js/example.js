/*  资讯列表组件  Created by song 2018/05/10  */
import component from "../magList.vue";

const name = component.name; // 组件标签名

const title = "刊种列表组件"; // 组件title

const description = `刊种列表组件，不用传参，呃，真的不用`; // 组件描述信息

const dev = {
  list_pic: {
    list_pic_34: {
      'modulename': {
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "../data/pic_list_34_data.json",
          params: {
          },
          startNum: 0, // 从第几条开始取
          maxNum: 1, // 取到第几条
          sysAdapter: "zykAdapter", // 资源库 系统字段
          typeAdapter: "magAdapter", // 类型字段
          // showItem: ['img', 'button'], // 控制显示项 ！！！只需要控制复杂项的显示
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
            field: 'picBig', // 取什么字段
            display: '', // 固定显示内容是什么
            method: 'toDetail', // 方法名 要在下面配置
          }, {
            name: 'button',
            field: 'resName',
            display: '',
            method: 'toDetail', // 方法名 要在下面配置
          }],
        },
        magNameListsConfig: { // 获取某一栏目下的数据列表
          url: "spc/cms/publish/list.do",
          params: {
            conditions: [
              {
                MAGAZINE_SYS_TOPIC: '测试刊物'
              }
            ],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "1",
            searchText: "",
          },
          startNum: 0, // 从第几条开始取
          maxNum: 1, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
          // showItem: ['img', 'button'], // 控制显示项 ！！！只需要控制复杂项的显示
          complicatedItem: [],
        },
        toDetail: { // 去详情页面
          url: "../pages/magInfo.html",
          dataKeys: {
            magName: "magName", // magName是从适配器里对应的
          },
          fixedKeys: {}
        },
        toMore: { // 去更多（列表）页面
          url: "../pages/magList.html",
          dataKeys: {
            // magName: "magName", // magName是从适配器里对应的
          },
          fixedKeys: {}
        },
        infoImgWidth: 200, // 资讯图片的宽 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 宽一样
        infoImgHeight: 160, // 资讯图片的高 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 高一样
        pagination: { // 分页信息
          showPagination: true, // 是否显示分页
          pagesize: [15, 30, 50, 100], // 如何分页
        }
      }
    }
  }
}

const prod = {
  list_pic: {
    list_pic_34: {
      'modulename': {
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "spc/prodb/getMagList.do",
          params: {
          },
          startNum: 0, // 从第几条开始取
          maxNum: 1, // 取到第几条
          sysAdapter: "zykAdapter", // 资源库 系统字段
          typeAdapter: "magAdapter", // 类型字段
          // showItem: ['img', 'button'], // 控制显示项 ！！！只需要控制复杂项的显示
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
            field: 'picBig', // 取什么字段
            display: '', // 固定显示内容是什么
            method: 'toDetail', // 方法名 要在下面配置
          }, {
            name: 'button',
            field: 'magName',
            display: '',
            method: 'toDetail', // 方法名 要在下面配置
          }, {
            name: 'button',
            field: 'magDesc',
            display: '',
            method: 'toDetail', // 方法名 要在下面配置
          }],
        },
        magNameListsConfig: { // 获取某一栏目下的数据列表
          url: "spc/cms/publish/list.do",
          params: {
            conditions: [
              {
                MAGAZINE_SYS_TOPIC: '测试刊物'
              }
            ],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "1",
            searchText: "",
          },
          startNum: 0, // 从第几条开始取
          maxNum: 1, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
          // showItem: ['img', 'button'], // 控制显示项 ！！！只需要控制复杂项的显示
          complicatedItem: [],
        },
        toDetail: { // 去详情页面
          url: "../pages/magInfo.html",
          dataKeys: {
            magName: "magName", // magName是从适配器里对应的
          },
          fixedKeys: {}
        },
        toMore: { // 去更多（列表）页面
          url: "../pages/magList.html",
          dataKeys: {
            // magName: "magName", // magName是从适配器里对应的
          },
          fixedKeys: {}
        },
        infoImgWidth: 200, // 资讯图片的宽 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 宽一样
        infoImgHeight: 160, // 资讯图片的高 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 高一样
        pagination: { // 分页信息
          showPagination: true, // 是否显示分页
          pagesize: [15, 30, 50, 100], // 如何分页
        }
      }
    }
  }
}

const platform = 'PC';
const pageType = [];
const resourceType = [];

const childComponents = ["ui_list_pic_34", "ui_pagination"];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType,
  childComponents
};
