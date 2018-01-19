// 生成订单组件
<template>
  <div class="main_car">
    <div id="commitWrapper" class="container clearfix">
      <div class="successImg" v-if="commitInfo.status == 1">   <!--支付成功-->
        <img src="./assets/img/commitCorrect.png" alt="">
      </div>
      <div class="failImg" v-if="commitInfo.status == 0">
        <img src="./assets/img/commitFail.png" alt="">      <!--支付失败-->
      </div>
      <div class="orderCode" v-if="commitInfo.type==='order'">  <!--购物车商品订单-->
        <span>订单 </span>
        <span v-text="commitInfo.code"></span>
        <span v-if="commitInfo.status == 1"> 支付成功</span>
        <span v-if="commitInfo.status == 0"> 支付失败</span>
      </div>
      <div class="orderCode" v-if="commitInfo.type==='virtualCoin'"> <!--虚拟币充值订单-->
        <span>虚拟币充值</span>
        <span v-text="commitInfo.code"></span>
        <span v-if="commitInfo.status == 1">成功</span>
        <span v-if="commitInfo.status == 0">失败</span>
      </div>
      <div class="viewOrder">
        <el-button type="primary" @click="viewMyOrder()">查看订单</el-button>
      </div>
    </div>
  </div>

</template>
<script>
  import Vue from 'vue';
  import {mapGetters, mapActions} from 'vuex';
  import {SITE_CONFIG} from "projectConfig";

  export default {
    name: "work_shoppingcart_01_commit",
    reused: true,
    props: ["namespace"],
    mounted: function () {
      var hash = (window.location.hash).substring(window.location.hash.indexOf('/') + 1, window.location.hash.length);
      this.commitInfo.code = hash.substring(hash.indexOf('/') + 1, hash.indexOf('/', hash.indexOf('/') + 1));
      this.commitInfo.status = hash.substring(hash.indexOf('/', hash.indexOf('/') + 1) + 1, hash.lastIndexOf('/'));
      this.commitInfo.type = hash.substring(hash.lastIndexOf('/') + 1, hash.length);
    },
    data() {
      return {
        commitInfo: {
          code: '',
          status: 0,
          type: 'order'
        },
        /*commitStatus: true,*/
      }
    },
    methods: {
      viewMyOrder: function () {
        window.location.href = '../pages/personalcenter.html';  // 虚拟币订单需要跳转到我的账号
        if (this.commitInfo.type === 'order') {          // 商品订单需要跳转到我的订单
          window.location.href = '../page/personalcenter.html#list';
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
