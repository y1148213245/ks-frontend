export default {
    name: "test",
    list_pic: {
        list_pic_30: {
            "adv": {
                display: { // vue template 固定显示内容

                },
                getResourceLists: { // 获取某一栏目下的数据列表
                    url: "spc/cms/publish/list.do",
                    params: {
                        conditions: "[{pub_col_id: 133}]",
                        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
                        pageNo: "1",
                        pageSize: "15",
                        searchText: "",
                    },
                    startNum: 1, // 从第几条开始取
                    maxNum: 4, // 取的条数
                    sysAdapter: "sykAdapter", // 系统字段
                    typeAdapter: "newsAdapter", // 类型字段
                },
                imgMaxWidth: 400, //图片最大宽度
                imgMaxHeight: 500, //图片最大高度
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
        }
    },
    information: {
        information_02: {
            // "information": {
            //     url: "spc/cms/publish/detail.do?pubId=5753",
            //     params: {
            //         loginName: ""
            //     },
            //     keys: {
            //         title: "information_SYS_TOPIC",
            //         author: "information_SYS_AUTHORS",
            //         createdDate: "information_SYS_CREATED",
            //         lastModifyDate: "information_SYS_LASTMODIFIED",
            //         sort: "pub_resource_type",
            //         content: "information_a_content"
            //     },
            //     showItem: ["author", "createdDate", "lastModifyDate", "sort"],
            //     display: {},
            //     broadcastName: "showNavContent",
            // }
            "information": {
                comTitle: {
                    isShow: true,
                    name: "资讯"
                },
                display: { // vue template 固定显示内容
                },
                getResource: { // 获取某一栏目下的数据列表
                    url: "spc/cms/publish/detail.do?pubId=5753",
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
            }
        }
    },
    navigation: {
        navigation_05: {
            "nav": {
                colId: 0,//以此节点为根元素
                comTitle: {
                    isShow: true,
                    name: "华育动态新闻"
                },
                showChildren: true,//如果有子导航，点击父导航是否展开  true展开，false发广播
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
                }
            }
        }
    }
}