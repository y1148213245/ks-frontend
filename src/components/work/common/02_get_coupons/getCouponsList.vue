<template>
  <!--优惠券领券弹窗页面组件-->
  <div id="getCoupon">
    <div id="lq_light" class="lq_content">
      <div class="line-h24">
        <div class="lq_name color_fff">领券
          <a href="javascript:void(0)" @click="hideModel()" class="lq_close color_fff">关闭</a>
        </div>
        <div class="lq" style="padding:15px;">
          <div v-for="(list, index) in bookDetailCoupons.couponList"
               :class="{'lq_01': index%2 === 0, 'lq_02': index%2 === 1}" :key="index">
            <div class="fl pt35 pl15 color_fff" :class="{'lq_01_mc': index%2 === 0, 'lq_02_mc': index%2 === 1}">
              <div v-if="list.type === 'fullCut'">
                <span class="f20">￥</span>
                <span style="font-size:40px;">{{list.couponPrice}}</span>
                <div>满 {{list.fullPrice}} 使用</div>
              </div>
              <div v-if="list.type === 'deduction'">
                <span class="f20">￥</span>
                <span style="font-size:40px;">{{list.couponPrice}}</span>
                <div>直接抵扣</div>
              </div>
              <div v-if="list.type === 'discountRate'">
                <span style="font-size:40px;">{{list.couponPrice | formatDiscount}}</span>
                <span class="f20">折</span>
                <div>折扣率</div>
              </div>         
            </div>
            <div class="lq_01_xq fl f14 color_2a2">
              <p class="couponRange">仅限：
                <span style="cursor:pointer;" :title="list.classifyName">{{list.classifyName | formatName}}分类</span>
                <span v-if="list.couponRange === 'book'">纸质书</span>
                <span v-if="list.couponRange === 'ebook'">电子书</span>
              </p>
              <p style="margin-bottom: 0px;">{{list.couponStime | formatTime}} - {{list.couponEtime | formatTime}}</p>
              <p>
                <a class="fr color_c50" @click="receiveCoupon(list)">
                  <span class="disabledCoupon" v-if="list.isPick === '1'">已领取</span>
                  <span class="lq_lqlj" v-else-if="list.pickNum > 0">领取</span>
                  <span class="disabledCoupon" v-else-if="list.pickNum === 0">已领完</span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <a href="javascript:void(0)" @click="hideModel()" class="lq_close2 color_fff">关闭</a>
      </div>
    </div>
    <div id="lq_fade" class="lq_black_overlay"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Get } from "@common";
import { mapGetters, mapActions, mapState } from "vuex";
import URL from "url";
import * as interfaces from "@work/login/common/interfaces.js";
import * as type from "@work/bookDetail/common/interfaces.js";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "work_common_02",
  reused: true,
  props: ["namespace"],
  created: function() {
    var param = URL.parse(window.location.href, true).query;
    this.pubId = param.pubId;
    this.getMemberInfo().then(member => {
      this.loadCallBack();
    });
  },
  mounted: function() {
    this.CONFIG = PROJECT_CONFIG[this.namespace].common.get_coupons_02;
  },
  data() {
    return {
      pubId: "",
      CONFIG: {}
    };
  },
  computed: {
    ...mapGetters("login", {
      isLogin: interfaces.GET_MEMBER_ISLOGIN,
      member: interfaces.GET_MEMBER
    }),
    ...mapGetters({
      bookDetailCoupons: "bookDetail/bookDetailInfo" // 获取商品详情页优惠券信息
    })
  },
  methods: {
    ...mapActions("login", {
      getMemberInfo: interfaces.ACTION_KEEP_SESSION
    }),
    hideModel() {
      this.$emit("hideModel"); // 子组件向父组件通信
    },
    loadCallBack() {
      let loginName = this.member.loginName;
      var params = {
        loginName: loginName,
        pubId: this.pubId
      };
      this.$store.dispatch("bookDetail/" + type.BOOK_DETAIL, params);
    },
    receiveCoupon(list) {
      // 领取优惠券
      if (list.pickNum === 0 || list.isPick === "1") {
        // 已领完 或者 已领过 那就不能再执行领券操作
        return false;
      }
      let param = Object.assign({}, this.CONFIG.params);
      param.couponId = list.id;
      param.loginName = this.member.loginName;
      Get(CONFIG.BASE_URL+this.CONFIG.url, { params: param }).then(rep => {
        let couponStatus = rep.data.result === "1" ? rep.data.data : false;
        if (couponStatus.code === "success") {
          this.$message({
            message: "优惠券" + couponStatus.msg + "~",
            type: "success"
          });
          this.loadCallBack();
        } else if (couponStatus.code === "fail") {
          this.$message({
            message: "优惠券" + couponStatus.msg + "~",
            type: "error"
          });
          this.loadCallBack();
        } else {
          this.$message({
            message: "优惠券领取失败~",
            type: "error"
          });
        }
      });
    }
  },
  watch: {},
  filters: {
    formatTime: function(value) {
      if (value) {
        return value.substring(0, value.indexOf(" ")).replace(/-/g, ".");
      }
    },
    formatDiscount: function(value) {
      return value * 10;
    },
    formatName: function(value) {
      if (value) {
        return value.replace(/,/g, "，");
      }
    }
  }
};
</script>
<style scoped>
.couponRange {
  height: 24px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0px;
}

.disabledCoupon {
  color: #888888;
  border: 1px solid #888888;
  cursor: not-allowed;
  border-radius: 10%;
  padding: 2px 15px;
  cursor: not-allowed;
}

#getCoupon .lq_content {
  position: absolute;
  top: 30%;
  left: 32%;
  background-color: white;
  z-index: 1002;
  overflow: auto;
  background: url(./assets/img/lq_bg001.png) no-repeat;
  width: 455px;
  height: 550px;
  background-size: 455px 550px;
}

#getCoupon .line-h24 {
  line-height: 24px;
}

#getCoupon .lq_name {
  font-size: 44px;
  line-height: 86px;
  font-weight: bold;
  height: 90px;
  position: relative;
  text-align: center;
}

#getCoupon .lq_close {
  position: absolute;
  right: 10px;
  top: -20px;
  font-size: 12px;
}
.lq_close2 {
  float: right;
  margin: 5px;
}
#getCoupon .lq_black_overlay {
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 1001;
  -moz-opacity: 0.6;
  opacity: 0.6;
  filter: alpha(opacity=60);
}

#getCoupon .lq_01 {
  margin-top: 30px;
  height: 73px;
  background: url(./assets/img/lq01.png) no-repeat;
  width: 420px;
  height: 102px;
}

#getCoupon .color_fff {
  color: #fff;
}

#getCoupon .color_2a2 {
  color: #2a2a2a;
}

#getCoupon .pl15 {
  padding-left: 15px;
}

#getCoupon .pt35 {
  padding-top: 35px;
}

#getCoupon .fl {
  float: left;
}

#getCoupon .fr {
  float: right;
}

#getCoupon .color_2a2 {
  color: #2a2a2a;
}

#getCoupon .color_c50 {
  color: #c50000;
}

#getCoupon .f14 {
  font-size: 14px;
}

#getCoupon .lq_01_mc,
#getCoupon .lq_02_mc {
  width: 95px;
  box-sizing: content-box;
}

#getCoupon .f20 {
  font-size: 20px;
}

#getCoupon .lq_01_xq,
.lq_02_xq {
  padding: 12px 14px;
  width: 278px;
}

#getCoupon .color_727 {
  color: #727272;
}

#getCoupon .lq .lq_lqlj {
  border: 1px solid #f44949;
  border-radius: 10%;
  padding: 2px 15px;
}

#getCoupon .lq_02 {
  margin-top: 30px;
  height: 73px;
  background: url(./assets/img/lq02.png) no-repeat;
  width: 420px;
  height: 102px;
}
</style>
