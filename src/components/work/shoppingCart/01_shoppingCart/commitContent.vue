// 生成订单组件
<template>
  <div class="main_car">
    <div id="commitWrapper" class="container clearfix">
      <div class="successImg" v-if="commitInfo.status == 1">
        <!--支付成功-->
        <img src="./assets/img/commitCorrect.png" alt="">
      </div>
      <div class="failImg" v-if="commitInfo.status == 0">
        <img src="./assets/img/commitFail.png" alt="">
        <!--支付失败-->
      </div>
      <!-- 2018/10/15 song type取值代表不同含义：memberOrderPay从个人中心充值vip  order从购物车买资源 virtualCoin从个人中心充值虚拟币 -->
      <div class="orderCode" v-if="commitInfo.type==='memberOrderPay'">
        <!--个人中心充值vip： 充值vip不显示 订单和查看订单按钮 就提示一下成功与否就行 因为没有记录页面 -->
        <span v-if="commitInfo.status == 1"> {{getStaticText('paidSuccess') ? getStaticText('paidSuccess') : "支付成功"}}</span>
        <span v-if="commitInfo.status == 0"> {{getStaticText('paidFailed') ? getStaticText('paidFailed') : "支付失败"}}</span>
      </div>
      <div class="orderCode" v-if="commitInfo.type==='order'">
        <!--购物车商品订单-->
        <span>{{getStaticText('order') ? getStaticText('order') : "订单"}} </span>
        <span v-text="commitInfo.code"></span>
        <span v-if="commitInfo.status == 1"> {{getStaticText('paidSuccess') ? getStaticText('paidSuccess') : "支付成功"}}</span>
        <span v-if="commitInfo.status == 0"> {{getStaticText('paidFailed') ? getStaticText('paidFailed') : "支付失败"}}</span>

      </div>
      <div class="orderCode" v-if="commitInfo.type==='virtualCoin'">
        <!--下载币充值订单-->
        <span>{{getStaticText('downloadCoinCharge') ? getStaticText('downloadCoinCharge') : "下载币充值"}}</span>
        <span v-text="commitInfo.code"></span>
        <span v-if="commitInfo.status == 1">{{getStaticText('success') ? getStaticText('success') : '成功'}}</span>
        <span v-if="commitInfo.status == 0">{{getStaticText('failed') ? getStaticText('failed') : "失败"}}</span>

      </div>

      <div class="viewOrder" v-if="commitInfo.type !=='memberOrderPay'">
        <el-button type="primary" @click="viewMyOrder()">{{getStaticText('checkOrder') ? getStaticText('checkOrder') : "查看订单"}}</el-button>
      </div>
    </div>
  </div>

</template>
<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { SITE_CONFIG } from "projectConfig";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "work_shoppingcart_01_commit",
  reused: true,
  props: {
    namespace: { // 生成订单命名空间 需要多语言时才配置
      type: String,
      default: null
    },
  },
  mounted: function () {
    var hash = (window.location.hash).substring(window.location.hash.indexOf('/') + 1, window.location.hash.length);
    this.commitInfo.code = hash.substring(hash.indexOf('/') + 1, hash.indexOf('/', hash.indexOf('/') + 1));
    this.commitInfo.status = hash.substring(hash.indexOf('/', hash.indexOf('/') + 1) + 1, hash.lastIndexOf('/'));
    this.commitInfo.type = hash.substring(hash.lastIndexOf('/') + 1, hash.length);
  },
  created () {
    this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].shoppingCart.shoppingCart_01.commitContent : null;
  },
  data () {
    return {
      commitInfo: {
        code: '',
        status: 0,
        type: 'order'
      },
      /*commitStatus: true,*/
      CONFIG: ""
    }
  },
  methods: {
    viewMyOrder: function () {
      window.location.href = '../pages/personalcenter.html';  // 下载币订单需要跳转到我的账号
      if (this.commitInfo.type === 'order') {          // 商品订单需要跳转到我的订单
        window.location.href = '../pages/personalcenter.html#list';
      }
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    }
  }
}
</script>
<style>
#wl_header .nav a:hover {
  text-decoration: none;
  color: #ffffff;
}

#commitWrapper {
  margin-top: 36px;
  text-align: center;
  font-size: 14px;
  color: #333333;
  margin-bottom: 24px;
}

#commitWrapper .successImg img {
  width: 60px;
}

#commitWrapper .viewOrder a {
  display: inline-block;
  width: 150px;
  height: 46px;
  line-height: 46px;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 50px;
  cursor: pointer;
}

#commitWrapper .orderCode {
  height: 100px;
  line-height: 100px;
}
</style>
