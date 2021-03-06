/*  通用资源列表组件  Created by song 2018/05/10.  */
import component from "../information.vue";

const name = component.name; // 组件标签名

const title = "通用资源列表组件"; // 组件title

const description = `通用资源列表组件，可以用于各种展示资源类型，如图书、资讯、视频、音频等等。通过栏目id取某个栏目下的数据列表，并配置展示相关信息。
该组件渲染方式有三种（优先级从高到低）：接收广播事件 》 地址栏取参数 》 配置。
接收广播的配置形式：
onEvent: {  // 接收的事件对象
  eventName: 'showNavContent', // 事件名称，该名称要与发广播的组件配置成一样的名字
},
组件的标题、副标题、更多按钮、从第几条数据开始取、取到第几条数据结束、列表显示哪些信息、是否显示分页子组件、分页方式等等都是可以配置显示隐藏的。
`; // 组件描述信息

const dev = {
  list_pic: {
    list_pic_29: {
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
        getSubTitle: { //获取栏目副标题
          url: "spc/cms/col/getColumnByIdForSite",
          params: {
            colId: '250'
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "columnAdapter", // 类型字段
        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "../data/pic_list_29_data.json",
          params: {
            conditions: [{
                pub_col_id: '250'
              },
              {
                pub_status: '1'
              }
            ],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          startNum: 0, // 从第几条开始取
          maxNum: 1, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
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
    list_pic_29: {
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
        getSubTitle: { //获取栏目副标题
          url: "spc/cms/col/getColumnByIdForSite",
          params: {
            colId: '250'
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "columnAdapter", // 类型字段
        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "spc/cms/publish/list.do",
          params: {
            conditions: [{
                pub_col_id: '250'
              },
              {
                pub_status: '1'
              }
            ],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          startNum: 0, // 从第几条开始取
          maxNum: 1, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
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
const pageType = ['index', 'channel'];
const resourceType = ['book', 'information', 'radio', 'vedio'];

const childComponents = ["ui_list_pic_29", "ui_pagination_01"];  // 包含分页子组件

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
