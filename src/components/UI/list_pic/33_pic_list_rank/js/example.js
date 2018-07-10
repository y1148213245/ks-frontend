/*  资讯排行组件 Created by song 2018/05/17 */
// import component from "../resourceRank.vue";

const name = "ui_list_pic_33";  // 组件标签名

const title = "资讯排行组件";  // 组件title

const description = `
   资讯排行组件，通过 hasHoverEvent 变量控制有没有鼠标移入效果，如果配置为 true。
   鼠标未移入时显示什么项和鼠标移入后显示什么项都通过complicatedItem配置，区别在于 hoverEvent 取值不同。前者配置成“false”, 后者“true”。
`;  // 组件描述信息

const dev = {
  list_pic: {
    list_pic_33: {
      'modulename': {
        comTitle: {
          isShow: true,
          name: "销售排行榜"
        },
        toMoreBtn: {
          isShow: true, // 是否显示更多按钮
          iconClass: "", // 更多按钮的图标
          name: "更多>>",
          method: 'toMore', // 方法名 要在下面配置
        },
        getSubTitle: { //获取栏目副标题
          url: "spc/cms/col/getColumnByIdForSite",
          params: {
            colId: '131'
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "columnAdapter", // 类型字段
        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "../data/ui_list_pic_31_data.json",
          params: {
            conditions: [{
                pub_col_id: '131'
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
          maxNum: 10, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "bookAdapter", // 类型字段
          hasHoverEvent: false,  //是否有鼠标移入事件
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
            field: 'picBig', // 取什么字段
            display: '', // 固定显示内容是什么
            method: 'toDetail', // 方法名 要在下面配置
            hoverEvent: "true", // 是否有鼠标移上事件
          }, {
            name: 'button',
            field: 'resName',
            display: '',
            method: 'toDetail',
            hoverEvent: "true",
          }, {
            name: 'button',
            field: 'sysAuthors',
            display: '',
            method: '',
            hoverEvent: "true",
          }, {
            name: 'price', // 现价
            field: 'ebPrice',
            display: '',
            method: '',
            hoverEvent: "true",
          }, {
            name: 'price', // 原价
            field: 'memberPrice',
            display: '',
            method: '',
            hoverEvent: "true",
          }, { // 没有鼠标移入事件集合项
            name: 'button',
            field: 'resName',
            display: '',
            method: 'toDetail',
            hoverEvent: "false",
          }, {
            name: 'price', // 现价
            field: 'ebPrice',
            display: '',
            method: '',
            hoverEvent: "false",
          }, {
            name: 'price', // 原价
            field: 'memberPrice',
            display: '',
            method: '',
            hoverEvent: "false",
          }],
        },
        toDetail: { // 去资讯详情页面
          url: "../pages/bookdetail.html",
          dataKeys: {
            pubId: "id"
          },
          fixedKeys: {}
        },
        toMore: { // 去更多（资讯列表）页面
          url: "../pages/booklist.html",
          dataKeys: {
            colId: "id"
          },
          fixedKeys: {}
        },
        infoImgWidth: 120, // 资讯图片的宽 要和图片外层容器 .ui_list_pic_31_resourcelists_li_imgcontainter 宽一样
        infoImgHeight: 140, // 资讯图片的高 要和图片外层容器 .ui_list_pic_31_resourcelists_li_imgcontainter 高一样
        staticText: {
          noData: "暂无数据",
          noImg: "暂无图片"
        }
      },

    }
  }
}

const prod = {
  list_pic: {
    list_pic_33: {
      'modulename': {
        comTitle: {
          isShow: true,
          name: "销售排行榜"
        },
        toMoreBtn: {
          isShow: true, // 是否显示更多按钮
          iconClass: "", // 更多按钮的图标
          name: "更多>>",
          method: 'toMore', // 方法名 要在下面配置
        },
        getSubTitle: { //获取栏目副标题
          url: "spc/cms/col/getColumnByIdForSite",
          params: {
            colId: '131'
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "columnAdapter", // 类型字段
        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "spc/cms/publish/list.do",
          params: {
            conditions: [{
                pub_col_id: '131'
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
          maxNum: 10, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "bookAdapter", // 类型字段
          hasHoverEvent: false,  //是否有鼠标移入事件
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
            field: 'picBig', // 取什么字段
            display: '', // 固定显示内容是什么
            method: 'toDetail', // 方法名 要在下面配置
            hoverEvent: "true", // 是否有鼠标移上事件
          }, {
            name: 'button',
            field: 'resName',
            display: '',
            method: 'toDetail',
            hoverEvent: "true",
          }, {
            name: 'button',
            field: 'sysAuthors',
            display: '',
            method: '',
            hoverEvent: "true",
          }, {
            name: 'price', // 现价
            field: 'ebPrice',
            display: '',
            method: '',
            hoverEvent: "true",
          }, {
            name: 'price', // 原价
            field: 'memberPrice',
            display: '',
            method: '',
            hoverEvent: "true",
          }, { // 没有鼠标移入事件集合项
            name: 'button',
            field: 'resName',
            display: '',
            method: 'toDetail',
            hoverEvent: "false",
          }, {
            name: 'price', // 现价
            field: 'ebPrice',
            display: '',
            method: '',
            hoverEvent: "false",
          }, {
            name: 'price', // 原价
            field: 'memberPrice',
            display: '',
            method: '',
            hoverEvent: "false",
          }],
        },
        toDetail: { // 去资讯详情页面
          url: "../pages/bookdetail.html",
          dataKeys: {
            pubId: "pubId"
          },
          fixedKeys: {}
        },
        toMore: { // 去更多（资讯列表）页面
          url: "../pages/booklist.html",
          dataKeys: {
            colId: "id"
          },
          fixedKeys: {}
        },
        infoImgWidth: 120, // 资讯图片的宽 要和图片外层容器 .ui_list_pic_31_resourcelists_li_imgcontainter 宽一样
        infoImgHeight: 140, // 资讯图片的高 要和图片外层容器 .ui_list_pic_31_resourcelists_li_imgcontainter 高一样
        staticText: {
          noData: "暂无数据",
          noImg: "暂无图片"
        }
      },

    }
  }
}

const platform = 'PC';
const pageType = ['index', 'channel'];
const resourceType = ['book', 'information', 'radio', 'vedio'];


export {name, title, dev, prod, description, platform, pageType, resourceType};
