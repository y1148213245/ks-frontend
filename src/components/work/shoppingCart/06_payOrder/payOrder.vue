<!-- 支付订单组件 -->
<template>
  <section class="work_shoppingcart_06">
    <h2>订单</h2>
    <template v-for="item in showList">
      <div class="work_shoppingcart_06-item" :class="'work_shoppingcart_06-order'+item.tag" :key="item.tag">
        <span class="work_shoppingcart_06-order-label" v-text="item.label"></span><!-- label -->
        <span v-text="locationQuery[item.dataKey]"></span><!-- 值 -->
      </div>
    </template>
    <!-- 支付方式 -->
    <div class="work_shoppingcart_06-item">
      <span class="work_shoppingcart_06-paymethod">支付方式:</span>
      <el-radio-group v-model="payMethod">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </div>
    
    <el-button class="work_shoppingcart_06-submit" type="primary">支付</el-button>
  </section>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'
export default {
  name: 'work_shoppingcart_06',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      CONFIG: null,
      locationQuery:'',//地址栏参数
      showList: [],//订单展示的字段列表
      payMethod:''//支付方式
    };
  },

  computed: {},

  created () {
    this.initConfig();
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace] && PROJECT_CONFIG[this.namespace].shoppingCart && PROJECT_CONFIG[this.namespace].shoppingCart.work_shoppingcart_06 ? PROJECT_CONFIG[this.namespace].shoppingCart.work_shoppingcart_06 : null;
      this.showList = this.CONFIG ? this.CONFIG.showList : [
        {
          "label": "订单编号:",
          "tag": "orderCode",
          "dataKey": "orderCode"
        },
        {
          "label": "商品名称:",
          "tag": "name",
          "dataKey": "name"
        },
        {
          "label": "价格:",
          "tag": "price",
          "dataKey": "price"
        }
      ]
      this.locationQuery = URL.parse(document.URL, true).query;
    }
  }
}
</script>
<style>
.work_shoppingcart_06{
  margin: 0 auto;
  width: 800px;
}
.work_shoppingcart_06-submit{
  display: block;
}
.work_shoppingcart_06-item{
  margin: 10px auto;
  font-size: 14px;
}
</style>
