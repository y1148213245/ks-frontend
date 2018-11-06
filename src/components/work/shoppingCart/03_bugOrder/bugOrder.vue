<!-- 直接提交订单组件 NEW Created by zong 2018/06/07. -->
<script src="js/example.js"></script>
<template>
	<div class="work_shoppingcart_03">
		<div class="work_shoppingcart_03_main">
			<template v-for="(config, config_i) in resourceDetailConfig.complicatedItem" v-if="resourceDetail">
				<!-- 需要特殊处理的复杂项 -->
				<!-- img 图片 -->
				<div :key="config_i" v-if="config.name == 'img'" class="work_shoppingcart_03_imgcontainter" @click="toCustomFun(resourceDetail, config)">
					<label class="work_shoppingcart_03_img_label">{{config.display}}</label>
					<img class="work_shoppingcart_03_img" v-bind="{class: 'work_shoppingcart_03_' + config.field}" :src=" resourceDetail[keys[config.field]] " alt="暂无图片" @load="dealResourceImg($event)" />
				</div>

				<!-- 自定义事件按钮 包括（title 标题） -->
				<div :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'work_shoppingcart_03_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(resourceDetail, config)">
					<i v-bind="{class: config.className}"></i>
					<label class="work_shoppingcart_03_btnlabel">{{config.display}}</label>
					<span v-bind="{class: 'work_shoppingcart_03__btncontainer_' + config.field}" v-if="keys[config.field]">{{ resourceDetail[keys[config.field]] }}</span>
				</div>

				<!-- price 价格 -->
				<div :key="config_i" v-else-if="config.name == 'price'" class="work_shoppingcart_03_pricecontainter">
					<label class="work_shoppingcart_03_price_label">{{config.display}}</label>
					<span v-bind="{class: 'work_shoppingcart_03_' + config.field}">{{ resourceDetail[keys[config.field]]  | formatPriceNew }}</span>
				</div>

				<!-- time 时间 -->
				<div :key="config_i" v-else-if="config.name == 'time'" class="work_shoppingcart_03_timecontainter">
					<label class="work_shoppingcart_03_time_label">{{config.display}}</label>
					<span v-bind="{class: 'work_shoppingcart_03_' + config.field}">{{ resourceDetail[keys[config.field]] | formatDateNEW}}</span>
				</div>

				<!-- 其他不需要特殊处理的简单项 -->
				<div :key="config_i" v-else class="work_shoppingcart_03_other">
					<i v-bind="{class: config.className}"></i>
					<label class="work_shoppingcart_03_label">{{config.display}}</label>
					<span v-if="config.field" v-bind="{class: 'work_shoppingcart_03_' + config.field}" v-html="resourceDetail[keys[config.field]] || '暂无'"></span>
				</div>
			</template>
		</div>

		<!-- 支付方式 信息 -->
		<div class="work_shoppingcart_03_pay" v-if="payType && payType.payTypeShow">
			<div v-if="payType && payType.Balance && payType.Balance.iconClass" class="work_shoppingcart_03_pay_balance">
				<span class="work_shoppingcart_03_pay_Balance_radio" :class="{work_shoppingcart_03_pay_avtive:defaultPay=='Balance'}" @click="changeDefaultPay('Balance')"></span>
				<span class="work_shoppingcart_03_pay_icon work_shoppingcart_03_pay_Balance_icon" v-bind="{class: payType.Balance.iconClass}"></span>
				<span class="work_shoppingcart_03_pay_name work_shoppingcart_03_pay_Balance_name" v-text="payType.Balance.name"></span>
				<span v-if="payType.Balance.moneyShow" class="work_shoppingcart_03_pay_Balance_money">{{menberMoney | formatPriceNew }} {{payType.Balance.moneyUnit}}</span>
				<span v-if="payType.Balance.goRechargeShow" class="work_shoppingcart_03_pay_Balance_button">
          <a :href="payType.Balance.goRechargeUrl" v-text="payType.Balance.goRechargeButton">充值</a>
        </span>
			</div>
			<div v-if="payType && payType.Weixin && payType.Weixin.WeixinShow" class="work_shoppingcart_03_pay_balance">
				<span class="work_shoppingcart_03_pay_Balance_radio" :class="{work_shoppingcart_03_pay_avtive:defaultPay=='Weixin'}" @click="changeDefaultPay('Weixin')"></span>
				<span class="work_shoppingcart_03_pay_icon work_shoppingcart_03_pay_Weixin_icon" v-bind="{class: payType.Weixin.iconClass}"></span>
				<span class="work_shoppingcart_03_pay_name work_shoppingcart_03_pay_Weixin_name" v-text="payType.Weixin.name"></span>
			</div>
			<div v-if="payType && payType.Balance && balanceHintShow" class="work_shoppingcart_03_pay_balanceHint">
				<span v-text="payType.Balance.balanceHint"></span>
			</div>
		</div>
		<!-- END 支付方式 信息 -->

		<div class="work_shoppingcart_03_commitOrder">
      <el-button class="work_shoppingcart_03_commitOrder_button" v-if="isDisabled==0" :disabled="isDisabled === 4">购 买</el-button>
      <el-button class="work_shoppingcart_03_commitOrder_button" v-if="isDisabled==1" @click="commitOrder()">购 买</el-button>
		</div>

	</div>
</template>

<script>
	import { mapGetters, mapActions, mapState } from 'vuex';
	import * as interfaces from "@work/login/common/interfaces.js";
	import Vue from 'vue';
	import { Get, Post, DrawImage, getFieldAdapter, toOtherPage, mobileLoading} from "@common";
	import URL from 'url';
	import PROJECT_CONFIG from "projectConfig";

	export default {
		name: 'work_shoppingcart_03',
		props: ['namespace', 'modulename'],
		reused: true,
		data() {
			return {
				CONFIG: null,
				resourceDetail: {}, // 详情信息
				resourceDetailConfig: {}, // 详情信息配置
				keys: {}, // 详情接口字段容器
				resId: "",
				loginName: "", //ada123
				menberData: {},
				contentType: $_$.bookContentType,
				pubId: "", //要加入购物车的书的pubId
				payType: {}, //支付方式配置
				defaultPay: "Balance", //默认支付方式  Balance  Weixin
				menberMoney: "0", //有多少余额
				bookMoney: "0", // 应该付款多少钱
				balanceHintShow: false, //是不是展示没钱提示
				Orderparams: {}, //提交订单条件
				curSelectedInvoice: {},
				temp: {}, //订单里的id
				tempList: {}, //订单单元
				orderSuccessUrl: '', //
        		noLoginUrl:'../pages/login.html', //没有登陆就跳转到登录页 ,
        isDisabled:0
			};
		},

		mounted() {
			this.pubId = URL.parse(document.URL, true).query.pubId; // 从地址栏接收id
			this.CONFIG = PROJECT_CONFIG[this.namespace].shoppingCart.shoppingCart_03[this.modulename];
			this.resourceDetailConfig = this.CONFIG.getResourceDetail;
			this.orderSuccessUrl = this.CONFIG.orderSuccessUrl;
			this.payType = this.CONFIG.payType;
			this.keys = JSON.parse(JSON.stringify(getFieldAdapter(this.resourceDetailConfig.sysAdapter, this.resourceDetailConfig.typeAdapter)));
			if(typeof(this.CONFIG.noLoginUrl)!='undefined'){
				this.noLoginUrl = this.CONFIG.noLoginUrl;
			}
		},

		created: function() {
			this.getMemberInfo().then((member) => {
				this.loginName = member.loginName;
				this.getMenberDetail(); //获取用户信息
				this.getResourceDetail(); //获取图书详情信息
			});
		},

		computed: {
			...mapGetters("login", {
				member: interfaces.GET_MEMBER
			}),
		},

		methods: {
			...mapActions("login", {
				getMemberInfo: interfaces.ACTION_KEEP_SESSION
			}),
			dealResourceImg(eve) { // 处理图片尺寸
				DrawImage(eve.path[0], this.CONFIG.infoImgWidth, this.CONFIG.infoImgHeight);
			},
			toCustomFun(resourceDetail, config) { // 执行自定义事件
				window.open(toOtherPage(this.resourceDetail, this.CONFIG[config.method], this.keys));
			},
			getResourceDetail() { //获取商品详情
				let paramsObj = Object.assign({}, this.resourceDetailConfig.params);
				paramsObj.pubId = this.pubId;
				// CONFIG.BASE_URL +
				Get(CONFIG.BASE_URL + this.resourceDetailConfig.url + '?pubId=' + paramsObj.pubId + '&loginName=' + this.loginName).then((rep) => {
					let datas = rep.data;
					if(rep.status == 200 && datas.data) {
						this.resourceDetail = datas.data;
						console.log(this.resourceDetail);
						this.resId = this.resourceDetail[this.keys.resId];
						this.bookMoney = Number(this.resourceDetail[this.keys.memberPrice]);
						this.isDisabled = 1;
					}
				});
			},
			getMenberDetail() {
				this.loginName = this.member.loginName;
				if(this.loginName == undefined || this.loginName == '') { // 未登录
          			// 未登录就要跳转到登录页面哦
          			location.href = this.noLoginUrl;
					return false;
				}
				Get(CONFIG.BASE_URL + 'user/getMemberByName.do', {
					// Get("http://172.19.36.97:9092/spc-portal-web/user/getMemberByName.do", {
					params: {
						loginName: this.loginName
					}
				}).then(resp => {
					if(resp.data) {
						// console.log(resp.data);
						this.menberData = resp.data.data;
						this.menberMoney = resp.data.data.virtualCoin;
					}
					// console.log(resp.data)
				})
			},
			changeDefaultPay(Pay) { //修改支付方式
				this.defaultPay = Pay;
			},
			commitOrder() {
				if(this.loginName == undefined || this.loginName == '') { // 未登录
					return false;
				}
				//判断支付方式 生成不同的参数
				if(this.defaultPay=="Balance"){
					//如果是余额支付那么判断余额够不够
					if(Number(this.bookMoney) > Number(this.menberMoney)) {
						this.balanceHintShow = true;
						return false;
					}
					// if(this.balanceHintShow) {
					// 	return false;
					// }
				}
				this.setOrderParams();
				// http://172.19.36.97:9092/spc-portal-web/order/submitSplitOrder.do
				var _this = this;
				if(this.resourceDetail.isBuy=='1'){
					this.$message({
						type: "error",
						message: "请不要重复购买",
						duration: 2000
					})
				}else{
					let loading = Vue.prototype.$loading({
						text: "数据加载中..."
					});
					Post(CONFIG.BASE_URL + 'order/submitSplitOrder.do', this.Orderparams).then(function(response) {
						// Post("http://172.19.36.97:9092/spc-portal-web/order/submitSplitOrder.do", this.Orderparams).then(function (response) {
						if(response.status == 200 && response.data) {
							let datas = response.data;
							if(datas.data && datas.result == 1 && datas.data.submitStatus) {
								if(_this.defaultPay=="Balance"){ //余额支付
									location.href=_this.orderSuccessUrl + "?pubId=" + _this.pubId + "&&loginName=" + _this.loginName;
								}else if(_this.defaultPay=="Weixin"){  //微信支付
									loading.close();
									let params={
										payType: 'Weixin', // 支付类型:支付宝Alipay 微信：Weixin
										orderId: datas.data.orderId, //  支付金额
										loginName: _this.loginName,
										siteId: CONFIG.SITE_CONFIG.siteId,
										flag: 'wxShop', //标识flag=wxShop微信商城
									};
									Get(CONFIG.BASE_URL + 'epay/getWxShopPay.do' , { 'params': params }).then((resp) => {
										let datas = resp.data;
										if (datas.result == '1') { // 请求成功
										if (typeof WeixinJSBridge == "undefined") {
											if (document.addEventListener) {
											document.addEventListener('WeixinJSBridgeReady', _this.onBridgeReady, false);
											} else if (document.attachEvent) {
											document.attachEvent('WeixinJSBridgeReady', _this.onBridgeReady);
											document.attachEvent('onWeixinJSBridgeReady', _this.onBridgeReady);
											}
										} else {
											_this.onBridgeReady(datas.data ? JSON.parse(datas.data) : []);
										}
										}
									})
								}
							} else {
								loading.close();
							}

						}
					})

				}

			},
			onBridgeReady (data) {
				// 在微信浏览器里面打开H5网页中执行JS调起支付  WeixinJSBridge内置对象在其他浏览器中无效 【授权】
				WeixinJSBridge.invoke(
					'getBrandWCPayRequest', {
					"appId": data.appId,     //公众号名称，由商户传入
					"timeStamp": data.timeStamp,         //时间戳，自1970年以来的秒数
					"nonceStr": data.nonceStr, //随机串
					"package": data.package,
					"signType": data.signType,         //微信签名方式：
					"paySign": data.paySign //微信签名
					},
					function (res) {
					console.log(res)
					if (res.err_msg == "get_brand_wcpay_request:ok") {

					}     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
					}
				);
			},
			setOrderParams() {
				this.curSelectedInvoice = {
					invoiceType: "", // 发票类型
					receipttypes: "",
					receiptId: "明细", // 普通发票的明细  默认显示明细  汉字 明细
					receiptType: "", // 1:个人  2:单位
					receiptTitle: "", // 发票抬头：个人 / 公司名称
					taxpayerCode: "", // 纳税人识别号
					companyAddress: "", // 公司住址
					companyPhone: "", // 公司联系方式
					bankName: "", // 开户银行
					bankAccount: "" // 开户账号
				};;
				this.tempList = {
					id: "", //不用填
					productId: this.resourceDetail.productId, //
					combinationId: "94", //产品类型id  电子书 94
					nums: 1,
					totalPrice: this.bookMoney,
					pubId: this.pubId,
					couponsId: "", //优惠卷id 现在为0
					rankDiscountRatio: "", //这是优惠的汇率
					resourceId: this.resourceDetail.pub_resource_id,
					resourceName: this.resourceDetail.pub_resource_name,
          			resourceType: this.resourceDetail.prod_resource_type,
					periodicalType: "", //传值空
					periodicalYear: "", //传值空
					periodicalMonth: "", //传值空
					combinationId: "0",
				};
				this.temp = {
					activityId: 0, //活动id  填0
					productType: "94", //产品类型id  电子书 94
					periodicalType: "",
					periodicalName: "",
					periodicalYear: "",
					periodicalMonth: "",
					discountPrice: 0,
					id: '',
					code: "",
					totalPrice: this.bookMoney,
					list: [this.tempList],
				};
				this.Orderparams = {
					oremark: "wxShop",
        			orderType: "book",   //期刊是这个 其他的都是book
					orderCode: "", //不用写
					balanceAmount: this.bookMoney, // 如果是余额支付，那就写支付金额 不是就写0
					createTime: null, //不用写
					deliveryAddress: '', // 收货人整个地址 北京市海淀区 拼起来的地址
					deliveryContact: '', // 联系方式
					deliveryPerson: '', // 收件人
					deliveryPrice: 0, // 运费
					deliveryRemark: "", // 运费备注
					deliveryType: '', // 运输方式  汉字 顺丰
					discountAmount: '', //  商品各种活动优惠 不包含免运费的活动
					id: 0, //不用写
					isReceipt: "0", //要不要发票， 0不需要 1要
					loginName: this.loginName,
					payAmount: this.bookMoney, // 应付金额 = 商品总价 + 运费
					payCode: "", //不用写
					payMethod: this.defaultPay, // 支付方式： Weixin 微信支付 Alipay 支付宝支付  Balance 余额支付
					payRemark: '', // 订单备注
					payStatus: "", //空
					payTime: null,
					payType: 1, // 0线下支付  1在线支付
					payUser: "", //不用写
					realAmount: 0, // 实付金额 = 应付金额-运费-余额支付
					receiptId: this.curSelectedInvoice.receiptId,
					receiptType: this.curSelectedInvoice.receiptType, //如果要发票的话  1 个人 2 单位
					receiptTitle: this.curSelectedInvoice.receiptType == 1 ? "个人" : this.curSelectedInvoice.receiptTitle,
					taxpayerCode: this.curSelectedInvoice.taxpayerCode,
					companyAddress: this.curSelectedInvoice.companyAddress,
					companyPhone: this.curSelectedInvoice.companyPhone,
					bankName: this.curSelectedInvoice.bankName,
					bankAccount: this.curSelectedInvoice.bankAccount,
					remark: "",
					siteId: CONFIG.SITE_CONFIG.siteId,
					splitOrderList: [this.temp], //aaa
					totalPrice: this.bookMoney, // 商品总价（不含优惠运费）
					couponsOrder: '', // 优惠券的密码 如果有两张 以数组形式传递
					point: 0
				};
			}

		}
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

	.work_shoppingcart_03_publicize_topic {
		cursor: pointer;
	}

	.work_shoppingcart_03_publicize_topic_active {
		color: red;
	}

	.work_shoppingcart_03_collect_active {
		color: red;
	}

	.work_shoppingcart_03_like_active {
		color: red;
	}

	.work_shoppingcart_03_imgcontainter {
		background-color: #ddd;
		width: 220px;
		height: 320px;
		position: relative;
	}

	.work_shoppingcart_03_img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
