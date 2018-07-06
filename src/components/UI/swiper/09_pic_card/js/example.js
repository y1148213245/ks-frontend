/**
 * Created by codingnuts on 2017/12/12.
 */

import component from "../cardSwiper.vue";


const name = component.name; // 组件标签名

const title = "卡片轮播组件"; // 组件title

const description = `卡片轮播,一次轮播一块,自动且循环`; // 组件描述信息

const dev = {
    swiper: {
        ui_swiper_09_card: {
            modulename: {
                comTitle: {
                    isShow: true,
                    isShowImg: false,
                    name: "资讯"
                },
                toMoreBtn: {
                    isShow: true, // 是否显示更多按钮
                    iconClass: "el-icon-back", // 更多按钮的图标
                    name: "更多",
                    method: 'toMore', // 方法名 要在下面配置
                },
                getSubTitle: { //获取栏目副标题
                    url: "spc/cms/col/getColumnByIdForSite",
                    params: {
                        colId: '250'
                    },
                    sysAdapter: "sykAdapter", // 系统字段
                    typeAdapter: "columnAdapter", // 类型字段
                },
                url: '/data/swiper_09_card_list.json',
                params: {
                    conditions: [{
                            pub_col_id: '250'
                        },
                        {
                            pub_status: '1'
                        }
                    ],
                    groupBy: "pub_resource_id",
                    orderBy: "pub_a_order asc pub_lastmodified desc id asc"
                },
                swiper: {
                    autoplay: 3000,
                    speed: 300,
                    loop: true,
                    isShowNav: false,
                    isShowPaging: false,
                    slidesPerView: 5,
                    spaceBetween: 55,
                    autoplayDisableOnInteraction: false, // 设置用户操作滑动后自动切换是否继续.false继续 true停止
                    simulateTouch: true, // 可鼠标拖动滑动
                },
                sysAdapter: "sykAdapter", // 系统字段
                typeAdapter: "magazineAdapter", // 类型字段
                complicatedItem: [{
                    name: 'img',
                    field: 'picBig',
                    display: '',
                    method: 'toDetail',
                }, {
                    name: 'button', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
                    field: 'resName', // 取什么字段
                    display: '', // 固定显示内容是什么
                    method: 'toDetail', // 方法名 要在下面配置
                }, ],
                toDetail: { // 去资讯详情页面
                    url: "../pages/magazine_info.html",
                    dataKeys: {
                        pubId: "id", // id是从适配器里对应的
                    },
                    fixedKeys: {}
                },
                staticText: {
                    noImg: "暂无图片"
                },
                onEvent: { // 接收的事件名称
                    eventName: 'showNavContent'
                }
            }
        }
    }
}

const prod = {
    swiper: {
        ui_swiper_09_card: {
            modulename: {
                comTitle: {
                    isShow: true,
                    isShowImg: false,
                    name: "资讯"
                },
                toMoreBtn: {
                    isShow: true, // 是否显示更多按钮
                    iconClass: "el-icon-back", // 更多按钮的图标
                    name: "更多",
                    method: 'toMore', // 方法名 要在下面配置
                },
                getSubTitle: { //获取栏目副标题
                    url: "spc/cms/col/getColumnByIdForSite",
                    params: {
                        colId: '250'
                    },
                    sysAdapter: "sykAdapter", // 系统字段
                    typeAdapter: "columnAdapter", // 类型字段
                },
                url: 'spc/cms/publish/list.do',
                params: {
                    conditions: [{
                            pub_col_id: '249'
                        },
                        {
                            pub_status: '1'
                        }
                    ],
                    groupBy: "pub_resource_id",
                    orderBy: "pub_a_order asc pub_lastmodified desc id asc"
                },
                swiper: {
                    autoplay: 3000,
                    speed: 300,
                    loop: true,
                    isShowNav: true,
                    isShowPaging: true,
                    slidesPerView: 3,
                    spaceBetween: 100,
                    autoplayDisableOnInteraction: false, // 设置用户操作滑动后自动切换是否继续.false继续 true停止
                    simulateTouch: true, // 可鼠标拖动滑动
                },
                sysAdapter: "sykAdapter", // 系统字段
                typeAdapter: "newsAdapter", // 类型字段
                complicatedItem: [{
                    name: 'img',
                    field: 'picBig',
                    display: '',
                    method: 'toDetail',
                }, {
                    name: 'button', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
                    field: 'resName', // 取什么字段
                    display: '', // 固定显示内容是什么
                    method: 'toDetail', // 方法名 要在下面配置
                }],
                toDetail: { // 去资讯详情页面
                    url: "../pages/magazine_info.html",
                    dataKeys: {
                        pubId: "id", // id是从适配器里对应的
                    },
                    fixedKeys: {}
                },
                staticText: {
                    noImg: "暂无图片"
                },
                onEvent: { // 接收的事件名称
                    eventName: 'showNavContent'
                }
            }
        }
    }
}

const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book', 'information', 'journal', 'vedio'];

export { name, title, dev, prod, description, platform, pageType, resourceType };