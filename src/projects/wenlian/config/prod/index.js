/**
 * Created by admin on 2017/12/28.
 */
export default {
  name: "index",
  work_videoplay: {
    work_videoplay_01: {
      "videoplay": {
        getResourceLists: {
          url: 'spc/cms/publish/list.do',
          params: {
            /*conditions:  [{ // 配置成对象 组件里面传值要转成字符串
              pub_col_id: '1024'
            }, { // 配置成对象 组件里面传值要转成字符串
              pub_site_id: ''
            }], */
            conditions: [{ // 配置成对象 组件里面传值要转成字符串
              pub_parent_id: ''
            }],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "10",
            searchText: "",
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "videoAdapter", // 类型字段
        },
        complicatedItem: [{
          name: '',
          field: 'resName',
          display: '',
          method: '', // 方法名 要在下面配置
        }],
        playVideoUrl: 'dynamicFile/stream.do?recordID=',
        showVideoList: true, // 是否显示下方视频轮播列表
        queryParamsType: 'url', //  取参数的方式 'url'表示从地址栏里面取； ''表示从配置里取
      }
    }
  },
  search: {
    search_01: {
      searchUrl: "../pages/search.html", // 搜索链接
      advSearchUrl: "../pages/searchadvanced.html", // 高级检索链接
      searchConditionArr: [{
        name: "全部",
        tag: "all"
      }, {
        name: "图书",
        tag: "BOOK"
      }, {
        name: "资讯",
        tag: "information"
      }, {
        name: "视频",
        tag: "VIDEO-MEDIA"
      }],
      staticText: {
        search: "搜索",
        inputKeyWord: "输入关键字",
        advancedSearch: "高级搜索"
      }
    }
  },
  crumbs: {
    work_crumbs_02: {
      'crumbs': {
        getCols: {
          url: 'spc/cms/col/getAllColBySiteId',
          type: 'get',
          /* 请求方式 */
          params: { /* 查询参数key:参数名  value:参数值.*/
            // colId: '39', // 栏目ID
            siteId: '',
            chId: '0'
          },
          getGlobalParams: { /* 获取全局参数 key:全局对象属性,请求参数名*/
            siteId: 'siteId'
          },
          keys: {
            id: "id",
            parentId: 'parentId',
            name: 'name',
            url: 'url'
          }
        },
        startCol: '0',
        event: {
          listenDetail: {
            name: 'listenInfoDetail',
            keys: {
              colId: 'pub_col_id',
              colName: 'pub_col_name'
            }
          }
        }
      }
    }
  },
  navigation: {
    navigation_04: {
      "nav": {
        colId: 0,
        showTitle: {
          title: "导航标题",
          isShow: true
        },
        getNavLists: {
          url: "spc/cms/col/getAllColBySiteId.do",
          params: {
            siteId: CONFIG.SITE_CONFIG.siteId,
            chId: CONFIG.SITE_CONFIG.chId
          },
          keys: {
            navName: "name",
          }
        },
        showItem: ["navName"],
        display: {},
        broadcastName: "showNavContent",
      }
    },
    navigation_05: {
      "navigation": {
        colId: 507, //以此节点为根元素
        comTitle: {
          isShow: false,
          name: "华育动态新闻"
        },
        showChildren: true, //如果有子导航，点击父导航是否展开  true展开，false发广播
        broadcastName: "showNavContent",
        display: { // vue template 固定显示内容
        },
        getNavLists: { // 获取某一栏目下的数据列表
          url: "spc/cms/col/getAllColBySiteId.do",
          params: {
            siteId: CONFIG.SITE_CONFIG.siteId,
            chId: CONFIG.SITE_CONFIG.chId
          },
          keys: {
            parentId: "parentId",
            id: "id",
            name: "name"
          }
        },
        broadcastEventName: { // 与面包屑导航通讯
          transCol: "listenInfoDetail",
          keys: {
            colId: 'pub_col_id'
          }
        }
        // showColumnArray: [], // 过滤显示的栏目 （并不是所有的栏目都应该显示）
      }
    }
  },
  list_pic: {
    list_pic_33: {
      'rank': {
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
          hasHoverEvent: false, //是否有鼠标移入事件
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
      }
    },
    list_pic_27: {
      "freebooks": {
        url: "spc/cms/publish/list.do",
        params: {
          conditions: "[{pub_col_id:'130'},{pub_status:'1'}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "15",
          searchText: "",
        },
        comTitle: {
          isShow: true,
          name: "免费专区"
        },
        showItem: ['bookName', 'starNum', 'bookAuthor', 'pressName', 'pubDate', 'price', 'share', 'buy', 'review'], // 控制显示哪些项 bookName(书名) starNum(评分) bookAuthor(作者) pressName(出版社) pubDate(出版日期) price(价格) share(分享) buy(购买) review(查看)
        display: { // template 固定显示内容
          bookAuthor: '作者：',
          pressName: '出版社：',
          pubDate: '出版时间：',
          share: "分享",
          buy: "购买",
          review: "查看",
          more: "MORE+"
        },
        keys: { // 字段兼容
          bookName: "pub_resource_name",
          starNum: "pub_star_num",
          memberPrice: "prod_member_price",
          ebPrice: "BOOK_EB_PRICE",
          bookAuthor: "BOOK_SYS_AUTHORS",
          pubId: "id",
          contentType: "pub_content_type",
          colId: "pub_col_id",
          colName: "pub_col_name",
          bookPic: "pub_picBig",
          pressName: "BOOK_PRESS_NAME",
          pubDate: "BOOK_PUBDATE"
        },
        detailHref: "./bookdetail.html", // 详情
        moreHref: "./bookList.html", // 更多
        maxNum: 4,
      }

    },
    list_pic_24: {
      url: "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      href: "./bookList.html?colId=",
      colId: 59, // 精品图书栏目id
    },
    picListBookShow: {
      url: "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      href: CONFIG.READ_URL,
      bookDetail: "../pages/bookdetail.html?pubId=",
      beginPicIndex: 2,
      finishPicIndex: 8,
      colId: 59
    },
    picListRefinedBook: {
      url: "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      baseURL: CONFIG.READ_URL,
      href: "../pages/bookList.html?colId=",
      bookDetail: "../pages/bookdetail.html?pubId=",
      colId: 59
    },
    /* picListBookShow: {
      url:  "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      href: "http://172.19.57.153/portal/reader",
      bookDetail: "./bookdetail.html?pubId=",
      beginPicIndex: 2,
      finishPicIndex: 8,
      colId: 59
    },
    picListRefinedBook: {
      url:  "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      baseURL: CONFIG.READ_URL,
      href: "./bookList.html?colId=",
      bookDetail: "./bookdetail.html?pubId=",
      colId: 59
    }, */
    list_pic_11: {
      url: '/spc/cms/publish/list.do',
      param: {
        conditions: "[{pub_col_id:'116'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      detailHref: './authordetail.html?pubId=',
      colId: 116,
    },
    list_pic_23: {
      userbook: {
        title: '购买该书的用户还买',
        url: "cart/getOtherBookList.do",
        params: {
          pubId: "",
          loginName: "",
        },
        detailHref: "../pages/bookdetail.html?pubId=",
        maxNum: 4, // 控制显示多少个
      },
      otherbook: {
        title: '该作者其他图书',
        url: "spc/cms/publish/list.do",
        params: {
          conditions: [{
              pub_resource_type: 'BOOK'
            },
            {
              pub_site_id: CONFIG.SITE_CONFIG.siteId
            },
          ],
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "15",
          searchText: ""
        },
        detailHref: "../pages/bookdetail.html?pubId=",
        maxNum: 4, // 控制显示多少个
      }
    }
  },
  swiper: {
    pic_01: {
      height: "480px",
      interval: 5000,
      url: 'spc/cms/publish/list.do',
      params: {
        conditions: "[{'pub_col_id':'225'}]",
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        pageNo: "1",
        pageSize: "15",
        searchText: null
      }
    },
    pic_noWords_04: {
      url: 'spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_col_id:'83'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "16",
        searchText: ""
      },
      infoDetailHref: "../pages/informationInfo.html?pubId=",
    },
    pic_advert_05: {
      url: 'spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_col_id:'214'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      infoUrlPrefix: "informationInfo.html?pubId="
    }
  }
}
