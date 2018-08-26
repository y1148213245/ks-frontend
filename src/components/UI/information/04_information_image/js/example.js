/*  图片详情组件  Created by zrn 2018/06/22  */
import component from "../informationdetail.vue";

const name = component.name; // 组件标签名

const title = "图片详情组件"; // 组件title

const description = `图片详情组件
18/08/24 新增详情加载完成事件,默认事件名为'resourceDetailLoaded'
`; // 组件描述信息

const dev = {
    information: {
        ui_information_image_04: {
            'modulename': {
                getResourceDetail: {
                    url: "../data/04_detail.json",
                    params: {
                        pubId: "",
                        loginName: "",
                        siteId: "",
                        attachTypes: "MATERIAL-PIC"
                    },
                    sysAdapter: "sykAdapter", // 系统字段
                    typeAdapter: "imageAdapter", // 类型字段
                    complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
                        name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 time 时间、 img 图片都属于复杂项，需要填写name的值）
                        field: 'picBig', // 取什么字段
                        display: '', // 固定显示内容是什么
                        method: '', // 方法名 要在下面配置
                        className: ""
                    }, {
                        name: 'button',
                        field: 'resName',
                        display: '',
                        method: '', // 方法名 要在下面配置
                        className: ""
                    }, {
                        name: 'button',
                        field: '',
                        display: '下载原图',
                        method: '', // 方法名 要在下面配置
                        className: "download-image"
                    }, {
                        name: 'button',
                        field: 'resName',
                        display: '图片名称：',
                        method: '',
                        className: ""
                    }, {
                        name: 'button',
                        field: 'id',
                        display: '图片ID：',
                        method: '',
                        className: ""
                    }, {
                        name: 'button',
                        field: 'authors',
                        display: '图片作者：',
                        method: '',
                        className: ""
                    }, {
                        name: 'fileSize',
                        field: 'picFileSize',
                        display: '图片大小：',
                        method: '',
                        className: ""
                    }, {
                        name: 'button',
                        field: 'picCat',
                        display: '图片分类：',
                        method: '',
                        className: ""
                    }, {
                        name: 'button',
                        field: 'format',
                        display: '图片格式：',
                        method: '',
                        className: ""
                    }, {
                        name: 'button',
                        field: 'keyWords',
                        display: '关键字：',
                        method: '',
                        className: ""
                    }, {
                        name: 'button',
                        field: 'picDesc',
                        display: '图片说明：',
                        method: '',
                        className: ""
                    }]
                }
            }
        }
    }
}

const prod = {
    information: {
        ui_information_image_04: {
            'modulename': {
                getResourceDetail: {
                    url: "resource/detail.do",
                    params: {
                        pubId: "",
                        loginName: "",
                        siteId: "",
                        attachTypes: "MATERIAL-PIC"
                    },
                    sysAdapter: "sykAdapter", // 系统字段
                    typeAdapter: "imageAdapter", // 类型字段
                    complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
                        name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 time 时间、 img 图片都属于复杂项，需要填写name的值）
                        field: 'picBig', // 取什么字段
                        display: '', // 固定显示内容是什么
                        method: '', // 方法名 要在下面配置
                        className: ""
                    }, {
                        name: 'button',
                        field: 'resName',
                        display: '',
                        method: '', // 方法名 要在下面配置
                        className: ""
                    }, {
                        name: 'button',
                        field: '',
                        display: '下载原图',
                        method: '', // 方法名 要在下面配置
                        className: "download-image"
                    }, {
                        name: 'button',
                        field: 'resName',
                        display: '图片名称：',
                        method: '',
                        className: ""
                    }, {
                        name: 'button',
                        field: 'id',
                        display: '图片ID：',
                        method: '',
                        className: ""
                    }, {
                        name: 'button',
                        field: 'authors',
                        display: '图片作者：',
                        method: '',
                        className: ""
                    }, {
                        name: 'fileSize',
                        field: 'picFileSize',
                        display: '图片大小：',
                        method: '',
                        className: ""
                    }, {
                        name: 'button',
                        field: 'picCat',
                        display: '图片分类：',
                        method: '',
                        className: ""
                    }, {
                        name: 'button',
                        field: 'format',
                        display: '图片格式：',
                        method: '',
                        className: ""
                    }, {
                        name: 'button',
                        field: 'keyWords',
                        display: '关键字：',
                        method: '',
                        className: ""
                    }, {
                        name: 'button',
                        field: 'picDesc',
                        display: '图片说明：',
                        method: '',
                        className: ""
                    }],
                    event_loadedName:'resourceDetailLoaded'//详情加载完触发的事件名
                }
            }
        }
    }
}

const platform = 'PC';
const pageType = ["detail"];
const resourceType = ["others"];

const childComponents = [];

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