/**
 * created by song 2017/12/21
 * 我的购物车的配置文件 放请求的url、params...
 */
import component from "../cartContent.vue";


const name = component.name; // 组件标签名

const title = "购物车组件"; // 组件 title

const description = `我的购物车`; // 组件描述信息

const dev = {
  shoppingCart: {
    shoppingCart_01: {
      cartContent: {
        url: 'cart/getCartAndActivity.do',
        params: {
          loginName: "",
          siteId: CONFIG.SITE_CONFIG.siteId,
          timeStamp: new Date().getTime(), // 加时间戳是为了不从缓存里取数据
        },
        bookType: '91', // 纸质书
        ebookType: '94', // 电子书
        picLinkUrl: '',
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
          selectAtLeastOne: "请选择至少一件商品噢~",
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
          oneCoinEqualsOneYuan: "1下载币=1元",
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
          shippingAddressMustNotBeEmpty: "收货地址不得为空噢~",
          orderSubmissionError: "订单提交有误",
          downloadCoinNotEnough: "下载币不足~",
          downloadCoinDiscountCanNotBeLessThanZero: "下载币优惠数额不能小于0噢~",
          downloadCoinDiscountCanNotBeMoreThanAmountActuallyPaid: "下载币优惠数额不得大于实付金额噢~",
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
    },
  }

};

const prod = {
  shoppingCart: {
      shoppingCart_01:{
        cartContent:{
          url:  'cart/getCartAndActivity.do',
          params: {
            loginName: "",
            siteId: CONFIG.SITE_CONFIG.siteId,
            timeStamp: new Date().getTime(), // 加时间戳是为了不从缓存里取数据
          },
          bookType: '91', // 纸质书
          ebookType: '94', // 电子书
          picLinkUrl: '',
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
            selectAtLeastOne: "请选择至少一件商品噢~",
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
            oneCoinEqualsOneYuan: "1下载币=1元",
            reducePrice: "优惠：- ",
            downloadCoinReduce: "下载币：- ",
            modeOfDistribution: "配送方式："	,
            carriage: "运费：",
            actuallyPaid: "实付金额：",
            submitOrder: "提交订单",
            remarksShouldNotExceedFiftyCharacters:'备注不能超过50个字符',
            systemPrompt:"系统提示",
            activityReplacementFail:"活动更换失败~",
            areYouSureToDeleteTheItem:"您确定要删除该商品吗?",
            cancel: "取消",
            deleteSuccess: "删除成功！",
            deleteFailed: "删除失败！",
            theQuantityOfProductsMustNotExceedTwoHundred: "商品数量不能大于200",
            collectSuccess: "收藏成功",
            cancelCollectSuccess: "取消收藏成功",
            moveIntoCollectionFolderSuccess: "成功移入收藏夹",
            moveIntoCollectionFolderFailed: "移入收藏夹失败",
            numberOfProductsMustBeMoreThanZero: "商品数量必须大于0",
            shippingAddressMustNotBeEmpty: "收货地址不得为空噢~",
            orderSubmissionError: "订单提交有误",
            downloadCoinNotEnough: "下载币不足~",
            downloadCoinDiscountCanNotBeLessThanZero:"下载币优惠数额不能小于0噢~",
            downloadCoinDiscountCanNotBeMoreThanAmountActuallyPaid:"下载币优惠数额不得大于实付金额噢~",
            confirm:"确定"
          }
        },
        commitContent:{
          url: '/data/shoppingCart_01_shoppingCart.json',
          picLinkUrl: '',
          staticText:{
            order:"订单",
            paidSuccess:"支付成功",
            paidFailed:"支付失败",
            success:"成功",
            failed:"失败",
            checkOrder:"查看订单",
          }
        },
        qrCode:{
          url: '/data/shoppingCart_01_shoppingCart.json',
          picLinkUrl: '',
          staticText:{
            payWithWeChatScan:"请使用微信扫一扫支付",
            downloadCoinCharge:"下载币充值"
          }
        }
      },
  }
};

const platform = 'PC';
const pageType = ['cart'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};

