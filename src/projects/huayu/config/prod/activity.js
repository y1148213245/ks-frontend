/**
 * Created by song on 2018/2/5.
 * 华育活动
 */

export default {
  name: "activity",
  ui_classification: {
    ui_classification_03: { // 图书分类导航
      "test": {
        url: 'spc/prodb/treeByCode.do',
        params: {
          code: "BOOK",
          layer: 2
        }
      }
    }
  },
  login: {
    work_login_04: {
      toLoginHref: '../pages/login.html',
      toPersonalCenterHref: '../pages/personalcenter.html',
      toExit: { /* 退出配置 */
        type: 'function',
        /* function：调方法退出  href：转跳退出*/
        href: '',
        func: {
          funcName: '',
          /* 方法名 */
          params: [],
          /* 参数 */
        }
      }
    }
  },
  work_bookdetail: {
    work_bookdetail_04: {
      'test': {
        getResourceDetail: { // 获取某一栏目下的数据列表
          url: "book/getBookDetail.do",
          params: {
            pubId: "",
            loginName: ""
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "bookAdapter", // 类型字段
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
            field: 'picBig', // 取什么字段
            display: '', // 固定显示内容是什么
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'button',
            field: 'resName',
            display: '',
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'price',
            field: 'memberPrice',
            display: '电子书价格：',
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'price',
            field: 'ebPrice',
            display: '',
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'price',
            field: 'price',
            display: '纸书定价：',
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'probation',
            field: '',
            display: '免费试读',
            method: 'toProbation', // 方法名 要在下面配置
            className: "fas fa-book",
          }, {
            name: 'addcart',
            field: '',
            display: '加入购物车',
            method: 'addCart', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'addebcart',
            field: '',
            display: '电子书加入购物车',
            method: 'addCart', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'like',
            field: '',
            display: '点赞',
            method: 'collectOrLike',
            className: "fas fa-thumbs-up",
          }, {
            name: 'collect',
            field: '',
            display: '收藏',
            method: 'collectOrLike',
            className: "fas fa-heart",
          }, {
            name: 'share',
            field: '',
            display: '',
            method: '',
            className: "",
          }],
        },
        toProbation: {
          url: CONFIG.READ_URL,
          dataKeys: {
            bookId: "resId", // key是地址请求参数名 value是从适配器里取对应的
            bookName: "resName"
          },
          fixedKeys: {
            siteType: 0,
            readType: 0, // 0 试读 1 全读
          }
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
        infoImgWidth: 320, // 资讯图片的宽 要和图片外层容器  宽一样
        infoImgHeight: 220, // 资讯图片的高 要和图片外层容器  高一样
        getPublicizeInfo: { // 获取图书相关信息(前言、图书简介、作者简介、目录、后记等)
          url: "spc/prodb/publicize.do",
          params: {
            doclibCode: "BOOK",
            docID: ""
          },
          isShowPublicize: true, // 是否显示相关信息
          showPublicize: ["前言", "内容简介", "目录"], // 数组过滤需要显示的内容 
        },
        getAudioAttachment: { // 获取有声书音频附件
          url: "resource/detail.do",
          params: {
            loginName: "",
            pubId: "",
            siteId: CONFIG.SITE_CONFIG.siteId,
            attachTypes: "audio", // 附件类型
          },
          isShowAudio: true, // 是否显示音频列表
        },
        addCart: { // 加入购物车
          url: "cart/addCart.do",
          params: {
            number: "",
            loginName: "",
            activityId: 0,
            pubId: "",
            siteId: CONFIG.SITE_CONFIG.siteId
          }
        },
        collectOrLike: { // 收藏 或 点赞 操作
          url: "collection/addCollect.do",
          params: {
            loginName: "",
            pubId: "",
            operateType: 0, // 0 收藏 1 点赞
            productId: "",
            siteId: CONFIG.SITE_CONFIG.siteId
          }
        }
      },
      'information': {
        getResourceDetail: { // 获取某一栏目下的数据列表
          url: "spc/cms/publish/detail.do",
          params: {
            pubId: "",
            loginName: ""
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
          complicatedItem: [{
            name: '',
            field: 'resName',
            display: '',
            method: '',
            className: "",
          }, {
            name: '',
            field: 'authors',
            display: '',
            method: '',
            className: "",
          }, {
            name: 'time',
            field: 'pubTime',
            display: '',
            method: '',
            className: "",
          }, {
            name: '',
            field: 'content',
            display: '',
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'like',
            field: '',
            display: '点赞',
            method: 'collectOrLike',
            className: "fas fa-thumbs-up",
          }, {
            name: 'collect',
            field: '',
            display: '收藏',
            method: 'collectOrLike',
            className: "fas fa-heart",
          }, {
            name: 'share',
            field: '',
            display: '',
            method: '',
            className: "",
          }],
        },
        infoImgWidth: 320, // 资讯图片的宽 要和图片外层容器  宽一样
        infoImgHeight: 220, // 资讯图片的高 要和图片外层容器  高一样
        getPublicizeInfo: { // 获取图书相关信息(前言、图书简介、作者简介、目录、后记等)
          url: "spc/prodb/publicize.do",
          params: {
            doclibCode: "BOOK",
            docID: ""
          },
          isShowPublicize: false, // 是否显示相关信息
          showPublicize: ["前言", "内容简介", "目录"], // 数组过滤需要显示的内容 
        },
        getAudioAttachment: { // 获取有声书音频附件
          url: "resource/detail.do",
          params: {
            loginName: "",
            pubId: "",
            siteId: CONFIG.SITE_CONFIG.siteId,
            attachTypes: "audio", // 附件类型
          },
          isShowAudio: false, // 是否显示音频列表
        },
        collectOrLike: { // 收藏 或 点赞 操作
          url: "collection/addCollect.do",
          params: {
            loginName: "",
            pubId: "",
            operateType: 0, // 0 收藏 1 点赞
            productId: "",
            siteId: CONFIG.SITE_CONFIG.siteId
          }
        }
      }
    }
  },
  advert: {
    ui_advert_01: {
      "activity": {
        getList: {
          url: 'spc/cms/publish/list.do',
          params: {
            conditions: "[{pub_col_id:'263'}]",
            orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc', // 默认orderBy
            pageNo: "1",
            pageSize: "15",
            searchText: null
          },
          keys: {
            pic: 'pub_picBig',
            sourceLink: 'information_a_sourceUrl'
          }
        }
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
      }]
    }
  },
  navigation: {
    navigation_03: {
      url: `spc/cms/col/getColNextLevelNode`,
      targetType: '_blank',
      params: {
        colId: '264', // 栏目ID
      }
    },
    navigation_05: {
      "test": {
        colId: 252, //以此节点为根元素
        comTitle: {
          isShow: true,
          name: "华育动态新闻"
        },
        showChildren: false, //如果有子导航，点击父导航是否展开  true展开，false发广播
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
        // showColumnArray: [], // 过滤显示的栏目 （并不是所有的栏目都应该显示）
      }
    },
    navigation_03: {
      url: `spc/cms/col/getColNextLevelNode`,
      targetType: '_blank',
      params: {
        colId: '264', // 栏目ID
      }
    }
  },
  swiper: {
    pic_01: {
      height: "480px",
      interval: 5000,
      url: 'spc/cms/publish/list.do',
      params: {
        conditions: "[{'pub_col_id':'279'}]",
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        pageNo: "1",
        pageSize: "15",
        searchText: null
      },
      sysAdapter: "sykAdapter", // 系统字段
      typeAdapter: "newsAdapter", // 类型字段
      showItem: ['button'], // 控制显示项 ！！！只需要控制复杂项的显示 
      complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
        name: 'button', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
        field: 'resName', // 取什么字段
        display: '', // 固定显示内容是什么
        method: 'toDetail', // 方法名 要在下面配置
      }],
      toDetail: { // 去资讯详情页面
        url: "../pages/informationdetail.html",
        dataKeys: {
          pubId: "id", // id是从适配器里对应的
        },
        fixedKeys: {}
      }
    },
    swiper_08: {
      "test": {
        display: { // vue template 固定显示内容
        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "spc/cms/publish/list.do",
          params: {
            conditions: "[{pub_col_id: 282}]",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          },
          startNum: 0, // 从第几条开始取
          maxNum: 4, // 取的条数
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "newsAdapter", // 类型字段
        },
        imgMaxWidth: 300, //图片最大宽度
        imgMaxHeight: 100, //图片最大高度
        toDetail: { // 去广告详情页面
          url: "",
          dataKeys: {
            pubId: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        toMore: { // 去更多页面
          url: "",
          dataKeys: {
            colId: "colId", // colId是从适配器里对应的
          },
          fixedKeys: {}
        }
      }
    },
    swiper_07: {
      getListData: {
        url: 'spc/cms/publish/list.do',
        params: {
          conditions: "[{pub_col_id:'263'}]", // 华育活动轮播图id=253
          orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc', // 默认orderBy
          pageNo: "1",
          pageSize: "15",
          searchText: null
        },
        keys: { // 接口字段兼容
          bigPicture: 'pub_picBig',
          pubId: 'id',
          sourceUrl: 'information_a_sourceUrl'
        }
      },
      getRelatedData: {
        url: 'spc/cms/publish/relatedZX.do',
        params: {
          pubId: '',
        },
        toDetailurl: '../pages/informationdetail.html?pubId=',
      },
      height: "360px",
      interval: 5000,
      linkType: 'source', // （默认链接到相关稿件）： 'source' 链接到数据中的字段地址
    }
  },
  list_pic: {
    list_pic_28: {
      'test': {
        comTitle: {
          isShow: true,
          name: "华育资讯"
        },
        toMoreBtn: {
          isShow: true,
          iconClass: "el-icon-back",
          name: "更多"
        },
        haveChildNavTag: false, // 是否需要需要显示子栏目切换标签
        display: { // vue template 固定显示内容

        },
        getColumnList: { // 获取子栏目切换标签
          url: "spc/cms/col/getColNextLevelNode",
          params: {
            colId: "249"
          }
        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "spc/cms/publish/list.do",
          params: {
            conditions: [{
                pub_col_id: '249',
                op: 'in'
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
          fixedKeys: {}
        }
      }
    },
    list_pic_29: {
      'test': {
        comTitle: {
          isShow: true,
          name: ""
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
            colId: '249'
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "columnAdapter", // 类型字段
        },
        getResourceLists: { // 获取某一栏目下的数据列表
          url: "spc/cms/publish/list.do",
          params: {
            conditions: [{
                pub_col_id: '249'
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
        infoImgWidth: 200, // 资讯图片的宽 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 宽一样
        infoImgHeight: 160, // 资讯图片的高 要和图片外层容器 .ui_list_pic_28_resourcelists_li_imgcontainter 高一样
        /* onEvent: {
          eventName: 'showNavContent'
        }, */
        pagination: {
          showPagination: true, // 是否显示分页
          pagesize: [10, 30, 50, 100],
        }
      }
    },
    list_pic_30: {
      'test': {
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
                op: 'in'
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
    },
    ui_list_pic_22: {
      url: `spc/cms/col/getColNextLevelNode`,
      params: {
        colId: '248'
      },
      activityListUrl: "./activitylist.html",
      showActivityTypeStr: 'ACTIVITY',
      keys: {
        small_pic: "small_pic",
        id: "id",
        name: "name",
        contentCode: 'contentCode'
      },
      getActivityList: {
        url: 'spc/cms/publish/list.do',
        params: {
          conditions: [{
            "pub_col_id": "253"
          }],
          orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc', // 默认orderBy
          pageNo: "1",
          pageSize: "3",
          searchText: null
        },
        detailHref: "./activityrace.html",
        keys: {
          pub_picMiddle: "pub_picMiddle",
          id: "id",
          PORTAL_ACTIVITY_SYS_TOPIC: "PORTAL_ACTIVITY_SYS_TOPIC",
          PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW: "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
          PORTAL_ACTIVITY_END_TIMESTAMPNEW: "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
          reviewDate: 'PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW'
        }
      }
    },
  },

};
