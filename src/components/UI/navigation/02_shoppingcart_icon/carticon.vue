<!-- Created by song 2018/3/19 头部购物车图标 获取购物车信息 -->
<template>
  <div class="ui_navigation_02" @click="toShoppingCart()">
    <span class="ui_navigation_02_img"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
    <span class="ui_navigation_02_tips" v-if="CONFIG && CONFIG.tips" v-text="CONFIG.tips"></span>
    <span class="ui_navigation_02_text" v-text="totalCount"></span>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import * as interfaces from "@work/login/common/interfaces.js";
import * as type from "@work/shoppingCart/common/interfaces.js";
import PROJECT_CONFIG from 'projectConfig'

export default {
  name: "ui_navigation_02",
  reused: true,
  props: ["namespace"],
  data () {
    return {
      CONFIG: null,
      totalCount: 0
    };
  },
  created: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].navigation.navigation_02;
    this.getMemberInfo().then(member => {
      var params = {
        param: {
          loginName: member.loginName
        },
        myCallback: () => {
          let tempLength = 0;
          for (var i = 0; i < this.productList.length; i++) {
            for (var j = 0; j < this.productList[i].list.length; j++) {
              tempLength += this.productList[i].list[j].nums;
            }
          }
          this.totalCount = tempLength;
        }
      };
      this.$store.dispatch("shoppingcart/" + type.QUERY_SHOPPING_CART, params);
    });
  },
  mounted() {
  },
  computed: {
    ...mapGetters("login", {
      isLogin: interfaces.GET_MEMBER_ISLOGIN,
      member: interfaces.GET_MEMBER
    }),
    ...mapGetters({
      productList: "shoppingcart/getProductList", // 获取购物车商品列表
      cartTotalAmount: "login/getTotalAmount" // 获取购物车商品总数量
    })
  },
  methods: {
    ...mapActions("login", {
      getMemberInfo: interfaces.ACTION_KEEP_SESSION,
      logout: interfaces.ACTION_LOGOUT
    }),
    toShoppingCart: function () {
      if (this.isLogin) {
        window.location.href = this.CONFIG.toCartUrl ? this.CONFIG.toCartUrl : '../pages/shoppingcart.html';
      } else {
        var _this = this;
        _this.getMemberInfo().then((member) => {
          if(member && member.loginName){
            _this.isLogin = member.loginName;
            window.location.href = _this.CONFIG.toCartUrl ? _this.CONFIG.toCartUrl : '../pages/shoppingcart.html';
          }else{
            _this.$alert(_this.getStaticText('pleaseLoginFirst') ? _this.getStaticText('pleaseLoginFirst') : "请您先登录", _this.getStaticText('systemPrompt') ? _this.getStaticText('systemPrompt') : "系统提示", {
              confirmButtonText: _this.getStaticText('OK') ? _this.getStaticText('OK') : "确定",
              callback: action => {
                window.location.href = _this.CONFIG.toLoginUrl ? _this.CONFIG.toLoginUrl : '../pages/login.html';
              }
            });
          }
        });
      }
    },
    getStaticText(text){
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    }
  },
  watch: {
    cartTotalAmount: function (newValue, oldValue) {  // 在商品列表改变商品数量时 购物车图标上的数据要相应改变
      this.totalCount = newValue;
    }
  }
};
</script>

<style>
.ui_navigation_02 {
  position: relative;
  font-size: 13px;
  display: inline-block;
}

.ui_navigation_02_img {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(./data/img/carticon.png) no-repeat;
  cursor: pointer;
}

.ui_navigation_02_text {
  position: absolute;
  top: -10px;
  right: -20px;
  background-color: #f56c6c;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #fff;
}

.ui_navigation_02_tips {
  vertical-align: top;
  cursor: pointer;
}
</style>

