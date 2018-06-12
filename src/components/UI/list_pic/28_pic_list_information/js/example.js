/*  资讯列表组件（含二级导航） Created by song 2018/05/07  */
import component from "../informationLists.vue";

const name = component.name; // 组件标签名

const title = "资讯列表组件"; // 组件title

const description = `资讯列表组件（含二级导航）`; // 组件描述信息

const dev = {
  list_pic: {
    list_pic_28: {
      'modulename': {
        comTitle: {
          isShow: true,
          name: "华育资讯"
        },
        toMoreBtn: {
          isShow: true,
          iconClass: "el-icon-back",
          name: "更多"
        },
        haveChildNavTag: true, // 是否需要需要显示子栏目切换标签
        display: { // vue template 固定显示内容

        },
        getColumnList: {
          url: "../data/pic_list_28_nav_data.json",
          params: {
            colId: "245"
          }
        },
        getResourceLists: {
          url: "../data/pic_list_28_data.json",
          params: {
            conditions: [{
              pub_col_id: '245',
              op:'in'
            }, {
              pub_status: '1'
            }],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          startNum: 0, // 从第几条开始取
          maxNum: 6, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
          showItem: ['img', 'title'], // 控制显示项 ！！！只需要控制复杂项的显示 
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （ title 标题、 price 价格、 time 时间、 img 图片 都属于复杂项，需要填写name的值）
            field: 'picBig', // 取什么字段
            display: '', // 固定显示内容是什么
          }, {
            name: 'title',
            field: 'resName',
            display: '',
          }],
        },
        infoImgWidth: 200, // 资讯图片的宽 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 宽一样
        infoImgHeight: 160, // 资讯图片的高 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 高一样
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
            colId: "colId", // colId是从适配器里对应的
          },
          fixedKeys: {}
        }
      }
    }
  }
}

const prod = {
  list_pic: {
    list_pic_28: {
      'modulename': {
        comTitle: {
          isShow: true,
          name: "华育资讯"
        },
        toMoreBtn: {
          isShow: true,
          iconClass: "el-icon-back",
          name: "更多"
        },
        haveChildNavTag: true, // 是否需要需要显示子栏目切换标签
        display: { // vue template 固定显示内容

        },
        getColumnList: { // 获取子栏目切换标签
          url: "spc/cms/col/getColNextLevelNode",
          params: {
            colId: "245"
          }
        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "spc/cms/publish/list.do",
          params: {
            conditions: [{
                pub_col_id: '249',
                op:'in'
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
          maxNum: 6, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
          showItem: ['img', 'title'], // 控制显示项 ！！！只需要控制复杂项的显示 
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （ title 标题、 price 价格、 time 时间、 img 图片 都属于复杂项，需要填写name的值）
            field: 'picBig', // 取什么字段
            display: '', // 固定显示内容是什么
          }, {
            name: 'title',
            field: 'resName',
            display: '',
          }, {
            name: '',
            field: 'pubTime',
            display: '出版时间：',
          }],
        },
        infoImgWidth: 200, // 资讯图片的宽 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 宽一样
        infoImgHeight: 160, // 资讯图片的高 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 高一样
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
            colId: "colId", // colId是从适配器里对应的
          },
          fixedKeys: {},
          isGetSubCol:false
        }
      }
    }
  }
}

const platform = 'PC';
const pageType = [];
const resourceType = [];

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
