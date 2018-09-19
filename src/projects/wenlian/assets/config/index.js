var CONFIG = {
  "BASE_URL": "http://172.19.57.71:8080/portal/api/",
  "READ_URL": "../../../reader/ebook/read.jsp",
  "GO_CONTRIBUTE_URL": "http://172.19.57.168:8989/wenlian/ssoWenlianLogin.do?",
  "PAGE_MANAGEMENT_URL": "../../../frontend-api/api/",
  "SITE_CONFIG": {
    "siteId": 29,
    "chId": 0
  },
  "READ_CONFIG": {
    "siteType": 0
  },
  "CRUMB_TYPE": [{
    "name": "author",
    "title": "作者详情"
  }, {
    "name": "editor",
    "title": "编辑详情"
  }, {
    "name": "aboutus",
    "title": "关于我们"
  }],
  "BOOK_LIST_TYPE": {
    "_2_COLS": [],
    "_3_COLS": [0, 362, 364]
  }
}
var $_$ = {
  "indexPage": {
    "authorMoreHref": "./authorlist.html"
  },
  "SITE_NAME": "site-331",
  "IS_DISABLE": false,
  "footer": {
    "navigation": {
      "navigation_03": {
        "url": "spc/cms/col/getColNextLevelNode",
        "params": {
          "colId": "379"
        },
        "targetType": "_blank",
        "getCols": {
          "url": "spc/cms/col/getAllColBySiteId",
          "type": "get",
          "params": {
            "siteId": "",
            "chId": "0"
          },
          "getGlobalParams": {
            "siteId": "siteId"
          },
          "keys": {
            "id": "id",
            "parentId": "parentId",
            "name": "name"
          }
        },
        "showType": {
          "parentId": "379",
          "showChildNav": [268]
        },
        "currentSelect": [{
          "id": "265",
          "htmls": ["index.html"]
        }, {
          "id": "266",
          "htmls": []
        }, {
          "id": "267",
          "htmls": []
        }, {
          "id": "268",
          "htmls": ["informationdetail.html", "informationlist.html"]
        }, {
          "id": "269",
          "htmls": []
        }, {
          "id": "270",
          "htmls": ["activity.html", "activityrace.html", "activitylist.html"]
        }]
      },
      "ui_navigation_04": {
        "totop": {
          "showItem": ["toTop"],
          "display": {
            "qq": "联系我们",
            "toTop": "返回顶部"
          },
          "toQQ": {
            "url": "http://wpa.qq.com/msgrd?v=3&uin=1148213245&site=qq&menu=yes"
          }
        },
        "modulename": {
          "showItem": ["QQ", "toTop"],
          "display": {
            "qq": "联系我们",
            "toTop": "返回顶部"
          },
          "toQQ": {
            "url": "http://wpa.qq.com/msgrd?v=3&uin=378365117&site=qq&menu=yes"
          }
        }
      }
    }
  },
  "header": {
    "navigation": {
      "navigation_02": {
        "toCartUrl": "../pages/shoppingcart.html",
        "tips": "我的购物车",
        "toLoginUrl": "../pages/login.html"
      },
      "navigation_03": {
        "url": "spc/cms/col/getColNextLevelNode",
        "params": {
          "colId": "257"
        }
      }
    },
    "login": {
      "work_login_04": {
        "toLoginHref": "../pages/login.html",
        "toPersonalCenterHref": "../pages/personalcenter.html",
        "toRegisterHref": "./register.html",
        "toExit": {
          "type": "href",
          "href": "../pages/login.html",
          "func": {
            "funcName": "",
            "params": []
          }
        },
        "staticText": {
          "loginSys": "会员登录",
          "welcomeBack": "欢迎回来！",
          "exit": "退出",
          "register": "注 册"
        }
      },
      "staticText": {
        "loginSys": "登录",
        "welcomeBack": "欢迎回来！",
        "exit": "退出"
      }
    },
    "search": {
      "search_01": {
        "searchUrl": "../pages/search.html",
        "advSearchUrl": "../pages/searchadvanced.html"
      }
    },
    "classification": {
      "classification_02": {
        "url": "spc/prodb/treeByCode.do",
        "params": {
          "code": "BOOK",
          "layer": 2
        },
        "bookListUrl": "../pages/bookList.html"
      }
    }
  },
  "header325": {
    "navigation": {
      "navigation_03": {
        "url": "spc/cms/col/getColNextLevelNode",
        "params": {
          "colId": "370"
        },
        "targetType": "_self",
        "getCols": {
          "url": "spc/cms/col/getAllColBySiteId",
          "type": "get",
          "params": {
            "siteId": "",
            "chId": "0"
          },
          "getGlobalParams": {
            "siteId": "siteId"
          },
          "keys": {
            "id": "id",
            "parentId": "parentId",
            "name": "name"
          }
        },
        "showType": {
          "parentId": "370",
          "showChildNav": [268]
        },
        "currentSelect": [{
          "id": "371",
          "htmls": ["index.html", "personalcenter.html"]
        }, {
          "id": "372",
          "htmls": ["aboutUs.html"]
        }, {
          "id": "373",
          "htmls": ["informationdetail.html", "newslist.html"]
        }, {
          "id": "374",
          "htmls": ["ebook.html", "booklist.html"]
        }, {
          "id": "375",
          "htmls": ["examCenter.html"]
        }, {
          "id": "376",
          "htmls": ["helpCenter.html"]
        }, {
          "id": "377",
          "htmls": ["contactInformation.html"]
        }, {
          "id": "378",
          "htmls": [""]
        }, {
          "id": "269",
          "htmls": []
        }, {
          "id": "270",
          "htmls": ["activity.html", "activityrace.html", "activitylist.html"]
        }]
      }
    }
  },
  "index": {
    "swiper": {
      "pic_noWords_04": {
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": "[{pub_col_id:'83'},{pub_site_id:29}]",
          "groupBy": "pub_resource_id",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "16",
          "searchText": ""
        },
        "infoDetailHref": "../pages/informationInfo.html?pubId="
      },
      "pic_advert_05": {
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": "[{pub_col_id:'365'}, {pub_site_id: 29}]",
          "groupBy": "pub_resource_id",
          "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          "pageNo": "2",
          "pageSize": "15",
          "searchText": ""
        },
        "infoUrlPrefix": "informationInfo.html?pubId="
      },
      "pic_01": {
        "height": "480px",
        "interval": 5000,
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": "[{'pub_col_id':'365'}]",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "3",
          "searchText": null
        },
        "sysAdapter": "sykAdapter",
        "typeAdapter": "newsAdapter",
        "showItem": ["button"],
        "complicatedItem": [{
          "name": "button",
          "field": "resName",
          "display": "",
          "method": "toDetail"
        }],
        "toDetail": {
          "url": "../pages/informationdetail.html",
          "dataKeys": {
            "pubId": "id"
          },
          "fixedKeys": {}
        },
        "staticText": {
          "noImg": "暂无图片"
        }
      }
    },
    "list_pic": {
      "picListBookShow": {
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": "[{pub_col_id:'362'},{pub_status:'1'}]",
          "groupBy": "pub_resource_id",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": ""
        },
        "href": "../../../reader/yuezhi/read.jsp",
        "bookDetail": "../pages/bookdetail.html?pubId=",
        "beginPicIndex": 2,
        "finishPicIndex": 8,
        "colId": "362",
        "READ_URL": ""
      },
      "picListRefinedBook": {
        "url": "spc/cms/publish/list.do",
        "param": {
          "conditions": "[{pub_col_id:'362'},{pub_status:'1'}]",
          "groupBy": "pub_resource_id",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": ""
        },
        "baseURL": "../../../reader/yuezhi/read.jsp",
        "href": "./bookList.html?colId=",
        "bookDetail": "./bookdetail.html?pubId=",
        "colId": "362",
        "READ_URL": ""
      },
      "list_pic_24": {
        "url": "spc/cms/publish/list.do",
        "param": {
          "conditions": "[{pub_col_id:'362'},{pub_status:'1'},{pub_site_id:29}]",
          "groupBy": "pub_resource_id",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": ""
        },
        "href": "./bookList.html?colId=",
        "colId": "362"
      },
      "ui_list_pic_22": {
        "url": "spc/cms/col/getColNextLevelNode",
        "params": {
          "colId": "367"
        },
        "activityListUrl": "./activitylist.html",
        "keys": {
          "small_pic": "small_pic",
          "id": "id",
          "name": "name"
        }
      },
      "list_pic_27": {
        "modulename": {
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": "[{pub_col_id:'437'},{pub_status:'1'}]",
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "15",
            "searchText": ""
          },
          "comTitle": {
            "isShow": true,
            "name": "免费专区"
          },
          "showItem": ["bookName", "starNum", "bookAuthor", "pressName", "pubDate", "price", "share", "buy", "review"],
          "display": {
            "bookAuthor": "作者：",
            "pressName": "出版社：",
            "pubDate": "出版时间：",
            "share": "分享",
            "buy": "购买",
            "review": "查看",
            "more": "MORE+"
          },
          "keys": {
            "bookName": "pub_resource_name",
            "starNum": "pub_star_num",
            "memberPrice": "prod_member_price",
            "ebPrice": "BOOK_EB_PRICE",
            "bookAuthor": "BOOK_SYS_AUTHORS",
            "pubId": "id",
            "contentType": "pub_content_type",
            "colId": "pub_col_id",
            "colName": "pub_col_name",
            "bookPic": "pub_picBig",
            "pressName": "BOOK_PRESS_NAME",
            "pubDate": "BOOK_PUBDATE"
          },
          "detailHref": "./bookdetail.html",
          "moreHref": "./bookList.html",
          "maxNum": 4
        }
      },
      "list_pic_29": {
        "news": {
          "comTitle": {
            "isShow": false,
            "name": "资讯"
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "el-icon-back",
            "name": "查看更多",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "367"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "367"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 3,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "abstract",
              "display": "",
              "method": ""
            }]
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/newslist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 200,
          "infoImgHeight": 160,
          "pagination": {
            "showPagination": false,
            "pagesize": [15, 30, 50, 100]
          },
          "isMobileLoading": false
        },
        "tstj": {
          "comTitle": {
            "isShow": true,
            "name": "图书推荐"
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "el-icon-back",
            "name": "进入商城>>",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "1039"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "1039"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 0,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": []
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/ebook.html",
            "dataKeys": {},
            "fixedKeys": {}
          },
          "infoImgWidth": 200,
          "infoImgHeight": 160,
          "pagination": {
            "showPagination": false,
            "pagesize": [15, 30, 50, 100]
          },
          "isMobileLoading": false
        },
        "culture_list": {
          "comTitle": {
            "isShow": false,
            "name": ""
          },
          "toMoreBtn": {
            "isShow": false,
            "iconClass": "el-icon-d-arrow-right",
            "name": "更多",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "1039"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "1039"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 12,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "bookAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "",
              "field": "sysAuthors",
              "display": "作者：",
              "method": ""
            }, {
              "name": "price",
              "field": "memberPrice",
              "display": "促销价：",
              "method": ""
            }]
          },
          "toDetail": {
            "url": "../pages/bookdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/bookList.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 360,
          "infoImgHeight": 199,
          "onEvent": {
            "eventName": "showNavContent"
          }
        },
        "modulename": {
          "comTitle": {
            "isShow": true,
            "name": "资讯"
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "el-icon-back",
            "name": "更多",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "250"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "250"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 1,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 200,
          "infoImgHeight": 160,
          "onEvent": {
            "eventName": "showNavContent"
          },
          "pagination": {
            "showPagination": true,
            "pagesize": [15, 30, 50, 100]
          },
          "isMobileLoading": false,
          "toOrderByBtn": {
            "name": "排序：",
            "isShow": false,
            "itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
            "itemList": [{
              "name": "默认",
              "itemField": "pub_a_order asc pub_lastmodified desc id asc"
            }, {
              "name": "最新",
              "itemField": "pub_created asc id asc"
            }, {
              "name": "热门",
              "itemField": "pub_read_num asc id asc"
            }]
          }
        },
        "staticText": {
          "noImg": "暂无图片",
          "noData": "暂无数据"
        }
      }
    },
    "list_word": {
      "list_word_02": {
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": [{
            "pub_col_id": "367"
          }],
          "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "5",
          "searchText": null
        },
        "startNum": 0,
        "locationQuery": {
          "keys": {
            "colId": "colId"
          }
        }
      }
    },
    "advert": {
      "ui_advert_01": {
        "ggt": {
          "getList": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": "[{pub_col_id:'1038'}]",
              "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": null
            },
            "keys": {
              "pic": "pub_picBig",
              "sourceLink": "information_a_sourceUrl"
            }
          }
        },
        "modulename": {
          "getList": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": "[{pub_col_id:'263'}]",
              "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": null
            },
            "keys": {
              "pic": "pub_picBig",
              "sourceLink": "information_a_sourceUrl"
            }
          }
        }
      }
    },
    "navigation": {
      "ui_navigation_04": {
        "gotop": {
          "showItem": ["QQ", "toTop"],
          "display": {
            "qq": "联系我们",
            "toTop": "返回顶部"
          },
          "toQQ": {
            "url": "http://wpa.qq.com/msgrd?v=3&uin=378365117&site=qq&menu=yes"
          }
        }
      },
      "navigation_05": {
        "culture_tab": {
          "colId": 1039,
          "comTitle": {
            "isShow": false,
            "name": "华育动态新闻"
          },
          "showChildren": false,
          "broadcastName": "showNavContent",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          },
          "showColumnArray": [1040, 1041, 1042]
        },
        "modulename": {
          "colId": 245,
          "comTitle": {
            "isShow": true,
            "name": "华育动态新闻"
          },
          "showChildren": false,
          "broadcastName": "showNavContent",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          },
          "broadcastEventName": {
            "transCol": "listenInfoDetail",
            "keys": {
              "colId": "pub_col_id"
            }
          }
        }
      }
    },
    "work_videodetail": {
      "work_videodetail_02": {
        "aboutUs": {
          "getResourceDetail": {
            "url": "resource/detail.do",
            "params": {
              "pubId": "1046",
              "loginName": "william",
              "siteId": 29,
              "attachTypes": "video"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter"
          },
          "showItem": ["description"],
          "display": {
            "description": "描述信息："
          }
        },
        "modulename": {
          "getResourceDetail": {
            "url": "resource/detail.do",
            "params": {
              "pubId": "",
              "loginName": "william",
              "siteId": 29,
              "attachTypes": "video"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter"
          },
          "showItem": ["price", "author", "pressname", "pubdate", "time", "description", "videolists"],
          "display": {
            "price": "价格：",
            "author": "作者：",
            "pressname": "出版社：",
            "pubdate": "出版时间：",
            "time": "视频时长：",
            "description": "描述信息：",
            "videolists": "视频列表："
          }
        }
      }
    },
    "work_videoplay": {
      "work_videoplay_01": {
        "aboutUs": {
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "1046"
              }, {
                "pub_site_id": ""
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter"
          },
          "complicatedItem": [{
            "name": "",
            "field": "description",
            "display": "",
            "method": ""
          }],
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "playVideoUrl": "dynamicFile/stream.do?recordID=",
          "showVideoList": false,
          "queryParamsType": "",
          "getDetailById": {
            "url": "spc/cms/publish/detail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            }
          }
        },
        "modulename": {
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "1024"
              }, {
                "pub_site_id": ""
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter"
          },
          "complicatedItem": [{
            "name": "",
            "field": "resName",
            "display": "",
            "method": ""
          }],
          "playVideoUrl": "dynamicFile/stream.do?recordID=",
          "showVideoList": false,
          "queryParamsType": "url"
        },
        "videoplay": {
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_parent_id": ""
              }, {
                "pub_site_id": ""
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter"
          },
          "complicatedItem": [{
            "name": "",
            "field": "resName",
            "display": "",
            "method": ""
          }],
          "playVideoUrl": "dynamicFile/stream.do?recordID=",
          "showVideoList": true,
          "queryParamsType": "url"
        }
      }
    }
  },
  "ebook": {
    "list_pic": {
      "pic_info_list_12": {
        "url": "book/getBookDetail.do",
        "READ_URL": "",
        "introductionUrl": "spc/prodb/publicize.do",
        "params": {
          "pubId": "436",
          "loginName": "",
          "siteId": "29"
        },
        "introductionParams": {
          "doclibCode": "",
          "docID": ""
        },
        "moreUrl": "../pages/bookList.html?colId=436"
      },
      "star_pic_info_13": {
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": "[{pub_col_id:'436'},{pub_status:'1'}]",
          "groupBy": "pub_resource_id",
          "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc ",
          "pageNo": "1",
          "pageSize": "3"
        }
      },
      "picListBook": {
        "hotsalebank": {
          "title": "热销排行",
          "url": "spc/cms/publish/list.do",
          "param": {
            "conditions": "[{pub_col_id:'364'},{pub_status:'1'}]",
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "3",
            "searchText": ""
          },
          "href": "./bookdetail.html?pubId=",
          "params": {
            "conditions": "[{pub_col_id:'364'},{pub_status:'1'}]",
            "groupBy": "pub_resource_id",
            "orderBy": "pub_read_num desc",
            "pageNo": "1",
            "pageSize": "4",
            "searchText": ""
          }
        },
        "historyrecord": {
          "title": "浏览历史",
          "url": "browserHistory/getHistoryList.do",
          "params": {
            "num": 3,
            "username": "",
            "siteId": 29
          },
          "href": "./bookdetail.html?pubId=",
          "getBookDetail": {
            "url": "book/getBookDetail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            }
          }
        }
      },
      "popularBook": {
        "url": "spc/cms/publish/list.do",
        "param": {
          "condition": "[{pub_col_id:'57'},{pub_status:'1'}]",
          "groupBy": "pub_resource_id",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": ""
        },
        "number": 15,
        "href": "./bookdetail.html?pubId="
      },
      "list_pic_27": {
        "hotSell": {
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": "[{pub_col_id:'437'},{pub_status:'1'}]",
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "15",
            "searchText": ""
          },
          "comTitle": {
            "isShow": true,
            "name": "热销专区"
          },
          "showItem": ["bookName", "pressName", "price", "buy"],
          "display": {
            "pressName": "",
            "buy": "购买",
            "more": "更多>>"
          },
          "keys": {
            "bookName": "pub_resource_name",
            "memberPrice": "prod_member_price",
            "ebPrice": "BOOK_EB_PRICE",
            "pubId": "id",
            "contentType": "pub_content_type",
            "colId": "pub_col_id",
            "colName": "pub_col_name",
            "bookPic": "pub_picBig",
            "pressName": "BOOK_PRESS_NAME"
          },
          "detailHref": "./bookdetail.html",
          "moreHref": "./bookList.html",
          "maxNum": 4
        },
        "saleBook": {
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": "[{pub_col_id:'363'},{pub_status:'1'}]",
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "15",
            "searchText": ""
          },
          "comTitle": {
            "isShow": true,
            "name": "特价专区"
          },
          "showItem": ["bookName", "pressName", "price", "buy"],
          "display": {
            "pressName": "",
            "buy": "购买",
            "more": "更多>>"
          },
          "keys": {
            "bookName": "pub_resource_name",
            "memberPrice": "prod_member_price",
            "ebPrice": "BOOK_EB_PRICE",
            "pubId": "id",
            "contentType": "pub_content_type",
            "colId": "pub_col_id",
            "colName": "pub_col_name",
            "bookPic": "pub_picBig",
            "pressName": "BOOK_PRESS_NAME"
          },
          "detailHref": "./bookdetail.html",
          "moreHref": "./bookList.html",
          "maxNum": 4
        },
        "modulename": {
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": "[{pub_col_id:'130'},{pub_status:'1'}]",
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "15",
            "searchText": ""
          },
          "comTitle": {
            "isShow": true,
            "name": "热销专区"
          },
          "showItem": ["bookName", "starNum", "bookAuthor", "pressName", "pubDate", "price", "share", "buy", "review"],
          "display": {
            "bookAuthor": "作者：",
            "pressName": "出版社：",
            "pubDate": "出版时间：",
            "share": "分享",
            "buy": "购买",
            "review": "查看",
            "more": "MORE+"
          },
          "keys": {
            "bookName": "pub_resource_name",
            "starNum": "pub_star_num",
            "memberPrice": "prod_member_price",
            "ebPrice": "BOOK_EB_PRICE",
            "bookAuthor": "BOOK_SYS_AUTHORS",
            "pubId": "id",
            "contentType": "pub_content_type",
            "colId": "pub_col_id",
            "colName": "pub_col_name",
            "bookPic": "pub_picBig",
            "pressName": "BOOK_PRESS_NAME",
            "pubDate": "BOOK_PUBDATE"
          },
          "detailHref": "./bookdetail.html",
          "moreHref": "./bookList.html",
          "maxNum": 4
        }
      },
      "list_pic_33": {
        "xsph": {
          "comTitle": {
            "isShow": true,
            "name": "图书畅销榜"
          },
          "toMoreBtn": {
            "isShow": false,
            "iconClass": "",
            "name": "更多>>",
            "method": "toMore"
          },
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "364"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "364"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 10,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "bookAdapter",
            "hasHoverEvent": true,
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail",
              "hoverEvent": "true"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail",
              "hoverEvent": "true"
            }, {
              "name": "button",
              "field": "sysAuthors",
              "display": "作者：",
              "method": "",
              "hoverEvent": "true"
            }, {
              "name": "price",
              "field": "memberPrice",
              "display": "",
              "method": "",
              "hoverEvent": "true"
            }, {
              "name": "price",
              "field": "salePrice",
              "display": "",
              "method": "",
              "hoverEvent": "true"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail",
              "hoverEvent": "false"
            }, {
              "name": "price",
              "field": "memberPrice",
              "display": "",
              "method": "",
              "hoverEvent": "false"
            }, {
              "name": "price",
              "field": "salePrice",
              "display": "原价：",
              "method": "",
              "hoverEvent": "false"
            }]
          },
          "toDetail": {
            "url": "../pages/bookdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/booklist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 120,
          "infoImgHeight": 140
        },
        "modulename": {
          "comTitle": {
            "isShow": true,
            "name": "销售排行榜"
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "",
            "name": "更多>>",
            "method": "toMore"
          },
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "131"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "131"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 10,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "bookAdapter",
            "hasHoverEvent": false,
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail",
              "hoverEvent": "true"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail",
              "hoverEvent": "true"
            }, {
              "name": "button",
              "field": "sysAuthors",
              "display": "",
              "method": "",
              "hoverEvent": "true"
            }, {
              "name": "price",
              "field": "ebPrice",
              "display": "",
              "method": "",
              "hoverEvent": "true"
            }, {
              "name": "price",
              "field": "memberPrice",
              "display": "",
              "method": "",
              "hoverEvent": "true"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail",
              "hoverEvent": "false"
            }, {
              "name": "price",
              "field": "ebPrice",
              "display": "",
              "method": "",
              "hoverEvent": "false"
            }, {
              "name": "price",
              "field": "memberPrice",
              "display": "",
              "method": "",
              "hoverEvent": "false"
            }]
          },
          "toDetail": {
            "url": "../pages/bookdetail.html",
            "dataKeys": {
              "pubId": "pubId"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/booklist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 120,
          "infoImgHeight": 140,
          "staticText": {
            "noData": "暂无数据",
            "noImg": "暂无图片"
          }
        },
        "staticText": {
          "noData": "暂无数据",
          "noImg": "暂无图片"
        }
      }
    },
    "classification": {
      "classification_02": {
        "url": "spc/prodb/treeByCode.do",
        "params": {
          "code": "BOOK",
          "layer": 2
        },
        "bookListUrl": "../pages/bookList.html"
      },
      "classification_01": {
        "url": "spc/prodb/tree-leve-one-code.do",
        "params": {
          "code": "BOOK"
        },
        "broadcastName": "queryClassificationList"
      }
    },
    "ui_classification": {
      "ui_classification_03": {
        "modulename": {
          "url": "spc/prodb/treeByCode.do",
          "params": {
            "code": "BOOK",
            "layer": 2
          },
          "toBookLists": {
            "url": "../pages/bookList.html",
            "dataKeys": {
              "cascadeId": "cascadeId"
            }
          }
        }
      }
    }
  },
  "common": {
    "list_pic": {
      "popularBook": {
        "url": "spc/cms/publish/list.do",
        "param": {
          "conditions": "[{pub_resource_type:\"BOOK\"},{pub_status:\"1\"},{pub_site_id:\"29\"},{pub_col_id:\"363\"}]",
          "groupBy": "pub_resource_id",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": ""
        },
        "number": 15,
        "href": "./bookdetail.html?pubId="
      },
      "picListBook": {
        "hotsalebank": {
          "title": "热销排行",
          "url": "spc/cms/publish/list.do",
          "param": {
            "conditions": "[{pub_col_id:'364'},{pub_status:'1'}]",
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "4",
            "searchText": ""
          },
          "href": "./bookdetail.html?pubId=",
          "params": {
            "conditions": "[{pub_col_id:'364'},{pub_status:'1'}]",
            "groupBy": "pub_resource_id",
            "orderBy": "pub_read_num desc",
            "pageNo": "1",
            "pageSize": "4",
            "searchText": ""
          }
        },
        "historyrecord": {
          "title": "浏览历史",
          "url": "browserHistory/getHistoryList.do",
          "params": {
            "num": 3,
            "username": ""
          },
          "href": "./bookdetail.html?pubId="
        }
      },
      "refinedBook": {
        "url": "spc/cms/publish/list.do",
        "param": {
          "conditions": "[{pub_col_id:'59'},{pub_status:'1'}]",
          "groupBy": "pub_resource_id",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": ""
        },
        "href": "./bookList.html?colId=",
        "colId": 59
      }
    }
  },
  "bookdetail": {
    "list_pic": {
      "picListBook": {
        "historyrecord": {
          "title": "浏览历史",
          "url": "browserHistory/getHistoryList.do",
          "params": {
            "num": 4,
            "username": ""
          },
          "href": "./bookdetail.html?pubId=",
          "getBookDetail": {
            "url": "book/getBookDetail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            }
          }
        },
        "hotsalebank": {
          "title": "热销排行",
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": "[{pub_col_id:'131'},{pub_status:'1'}]",
            "groupBy": "pub_resource_id",
            "orderBy": "pub_read_num desc",
            "pageNo": "1",
            "pageSize": "4",
            "searchText": ""
          },
          "href": "./bookdetail.html?pubId="
        },
        "staticText": {
          "hits": "点击量：",
          "price": "价格：￥",
          "noCover": "暂无封面"
        }
      },
      "list_pic_16_relative": {
        "title": "相关图书",
        "url": "spc/cms/publish/related.do",
        "params": {
          "pubId": "",
          "size": 3
        }
      }
    },
    "book_detail": {
      "book_detail_02": {
        "buyBookUrl": "https://yanbiandaxuechubanshe.tmall.com/shop/view_shop.htm?spm=a220m.1000862.1000730.2.4bb914c5PYx6bM&user_number_id=3816921287&rn=7cd54fc003612de5db880f3c52e47abe?navColId=378",
        "probationUrl": "/ebook/read.jsp",
        "showInfoList": [{
          "title": "出版时间:",
          "key": "pubTime",
          "filter": true
        }, {
          "title": "出版社:",
          "key": "BOOK_PRESS_NAME",
          "filter": false
        }, {
          "title": "ISBN:",
          "key": "isbn",
          "filter": false
        }, {
          "title": "版次:",
          "key": "bookVersion",
          "filter": false
        }, {
          "title": "备注:",
          "key": "BOOK_REMARK",
          "filter": false
        }, {
          "title": "页数:",
          "key": "pageNums",
          "filter": false
        }, {
          "title": "字数:",
          "key": "bookWords",
          "filter": false
        }],
        "showItem": []
      }
    },
    "bookreview": {
      "bookreview_01": {
        "queryComments": {
          "url": "comment/comments.do",
          "params": {
            "pubId": "",
            "pageIndex": 1,
            "pageSize": 15,
            "siteId": 2
          }
        },
        "addComment": {
          "url": "comment/addComment.do",
          "params": {
            "pubId": "",
            "loginName": "",
            "content": "",
            "starNum": 0,
            "deviceName": "pc",
            "colId": "",
            "siteId": 2,
            "type": "1",
            "parentId": "0",
            "activityId": ""
          }
        },
        "pagination": {
          "showPagination": true,
          "pagesize": [15, 30, 50, 100]
        },
        "operList": {
          "review": {
            "reviewShow": false,
            "toReviewInfoUrl": "../page/reviewInfo.html"
          },
          "like": {
            "likeShow": false
          }
        },
        "orReGetMenberName": true,
        "toAddReview": {
          "toAddReviewShow": true,
          "toAddReviewName": "评论",
          "toAddReviewUrl": "../pages/reviewPublish.html"
        },
        "staticText": {
          "comments": "评论",
          "noHeadPicture": "暂无头像",
          "noComments": "暂无评论",
          "commentsEmptyInfo": "评论内容不能为空",
          "pleaseGradeBeforeSubmitting": "请先评分再提交评论~",
          "commentAddFailed": "评论添加失败"
        }
      }
    },
    "work_bookdetail": {
      "work_bookdetail_04": {
        "bookdetail": {
          "getResourceDetail": {
            "url": "book/getBookDetail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "bookAdapter",
            "complicatedItem": {
              "first": [{
                "name": "img",
                "field": "picBig",
                "display": "",
                "method": "",
                "className": ""
              }],
              "five": [{
                "name": "button",
                "field": "resName",
                "display": "",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "sysAuthors",
                "display": "作者：",
                "method": "",
                "className": ""
              }],
              "second": [{
                "name": "activity",
                "field": "activityList",
                "display": "促销：<span class='fullcut'>满额减</span>",
                "method": "",
                "className": ""
              }, {
                "name": "price",
                "field": "price",
                "display": "原价：",
                "method": "",
                "className": ""
              }, {
                "name": "price",
                "field": "memberPrice",
                "display": "现价：",
                "method": "",
                "className": ""
              }, {
                "name": "price",
                "field": "ebPrice",
                "display": "电子书售价：",
                "method": "",
                "className": ""
              }],
              "third": [{
                "name": "like",
                "field": "",
                "display": "点赞",
                "method": "collectOrLike",
                "className": "fa fa-thumbs-up"
              }, {
                "name": "collect",
                "field": "",
                "display": "收藏",
                "method": "collectOrLike",
                "className": "fa fa-heart"
              }, {
                "name": "share",
                "field": "",
                "display": "分享",
                "method": "",
                "className": "fa fa-share-alt"
              }],
              "four": [{
                "name": "addcart",
                "field": "",
                "display": "购买纸书",
                "method": "addCart",
                "className": "fa fa-shopping-cart"
              }, {
                "name": "addebcart",
                "field": "",
                "display": "购买电子书",
                "method": "addCart",
                "className": "fa fa-tablet"
              }, {
                "name": "probation",
                "field": "",
                "display": "试读",
                "method": "toProbation",
                "className": "fa fa-book"
              }],
              "six": [{
                "name": "",
                "field": "pressName",
                "display": "出版社：",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "isbn",
                "display": "ISBN：",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "bookVersion",
                "display": "版次：",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "",
                "display": "纸张：",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "fitment",
                "display": "包装：",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "format",
                "display": "开本：",
                "method": "",
                "className": ""
              }, {
                "name": "time",
                "field": "pubdate",
                "display": "出版时间：",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "language",
                "display": "正文语种：",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "textNum",
                "display": "页数：",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "",
                "display": "是否套装：",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "bookwords",
                "display": "字数：",
                "method": "",
                "className": ""
              }]
            }
          },
          "toProbation": {
            "url": "../../../reader/ebook/read.jsp",
            "dataKeys": {
              "bookId": "resId",
              "bookName": "resName"
            },
            "fixedKeys": {
              "siteType": 0,
              "readType": 0
            }
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": true,
            "tabConfigshow": true,
            "reviewShow": true,
            "tabList": ["商品介绍", "商品讨论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": true,
            "showPublicize": ["内容介绍", "作者介绍", "译者简介", "目录"]
          },
          "getAudioAttachment": {
            "url": "resource/detail.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "siteId": 29,
              "attachTypes": "audio"
            },
            "isShowAudio": false
          },
          "addCart": {
            "url": "cart/addCart.do",
            "params": {
              "number": "",
              "loginName": "",
              "activityId": 0,
              "pubId": "",
              "siteId": 29
            }
          },
          "collectOrLike": {
            "url": "collection/addCollect.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "operateType": 0,
              "productId": "",
              "siteId": 29
            }
          },
          "toReviewList": {
            "url": "../pages/reviewlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          }
        },
        "modulename": {
          "getResourceDetail": {
            "url": "book/getBookDetail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "bookAdapter",
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "",
              "className": ""
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "",
              "className": ""
            }, {
              "name": "price",
              "field": "memberPrice",
              "display": "纸书售价：",
              "method": "",
              "className": ""
            }, {
              "name": "price",
              "field": "ebPrice",
              "display": "电子书售价：",
              "method": "",
              "className": ""
            }, {
              "name": "price",
              "field": "price",
              "display": "纸书原价：",
              "method": "",
              "className": ""
            }, {
              "name": "probation",
              "field": "",
              "display": "免费试读",
              "method": "toProbation",
              "className": "fas fa-book"
            }, {
              "name": "addcart",
              "field": "",
              "display": "加入购物车",
              "method": "addCart",
              "className": ""
            }, {
              "name": "addebcart",
              "field": "",
              "display": "电子书加入购物车",
              "method": "addCart",
              "className": ""
            }, {
              "name": "like",
              "field": "",
              "display": "点赞",
              "method": "collectOrLike",
              "className": "fas fa-thumbs-up"
            }, {
              "name": "collect",
              "field": "",
              "display": "收藏",
              "method": "collectOrLike",
              "className": "fas fa-heart"
            }, {
              "name": "share",
              "field": "",
              "display": "分享：",
              "method": "",
              "className": ""
            }]
          },
          "toProbation": {
            "url": "../../../reader/ebook/read.jsp",
            "dataKeys": {
              "bookId": "resId",
              "bookName": "resName"
            },
            "fixedKeys": {
              "siteType": 0,
              "readType": 0
            }
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": true,
            "reviewShow": true,
            "tabList": ["详情", "评论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": true,
            "showPublicize": ["前言", "内容简介", "目录"]
          },
          "getAudioAttachment": {
            "url": "resource/detail.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "siteId": 29,
              "attachTypes": "audio"
            },
            "isShowAudio": true
          },
          "addCart": {
            "url": "cart/addCart.do",
            "params": {
              "number": "",
              "loginName": "",
              "activityId": 0,
              "pubId": "",
              "siteId": 29
            }
          },
          "collectOrLike": {
            "url": "collection/addCollect.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "operateType": 0,
              "productId": "",
              "siteId": 29
            }
          },
          "toReviewList": {
            "url": "../pages/reviewlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "toBuy": {
            "url": "../pages/bookBuy.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "bugButton": {
            "display": "立即购买",
            "method": "toBuy",
            "display1": "加入书架",
            "method1": "toBuy",
            "display2": "开始阅读",
            "method2": "toProbation"
          },
          "bookContentType": {
            "bookType": "91",
            "ebookType": "94"
          },
          "staticText": {
            "noImg": "暂无图片",
            "noResource": "暂无",
            "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
            "systemPrompt": "系统提示",
            "OK": "确定",
            "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
            "noEBookInfo": "该书没有对应电子书，无法加入购物车"
          },
          "getPubidByLocationQueryFromSyk": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "queryParams": {
              "title": "BOOK_SYS_TOPIC"
            }
          }
        },
        "staticText": {
          "noImg": "暂无图片",
          "noResource": "暂无",
          "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
          "systemPrompt": "系统提示",
          "OK": "确定",
          "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
          "noEBookInfo": "该书没有对应电子书，无法加入购物车"
        }
      }
    },
    "share": {
      "ui_share_01": {
        "bookdetailshare": {
          "shareLists": [{
            "title": "分享到微信",
            "class": "bds_weixin",
            "cmd": "weixin"
          }, {
            "title": "分享给QQ好友",
            "class": "bds_sqq",
            "cmd": "sqq"
          }, {
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到新浪微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "更多",
            "class": "bds_more",
            "cmd": "more"
          }]
        },
        "modulename": {
          "shareLists": [{
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到新浪微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "分享到腾讯微博",
            "class": "bds_tqq",
            "cmd": "tqq"
          }, {
            "title": "分享到人人网",
            "class": "bds_renren",
            "cmd": "renren"
          }]
        }
      }
    },
    "crumbs": {
      "work_crumbs_02": {
        "crumbs": {
          "getCols": {
            "url": "spc/cms/col/getAllColBySiteId",
            "type": "get",
            "params": {
              "siteId": "",
              "chId": "0"
            },
            "getGlobalParams": {
              "siteId": "siteId"
            },
            "keys": {
              "id": "id",
              "parentId": "parentId",
              "name": "name",
              "url": "url"
            }
          },
          "startCol": "0",
          "event": {
            "listenDetail": {
              "name": "listenInfoDetail",
              "keys": {
                "colId": "pub_col_id",
                "colName": "pub_col_name"
              }
            }
          }
        }
      }
    }
  },
  "personalCenter": {
    "personalcenter": {
      "personalcenter_01": {
        "navList": [{
          "title": "我的账号",
          "icon": "el-icon-edit",
          "tag": "account"
        }, {
          "title": "我的订单",
          "icon": "el-icon-goods",
          "tag": "list"
        }, {
          "title": "我的书架",
          "icon": "el-icon-tickets",
          "tag": "book"
        }, {
          "title": "收藏夹",
          "icon": "el-icon-star-on",
          "tag": "collecting"
        }, {
          "title": "我的积分",
          "icon": "el-icon-news",
          "tag": "point"
        }, {
          "title": "我的优惠券",
          "icon": "el-icon-menu",
          "tag": "coupon"
        }],
        "subConfig": {
          "account": {
            "getMobileCode": {
              "url": "user/sendMobileMessage.do"
            }
          },
          "collection": {
            "tabListShow": [{
              "title": "电子书",
              "type": "94"
            }, {
              "title": "纸质书",
              "type": "91"
            }]
          }
        }
      }
    }
  },
  "addcart": {
    "list_pic": {
      "list_pic_23": {
        "userbook": {
          "title": "购买该书的用户还买",
          "url": "cart/getOtherBookList.do",
          "params": {
            "pubId": "",
            "loginName": ""
          },
          "detailHref": "../pages/bookdetail.html?pubId=",
          "maxNum": 4
        },
        "otherbook": {
          "title": "该作者其他图书",
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": [{
              "pub_resource_type": "BOOK"
            }, {
              "pub_site_id": 2
            }],
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "15",
            "searchText": ""
          },
          "detailHref": "../pages/bookdetail.html?pubId=",
          "maxNum": 4
        }
      }
    },
    "shoppingCart": {
      "shoppingCart_02": {
        "url": "api/book/getBookDetail.do",
        "params": {
          "loginName": "",
          "pubId": "",
          "siteId": 2
        },
        "bookType": "91",
        "ebookType": "94",
        "toDetailUrl": "../pages/bookdetail.html"
      }
    }
  },
  "information": {
    "bookreview": {
      "bookreview_01": {
        "queryComments": {
          "url": "comment/comments.do",
          "params": {
            "pubId": "",
            "pageIndex": 1,
            "pageSize": 15,
            "siteId": 2
          }
        },
        "addComment": {
          "url": "comment/addComment.do",
          "params": {
            "pubId": "",
            "loginName": "",
            "content": "",
            "starNum": 0,
            "deviceName": "pc",
            "colId": "",
            "siteId": 2,
            "type": "1",
            "parentId": "0",
            "activityId": ""
          }
        },
        "pagination": {
          "showPagination": true,
          "pagesize": [15, 30, 50, 100]
        },
        "operList": {
          "review": {
            "reviewShow": true,
            "toReviewInfoUrl": "../page/reviewInfo.html"
          },
          "like": {
            "likeShow": true
          }
        },
        "orReGetMenberName": true,
        "toAddReview": {
          "toAddReviewShow": true,
          "toAddReviewName": "评论",
          "toAddReviewUrl": "../pages/reviewPublish.html"
        },
        "staticText": {
          "comments": "评论",
          "noHeadPicture": "暂无头像",
          "noComments": "暂无评论",
          "commentsEmptyInfo": "评论内容不能为空",
          "pleaseGradeBeforeSubmitting": "请先评分再提交评论~",
          "commentAddFailed": "评论添加失败"
        }
      }
    },
    "information": {
      "information_01": {
        "displayItem": ["author"],
        "queryDetail": {
          "url": "spc/cms/publish/detail.do",
          "params": {
            "pubId": "669",
            "loginName": "zx"
          },
          "keys": {
            "title": "pub_resource_name",
            "author": "information_SYS_AUTHORS",
            "pubTime": "information_a_pubTime",
            "content": "information_a_content",
            "picture": "pub_picBig"
          },
          "display": {
            "noAuthor": "暂无作者"
          }
        },
        "collectOrLike": {
          "url": "collection/addCollect.do",
          "params": {
            "loginName": "",
            "pubId": "",
            "operateType": "",
            "siteId": 29
          }
        },
        "shareLists": [{
          "title": "QQ好友",
          "class": "popup_qzone",
          "cmd": "qzone"
        }, {
          "title": "微信",
          "class": "popup_weixin",
          "cmd": "weixin"
        }, {
          "title": "分享到新浪微博",
          "class": "bds_tsina",
          "cmd": "tsina"
        }, {
          "title": "更多",
          "class": "bds_more",
          "cmd": "more"
        }],
        "showItem": ["like", "collect"],
        "staticText": {
          "yourPosition": "您的位置：",
          "homePage": "首页",
          "infoContent": "资讯内容",
          "shareTo": "分享到："
        }
      }
    },
    "work_bookdetail": {
      "work_bookdetail_04": {
        "infodetail": {
          "getResourceDetail": {
            "url": "spc/cms/publish/detail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "complicatedItem": {
              "first": [{
                "name": "",
                "field": "topic",
                "display": "",
                "method": "",
                "className": ""
              }, {
                "name": "time",
                "field": "pubTime",
                "display": "",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "source",
                "display": "来源：",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "authors",
                "display": "作者：",
                "method": "",
                "className": ""
              }, {
                "name": "share",
                "field": "",
                "display": "分享到",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "content",
                "display": "",
                "method": "",
                "className": ""
              }]
            }
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": false,
            "reviewShow": false,
            "tabList": ["商品介绍", "商品讨论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": false,
            "showPublicize": ["内容介绍", "作者介绍", "译者简介", "目录"]
          },
          "staticText": {
            "noImg": "暂无图片",
            "noResource": "暂无",
            "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
            "systemPrompt": "系统提示",
            "OK": "确定",
            "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
            "noEBookInfo": "该书没有对应电子书，无法加入购物车"
          }
        },
        "modulename": {
          "getResourceDetail": {
            "url": "book/getBookDetail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "bookAdapter",
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "",
              "className": ""
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "",
              "className": ""
            }, {
              "name": "price",
              "field": "memberPrice",
              "display": "电子书价格：",
              "method": "",
              "className": ""
            }, {
              "name": "price",
              "field": "ebPrice",
              "display": "",
              "method": "",
              "className": ""
            }, {
              "name": "price",
              "field": "price",
              "display": "纸书定价：",
              "method": "",
              "className": ""
            }, {
              "name": "probation",
              "field": "",
              "display": "免费试读",
              "display1": "全文阅读",
              "method": "toProbation",
              "className": "fas fa-book"
            }, {
              "name": "addcart",
              "field": "",
              "display": "加入购物车",
              "method": "addCart",
              "className": ""
            }, {
              "name": "addebcart",
              "field": "",
              "display": "电子书加入购物车",
              "method": "addCart",
              "className": ""
            }, {
              "name": "like",
              "field": "",
              "display": "点赞",
              "method": "collectOrLike",
              "className": "fas fa-thumbs-up"
            }, {
              "name": "collect",
              "field": "",
              "display": "收藏",
              "method": "collectOrLike",
              "className": "fas fa-heart"
            }, {
              "name": "share",
              "field": "",
              "display": "",
              "method": "",
              "className": ""
            }]
          },
          "toProbation": {
            "url": "../../../reader/ebook/read.jsp",
            "dataKeys": {
              "bookId": "resId",
              "bookName": "resName"
            },
            "fixedKeys": {
              "siteType": 0,
              "readType": 0
            }
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toBuy": {
            "url": "../pages/bookBuy.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": true,
            "reviewShow": true,
            "tabList": ["详情", "评论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": true,
            "showPublicize": ["前言", "内容简介", "目录"]
          },
          "getAudioAttachment": {
            "url": "resource/detail.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "siteId": 29,
              "attachTypes": "audio"
            },
            "isShowAudio": true
          },
          "addCart": {
            "url": "cart/addCart.do",
            "params": {
              "number": "",
              "loginName": "",
              "activityId": 0,
              "pubId": "",
              "siteId": 29
            }
          },
          "collectOrLike": {
            "url": "collection/addCollect.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "operateType": 0,
              "productId": "",
              "siteId": 29
            }
          },
          "toReviewList": {
            "url": "../pages/reviewlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "bugButton": {
            "display": "立即购买",
            "method": "toBuy",
            "display1": "加入书架",
            "method1": "toBuy",
            "display2": "开始阅读",
            "method2": "toProbation"
          },
          "bookContentType": {
            "bookType": "91",
            "ebookType": "94"
          },
          "getPubidByLocationQueryFromSyk": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "queryParams": {
              "title": "BOOK_SYS_TOPIC"
            }
          },
          "staticText": {
            "noImg": "暂无图片",
            "noResource": "暂无",
            "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
            "systemPrompt": "系统提示",
            "OK": "确定",
            "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
            "noEBookInfo": "该书没有对应电子书，无法加入购物车",
            "noDate": "暂无日期",
            "yuan": "￥"
          }
        },
        "staticText": {
          "noImg": "暂无图片",
          "noResource": "暂无",
          "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
          "systemPrompt": "系统提示",
          "OK": "确定",
          "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
          "noEBookInfo": "该书没有对应电子书，无法加入购物车"
        }
      }
    },
    "share": {
      "ui_share_01": {
        "infodetailshare": {
          "shareLists": [{
            "title": "分享到微信",
            "class": "bds_weixin",
            "cmd": "weixin"
          }, {
            "title": "分享给QQ好友",
            "class": "bds_sqq",
            "cmd": "sqq"
          }, {
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到新浪微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "更多",
            "class": "more",
            "cmd": "more"
          }]
        },
        "modulename": {
          "shareLists": [{
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到新浪微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "分享到腾讯微博",
            "class": "bds_tqq",
            "cmd": "tqq"
          }, {
            "title": "分享到人人网",
            "class": "bds_renren",
            "cmd": "renren"
          }]
        }
      }
    }
  },
  "list": {
    "list_word": {
      "list_word_02": {
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": "[{pub_col_id:'83'}]",
          "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": null
        }
      }
    }
  },
  "search": {
    "search": {
      "search_result_04": {
        "url": "spc/cms/publish/list.do",
        "param": {
          "conditions": "[{pub_site_id:'29'},{pub_status:'1'},{pub_resource_type:'BOOK'}]",
          "groupBy": "pub_resource_id",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": ""
        },
        "pageSizes": [10, 20, 50, 100],
        "eventName_loadDate": "loadSearchResult",
        "detailHref": "./bookdetail.html?pubId=",
        "isMobileLoading": false,
        "staticText": {
          "total": "共",
          "productQuanity": "件商品",
          "noCover": "暂无封面",
          "author": "作者：",
          "copyright": "版权：",
          "publish": "出版",
          "yuan": "￥",
          "commentQuanity": "条评论",
          "noDigest": "暂无摘要",
          "shareTo": "分享",
          "checkInfo": "查看",
          "noDate": "暂无日期",
          "isbn": "ISBN："
        },
        "isShowIsbn": false
      }
    },
    "rankCard": {
      "rank_01": {
        "rules": [{
          "title": "综合排序",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc"
        }, {
          "title": "按人气",
          "orderBy": "pub_read_num desc"
        }, {
          "title": "按最新",
          "orderBy": "BOOK_PUBDATE desc"
        }],
        "eventName": ""
      }
    },
    "share": {
      "ui_share_01": {
        "modulename": {
          "shareLists": [{
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到新浪微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "分享到腾讯微博",
            "class": "bds_tqq",
            "cmd": "tqq"
          }, {
            "title": "分享到人人网",
            "class": "bds_renren",
            "cmd": "renren"
          }]
        }
      }
    }
  },
  "searchadvance": {
    "search": {
      "search_result_04": {
        "url": "spc/cms/publish/list.do",
        "param": {
          "conditions": "[{pub_site_id:'29'},{pub_status:'1'},{pub_resource_type:'BOOK'}]",
          "groupBy": "pub_resource_id",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "10",
          "searchText": ""
        },
        "pageSizes": [10, 20, 50, 100],
        "eventName_loadDate": "loadSearchResult",
        "detailHref": "./bookdetail.html?pubId=",
        "isMobileLoading": false,
        "staticText": {
          "total": "共",
          "productQuanity": "件商品",
          "noCover": "暂无封面",
          "author": "作者：",
          "copyright": "版权：",
          "publish": "出版",
          "yuan": "￥",
          "commentQuanity": "条评论",
          "noDigest": "暂无摘要",
          "shareTo": "分享",
          "buy": "购买",
          "checkInfo": "查看",
          "noDate": "暂无日期",
          "isbn": "ISBN："
        },
        "isShowIsbn": false
      },
      "search_condition_05": {
        "conditions": "{pub_resource_type:'BOOK'},{pub_site_id:'29'}",
        "eventName": "loadSearchResult"
      }
    },
    "share": {
      "ui_share_01": {
        "searchadvance": {
          "shareLists": [{
            "title": "分享",
            "class": "bds_more",
            "cmd": "more"
          }]
        }
      }
    }
  },
  "booklist": {
    "_3colsWithSort": {
      "queryBookList": {
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": "",
          "orderBy": "",
          "pageNo": "",
          "pageSize": "",
          "searchText": "",
          "groupBy": "pub_resource_id"
        }
      },
      "showPrice": true
    },
    "_2colsWithSort": {
      "queryBookList": {
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": "",
          "orderBy": "",
          "pageNo": "",
          "pageSize": "",
          "searchText": "",
          "groupBy": "pub_resource_id"
        }
      }
    }
  },
  "xhjy": {
    "navigation": {
      "navigation_05": {
        "ybdx": {
          "colId": 366,
          "comTitle": {
            "isShow": true,
            "name": "公司简介"
          },
          "showChildren": false,
          "broadcastName": "showNavContent",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          },
          "broadcastEventName": {
            "transCol": "listenInfoDetail",
            "keys": {
              "colId": "pub_col_id"
            }
          }
        },
        "helpCenter": {
          "colId": 564,
          "comTitle": {
            "isShow": true,
            "name": "帮助中心"
          },
          "showChildren": false,
          "broadcastName": "showNavContent",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          },
          "broadcastEventName": {
            "transCol": "listenInfoDetail",
            "keys": {
              "colId": "pub_col_id"
            }
          },
          "directLink": {
            "switchFlag": true,
            "directRules": {
              "567": "../pages/onlineMes.html?colId="
            }
          }
        },
        "contactInformation": {
          "colId": 565,
          "comTitle": {
            "isShow": true,
            "name": "联系我们"
          },
          "showChildren": false,
          "broadcastName": "showNavContent",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          },
          "broadcastEventName": {
            "transCol": "listenInfoDetail",
            "keys": {
              "colId": "pub_col_id"
            }
          }
        },
        "modulename": {
          "colId": 245,
          "comTitle": {
            "isShow": true,
            "name": "华育动态新闻"
          },
          "showChildren": false,
          "broadcastName": "showNavContent",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          },
          "broadcastEventName": {
            "transCol": "listenInfoDetail",
            "keys": {
              "colId": "pub_col_id"
            }
          }
        },
        "moduleName": {
          "colId": 0,
          "comTitle": {
            "isShow": true,
            "name": "华育动态新闻"
          },
          "showChildren": true,
          "showThreeColumn": false,
          "broadcastName": "showNavContent",
          "transTitle": "transNavTitle",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          },
          "broadcastEventName": {
            "transCol": "listenInfoDetail",
            "transTitle": "listenTitle",
            "keys": {
              "colId": "pub_col_id"
            }
          },
          "directLink": {
            "switchFlag": false,
            "directRules": {
              "1118": "../pages/newslistsnxw?colId=",
              "1119": "../pages/newslistyjxw?colId=",
              "1120": "../pages/newslistzcfg?colId=",
              "1121": "../pages/newslisttpxw?colId=",
              "1122": "../pages/newslistspjx?colId="
            }
          }
        }
      }
    },
    "information": {
      "information_02": {
        "content": {
          "comTitle": {
            "isShow": true,
            "name": "资讯"
          },
          "display": {},
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "366"
              }, {
                "pub_status": "1"
              }, {
                "pub_site_id": "29"
              }],
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            }
          },
          "getResource": {
            "url": "spc/cms/publish/detail.do",
            "params": {
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["content"],
            "complicatedItem": [{
              "name": "content",
              "field": "content",
              "display": ""
            }]
          },
          "broadcastName": "showNavContent"
        },
        "helpCenter": {
          "comTitle": {
            "isShow": true,
            "name": "资讯"
          },
          "display": {},
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "564"
              }, {
                "pub_status": "1"
              }, {
                "pub_site_id": "29"
              }],
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            }
          },
          "getResource": {
            "url": "spc/cms/publish/detail.do",
            "params": {
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["content"],
            "complicatedItem": [{
              "name": "content",
              "field": "content",
              "display": ""
            }]
          },
          "broadcastName": "showNavContent"
        },
        "contactInformation": {
          "comTitle": {
            "isShow": true,
            "name": "资讯"
          },
          "display": {},
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "565"
              }, {
                "pub_status": "1"
              }],
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            }
          },
          "getResource": {
            "url": "spc/cms/publish/detail.do",
            "params": {
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["content"],
            "complicatedItem": [{
              "name": "content",
              "field": "content",
              "display": ""
            }]
          },
          "broadcastName": "showNavContent"
        },
        "modulename": {
          "comTitle": {
            "isShow": true,
            "name": "资讯"
          },
          "display": {},
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "249"
              }, {
                "pub_status": "1"
              }],
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            }
          },
          "getResource": {
            "url": "spc/cms/publish/detail.do",
            "params": {
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["lastModifyDate", "createdDate", "content"],
            "complicatedItem": [{
              "name": "title",
              "field": "topic",
              "display": ""
            }, {
              "name": "lastModifyDate",
              "field": "lastModified",
              "display": "最后修改"
            }, {
              "name": "createdDate",
              "field": "created",
              "display": "创建时间"
            }, {
              "name": "authors",
              "field": "authors",
              "display": "作者"
            }, {
              "name": "sort",
              "field": "colName",
              "display": "分类"
            }, {
              "name": "content",
              "field": "content",
              "display": ""
            }]
          },
          "broadcastName": "showNavContent",
          "staticText": {
            "noDate": "暂无日期"
          }
        }
      }
    },
    "work_onlineqa": {
      "work_onlineqa_01": {
        "qa": {
          "commitQuestion": {
            "url": "spc/prodb/saveItem.do",
            "params": {
              "doclibCode": "QUE_ANS",
              "dataMap": {
                "SYS_TOPIC": "",
                "REQUESTER": "",
                "QUES_CONTENT": ""
              }
            }
          },
          "queryQA": {
            "url": "spc/prodb/searchNL.do",
            "params": {
              "doclibCode": "QUE_ANS",
              "status": 0,
              "page": 0,
              "size": 2,
              "pageable": 1
            }
          },
          "pagination": {
            "pagesize": [2, 30, 50, 100]
          },
          "staticText": {
            "commit": "提交",
            "questioner": "提问人",
            "answer": "回答者",
            "loginFirst": "请您先登录",
            "noContent": "提问内容不得为空",
            "answerSuccess": "您已提问成功，待审核通过后显示。",
            "opFailed": "操作失败"
          }
        }
      }
    }
  },
  "newslist": {
    "navigation": {
      "navigation_05": {
        "newscol": {
          "colId": 367,
          "comTitle": {
            "isShow": true,
            "name": "新闻动态"
          },
          "showChildren": false,
          "broadcastName": "showNavContent",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          }
        }
      }
    },
    "list_pic": {
      "list_pic_30": {
        "newslist": {
          "comTitle": {
            "isShow": false,
            "name": "新闻动态"
          },
          "broadcastName": "showNavContent",
          "display": {},
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "556",
                "op": "in"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 6,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "display": {
              "time": "日期",
              "title": "标题"
            },
            "showItem": ["time", "title"],
            "complicatedItem": [{
              "name": "time",
              "field": "lastModified",
              "display": ""
            }, {
              "name": "title",
              "field": "resName",
              "display": ""
            }]
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "colId": "colId"
            },
            "fixedKeys": {}
          },
          "crumb": [{
            "title": "首页",
            "href": "./index.html"
          }, {
            "title": "新闻动态",
            "href": "./newslist.html"
          }]
        },
        "modulename": {
          "comTitle": {
            "isShow": true,
            "name": "华育资讯"
          },
          "broadcastName": "showNavContent",
          "display": {},
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "556",
                "lk": "in"
              }, {
                "pub_status": "1"
              }],
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 6,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "display": {
              "time": "日期",
              "title": "标题",
              "author": "作者",
              "createdTime": "创建时间",
              "sort": "分类"
            },
            "showItem": ["time", "title", "createdTime", "sort", "author"],
            "complicatedItem": [{
              "name": "time",
              "field": "lastModified",
              "display": "日期"
            }, {
              "name": "title",
              "field": "resName",
              "display": "标题"
            }, {
              "name": "createdTime",
              "field": "created",
              "display": "创建时间"
            }, {
              "name": "sort",
              "field": "colName",
              "display": "分类"
            }, {
              "name": "author",
              "field": "authors",
              "display": "作者"
            }]
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "colId"
            },
            "fixedKeys": {}
          }
        }
      },
      "list_pic_29": {
        "newslist": {
          "comTitle": {
            "isShow": true,
            "name": "资讯"
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "el-icon-d-arrow-right",
            "name": "更多",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "556"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "556"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 1,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/policy_info.html",
            "dataKeys": {
              "pubId": "id",
              "colId": "colId"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/theory.html",
            "dataKeys": {},
            "fixedKeys": {}
          },
          "infoImgWidth": 378,
          "infoImgHeight": 234
        },
        "theory_top_list": {
          "comTitle": {
            "isShow": false,
            "name": ""
          },
          "toMoreBtn": {
            "isShow": false,
            "iconClass": "el-icon-d-arrow-right",
            "name": "更多",
            "method": ""
          },
          "display": {},
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "304"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 1,
            "maxNum": 6,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["button", "time"],
            "complicatedItem": [{
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "time",
              "field": "pubTime",
              "display": "",
              "method": ""
            }]
          },
          "toDetail": {
            "url": "../pages/policy_info.html",
            "dataKeys": {
              "pubId": "id",
              "colId": "colId"
            },
            "fixedKeys": {}
          }
        },
        "theory_list": {
          "comTitle": {
            "isShow": false,
            "name": ""
          },
          "toMoreBtn": {
            "isShow": false,
            "iconClass": "el-icon-d-arrow-right",
            "name": "",
            "method": ""
          },
          "display": {},
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "304"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 6,
            "maxNum": 9,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/policy_info.html",
            "dataKeys": {
              "pubId": "id",
              "colId": "colId"
            },
            "fixedKeys": {}
          }
        },
        "forum_top_pic": {
          "comTitle": {
            "isShow": true,
            "name": "论坛"
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "el-icon-d-arrow-right",
            "name": "更多",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "305"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "305"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 1,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/policy_info.html",
            "dataKeys": {
              "pubId": "id",
              "colId": "colId"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/forum.html",
            "dataKeys": {},
            "fixedKeys": {}
          },
          "infoImgWidth": 378,
          "infoImgHeight": 234
        },
        "forum_top_list": {
          "comTitle": {
            "isShow": false,
            "name": ""
          },
          "toMoreBtn": {
            "isShow": false,
            "iconClass": "el-icon-d-arrow-right",
            "name": "",
            "method": ""
          },
          "display": {},
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "305"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 1,
            "maxNum": 6,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["button", "time"],
            "complicatedItem": [{
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "time",
              "field": "pubTime",
              "display": "",
              "method": ""
            }]
          },
          "toDetail": {
            "url": "../pages/policy_info.html",
            "dataKeys": {
              "pubId": "id",
              "colId": "colId"
            },
            "fixedKeys": {}
          }
        },
        "forum_list": {
          "comTitle": {
            "isShow": false,
            "name": ""
          },
          "toMoreBtn": {
            "isShow": false,
            "iconClass": "el-icon-d-arrow-right",
            "name": "",
            "method": ""
          },
          "display": {},
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "305"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 6,
            "maxNum": 9,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/policy_info.html",
            "dataKeys": {
              "pubId": "id",
              "colId": "colId"
            },
            "fixedKeys": {}
          }
        },
        "other_list": {
          "comTitle": {
            "isShow": true,
            "name": "其他政策"
          },
          "toMoreBtn": {
            "isShow": false,
            "iconClass": "",
            "name": "",
            "method": ""
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "484"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "484"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "30",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 30,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["button"],
            "complicatedItem": [{
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/policy_info.html",
            "dataKeys": {
              "pubId": "id",
              "colId": "colId"
            },
            "fixedKeys": {}
          }
        },
        "modulename": {
          "comTitle": {
            "isShow": true,
            "name": "资讯"
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "el-icon-back",
            "name": "更多",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "250"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "250"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 1,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 200,
          "infoImgHeight": 160,
          "onEvent": {
            "eventName": "showNavContent"
          },
          "pagination": {
            "showPagination": true,
            "pagesize": [15, 30, 50, 100]
          },
          "isMobileLoading": false
        }
      }
    },
    "swiper": {
      "pic_01": {
        "height": "360px",
        "interval": 5000,
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": "[{'pub_col_id':'1045'}]",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": null
        },
        "sysAdapter": "sykAdapter",
        "typeAdapter": "newsAdapter",
        "showItem": ["button"],
        "complicatedItem": [{
          "name": "button",
          "field": "resName",
          "display": "",
          "method": "toDetail"
        }],
        "toDetail": {
          "url": "../pages/booklistspecial.html",
          "dataKeys": {
            "pubId": "id"
          },
          "fixedKeys": {}
        },
        "staticText": {
          "noImg": "暂无图片"
        }
      },
      "newslist": {
        "height": "320px",
        "interval": 5000,
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": "[{'pub_col_id':'1045'}]",
          "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": null
        },
        "sysAdapter": "sykAdapter",
        "typeAdapter": "newsAdapter",
        "showItem": ["button"],
        "complicatedItem": [{
          "name": "button",
          "field": "resName",
          "display": "",
          "method": "toDetail"
        }],
        "toDetail": {
          "url": "../pages/informationdetail.html",
          "dataKeys": {
            "pubId": "id"
          },
          "fixedKeys": {}
        }
      }
    },
    "list_word": {
      "newslist": {
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": [{
            "pub_col_id": "556"
          }],
          "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": null
        },
        "startNum": 0,
        "locationQuery": {
          "keys": {
            "colId": "colId"
          }
        }
      },
      "list_word_02": {
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": [{
            "pub_col_id": "367"
          }],
          "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": null
        },
        "startNum": 0,
        "locationQuery": {
          "keys": {
            "colId": "colId"
          }
        },
        "staticText": {
          "noDate": "暂无日期"
        }
      },
      "list_word_03": {
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": [{
            "pub_col_id": "556"
          }],
          "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": null
        },
        "startNum": 0,
        "locationQuery": {
          "keys": {
            "colId": "colId"
          }
        }
      },
      "list_word_01": {
        "url": "spc/cms/publish/list.do",
        "params": {
          "conditions": [{
            "pub_col_id": "367"
          }],
          "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          "pageNo": "1",
          "pageSize": "15",
          "searchText": null
        },
        "startNum": 0,
        "locationQuery": {
          "keys": {
            "colId": "colId"
          }
        },
        "staticText": {
          "noDate": "暂无日期"
        }
      }
    }
  },
  "testindex1": {
    "advert": {
      "ui_advert_01": {
        "modulename": {
          "getList": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": "[{pub_col_id:'263'}]",
              "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": null
            },
            "keys": {
              "pic": "pub_picBig",
              "sourceLink": "information_a_sourceUrl"
            }
          }
        }
      }
    }
  },
  "testindex": {
    "advert": {
      "ui_advert_01": {
        "modulename": {
          "getList": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": "[{pub_col_id:'365'}]",
              "orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": null
            },
            "keys": {
              "pic": "pub_picBig",
              "sourceLink": "information_a_sourceUrl"
            }
          }
        }
      }
    }
  },
  "test01": {
    "navigation": {
      "navigation_05": {
        "ybdx": {
          "colId": 366,
          "comTitle": {
            "isShow": true,
            "name": "公司简介"
          },
          "showChildren": false,
          "broadcastName": "showNavContent",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          }
        },
        "helpCenter": {
          "colId": 564,
          "comTitle": {
            "isShow": true,
            "name": "帮助中心"
          },
          "showChildren": false,
          "broadcastName": "showNavContent",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          }
        },
        "contactInformation": {
          "colId": 565,
          "comTitle": {
            "isShow": true,
            "name": "联系我们"
          },
          "showChildren": false,
          "broadcastName": "showNavContent",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          }
        },
        "modulename": {
          "colId": 245,
          "comTitle": {
            "isShow": true,
            "name": "华育动态新闻"
          },
          "showChildren": false,
          "broadcastName": "showNavContent",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          }
        }
      }
    },
    "crumbs": {
      "work_crumbs_02": {
        "modulename": {
          "getCols": {
            "url": "spc/cms/col/getAllColBySiteId",
            "type": "get",
            "params": {
              "siteId": "29",
              "chId": "0"
            },
            "getGlobalParams": {
              "siteId": "siteId"
            },
            "keys": {
              "id": "id",
              "parentId": "parentId",
              "name": "name",
              "url": "url"
            }
          },
          "startCol": "0",
          "event": {
            "listenDetail": {
              "name": "listenInfoDetail",
              "keys": {
                "colId": "pub_col_id",
                "colName": "pub_col_name"
              }
            }
          }
        }
      }
    }
  },
  "contactInformation": {
    "crumbs": {
      "work_crumbs_02": {
        "mbx": {
          "getCols": {
            "url": "spc/cms/col/getAllColBySiteId",
            "type": "get",
            "params": {
              "siteId": "",
              "chId": "0"
            },
            "getGlobalParams": {
              "siteId": "siteId"
            },
            "keys": {
              "id": "id",
              "parentId": "parentId",
              "name": "name",
              "url": "url"
            }
          },
          "startCol": "0",
          "event": {
            "listenDetail": {
              "name": "listenInfoDetail",
              "keys": {
                "colId": "pub_col_id",
                "colName": "pub_col_name"
              }
            }
          }
        },
        "modulename": {
          "getCols": {
            "url": "spc/cms/col/getAllColBySiteId",
            "type": "get",
            "params": {
              "siteId": "",
              "chId": "0"
            },
            "getGlobalParams": {
              "siteId": "siteId"
            },
            "keys": {
              "id": "id",
              "parentId": "parentId",
              "name": "name",
              "url": "url"
            }
          },
          "startCol": "0",
          "event": {
            "listenDetail": {
              "name": "listenInfoDetail",
              "keys": {
                "colId": "pub_col_id",
                "colName": "pub_col_name"
              }
            }
          }
        }
      }
    }
  },
  "policy": {
    "list_pic": {
      "list_pic_29": {
        "theory_top_m": {
          "comTitle": {
            "isShow": true,
            "name": "新闻资讯"
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "el-icon-d-arrow-right",
            "name": "更多>>",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "367"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "367"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 1,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id",
              "colId": "colId"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/newsmore.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 378,
          "infoImgHeight": 234
        },
        "modulename": {
          "comTitle": {
            "isShow": true,
            "name": "资讯"
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "el-icon-back",
            "name": "更多",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "250"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "250"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 1,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/newsmore.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 680,
          "infoImgHeight": 400,
          "onEvent": {
            "eventName": "showNavContent"
          },
          "pagination": {
            "showPagination": true,
            "pagesize": [15, 30, 50, 100]
          },
          "isMobileLoading": false,
          "toOrderByBtn": {
            "name": "排序：",
            "isShow": false,
            "itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
            "itemList": [{
              "name": "默认",
              "itemField": "pub_a_order asc pub_lastmodified desc id asc"
            }, {
              "name": "最新",
              "itemField": "pub_created asc id asc"
            }, {
              "name": "热门",
              "itemField": "pub_read_num asc id asc"
            }]
          },
          "staticText": {
            "noImg": "暂无图片",
            "noData": "暂无数据"
          }
        },
        "theory_top_pic": {
          "comTitle": {
            "isShow": true,
            "name": "新闻资讯"
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "el-icon-d-arrow-right",
            "name": "更多",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "367"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "367"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 1,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id",
              "colId": "colId"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/newsmore.html",
            "dataKeys": {},
            "fixedKeys": {}
          },
          "infoImgWidth": 680,
          "infoImgHeight": 400
        }
      }
    }
  },
  "aboutUs": {
    "crumbs": {
      "work_crumbs_02": {
        "crumbs": {
          "getCols": {
            "url": "spc/cms/col/getAllColBySiteId",
            "type": "get",
            "params": {
              "siteId": "",
              "chId": "0"
            },
            "getGlobalParams": {
              "siteId": "siteId"
            },
            "keys": {
              "id": "id",
              "parentId": "parentId",
              "name": "name",
              "url": "url"
            }
          },
          "startCol": "0",
          "event": {
            "listenDetail": {
              "name": "listenInfoDetail",
              "keys": {
                "colId": "pub_col_id",
                "colName": "pub_col_name"
              }
            }
          }
        },
        "modulename": {
          "getCols": {
            "url": "spc/cms/col/getAllColBySiteId",
            "type": "get",
            "params": {
              "siteId": "",
              "chId": "0"
            },
            "getGlobalParams": {
              "siteId": "siteId"
            },
            "keys": {
              "id": "id",
              "parentId": "parentId",
              "name": "name",
              "url": "url"
            }
          },
          "startCol": "0",
          "event": {
            "listenDetail": {
              "name": "listenInfoDetail",
              "keys": {
                "colId": "pub_col_id",
                "colName": "pub_col_name"
              }
            }
          }
        }
      }
    }
  },
  "newsmore": {
    "list_pic": {
      "list_pic_29": {
        "newsList": {
          "comTitle": {
            "isShow": true,
            "isShowImg": false,
            "name": "新闻资讯"
          },
          "toMoreBtn": {
            "isShow": false,
            "iconClass": "el-icon-back",
            "name": "[ 详情 ]",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "556"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "556"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 15,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["button", "time"],
            "complicatedItem": [{
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "abstract",
              "display": "",
              "method": ""
            }, {
              "name": "button",
              "field": "",
              "display": "[详情]",
              "method": "toDetail"
            }, {
              "name": "time",
              "field": "pubTime",
              "display": "",
              "method": ""
            }]
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "pagination": {
            "showPagination": true,
            "pagesize": [15, 30, 50, 100]
          }
        },
        "modulename": {
          "comTitle": {
            "isShow": true,
            "isShowImg": false,
            "name": "资讯"
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "el-icon-back",
            "name": "更多",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "250"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "250"
              }, {
                "pub_status": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 1,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 200,
          "infoImgHeight": 160,
          "onEvent": {
            "eventName": "showNavContent"
          },
          "pagination": {
            "showPagination": true,
            "pagesize": [15, 30, 50, 100]
          },
          "isMobileLoading": false,
          "toOrderByBtn": {
            "name": "排序：",
            "isShow": false,
            "itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
            "itemList": [{
              "name": "默认",
              "itemField": "pub_a_order asc pub_lastmodified desc id asc"
            }, {
              "name": "最新",
              "itemField": "pub_created asc id asc"
            }, {
              "name": "热门",
              "itemField": "pub_read_num asc id asc"
            }]
          },
          "staticText": {
            "noImg": "暂无图片",
            "noData": "暂无数据"
          },
          "showSearchBtn": true
        },
        "staticText": {
          "noImg": "暂无图片",
          "noData": "暂无数据"
        }
      }
    },
    "crumbs": {
      "work_crumbs_02": {
        "crumbs": {
          "getCols": {
            "url": "spc/cms/col/getAllColBySiteId",
            "type": "get",
            "params": {
              "siteId": "",
              "chId": "0"
            },
            "getGlobalParams": {
              "siteId": "siteId"
            },
            "keys": {
              "id": "id",
              "parentId": "parentId",
              "name": "name",
              "url": "url"
            }
          },
          "startCol": "0",
          "event": {
            "listenDetail": {
              "name": "listenInfoDetail",
              "keys": {
                "colId": "pub_col_id",
                "colName": "pub_col_name"
              }
            }
          }
        },
        "modulename": {
          "getCols": {
            "url": "spc/cms/col/getAllColBySiteId",
            "type": "get",
            "params": {
              "siteId": "",
              "chId": "0"
            },
            "getGlobalParams": {
              "siteId": "siteId"
            },
            "keys": {
              "id": "id",
              "parentId": "parentId",
              "name": "name",
              "url": "url"
            }
          },
          "startCol": "0",
          "event": {
            "listenDetail": {
              "name": "listenInfoDetail",
              "keys": {
                "colId": "pub_col_id",
                "colName": "pub_col_name"
              }
            }
          }
        }
      }
    }
  },
  "informationdetail": {
    "crumbs": {
      "work_crumbs_02": {
        "detail": {
          "getCols": {
            "url": "spc/cms/col/getAllColBySiteId",
            "type": "get",
            "params": {
              "siteId": "",
              "chId": "0"
            },
            "getGlobalParams": {
              "siteId": "siteId"
            },
            "keys": {
              "id": "id",
              "parentId": "parentId",
              "name": "name",
              "url": "url"
            }
          },
          "event": {
            "listenDetail": {
              "name": "listenInfoDetail",
              "keys": {
                "colId": "pub_col_id",
                "colName": "pub_col_name"
              }
            }
          }
        },
        "modulename": {
          "getCols": {
            "url": "spc/cms/col/getAllColBySiteId",
            "type": "get",
            "params": {
              "siteId": "",
              "chId": "0"
            },
            "getGlobalParams": {
              "siteId": "siteId"
            },
            "keys": {
              "id": "id",
              "parentId": "parentId",
              "name": "name",
              "url": "url"
            }
          },
          "startCol": "0",
          "event": {
            "listenDetail": {
              "name": "listenInfoDetail",
              "keys": {
                "colId": "pub_col_id",
                "colName": "pub_col_name"
              }
            }
          }
        }
      }
    }
  },
  "login": {
    "login": {
      "work_login_03": {
        "disBacks": ["register.html", "register_success.html", "forgetPassword.html", "login.html"],
        "indexPath": "./index.html",
        "thirdParty": {
          "topic": "社交账号登陆",
          "url": "auth/login.do?type=",
          "target": "_self",
          "showItem": [{
            "title": "QQ",
            "type": "QQ",
            "tag": "qq"
          }, {
            "title": "微信",
            "type": "WeiXin",
            "tag": "weixin"
          }, {
            "title": "微博",
            "type": "WeiBo",
            "tag": "weibo"
          }],
          "customShowItem": []
        },
        "staticText": {
          "loginSys": "登录",
          "inputUserName": "请输入用户名",
          "inputPwd": "请输入密码",
          "forgetPwd": "忘记密码",
          "noAccount": "还没有账号？",
          "signUpNow": "立即注册",
          "accountFrozenInfo": "账号已被冻结，请联系管理员",
          "loginFailed": "登录失败",
          "usernameAndPwdCannotBeEmpty": "用户名或密码不能为空",
          "accountAndPwdError": "账号或密码错误",
          "userNameCannotBeEmpty": "用户名不能为空",
          "pwdCannotBeEmpty": "密码不能为空",
          "inputCode": "请输入验证码",
          "codeFailed": "验证码输入错误",
          "unRegisterName": "账号未注册"
        },
        "isPC": "false",
        "checkUsername": {
          "url": "user/checkUserInfo.do",
          "params": {
            "checkText": "",
            "checkType": "1"
          }
        }
      }
    }
  },
  "findPassword": {
    "findPassword": {
      "work_findpassword_01": {
        "findPasswordUrl": "user/findPassword.do?email=",
        "setPasswordUrl": "user/setPassword1.do?email=",
        "href": "../pages/login.html",
        "checkMobileUrl": "user/checkExistMember.do",
        "sendMobileUrl": "user/sendMobileMessage.do",
        "setPasswordByMobileUrl": "user/findPasswordByMobile.do",
        "staticText": {
          "inputEmail": "输入邮箱",
          "inputEmailVerifiCode": "填写邮箱验证码",
          "updatePwd": "更改密码",
          "findSuccess": "找回完成",
          "email": "邮  箱",
          "pleaseInputEmail": "请输入邮箱",
          "verifiCode": "验证码",
          "pleaseInputVeirifiCode": "请输入验证码",
          "canNotSeeClearly": "看不清楚",
          "nextStep": "下一步",
          "emailVerifiCode": "邮箱验证码",
          "pleaseInputEmailVerifiCode": "请输入邮箱验证码",
          "submit": "提交",
          "verifiCodeInvalidInfo": "验证码已失效，请重新验证",
          "pleaseInputNewPwd": "请输入新密码",
          "pleaseConfirmNewPwd": "请确认新密码",
          "mailboxFormatIsIncorrect": "邮箱格式不正确",
          "verifiCodeError": "验证码输入错误！",
          "formatError": "格式错误，密码仅支持汉字、字母、数字、\"-\"、\"_\"的组合",
          "pleaseInputPwd": "请输入密码",
          "passwordAtLeastSixDigits": "密码至少为6位数",
          "passwordCanBeUpToSixTeenDigits": "密码最多为16位数",
          "pleaseInputPwdAgain": "请再次输入密码",
          "twoPwdsDoNotMatch": "两次密码输入不一致",
          "pleaseInputVerifiCode": "请输入验证码",
          "findByEmail": "通过邮箱找回",
          "findByMobilePhone": "通过手机找回",
          "mobilePhoneVerify": "手机验证",
          "pleaseInputPhoneNum": "请输入手机号",
          "sendVerifiCode": "发送验证码",
          "loading": "正在加载中...",
          "verifiCodeCorrectInfoAndInputNewPwd": "验证码输入正确，请重新设置密码",
          "verifiCodeIncorrectInfoAndRetry": "验证码输入错误，请重试",
          "sendSuccess": "发送成功",
          "internetTimeOut": "网络超时",
          "verifiCodeHasSentToYourEmailAndVerifyQuickly": "已发送验证码至您邮箱,请在2分钟内输入验证",
          "resetFailed": "重置失败",
          "pwdResetSuccess": "密码重置成功",
          "yes": "确定",
          "congratulations": "恭喜",
          "returnToLoginAfterThreeSeconds": "3秒后返回登录界面"
        }
      }
    }
  },
  "register": {
    "register": {
      "work_register_03": {
        "sendNum": {
          "url": "user/sendMobileMessage.do"
        },
        "showItem": ["bindEmail", "bindMobile"],
        "staticText": {
          "userRegister": "新用户注册",
          "userName": "用户名:",
          "userNameSupportCode": "支持6~16位数字、字母、下划线",
          "userExistInfo": "很抱歉，用户名已存在",
          "canUseInfo": "恭喜您!可以使用",
          "setNewPwd": "设置新密码:",
          "pwdSupportCode": "密码支持6-16位字符",
          "confirmPwd": "确认密码：",
          "inputPwdAgain": "请再次输入密码",
          "verifiCode": "验证码:",
          "inputVerifiCode": "请输入验证码",
          "changeAnotherPage": "换一张",
          "refreshInfo": "刷新",
          "nextStep": "下一步",
          "emailBind": "邮箱绑定",
          "phoneNumBind": "手机绑定",
          "email": "邮箱:",
          "inputEmailInfo": "请输入邮箱 email@mail.com",
          "registerNow": "立即注册",
          "phoneNum": "手机号:",
          "inputPhoneNum": "请输入手机号",
          "inputCorrectPhoneNum": "请输入正确手机号",
          "phoneNumBoundInfo": "手机号已被绑定",
          "inputPhoneVerifiCode": "请输入手机验证码",
          "yourEmailWillReceive": "您的邮箱将会收到一封",
          "verify": "验证",
          "mail": "邮件",
          "checkOutEmail": "请登录你的邮箱查看",
          "backToLogin": "返回登陆页",
          "pleaseInputUserName": "请输入用户名",
          "userNameFormatInfo": "请以字母开头，可以使用数字、字母、下划线，长度6到16位",
          "pwdFormatErrorInfo": "格式错误，密码仅支持汉字、字母、数字、\"-\"、\"_\"的组合",
          "pleaseInputPwd": "请输入密码",
          "pwdAtLeastSixDigits": "密码至少为6位数",
          "pwdCanBeUpToSixteenDigits": "密码最多为16位数",
          "twoPwdDoNotMatch": "两次输入密码不一致!",
          "verifiCodeInputError": "验证码输入错误！!",
          "verifiCodeError": "验证码错误",
          "inputTheCorrectPhoneNum": "请输入正确的手机号",
          "getVerifiCode": "获取验证码",
          "verifiCodeIsSending": "验证码发送中...",
          "sendSuccess": "发送成功",
          "networkTimeout": "网络超时",
          "registerFailed": "注册失败，",
          "phoneNumWasSuccessfullyBound": "手机号绑定成功",
          "congratulations": "恭喜",
          "yes": "确定",
          "returnToLoginAfterThreeSeconds": "3秒后返回登录界面",
          "requestFailed": "请求失败",
          "inputEmail": "请输入邮箱"
        }
      }
    }
  },
  "examCenter": {
    "ui_navigation": {
      "ui_navigation_09": {
        "nav": {
          "parentColId": "369",
          "componentTitle": {
            "isShow": true,
            "titleName": "课程列表"
          },
          "getComponentTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "369"
            }
          },
          "getColumnTree": {
            "url": "spc/cms/col/getAllColBySiteId.do"
          },
          "emitEvent": {
            "emitColumnInfo": "showNavContent"
          }
        },
        "modulename": {
          "parentColId": "369",
          "componentTitle": {
            "isShow": true,
            "titleName": "课程列表"
          },
          "getComponentTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "369"
            }
          },
          "getColumnTree": {
            "url": "spc/cms/col/getAllColBySiteId.do"
          },
          "emitEvent": {
            "emitColumnInfo": "columnInfo"
          }
        }
      }
    },
    "list_pic": {
      "list_pic_29": {
        "list": {
          "comTitle": {
            "isShow": false,
            "isShowImg": false,
            "name": "资讯"
          },
          "toMoreBtn": {
            "isShow": false,
            "iconClass": "el-icon-back",
            "name": "更多",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "250"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "1088"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 10,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/videoDetail.html",
            "dataKeys": {
              "pubId": "id",
              "resType": "pubResType"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 310,
          "infoImgHeight": 100,
          "onEvent": {
            "eventName": "",
            "onColumnInfo": "showNavContent"
          },
          "pagination": {
            "showPagination": true,
            "pagesize": [15, 30, 50, 100]
          },
          "isMobileLoading": false,
          "toOrderByBtn": {
            "name": "排序：",
            "isShow": false,
            "itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
            "itemList": [{
              "name": "默认",
              "itemField": "pub_a_order asc pub_lastmodified desc id asc"
            }, {
              "name": "最新",
              "itemField": "pub_created asc id asc"
            }, {
              "name": "热门",
              "itemField": "pub_read_num asc id asc"
            }]
          },
          "staticText": {
            "noImg": "暂无图片",
            "noData": "暂无数据",
            "noDate": "暂无日期",
            "yuan": "￥"
          },
          "showSearchBtn": true
        },
        "zhenti": {
          "comTitle": {
            "isShow": true,
            "isShowImg": false,
            "name": ""
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "",
            "name": "更多>>",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "1222"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "1222"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 10,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/realProblemDetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/realProblemList.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 200,
          "infoImgHeight": 160,
          "onEvent": {
            "eventName": "showNavContent",
            "onColumnInfo": ""
          },
          "pagination": {
            "showPagination": false,
            "pagesize": [15, 30, 50, 100]
          },
          "isMobileLoading": false,
          "toOrderByBtn": {
            "name": "排序：",
            "isShow": false,
            "itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
            "itemList": [{
              "name": "默认",
              "itemField": "pub_a_order asc pub_lastmodified desc id asc"
            }, {
              "name": "最新",
              "itemField": "pub_created asc id asc"
            }, {
              "name": "热门",
              "itemField": "pub_read_num asc id asc"
            }]
          },
          "staticText": {
            "noImg": "暂无图片",
            "noData": "暂无数据",
            "noDate": "暂无日期",
            "yuan": "￥"
          },
          "showSearchBtn": false
        },
        "modulename": {
          "comTitle": {
            "isShow": true,
            "isShowImg": false,
            "name": "资讯"
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "el-icon-back",
            "name": "更多",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "250"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "250"
              }, {
                "pub_status": "1"
              }, {
                "pub_parent_id": "0"
              }, {
                "BOOK_BOOK_CASCADID": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 1,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 200,
          "infoImgHeight": 160,
          "onEvent": {
            "eventName": "showNavContent",
            "onColumnInfo": "columnInfo"
          },
          "pagination": {
            "showPagination": true,
            "pagesize": [15, 30, 50, 100]
          },
          "isMobileLoading": false,
          "toOrderByBtn": {
            "name": "排序：",
            "isShow": false,
            "itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
            "itemList": [{
              "name": "默认",
              "itemField": "pub_a_order asc pub_lastmodified desc id asc"
            }, {
              "name": "最新",
              "itemField": "pub_created asc id asc"
            }, {
              "name": "热门",
              "itemField": "pub_read_num asc id asc"
            }]
          },
          "staticText": {
            "noImg": "暂无图片",
            "noData": "暂无数据",
            "noDate": "暂无日期",
            "yuan": "￥"
          },
          "showSearchBtn": true
        }
      }
    },
    "navigation": {
      "navigation_05": {
        "nav": {
          "colId": 369,
          "comTitle": {
            "isShow": true,
            "name": "课程列表"
          },
          "showChildren": true,
          "showThreeColumn": true,
          "broadcastName": "showNavContent",
          "transTitle": "transNavTitle",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          },
          "broadcastEventName": {
            "transCol": "listenInfoDetail",
            "transTitle": "listenTitle",
            "keys": {
              "colId": "pub_col_id"
            }
          },
          "directLink": {
            "switchFlag": false,
            "directRules": {
              "1118": "../pages/newslistsnxw?colId=",
              "1119": "../pages/newslistyjxw?colId=",
              "1120": "../pages/newslistzcfg?colId=",
              "1121": "../pages/newslisttpxw?colId=",
              "1122": "../pages/newslistspjx?colId="
            }
          }
        },
        "moduleName": {
          "colId": 0,
          "comTitle": {
            "isShow": true,
            "name": "华育动态新闻"
          },
          "showChildren": true,
          "showThreeColumn": false,
          "broadcastName": "showNavContent",
          "transTitle": "transNavTitle",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 33,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          },
          "broadcastEventName": {
            "transCol": "listenInfoDetail",
            "transTitle": "listenTitle",
            "keys": {
              "colId": "pub_col_id"
            }
          },
          "directLink": {
            "switchFlag": false,
            "directRules": {
              "1118": "../pages/newslistsnxw?colId=",
              "1119": "../pages/newslistyjxw?colId=",
              "1120": "../pages/newslistzcfg?colId=",
              "1121": "../pages/newslisttpxw?colId=",
              "1122": "../pages/newslistspjx?colId="
            }
          }
        },
        "modulename": {
          "colId": 245,
          "comTitle": {
            "isShow": true,
            "name": "华育动态新闻"
          },
          "showChildren": false,
          "broadcastName": "showNavContent",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          },
          "broadcastEventName": {
            "transCol": "listenInfoDetail",
            "keys": {
              "colId": "pub_col_id"
            }
          }
        }
      }
    }
  },
  "courseDetail": {
    "bookreview": {
      "bookreview_01": {
        "queryComments": {
          "url": "comment/comments.do",
          "params": {
            "pubId": "",
            "pageIndex": 1,
            "pageSize": 15,
            "siteId": 33
          }
        },
        "addComment": {
          "url": "comment/addComment.do",
          "params": {
            "pubId": "",
            "loginName": "",
            "content": "",
            "starNum": 0,
            "deviceName": "pc",
            "colId": "",
            "siteId": 33,
            "type": "1",
            "parentId": "0",
            "activityId": ""
          }
        },
        "pagination": {
          "showPagination": true,
          "pagesize": [15, 30, 50, 100]
        },
        "operList": {
          "review": {
            "reviewShow": true,
            "toReviewInfoUrl": "../pages/reviewDetail.html"
          },
          "like": {
            "likeShow": true
          }
        },
        "orReGetMenberName": true,
        "toAddReview": {
          "toAddReviewShow": true,
          "toAddReviewName": "评论",
          "toAddReviewUrl": "../pages/reviewPublish.html"
        },
        "staticText": {
          "comments": "评论",
          "noHeadPicture": "暂无头像",
          "noComments": "暂无评论",
          "commentsEmptyInfo": "评论内容不能为空",
          "pleaseGradeBeforeSubmitting": "请先评分再提交评论~",
          "commentAddFailed": "评论添加失败"
        }
      }
    },
    "work_bookdetail": {
      "work_bookdetail_04": {
        "courseTop": {
          "getResourceDetail": {
            "url": "resource/detail.do",
            "params": {
              "pubId": "",
              "loginName": "",
              "attachTypes": "video"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter",
            "complicatedItem": {
              "one": [{
                "name": "img",
                "field": "picBig",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "title",
                "field": "courseTitle",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "lecturer",
                "field": "lecturer",
                "display": "讲师：",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "price",
                "field": "coursePrice",
                "display": "原价：",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "price",
                "field": "courseSalePrice",
                "display": "现价：",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "addcart",
                "field": "",
                "display": "购买",
                "method": "addCart",
                "className": ""
              }],
              "two": [{
                "name": "collect",
                "field": "",
                "display": "收藏",
                "method": "collectOrLike",
                "className": "fas fa-star"
              }, {
                "name": "share",
                "field": "",
                "display": "分享",
                "method": "",
                "className": "fa fa-share-alt"
              }],
              "three": [{
                "name": "",
                "field": "",
                "display": "产品详情",
                "method": "",
                "className": ""
              }],
              "four": [{
                "name": "groupVideoDesc",
                "field": "groupVideoDesc",
                "display": "课程介绍：",
                "method": "",
                "className": ""
              }]
            }
          },
          "toProbation": {
            "url": "../../../reader/kspdf/read.jsp",
            "dataKeys": {
              "bookId": "resId",
              "bookName": "resName"
            },
            "fixedKeys": {
              "siteType": 0,
              "readType": 0
            }
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": false,
            "reviewShow": false,
            "tabList": ["详情", "评论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": false,
            "showPublicize": ["前言", "内容简介", "目录"]
          },
          "getAudioAttachment": {
            "url": "resource/detail.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "siteId": 33,
              "attachTypes": "audio"
            },
            "isShowAudio": false
          },
          "addCart": {
            "url": "cart/addCart.do",
            "params": {
              "number": "",
              "loginName": "",
              "activityId": 0,
              "pubId": "",
              "siteId": 33
            }
          },
          "collectOrLike": {
            "url": "collection/addCollect.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "operateType": 0,
              "productId": "",
              "siteId": 33
            }
          },
          "toReviewList": {
            "url": "../pages/reviewlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "bookContentType": {
            "bookType": "91",
            "ebookType": "94"
          },
          "getPubidByLocationQueryFromSyk": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "queryParams": {
              "title": "BOOK_SYS_TOPIC"
            }
          },
          "staticText": {
            "noImg": "暂无图片",
            "noResource": "暂无",
            "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
            "systemPrompt": "系统提示",
            "OK": "确定",
            "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
            "noEBookInfo": "该书没有对应电子书，无法加入购物车",
            "noDate": "暂无日期",
            "yuan": "￥"
          }
        },
        "modulename": {
          "getResourceDetail": {
            "url": "book/getBookDetail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "bookAdapter",
            "complicatedItem": {
              "one": [{
                "name": "",
                "field": "",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }],
              "two": [{
                "name": "",
                "field": "",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }]
            }
          },
          "toProbation": {
            "url": "../../../reader/kspdf/read.jsp",
            "dataKeys": {
              "bookId": "resId",
              "bookName": "resName"
            },
            "fixedKeys": {
              "siteType": 0,
              "readType": 0
            }
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toBuy": {
            "url": "../pages/bookBuy.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": true,
            "reviewShow": true,
            "tabList": ["详情", "评论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": true,
            "showPublicize": ["前言", "内容简介", "目录"]
          },
          "getAudioAttachment": {
            "url": "resource/detail.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "siteId": 33,
              "attachTypes": "audio"
            },
            "isShowAudio": true
          },
          "addCart": {
            "url": "cart/addCart.do",
            "params": {
              "number": "",
              "loginName": "",
              "activityId": 0,
              "pubId": "",
              "siteId": 33
            }
          },
          "collectOrLike": {
            "url": "collection/addCollect.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "operateType": 0,
              "productId": "",
              "siteId": 33
            }
          },
          "toReviewList": {
            "url": "../pages/reviewlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "bugButton": {
            "display": "立即购买",
            "method": "toBuy",
            "display1": "加入书架",
            "method1": "toBuy",
            "display2": "开始阅读",
            "method2": "toProbation"
          },
          "bookContentType": {
            "bookType": "91",
            "ebookType": "94"
          },
          "getPubidByLocationQueryFromSyk": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "queryParams": {
              "title": "BOOK_SYS_TOPIC"
            }
          },
          "staticText": {
            "noImg": "暂无图片",
            "noResource": "暂无",
            "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
            "systemPrompt": "系统提示",
            "OK": "确定",
            "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
            "noEBookInfo": "该书没有对应电子书，无法加入购物车",
            "noDate": "暂无日期",
            "yuan": "￥"
          },
          "combinateProductCfg": {
            "show": true,
            "title": "组合购买",
            "lastBtn": "加入购物车",
            "addCart": {
              "url": "cart/addCombinateProductToCart.do",
              "params": {
                "loginName": "",
                "siteId": 37,
                "combinateId": ""
              }
            },
            "toDetail": {
              "url": "booldetail.html",
              "params": {}
            }
          }
        }
      }
    },
    "share": {
      "ui_share_01": {
        "courseTopshare": {
          "shareLists": [{
            "title": "更多",
            "class": "bds_more",
            "cmd": "more"
          }, {
            "title": "分享到腾讯微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到QQ好友",
            "class": "bds_sqq",
            "cmd": "sqq"
          }, {
            "title": "分享到微信",
            "class": "bds_weixin",
            "cmd": "weixin"
          }]
        },
        "modulename": {
          "shareLists": [{
            "title": "更多",
            "class": "bds_more",
            "cmd": "more"
          }, {
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到新浪微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "分享到腾讯微博",
            "class": "bds_tqq",
            "cmd": "tqq"
          }, {
            "title": "分享到人人网",
            "class": "bds_renren",
            "cmd": "renren"
          }]
        }
      }
    },
    "list_pic": {
      "list_pic_36": {
        "courseBtm": {
          "display": {
            "courseContain": "本课程包含内容：",
            "courseName": "",
            "symbol": "、"
          },
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": [{
              "pub_parent_id": ""
            }, {
              "pub_site_id": ""
            }],
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "10",
            "searchText": ""
          },
          "sysAdapter": "sykAdapter",
          "typeAdapter": "videoAdapter",
          "toPlayVideo": {
            "url": "../pages/videoPlay.html",
            "dataKeys": {
              "parentId": "parentId",
              "id": "id"
            },
            "fixedKeys": {}
          },
          "maxNum": 10,
          "pageSizes": [10, 30, 50, 100]
        },
        "modulename": {
          "display": {
            "courseContain": "课程包含内容：",
            "courseName": "课程名称",
            "symbol": "、"
          },
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": "[{pub_parent_id:''}]",
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "10",
            "searchText": ""
          },
          "sysAdapter": "sykAdapter",
          "typeAdapter": "videoAdapter",
          "toDetail": {
            "url": "../pages/videoplay.html",
            "dataKeys": {
              "parentId": "parentId",
              "id": "id"
            },
            "fixedKeys": {}
          },
          "maxNum": 10,
          "pageSizes": [10, 30, 50, 100],
          "toPlayVideo": {
            "url": "../pages/videoplay.html",
            "dataKeys": {
              "parentId": "parentId",
              "id": "id"
            },
            "fixedKeys": {}
          }
        }
      }
    }
  },
  "coursePlay": {
    "work_videoplay": {
      "work_videoplay_01": {
        "play": {
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_parent_id": ""
              }, {
                "pub_site_id": "33"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter"
          },
          "complicatedItem": [{
            "name": "title",
            "field": "resName",
            "display": "",
            "method": ""
          }, {
            "name": "img",
            "field": "picMiddle",
            "display": "",
            "method": ""
          }],
          "playVideoUrl": "dynamicFile/stream.do?recordID=",
          "showVideoList": true,
          "queryParamsType": "url"
        },
        "modulename": {
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "1024"
              }, {
                "pub_site_id": ""
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter"
          },
          "complicatedItem": [{
            "name": "",
            "field": "resName",
            "display": "",
            "method": ""
          }],
          "playVideoUrl": "dynamicFile/stream.do?recordID=",
          "showVideoList": false,
          "queryParamsType": "url"
        },
        "videoplay": {
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_parent_id": ""
              }, {
                "pub_site_id": ""
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter"
          },
          "complicatedItem": [{
            "name": "",
            "field": "resName",
            "display": "",
            "method": ""
          }],
          "playVideoUrl": "dynamicFile/stream.do?recordID=",
          "showVideoList": true,
          "queryParamsType": "url"
        }
      }
    }
  },
  "realProblemList": {
    "list_pic": {
      "list_pic_29": {
        "zhentiList": {
          "comTitle": {
            "isShow": false,
            "isShowImg": false,
            "name": ""
          },
          "toMoreBtn": {
            "isShow": false,
            "iconClass": "el-icon-back",
            "name": "更多",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "1222"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "1222"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 20,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "time",
              "field": "created",
              "display": "",
              "method": ""
            }]
          },
          "toDetail": {
            "url": "../pages/realProblemDetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 200,
          "infoImgHeight": 160,
          "onEvent": {
            "eventName": "",
            "onColumnInfo": ""
          },
          "pagination": {
            "showPagination": true,
            "pagesize": [15, 30, 50, 100]
          },
          "isMobileLoading": false,
          "toOrderByBtn": {
            "name": "排序：",
            "isShow": false,
            "itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
            "itemList": [{
              "name": "默认",
              "itemField": "pub_a_order asc pub_lastmodified desc id asc"
            }, {
              "name": "最新",
              "itemField": "pub_created asc id asc"
            }, {
              "name": "热门",
              "itemField": "pub_read_num asc id asc"
            }]
          },
          "staticText": {
            "noImg": "暂无图片",
            "noData": "暂无数据",
            "noDate": "暂无日期",
            "yuan": "￥"
          },
          "showSearchBtn": false
        },
        "modulename": {
          "comTitle": {
            "isShow": true,
            "isShowImg": false,
            "name": "资讯"
          },
          "toMoreBtn": {
            "isShow": true,
            "iconClass": "el-icon-back",
            "name": "更多",
            "method": "toMore"
          },
          "display": {},
          "getSubTitle": {
            "url": "spc/cms/col/getColumnByIdForSite",
            "params": {
              "colId": "250"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "columnAdapter"
          },
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "250"
              }, {
                "pub_status": "1"
              }, {
                "pub_parent_id": "0"
              }, {
                "BOOK_BOOK_CASCADID": "1"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            },
            "startNum": 0,
            "maxNum": 1,
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["img", "button"],
            "complicatedItem": [{
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": "toDetail"
            }, {
              "name": "button",
              "field": "resName",
              "display": "",
              "method": "toDetail"
            }]
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 200,
          "infoImgHeight": 160,
          "onEvent": {
            "eventName": "showNavContent",
            "onColumnInfo": "columnInfo"
          },
          "pagination": {
            "showPagination": true,
            "pagesize": [15, 30, 50, 100]
          },
          "isMobileLoading": false,
          "toOrderByBtn": {
            "name": "排序：",
            "isShow": false,
            "itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
            "itemList": [{
              "name": "默认",
              "itemField": "pub_a_order asc pub_lastmodified desc id asc"
            }, {
              "name": "最新",
              "itemField": "pub_created asc id asc"
            }, {
              "name": "热门",
              "itemField": "pub_read_num asc id asc"
            }]
          },
          "staticText": {
            "noImg": "暂无图片",
            "noData": "暂无数据",
            "noDate": "暂无日期",
            "yuan": "￥"
          },
          "showSearchBtn": true
        }
      }
    }
  },
  "realProblemDetail": {
    "bookreview": {
      "bookreview_01": {
        "queryComments": {
          "url": "comment/comments.do",
          "params": {
            "pubId": "",
            "pageIndex": 1,
            "pageSize": 15,
            "siteId": 29
          }
        },
        "addComment": {
          "url": "comment/addComment.do",
          "params": {
            "pubId": "",
            "loginName": "",
            "content": "",
            "starNum": 0,
            "deviceName": "pc",
            "colId": "",
            "siteId": 29,
            "type": "1",
            "parentId": "0",
            "activityId": ""
          }
        },
        "pagination": {
          "showPagination": true,
          "pagesize": [15, 30, 50, 100]
        },
        "operList": {
          "review": {
            "reviewShow": true,
            "toReviewInfoUrl": "../pages/reviewDetail.html"
          },
          "like": {
            "likeShow": true
          }
        },
        "orReGetMenberName": true,
        "toAddReview": {
          "toAddReviewShow": true,
          "toAddReviewName": "评论",
          "toAddReviewUrl": "../pages/reviewPublish.html"
        },
        "staticText": {
          "comments": "评论",
          "noHeadPicture": "暂无头像",
          "noComments": "暂无评论",
          "commentsEmptyInfo": "评论内容不能为空",
          "pleaseGradeBeforeSubmitting": "请先评分再提交评论~",
          "commentAddFailed": "评论添加失败"
        }
      }
    },
    "work_bookdetail": {
      "work_bookdetail_04": {
        "examDetail": {
          "getResourceDetail": {
            "url": "book/getBookDetail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "bookAdapter",
            "complicatedItem": {
              "one": [{
                "name": "",
                "field": "",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }],
              "two": [{
                "name": "",
                "field": "",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }]
            }
          },
          "toProbation": {
            "url": "../../../reader/ebook/read.jsp",
            "dataKeys": {
              "bookId": "resId",
              "bookName": "resName"
            },
            "fixedKeys": {
              "siteType": 0,
              "readType": 0
            }
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toBuy": {
            "url": "../pages/bookBuy.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": true,
            "reviewShow": true,
            "tabList": ["详情", "评论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": true,
            "showPublicize": ["前言", "内容简介", "目录"]
          },
          "getAudioAttachment": {
            "url": "resource/detail.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "siteId": 29,
              "attachTypes": "audio"
            },
            "isShowAudio": false
          },
          "addCart": {
            "url": "cart/addCart.do",
            "params": {
              "number": "",
              "loginName": "",
              "activityId": 0,
              "pubId": "",
              "siteId": 29
            }
          },
          "collectOrLike": {
            "url": "collection/addCollect.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "operateType": 0,
              "productId": "",
              "siteId": 29
            }
          },
          "toReviewList": {
            "url": "../pages/reviewlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "bugButton": {
            "display": "立即购买",
            "method": "toBuy",
            "display1": "加入书架",
            "method1": "toBuy",
            "display2": "开始阅读",
            "method2": "toProbation"
          },
          "bookContentType": {
            "bookType": "91",
            "ebookType": "94"
          },
          "getPubidByLocationQueryFromSyk": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "queryParams": {
              "title": "BOOK_SYS_TOPIC"
            }
          },
          "staticText": {
            "noImg": "暂无图片",
            "noResource": "暂无",
            "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
            "systemPrompt": "系统提示",
            "OK": "确定",
            "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
            "noEBookInfo": "该书没有对应电子书，无法加入购物车",
            "noDate": "暂无日期",
            "yuan": "￥"
          }
        },
        "modulename": {
          "getResourceDetail": {
            "url": "book/getBookDetail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "bookAdapter",
            "complicatedItem": {
              "one": [{
                "name": "",
                "field": "",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }],
              "two": [{
                "name": "",
                "field": "",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }]
            }
          },
          "toProbation": {
            "url": "../../../reader/ebook/read.jsp",
            "dataKeys": {
              "bookId": "resId",
              "bookName": "resName"
            },
            "fixedKeys": {
              "siteType": 0,
              "readType": 0
            }
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toBuy": {
            "url": "../pages/bookBuy.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": true,
            "reviewShow": true,
            "tabList": ["详情", "评论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": true,
            "showPublicize": ["前言", "内容简介", "目录"]
          },
          "getAudioAttachment": {
            "url": "resource/detail.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "siteId": 29,
              "attachTypes": "audio"
            },
            "isShowAudio": true
          },
          "addCart": {
            "url": "cart/addCart.do",
            "params": {
              "number": "",
              "loginName": "",
              "activityId": 0,
              "pubId": "",
              "siteId": 29
            }
          },
          "collectOrLike": {
            "url": "collection/addCollect.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "operateType": 0,
              "productId": "",
              "siteId": 29
            }
          },
          "toReviewList": {
            "url": "../pages/reviewlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "bugButton": {
            "display": "立即购买",
            "method": "toBuy",
            "display1": "加入书架",
            "method1": "toBuy",
            "display2": "开始阅读",
            "method2": "toProbation"
          },
          "bookContentType": {
            "bookType": "91",
            "ebookType": "94"
          },
          "getPubidByLocationQueryFromSyk": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "queryParams": {
              "title": "BOOK_SYS_TOPIC"
            }
          },
          "staticText": {
            "noImg": "暂无图片",
            "noResource": "暂无",
            "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
            "systemPrompt": "系统提示",
            "OK": "确定",
            "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
            "noEBookInfo": "该书没有对应电子书，无法加入购物车",
            "noDate": "暂无日期",
            "yuan": "￥"
          }
        }
      }
    },
    "share": {
      "ui_share_01": {
        "modulename": {
          "shareLists": [{
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到新浪微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "分享到腾讯微博",
            "class": "bds_tqq",
            "cmd": "tqq"
          }, {
            "title": "分享到人人网",
            "class": "bds_renren",
            "cmd": "renren"
          }]
        }
      }
    }
  },
  "test323": {
    "work_onlineqa": {
      "work_onlineqa_01": {
        "qa": {
          "commitQuestion": {
            "url": "spc/prodb/saveItem.do",
            "params": {
              "doclibCode": "QUE_ANS",
              "dataMap": {
                "SYS_TOPIC": "",
                "REQUESTER": "",
                "QUES_CONTENT": ""
              }
            }
          },
          "queryQA": {
            "url": "spc/prodb/searchNL.do",
            "params": {
              "doclibCode": "QUE_ANS",
              "status": 0,
              "page": 0,
              "size": 2,
              "pageable": 1
            }
          },
          "pagination": {
            "pagesize": [2, 30, 50, 100]
          },
          "staticText": {
            "commit": "提交",
            "questioner": "提问人",
            "answer": "回答者",
            "loginFirst": "请您先登录",
            "noContent": "提问内容不得为空",
            "answerSuccess": "您已提问成功，待审核通过后显示。",
            "opFailed": "操作失败"
          }
        }
      }
    }
  },
  "onlineMes": {
    "work_onlineqa": {
      "work_onlineqa_01": {
        "qa": {
          "commitQuestion": {
            "url": "spc/prodb/saveItem.do",
            "params": {
              "doclibCode": "QUE_ANS",
              "dataMap": {
                "SYS_TOPIC": "",
                "REQUESTER": "",
                "QUES_CONTENT": ""
              }
            }
          },
          "queryQA": {
            "url": "spc/prodb/searchNL.do",
            "params": {
              "doclibCode": "QUE_ANS",
              "status": 0,
              "page": 0,
              "size": 20,
              "pageable": 1
            }
          },
          "pagination": {
            "pagesize": [20, 30, 50, 100]
          },
          "staticText": {
            "commit": "提交",
            "questioner": "提问人",
            "answer": "回答者",
            "loginFirst": "请您先登录",
            "noContent": "提问内容不得为空",
            "answerSuccess": "您已提问成功，待审核通过后显示。",
            "opFailed": "操作失败"
          }
        },
        "modulename": {
          "commitQuestion": {
            "url": "spc/prodb/saveItem.do",
            "params": {
              "doclibCode": "QUE_ANS",
              "dataMap": {
                "SYS_TOPIC": "",
                "REQUESTER": "",
                "QUES_CONTENT": ""
              }
            }
          },
          "queryQA": {
            "url": "spc/prodb/searchNL.do",
            "params": {
              "doclibCode": "QUE_ANS",
              "status": 0,
              "page": 0,
              "size": 2,
              "pageable": 1
            }
          },
          "pagination": {
            "pagesize": [2, 30, 50, 100]
          },
          "staticText": {
            "commit": "提交",
            "questioner": "提问人",
            "answer": "回答者",
            "loginFirst": "请您先登录",
            "noContent": "提问内容不得为空",
            "answerSuccess": "您已提问成功，待审核通过后显示。",
            "opFailed": "操作失败"
          }
        }
      }
    },
    "information": {
      "information_02": {
        "helpCenter": {
          "comTitle": {
            "isShow": false,
            "name": "资讯"
          },
          "display": {},
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "564"
              }, {
                "pub_status": "1"
              }],
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            }
          },
          "getResource": {
            "url": "spc/cms/publish/detail.do",
            "params": {
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["lastModifyDate", "createdDate", "content"],
            "complicatedItem": [{
              "name": "title",
              "field": "topic",
              "display": ""
            }, {
              "name": "content",
              "field": "content",
              "display": ""
            }]
          },
          "broadcastName": "showNavContent",
          "staticText": {
            "noDate": "暂无日期"
          }
        },
        "modulename": {
          "comTitle": {
            "isShow": true,
            "name": "资讯"
          },
          "display": {},
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "249"
              }, {
                "pub_status": "1"
              }],
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "15",
              "searchText": ""
            }
          },
          "getResource": {
            "url": "spc/cms/publish/detail.do",
            "params": {
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "newsAdapter",
            "showItem": ["lastModifyDate", "createdDate", "content"],
            "complicatedItem": [{
              "name": "title",
              "field": "topic",
              "display": ""
            }, {
              "name": "lastModifyDate",
              "field": "lastModified",
              "display": "最后修改"
            }, {
              "name": "createdDate",
              "field": "created",
              "display": "创建时间"
            }, {
              "name": "authors",
              "field": "authors",
              "display": "作者"
            }, {
              "name": "sort",
              "field": "colName",
              "display": "分类"
            }, {
              "name": "content",
              "field": "content",
              "display": ""
            }]
          },
          "broadcastName": "showNavContent",
          "staticText": {
            "noDate": "暂无日期"
          }
        }
      }
    }
  },
  "helpcenter": {
    "navigation": {
      "navigation_05": {
        "helpCenter": {
          "colId": 564,
          "comTitle": {
            "isShow": true,
            "name": "帮助中心"
          },
          "showChildren": true,
          "showThreeColumn": false,
          "broadcastName": "showNavContent",
          "transTitle": "transNavTitle",
          "transDefaultColId": "transDefaultColId",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 29,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          },
          "broadcastEventName": {
            "transCol": "listenInfoDetail",
            "transTitle": "listenTitle",
            "keys": {
              "colId": "pub_col_id"
            }
          },
          "directLink": {
            "switchFlag": true,
            "dierctWay": "_self",
            "directRules": {
              "567": "../pages/onlineMes.html?colId="
            }
          },
          "reverseByColId": false
        },
        "modulename": {
          "colId": 510,
          "comTitle": {
            "isShow": true,
            "name": "资料中心"
          },
          "showChildren": true,
          "showThreeColumn": false,
          "broadcastName": "showNavContent",
          "transTitle": "transNavTitle",
          "transDefaultColId": "transDefaultColId",
          "display": {},
          "getNavLists": {
            "url": "spc/cms/col/getAllColBySiteId.do",
            "params": {
              "siteId": 33,
              "chId": 0
            },
            "keys": {
              "parentId": "parentId",
              "id": "id",
              "name": "name"
            }
          },
          "broadcastEventName": {
            "transCol": "listenInfoDetail",
            "transTitle": "listenTitle",
            "keys": {
              "colId": "pub_col_id"
            }
          },
          "directLink": {
            "switchFlag": false,
            "dierctWay": "_blank",
            "directRules": {
              "1118": "../pages/newslistsnxw.html?colId=",
              "1119": "../pages/newslistyjxw.html?colId=",
              "1120": "../pages/newslistzcfg.html?colId=",
              "1121": "../pages/newslisttpxw.html?colId=",
              "1122": "../pages/newslistspjx.html?colId="
            }
          },
          "reverseByColId": false
        }
      }
    }
  },
  "videoPlay": {
    "work_videoplay": {
      "work_videoplay_01": {
        "play": {
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_parent_id": ""
              }, {
                "pub_site_id": "33"
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter"
          },
          "complicatedItem": [{
            "name": "title",
            "field": "resName",
            "display": "",
            "method": ""
          }, {
            "name": "img",
            "field": "picMiddle",
            "display": "",
            "method": ""
          }],
          "playVideoUrl": "dynamicFile/stream.do?recordID=",
          "showVideoList": true,
          "queryParamsType": "url"
        },
        "modulename": {
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_col_id": "1024"
              }, {
                "pub_site_id": ""
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter"
          },
          "complicatedItem": [{
            "name": "",
            "field": "resName",
            "display": "",
            "method": ""
          }],
          "playVideoUrl": "dynamicFile/stream.do?recordID=",
          "showVideoList": false,
          "queryParamsType": "url"
        },
        "videoplay": {
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [{
                "pub_parent_id": ""
              }, {
                "pub_site_id": ""
              }],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter"
          },
          "complicatedItem": [{
            "name": "",
            "field": "resName",
            "display": "",
            "method": ""
          }],
          "playVideoUrl": "dynamicFile/stream.do?recordID=",
          "showVideoList": true,
          "queryParamsType": "url"
        }
      }
    }
  },
  "videoDetail": {
    "list_pic": {
      "list_pic_36": {
        "videoBtm": {
          "display": {
            "courseContain": "本课程包含内容：",
            "courseName": "",
            "symbol": "、"
          },
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": [{
              "pub_parent_id": ""
            }, {
              "pub_site_id": ""
            }],
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "10",
            "searchText": ""
          },
          "sysAdapter": "sykAdapter",
          "typeAdapter": "videoAdapter",
          "toPlayVideo": {
            "url": "../pages/videoPlay.html",
            "dataKeys": {
              "parentId": "parentId",
              "id": "id"
            },
            "fixedKeys": {}
          },
          "maxNum": 10,
          "pageSizes": [10, 30, 50, 100]
        },
        "modulename": {
          "display": {
            "courseContain": "课程包含内容：",
            "courseName": "课程名称",
            "symbol": "、"
          },
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": "[{pub_parent_id:''}]",
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "10",
            "searchText": ""
          },
          "sysAdapter": "sykAdapter",
          "typeAdapter": "videoAdapter",
          "toDetail": {
            "url": "../pages/videoplay.html",
            "dataKeys": {
              "parentId": "parentId",
              "id": "id"
            },
            "fixedKeys": {}
          },
          "maxNum": 10,
          "pageSizes": [10, 30, 50, 100],
          "toPlayVideo": {
            "url": "../pages/videoplay.html",
            "dataKeys": {
              "parentId": "parentId",
              "id": "id"
            },
            "fixedKeys": {}
          }
        }
      }
    },
    "work_bookdetail": {
      "work_bookdetail_04": {
        "videoTop": {
          "getResourceDetail": {
            "url": "resource/detail.do",
            "params": {
              "pubId": "",
              "loginName": "",
              "attachTypes": "video"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter",
            "YINPINZU": { // 音频组
              "sysAdapter": "sykAdapter",
              "typeAdapter": "audioGroupAdapter",
            },
            "ZILIAOZU": { // 资料库
              "sysAdapter": "sykAdapter",
              "typeAdapter": "ziliaozu",
            },
            "GROUP_VIDEO": { // 视频组
              "sysAdapter": "sykAdapter",
              "typeAdapter": "videoAdapter",
            },
            "complicatedItem": {
              "one": [{
                "name": "img",
                "field": "picBig",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "resName",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "",
                "field": "lecturer",
                "display": "讲师：",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "price",
                "field": "salePrice",
                "display": "原价：",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "price",
                "field": "memberPrice",
                "display": "现价：",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "addcart",
                "field": "",
                "display": "购买",
                "method": "addCart",
                "className": ""
              }],
              "two": [{
                "name": "collect",
                "field": "",
                "display": "收藏",
                "method": "collectOrLike",
                "className": "fas fa-star"
              }, {
                "name": "share",
                "field": "",
                "display": "分享",
                "method": "",
                "className": "fa fa-share-alt"
              }],
              "three": [{
                "name": "",
                "field": "",
                "display": "产品详情",
                "method": "",
                "className": ""
              }],
              "four": [{
                "name": "",
                "field": "description",
                "display": "课程介绍：",
                "method": "",
                "className": ""
              }]
            }
          },
          "toProbation": {
            "url": "../../../reader/kspdf/read.jsp",
            "dataKeys": {
              "bookId": "resId",
              "bookName": "resName"
            },
            "fixedKeys": {
              "siteType": 0,
              "readType": 0
            }
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": false,
            "reviewShow": false,
            "tabList": ["详情", "评论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": false,
            "showPublicize": ["前言", "内容简介", "目录"]
          },
          "getAudioAttachment": {
            "url": "resource/detail.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "siteId": 33,
              "attachTypes": "audio"
            },
            "isShowAudio": false
          },
          "addCart": {
            "url": "cart/addCart.do",
            "params": {
              "number": "",
              "loginName": "",
              "activityId": 0,
              "pubId": "",
              "siteId": 33
            }
          },
          "collectOrLike": {
            "url": "collection/addCollect.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "operateType": 0,
              "productId": "",
              "siteId": 33
            }
          },
          "toReviewList": {
            "url": "../pages/reviewlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "bookContentType": {
            "bookType": "91",
            "ebookType": "94"
          },
          "getPubidByLocationQueryFromSyk": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "queryParams": {
              "title": "BOOK_SYS_TOPIC"
            }
          },
          "staticText": {
            "noImg": "暂无图片",
            "noResource": "暂无",
            "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
            "systemPrompt": "系统提示",
            "OK": "确定",
            "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
            "noEBookInfo": "该书没有对应电子书，无法加入购物车",
            "noDate": "暂无日期",
            "yuan": "￥"
          }
        },
        "modulename": {
          "getResourceDetail": {
            "url": "book/getBookDetail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "bookAdapter",
            "complicatedItem": {
              "one": [{
                "name": "",
                "field": "",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }],
              "two": [{
                "name": "",
                "field": "",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }]
            }
          },
          "toProbation": {
            "url": "../../../reader/kspdf/read.jsp",
            "dataKeys": {
              "bookId": "resId",
              "bookName": "resName"
            },
            "fixedKeys": {
              "siteType": 0,
              "readType": 0
            }
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toBuy": {
            "url": "../pages/bookBuy.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": true,
            "reviewShow": true,
            "tabList": ["详情", "评论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": true,
            "showPublicize": ["前言", "内容简介", "目录"]
          },
          "getAudioAttachment": {
            "url": "resource/detail.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "siteId": 33,
              "attachTypes": "audio"
            },
            "isShowAudio": true
          },
          "addCart": {
            "url": "cart/addCart.do",
            "params": {
              "number": "",
              "loginName": "",
              "activityId": 0,
              "pubId": "",
              "siteId": 33
            }
          },
          "collectOrLike": {
            "url": "collection/addCollect.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "operateType": 0,
              "productId": "",
              "siteId": 33
            }
          },
          "toReviewList": {
            "url": "../pages/reviewlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "bugButton": {
            "display": "立即购买",
            "method": "toBuy",
            "display1": "加入书架",
            "method1": "toBuy",
            "display2": "开始阅读",
            "method2": "toProbation"
          },
          "bookContentType": {
            "bookType": "91",
            "ebookType": "94"
          },
          "getPubidByLocationQueryFromSyk": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "queryParams": {
              "title": "BOOK_SYS_TOPIC"
            }
          },
          "staticText": {
            "noImg": "暂无图片",
            "noResource": "暂无",
            "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
            "systemPrompt": "系统提示",
            "OK": "确定",
            "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
            "noEBookInfo": "该书没有对应电子书，无法加入购物车",
            "noDate": "暂无日期",
            "yuan": "￥"
          },
          "combinateProductCfg": {
            "show": true,
            "title": "组合购买",
            "lastBtn": "加入购物车",
            "addCart": {
              "url": "cart/addCombinateProductToCart.do",
              "params": {
                "loginName": "",
                "siteId": 37,
                "combinateId": ""
              }
            },
            "toDetail": {
              "url": "booldetail.html",
              "params": {}
            }
          }
        }
      }
    },
    "bookreview": {
      "bookreview_01": {
        "queryComments": {
          "url": "comment/comments.do",
          "params": {
            "pubId": "",
            "pageIndex": 1,
            "pageSize": 15,
            "siteId": 33
          }
        },
        "addComment": {
          "url": "comment/addComment.do",
          "params": {
            "pubId": "",
            "loginName": "",
            "content": "",
            "starNum": 0,
            "deviceName": "pc",
            "colId": "",
            "siteId": 33,
            "type": "1",
            "parentId": "0",
            "activityId": ""
          }
        },
        "pagination": {
          "showPagination": true,
          "pagesize": [15, 30, 50, 100]
        },
        "operList": {
          "review": {
            "reviewShow": true,
            "toReviewInfoUrl": "../pages/reviewDetail.html"
          },
          "like": {
            "likeShow": true
          }
        },
        "orReGetMenberName": true,
        "toAddReview": {
          "toAddReviewShow": true,
          "toAddReviewName": "评论",
          "toAddReviewUrl": "../pages/reviewPublish.html"
        },
        "staticText": {
          "comments": "评论",
          "noHeadPicture": "暂无头像",
          "noComments": "暂无评论",
          "commentsEmptyInfo": "评论内容不能为空",
          "pleaseGradeBeforeSubmitting": "请先评分再提交评论~",
          "commentAddFailed": "评论添加失败"
        }
      }
    },
    "share": {
      "ui_share_01": {
        "courseTopshare": {
          "shareLists": [{
            "title": "更多",
            "class": "bds_more",
            "cmd": "more"
          }, {
            "title": "分享到腾讯微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到QQ好友",
            "class": "bds_sqq",
            "cmd": "sqq"
          }, {
            "title": "分享到微信",
            "class": "bds_weixin",
            "cmd": "weixin"
          }]
        },
        "modulename": {
          "shareLists": [{
            "title": "更多",
            "class": "bds_more",
            "cmd": "more"
          }, {
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到新浪微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "分享到腾讯微博",
            "class": "bds_tqq",
            "cmd": "tqq"
          }, {
            "title": "分享到人人网",
            "class": "bds_renren",
            "cmd": "renren"
          }]
        }
      }
    }
  },
  "coursewareDetail": {
    "bookreview": {
      "bookreview_01": {
        "queryComments": {
          "url": "comment/comments.do",
          "params": {
            "pubId": "",
            "pageIndex": 1,
            "pageSize": 15,
            "siteId": 33
          }
        },
        "addComment": {
          "url": "comment/addComment.do",
          "params": {
            "pubId": "",
            "loginName": "",
            "content": "",
            "starNum": 0,
            "deviceName": "pc",
            "colId": "",
            "siteId": 33,
            "type": "1",
            "parentId": "0",
            "activityId": ""
          }
        },
        "pagination": {
          "showPagination": true,
          "pagesize": [15, 30, 50, 100]
        },
        "operList": {
          "review": {
            "reviewShow": true,
            "toReviewInfoUrl": "../pages/reviewDetail.html"
          },
          "like": {
            "likeShow": true
          }
        },
        "orReGetMenberName": true,
        "toAddReview": {
          "toAddReviewShow": true,
          "toAddReviewName": "评论",
          "toAddReviewUrl": "../pages/reviewPublish.html"
        },
        "staticText": {
          "comments": "评论",
          "noHeadPicture": "暂无头像",
          "noComments": "暂无评论",
          "commentsEmptyInfo": "评论内容不能为空",
          "pleaseGradeBeforeSubmitting": "请先评分再提交评论~",
          "commentAddFailed": "评论添加失败"
        }
      }
    },
    "work_bookdetail": {
      "work_bookdetail_04": {
        "coursewareTop": {
          "getResourceDetail": {
            "url": "resource/detail.do",
            "params": {
              "pubId": "",
              "loginName": "",
              "attachTypes": "video"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "ziliaoku",
            "complicatedItem": {
              "one": [{
                "name": "img",
                "field": "picBig",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "title",
                "field": "sysTopic",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "lecturer",
                "field": "lecturer",
                "display": "讲师：",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "price",
                "field": "price",
                "display": "原价：",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "price",
                "field": "",
                "display": "现价：",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "addcart",
                "field": "",
                "display": "购买",
                "method": "addCart",
                "className": ""
              }],
              "two": [{
                "name": "collect",
                "field": "",
                "display": "收藏",
                "method": "collectOrLike",
                "className": "fas fa-star"
              }, {
                "name": "share",
                "field": "",
                "display": "分享",
                "method": "",
                "className": "fa fa-share-alt"
              }],
              "three": [{
                "name": "",
                "field": "",
                "display": "产品详情",
                "method": "",
                "className": ""
              }],
              "four": [{
                "name": "groupVideoDesc",
                "field": "groupVideoDesc",
                "display": "课程介绍：",
                "method": "",
                "className": ""
              }]
            }
          },
          "toProbation": {
            "url": "../../../reader/kspdf/read.jsp",
            "dataKeys": {
              "bookId": "resId",
              "bookName": "resName"
            },
            "fixedKeys": {
              "siteType": 0,
              "readType": 0
            }
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": false,
            "reviewShow": false,
            "tabList": ["详情", "评论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": false,
            "showPublicize": ["前言", "内容简介", "目录"]
          },
          "getAudioAttachment": {
            "url": "resource/detail.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "siteId": 33,
              "attachTypes": "audio"
            },
            "isShowAudio": false
          },
          "addCart": {
            "url": "cart/addCart.do",
            "params": {
              "number": "",
              "loginName": "",
              "activityId": 0,
              "pubId": "",
              "siteId": 33
            }
          },
          "collectOrLike": {
            "url": "collection/addCollect.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "operateType": 0,
              "productId": "",
              "siteId": 33
            }
          },
          "toReviewList": {
            "url": "../pages/reviewlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "bookContentType": {
            "bookType": "91",
            "ebookType": "94"
          },
          "getPubidByLocationQueryFromSyk": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "queryParams": {
              "title": "BOOK_SYS_TOPIC"
            }
          },
          "staticText": {
            "noImg": "暂无图片",
            "noResource": "暂无",
            "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
            "systemPrompt": "系统提示",
            "OK": "确定",
            "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
            "noEBookInfo": "该书没有对应电子书，无法加入购物车",
            "noDate": "暂无日期",
            "yuan": "￥"
          }
        },
        "modulename": {
          "getResourceDetail": {
            "url": "book/getBookDetail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "bookAdapter",
            "complicatedItem": {
              "one": [{
                "name": "",
                "field": "",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }],
              "two": [{
                "name": "",
                "field": "",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }]
            }
          },
          "toProbation": {
            "url": "../../../reader/kspdf/read.jsp",
            "dataKeys": {
              "bookId": "resId",
              "bookName": "resName"
            },
            "fixedKeys": {
              "siteType": 0,
              "readType": 0
            }
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toBuy": {
            "url": "../pages/bookBuy.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": true,
            "reviewShow": true,
            "tabList": ["详情", "评论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": true,
            "showPublicize": ["前言", "内容简介", "目录"]
          },
          "getAudioAttachment": {
            "url": "resource/detail.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "siteId": 33,
              "attachTypes": "audio"
            },
            "isShowAudio": true
          },
          "addCart": {
            "url": "cart/addCart.do",
            "params": {
              "number": "",
              "loginName": "",
              "activityId": 0,
              "pubId": "",
              "siteId": 33
            }
          },
          "collectOrLike": {
            "url": "collection/addCollect.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "operateType": 0,
              "productId": "",
              "siteId": 33
            }
          },
          "toReviewList": {
            "url": "../pages/reviewlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "bugButton": {
            "display": "立即购买",
            "method": "toBuy",
            "display1": "加入书架",
            "method1": "toBuy",
            "display2": "开始阅读",
            "method2": "toProbation"
          },
          "bookContentType": {
            "bookType": "91",
            "ebookType": "94"
          },
          "getPubidByLocationQueryFromSyk": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "queryParams": {
              "title": "BOOK_SYS_TOPIC"
            }
          },
          "staticText": {
            "noImg": "暂无图片",
            "noResource": "暂无",
            "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
            "systemPrompt": "系统提示",
            "OK": "确定",
            "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
            "noEBookInfo": "该书没有对应电子书，无法加入购物车",
            "noDate": "暂无日期",
            "yuan": "￥"
          },
          "combinateProductCfg": {
            "show": true,
            "title": "组合购买",
            "lastBtn": "加入购物车",
            "addCart": {
              "url": "cart/addCombinateProductToCart.do",
              "params": {
                "loginName": "",
                "siteId": 37,
                "combinateId": ""
              }
            },
            "toDetail": {
              "url": "booldetail.html",
              "params": {}
            }
          }
        }
      }
    },
    "share": {
      "ui_share_01": {
        "courseTopshare": {
          "shareLists": [{
            "title": "更多",
            "class": "bds_more",
            "cmd": "more"
          }, {
            "title": "分享到腾讯微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到QQ好友",
            "class": "bds_sqq",
            "cmd": "sqq"
          }, {
            "title": "分享到微信",
            "class": "bds_weixin",
            "cmd": "weixin"
          }]
        },
        "modulename": {
          "shareLists": [{
            "title": "更多",
            "class": "bds_more",
            "cmd": "more"
          }, {
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到新浪微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "分享到腾讯微博",
            "class": "bds_tqq",
            "cmd": "tqq"
          }, {
            "title": "分享到人人网",
            "class": "bds_renren",
            "cmd": "renren"
          }]
        }
      }
    }
  },
  "voiceDetail": {
    "bookreview": {
      "bookreview_01": {
        "queryComments": {
          "url": "comment/comments.do",
          "params": {
            "pubId": "",
            "pageIndex": 1,
            "pageSize": 15,
            "siteId": 33
          }
        },
        "addComment": {
          "url": "comment/addComment.do",
          "params": {
            "pubId": "",
            "loginName": "",
            "content": "",
            "starNum": 0,
            "deviceName": "pc",
            "colId": "",
            "siteId": 33,
            "type": "1",
            "parentId": "0",
            "activityId": ""
          }
        },
        "pagination": {
          "showPagination": true,
          "pagesize": [15, 30, 50, 100]
        },
        "operList": {
          "review": {
            "reviewShow": true,
            "toReviewInfoUrl": "../pages/reviewDetail.html"
          },
          "like": {
            "likeShow": true
          }
        },
        "orReGetMenberName": true,
        "toAddReview": {
          "toAddReviewShow": true,
          "toAddReviewName": "评论",
          "toAddReviewUrl": "../pages/reviewPublish.html"
        },
        "staticText": {
          "comments": "评论",
          "noHeadPicture": "暂无头像",
          "noComments": "暂无评论",
          "commentsEmptyInfo": "评论内容不能为空",
          "pleaseGradeBeforeSubmitting": "请先评分再提交评论~",
          "commentAddFailed": "评论添加失败"
        }
      }
    },
    "work_bookdetail": {
      "work_bookdetail_04": {
        "voiceTop": {
          "getResourceDetail": {
            "url": "resource/detail.do",
            "params": {
              "pubId": "",
              "loginName": "",
              "attachTypes": "video"
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "audioGroupAdapter",
            "complicatedItem": {
              "one": [{
                "name": "img",
                "field": "picBig",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "title",
                "field": "agSysTopic",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "lecturer",
                "field": "lecturer",
                "display": "讲师：",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "agPrice",
                "field": "agPrice",
                "display": "原价：",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "agSalePrice",
                "field": "agSalePrice",
                "display": "现价：",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }, {
                "name": "addcart",
                "field": "",
                "display": "购买",
                "method": "addCart",
                "className": ""
              }],
              "two": [{
                "name": "collect",
                "field": "",
                "display": "收藏",
                "method": "collectOrLike",
                "className": "fas fa-star"
              }, {
                "name": "share",
                "field": "",
                "display": "分享",
                "method": "",
                "className": "fa fa-share-alt"
              }],
              "three": [{
                "name": "",
                "field": "",
                "display": "产品详情",
                "method": "",
                "className": ""
              }],
              "four": [{
                "name": "agDescription",
                "field": "agDescription",
                "display": "课程介绍：",
                "method": "",
                "className": ""
              }]
            }
          },
          "toProbation": {
            "url": "../../../reader/kspdf/read.jsp",
            "dataKeys": {
              "bookId": "resId",
              "bookName": "resName"
            },
            "fixedKeys": {
              "siteType": 0,
              "readType": 0
            }
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": false,
            "reviewShow": false,
            "tabList": ["详情", "评论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": false,
            "showPublicize": ["前言", "内容简介", "目录"]
          },
          "getAudioAttachment": {
            "url": "resource/detail.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "siteId": 33,
              "attachTypes": "audio"
            },
            "isShowAudio": false
          },
          "addCart": {
            "url": "cart/addCart.do",
            "params": {
              "number": "",
              "loginName": "",
              "activityId": 0,
              "pubId": "",
              "siteId": 33
            }
          },
          "collectOrLike": {
            "url": "collection/addCollect.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "operateType": 0,
              "productId": "",
              "siteId": 33
            }
          },
          "toReviewList": {
            "url": "../pages/reviewlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "bookContentType": {
            "bookType": "91",
            "ebookType": "94"
          },
          "getPubidByLocationQueryFromSyk": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "queryParams": {
              "title": "BOOK_SYS_TOPIC"
            }
          },
          "staticText": {
            "noImg": "暂无图片",
            "noResource": "暂无",
            "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
            "systemPrompt": "系统提示",
            "OK": "确定",
            "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
            "noEBookInfo": "该书没有对应电子书，无法加入购物车",
            "noDate": "暂无日期",
            "yuan": "￥"
          }
        },
        "modulename": {
          "getResourceDetail": {
            "url": "book/getBookDetail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "bookAdapter",
            "complicatedItem": {
              "one": [{
                "name": "",
                "field": "",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }],
              "two": [{
                "name": "",
                "field": "",
                "display": "",
                "afterDisplay": "",
                "method": "",
                "className": ""
              }]
            }
          },
          "toProbation": {
            "url": "../../../reader/kspdf/read.jsp",
            "dataKeys": {
              "bookId": "resId",
              "bookName": "resName"
            },
            "fixedKeys": {
              "siteType": 0,
              "readType": 0
            }
          },
          "toDetail": {
            "url": "../pages/informationdetail.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toBuy": {
            "url": "../pages/bookBuy.html",
            "dataKeys": {
              "pubId": "id"
            },
            "fixedKeys": {}
          },
          "toMore": {
            "url": "../pages/informationlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "infoImgWidth": 320,
          "infoImgHeight": 220,
          "tabConfigList": {
            "tabShow": true,
            "reviewShow": true,
            "tabList": ["详情", "评论"],
            "tabActiveIndex": 0,
            "toAllReviewName": "查看全部评论",
            "toAllReviewMethod": {
              "method": "toReviewList"
            }
          },
          "getPublicizeInfo": {
            "url": "spc/prodb/publicize.do",
            "params": {
              "doclibCode": "BOOK",
              "docID": ""
            },
            "isShowPublicize": true,
            "showPublicize": ["前言", "内容简介", "目录"]
          },
          "getAudioAttachment": {
            "url": "resource/detail.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "siteId": 33,
              "attachTypes": "audio"
            },
            "isShowAudio": true
          },
          "addCart": {
            "url": "cart/addCart.do",
            "params": {
              "number": "",
              "loginName": "",
              "activityId": 0,
              "pubId": "",
              "siteId": 33
            }
          },
          "collectOrLike": {
            "url": "collection/addCollect.do",
            "params": {
              "loginName": "",
              "pubId": "",
              "operateType": 0,
              "productId": "",
              "siteId": 33
            }
          },
          "toReviewList": {
            "url": "../pages/reviewlist.html",
            "dataKeys": {
              "colId": "id"
            },
            "fixedKeys": {}
          },
          "bugButton": {
            "display": "立即购买",
            "method": "toBuy",
            "display1": "加入书架",
            "method1": "toBuy",
            "display2": "开始阅读",
            "method2": "toProbation"
          },
          "bookContentType": {
            "bookType": "91",
            "ebookType": "94"
          },
          "getPubidByLocationQueryFromSyk": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "queryParams": {
              "title": "BOOK_SYS_TOPIC"
            }
          },
          "staticText": {
            "noImg": "暂无图片",
            "noResource": "暂无",
            "quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
            "systemPrompt": "系统提示",
            "OK": "确定",
            "noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
            "noEBookInfo": "该书没有对应电子书，无法加入购物车",
            "noDate": "暂无日期",
            "yuan": "￥"
          },
          "combinateProductCfg": {
            "show": true,
            "title": "组合购买",
            "lastBtn": "加入购物车",
            "addCart": {
              "url": "cart/addCombinateProductToCart.do",
              "params": {
                "loginName": "",
                "siteId": 37,
                "combinateId": ""
              }
            },
            "toDetail": {
              "url": "booldetail.html",
              "params": {}
            }
          }
        }
      }
    },
    "share": {
      "ui_share_01": {
        "courseTopshare": {
          "shareLists": [{
            "title": "更多",
            "class": "bds_more",
            "cmd": "more"
          }, {
            "title": "分享到腾讯微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到QQ好友",
            "class": "bds_sqq",
            "cmd": "sqq"
          }, {
            "title": "分享到微信",
            "class": "bds_weixin",
            "cmd": "weixin"
          }]
        },
        "modulename": {
          "shareLists": [{
            "title": "更多",
            "class": "bds_more",
            "cmd": "more"
          }, {
            "title": "分享到QQ空间",
            "class": "bds_qzone",
            "cmd": "qzone"
          }, {
            "title": "分享到新浪微博",
            "class": "bds_tsina",
            "cmd": "tsina"
          }, {
            "title": "分享到腾讯微博",
            "class": "bds_tqq",
            "cmd": "tqq"
          }, {
            "title": "分享到人人网",
            "class": "bds_renren",
            "cmd": "renren"
          }]
        }
      }
    },
    "list_pic": {
      "list_pic_36": {
        "voiceBtm": {
          "display": {
            "courseContain": "本课程包含内容：",
            "courseName": "",
            "symbol": "、"
          },
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": [{
              "pub_parent_id": ""
            }, {
              "pub_site_id": ""
            }],
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "10",
            "searchText": ""
          },
          "sysAdapter": "sykAdapter",
          "typeAdapter": "audioGroupAdapter",
          "toPlayVideo": {
            "url": "../pages/voicePlay.html",
            "dataKeys": {
              "parentId": "parentId",
              "id": "id"
            },
            "fixedKeys": {}
          },
          "maxNum": 10,
          "pageSizes": [10, 30, 50, 100]
        },
        "modulename": {
          "display": {
            "courseContain": "课程包含内容：",
            "courseName": "课程名称",
            "symbol": "、"
          },
          "url": "spc/cms/publish/list.do",
          "params": {
            "conditions": "[{pub_parent_id:''}]",
            "groupBy": "pub_resource_id",
            "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
            "pageNo": "1",
            "pageSize": "10",
            "searchText": ""
          },
          "sysAdapter": "sykAdapter",
          "typeAdapter": "videoAdapter",
          "toDetail": {
            "url": "../pages/videoplay.html",
            "dataKeys": {
              "parentId": "parentId",
              "id": "id"
            },
            "fixedKeys": {}
          },
          "maxNum": 10,
          "pageSizes": [10, 30, 50, 100],
          "toPlayVideo": {
            "url": "../pages/videoplay.html",
            "dataKeys": {
              "parentId": "parentId",
              "id": "id"
            },
            "fixedKeys": {}
          }
        }
      }
    }
  }
}
