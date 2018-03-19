<!--个人中心优惠券 edit by song 2017/11/28-->
<template>
  <div class="main_right fl" id="couponsCom">
    <div class="wzdh_yhq f14 color_6f6">
      <div class="wzdh_yhq_con">
        <!--<div class="wzdh_yhq_con_all f16">
          <div class="wzdh_yhq_con_all_01 fl mr05">
            <p class="color_6f6 line-h24 mt10 mb05">可使用优惠券总额</p>
            <p class="color_ca0 f24">{{sumCoupons.noUse | formatMoney}}</p>
          </div>
          <div class="wzdh_yhq_con_all_01 fl">
            <p class="color_6f6 line-h24 mt10 mb05">已用优惠券总额</p>
            <p class="color_ca0 f24">{{sumCoupons.used | formatMoney}}</p>
          </div>
        </div>-->
        <div class="couponActive">
          <el-input placeholder="请输入优惠码" v-model="password"></el-input>
          <el-button size="small" @click="activeCoupon()">激活</el-button>
        </div>
        <div class="wzdh_yhq_con_list cl mt30">
          <div class="wzdh_yhq_con_list_title color_727 line-h24 f18 pb15 pl12">优惠券列表</div>
          <div class="wzdh_yhq_con_list_tab f16 pl12  pr12 mt30 mb25">
            <p class="fl wzdh_yhq_con_list_tab_01"><span :class="{'on': showItem === 'noUse'}"
                                                         @click="toggleCoupon('noUse')">可用</span></p>

            <p class="fl wzdh_yhq_con_list_tab_02" style="width: 310px;"><span :class="{'on': showItem === 'used'}"
                                                                               @click="toggleCoupon('used')">已用</span>
            </p>

            <p class=" fl wzdh_yhq_con_list_tab_03" style="width: 120px;"><span :class="{'on': showItem === 'expire'}"
                                                                                @click="toggleCoupon('expire')">已过期</span>
            </p>
          </div>
          <div class="wzdh_yhq_con_list_tab_con cl">
            <table width="100%" cellspacing="0" cellpadding="0" border="0">
              <tr class="yhq_title">
                <td>面值</td>
                <td style="width: 46%;">使用时间</td>
                <td style="width: 20%;text-align: right; padding-right: 32px;">操作</td>
              </tr>
              <tr class="yhq_con" v-for="list in couponsList" v-if="couponsList.length > 0">
                <td>
                  <div class="yhq_con_01 color_fff" v-if="list.type === 'fullCut'">
                    <div class="fl mr05 ml18">
                      <span class="yhq_con_02">￥</span>
                      <span class="yhq_con_03">{{list.cprice}}</span>
                    </div>
                    <div class="fl">
                      <p class="yhq_con_04 pt10 pb05">优惠券</p>
                      <p class="yhq_con_05">实付满{{list.fullPrice}}使用</p>
                    </div>
                  </div>
                  <div class="yhq_con_01 color_fff" v-if="list.type === 'deduction'">
                    <div class="fl mr05 ml18">
                      <span class="yhq_con_02">抵</span>
                      <span class="yhq_con_03">{{list.cprice}}</span>
                    </div>
                    <div class="fl">
                      <p class="yhq_con_04 pt10 pb05">优惠券</p>
                      <p class="yhq_con_05">直接抵扣</p>
                    </div>
                  </div>
                  <div class="yhq_con_01 color_fff" v-if="list.type === 'discountRate'">
                    <div class="fl mr05 ml18">
                      <span class="yhq_con_02">折</span>
                      <span class="yhq_con_03">{{list.cprice}}</span>
                    </div>
                    <div class="fl">
                      <p class="yhq_con_04 pt10 pb05">优惠券</p>
                      <p class="yhq_con_05">折扣率</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="color_656 f16 mb05">
                    {{list.cbtime | formatTime}} - {{list.cetime | formatTime}}
                  </p>
                  <p style="margin-bottom: 0px;">
                    <span class="couponRange">仅限：</span>
                    <span class="couponRange" :title="list.classifyName">{{list.classifyName | formatName}}分类</span>
                    <span class="couponRange" v-if="list.couponRange === 'book'">纸质书</span>
                    <span class="couponRange" v-if="list.couponRange === 'ebook'">电子书</span>
                  </p>
                  <p style="height: 26px; line-height: 26px; margin-bottom: 0px;">券号：{{list.id}}</p>
                </td>
                <td class="yhq_sy" v-if="showItem === 'noUse'">
                  <a class="yhq_sy_01 color_fff" style="cursor: pointer" @click="toUseCoupons(list)">立即使用</a>
                </td>
              </tr>
            </table>
            <div class="noneCoupons" v-if="couponsList.length === 0 && showItem === 'noUse'">暂无可用优惠券~</div>
            <div class="noneCoupons" v-if="couponsList.length === 0 && showItem === 'used'">暂无已用优惠券~</div>
            <div class="noneCoupons" v-if="couponsList.length === 0 && showItem === 'expire'">暂无已过期优惠券~</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from "vue";
// import * as type from 'projectsConfig/config.wl.js';
import { mapGetters, mapActions } from "vuex";
export default {
  name: "coupon",
  reused: true,
  props: ["namespace"],
  mounted: function() {
    this.siteId = CONFIG.SITE_CONFIG.siteId;
    this.$store.dispatch("personalCenter/queryUser", {
      // 先去vuex获取一下用户信息
      loadedCallBack: this.loadCallBack
    });
  },
  data() {
    return {
      showItem: "noUse",
      password: "",
      siteId: ""
    };
  },
  computed: {
    ...mapGetters({
      member: "personalCenter/getMember",
      /*member: 'page/member/login/getMember',  // 获取用户信息 */
      couponsList: "personalCenter/getCouponsList", // 优惠券列表
      sumCoupons: "personalCenter/getSumCoupons" // 可用 or 已用优惠券总金额
    })
  },
  components: {},
  methods: {
    activeCoupon() {
      // 优惠码激活
      var _this = this;
      var params = {
        param: {
          couponPassword: this.password, //优惠券的密码
          loginName: this.member.loginName
        },
        myCallback: function() {
          if (this.checkStatus.status === true) {
            // 操作成功
            var errorMsg = this.checkStatus.msg;
            _this.$alert(errorMsg, "系统提示", {
              confirmButtonText: "确定"
            });
          } else {
            // 操作失败
            _this.$alert("操作失败~", "系统提示", {
              confirmButtonText: "确定"
            });
          }
          _this.password = "";
          _this.queryCoupons();
        }
      };
      if (this.password !== "") {
        this.$store.dispatch("personalCenter/queryActiveCoupons", params);
      }
    },
    loadCallBack() {
      this.queryCoupons();
      this.$store.dispatch("personalCenter/querySumCoupons", {
        loginName: this.member.loginName
      });
    },
    toggleCoupon(item) {
      this.showItem = item;
      this.queryCoupons();
    },
    queryCoupons() {
      var params = {
        loginName: this.member.loginName,
        type: this.showItem
      };
      this.$store.dispatch("personalCenter/queryCoupons", params);
    },
    toUseCoupons(item) {
      // 立即使用 跳转到第一个分类下的列表页面
      if (this.siteId == 1) {
        if (item.couponRange == "book") {
          window.location.href = "../pages/bestsale.html";
        } else {
          window.location.href = "../pages/recommend.html";
        }
      } else {
        var cascadeId = item.cascadeId.substring(
          0,
          item.cascadeId.indexOf(",")
        );
        window.location.href = "../pages/bookList.html?cascadeId=" + cascadeId;
      }
    }
  },
  filters: {
    formatTime: function(value) {
      if (value) {
        return value.substring(0, value.indexOf(" ")).replace(/-/g, ".");
      } else {
        return value;
      }
    },
    formatDiscount: function(value) {
      return value * 10;
    },
    formatName: function(value) {
      if (value) {
        return value.replace(/,/g, "，");
      } else {
        return value;
      }
    },
    formatMoney: function(value) {
      if (value) {
        return Number(value).toFixed(2) + " 元";
      } else {
        return value;
      }
    }
  }
};
</script>
<style>
#couponsCom .couponActive .el-input {
  width: 200px;
}

#couponsCom .couponRange {
  max-width: 200px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}

#couponsCom .yhq_con .yhq_con_02 {
  font-size: 24px;
}

#couponsCom .yhq_con .yhq_con_03 {
  font-size: 40px;
}

#couponsCom .noneCoupons {
  height: 60px;
  line-height: 60px;
  text-align: center;
}

#couponsCom .main_right {
  width: 880px;
  overflow: hidden;
  margin: 0 auto;
}

#couponsCom .color_6f6 {
  color: #6f6f6f;
}

#couponsCom .wzdh_yhq {
  border: 1px solid #d9d9d9;
  padding: 40px 35px;
}

#couponsCom .wzdh_yhq .wzdh_yhq_con {
  width: 690px;
  margin: 0 auto;
}

#couponsCom .wzdh_yhq .wzdh_yhq_con .wzdh_yhq_con_all {
  overflow: hidden;
}

#couponsCom .f16 {
  font-size: 16px;
}

#couponsCom .wzdh_yhq_con_all .wzdh_yhq_con_all_01 {
  width: 340px;
  height: 88px;
  background: #eeeeee;
  text-align: center;
}

#couponsCom .color_ca0 {
  color: #ca0000;
}

#couponsCom .f24 {
  font-size: 24px;
}

#couponsCom .mt30 {
  margin-top: 30px;
}

#couponsCom .wzdh_yhq_con_list .wzdh_yhq_con_list_title {
  border-bottom: 1px solid #c50000;
}

#couponsCom .wzdh_yhq_con_list .wzdh_yhq_con_list_tab {
  font-weight: bold;
  overflow: hidden;
}

#couponsCom .wzdh_yhq_con_list .wzdh_yhq_con_list_tab p {
  width: 222px;
  height: 24px;
}

#couponsCom .fl {
  float: left;
}

#couponsCom .wzdh_yhq_con_list .wzdh_yhq_con_list_tab span {
  cursor: pointer;
}

#couponsCom .wzdh_yhq_con_list .wzdh_yhq_con_list_tab span.on {
  color: #ca0000;
  border-bottom: 2px solid #ca0000;
}

#couponsCom
  .wzdh_yhq_con_list
  .wzdh_yhq_con_list_tab
  p.wzdh_yhq_con_list_tab_03 {
  text-align: right;
}

#couponsCom
  .wzdh_yhq_con_list
  .wzdh_yhq_con_list_tab
  p.wzdh_yhq_con_list_tab_02 {
  text-align: center;
}

#couponsCom .wzdh_yhq_con_list_tab_con table tr.yhq_title {
  background: #f2f2f2;
  line-height: 45px;
  height: 45px;
}

#couponsCom .wzdh_yhq_con_list_tab_con table tr td div.yhq_con_01 {
  background: url(../../assets/img/bg_10.png) no-repeat;
  display: inline-block;
  vertical-align: middle;
}

#couponsCom .wzdh_yhq_con_list_tab_con table tr td {
  width: 33.33%;
}

#couponsCom .wzdh_yhq_con_list_tab_con table tr.yhq_con {
  height: 125px;
}

#couponsCom .wzdh_yhq_con_list_tab_con table tr {
  vertical-align: middle;
  text-align: center;
}

#couponsCom .wzdh_yhq_con_list_tab_con table tr.yhq_con {
  height: 125px;
}

#couponsCom .wzdh_yhq_con_list_tab_con table tr {
  vertical-align: middle;
  text-align: center;
}

#couponsCom .wzdh_yhq_con_list_tab_con table tr td div.yhq_con_01 {
  background-position: -256px -512px;
  width: 214px;
  height: 78px;
}

#couponsCom .mr05 {
  margin-right: 5px;
}

#couponsCom .ml18 {
  margin-left: 18px;
}

#couponsCom .color_656 {
  color: #656260;
}

#couponsCom .f16 {
  font-size: 16px;
}

#couponsCom .mb05 {
  margin-bottom: 5px;
}

#couponsCom .yhq_sy {
  text-align: right;
}

#couponsCom .yhq_sy_01 {
  background: #ca0000;
  line-height: 30px;
  height: 30px;
  padding: 3px 15px;
}

#couponsCom .color_fff {
  color: #fff;
}

#couponsCom .mt10 {
  margin-top: 10px;
}

#couponsCom .wzdh_yhq_con_list .wzdh_yhq_con_list_title {
  border-bottom: 1px solid #c50000;
}

#couponsCom .color_727 {
  color: #727272;
}

#couponsCom .f18 {
  font-size: 18px;
}

#couponsCom .line-h24 {
  line-height: 24px;
}

#couponsCom .pb15 {
  padding-bottom: 15px;
}

#couponsCom .pl12 {
  padding-left: 12px;
}

#couponsCom .yhq_con .yhq_con_04 {
  font-size: 25px;
  margin-bottom: 0px;
}

#couponsCom .pb05 {
  padding-bottom: 5px;
}

#couponsCom .pt10 {
  padding-top: 10px;
}
</style>
