<!-- 图书详情页组件 edit by song 2018/1/2 -->
<template>
<div class="work_bookdetail_02 work_bookdetail_02_skin">
  <div class="navigation">
    <span class="curPositionFixed">
      <span>您的位置：</span>
      <a class="indexPage" href="../pages/index.html">首页 </a>>>
    </span>
    <span class="curPositionUnfixed">
      <a class="ebookPage" href="../pages/ebook.html">电子书城 </a>>>
      <span v-text="bookInfo.resourceName"></span>
    </span>
    
  </div>

  <div class="bookDetailWrapper">
    <!-- 图书基本信息-->
    <dl class="bookDetailInfo">
      <dt class="bookDetailDt">
        <img class="bookDetailImg" onload="DrawImage(this,221,317)" :src="bookInfo.bigPic" alt="暂无封面">
      </dt>
      <dd class="bookDetailDd">
        <p class="titleCon">
          <span class="title" v-text="bookInfo.resourceName"></span>

          <span class="likeOperation" @click="collectOrLike('1', bookInfo.contentType, bookInfo.pubId, bookInfo.productId)" :class="{likeActive: bookInfo.isLike == '1', likeUnactive: bookInfo.isLike == '0' || bookInfo.isLike == null || member.loginName == undefined}"></span>

          <a href="http://www.jiathis.com/share" class="collectOperation share jiathis jiathis_txt jtico jtico_jiathis fr" target="_blank"></a>
          
          <span class="collectOperation" @click="collectOrLike('0', bookInfo.contentType, bookInfo.pubId, bookInfo.productId)" :class="{collectActive: bookInfo.isCollect == '1', collectUnactive: bookInfo.isCollect == '0' || bookInfo.isCollect == null || member.loginName == undefined}"></span>
        </p>

        <p class="price">
          电子书价格:
          <span class="newPrice">￥{{bookInfo.memberPrice | filterFun}}</span>
          <span class="oldPrice">￥{{bookInfo.ebPrice | filterFun}}</span>
        </p>

        <p class="promotion" v-if="bookInfo.activityList && bookInfo.activityList.length > 0">
          <span>促销：</span>
          <span class="fullcut">满额减</span>
          <span class="fullcutInfo">
            <em :class="{cx_01_on:index == 0 ? true : false}" @click="discount(index)" v-for="(activity,index) in bookInfo.activityList" :key="index">
              <span v-text="activity.discountName"></span>
            </em>
          </span>
        </p>

        <!-- 优惠券 封装成组件形式 -->
        <work_01_bookdetail_coupons :oneBookDetailInfo="bookInfo" namespace="bookdetail" style="margin-bottom:10px;"></work_01_bookdetail_coupons>
        <!-- 优惠券 END -->

        <p class="paperPrice">纸书定价：￥{{bookInfo.bookPrice | filterFun}}<span class="buyBook"><a :href="buyBookUrl">购买纸书</a></span></p>

        <p class="otherOpertion">

          <a target="_blank" class="probation" :class="{notProbation: !bookInfo.bookFreeDownLoadPath}" @click="probation(bookInfo.resourceId, 0, bookInfo.resourceName, bookInfo.bookFreeDownLoadPath)"><i class="opertionIcon read"></i><span>免费试读</span></a>

          <a class="addCart" @click="cart(bookInfo.contentType)"><i class="opertionIcon cart"></i><span>加入购物车</span></a>
        </p>
      </dd>
    </dl>
  </div>
  <!--图书其他内容-->
  <div class="otherInfoWrapper">
    <div class="otherInfo">
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
        siteId: CONFIG.SITE_CONFIG.siteId
      };
      this.$store.dispatch('bookDetail/' + type.BOOK_DETAIL, params);
      this.$store.dispatch('bookDetail/' + type.CART_NUMS, member.loginName);
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
      getTotalAmount: "login/getTotalAmount",        // 获取购物车商品总数量
    }),
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },
  methods: {
    ...mapActions("login", {
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
          siteId: CONFIG.SITE_CONFIG.siteId
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
              siteId: CONFIG.SITE_CONFIG.siteId
            });
          }
        }
      }
      this.$store.dispatch('bookDetail/' + type.COLLECT_OR_LIKE, params);
    },
    probation (bookId, readType, bookName, probationUrl) {
      if (!probationUrl) {  // 没有试读地址的情况
        return false;
      }
      var url = CONFIG.READ_URL + '?bookId=' + bookId + '&readType=' + readType + '&userName=&siteType=0';
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
      siteId: CONFIG.SITE_CONFIG.siteId
    },
    myCallback: function () {
      if (this.addCartInfo === '1') { //电子书加入成功
        //原有的购物车数量
        var num = _this.getCartAmount;
        _this.$store.dispatch("login/getTotalAmount", parseInt(number) + num);  //详情页气泡上购物车数量
        window.location.href = "../pages/addcart.html?pubId=" + _this.pubId;
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
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.work_bookdetail_02 .navigation {
  height: 42px;
  line-height: 42px;
  border-bottom-width: 2px;
  padding-left: 15px;
}

.work_bookdetail_02 .bookDetailWrapper {
  padding: 34px 17px 5px 37px;
  overflow: hidden;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailDt {
  width: 221px;
  height: 317px;
  float: left;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailImg {
  text-align: center;
  float: left;
  line-height: 320px;
  border-width: 1px;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailDd {
  width: 613px;
  overflow: hidden;
  padding-left: 28px;
  float: left;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailDd .titleCon {
  overflow: hidden;
  border-bottom-width: 1px;
  padding-bottom: 10px;
}

.work_bookdetail_02 .bookDetailWrapper .titleCon .title {
  display: inline-block;
  width: 460px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.work_bookdetail_02 .bookDetailWrapper .titleCon .collectOperation {
  display: inline-block;
  height: 28px;
  width: 25px;
  cursor: pointer;
  float: right;
}

.work_bookdetail_02 .bookDetailWrapper .titleCon .collectUnactive {
  background-position: -7px 3px;
}

.work_bookdetail_02 .bookDetailWrapper .titleCon .collectActive {
  background-position: -116px 3px;
}

.work_bookdetail_02 .bookDetailWrapper .titleCon .likeOperation {
  display: inline-block;
  height: 28px;
  width: 28px;
  cursor: pointer;
  text-indent: -9999px;
  vertical-align: middle;
  float: right;
}

.work_bookdetail_02 .bookDetailWrapper .titleCon .likeUnactive {
  background-position: 2px 2px;
}

.work_bookdetail_02 .bookDetailWrapper .titleCon .likeActive {
  background-position: 2px -26px;
}

.work_bookdetail_02 .bookDetailWrapper .titleCon .share {
  background-position: -7px 90px;
}

.work_bookdetail_02 .bookDetailWrapper .titleCon .share:hover {
  background-position: -42px -20px;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailDd .price {
  line-height: 70px;
  height: 70px;
  margin-top: 10px;
  margin-bottom: 15px;
}

.work_bookdetail_02_skin .bookDetailWrapper .price .oldPrice {
  padding-left: 22px;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailDd .promotion {
  margin-bottom: 10px;
}

.work_bookdetail_02 .bookDetailWrapper .promotion .fullcut {
  padding: 1px 10px;
}

.work_bookdetail_02 .bookDetailWrapper .promotion em {
  padding: 0px 10px;
  cursor: pointer;
}

.work_bookdetail_02 .bookDetailWrapper .promotion .cx_01_on {
  border-width: 1px;
}

.work_bookdetail_02 .bookDetailWrapper .promotion .fullcutInfo {
  padding-left: 5px;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailDd .paperPrice {
  line-height: 18px;
  margin-bottom: 30px;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailDd .buyBook {
  padding: 1px 10px;
  margin-left: 5px;
  margin-right: 5px;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailDd .otherOpertion {
  line-height: 30px;
  margin-top: 15px;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailDd .probation {
  padding: 5px 12px;
  margin-right: 20px;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailDd .opertionIcon {
  height: 18px;
  display: inline-block;
  width: 28px;
  text-indent: -9999px;
  vertical-align: middle;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailDd .opertionIcon.read {
  background-position: 2px -87px;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailDd .addCart {
  border-width: 1px;
  padding: 5px 12px 4px 12px;
}

.work_bookdetail_02 .bookDetailWrapper .bookDetailDd .opertionIcon.cart {
  background-position: 1px -114px;
}

.work_bookdetail_02 .otherInfoWrapper {
  padding-left: 15px;
  clear: both;
}

.work_bookdetail_02 .otherInfoWrapper .otherInfo {
  border-width: 1px;
  border-left: 0px;
  border-right: 0px;
  line-height: 35px;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
}

.work_bookdetail_02 .otherInfoWrapper .otherInfo span {
  padding-right: 70px;
}
</style>
