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
      navList: [
        {
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
          },
          staticText: {
            editInfo:false, //个人信息页面修改个人信息页面的编辑信息按钮
            editInfoText:"",//个人信息页面修改个人信息页面的编辑信息按钮文本
            ordinaryUserText:"",//个人信息页面修改个人信息页面的编辑信息普通用户字段名
            teacherUserText:""//个人信息页面修改个人信息页面的编辑信息教师用户字段名
          },
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
          ],
          "staticText":{
            "fullOrder":"全部订单",
            "waitForPayment":"等待付款",
            "startDate":"开始日期",
            "endDate":"结束日期",
            "selectTimeRange":"选择时间范围",
            "orderDetail":"订单详情",
            "number":"数量",
            "amountOfMoney":"金额",
            "orderNumber":"订单号",
            "subSingleNumber":"子单号",
            "pendingPayment":"订单状态：待付款",
            "cancelled":"订单状态：已取消",
            "undelivery":"订单状态：待收货",
            "completed":"订单状态：已完成",
            "noCover":"暂无封面",
            "noBookTitleForTheTimeBeing":"暂无书名",
            "author":"作者",
            "noAuthor":"暂无作者",
            "ebookOrder":"电子书订单",
            "paperBookOrder":"纸书订单",
            "money":"¥",
            "cancellationOfOrder":"取消订单",
            "deleteOrder":"删除订单",
            "seeDelivery":"查看物流",
            "recieved":"确认收货",
            "alreadyPaid":"已付款",
            "toBePaid":"待支付",
            "downloadCurrencyDeduction":"下载币抵扣",
            "activityRemission":"活动减免",
            "orderIsEmpty":"订单是空的~快去购买吧",
            "receiptInformation":"收货信息",
            "consignee":"收货人",
            "phone":"电话",
            "receivingAddress":"收货地址",
            "invoiceInformation":"发票信息",
            "invoiceType":"发票类型",
            "personal":"个人",
            "valueAddedTaxInvoice":"增值税发票",
            "invoicesTitle":"发票抬头",
            "invoiceContent":"发票内容",
            "detailsOfPayment":"支付详情",
            "paymentMethod":"支付方式",
            "weChatPayment":"微信支付",
            "alipay":"支付宝",
            "downloadedCurrency":"下载币",
            "commodityTotal":"商品总计",
            "freightTotal":"运费总计",
            "yuan":"元",
            "noteInformation":"备注信息",
            "returnGoods":"退货",
            "exchangeGoods":"换货",
            "return":"返回",
            "totalOrder":"订单总额：¥",
            "noPublication":"暂无刊名",
            "submission":"提交申请",
            "businessAudit":"商家审核",
            "userDelivery":"用户发货",
            "reviewOfRefunds":"审核退款",
            "completeTheReturnOfTheGoods":"完成退货",
            "completeTheReturnTransOfTheGoods":"完成换货",
            "commodityName":"商品名称",
            "purchaseQuantity":"购买数量",
            "orderTime":"下单时间",
            "returnQuantity":"退货数量",
            "returnTransQuantity":"换货数量",
            "problemDescription":"问题描述",
            "pleaseDescribeTheProblem":"请描述问题",
            "uploadPicture":"上传图片",
            "applicationForReturn":"申请退货",
            "applicationForReturnTrans":"申请换货",
            "lastWeek":"最近一周",
            "lastMonth":"最近一个月",
            "lastThreeMonths":"最近三个月",
            "upload5PicturesAtMost":"抱歉，最多上传5张图片",
            "pleaseUploadPngJpgOrBmpTypePictures":"请上传PNG、JPG或BMP类型图片",
            "uploadHeadImageSizeCanNotExceed5MB":"上传头像图片大小不能超过 5MB!",
            "receiptAddressMustNotBeEmpty":"收货地址不得为空噢",
            "failureToSubmitApplication":"抱歉，申请提交失败",
            "incorrectSubmissionOfOrders":"订单提交有误",
            "systemHints":"系统提示",
            "confirm":"确定",
            "abolishSuccess":"取消成功",
            "abolishFailed":"取消失败，请重试",
            "deleteSuccess":"删除成功",
            "deleteFailed":"删除失败，请重试",
            "confirmDeleteOrder":"确定删除此订单？",
            "tips":"提示",
            "cancel":"取消",
            "confirmCancelOrder":"确定取消此订单？"
          }
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
          tabTypeShow: [
            {
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
          courierOptions: [
            {
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
          "staticText":{
            "orderType":"订单类型",
            "orderStatus":"订单状态",
            "returnNumber":"退换货编号",
            "orderNumber":"订单编号",
            "date":"日期",
            "count":"数量",
            "operate":"操作",
            "check":"查看",
            "submission":"提交申请",
            "businessAudit":"商家审核",
            "businessAuditNotPass":"商家审核未通过",
            "userDelivery":"用户发货",
            "reviewOfRefunds":"审核退款",
            "refundNotPass":"审核退款未通过",
            "completeTheReturnOfTheGoods":"完成退货",
            "goodsName":"商品名称",
            "purchaseCount":"购买数量",
            "orderTime":"下单时间",
            "noCover":"暂无封面",
            "author":"作者",
            "returnCount":"退货数量",
            "problemDescription":"问题描述",
            "picture":"图片",
            "noPicture":"暂无图片",
            "refundAmount":"退款金额：￥",
            "refundVirtualCoin":"返还虚拟币：￥",
            "courierNumber":"快递单号",
            "returnApplicationAudit":"退货申请审核中...",
            "cancelReturnApplication":"取消退货申请",
            "returnAuditFailed":"退货审核不通过",
            "auditOpinion":"审核意见",
            "returnAuditPassed":"退货审核通过",
            "returnPolicy":"退货说明",
            "courierCompany":"快递公司",
            "chooseCourierCompany":"请选择快递公司",
            "writeCourierNumber":"请填写快递单号",
            "submit":"提交",
            "returnGoods":"退货",
            "confirmCancelReturn":"是否确定要取消退货申请？",
            "cancel":"取 消",
            "confirm":"确 定",
            "businessReceiving":"商家收货中...",
            "businessAgreeRefund":"商家收到退货商品，同意退款",
            "waitRefundArrive":"请等待退款到账",
            "businessDisagreeRefund":"商家收到退货商品，不同意退款",
            "completeReturn":"退货完成",
            "cancelReturn":"退货申请已取消",
            "createExchangeOrder":"生成换货订单",
            "exchangeCount":"换货数量",
            "exchangeApplicationAudit":"换货申请审核中...",
            "cancelExchangeApplication":"取消换货申请",
            "exchangeAuditFailed":"换货审核不通过",
            "exchangeAuditPassed":"换货审核通过",
            "exchangePolicy":"换货说明",
            "exchangeGoods":"换货",
            "confirmCancelExchange":"是否确定要取消换货申请？",
            "businessAgreeExchange":"商家收到换货商品，同意换货",
            "cancelExchange":"换货申请已取消",
            "informationSubmitSuccess":"信息提交成功",
            "informationSubmitFail":"抱歉，信息提交失败",
            "cancelFail":"抱歉，取消失败",
            "cancelSuccess":"取消成功"
          }
        },
        'learning': {
          tabListShow: [{
            label: '音频',
            productType: '183'
          }, {
            label: '视频',
            productType: '172'
          }, {
            label: '课件',
            productType: '185'
          }, {
            label: '试题',
            productType: '123'
          }],
          defaultActive: '183', //默认激活的tab
          staticText: {
            noData: "暂无数据"
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "", // 类型字段
          getResourceLists: {
            url: "/user/getBookShelfList.do",
            params: {
              loginName: '', //用户名
              pageIndex: '1', //页码
              pageNo: "1",
              pageSize: '10', //每页显示的页数
              type: '2', //类型2：购买
              siteId: '', // 站点id
              productType: '', //商品类型电子期刊:periodical
              status: '1' // 状态1:加入书架0：未加入书架
            },
            complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
              name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
              field: 'productMidPic', // 取什么字段
              display: '', // 固定显示内容是什么
              method: 'toDetail', // 方法名 要在下面配置
            }, {
              name: 'button',
              field: 'productName',
              display: '',
              method: 'toDetail', // 方法名 要在下面配置
            }]
          },
          "toDetail": {
            "url": "../pages/videoDetail.html",
            "dataKeys": {
              "pubId": "pubId",
              "resType": "productResType"
            },
            "fixedKeys": {}
          },
          pageSizes: [10, 20, 50, 100],
        },
        feedback: { // 建议反馈的提交地址及传参字段
          submitUrl: "spc/prodb/saveItem.do", // 提交接口
          feedbackkeys: "QUE_CONTENT", // 建议反馈提交的key值 字段需到对应库中查询
          params: {
            "doclibCode": "PORTAL_QUE_ANS", // 对应文档库
            "metaMap": {}
          }
        },
        samplebook: { // 申领数据配置
          pageIndex: "1", //页码
          pageSize: "10", //每页显示
        },
        comment: { // 我的评论配置
          detailUrl: {
            '91': './bookdetail.html', // 纸质书
            '94': './bookdetail.html', // 电子书
            '149': './journaldetail.html', // 电子期刊
            '177': './seriesdetail.html' // 丛书
          }
        },
        "nav":{
          "staticText":{
            "personalCenter": "个人中心",
            "myAccount": "我的帐号",
            "myOrder": "我的订单",
            "myBookshelf": "我的书架",
            "collectionFolder": "收藏夹",
            "myPoints": "我的积分",
            "afterSaleRecord": "售后记录",
            "myCoupon": "我的优惠券"
          }
        },
        "joinactivity":{
          "staticText":{
            "auditStatusScreening": "审核状态筛选",
            "unaudited": "未审核",
            "audited": "已审核",
            "inTheAward": "评奖中",
            "haveBeenAwardedPrize": "已评奖",
            "all": "全部",
            "managementEnrolment": "管理报名人",
            "participateInActivities": "参加活动",
            "activeState": "活动状态",
            "auditStatus": "审核状态",
            "titleOfWork": "作品标题",
            "contestant": "参赛人",
            "timeOfCompetition": "参赛时间",
            "identityCardNumberOfContestant": "参赛人身份证号",
            "awardSituation": "获奖情况",
            "operation": "操作",
            "failureToPassAudit": "未通过审核",
            "viewTheWork": "查看作品",
            "yes": "是",
            "hiddenWorks": "隐藏作品",
            "openWork": "公开作品",
            "newCompetitorInformation": "新增参赛人信息",
            "newPersonnel": "新增人员",
            "name": "姓名",
            "gender":" 性别",
            "male": "男",
            "female": "女",
            "identityCard": "身份证",
            "telephone": "电话",
            "cancel": "取 消",
            "confirm": "确 定",
            "contactInformation": "联系方式",
            "identityCardNumber": "身份证号码",
            "edit": "编辑",
            "delete": "删除",
            "return": "返回",
            "editCompetitorInformation": "编辑参赛人信息",
            "pleaseFillInTheContestants": "请填写参赛人",
            "pleaseFillInTheCorrectIdentityCardNumber": "请填写正确身份证号",
            "contactNumber": "联系电话",
            "pleaseFillInTheContactNumber": "请填写联系电话",
            "pleaseInputTheCorrectPhoneNumber": "请输入正确电话号",
            "pleaseEnterTheNameOfTheParticipant": "请输入参赛人姓名",
            "pleaseEnterTheIdentityCardNumberOfTheParticipant": "请输入参赛人身份证号",
            "pleaseEnterTheCellPhoneNumberOfTheCompetitor": "请输入参赛人手机号",
            "no": "否",
            "setSuccess": "设置成功!",
            "setFailed": "设置失败!",
            "participantsAddSuccess": "参赛人添加成功!",
            "areYouSureYouWantToDeleteTheCompetitorInformation": "您确定要删除该参赛人信息吗?",
            "systemHints": "系统提示",
            "informationDeletedSuccessfully": "信息删除成功!",
            "informationModifiedSuccessfully": "信息修改成功!",
            "finished": "已结束",
            "haveInHand": "进行中",
            "scoring": "评分中"
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
          },
          staticText: {
            editInfo:false, //个人信息页面修改个人信息页面的编辑信息按钮
            editInfoText:"",//个人信息页面修改个人信息页面的编辑信息按钮文本
            ordinaryUserText:"",//个人信息页面修改个人信息页面的编辑信息普通用户字段名
            teacherUserText:""//个人信息页面修改个人信息页面的编辑信息教师用户字段名
          },
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
          ],
          "staticText":{
            "fullOrder":"全部订单",
            "waitForPayment":"等待付款",
            "startDate":"开始日期",
            "endDate":"结束日期",
            "selectTimeRange":"选择时间范围",
            "orderDetail":"订单详情",
            "number":"数量",
            "amountOfMoney":"金额",
            "orderNumber":"订单号",
            "subSingleNumber":"子单号",
            "pendingPayment":"订单状态：待付款",
            "cancelled":"订单状态：已取消",
            "undelivery": "订单状态：待发货",
            "deliveryed": "订单状态：待收货",
            "completed":"订单状态：已完成",
            "noCover":"暂无封面",
            "noBookTitleForTheTimeBeing":"暂无书名",
            "author":"作者",
            "noAuthor":"暂无作者",
            "ebookOrder":"电子书订单",
            "paperBookOrder":"纸书订单",
            "money":"¥",
            "cancellationOfOrder":"取消订单",
            "deleteOrder":"删除订单",
            "seeDelivery":"查看物流",
            "recieved":"确认收货",
            "alreadyPaid":"已付款",
            "toBePaid":"待支付",
            "downloadCurrencyDeduction":"下载币抵扣",
            "activityRemission":"活动减免",
            "orderIsEmpty":"订单是空的~快去购买吧",
            "receiptInformation":"收货信息",
            "consignee":"收货人",
            "phone":"电话",
            "receivingAddress":"收货地址",
            "invoiceInformation":"发票信息",
            "invoiceType":"发票类型",
            "personal":"个人",
            "valueAddedTaxInvoice":"增值税发票",
            "invoicesTitle":"发票抬头",
            "invoiceContent":"发票内容",
            "detailsOfPayment":"支付详情",
            "paymentMethod":"支付方式",
            "weChatPayment":"微信支付",
            "alipay":"支付宝",
            "downloadedCurrency":"下载币",
            "commodityTotal":"商品总计",
            "freightTotal":"运费总计",
            "yuan":"元",
            "noteInformation":"备注信息",
            "returnGoods":"退货",
            "exchangeGoods":"换货",
            "return":"返回",
            "totalOrder":"订单总额：¥",
            "noPublication":"暂无刊名",
            "submission":"提交申请",
            "businessAudit":"商家审核",
            "userDelivery":"用户发货",
            "reviewOfRefunds":"审核退款",
            "completeTheReturnOfTheGoods":"完成退货",
            "completeTheReturnTransOfTheGoods":"完成换货",
            "commodityName":"商品名称",
            "purchaseQuantity":"购买数量",
            "orderTime":"下单时间",
            "returnQuantity":"退货数量",
            "returnTransQuantity":"换货数量",
            "problemDescription":"问题描述",
            "pleaseDescribeTheProblem":"请描述问题",
            "uploadPicture":"上传图片",
            "applicationForReturn":"申请退货",
            "applicationForReturnTrans":"申请换货",
            "lastWeek":"最近一周",
            "lastMonth":"最近一个月",
            "lastThreeMonths":"最近三个月",
            "upload5PicturesAtMost":"抱歉，最多上传5张图片",
            "pleaseUploadPngJpgOrBmpTypePictures":"请上传PNG、JPG或BMP类型图片",
            "uploadHeadImageSizeCanNotExceed5MB":"上传头像图片大小不能超过 5MB!",
            "receiptAddressMustNotBeEmpty":"收货地址不得为空噢",
            "failureToSubmitApplication":"抱歉，申请提交失败",
            "incorrectSubmissionOfOrders":"订单提交有误",
            "systemHints":"系统提示",
            "confirm":"确定",
            "abolishSuccess":"取消成功",
            "abolishFailed":"取消失败，请重试",
            "deleteSuccess":"删除成功",
            "deleteFailed":"删除失败，请重试",
            "abolishSuccess":"取消成功",
          }
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
          ]
        },
        'joinactivity': {
          showItem: ['operate']
        },
        'book': {
          "isReadList":["book","periodical"],//开启阅读功能的资源  对应keyType的值
          navList: [{
            name: '图书',//导航中的名字
            type: '2',//请求参数 1试读 2阅读  3全部
            productType: '',//请求参数 资源类型
            keyType: 'book' //字段适配器名,对应productKeys配置中的key,字段适配器名
          },
            {
              name: '期刊',
              type: '3',
              productType: 'periodical',
              keyType: 'periodical'
            },
            // {
            //   name:'知识服务',
            //   type:'3',
            //   productType:'knowledge'
            // },
            // {
            //   name:'音频组',
            //   type:'3',
            //   productType:'183'
            // },
            // {
            //   name:'视频组',
            //   type:'3',
            //   productType:'172'
            // },
            // {
            //   name:'资料组',
            //   type:'3',
            //   productType:'185'
            // }
          ],
          productKeys: {
            book: {
              name: 'productName',
              pic: 'bigPic',
              resourceId: 'resourceId',
              resourceType: 'resourseType'
            },
            periodical: {
              name: 'pub_resource_name',
              pic: 'pub_picBig',
              resourceId: 'pub_resource_id',
              resourceType: 'pub_resource_type',
              periodNum:'MAGAZINE_PERIOD_NUM',
              publishYear:'MAGAZINE_PUBLISH_YEAR'
            }
          }
        },
        feedback: { // 建议反馈的提交地址及传参字段
          submitUrl: "spc/prodb/saveItem.do", // 提交接口
          feedbackkeys: "QUE_CONTENT", // 建议反馈提交的key值 字段需到对应库中查询
          params: {
            "doclibCode": "QUE_ANS", // 对应文档库
            "metaMap": {}
          }
        },
        samplebook: { // 申领数据配置
          pageIndex: "1", //页码
          pageSize: "10", //每页显示
        },
        'learning': {
          tabListShow: [{
            label: '音频',
            productType: '183'
          }, {
            label: '视频',
            productType: '172'
          }, {
            label: '课件',
            productType: '185'
          }, {
            label: '试题',
            productType: '123'
          }],
          defaultActive: '183', //默认激活的tab
          staticText: {
            noData: "暂无数据"
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "", // 类型字段
          getResourceLists: {
            url: "/user/getBookShelfList.do",
            params: {
              loginName: '', //用户名
              pageIndex: '1', //页码
              pageNo: "1",
              pageSize: '10', //每页显示的页数
              type: '2', //类型2：购买
              siteId: '', // 站点id
              productType: '', //商品类型电子期刊:periodical
              status: '1' // 状态1:加入书架0：未加入书架
            },
            complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
              name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
              field: 'productMidPic', // 取什么字段
              display: '', // 固定显示内容是什么
              method: 'toDetail', // 方法名 要在下面配置
            }, {
              name: 'button',
              field: 'productName',
              display: '',
              method: 'toDetail', // 方法名 要在下面配置
            }]
          },
          "toDetail": {
            "url": "../pages/videoDetail.html",
            "dataKeys": {
              "pubId": "pubId",
              "resType": "productResType"
            },
            "fixedKeys": {}
          },
          pageSizes: [10, 20, 50, 100],
        },
        comment: { // 我的评论配置
          detailUrl: {
            '91': './bookdetail.html', // 纸质书
            '94': './bookdetail.html', // 电子书
            '149': './journaldetail.html', // 电子期刊
            '177': './seriesdetail.html' // 丛书
          }
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
