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
          "editInfo":false, //个人信息页面修改个人信息页面的编辑信息按钮
          "staticText": {
            "newMailbox": "新邮箱：",
            "myAccount": "我的账户",
            "noAvatar": "暂无头像",
            "currentIntegral": "当前积分",
            "viewTheIntegral": "查看积分",
            "downloadedCurrency": "下载币",
            "viewDownloadCurrency": "查看下载币",
            "managingReceiptAddress": "管理收货地址",
            "modifyPersonalInformation": "修改个人信息",
            "titleOfAccount": "账户名称",
            "modifyInformation": "修改信息",
            "accountLevel": "账户等级",
            "accountIntegral": "账户积分",
            "coupon": "优惠券",
            "piece": "张",
            "dynamic": "动态",
            "commentListOfBooks": "评论图书列表",
            "noPicture": "暂无图片",
            "comment": "条评论",
            "serialNumber": "序号",
            "getIntegralPath": "获取积分路径",
            "integralValue": "积分值",
            "time": "时间",
            "return": "返回",
            "mailboxVerificationCode": "邮箱验证码",
            "newReceiptAddress": "新增收货地址",
            "consignee": "收货人",
            "receivingArea": "收货地区",
            "pleaseImproveProvincialAndMunicipalInformation": "请完善省市信息",
            "detailedAddress": "详细地址",
            "pleaseFillInTheDetailedAddress": "请填写详细地址",
            "receivingAddress": "收货地址",
            "phone": "电话",
            "operation": "操作",
            "edit": "编辑",
            "delete": "删除",
            "setAsDefault": "设为默认",
            "defaultAddress": "默认地址",
            "modifyReceivingAddress": "修改收货地址",
            "pleaseFillInTheConsignee": "请填写收货人",
            "changeTo": "更 改 为",
            "contactNumber": "联系电话",
            "pleaseFillInTheContactNumber": "请填写联系电话",
            "amendTheMailbox": "修改邮箱",
            "pleaseConfirmTheNewPassword": "请确认新密码",
            "temporaryBinding": "暂未绑定",
            "phoneNumber": "手机号码",
            "modifyCellPhoneNumber": "修改手机号",
            "changePassword": "修改密码",
            "settingUpSecretProtection": "设置密保问题",
            "pleaseInputTheAnswersToTheSelectedConfidentialQuestions": "请输入所选密保问题答案",
            "whichCityWereYouBornIn": "您出生地是哪个城市",
            "yourFatherName": "您父亲的名字是",
            "yourMotherName": "您母亲的名字是",
            "securityQuestion": "密保问题",
            "securityQuestionVerify": "密保问题验证",
            "answerToTheSecretInsurance": "密保答案",
            "phoneNum": "手机号",
            "checkNumber": "验证码",
            "oldPassword": "旧密码",
            "pleaseChooseTheOldPassword": "请选择旧密码",
            "newPassword": "新密码",
            "pleaseSelectTheNewPassword": "请选择新密码",
            "repeatTheNewPassword": "重复新密码",
            "pleaseChooseTheNewPasswordAgain": "请再次选择新密码",
            "reset": "重置",
            "mailbox": "邮箱",
            "mailboxVerification": "邮箱验证",
            "pleaseBindTheMailboxFirst": "请先绑定邮箱",
            "bindTheMailbox": "绑定邮箱",
            "next": "下一步",
            "theVerificationCodeIsInvalid": "验证码已失效，请重新验证",
            "mobilePhoneNumberVerification": "手机号验证",
            "bindCellPhoneNumber": "绑定手机号",
            "sendVerificationCode": "发送验证码",
            "mobileVerificationCode": "手机验证码",
            "pleaseEnterYourPhoneVerificationCode": "请输入手机验证码",
            "submit": "提交",
            "newPhoneNumber": "新手机号",
            "yuan": "元",
            "exchange": "兑换",
            "confirmTheRecharge": "确认充值",
            "type": "类型",
            "value": "数值",
            "bind": "绑 定",
            "paymentProject": "支付项目",
            "rechargeDownloadCurrency": "充值下载币",
            "paymentMethod": "支付方式",
            "noPaymentMethod": "暂无支付方式",
            "amountPayable": "应付金额",
            "placeOrder": "提交订单",
            "pleaseInputTheOldPassword": "请输入旧密码",
            "pleaseEnterNewPassword": "请输入新密码",
            "consistentWithTheOriginalPassword": "与原密码一致",
            "thePasswordIsAtLeast6Digits": "密码至少为6位数",
            "theMaximumNumberOfPasswordsIs16Digits": "密码最多为16位数",
            "pleaseInputTheNewPasswordAgain": "请再次输入新密码",
            "twoInputPasswordIsInconsistent": "两次输入密码不一致!",
            "pleaseSetUpTheAnswerToSecretInsurance": "请设置密保问题答案",
            "pleaseSelectSecretInsurance": "请选择密保问题",
            "pleaseSetNewPwd": "请设置新密码",
            "pleaseInputTheMailbox": "请输入邮箱",
            "incorrectMailboxFormat": "邮箱格式不正确",
            "pleaseEnterTheMailboxVerificationCode": "请输入邮箱验证码",
            "verificationCodeError": "验证码错误",
            "pleaseEnterTheAnswerToSecretInsurance": "请输入密保问题答案",
            "formattingError": "格式错误，密码仅支持汉字、字母、数字、'-'、'_'的组合",
            "pleaseInputPassword": "请输入密码",
            "pleaseInputThePasswordAgain": "请再次输入密码",
            "thisIsACompleteAddress": "这是一条完整的地址",
            "recharge": "充值",
            "consumption": "消费",
            "modifiedAddressSuccessfully": "修改地址成功!",
            "failedToChangeAddress": "修改地址失败!",
            "areYouSureYouWantToDeleteTheReceiptAddress": "您确定要删除该收货地址吗?",
            "systemHints": "系统提示",
            "confirm": "确定",
            "cancel": "取消",
            "deleteSuccess": "删除成功!",
            "deleteFailure": "删除失败!",
            "newAddressSucceeded": "新增地址成功!",
            "newAddressFailed": "新增地址失败!",
            "consigneeMustNotExceed40Characters": "收货人不能超过40个字符",
            "pleaseEnterNumber": "请输入数字",
            "telephoneLengthIsTooLong": "电话长度过长",
            "province": "省",
            "setDefaultAddressSuccessfully": "设置默认地址成功!",
            "failedToSetDefaultAddress": "设置默认地址失败!",
            "verificationCodeSending": "验证码发送中...",
            "hasBeenSentToYourMailbox": "已发送至您的邮箱，请点击链接绑定邮箱",
            "mailboxBindingFailed": "邮箱绑定失败：",
            "secretInsuranceIsSetUpSuccessfully": "密保问题设置成功",
            "failureOfSecretProtectionSettings": "密保问题设置失败",
            "pleaseEnterCellPhoneNumber": "请输入手机号",
            "pleaseEnterCorrectCellPhoneNumber": "请输入正确的手机号",
            "thePhoneNumberHasBeenBound": "抱歉，手机号已被绑定",
            "theMobilePhoneVerificationCodeHasBeenSent": "手机验证码已发送，请注意查收",
            "networkTimeout": "网络超时",
            "passwordModifiedSuccessfully": "密码修改成功",
            "passwordModificationFailed": "密码修改失败：",
            "clickConfirmationPayment": "点击确认支付",
            "tips": "提示",
            "cancelledPayment": "已取消支付",
            "theAvatarHasBeenChangedSuccessfully": "头像更改成功",
            "theHeaderChangeFailed": "头像更改失败，请重试",
            "uploading": "正在上传...",
            "uploadHeadPictureCanOnlyBeJPGFormat": "上传头像图片只能是 JPG 格式!",
            "uploadHeadImageSizeCanNotExceed2MB": "上传头像图片大小不能超过 2MB!",
            "theVerificationCodeHasBeenSentToYourMailbox": "已发送验证码至您邮箱,请在2分钟内输入验证",
            "passwordResetSuccessfully": "密码重置成功,请重新登录",
            "congratulations": "恭喜",
            "editInfoText":"编辑信息",
            "ordinaryUserText":"普通用户",
            "teacherUserText":"教师用户",
            "name":"姓名",
            "post":"职务",
            "title":"职称",
            "industry":"行业",
            "chooseIndustry":"请选择行业",
            "educationLevel":"教育程度",
            "chooseEducationLevel":"请选择教育程度",
            "province":"所在省份",
            "chooseProvince":"请选择所在省份",
            "specificAddress":"具体地址",
            "teachingSchool":"执教学校",
            "faculty":"所属院系",
            "staffRoom":"教研室",
            "teachingLevel":"教学层次",
            "chooseTeachingLevel":"请选择教学层次",
            "teachingMajor":"教学专业",
            "teachingCourse":"教学课程",
            "postalCode":"邮政编码",
            "bookClassification":"关注图书分类"
          }
        },        
        'collection': { // 收藏的tab切换
          "toBookdetail":"../pages/bookdetail.html?pubId=",
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
            "saveRemitNumSuccess":"汇款单号保存成功!",
            "saveRemitNumFail":"汇款单号保存失败!",
            "RemitNumEmpty":"汇款单号不能为空",
            "pleaseWriteNumber":"请输入数字",
            "pleaseWriteRemitNum":"请输入汇款单号",
            "writeRemitNum":"填写汇款单号",
            "remitNum":"汇款单号",
            "payment":"付款",
            "loading":"正在加载中...",
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
            "detail": "明细",
            "stationery": "图书",
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
          "staticText":{
            "noImg":"暂无图片",
            "noData":"暂无数据",
            "loading":"正在加载中..."
          },
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
        },
        'book': {
          "staticText":{
            "read":"阅读",
            "myBookshelfIsEmpty":"我的书架是空的",
            "book":"图书",
            "loading":"正在加载中...",
            "periodicalPeriod":"期",
            "periodicalYear":"年"
          },
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
        "point":{
          "staticText":{
            "ownPointsNow":"您现在有积分",
            "ownVirtualCoinNow":"您现在有下载币",
            "onePointOneCoin":"1积分=1下载币",
            "points":"积分",
            "exchange":"兑换",
            "virtualCoin":"下载币",
            "submit":"提交",
            "writeExchangePointNum":"请输入兑换积分数量",
            "number":"序号",
            "access":"获取途径",
            "pointValue":"积分值",
            "getDate":"获取日期",
            "writeExchangeNum":"请输入兑换数额",
            "writeNum":"请输入数字",
            "writeInteger":"请输入大于0的整数金额",
            "exchangeSuccess":"兑换成功!",
            "exchangeFail":"兑换成功!"
          }
        },
        comment: { // 我的评论配置
          detailUrl: {
            '91': './bookdetail.html', // 纸质书
            '94': './bookdetail.html', // 电子书
            '149': './journaldetail.html', // 电子期刊
            '177': './seriesdetail.html' // 丛书
          }
        },
        "modifyUser": {
          "isMemberInfo":true,
          "getMemberInfo":{
            "submitUrl": "user/getMemberByName.do"
          },
          "editMemberInfo":{
            "submitUrl": "user/editMemberByName.do",
            "params": {
              "loginName": "",
              "userNick": "",
              "birthday": "",
              "mobileno": "",//电话
              "introduction": "",
              "address": "",//具体地址
              "memberType": "",
              "username": "",
              "industry": ["银行业", "证券、基金业", "保险业", "信托、租聘业", "其他金融机构", "金融监管机构", "高等院校", "科研院所", "政府机关", "其他"],//请选择行业
              "educated": ["博士", "硕士", "本科", "大专", "高中"],
              "areaInfo": ["北京", "天津", "上海", "重庆", "黑龙江省", "吉林省", "辽宁省", "河北省", "山西省", "青海省", "山东省", "河南省", "江苏省", "安徽省", "浙江省", "福建省", "江西省", "湖南省", "湖北省", "广东省", "台湾省", "海南省", "甘肃省", "陕西省", "四川省", "贵州省", "云南省", "内蒙古自治区", "新疆维吾尔自治区", "西藏自治区", "宁夏回族自治区", "广西壮族自治区"],//所在省份
              "postcode": "",//邮政编码
              "bookClassifyConcerned": ["金融", "银行", "证券", "保险"],//关注图书分类
              "job": "",//职务
              "positio": ["助教", "讲师", "副教授", "教授"],//职称
              "company": "",//执教学校
              "faculty": "",//所属院系
              "staffRoom": "",//教研室
              "teachLevel": ["研究生", "本科生", "高职"],//教育程度
              "subject": "",//教学专业
              "teachCourse": "",//教学课程
              "tachingMaterialClassify": ""
            }
          },
          'staticText': {
            'saveFormFail':'保存失败',
            'saveFormSuccessfully':'保存成功',
            'pleaseEnterCellPhoneNumber': '邮编为空',
            'pleaseEnterCorrectCellPhoneNumber':'请输入正确的手机号',
            'pleaseEnterCellPhoneNumber':'手机号为空',
            'pleaseEnterCellPostNumber':'邮编为空',
            'pleaseEnterCorrectCellPostNumber':'请输入正确的邮编',
            'ordinaryUserText':'普通用户',
            'teacherUserText':'教师用户',
            'name':'姓名',
            'post':'职务',
            'title':'职称',
            'phone':'电话',
            'industry':'行业',
            'educationLevel':'教育程度',
            'province':'所在省份',
            'specificAddress':'具体地址',
            'teachingSchool':'执教学校',
            'faculty':'所属院系',
            'staffRoom':'教研室',
            'teachingLevel':'教学层次',
            'teachingMajor':'教学专业',
            'teachingCourse':'教学课程',
            'postalCode':'邮政编码',
            'bookClassification':'关注图书分类',
            'save':'保存',
            'return':'返回'
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
          "editInfo":false, //个人信息页面修改个人信息页面的编辑信息按钮
          "staticText": {
            "myAccount": "我的账户",
            "noAvatar": "暂无头像",
            "currentIntegral": "当前积分",
            "viewTheIntegral": "查看积分",
            "downloadedCurrency": "下载币",
            "viewDownloadCurrency": "查看下载币",
            "managingReceiptAddress": "管理收货地址",
            "modifyPersonalInformation": "修改个人信息",
            "titleOfAccount": "账户名称",
            "modifyInformation": "修改信息",
            "accountLevel": "账户等级",
            "accountIntegral": "账户积分",
            "coupon": "优惠券",
            "piece": "张",
            "dynamic": "动态",
            "commentListOfBooks": "评论图书列表",
            "noPicture": "暂无图片",
            "comment": "条评论",
            "serialNumber": "序号",
            "getIntegralPath": "获取积分路径",
            "integralValue": "积分值",
            "time": "时间",
            "return": "返回",
            "mailboxVerificationCode": "邮箱验证码",
            "newReceiptAddress": "新增收货地址",
            "consignee": "收货人",
            "receivingArea": "收货地区",
            "pleaseImproveProvincialAndMunicipalInformation": "请完善省市信息",
            "detailedAddress": "详细地址",
            "pleaseFillInTheDetailedAddress": "请填写详细地址",
            "receivingAddress": "收货地址",
            "phone": "电话",
            "operation": "操作",
            "edit": "编辑",
            "delete": "删除",
            "setAsDefault": "设为默认",
            "defaultAddress": "默认地址",
            "modifyReceivingAddress": "修改收货地址",
            "pleaseFillInTheConsignee": "请填写收货人",
            "changeTo": "更 改 为",
            "contactNumber": "联系电话",
            "pleaseFillInTheContactNumber": "请填写联系电话",
            "amendTheMailbox": "修改邮箱",
            "pleaseConfirmTheNewPassword": "请确认新密码",
            "temporaryBinding": "暂未绑定",
            "phoneNumber": "手机号码",
            "modifyCellPhoneNumber": "修改手机号",
            "changePassword": "修改密码",
            "settingUpSecretProtection": "设置密保问题",
            "pleaseInputTheAnswersToTheSelectedConfidentialQuestions": "请输入所选密保问题答案",
            "whichCityWereYouBornIn": "您出生地是哪个城市",
            "yourFatherName": "您父亲的名字是",
            "yourMotherName": "您母亲的名字是",
            "securityQuestion": "密保问题",
            "securityQuestionVerify": "密保问题验证",
            "answerToTheSecretInsurance": "密保答案",
            "phoneNum": "手机号",
            "checkNumber": "验证码",
            "oldPassword": "旧密码",
            "pleaseChooseTheOldPassword": "请选择旧密码",
            "newPassword": "新密码",
            "pleaseSelectTheNewPassword": "请选择新密码",
            "repeatTheNewPassword": "重复新密码",
            "pleaseChooseTheNewPasswordAgain": "请再次选择新密码",
            "reset": "重置",
            "mailbox": "邮箱",
            "mailboxVerification": "邮箱验证",
            "pleaseBindTheMailboxFirst": "请先绑定邮箱",
            "bindTheMailbox": "绑定邮箱",
            "next": "下一步",
            "theVerificationCodeIsInvalid": "验证码已失效，请重新验证",
            "mobilePhoneNumberVerification": "手机号验证",
            "bindCellPhoneNumber": "绑定手机号",
            "sendVerificationCode": "发送验证码",
            "mobileVerificationCode": "手机验证码",
            "pleaseEnterYourPhoneVerificationCode": "请输入手机验证码",
            "submit": "提交",
            "newPhoneNumber": "新手机号",
            "yuan": "元",
            "exchange": "兑换",
            "confirmTheRecharge": "确认充值",
            "type": "类型",
            "value": "数值",
            "bind": "绑 定",
            "paymentProject": "支付项目",
            "rechargeDownloadCurrency": "充值下载币",
            "paymentMethod": "支付方式",
            "noPaymentMethod": "暂无支付方式",
            "amountPayable": "应付金额",
            "placeOrder": "提交订单",
            "pleaseInputTheOldPassword": "请输入旧密码",
            "pleaseEnterNewPassword": "请输入新密码",
            "consistentWithTheOriginalPassword": "与原密码一致",
            "thePasswordIsAtLeast6Digits": "密码至少为6位数",
            "theMaximumNumberOfPasswordsIs16Digits": "密码最多为16位数",
            "pleaseInputTheNewPasswordAgain": "请再次输入新密码",
            "twoInputPasswordIsInconsistent": "两次输入密码不一致!",
            "pleaseSetUpTheAnswerToSecretInsurance": "请设置密保问题答案",
            "pleaseSelectSecretInsurance": "请选择密保问题",
            "pleaseSetNewPwd": "请设置新密码",
            "pleaseInputTheMailbox": "请输入邮箱",
            "incorrectMailboxFormat": "邮箱格式不正确",
            "pleaseEnterTheMailboxVerificationCode": "请输入邮箱验证码",
            "verificationCodeError": "验证码错误",
            "pleaseEnterTheAnswerToSecretInsurance": "请输入密保问题答案",
            "formattingError": "格式错误，密码仅支持汉字、字母、数字、'-'、'_'的组合",
            "pleaseInputPassword": "请输入密码",
            "pleaseInputThePasswordAgain": "请再次输入密码",
            "thisIsACompleteAddress": "这是一条完整的地址",
            "recharge": "充值",
            "consumption": "消费",
            "modifiedAddressSuccessfully": "修改地址成功!",
            "failedToChangeAddress": "修改地址失败!",
            "areYouSureYouWantToDeleteTheReceiptAddress": "您确定要删除该收货地址吗?",
            "systemHints": "系统提示",
            "confirm": "确定",
            "cancel": "取消",
            "deleteSuccess": "删除成功!",
            "deleteFailure": "删除失败!",
            "newAddressSucceeded": "新增地址成功!",
            "newAddressFailed": "新增地址失败!",
            "consigneeMustNotExceed40Characters": "收货人不能超过40个字符",
            "pleaseEnterNumber": "请输入数字",
            "telephoneLengthIsTooLong": "电话长度过长",
            "province": "省",
            "setDefaultAddressSuccessfully": "设置默认地址成功!",
            "failedToSetDefaultAddress": "设置默认地址失败!",
            "verificationCodeSending": "验证码发送中...",
            "hasBeenSentToYourMailbox": "已发送至您的邮箱，请点击链接绑定邮箱",
            "mailboxBindingFailed": "邮箱绑定失败：",
            "secretInsuranceIsSetUpSuccessfully": "密保问题设置成功",
            "failureOfSecretProtectionSettings": "密保问题设置失败",
            "pleaseEnterCellPhoneNumber": "请输入手机号",
            "pleaseEnterCorrectCellPhoneNumber": "请输入正确的手机号",
            "thePhoneNumberHasBeenBound": "抱歉，手机号已被绑定",
            "theMobilePhoneVerificationCodeHasBeenSent": "手机验证码已发送，请注意查收",
            "networkTimeout": "网络超时",
            "passwordModifiedSuccessfully": "密码修改成功",
            "passwordModificationFailed": "密码修改失败：",
            "clickConfirmationPayment": "点击确认支付",
            "tips": "提示",
            "cancelledPayment": "已取消支付",
            "theAvatarHasBeenChangedSuccessfully": "头像更改成功",
            "theHeaderChangeFailed": "头像更改失败，请重试",
            "uploading": "正在上传...",
            "uploadHeadPictureCanOnlyBeJPGFormat": "上传头像图片只能是 JPG 格式!",
            "uploadHeadImageSizeCanNotExceed2MB": "上传头像图片大小不能超过 2MB!",
            "theVerificationCodeHasBeenSentToYourMailbox": "已发送验证码至您邮箱,请在2分钟内输入验证",
            "passwordResetSuccessfully": "密码重置成功,请重新登录",
            "congratulations": "恭喜",
            "editInfoText":"编辑信息",
            "ordinaryUserText":"普通用户",
            "teacherUserText":"教师用户",
            "name":"姓名",
            "post":"职务",
            "title":"职称",
            "industry":"行业",
            "chooseIndustry":"请选择行业",
            "educationLevel":"教育程度",
            "chooseEducationLevel":"请选择教育程度",
            "province":"所在省份",
            "chooseProvince":"请选择所在省份",
            "specificAddress":"具体地址",
            "teachingSchool":"执教学校",
            "faculty":"所属院系",
            "staffRoom":"教研室",
            "teachingLevel":"教学层次",
            "chooseTeachingLevel":"请选择教学层次",
            "teachingMajor":"教学专业",
            "teachingCourse":"教学课程",
            "postalCode":"邮政编码",
            "bookClassification":"关注图书分类"
          }
        },
        'collection': { // 收藏的tab切换
          "toBookdetail":"../pages/bookdetail.html?pubId=",
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
            "saveRemitNumSuccess":"汇款单号保存成功!",
            "saveRemitNumFail":"汇款单号保存失败!",
            "RemitNumEmpty":"汇款单号不能为空",
            "pleaseWriteNumber":"请输入数字",
            "pleaseWriteRemitNum":"请输入汇款单号",
            "writeRemitNum":"填写汇款单号",
            "remitNum":"汇款单号",
            "payment":"付款",
            "loading":"正在加载中...",
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
          "staticText":{
            "read":"阅读",
            "myBookshelfIsEmpty":"我的书架是空的",
            "book":"图书",
            "loading":"正在加载中...",
            "periodicalPeriod":"期",
            "periodicalYear":"年"
          },
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
          "staticText":{
            "noImg":"暂无图片",
            "noData":"暂无数据",
            "loading":"正在加载中..."
          },
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
        "point":{
          "staticText":{
            "ownPointsNow":"您现在有积分",
            "ownVirtualCoinNow":"您现在有下载币",
            "onePointOneCoin":"1积分=1下载币",
            "points":"积分",
            "exchange":"兑换",
            "virtualCoin":"下载币",
            "submit":"提交",
            "writeExchangePointNum":"请输入兑换积分数量",
            "number":"序号",
            "access":"获取途径",
            "pointValue":"积分值",
            "getDate":"获取日期",
            "writeExchangeNum":"请输入兑换数额",
            "writeNum":"请输入数字",
            "writeInteger":"请输入大于0的整数金额",
            "exchangeSuccess":"兑换成功!",
            "exchangeFail":"兑换成功!"
          }
        },
        comment: { // 我的评论配置
          detailUrl: {
            '91': './bookdetail.html', // 纸质书
            '94': './bookdetail.html', // 电子书
            '149': './journaldetail.html', // 电子期刊
            '177': './seriesdetail.html' // 丛书
          }
        },
        "modifyUser": {
          "isMemberInfo":true,
          "getMemberInfo":{
            "submitUrl": "user/getMemberByName.do"
          },
          "editMemberInfo":{
            "submitUrl": "user/editMemberByName.do",
            "params": {
                "loginName": "",
                "userNick": "",
                "birthday": "",
                "mobileno": "",//电话
                "introduction": "",
                "address": "",//具体地址
                "memberType": "",
                "username": "",
                "industry": ["银行业", "证券、基金业", "保险业", "信托、租聘业", "其他金融机构", "金融监管机构", "高等院校", "科研院所", "政府机关", "其他"],//请选择行业
                "educated": ["博士", "硕士", "本科", "大专", "高中"],
                "areaInfo": ["北京", "天津", "上海", "重庆", "黑龙江省", "吉林省", "辽宁省", "河北省", "山西省", "青海省", "山东省", "河南省", "江苏省", "安徽省", "浙江省", "福建省", "江西省", "湖南省", "湖北省", "广东省", "台湾省", "海南省", "甘肃省", "陕西省", "四川省", "贵州省", "云南省", "内蒙古自治区", "新疆维吾尔自治区", "西藏自治区", "宁夏回族自治区", "广西壮族自治区"],//所在省份
                "postcode": "",//邮政编码
                "bookClassifyConcerned": ["金融", "银行", "证券", "保险"],//关注图书分类
                "job": "",//职务
                "positio": ["助教", "讲师", "副教授", "教授"],//职称
                "company": "",//执教学校
                "faculty": "",//所属院系
                "staffRoom": "",//教研室
                "teachLevel": ["研究生", "本科生", "高职"],//教育程度
                "subject": "",//教学专业
                "teachCourse": "",//教学课程
                "tachingMaterialClassify": ""
            }
          },
          'staticText': {
            'saveFormFail':'保存失败',
            'saveFormSuccessfully':'保存成功',
            'pleaseEnterCellPhoneNumber': '邮编为空',
            'pleaseEnterCorrectCellPhoneNumber':'请输入正确的手机号',
            'pleaseEnterCellPhoneNumber':'手机号为空',
            'pleaseEnterCellPostNumber':'邮编为空',
            'pleaseEnterCorrectCellPostNumber':'请输入正确的邮编',
            'ordinaryUserText':'普通用户',
            'teacherUserText':'教师用户',
            'name':'姓名',
            'post':'职务',
            'title':'职称',
            'phone':'电话',
            'industry':'行业',
            'educationLevel':'教育程度',
            'province':'所在省份',
            'specificAddress':'具体地址',
            'teachingSchool':'执教学校',
            'faculty':'所属院系',
            'staffRoom':'教研室',
            'teachingLevel':'教学层次',
            'teachingMajor':'教学专业',
            'teachingCourse':'教学课程',
            'postalCode':'邮政编码',
            'bookClassification':'关注图书分类',
            'save':'保存',
            'return':'返回'
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
