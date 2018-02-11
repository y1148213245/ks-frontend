<template>
	<div class="top-menu">
		<a v-if="isLogin" href="./personalcenter.html">{{member.loginName}}</a>
		<a v-else href="./login.html">登 录</a>
		<a href="javascript:void(0)" @click="goShoppingCart()" id="top-cart">
			<i class="icon-shopping-cart"></i>
	  <span v-if="isLogin">
		<el-badge :value="recordTotalAmount" :max="999"></el-badge>
      </span>
	  <span v-else>
		  <el-badge value="0"></el-badge>
	  </span>
		</a>
		<a href="#">English</a>
		<a v-if="isLogin" href="javascript:void(0)" @click="goLogout">退出</a>
	</div><!-- #topmenu end -->
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import * as interfaces from "@work/login/common/interfaces.js";
import * as type from "@work/shoppingCart/common/interfaces.js";
/*import {getterTypes} from '../modules/types'
	 import {actionTypes} from '../modules/types'
	 import locationUtils from 'components/utils/locationUtils';
	 import * as type from 'projectsConfig/config.dev.js';*/

export default {
  name: "components_common_user",
  reused: true,
  props: ["namespace"],
  data: function() {
    return {
      sealRoof: false,
      recordTotalAmount: 0
    };
  },
  created: function() {
    this.getMemberInfo().then(member => {
      // console.info(member);
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
          this.recordTotalAmount = tempLength;
        }
      };
      this.$store.dispatch("shoppingcart/" + type.QUERY_SHOPPING_CART, params);
    });
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

    goLogout: function() {
      this.logout().then(function() {
        window.location.href = "./index.html";
      });
    },
    goShoppingCart: function() {
      if (this.isLogin) {
        window.location.href = "./shoppingcart.html";
      } else {
        this.$alert("请您先登录！", "系统提示", {
          confirmButtonText: "确定",
          callback: action => {
            // console.log(action);
          }
        });
      }
    }
  },
  watch: {
    cartTotalAmount: function(newValue, oldValue) {
		this.recordTotalAmount = newValue;
    }
  }
};
</script>
