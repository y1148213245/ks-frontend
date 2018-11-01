/*
 * @Author: song 
 * @Date: 2018-10-08 17:55:15 
 * @Last Modified by: song
 * @Last Modified time: 2018-10-12 13:52:46
 * 开通 vip 功能 
 */
<template>
  <div class="subopenvip_container" v-loading="loadingSuccess">
    <!-- 开通 vip 功能 vip权益介绍 -->
    <section class="subopenvip_info">
      <div v-text="vipRights.payMemberName"></div>
      <div class="subopenvip_custom" v-text="CONFIG && CONFIG.vipRightsDetail"></div>
    </section>
    <ul class="subopenvip_recharge_ul">
      <li class="subopenvip_recharge_ul_li" v-for="(item, index) in rechargePlan" :key="index" :class="{'subopenvip_recharge_activeItem': activeIndex == index}" @click="selectRechargeRule(item, index)">
        <div class="subopenvip_recharge_context">
          <div class="subopenvip_recharge_context_cost" v-text="formatMoney(item.price)"></div>
          <div class="subopenvip_recharge_context_time" v-text="formatTime(item.months)"></div>
        </div>
      </li>
    </ul>

    <div class="subopenvip_buy">
      <el-button type="primary" @click="rightToPay()" v-text="getStaticText('rightToBuy') || '立即购买'"></el-button>
    </div>
    <div class="subopenvip_back">
      <el-button type="primary" @click="backIndex()" v-text="getStaticText('back') || '返回'"></el-button>
    </div>

    <!-- 立即购买 模态弹窗 -->
    <el-dialog :title="getStaticText('buyVIP') || '购买VIP'" :visible.sync="buyVipModel" width="60%" :close-on-press-escape="false" :close-on-click-modal="false">
      <!-- 要购买的vip信息 -->
      <div class="subopenvip_model_info">
        <div class="subopenvip_model_info_type tableCellTag">
          <div class="subopenvip_recharge_context_wrapper">
            <div class="subopenvip_recharge_context">
              <div class="subopenvip_recharge_context_cost" v-text="formatMoney(selectedRechargePlan.price)"></div>
              <div class="subopenvip_recharge_context_time" v-text="formatTime(selectedRechargePlan.months)"></div>
            </div>
          </div>
        </div>
        <div class="subopenvip_model_info_title tableCellTag">
          <span v-text="vipRights.payMemberName"></span>
          <span v-text="getStaticText('until') || '—'"></span>
          <span v-text="formatTime(selectedRechargePlan.months)"></span>
        </div>
        <div class="subopenvip_model_info_cost tableCellTag">
          <span v-text="unitMoney(selectedRechargePlan.price)"></span>
        </div>
      </div>

      <div class="subopenvip_model_info_needpay">
        <span v-text="getStaticText('needPay') || '需支付:'"></span>
        <span v-text="unitMoney(selectedRechargePlan.price)"></span>
      </div>

      <!-- 支付方式 -->
      <nav class="subopenvip_model_title" v-text="getStaticText('payWay') || '支付方式'"></nav>
      <el-radio-group class="subopenvip_model_radio_group" v-model="selectedWay">
        <el-radio class="subopenvip_model_radio" v-for="(way, index) in payWays" :label="index" :key="index" @change="selectedPayWays(way)">{{way.payName}}</el-radio>
      </el-radio-group>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmPay" v-text="getStaticText('confirmPay') || '确认支付'"></el-button>
        <el-button @click="buyVipModel = false" v-text="getStaticText('cancel') || '取消'"></el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import PROJECT_CONFIG from 'projectConfig';
import { mapGetters, mapActions } from "vuex";
import { Get, Post } from "@common";

export default {
  name: 'work_personalcenter_01_openvip',
  props: ['parentConfig', 'namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      loadingSuccess: true,
      activeIndex: 0, // 当前选中充值规则下标
      selectedRechargePlan: {}, // 当前选中充值规则对象 要带到模态弹窗页面上显示
      vipRights: [], // vip权益 map对象
      buyVipModel: false, // 购买vip弹窗
      payWays: [], // 支付方式
      selectedWay: 0, // 选中的支付方式下标
      selectedPayWay: {}, // 选中的支付方式对象
      rechargePlan: [], // 付费会员价格设置列表
    };
  },
  computed: {
    ...mapGetters("personalCenter/", {
      member: "getMember"
    })
  },

  created () {
    this.CONFIG = this.parentConfig.account.openVipConfig; // 若干子配置里面的开通会员所有配置
    this.getVipRights(); // 获取vip权益
  },

  mounted () { },

  methods: {
    getVipRights () { // 获取vip权益 
      Get(CONFIG.BASE_URL + this.CONFIG.getVipRightsUrl + '?loginName=' + this.member.loginName + '&siteId=' + CONFIG.SITE_CONFIG.siteId).then((resp) => {
        if (resp.data && resp.data.result == '1' && resp.data.data.length > 0) {
          this.vipRights = resp.data.data[0]; // vip权益
          this.getPayRules(this.vipRights.memberPayId); // 获取充值规则
        }
      })
    },
    getPayRules (memberPayId) { // 获取充值规则
      Get(CONFIG.BASE_URL + this.CONFIG.getVipPayRulesUrl + '?loginName=' + this.member.loginName + '&memberPayId=' + memberPayId).then((resp) => {
        if (resp.data && resp.data.result == '1' && resp.data.data.length > 0) {
          this.rechargePlan = resp.data.data; // 充值规则
          this.selectedRechargePlan = this.rechargePlan[0];
        }
        this.loadingSuccess = false;
      })
    },
    selectRechargeRule (item, index) { // 选中某个充值规则
      this.activeIndex = index;
      this.selectedRechargePlan = item;
    },
    rightToPay () { // 立即购买按钮
      this.buyVipModel = true;
      this.getPayWays();
    },
    getPayWays () { // 获取支付方式
      Get(CONFIG.BASE_URL + this.CONFIG.getPayWaysUrl + '?siteId=' + CONFIG.SITE_CONFIG.siteId).then((resp) => {
        if (resp.data && resp.data.result == '1' && resp.data.data.length > 0) {
          this.payWays = resp.data.data;
          this.selectedPayWay = this.payWays[0];
        }
      })
    },
    selectedPayWays (way) { // 选择某一个支付方式
      this.selectedPayWay = way;
    },
    confirmPay () { // 确认支付 去支付宝/微信
      this.buyVipModel = false;
      this.loadingSuccess = true;
      var openVipUrl = CONFIG.BASE_URL + this.CONFIG.toPayUrl + "?price=" + this.selectedRechargePlan.price + "&months=" + this.selectedRechargePlan.months + "&payMemberId=" + this.vipRights.memberPayId + "&loginName=" + this.member.loginName + "&payMethodCode=" + this.selectedPayWay.payCode + "&siteId=" + CONFIG.SITE_CONFIG.siteId;

      if (this.selectedPayWay.payCode == 'Alipay') { // 支付宝支付
        window.location.href = openVipUrl;
      } else if (this.selectedPayWay.payCode == "Weixin") { // 微信支付
        Get(openVipUrl).then(function (resp) {
          let data = resp.data;
          let datas = data.substring(data.indexOf("<a>") + 3, data.indexOf("</a>"));
          let orderCode = data.substring(data.indexOf("<div>") + 5, data.indexOf("</div>"));
          window.location.href = this.CONFIG.qrcodeUrl + "?data=" + datas + "&orderCode=" + orderCode + '&payType=virtualCoin';
        });
      }
    },
    formatMoney (prices) { // 会员充值费用
      return prices + (this.getStaticText('money') || '元');
    },
    unitMoney (cost) { // ￥
      return (this.getStaticText('unit') || '￥') + Number(cost).toFixed(2);
    },
    formatTime (months) { // 会员有效时间
      return months + (this.getStaticText('perMonth') || '个月')
    },
    backIndex () {
      this.$emit('currentShowF'); // 子调用父组件的方法
    },
    getStaticText (key) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[key]) {
        return this.CONFIG.staticText[key]
      } else {
        return false;
      }
    }
  }
}
</script>
<style>
.subopenvip_recharge_ul {
  overflow: hidden;
  padding: 20px 0px;
}

.subopenvip_recharge_ul .subopenvip_recharge_ul_li:first-child {
  margin-left: 0px;
}

.subopenvip_recharge_ul_li {
  width: 140px;
  height: 80px;
  border: 1px solid #ddd;
  border-radius: 4px;
  float: left;
  text-align: center;
  position: relative;
  margin-left: 30px;
  cursor: pointer;
}

.subopenvip_recharge_context {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.subopenvip_recharge_context_cost {
  font-size: 16px;
  font-weight: bold;
}

.subopenvip_recharge_activeItem {
  border-color: #e15616;
}

.subopenvip_buy {
  text-align: center;
}

.subopenvip_back {
  text-align: right;
  padding: 40px 0px 20px 0px;
}

.subopenvip_model_title {
  background-color: #ddd;
  padding: 2px 10px;
  margin: 10px 0;
}

.subopenvip_model_radio_group {
  padding: 0 10px;
}

.subopenvip_model_info_needpay {
  margin: 20px 0px;
  text-align: right;
}

.subopenvip_model_info .tableCellTag {
  display: table-cell;
  position: relative;
  width: 17%;
  height: 80px;
  vertical-align: middle;
}

.subopenvip_recharge_context_wrapper {
  position: relative;
  width: 140px;
  height: 80px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.subopenvip_model_info_cost {
  font-size: 16px;
  font-weight: bold;
}
</style>