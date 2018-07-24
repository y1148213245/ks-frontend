
import component from "../content.vue";


const name = component.name;  // 组件标签名

const title = "内容组件";  // 组件title

const description = `展示文章内容，公司简介等`;  // 组件描述信息

const dev = {
  information: {
    information_02: {
      "modulename": {
        comTitle: {
          isShow: true,
          name: "资讯"
        },
        display: { // vue template 固定显示内容
        },
        getResourceLists: {
          url: "../data/information_content_list.json",
          params: {
            conditions: [{
              pub_col_id: '249',
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
        },
        getResource: { // 获取某一栏目下的数据列表
          url: "../data/information_content.json",
          params: {
            loginName: ""
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
          showItem: ["lastModifyDate", "createdDate", "content"], // 控制显示项 ！！！只需要控制复杂项的显示
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'title', // 名称 用来区分是简单项还是复杂项 （ title 标题、 price 价格、 time 时间、 img 图片 都属于复杂项，需要填写name的值）
            field: 'topic', // 取什么字段
            display: '', // 固定显示内容是什么
          }, {
            name: 'lastModifyDate',
            field: 'lastModified',
            display: '最后修改',
          }, {
            name: 'createdDate',
            field: 'created',
            display: '创建时间',
          }, {
            name: 'authors',
            field: 'authors',
            display: '作者',
          }, {
            name: 'sort',
            field: 'colName',
            display: '分类',
          }, {
            name: 'content',
            field: 'content',
            display: '',
          }],
        },
        broadcastName: "showNavContent",
        staticText : {
          noDate:"暂无日期"
        }
      }
    }
  }
}

const prod = {
  information: {
    information_02: {
      "modulename": {
        comTitle: {
          isShow: true,
          name: "资讯"
        },
        display: { // vue template 固定显示内容
        },
        getResourceLists: {
          url: "spc/cms/publish/list.do",
          params: {
            conditions: [{
              pub_col_id: '249',
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
        },
        getResource: { // 获取某一栏目下的数据列表
          url: "spc/cms/publish/detail.do",
          params: {
            loginName: ""
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
          showItem: ["lastModifyDate", "createdDate", "content"], // 控制显示项 ！！！只需要控制复杂项的显示
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'title', // 名称 用来区分是简单项还是复杂项 （ title 标题、 price 价格、 time 时间、 img 图片 都属于复杂项，需要填写name的值）
            field: 'topic', // 取什么字段
            display: '', // 固定显示内容是什么
          }, {
            name: 'lastModifyDate',
            field: 'lastModified',
            display: '最后修改',
          }, {
            name: 'createdDate',
            field: 'created',
            display: '创建时间',
          }, {
            name: 'authors',
            field: 'authors',
            display: '作者',
          }, {
            name: 'sort',
            field: 'colName',
            display: '分类',
          }, {
            name: 'content',
            field: 'content',
            display: '',
          }],
        },
        broadcastName: "showNavContent",
        staticText : {
          noDate:"暂无日期"
        }
      }
    }
  }
};

const platform = 'PC';
const pageType = ['others'];
const resourceType = ['others'];

export { name, title, dev, prod, description, platform, pageType, resourceType };
