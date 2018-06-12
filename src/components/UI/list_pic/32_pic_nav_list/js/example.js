/*  资讯列表组件  Created by zong 2018/05/24  */
import component from "../information.vue";

const name = component.name; // 组件标签名

const title = "资讯栏目组件，把栏目当资讯来循环"; // 组件title

const description = `资讯组件,把栏目当资讯来循环  method设置为 toEvent 那么下面要添加toEvent对象哦（broadcastName 为广播名称） 则点击会发广播 不会跳转，并且有默认选中 为 on`; // 组件描述信息

const dev = {
  list_pic: {
    list_pic_32: {
      'modulename': {
        comTitle: {
          isShow: true,
          name: "资讯"
        },
        toMoreBtn: {
          isShow: true, // 是否显示更多按钮
          iconClass: "el-icon-back", // 更多按钮的图标
          name: "更多",
          method: 'toMore', // 方法名 要在下面配置
        },
        display: { // vue template 固定显示内容
        },
        getSubTitle: { //获取栏目副标题
          url: "spc/cms/col/getColumnByIdForSite",
          params: {
            colId: '250'
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "columnAdapter", // 类型字段
        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "/spc/cms/col/getColNextLevelNode",
          params: {
            colId: 245, //以此节点为根元素
          },
          startNum: 0, // 从第几条开始取
          maxNum: 1, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
          showItem: ['img', 'button'], // 控制显示项 ！！！只需要控制复杂项的显示
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
        toDetail: { // 去资讯详情页面
          url: "../pages/informationdetail.html",
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        toMore: { // 去更多（资讯列表）页面
          url: "../pages/informationlist.html",
            dataKeys: {
            colId: "id", // colId是从适配器里对应的
          },
          fixedKeys: {}
        },
        toEvent: { // 去更多（资讯列表）页面
          broadcastName: "showNavContent",
        },
        infoImgWidth: 200, // 资讯图片的宽 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 宽一样
        infoImgHeight: 160, // 资讯图片的高 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 高一样
        onEvent: { // 接收的事件名称
          eventName: 'showNavContent'
        },
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
    list_pic_32: {
      'modulename': {
        comTitle: {
          isShow: true,
          name: "资讯"
        },
        toMoreBtn: {
          isShow: true, // 是否显示更多按钮
          iconClass: "el-icon-back", // 更多按钮的图标
          name: "更多",
          method: 'toMore', // 方法名 要在下面配置
        },
        display: { // vue template 固定显示内容
        },
        getSubTitle: { //获取栏目副标题
          url: "spc/cms/col/getColumnByIdForSite",
          params: {
            colId: '250'
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "columnAdapter", // 类型字段
        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "/spc/cms/col/getColNextLevelNode",
          params: {
            colId: 245, //以此节点为根元素
          },
          startNum: 0, // 从第几条开始取
          maxNum: 1, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
          showItem: ['img', 'button'], // 控制显示项 ！！！只需要控制复杂项的显示
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
        toDetail: { // 去资讯详情页面
          url: "../pages/informationdetail.html",
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        toMore: { // 去更多（资讯列表）页面
          url: "../pages/informationlist.html",
          dataKeys: {
            colId: "id", // colId是从适配器里对应的
          },
          fixedKeys: {}
        },
        toEvent: { // 去更多（资讯列表）页面
          broadcastName: "showNavContent",
        },
        infoImgWidth: 200, // 资讯图片的宽 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 宽一样
        infoImgHeight: 160, // 资讯图片的高 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 高一样
        onEvent: { // 接收的事件名称
          eventName: 'showNavContent'
        },
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

const childComponents = ["ui_list_pic_32", "ui_pagination"];

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
