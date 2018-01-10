<!-- 图书详情页组件 edit by song 2018/1/2 -->
<template>
<div>
  <div id="eb_position" class="daohang">
    <span class="color_9b9">您的位置：</span>
    <a href="../index/index.html" class="color_9b9">首页</a>>>
    <a href="../book/index.html" class="color_626">电子商城</a>>>
    <span class="color_626" v-text="bookInfo.resourceName"></span>
  </div>
  <div id="bookBaseInfo" class="book_detail_con">
    <!-- 图书基本信息-->
    <dl class="book_detail_xq">
      <dt class="fl" style="width: 221px;height: 317px;"><img onload="DrawImage(this,221,317)" :src="bookInfo.bigPic" alt="暂无封面" style="text-align: center;float: left;line-height: 320px;border: 1px solid;"></dt>
      <dd class="fl pl28">
        <p class="title f20 scoped_overflow_hidden"><span class="book_detail_title"
                                                          v-text="bookInfo.resourceName"></span>
          <span v-if="bookInfo.isLike == '1'" class="dz dianzan_cg fr" @click="collectOrLike('1',bookInfo.contentType,bookInfo.pubId,bookInfo.productId)"></span>
          <span v-else-if="bookInfo.isLike == '0' || bookInfo.isLike == null" class="dz dianzan fr" @click="collectOrLike('1',bookInfo.contentType,bookInfo.pubId,bookInfo.productId)"></span>
          <span v-else-if="member.loginName == undefined" class="dz dianzan fr" @click="collectOrLike('1',bookInfo.contentType,bookInfo.pubId,bookInfo.productId)"></span>
          <a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis share fr" target="_blank"></a>
          <span v-if="bookInfo.isCollect == '1'" class="sc shoucang_cg fr" @click="collectOrLike('0',bookInfo.contentType,bookInfo.pubId,bookInfo.productId)"></span>
          <span v-else-if="bookInfo.isCollect == '0' || bookInfo.isCollect == null" class="sc shoucang fr" @click="collectOrLike('0',bookInfo.contentType,bookInfo.pubId,bookInfo.productId)"></span>
          <span v-else-if="member.loginName == undefined" class="sc shoucang fr" @click="collectOrLike('0',bookInfo.contentType,bookInfo.pubId,bookInfo.productId)"></span>
        </p>
        <p class="price mt10 f14">电子书价格:<span class="xj">￥{{bookInfo.memberPrice | filterFun}}</span><span class="yj">￥{{bookInfo.ebPrice | filterFun}}</span>
        </p>
        <p class="cuxiao_1 mt15 mb10">
          <span>促销：</span>
          <span class="cx_01">满额减</span>
          <span class="pl05 color_7d7 cx_tab">
            <em :class="{cx_01_on:index==0?true:false}" @click="discount(index)" v-for="(activity,index) in bookInfo.activityList">
              <span v-text="activity.discountName"></span>
            </em>
          </span>
        </p>

        <!-- 优惠券 封装成组件形式 -->
        <work_01_bookdetail_coupons :oneBookDetailInfo="bookInfo" namespace="bookdetail"></work_01_bookdetail_coupons>
        <!-- 优惠券 END -->

        <p class="paper line-h18 color_7e7 mb30 ">纸书定价：￥{{bookInfo.bookPrice | filterFun}}<span class="gm_01 ml05 mr05"><a :href="buyBookUrl" class="color_fff">购买纸书</a></span></p>

        <p class="other line-h30 mt15 f14">
          <a target="_blank" v-if="!bookInfo.bookFreeDownLoadPath" href="javascript:void(0)" class="color_fff mfsd mr20" style="background: #444;cursor:default"><i></i><span>免费试读</span></a>

          <a target="_blank" v-if="bookInfo.bookFreeDownLoadPath" href="javascript:void(0)" @click="probation(bookInfo.resourceId,0,bookInfo.resourceName)" class="color_fff mfsd mr20" ><i></i><span>免费试读</span></a>

          <a href="#" @click="cart(bookInfo.contentType)" class="color_c50 gwc"><i></i><span>加入购物车</span></a>
        </p>
      </dd>
    </dl>
  </div>
  <!--图书其他内容-->
  <div class="book_detail_qt  mt15 pl15 cl">
    <div class="book_detail_01 f16 color_626 mb20 line-h35 pt10 pb10 ml20">
      <p><span>出版时间：{{bookInfo.pubTime | formatDate}}</span><span>ISBN：{{bookInfo.isbn}}</span><span>版次：{{bookInfo.bookVersion}}</span><span>页数：{{bookInfo.pageNums}}</span>
      </p>
      <p><span>字数：{{bookInfo.bookWords}}</span></p>
    </div>
  </div>
    <!--图书其他内容-->
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapState } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import * as type from "@work/bookDetail/common/interfaces.js";
import Vue from 'vue';
import URL from "url";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "work_bookdetail_02_content",
  reused: true,
  props: ['namespace'],
  data () {
    return {
      CONFIG: null,
      pubId: '',
      buyBookUrl: '',
      probationUrl: '',
      flag: true,
    }
  },
  mounted () {
    this.pubId = URL.parse(window.location.href, true).query.pubId;
    this.buyBookUrl = PROJECT_CONFIG[this.namespace].book_detail.book_detail_02.buyBookUrl;
    this.probationUrl = PROJECT_CONFIG[this.namespace].book_detail.book_detail_02.probationUrl;
  },
  created: function () {
    this.getMemberInfo().then((member) => {
      var params = {
        loginName: member.loginName ? member.loginName : '',
        pubId: this.pubId,
        siteId: SITE_CONFIG.siteId
      };
      this.$store.dispatch('bookDetail/' + type.BOOK_DETAIL, params);
    });
  },
  filters: {
    formatDiscount: function (value) {
      return value * 10;
    },
    filterFun: function (value) {
      if (value) {
        return Number(value).toFixed(2);
      } else {
        return '0.00';
      }
    }
  },
  computed: {
    ...mapGetters({
      bookInfo: 'bookDetail/bookDetailInfo',
      getCartAmount: 'bookDetail/getCartAmount',
      getTotalAmount: "login_02/getTotalAmount",        // 获取购物车商品总数量
    }),
    ...mapGetters("login_02", {
      member: interfaces.GET_MEMBER
    }),
  },
  methods: {
    ...mapActions("login_02", {
      getMemberInfo: interfaces.ACTION_KEEP_SESSION
    }),
    //加入购物车
    cart (contentType) {
      var loginName = this.member.loginName;
      if (loginName == undefined || loginName == '') {
        this.$message({
          message: "请登录",
          type: 'error'
        });
        return false;
      }
      addCart(contentType, this, loginName);
    },

    discount (index) {
      //var _index = $(this).index();
      $("span.cx_tab em").eq(index).addClass('cx_01_on').siblings().removeClass('cx_01_on');
    },

    //收藏
    collectOrLike (operateTypeValue, contentType, id, prod_id) {
      var _this = this;
      var loginName = this.member.loginName;
      if (loginName == undefined || loginName == '') {
        _this.$message({
          message: "请登录",
          type: 'error'
        });
        return false;
      }
      var params = {
        param: {
          loginName: loginName,
          productId: prod_id,
          pubId: id,
          operateType: operateTypeValue,
          siteId: SITE_CONFIG.siteId
        },

        myCallback: function () {
          if (this.collectOrLikeInfo == "1") {
            if (this.message.code === '00') {
              _this.$message({
                message: this.message.msg,
                type: 'success'
              })
            } else if (this.message.code === '11') {
              _this.$message({
                message: this.message.msg,
                type: 'success'
              });
            } else if (this.message.code === '000') {
              _this.$message({
                message: this.message.msg,
                type: 'success'
              });
            } else if (this.message.code === '111') {
              _this.$message({
                message: this.message.msg,
                type: 'success'
              });
            }

            _this.$store.dispatch('bookDetail/' + type.BOOK_DETAIL, {
              pubId: params.param.pubId,
              loginName: params.param.loginName,
              siteId: SITE_CONFIG.siteId
            });
          }
        }
      }
      this.$store.dispatch('bookDetail/' + type.COLLECT_OR_LIKE, params);
    },
    probation (bookId, readType, bookName) {
      var url = BASE_URL + probationUrl + '?bookId=' + bookId + '&readType=' + readType + '&bookName=' + bookName;
      window.open(url);
    }
  },
  watch: {
    cartTotalAmount: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.recordTotalAmount = newValue + 1;
      }
    }
  },
}

function addCart (contentType, this_value, loginName) {
  var _this = this_value;
  var isEb, pubId, colId, number = "1";

  //电子书详情页加购物车
  isEb = _this.bookInfo.isEb;
  pubId = _this.bookInfo.pubId;
  colId = _this.bookInfo.colId; //栏目id
  if (isEb == "0") {
    _this.$message({
      message: "无价格，不是书，不可加购物车",
      type: 'error'
    });
    return;
  }
  var params = {
    param: {
      loginName: loginName,
      pubId: pubId,
      colId: colId, //栏目id
      number: number,
      siteId: SITE_CONFIG.siteId
    },
    myCallback: function () {
      if (this.addCartInfo === '1') { //电子书加入成功
        //原有的购物车数量
        var num = _this.getCartAmount;
        _this.$store.dispatch("login_02/getTotalAmount", parseInt(number) + num);  //详情页气泡上购物车数量
        // window.location.href = "../pages/addcarttips.html?pubId=" + this.pubId;
      }
      if (this.addCartInfo === '0') { //电子书已经加入
        _this.$message({
          message: this.cartMessage,
          type: 'success'
        })
      }
    }
  }
  _this.$store.dispatch('bookDetail/' + type.ADD_CART, params);
}
</script>
<style scoped>
.scoped_overflow_hidden {
  overflow: hidden;
}
</style>
