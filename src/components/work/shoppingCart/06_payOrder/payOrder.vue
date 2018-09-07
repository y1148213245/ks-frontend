<!-- 支付订单组件 -->
<template>
  <section class="work_shoppingcart_06">
    <h2>订单</h2>
    <template v-for="item in showList">
      <div class="work_shoppingcart_06-item" :class="'work_shoppingcart_06-order'+item.tag" :key="item.tag">
        <span class="work_shoppingcart_06-order-label" v-text="item.label"></span>
        <!-- label -->
        <span v-text="locationQuery[item.dataKey]"></span>
        <!-- 值 -->
      </div>
    </template>
    <!-- 支付方式 -->
    <div class="work_shoppingcart_06-item">
      <span class="work_shoppingcart_06-paymethod">支付方式:</span>
      <el-radio-group v-model="payMethod">
        <el-radio v-for="(item,index) in payMethods" :label="item.payMethod" :key="index">{{item.name}}</el-radio>
        <!-- 支付名称name -->
      </el-radio-group>
    </div>

    <el-button class="work_shoppingcart_06-submit" type="primary" @click="commitOrder">支付</el-button>
  </section>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post,Get } from '@common'
import * as interfaces from "@work/login/common/interfaces.js";
import { mapGetters } from 'vuex';
export default {
  name: 'work_shoppingcart_06',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      CONFIG: null,
      locationQuery: '',//地址栏参数
      showList: [],//订单展示的字段列表
      payMethod: '',//支付方式
      curSelectedInvoice: {}//发票信息
    };
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },

  created () {
    this.initConfig();
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace] && PROJECT_CONFIG[this.namespace].shoppingCart && PROJECT_CONFIG[this.namespace].shoppingCart.work_shoppingcart_06 ? PROJECT_CONFIG[this.namespace].shoppingCart.work_shoppingcart_06 : null;
      this.showList = this.CONFIG ? this.CONFIG.showList : [
        // {
        //   "label": "订单编号:",
        //   "tag": "orderCode",
        //   "dataKey": "orderCode"
        // },
        {
          "label": "商品名称:",
          "tag": "name",
          "dataKey": "docName"
        },
        {
          "label": "价格:",
          "tag": "price",
          "dataKey": "price"
        }
      ]
      this.payMethods = this.CONFIG ? this.CONFIG.payMethods : [
        // {
        //   "name": "虚拟币",
        //   "payMethod": "Balance"
        // },
        {
          "name": "支付宝",
          "payMethod": "Alipay"
        },
        // {
        //   "name": "微信",
        //   "payMethod": "Weixin"
        // }
      ]
      this.payMethod = this.payMethods[0].payMethod; //默认值
      this.locationQuery = URL.parse(decodeURIComponent(document.URL), true).query;
    },

    commitOrder () {
      let vurl = this.CONFIG ? this.CONFIG.commitOrder.url : 'order/submitKnowledgeOrder.do'
      this.setOrderParams();
      Post(CONFIG.BASE_URL + vurl, this.Orderparams).then(resp => {
        let data = resp.data
        if (data.result == 1) {
          if (data.data.payMethodCode && data.data.payMethodCode == 'Balance') {

          } else {
            this.toPay(data.data)
          }
        } else {
          this.$message({
            type: 'warning',
            message: '请求服务器超时'
          })
        }
      })
    },
    setOrderParams () {
      let locationQuery = this.locationQuery
      /* 余额支付 */
      let balanceAmount = 0;//默认为0
      let realAmount = locationQuery.price;
      if (this.payMethod == 'Balance') {
        /* 虚拟币不够不允许支付 */
        if (1 - 0 < 0) {
          let errMsg = '余额不足,请更换其他支付方式'
          this.$message({
            type: 'warning',
            message: errMsg
          })
          return false
        } else {
          balanceAmount = locationQuery.price;
          realAmount = 0;
        }
      }
      /* 发票信息 */
      // this.curSelectedInvoice = {
      //   invoiceType: "", // 发票类型
      //   receipttypes: "",
      //   receiptId: "明细", // 普通发票的明细  默认显示明细  汉字 明细
      //   receiptType: "", // 1:个人  2:单位
      //   receiptTitle: "", // 发票抬头：个人 / 公司名称
      //   taxpayerCode: "", // 纳税人识别号
      //   companyAddress: "", // 公司住址
      //   companyPhone: "", // 公司联系方式
      //   bankName: "", // 开户银行
      //   bankAccount: "" // 开户账号
      // };
      /* 订单信息 */
      let temp, tempList;

      tempList = {
        id: "", //不用填
        productId: locationQuery.docLibId, //
        // combinationId: "94", //产品类型id  电子书 94
        nums: 1,    //
        totalPrice: locationQuery.price,
        pubId: locationQuery.orderId,//由地址栏传入orderId
        couponsId: "", //优惠卷id 现在为0
        rankDiscountRatio: "", //这是优惠的汇率
        resourceId: locationQuery.docId,
        resourceName: locationQuery.docName,
        resourceType: locationQuery.docLibName,
        periodicalType: locationQuery.docLibCode,
        periodicalYear: '',   //哪年的
        periodicalMonth: '', //传值空
        combinationId: "0",
      };
      temp = {
        activityId: 0, //活动id  填0
        productType: "", //产品类型id  电子书 94
        periodicalType: '',  //电子期刊是0
        periodicalName: '',  //期刊名称
        periodicalYear: '',   //哪年的
        periodicalMonth: '',  //6，7，8，9
        discountPrice: 0,
        id: '',
        code: "",
        totalPrice: locationQuery.price,
        list: [tempList],
      };
      this.Orderparams = {
        oremark: '',
        orderType: "knowledge",   //订单类型
        orderCode: "",
        balanceAmount: balanceAmount, // 如果是余额支付，那就写支付金额 不是就写0
        createTime: null,
        deliveryAddress: '', // 收货人整个地址 北京市海淀区 拼起来的地址
        deliveryContact: '', // 联系方式
        deliveryPerson: '', // 收件人
        deliveryPrice: 0, // 运费
        deliveryRemark: "", // 运费备注
        deliveryType: '', // 运输方式  汉字 顺丰
        discountAmount: '', //  商品各种活动优惠 不包含免运费的活动
        id: null, //不用写
        isReceipt: "0", //要不要发票， 0不需要 1要
        loginName: locationQuery.loginName,
        payAmount: locationQuery.price, // 应付金额 = 商品总价 + 运费
        payCode: "", //不用写
        payMethod: this.payMethod, // 支付方式： Weixin 微信支付 Alipay 支付宝支付  Balance 余额支付
        payRemark: '', // 订单备注
        payStatus: "", //空
        payTime: null,
        payType: 1, // 0线下支付  1在线支付
        payUser: "", //不用写
        realAmount: realAmount, // 实付金额 = 应付金额-运费-余额支付
        receiptId: '',
        receiptType: '', //如果要发票的话  1 个人 2 单位
        receiptTitle: '',
        taxpayerCode: '',
        companyAddress: '',
        companyPhone: '',
        bankName: '',
        bankAccount: '',
        remark: "",
        siteId: CONFIG.SITE_CONFIG.siteId,
        splitOrderList: [temp], //aaa
        totalPrice: locationQuery.price, // 商品总价（不含优惠运费）
        couponsOrder: '', // 优惠券的密码 如果有两张 以数组形式传递
        point: 0
      };
    },
    toPay (order) {
      let vurl = CONFIG.BASE_URL +
        "epay/getPayForm.do?orderId=" + order.orderId +
        "&loginName=" + this.locationQuery.loginName +
        "&payMethodCode=" + order.payMethodCode +
        '&siteId=' + CONFIG.SITE_CONFIG.siteId
      if (order.payMethodCode == 'Weixin') {
        // 微信支付
        Get(vurl).then(function (response) {
          var data = response.data.substring(
            response.data.indexOf("<a>") + 3,
            response.data.indexOf("</a>")
          );
          var orderCode = response.data.substring(
            response.data.indexOf("<div>") + 5,
            response.data.indexOf("</div>")
          );
          window.location.href =
            "../pages/qrcode.html?data=" +
            data +
            "&orderCode=" +
            orderCode;
        });
      } else {
        window.open(vurl, "_self")
      }


    }
  }
}
</script>
<style>
.work_shoppingcart_06 {
  margin: 0 auto;
  width: 800px;
}
.work_shoppingcart_06-submit {
  display: block;
}
.work_shoppingcart_06-item {
  margin: 10px auto;
  font-size: 14px;
}
</style>
