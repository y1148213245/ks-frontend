<template>
	<div class="top-menu">
		<a v-if="isLogin" href="./personalCenter.html">{{member.loginName}}</a>
		<a v-else href="./login.html">登 录</a>
		<a href="javascript:void(0)" @click="goShoppingCart()" id="top-cart">
			<i class="icon-shopping-cart"></i>
			<span v-if="isLogin">
        <span v-text="cartTotalAmount"></span>
      </span>
			<span v-else>0</span>
		</a>
		<a href="#">English</a>
		<a v-if="isLogin" href="javascript:void(0)" @click="goLogout">退出</a>
	</div><!-- #topmenu end -->
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	import {mapGetters, mapActions} from 'vuex';
	import * as interfaces from "@work/login/common/interfaces.js";
	/*import {getterTypes} from '../modules/types'
	 import {actionTypes} from '../modules/types'
	 import locationUtils from 'components/utils/locationUtils';
	 import * as type from 'projectsConfig/config.dev.js';*/

	export default {
		name: "components_common_user",
		reused: true,
		props: ["namespace"],
		created: function () {
			this.getMemberInfo().then((member) => {
				console.info(member)
			});
		},
		computed: {
			...mapGetters("login_02", {
				isLogin: interfaces.GET_MEMBER_ISLOGIN,
				member: interfaces.GET_MEMBER
			})
		},
		methods: {
			...mapActions("login_02", {
				getMemberInfo: interfaces.ACTION_KEEP_SESSION,
				logout: interfaces.ACTION_LOGOUT
			}),

			goLogout: function () {
				this.logout().then(function () {
					window.location.href = "./index.html";
				});
			},
			goShoppingCart: function () {
				/*if (this.isLogin) {
				 window.location.href = "/pages/shoppingCart/shoppingCart.html"
				 } else {
				 alert('请登录');
				 }*/
			}
		},
		watch: {
			/*member: function (newValue, oldValue) {
			 if (newValue.loginName !== oldValue.loginName) {
			 this.$store.dispatch('page/common/shoppingcart/' + type.QUERY_SHOPPING_CART, newValue.loginName);
			 }
			 },*/
			/*cartTotalAmount: function (newValue, oldValue) {
			 if (newValue !== oldValue) {
			 this.recordTotalAmount = newValue;
			 }
			 },
			 productList: function (newValue, oldValue) {
			 if (newValue !== oldValue) {
			 var len = newValue.length;
			 var tempLen = 0;
			 for (var i = 0; i < len; i++) {
			 for (var j = 0; j < newValue[i].list.length; j++) {
			 tempLen += newValue[i].list[j].nums;
			 }
			 }
			 this.recordTotalAmount = tempLen;
			 }
			 }*/
		}
	}
</script>
