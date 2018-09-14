/*
 * @Author: zrn
 * @Date: 2018-09-14
 * 相关资源列表
 */

import component from "../resourceList.vue";

const name = component.name;  // 组件标签名

const title = "相关资源列表";  // 组件title

const description = `相关资源列表组件
    根据pub_resource_id获取相关资源id,再通过list.do接口查询资源信息
    1、金融PC书城,图书详情页中获取书摘和书评
    2、金融PC书城,书摘书评详情页中获取相关图书`;  // 组件描述信息

const dev = {
  list_pic: {
    ui_list_pic_resource_39: {
      "modulename":{
        title: {
          isShow: true,
          name: "书摘"
        },
        getResourceIds:{
          url: "../data/list_pic_id_39_data.json",
          params: {
            rootDocLibCode: "BOOK",
            destDocLibCode: "LIBRARY_COLLECTION",
            rootDocId: "",
            relationShip: "2",
            split: " OR "
          }
        },
        getResourceLists: { // 获取某一资源关联的数据列表
          url: "../data/list_pic_resource_list_39_data.json",
          params: {
            conditions: [{
                pub_col_id: '250'
              },
              {
                pub_status: '1'
              }
            ],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "2",
            searchText: "",
          },
          startNum: 0, // 从第几条开始取
          maxNum: 2, // 取到第几条
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "libraryCollectionAdapter", // 类型字段
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
        toDetail: { // 去详情页面
            url: "https://www.baidu.com",
            dataKeys: {
                pubId: "id", // id是从适配器里对应的
                rootDocId: "resId"
            },
            fixedKeys: {}
        },
        pagination: { // 分页信息
            showPagination: true, // 是否显示分页
            pagesize: [2] // 如何分页
        },
        staticText : {
          noDate: "暂无日期",
          errorMsg: "查询失败",
          errorMsg1: "查询失败"
        }
      }
    }
  }
};

const prod = {
  list_pic: {
    ui_list_pic_resource_39: {
      "modulename":{
        getResourceIds:{
          url: "spc/prodb/getNPDestDoc.do",
          params:{
            rootDocLibCode: "BOOK",
            destDocLibCode: "LIBRARY_COLLECTION",
            rootDocId: "",
            relationShip: "2",
            split: " OR "
          }
        },
        getResourceLists: { // 获取某一资源关联的数据列表
          url: "spc/cms/publish/list.do",
          params: {
            conditions: [{
                pub_col_id: '250'
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
          typeAdapter: "libraryCollectionAdapter", // 类型字段
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
        toDetail: { // 去详情页面
          url: "https://www.baidu.com",
          dataKeys: {
              pubId: "id", // id是从适配器里对应的
              rootDocId: "resId"
          },
          fixedKeys: {}
        },
        pagination: { // 分页信息
            showPagination: true, // 是否显示分页
            pagesize: [2] // 如何分页
        },
        staticText : {
          noDate: "暂无日期"
        }
      }
    }
  }
};

const platform = 'PC';
const pageType = [];
const resourceType = [];

export {name, title, dev, prod, description, platform, pageType, resourceType};
