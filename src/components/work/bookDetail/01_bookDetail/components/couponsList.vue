// created by song 2018/1/3
<template>
  <!--在商品详情页领取优惠券-->
  <div id="detail_page_coupons">
    <!-- 优惠券 -->
    <p class="cuxiao_3 pl35 mb10" v-if="oneBookDetailInfo.couponList && oneBookDetailInfo.couponList.length > 0">
      <span class="cx_03">优惠券</span>
      <span v-if="oneBookDetailInfo.couponList.length > 0">
            <span v-for="(list, index) in oneBookDetailInfo.couponList">
              <span v-if="list.type === 'fullCut'">
                <span class="book_cx03_01 color_fff">满{{list.fullPrice}}减{{list.couponPrice}}</span>
              </span>
              <span v-if="list.type === 'deduction'">
                <span class="book_cx03_01 color_fff">直接抵扣{{list.couponPrice}}</span>
              </span>
              <span v-if="list.type === 'discountRate'">
                <span class="book_cx03_02 color_fff">{{list.couponPrice | formatDiscount}}折</span>
              </span>
            </span>
          </span>
      <span class="ml22 gm_02" style="margin-left: 10px;"><a href="javascript:void(0)" @click="showCouponsModel()" :style="{backgroundImage: 'url(' + getCouponsImg + ')'}">领券</a></span>
    </p>
    <work_common_02 v-if="showModel" v-on:hideModel='hideModel' namespace="bookdetail"></work_common_02>
    <!-- 优惠券 END -->
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapState } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";

export default {
  name: 'work_01_bookdetail_coupons',
  reused: true,
  props: ['namespace'],
  created: function () {
    this.getMemberInfo().then((member) => {
      this.loginName = member.loginName;
    });
  },
  data () {
    return {
      showModel: false,
      loginName: '',
      getCouponsImg: ""
    };
  },
  props: ["oneBookDetailInfo"],
  mounted() {
    this.getCouponsImg = require("../assets/img/bg_10.png");
  },
  computed: {
    ...mapGetters("login", {
      isLogin: interfaces.GET_MEMBER_ISLOGIN,
    }),
  },
  methods: {
    ...mapActions("login", {
      getMemberInfo: interfaces.ACTION_KEEP_SESSION
    }),
    showCouponsModel () {
      if (this.loginName == undefined || this.loginName == '') {
        this.$alert('请您先登录！', "系统提示", {
          confirmButtonText: "确定"
        });
        return false;
      }
      this.showModel = true;
    },
    hideModel () {
      this.showModel = false;
    }
  },
  watch: {},
  filters: {
    formatDiscount: function (value) {
      return value * 10;
    },
  }
}
</script>
<style scoped>
#detail_page_coupons {
  color: #ffffff;
}

#detail_page_coupons .cuxiao_3 span.cx_03 {
  background: #fdd000;
  padding: 1px 10px;
  color: #fff;
}

#detail_page_coupons .book_cx03_01 {
  display: inline-block;
  background: url(../assets/img/book_cx03_01.png) no-repeat;
  margin-left: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
  width: 90px;
  text-align: center;
  line-height: 19px;
}

#detail_page_coupons .book_cx03_02 {
  display: inline-block;
  background: url(../assets/img/book_cx03_02.png) no-repeat;
  margin-left: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
  width: 25px;
  text-align: center;
  line-height: 19px;
}

#detail_page_coupons p.cuxiao_3 .gm_02 a {
  /* background-image: url(../assets/img/bg_10.png); */
  display: inline-block;
  width: 28px;
  cursor: pointer;
  text-indent: -9999px;
  vertical-align: middle;
  background-position: 0px -59px;
  height: 18px;
}
</style>
