<!-- 图书详情页组件 created by song 2018/1/2 -->
<template>
  <section id="info-book" class="col_full work_bookdetail_01_content">
    <div class="container clearfix book-detail">
      <div class="col-md-4  noleftpadding">
        <!-- Product Single - Gallery
                ============================================= -->
        <div class="product-image">
          <div class="fslider" style="width:365px;height:357px;">
              <div class="slide">
                <a class="book_list_imgBox" :href="bookInfo.bigPic">
                  <img class="book_list_img" :src="bookInfo.bigPic || '../assets/img/zwfm.png'" onload="DrawImage(this,410,280)" alt="暂无封面">
                </a>
              </div>
          </div>
          <div class="sale-flash">热销!</div>
        </div><!-- Product Single - Gallery End -->
      </div>
      <div class="col-md-8 norightpadding" style="position: unset;">

        <ol class="breadcrumb">
          <li>你的位置：<a href="../pages/index.html">首 页</a></li>
          <li><a @click="toSecond(bookInfo.colId)" id="second" v-text="colName || ''"></a></li>
        </ol>
        <h1></h1>
        <ul>
          <h3>{{bookInfo.resourceName || ''}}</h3>
          <li><label>作者：</label>{{bookInfo.author || ''}}</li>
          <li><label>主编：</label>{{bookInfo.BOOK_MAJOR_EDITOR || ''}}</li>
          <li><label>ISBN编号:</label> {{bookInfo.isbn || ''}}</li>
        </ul>

        <div v-if="bookInfo.contentType == config.bookContentType.bookType">
          <div class="product-price">
            <label>纸书售价: </label>
            <span
              style="text-decoration: line-through; margin-right: 16px;">¥ {{bookInfo.bookPrice | formatMoney}}</span>
            <label>会员价：</label>
            <span>¥ {{bookInfo.memberPrice | formatMoney}}</span>
          </div>
          <div v-if="bookInfo.relBook">
            <div class="product-price">
              <label>电子书售价：</label>
              <span
                style="text-decoration: line-through; margin-right: 16px;">¥ {{bookInfo.relBook.BOOK_EB_PRICE  | formatMoney}}</span>
              <label>会员价：</label>
              <span>¥ {{bookInfo.relBook.prod_member_price  | formatMoney}}</span>
            </div>
          </div>
        </div>

        <div v-else-if="bookInfo.contentType == config.bookContentType.ebookType">
          <div v-if="bookInfo.relBook">
            <div class="product-price">
              <label>纸书售价：</label>
              <span
                style="text-decoration: line-through; margin-right: 16px;">¥ {{bookInfo.relBook.BOOK_PRICE | formatMoney}}</span>
              <label>会员价：</label>
              <span>¥ {{bookInfo.relBook.prod_member_price | formatMoney}}</span>
            </div>
          </div>
          <div class="product-price">
            <label>电子书售价：</label>
            <span style="text-decoration: line-through; margin-right: 16px;">¥ {{bookInfo.ebPrice | formatMoney}}</span>
            <label>会员价：</label>
            <span>¥ {{bookInfo.memberPrice | formatMoney}}</span>
          </div>
        </div>
        <work_01_bookdetail_coupons :oneBookDetailInfo="bookInfo" namespace="bookdetail"></work_01_bookdetail_coupons>

        <!-- Product Single - Quantity & Cart Button
                ============================================= -->
        <form class="cart nobottommargin clearfix" method="post" enctype='multipart/form-data'>
          <div class="quantity clearfix">
            <input id="reduce" type="button" value="-" class="minus" @click="bookCount(-1)">
            <input id="book_num" type="number" step="1" min="1" name="quantity" value="1" title="Qty" class="qty"
                   size="4" @keypress="checkNumber($event)" v-on:input="checkProductNums()"/>
            <input id="add" type="button" value="+" class="plus" @click="bookCount(1)">
          </div>
          <div v-if="bookInfo.contentType == config.bookContentType.bookType">
            <button type="button" class="add-to-cart button nomargin" @click="cart(bookInfo.contentType)"><i
              class="icon-shopping-cart"></i>纸书加入购物车</button>
            <div v-if="bookInfo.relBook" class="ebookClass">
              <button type="button" class="add-to-cart button nomargin" @click="cart(bookInfo.relBook.prod_product_type)"><i
                class="icon-shopping-cart"></i>电子书加入购物车</button>
            </div>
            <div v-if="bookInfo.relBook" class="shiduClass">
              <a v-if="bookInfo.bookFreeDownLoadPath.length ==0 " target="_blank" href="javascript:void(0)"
                 class="add-to-cart button nomargin" style="background-color: #444;cursor:default"><i
                class="icon-newspaper"></i>电子书试读</a>
              <a v-if="bookInfo.bookFreeDownLoadPath.length !=0 " target="_blank" href="javascript:void(0)"
                 @click="shidu(bookInfo.resourceId,0,bookInfo.resourceName)" class="add-to-cart button nomargin"><i
                class="icon-newspaper"></i>电子书试读</a>
            </div>
          </div>

          <div v-else-if="bookInfo.contentType == config.bookContentType.ebookType">
            <button type="button" class="add-to-cart button nomargin" @click="cart(bookInfo.contentType)"><i
              class="icon-shopping-cart"></i>电子书加入购物车</button>
            <div class="ebookCart">
              <a v-if="bookInfo.bookFreeDownLoadPath.length ==0 " target="_blank" href="javascript:void(0)"
                 class="add-to-cart button nomargin" style="background-color: #444;cursor:default"><i
                class="icon-newspaper"></i>电子书试读</a>
              <a v-if="bookInfo.bookFreeDownLoadPath.length !=0 " target="_blank" href="javascript:void(0)"
                 @click="shidu(bookInfo.resourceId,0,bookInfo.resourceName)" class="add-to-cart button nomargin"><i
                class="icon-newspaper"></i>电子书试读</a>
            </div>
            <div v-if="bookInfo.relBook" class="bookCart">
              <button type="button" class="add-to-cart button nomargin" @click="cart(bookInfo.relBook.prod_product_type)"><i
                class="icon-shopping-cart"></i>纸书加入购物车</button>
            </div>
          </div>


        </form><!-- Product Single - Quantity & Cart Button End -->
        <div v-if="bookInfo.contentType == config.bookContentType.bookType">
          <div class="colleact1">

            <div v-if="member.loginName">

              <div v-if="bookInfo.isCollect == '1'">
                <span class="scStyle cure"></span>
                <a href="javascript:void(0)" @click="collectOrLike('0',bookInfo.contentType)">收 藏</a>
              </div>
              <div v-else-if="bookInfo.isCollect == '0' || bookInfo.isCollect == null">
                <span class="scStyle"></span>
                <a href="javascript:void(0)" @click="collectOrLike('0',bookInfo.contentType)">收 藏</a>
              </div>
            </div>
            <div v-else-if="member.loginName == undefined">
              <span class="scStyle"></span>
              <a href="javascript:void(0)" @click="collectOrLike('0',bookInfo.contentType)">收 藏</a>
            </div>
          </div>

          <div class="like1">
            <div v-if="member.loginName">
              <div v-if="bookInfo.isLike == '1'">
                <span class="likeStyle cure"></span>
                <a @click="collectOrLike('1',bookInfo.contentType)">点赞</a>
              </div>
              <div v-else-if="bookInfo.isLike == '0' || bookInfo.isLike == null">
                <span class="likeStyle"></span>
                <a @click="collectOrLike('1',bookInfo.contentType)">点赞</a>
              </div>
            </div>
            <div v-else-if="member.loginName == undefined">
              <span class="likeStyle"></span>
              <a @click="collectOrLike('1',bookInfo.contentType)" class="">点赞</a>
            </div>
          </div>

          <div v-if="member.loginName == undefined">
            <div class="share1">
              <div class="bshare-custom">
                <a title="分享到" href="javascript:" id="bshare-shareto"
                   class="bshare-more" style=" line-height: 24px; font-size: 12px;">
                  <span style="color: #ae0f29"><i class="icon-share shareRight"></i>分享</span>
                </a>
              </div>
            </div>
          </div>

          <div v-else-if="member.loginName">
            <div class="share1">
              <div class="bshare-custom">
                <a title="分享到" href="javascript:" id="bshare-shareto"
                   class="bshare-more" style=" line-height: 24px; font-size: 12px;">
                  <span style="color: #ae0f29"><i class="icon-share shareRight"></i>分享</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div v-else-if="bookInfo.contentType == config.bookContentType.ebookType">
          <div class="colleact1">
            <div v-if="member.loginName">
              <div v-if="bookInfo.isCollect == '1'">
                <span class="scStyle cure"></span>
                <a @click="collectOrLike('0',bookInfo.contentType)">收 藏</a>
              </div>
              <div v-else-if="bookInfo.isCollect == '0' || bookInfo.isCollect == null">
                <span class="scStyle"></span>
                <a @click="collectOrLike('0',bookInfo.contentType)">收 藏</a>
              </div>
            </div>
            <div v-else-if="member.loginName == undefined">
              <span class="scStyle"></span>
              <a @click="collectOrLike('0',bookInfo.contentType)">收 藏</a>
            </div>
          </div>

          <div class="like1">
            <div v-if="member.loginName">
              <div v-if="bookInfo.isLike == '1'">
                <span class="likeStyle cure"></span>
                <a @click="collectOrLike('1',bookInfo.contentType)">点赞</a>
              </div>
              <div v-else-if="bookInfo.isLike == '0' || bookInfo.isLike == null">
                <span class="likeStyle"></span>
                <a @click="collectOrLike('1',bookInfo.contentType)">点赞</a>
              </div>
            </div>
            <div v-else-if="member.loginName == undefined">
              <span class="likeStyle"></span>
              <a @click="collectOrLike('1',bookInfo.contentType)">点赞</a>
            </div>
          </div>


          <div v-if="member.loginName == undefined">
            <div class="share2">
              <div class="bshare-custom">
                <a title="分享到" href="javascript:" id="bshare-shareto"
                   class="bshare-more" style=" line-height: 24px; font-size: 12px;">
                  <span style="color: #ae0f29"><i class="icon-share shareRight"></i>分享</span>
                </a>
              </div>
            </div>
          </div>

          <div v-else-if="member.loginName">
            <div class="share2">
              <div class="bshare-custom">
                <a title="分享到" href="javascript:" id="bshare-shareto"
                   class="bshare-more" style=" line-height: 24px; font-size: 12px;">
                  <span style="color: #ae0f29"><i class="icon-share shareRight"></i>分享</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as interfaces from "@work/login/common/interfaces.js";
import * as type from "@work/bookDetail/common/interfaces.js";
import URL from "url";

export default {
  name: "work_bookdetail_01_content",
  reused: true,
  props: ["namespace"],
  data () {
    return {
      modalStatus: false,
      contentType: 91, //赋值属性，页面可以调用
      columnId: "",
      colName: "",
      pubId: "",
      config: $_$
    };
  },
  created: function () {
    this.getMemberInfo().then(member => {
      var params = {
        loginName: this.isLogin ? this.isLogin : "",
        pubId: this.pubId
      };
      this.$store.dispatch("bookDetail/" + type.BOOK_DETAIL, params);
      this.$store.dispatch("bookDetail/" + type.CART_NUMS, params.loginName);
    });
  },
  mounted () {
    var param = URL.parse(window.location.href, true).query;
    this.contentType = param.contentType; // 书的类型
    this.columnId = param.columnId; // 栏目id
    this.colName = param.columnName; // 栏目名称
    this.pubId = param.pubId; // pubId
  },
  computed: {
    ...mapGetters("login", {
      isLogin: interfaces.GET_MEMBER_ISLOGIN,
      member: interfaces.GET_MEMBER
    }),
    ...mapGetters({
      bookInfo: "bookDetail/bookDetailInfo",
      getCartAmount: "bookDetail/getCartAmount",
      getTotalAmount: "login/getTotalAmount" // 获取购物车商品总数量
    })
  },
  methods: {
    ...mapActions("login", {
      getMemberInfo: interfaces.ACTION_KEEP_SESSION
    }),
    toSecond (colId) {
      window.location.href = $_$.columnType[colId].url;
    },
    cart (contentType) {
      //加入购物车
      var loginName = this.member.loginName;
      if (loginName == undefined || loginName == "") {
        this.$alert("请您先登录！", "系统提示", {
          confirmButtonText: "确定"
        });
        return;
      }
      addCart(contentType, this, loginName);
    },
    checkNumber: function (event) { // 购买数量格式校验
      if (!String.fromCharCode(event.keyCode).match(/\d/)) {
        event.preventDefault();
      }
      if ($("#book_num").val().length > 4) {
        event.preventDefault();
      }
    },
    checkProductNums: function () {
      var _this = this;
      if (Number($("#book_num").val()) <= 0) {
        this.$alert("商品数量需要大于0", "系统提示", {
          confirmButtonText: "确定",
          callback: function () {
            $("#book_num").val(1)
          }
        });
      } else if (Number($("#book_num").val()) > 200) {
        this.$alert("商品数量不能大于200", "系统提示", {
          confirmButtonText: "确定",
          callback: function () {
            $("#book_num").val(200)
          }
        });
      }
    },
    bookCount (val) {
      var number = $("#book_num");
      if (val > 0) {
        if (number.val() >= 200) {
          // 防止加过200
          number.val(200);
          this.$alert("商品数量不能大于200", "系统提示", {
            confirmButtonText: "确定"
          });
          return false;
        }
        number.val(parseInt(number.val()) + 1);
      } else if (val < 0) {
        if (parseInt(number.val()) == 1) {
        } else {
          number.val(parseInt(number.val()) - 1);
        }
      }
    },
    shidu: function (bookId, readType, bookName) {
      var url =
        CONFIG.READ_URL +
        "bookId=" +
        bookId +
        "&readType=" +
        readType +
        "&userName=&siteType=" + CONFIG.READ_CONFIG.siteType;
      window.open(url);
    },
    //收藏or点赞
    collectOrLike (operateTypeValue, contentType) {
      var _this = this;
      var loginName = this.member.loginName;
      if (loginName == undefined || loginName == "") {
        this.$alert("请您先登录！", "系统提示", {
          confirmButtonText: "确定"
        });
        return;
      }
      var params = {
        param: {
          loginName: loginName,
          productId: this.bookInfo.productId,
          pubId: this.bookInfo.pubId,
          operateType: operateTypeValue,
          resId: this.bookInfo.resourceId,
          contentType: contentType
        },

        myCallback: function () {
          if (this.collectOrLikeInfo == "1") {
            if (this.message.code === "00") {
              _this.$message({
                message: this.message.msg,
                type: "success"
              });
            } else if (this.message.code === "11") {
              _this.$message({
                message: this.message.msg,
                type: "success"
              });
            } else if (this.message.code === "000") {
              _this.$message({
                message: this.message.msg,
                type: "success"
              });
            } else if (this.message.code === "111") {
              _this.$message({
                message: this.message.msg,
                type: "success"
              });
            }
            _this.$store.dispatch("bookDetail/" + type.BOOK_DETAIL, {
              pubId: params.param.pubId,
              loginName: params.param.loginName
            });
          }
        }
      };
      this.$store.dispatch("bookDetail/" + type.COLLECT_OR_LIKE, params);
    }
  },
  filters: {
    formatMoney: function (val) {
      if (val !== null && val !== undefined) {
        return Number(val).toFixed(2);
      } else {
        return "暂无定价";
      }
    }
  },
  watch: {}
};

function addCart (contentType, this_value, loginName) {
  var _this = this_value;
  var isEb, pubId, colId, number;
  //图书详情页加购物车
  if (_this.columnId == "48" || _this.columnId == "49") {
    if (contentType == $_$.bookContentType.bookType) {
      //图书详情页纸书加购物车
      isEb = _this.bookInfo.isEb;
      pubId = _this.bookInfo.pubId;
      colId = _this.bookInfo.colId; //栏目id
      number = $("#book_num").val();
    }
    if (contentType == $_$.bookContentType.ebookType) {
      //图书详情页电子书加购物车
      isEb = _this.bookInfo.relBook.pub_is_eb;
      pubId = _this.bookInfo.relBook.id;
      colId = _this.bookInfo.relBook.pub_col_id; //栏目id
      number = $("#book_num").val();
      if (number > "1") {
        alert("电子书加购物车只能加一本");
        return;
      } else {
        number = "1";
      }
    }
  }

  //电子书详情页加购物车
  if (_this.columnId == "51") {
    if (contentType == $_$.bookContentType.ebookType) {
      //电子书详情页电子书加购物车

      isEb = _this.bookInfo.isEb;
      pubId = _this.bookInfo.pubId;
      colId = _this.bookInfo.colId; //栏目id
      number = $("#book_num").val();
      if (number > "1") {
        alert("电子书加购物车只能加一本");
        return;
      } else {
        number = "1";
      }
    }
    if (contentType == $_$.bookContentType.bookType) {
      //电子书详情页纸书加购物车
      isEb = _this.bookInfo.relBook.pub_is_eb;
      pubId = _this.bookInfo.relBook.id;
      colId = _this.bookInfo.relBook.pub_col_id; //栏目id
      number = $("#book_num").val();
    }
  }

  if (isEb == "0") {
    alert("无价格，不是图书，不可加购物车");
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
      if (this.addCartInfo === "1") {
        _this.$message({
          message: this.cartMessage,
          type: "success"
        });
        //原有的购物车数量
        var num = _this.getCartAmount;
        _this.$store.dispatch("login/getTotalAmount", parseInt(number) + num); //详情页气泡上购物车数量
      }
      if (this.addCartInfo === "0") {
        _this.$message({
          message: this.cartMessage,
          type: "error"
        });
      }
    }
  };
  _this.$store.dispatch("bookDetail/" + type.ADD_CART, params);
}
</script>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.book_list_imgBox {
  display: block !important;
  width: 365px !important;
  height: 357px !important;
  line-height: 357px !important;
  text-align: center !important;
}

.book_list_img {
  display: inline-block !important;
}

#info-book {
  background: #f8f8f8;
  padding: 18px 0px;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-bottom: 24px;
}

.sale-flash {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 6px 10px;
  background-color: #ae0f29;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  z-index: 5;
}

.sale-flash.out-of-stock {
  background-color: #777;
}

.norightpadding {
  padding-right: 0 !important;
}

.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.book-detail .product-price {
  font-size: 16px;
}

.product-price {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #000;
}

.work_bookdetail_01_content p,
.work_bookdetail_01_content pre,
.work_bookdetail_01_content ul,
.work_bookdetail_01_content ol,
.work_bookdetail_01_content dl,
.work_bookdetail_01_content dd,
.work_bookdetail_01_content blockquote,
.work_bookdetail_01_content address,
.work_bookdetail_01_content table,
.work_bookdetail_01_content fieldset,
.work_bookdetail_01_content form {
  margin-bottom: 30px;
  padding-left: 0px;
}

#info-book .breadcrumb {
  padding: 0px 0px 8px 0px;
  border-bottom: 1px solid #e6e6e6;
  font-size: 12px;
  background: none;
}

.cart {
  border: 1px solid #ddd;
}

.nobottommargin {
  margin-bottom: 0 !important;
}

/* 按钮 */
#info-book .button {
  margin: 24px 0px;
}

body:not(.device-touch) .button {
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.button {
  display: inline-block;
  position: relative;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  padding: 0 22px;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  background-color: #ae0f29;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.nomargin {
  margin: 0 !important;
}

.flex-control-nav.flex-control-thumbs {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin: 2px -2px -2px 0;
  height: 75px;
}

.flex-control-nav {
  position: absolute;
  z-index: 10;
  text-align: center;
  top: 14px;
  right: 10px;
  margin: 0;
}

.slider-wrap,
.flex-control-nav,
.flex-direction-nav {
  margin: 0;
  padding: 0;
  list-style: none;
  border: none;
}

/* ----------------------------------------------------------------
      books&detail
  -----------------------------------------------------------------*/
#info-book .book-detail .bigimgbox {
  float: left;
  width: 100%;
  height: auto;
}

#info-book .book-detail .bigimgbox img {
  width: 100%;
}

.book-detail ul li {
  list-style: none;
  font-size: 12px;
  color: #666;
}

.book-detail .cart {
  padding: 18px 0px;
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
}

.book-detail .product-price {
  font-size: 16px;
}

.quantity {
  float: left;
  margin-right: 30px;
}

.quantity .qty {
  float: left;
  width: 50px;
  height: 40px;
  line-height: 40px;
  border: 0;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  background-color: #eee;
  text-align: center;
  margin-bottom: 0;
}

.quantity .plus,
.quantity .minus {
  display: block;
  float: left;
  cursor: pointer;
  border: 0px transparent;
  padding: 0;
  width: 36px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #eee;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.2s linear;
  -webkit-transition: background-color 0.2s linear;
  -o-transition: background-color 0.2s linear;
}

.quantity .plus:hover,
.quantity .minus:hover {
  background-color: #ddd;
}

.quantity .qty:focus,
.quantity .plus:focus,
.quantity .minus:focus {
  box-shadow: none !important;
  outline: 0 !important;
}

/* .single-product .add-to-cart.button {
    height: 40px;
    line-height: 40px;
  } */

#info-book .btn-link .button {
  margin-right: 24px;
}
</style>
