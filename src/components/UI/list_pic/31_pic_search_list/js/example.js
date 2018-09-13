/*  资讯搜索组件  Created by zong 2018/05/24  */
import component from "../information.vue";

const name = component.name; // 组件标签名

const title = "资讯搜索组件,配置搜索类型"; // 组件title

const description = `资讯搜索组件，conditionsArr里面配置搜索类型，栏目字段，keys字段，跳转链接地址与参数`; // 组件描述信息

const dev = {
  list_pic: {
    list_pic_31: {
      'modulename': {
        display: { // vue template 固定显示内容
        },
        dataType:[
          {
            resource_type:'searchAll',
            name:'全部'
          },
          {
            resource_type:'information',
            name:'资讯'
          },
          {
            resource_type:'AUDIO-MEDIA',
            name:'音讯'
          },
        ],
        defaultDataType:'searchAll',
        conditionsArr: {
          'searchAll': {
            conditions:"[{pub_status:'1'},{siteId:'44'}]"
            ,sysAdapter:"sykAdapter"
            ,typeAdapter:"audioAdapter",
            toDetail: {   // 去资讯详情页面
              url: "../pages/informationdetail.html",
              dataKeys: {
                pubId: "id", // id是从适配器里对应的
              },
              fixedKeys: {}
            }
          },
          'information': {
            conditions:"[{pub_col_id:'250'},{pub_status:'1'},{pub_resource_type:'information'}]"
            ,sysAdapter:"sykAdapter"
            ,typeAdapter:"newsAdapter",
            toDetail: {   // 去资讯详情页面
              url: "../pages/informationdetail.html",
              dataKeys: {
                pubId: "id", // id是从适配器里对应的
              },
              fixedKeys: {}
            }
          },
          'AUDIO-MEDIA': {
            conditions:"[{pub_col_id:'117'},{pub_status:'1'},{pub_resource_type:'AUDIO-MEDIA'}]"
            ,sysAdapter:"sykAdapter"
            ,typeAdapter:"audioAdapter",
            toDetail: {   // 去资讯详情页面
              url: "../pages/informationdetail.html",
              dataKeys: {
                pubId: "id", // id是从适配器里对应的
              },
              fixedKeys: {}
            }
          }
        },
        searchConFlag:"false",
        getResourceLists: {
          url: "spc/cms/publish/list.do",
          params: {
            conditions: "[{pub_col_id:'440'},{pub_status:'1'},{pub_resource_type:'information'}]",   //AUDIO-MEDIA
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          startNum: 0, // 从第几条开始取
          maxNum: 1, // 取到第几条
          // sysAdapter: "sykAdapter", // 系统字段
          // typeAdapter: "newsAdapter", // 类型字段  videoAdapter
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
    list_pic_31: {
      'modulename': {
        display: { // vue template 固定显示内容
        },
        dataType:[
          {
            resource_type:'searchAll',
            name:'全部'
          },
          {
            resource_type:'information',
            name:'资讯'
          },
          {
            resource_type:'AUDIO-MEDIA',
            name:'音讯'
          },
        ],
        defaultDataType:'searchAll',
        conditionsArr: {
          'searchAll': {
            conditions:"[{pub_status:'1'},{siteId:'44'}]"
            ,sysAdapter:"sykAdapter"
            ,typeAdapter:"audioAdapter",
            toDetail: {   // 去资讯详情页面
              url: "../pages/informationdetail.html",
              dataKeys: {
                pubId: "id", // id是从适配器里对应的
              },
              fixedKeys: {}
            }
          },
          'information': {
            conditions:"[{pub_col_id:'250'},{pub_status:'1'},{pub_resource_type:'information'}]"
            ,sysAdapter:"sykAdapter"
            ,typeAdapter:"newsAdapter",
            toDetail: {   // 去资讯详情页面
              url: "../pages/informationdetail.html",
              dataKeys: {
                pubId: "id", // id是从适配器里对应的
              },
              fixedKeys: {}
            }
          },
          'AUDIO-MEDIA': {
            conditions:"[{pub_col_id:'117'},{pub_status:'1'},{pub_resource_type:'AUDIO-MEDIA'}]"
            ,sysAdapter:"sykAdapter"
            ,typeAdapter:"audioAdapter",
            toDetail: {   // 去资讯详情页面
              url: "../pages/informationdetail.html",
              dataKeys: {
                pubId: "id", // id是从适配器里对应的
              },
              fixedKeys: {}
            }
          }
        },
        searchConFlag:"false",
        getResourceLists: {
          url: "spc/cms/publish/list.do",
          params: {
            conditions: "[{pub_col_id:'440'},{pub_status:'1'},{pub_resource_type:'information'}]",   //AUDIO-MEDIA
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          startNum: 0, // 从第几条开始取
          maxNum: 1, // 取到第几条
          // sysAdapter: "sykAdapter", // 系统字段
          // typeAdapter: "newsAdapter", // 类型字段  videoAdapter
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

const childComponents = ["ui_list_pic_31", "ui_pagination"];

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
