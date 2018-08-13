/**
 * created by song 2017/12/21
 * 个人中心的配置文件 放请求的url、params...
 */
import component from "../personalCenter.vue";

const name = component.name; // 组件标签名

const title = "个人中心组件"; // 组件title

const description = `个人中心`; // 组件描述信息

const dev = {
  personalcenter: {
    personalcenter_01: {
      navList: [{
          title: "我的帐号",
          icon: "el-icon-edit",
          tag: "account"
        },
        {
          title: "我的订单",
          icon: "el-icon-goods",
          tag: "list"
        },
        {
          title: "我的书架",
          icon: "el-icon-tickets",
          tag: "book"
        },
        {
          title: "收藏夹",
          icon: "el-icon-star-on",
          tag: "collecting"
        },
        {
          title: "我的积分",
          icon: "el-icon-news",
          tag: "point"
        },
        {
          title: "售后记录",
          icon: "el-icon-service",
          tag: "afterservice"
        },
        {
          title: "我的优惠券",
          icon: "el-icon-menu",
          tag: "coupon"
        },
        {
          title: "随手记",
          icon: "el-icon-edit-outline",
          tag: "note"
        }
      ],
      subConfig: {
        'account': {
          getMobileCode: {
            url: 'user/sendMobileMessage.do' /* /user/sendToMobile.do 文联用  user/sendMobileMessage.do 华育用 */
          }
        },
        'collection': { // 收藏的tab切换
          tabListShow: [{
            title: '电子书',
            type: 94
          }, {
            title: '纸质书',
            type: 91
          }]
        },
        'list': {
          exchangeState: false, //是否展示退换货功能
          KDNConfig: false, //是否展示物流信息
          tabListShow: [{
              title: '图书',
              type: 94
            }, {
              title: '期刊',
              type: 91
            },
            {
              title: "知识服务",
              type: 11
            }
          ]
        },
        "afterservice": {
          tabStateShow: [{
              title: '全部状态',
              type: ""
            }, {
              title: '处理中',
              type: "1"
            },
            {
              title: "待您邮寄",
              type: "2"
            },
            {
              title: "退款中",
              type: "3"
            },
            {
              title: "已完成",
              type: "4"
            },
            {
              title: "不同意退货",
              type: "5"
            },
            {
              title: "不同意退款",
              type: "6"
            },
            {
              title: "已取消",
              type: "7"
            }
          ],
          tabTypeShow: [{
              title: '全部订单',
              type: ""
            }, {
              title: '退货订单',
              type: "1"
            },
            {
              title: "换货订单",
              type: "2"
            }
          ],
          courierOptions: [{
              value: "中通",
              label: "中通"
            },
            {
              value: "圆通",
              label: "圆通"
            },
            {
              value: "顺丰",
              label: "顺丰"
            },
            {
              value: "EMS",
              label: "EMS"
            }
          ],
          feedback: { // 建议反馈的提交地址及传参字段
            submitUrl: "spc/prodb/saveItem.do", // 提交接口
            feedbackkeys: "QUE_CONTENT", // 建议反馈提交的key值 字段需到对应库中查询
            params: {
              "doclibCode": "QUE_ANS", // 对应文档库
              "metaMap": {}
            }
          },
          samplebook:{  // 申领数据配置
            getListUrl:"spc/prodb/searchNL.do", //获取数据的列表
            doclibCode:"",              //文档库码  必须
            pageIndex:"1",            //页码
            pageSize:"10"               //每页显示
          }
        }
      }
    }
  }
};

const prod = {
  personalcenter: {
    personalcenter_01: {
      navList: [{
          title: "我的帐号",
          icon: "el-icon-edit",
          tag: "account"
        },
        {
          title: "我的订单",
          icon: "el-icon-goods",
          tag: "list"
        },
        {
          title: "我的书架",
          icon: "el-icon-tickets",
          tag: "book"
        },
        {
          title: "收藏夹",
          icon: "el-icon-star-on",
          tag: "collecting"
        },
        {
          title: "我的积分",
          icon: "el-icon-news",
          tag: "point"
        },
        {
          title: "售后记录",
          icon: "el-icon-service",
          tag: "afterservice"
        },
        {
          title: "我的优惠券",
          icon: "el-icon-menu",
          tag: "coupon"
        },
        {
          title: "随手记",
          icon: "el-icon-edit-outline",
          tag: "note"
        }
      ],
      subConfig: {
        'account': {
          getMobileCode: {
            url: 'user/sendMobileMessage.do' /* /user/sendToMobile.do 文联用  user/sendMobileMessage.do 华育用 */
          }
        },
        'collection': { // 收藏的tab切换
          tabListShow: [{
            title: '电子书',
            type: 94
          }, {
            title: '纸质书',
            type: 91
          }]
        },
        feedback: { // 建议反馈的提交地址及传参字段
          submitUrl: "spc/prodb/saveItem.do", // 提交接口
          feedbackkeys: "QUE_CONTENT", // 建议反馈提交的key值 字段需到对应库中查询
          params: {
            "doclibCode": "QUE_ANS", // 对应文档库
            "metaMap": {}
          }
        },
        samplebook:{  // 申领数据配置
          getListUrl:"spc/prodb/searchNL.do", //获取数据的列表
          doclibCode:"",              //文档库码  必须
          pageIndex:"1",            //页码
          pageSize:"10"               //每页显示
        }
      }
    }
  }


};

const platform = 'PC';
const pageType = ['center'];
const resourceType = ['others'];

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
