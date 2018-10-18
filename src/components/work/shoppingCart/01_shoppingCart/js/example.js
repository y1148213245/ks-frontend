/**
 * created by song 2017/12/21
 * 我的购物车的配置文件 放请求的url、params...
 */
import component from "../cartContent.vue";


const name = component.name; // 组件标签名

const title = "购物车组件"; // 组件 title

const description = `我的购物车
shoppingCart: {
  shoppingCart_01: {
    cartContent: {
      directUrl: { // 购物车列表有很多类型的商品 类型不同可能跳转不同的详情页面 根据类型配置 默认跳转bookdetail.html
        '91': './bookdetail.html', // 纸质书
        '94': './bookdetail.html', // 电子书
        '149': './journaldetail.html', // 电子期刊
        '177': './seriesdetail.html' // 丛书
      },
      bookType: '91', // 纸质书
      ebookType: '94', // 电子书
      staticText: {
        priceChangeInfo: "价格变更信息：",
        priceDescInfo: "商品比加入购物车时价格降低了",
        money: "元",
        selectAll: "全选",
        productInfo: "商品信息",
        unitPrice: "单价（元）",
        quantity: "数量",
        sumPrice: "金额",
        operation: "操作",
        author: "作者：",
        dontParticipateAnyActivities: "不参与任何活动",
        delete: "删除",
        addToCollection: "添加收藏",
        haveCollected: "已收藏",
        moveToCollection: "移入收藏",
        noImg: "暂无图片",
        yuan: "￥",
        selectAtLeastOne: "请选择至少一件商品",
        settleAccounts: "结算",
        totalPrice: "总价：",
        haveSaved: "已节省：",
        haveSelected: "已选中",
        productQuanity: "件商品",
        cartEmptyInfo: "您的购物车还是空的，赶紧行动吧！",
        invoiceInfo: "发票信息",
        chooseWetherNeedInvoice: "选择是否需要发票",
        yes: "是",
        no: "否",
        discountCoupon: "优惠券",
        satisfy: "满",
        toUse: "使用",
        deduction: "直接抵扣",
        discount: "折",
        discountRate: "折扣率",
        date: "日期：",
        only: "仅限：",
        paperBook: "纸质书",
        ebook: "电子书",
        ejournal: '电子期刊',
        classification: "分类",
        deselect: "取消选择",
        noCoupons: "暂无优惠券",
        modeOfPayment: "支付方式",
        postscript: "备注信息",
        inputPostscript: "填写备注信息",
        pleaseInputPostscript: "请输入备注信息",
        youCanAlsoInput: "您还可以输入",
        wordQuanity: "个字",
        productList: "商品列表",
        onSale: "促销",
        ebookClass: "(电子书)",
        ejournalClass: '(电子期刊)',
        totalCount: "共计",
        shouldPay: "应付：",
        totalHave: "共有",
        downloadCoin: "下载币",
        oneCoinEqualsOneYuan: "1下载币=",
        reducePrice: "优惠：- ",
        downloadCoinReduce: "下载币：- ",
        modeOfDistribution: "配送方式：",
        carriage: "运费：",
        actuallyPaid: "实付金额：",
        submitOrder: "提交订单",
        remarksShouldNotExceedFiftyCharacters: '备注不能超过50个字符',
        systemPrompt: "系统提示",
        activityReplacementFail: "活动更换失败~",
        areYouSureToDeleteTheItem: "您确定要删除该商品吗?",
        cancel: "取消",
        deleteSuccess: "删除成功！",
        deleteFailed: "删除失败！",
        theQuantityOfProductsMustNotExceedTwoHundred: "商品数量不能大于200",
        collectSuccess: "收藏成功",
        cancelCollectSuccess: "取消收藏成功",
        moveIntoCollectionFolderSuccess: "成功移入收藏夹",
        moveIntoCollectionFolderFailed: "移入收藏夹失败",
        numberOfProductsMustBeMoreThanZero: "商品数量必须大于0",
        shippingAddressMustNotBeEmpty: "收货地址不得为空",
        orderSubmissionError: "订单提交有误",
        downloadCoinNotEnough: "下载币不足~",
        downloadCoinDiscountCanNotBeLessThanZero: "下载币优惠数额不能小于0",
        downloadCoinDiscountCanNotBeMoreThanAmountActuallyPaid: "下载币优惠数额不得大于实付金额",
        confirm: "确定"
      }
    },
    commitContent: {
      url: '/data/shoppingCart_01_shoppingCart.json',
      picLinkUrl: '',
      staticText: {
        order: "订单",
        paidSuccess: "支付成功",
        paidFailed: "支付失败",
        success: "成功",
        failed: "失败",
        checkOrder: "查看订单",
      }
    },
    qrCode: {
      url: '/data/shoppingCart_01_shoppingCart.json',
      picLinkUrl: '',
      staticText: {
        payWithWeChatScan: "请使用微信扫一扫支付",
        downloadCoinCharge: "下载币充值"
      }
    }
  }
}, `; // 组件描述信息

const dev = {
  shoppingCart: {
    shoppingCart_01: {
      cartContent: {
        inventorySwitchFlag: false, // 是否需要库存判断开关按钮
        yanjishiFeeSwitchFlag: false, // 个性化需求：延边教育项目针对延吉市有一套邮费规则
        directUrl: { // 购物车列表有很多类型的组件 类型不同可能跳转不同的详情页面 根据类型配置
          '91': './bookdetail.html',
          '94': './bookdetail.html',
          '149': './journaldetail.html',
          '177': './seriesdetail.html'
        },
        bookType: '91', // 纸质书
        ebookType: '94', // 电子书
        staticText: {
          priceChangeInfo: "价格变更信息：",
          priceDescInfo: "商品比加入购物车时价格降低了",
          money: "元",
          selectAll: "全选",
          productInfo: "商品信息",
          unitPrice: "单价（元）",
          quantity: "数量",
          sumPrice: "金额",
          operation: "操作",
          author: "作者：",
          dontParticipateAnyActivities: "不参与任何活动",
          delete: "删除",
          addToCollection: "添加收藏",
          haveCollected: "已收藏",
          moveToCollection: "移入收藏",
          noImg: "暂无图片",
          yuan: "￥",
          selectAtLeastOne: "请选择至少一件商品",
          settleAccounts: "结算",
          totalPrice: "总价：",
          haveSaved: "已节省：",
          haveSelected: "已选中",
          productQuanity: "件商品",
          cartEmptyInfo: "您的购物车还是空的，赶紧行动吧！",
          invoiceInfo: "发票信息",
          chooseWetherNeedInvoice: "选择是否需要发票",
          yes: "是",
          no: "否",
          discountCoupon: "优惠券",
          satisfy: "满",
          toUse: "使用",
          deduction: "直接抵扣",
          discount: "折",
          discountRate: "折扣率",
          date: "日期：",
          only: "仅限：",
          paperBook: "纸质书",
          ebook: "电子书",
          ejournal: '电子期刊',
          classification: "分类",
          deselect: "取消选择",
          noCoupons: "暂无优惠券",
          modeOfPayment: "支付方式",
          postscript: "备注信息",
          inputPostscript: "填写备注信息",
          pleaseInputPostscript: "请输入备注信息",
          youCanAlsoInput: "您还可以输入",
          wordQuanity: "个字",
          productList: "商品列表",
          onSale: "促销",
          ebookClass: "(电子书)",
          ejournalClass: '(电子期刊)',
          totalCount: "共计",
          shouldPay: "应付：",
          totalHave: "共有",
          downloadCoin: "下载币",
          oneCoinEqualsOneYuan: "1下载币=",
          reducePrice: "优惠：- ",
          downloadCoinReduce: "下载币：- ",
          modeOfDistribution: "配送方式：",
          carriage: "运费：",
          actuallyPaid: "实付金额：",
          submitOrder: "提交订单",
          remarksShouldNotExceedFiftyCharacters: '备注不能超过50个字符',
          systemPrompt: "系统提示",
          activityReplacementFail: "活动更换失败~",
          areYouSureToDeleteTheItem: "您确定要删除该商品吗?",
          cancel: "取消",
          deleteSuccess: "删除成功！",
          deleteFailed: "删除失败！",
          theQuantityOfProductsMustNotExceedTwoHundred: "商品数量不能大于200",
          collectSuccess: "收藏成功",
          cancelCollectSuccess: "取消收藏成功",
          moveIntoCollectionFolderSuccess: "成功移入收藏夹",
          moveIntoCollectionFolderFailed: "移入收藏夹失败",
          numberOfProductsMustBeMoreThanZero: "商品数量必须大于0",
          shippingAddressMustNotBeEmpty: "收货地址不得为空",
          orderSubmissionError: "订单提交有误",
          downloadCoinNotEnough: "下载币不足~",
          downloadCoinDiscountCanNotBeLessThanZero: "下载币优惠数额不能小于0",
          downloadCoinDiscountCanNotBeMoreThanAmountActuallyPaid: "下载币优惠数额不得大于实付金额",
          confirm: "确定",
          operateError: '操作失败',
          selectCorrectPayWay: '请选择有效的支付方式',
          notEnoughProduct: "库存不足",
          perBook: "本。"
        },
        addressContent: {
          staticText: {
            receiverAddress: "收货地址",
            pleaseAddNewAddress: "暂无可选地址，您需要新增地址。",
            selectOtherAddress: "选择其他收货地址",
            addNewAddress: "新增地址",
            selectReceiverAddress: "选择收货地址",
            cancel: "取 消",
            yes: "确 定",
            addNewReceiverAddress: "新增收货地址",
            receiver: "收货人",
            receivingArea: "收货地区",
            pleaseCompleteInformationOfProvincesAndCities: "请完整的省市信息",
            detailedAddress: "详细地址",
            pleaseFillInTheDetailedAddress: "请填写详细地址",
            phone: "联系电话",
            newAddressSuccessfullyAdded: "新增地址成功",
            newAddressFailed: "新增地址失败",
            pleaseFillInTheConsignee: "请填写收货人",
            consigneeMustNotExceed40Characters: "收货人不能超过40个字符",
            pleaseFillInTheContactNumber: "请填写联系电话",
            pleaseEnterTheNumber: "请输入数字",
            theTelephoneNumWrong:"请输入正确的手机号码",
            theTelephoneIsLong: "电话长度过长",
            province: "省份",
            prefectureLevelCity: "地级市",
            cityCountyLevelCity: "市、县级市"

          }
        },
        invoiceContent: {
          staticText: {
            chooseInvoiceType: "选择发票类型",
            regularInvoice: "普通发票",
            valueAddedTaxInvoice: "增值税发票",
            invoiceTitle: "发票抬头",
            invoiceContent: "发票内容",
            detail: "明细",
            stationery: "图书",
            companyName: "户名",
            taxpayerIdentificationCode: "户名",
            registeredAddress: "地址",
            registeredTelephone: "电话",
            depositBank: "开户银行",
            bankAccount: "银行账户",
            alter: "修改",
            confirm: "确 定",
            pleaseFillInTheCompanyName: "请填写户名",
            pleaseFillInTheTaxpayerIdentificationNumber: "请填写税号",
            theTaxpayerIdentificationNumberShallNotExceed20Characters: "税号不能超过20个字符",
            pleaseFillInTheRegisteredAddress: "请填写地址",
            pleaseFillInTheRegistrationNumber: "请填写电话",
            pleaseFillOutTheOpeningBank: "请填写开户银行",
            theOpeningBankCannotExceed21Characters: "开户银行不能超过21个字符",
            pleaseFillOutYourBankAccount: "请填写银行账户",
            personage: "个人"
          }
        }
      },
      commitContent: {
        url: '/data/shoppingCart_01_shoppingCart.json',
        picLinkUrl: '',
        staticText: {
          order: "订单",
          paidSuccess: "支付成功",
          paidFailed: "支付失败",
          success: "成功",
          failed: "失败",
          checkOrder: "查看订单",
        }
      },
      qrCode: {
        url: '/data/shoppingCart_01_shoppingCart.json',
        picLinkUrl: '',
        staticText: {
          payWithWeChatScan: "请使用微信扫一扫支付",
          downloadCoinCharge: "下载币充值"
        }
      },

    },
  }
};

const prod = {
  shoppingCart: {
    shoppingCart_01: {
      cartContent: {
        inventorySwitchFlag: false, // 是否需要库存判断开关按钮
        yanjishiFeeSwitchFlag: false, // 个性化需求：延边教育项目针对延吉市有一套邮费规则
        directUrl: { // 购物车列表有很多类型的组件 类型不同可能跳转不同的详情页面 根据类型配置
          '91': './bookdetail.html',
          '94': './bookdetail.html',
          '149': './journaldetail.html',
          '177': './seriesdetail.html'
        },
        bookType: '91', // 纸质书
        ebookType: '94', // 电子书
        staticText: {
          priceChangeInfo: "价格变更信息：",
          priceDescInfo: "商品比加入购物车时价格降低了",
          money: "元",
          selectAll: "全选",
          productInfo: "商品信息",
          unitPrice: "单价（元）",
          quantity: "数量",
          sumPrice: "金额",
          operation: "操作",
          author: "作者：",
          dontParticipateAnyActivities: "不参与任何活动",
          delete: "删除",
          addToCollection: "添加收藏",
          haveCollected: "已收藏",
          moveToCollection: "移入收藏",
          noImg: "暂无图片",
          yuan: "￥",
          selectAtLeastOne: "请选择至少一件商品",
          settleAccounts: "结算",
          totalPrice: "总价：",
          haveSaved: "已节省：",
          haveSelected: "已选中",
          productQuanity: "件商品",
          cartEmptyInfo: "您的购物车还是空的，赶紧行动吧！",
          invoiceInfo: "发票信息",
          chooseWetherNeedInvoice: "选择是否需要发票",
          yes: "是",
          no: "否",
          discountCoupon: "优惠券",
          satisfy: "满",
          toUse: "使用",
          deduction: "直接抵扣",
          discount: "折",
          discountRate: "折扣率",
          date: "日期：",
          only: "仅限：",
          paperBook: "纸质书",
          ebook: "电子书",
          ejournal: '电子期刊',
          classification: "分类",
          deselect: "取消选择",
          noCoupons: "暂无优惠券",
          modeOfPayment: "支付方式",
          postscript: "备注信息",
          inputPostscript: "填写备注信息",
          pleaseInputPostscript: "请输入备注信息",
          youCanAlsoInput: "您还可以输入",
          wordQuanity: "个字",
          productList: "商品列表",
          onSale: "促销",
          ebookClass: "(电子书)",
          ejournalClass: '(电子期刊)',
          totalCount: "共计",
          shouldPay: "应付：",
          totalHave: "共有",
          downloadCoin: "下载币",
          oneCoinEqualsOneYuan: "1下载币=",
          reducePrice: "优惠：- ",
          downloadCoinReduce: "下载币：- ",
          modeOfDistribution: "配送方式：",
          carriage: "运费：",
          actuallyPaid: "实付金额：",
          submitOrder: "提交订单",
          remarksShouldNotExceedFiftyCharacters: '备注不能超过50个字符',
          systemPrompt: "系统提示",
          activityReplacementFail: "活动更换失败~",
          areYouSureToDeleteTheItem: "您确定要删除该商品吗?",
          cancel: "取消",
          deleteSuccess: "删除成功！",
          deleteFailed: "删除失败！",
          theQuantityOfProductsMustNotExceedTwoHundred: "商品数量不能大于200",
          collectSuccess: "收藏成功",
          cancelCollectSuccess: "取消收藏成功",
          moveIntoCollectionFolderSuccess: "成功移入收藏夹",
          moveIntoCollectionFolderFailed: "移入收藏夹失败",
          numberOfProductsMustBeMoreThanZero: "商品数量必须大于0",
          shippingAddressMustNotBeEmpty: "收货地址不得为空",
          orderSubmissionError: "订单提交有误",
          downloadCoinNotEnough: "下载币不足~",
          downloadCoinDiscountCanNotBeLessThanZero: "下载币优惠数额不能小于0",
          downloadCoinDiscountCanNotBeMoreThanAmountActuallyPaid: "下载币优惠数额不得大于实付金额",
          confirm: "确定",
          operateError: '操作失败',
          selectCorrectPayWay: '请选择有效的支付方式',
          notEnoughProduct: "库存不足",
          perBook: "本。"
        },
        addressContent: {
          staticText: {
            receiverAddress: "收货地址",
            pleaseAddNewAddress: "暂无可选地址，您需要新增地址。",
            selectOtherAddress: "选择其他收货地址",
            addNewAddress: "新增地址",
            selectReceiverAddress: "选择收货地址",
            cancel: "取 消",
            yes: "确 定",
            addNewReceiverAddress: "新增收货地址",
            receiver: "收货人",
            receivingArea: "收货地区",
            pleaseCompleteInformationOfProvincesAndCities: "请完整的省市信息",
            detailedAddress: "详细地址",
            pleaseFillInTheDetailedAddress: "请填写详细地址",
            phone: "联系电话",
            newAddressSuccessfullyAdded: "新增地址成功",
            newAddressFailed: "新增地址失败",
            pleaseFillInTheConsignee: "请填写收货人",
            consigneeMustNotExceed40Characters: "收货人不能超过40个字符",
            pleaseFillInTheContactNumber: "请填写联系电话",
            pleaseEnterTheNumber: "请输入数字",
            theTelephoneIsLong: "电话长度过长",
            province: "省份",
            prefectureLevelCity: "地级市",
            cityCountyLevelCity: "市、县级市"

          }
        },
        invoiceContent: {
          staticText: {
            chooseInvoiceType: "选择发票类型",
            regularInvoice: "普通发票",
            valueAddedTaxInvoice: "增值税发票",
            invoiceTitle: "发票抬头",
            invoiceContent: "发票内容",
            detail: "明细",
            stationery: "图书",
            companyName: "户名",
            taxpayerIdentificationCode: "户名",
            registeredAddress: "地址",
            registeredTelephone: "电话",
            depositBank: "开户银行",
            bankAccount: "银行账户",
            alter: "修改",
            confirm: "确定",
            cancel: "取消",
            pleaseFillInTheCompanyName: "请填写户名",
            pleaseFillInTheTaxpayerIdentificationNumber: "请填写税号",
            theTaxpayerIdentificationNumberShallNotExceed20Characters: "税号不能超过20个字符",
            pleaseFillInTheRegisteredAddress: "请填写地址",
            pleaseFillInTheRegistrationNumber: "请填写电话",
            pleaseFillOutTheOpeningBank: "请填写开户银行",
            theOpeningBankCannotExceed21Characters: "开户银行不能超过21个字符",
            pleaseFillOutYourBankAccount: "请填写银行账户",
            personage: "个人",
            sureDoNotNeedInvoice: "您确定不需要发票吗?",
            systemPrompt: "系统提示",
            noInvoice: "不需要发票"
          }
        }
      },
      commitContent: {
        url: '/data/shoppingCart_01_shoppingCart.json',
        picLinkUrl: '',
        staticText: {
          order: "订单",
          paidSuccess: "支付成功",
          paidFailed: "支付失败",
          success: "成功",
          failed: "失败",
          checkOrder: "查看订单",
        }
      },
      qrCode: {
        url: '/data/shoppingCart_01_shoppingCart.json',
        picLinkUrl: '',
        staticText: {
          payWithWeChatScan: "请使用微信扫一扫支付",
          downloadCoinCharge: "下载币充值"
        }
      },
    },
  }
};

const platform = 'PC';
const pageType = ['cart'];
const resourceType = ['book'];

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
