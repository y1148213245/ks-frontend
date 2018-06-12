import component from "../infoList.vue";

const name = component.name; // 组件标签名

const title = "资讯列表组件"; // 组件title

const description = `资讯列表组件（含二级导航）`; // 组件描述信息

const dev = {
  list_pic: {
    list_pic_30: {
      'modulename': {
        comTitle: {
          isShow: true,
          name: "华育资讯"
        },
        broadcastName: "showNavContent",
        display: { // vue template 固定显示内容

        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "../data/30_pic_list_infolist.json",
          params: {
            conditions: [{
              pub_col_id: '249',
              lk: 'in'
            },
            {
              pub_status: '1'
            }
            ],
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          startNum: 0, // 从第几条开始取
          maxNum: 6, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
          display: {
            time: "日期",
            title: "标题",
            author: "作者",
            createdTime: "创建时间",
            sort: "分类"
          },
          showItem: ['time', 'title', 'createdTime', 'sort', 'author'], // 控制显示项 ！！！只需要控制复杂项的显示 
          complicatedItem: [{
            name: 'time',
            field: 'lastModified',
            display: '',
          }, { // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'title', // 名称 用来区分是简单项还是复杂项 （ title 标题、 price 价格、 time 时间、 img 图片 都属于复杂项，需要填写name的值）
            field: 'resName', // 取什么字段
            display: '', // 固定显示内容是什么
          }, {
            name: 'createdTime',
            field: 'created',
            display: '',
          }, {
            name: 'sort',
            field: 'colName',
            display: '',
          }, {
            name: 'author',
            field: 'authors',
            display: '',
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
            colId: "colId", // colId是从适配器里对应的
          },
          fixedKeys: {}
        },
        crumb:[
          {
            title:'首页',
            href:'./index.html'
          },
          {
            title:'华育动态',
            href:'./newslist.html'
          }
        ]
      }
    }
  }
}

const prod = {
  list_pic: {
    list_pic_30: {
      'modulename': {
        comTitle: {
          isShow: true,
          name: "华育资讯"
        },
        broadcastName: "showNavContent",
        display: { // vue template 固定显示内容

        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "spc/cms/publish/list.do",
          params: {
            conditions: [{
              pub_col_id: '249',
              lk: 'in'
            },
            {
              pub_status: '1'
            }
            ],
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          startNum: 0, // 从第几条开始取
          maxNum: 6, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
          display: {
            time: "日期",
            title: "标题",
            author: "作者",
            createdTime: "创建时间",
            sort: "分类"
          },
          showItem: ['time', 'title', 'createdTime', 'sort', 'author'], // 控制显示项 ！！！只需要控制复杂项的显示 
          complicatedItem: [{
            name: 'time',
            field: 'lastModified',
            display: '日期',
          }, { // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'title', // 名称 用来区分是简单项还是复杂项 （ title 标题、 price 价格、 time 时间、 img 图片 都属于复杂项，需要填写name的值）
            field: 'resName', // 取什么字段
            display: '标题', // 固定显示内容是什么
          }, {
            name: 'createdTime',
            field: 'created',
            display: '创建时间',
          }, {
            name: 'sort',
            field: 'colName',
            display: '分类',
          }, {
            name: 'author',
            field: 'authors',
            display: '作者',
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
            colId: "colId", // colId是从适配器里对应的
          },
          fixedKeys: {}
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
