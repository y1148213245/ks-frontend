/**
 * Created by song on 2018/2/5.
 * 华育活动
 */

export default {
  name: "activity",
  swiper: {
    swiper_07: {
      url: '../data/swiper_07_data.json',
      height: "480px",
      interval: 5000
    }
  },
  list_pic: {
    list_pic_29: {
      'test': {
        comTitle: {
          isShow: true,
          name: "资讯"
        },
        toMoreBtn: {
          isShow: true,
          iconClass: "el-icon-back",
          name: "更多"
        },
        display: { // vue template 固定显示内容

        },
        getResourceLists: {
          url: "../data/pic_list_29_data.json",
          params: {
            conditions: [{
              pub_col_id: '245'
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
          maxNum: 1, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
          showItem: ['img', 'title', 'time'], // 控制显示项 ！！！只需要控制复杂项的显示 
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （ title 标题、 price 价格、 time 时间、 img 图片 都属于复杂项，需要填写name的值）
            field: 'picBig', // 取什么字段
            display: '', // 固定显示内容是什么
          }, {
            name: 'title',
            field: 'resName',
            display: '',
          }, {
            name: 'time',
            field: 'pubTime',
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
    },
    list_pic_28: {
      'test': {
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
                pub_col_id: '245'
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
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
          /* uncomplicatedItem: ["information_SYS_CREATED", "pub_picMiddle", "information_a_attr"],// 单纯显示字段值的简单项 */
          complicatedItem: [{ // 需要自定义标签、加过滤器或有固定显示内容的复杂项
            tag: 'img',
            name: 'img',
            field: 'pub_picBig',
            filter: '',
            label: '',
          }, {
            tag: '',
            name: 'title',
            field: 'pub_resource_name',
            filter: '',
            label: '',
          }],
          display: { // vue template 固定显示内容
          },
        }
      }
    }
  }
};
