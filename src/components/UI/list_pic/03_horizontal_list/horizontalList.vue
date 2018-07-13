/* 图书组件列表 新书、热销 */
<template>
	<div>
		<div class="fancy-title title-border">
			<h3>{{catalog_info.text}}</h3>
			<a href="javascript:void(0)" @click="moreType(catalog_info.cascadeId)" class="more">{{getStaticText('more') ? getStaticText('more') : '更多 >>'}}</a>
		</div>
		<template v-for="(recommend,rec_index) in recommendList" v-if="rec_index < listNum" v-show="showList">
			<article class="nopadding" :class="rec_index == 0 ? firstClass : listClass">
				<div class="product iproduct clearfix">
					<div class="product-image">
						<a class="tuijian_list_imgBox" href="javascript:void(0)" @click="toBookDetail(recommend.id,recommend.pub_content_type,recommend.pub_col_id, recommend.pub_col_name)">
							<img class="tuijian_list_img" onload="DrawImage(this,240,200)" :src="recommend.pub_picBig || '../assets/img/zwfm.png'" :alt="getStaticText('noCover') ? getStaticText('noCover') : '暂无封面'">
						</a>
						<!-- <div class="product-overlay">
							<a @click="toCart(recommend.prod_id,recommend.id,recommend.pub_col_id,recommend.pub_is_eb)" class="add-to-cart"><i class="icon-shopping-cart"></i><span>加入购物车</span></a>
							<a @click="toBookDetail(recommend.id,recommend.pub_content_type,recommend.pub_col_id, recommend.pub_col_name)" class="item-quick-view" data-lightbox="ajax"><i class="icon-zoom-in2"></i><span> 查看详情</span></a>
						</div> -->
					</div>
					<div class="product-desc center">
						<div class="product-title"><h5>
							<a class="book-name-space" href="javascript:void(0)" @click="toBookDetail(recommend.id,recommend.pub_content_type,recommend.pub_col_id, recommend.pub_col_name)" :title="recommend.pub_resource_name">{{recommend.pub_resource_name}}</a>
						</h5></div>
						<div class="product-author" :title="recommend.BOOK_SYS_AUTHORS">{{getStaticText('author') ? getStaticText('author') : '作者：'}}{{recommend.BOOK_SYS_AUTHORS || (getStaticText('noAuthor') ? getStaticText('noAuthor') : "暂无作者")}}</div>
						<div class="product-price"><label>{{getStaticText('price') ? getStaticText('price') : '定价：'}}</label>¥{{recommend.prod_sale_price}}</div>
					</div>
				</div>
			</article>
		</template>
	</div>
</template>
<script type="text/ecmascript-6">
import { Post, DrawImage } from "@common"
import PROJECT_CONFIG from "projectConfig";
/*import {mapGetters, mapActions} from 'vuex';*/

export default {
	name: "ui_list_pic_03",
	reused: true,
	props: ["catalog_info", "namespace", "colid"],
	data: function () {
		return {
			CONFIG: "",
			recommendList: [],
			listNum: 4,
			listClass: "col-md-3",
			firstClass: "col-md-3",
			showList: false
		};
	},
  created:function(){
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.horizontal_list_03;

  },
	mounted: function () {

		this.ajustColumnStyle(this.CONFIG.styleType);
		this.queryItemList(1);
	},
	/*computed: {
	 ...mapGetters('user', {
	 member: getterTypes.MEMBER_DATA,
	 isLogin: getterTypes.MEMBER_ISLOGIN
	 })
	 },*/
	methods: {
		ajustColumnStyle: function (styleType) {
			if (styleType === "show4") {
				this.listNum = 4;
				this.firstClass = "col-md-3";
				this.listClass = "col-md-3";
			} else if (styleType === "show5") {
				this.listNum = 5;
				this.firstClass = "col-md-4";
				this.listClass = "col-md-2";
			}
			this.showList = true;
		},
		queryItemList: function (pageNo) {
			var param = {};
			Object.assign(param,
				this.CONFIG.queryItemList.param,
				{
					pageNo: pageNo + "",
					conditions: this.CONFIG.queryItemList.param.conditions
						.replace(/#\{cascadeId\}/g, this.catalog_info.cascadeId)
				});

			Post(CONFIG.BASE_URL+this.CONFIG.queryItemList.url, param).then((response) => {
				if (response.data && response.data.result && response.data.result instanceof Array) {
					this.recommendList = response.data.result;
				}
			}).catch(function (error) {
				//    alert(error);
			});
		},
		//详情页
		toBookDetail (pubId, contentType, colId, pubColName) {
			window.location.href = this.CONFIG.toBookDetailUrl + "?pubId=" + pubId + "&contentType=" + contentType + "&columnId=" + colId + '&columnName=' + pubColName;
		},
		//更多
		moreType (cascadeId) {
			// window.location.href = this.CONFIG.moreType.url + "?cascadeId=" + cascadeId + "&pub_col_id=" + this.CONFIG.moreType.pubColId + "&type=" + this.CONFIG.moreType.type;
			window.location.href = this.CONFIG.moreType.url + "?cascadeId=" + cascadeId + "&pub_col_id=" + this.CONFIG.moreType.pubColId;
		},
		//加入购物车 FIXME 购物车
		toCart (productId, pubId, colId, isEb) {
			if (isEb == "0") {
				alert(this.getStaticText('noPriceInfo') ? this.getStaticText('noPriceInfo') : "无价格，不是图书，不可加购物车");
				return;
			}
			var loginName = this.member.loginName;
			if (loginName != undefined && loginName != '') {
				var params = {
					productId: productId,
					number: 1,
					loginName: loginName,
					activityId: "0",
					pubId: pubId,
					colId: colId
				};
				this.$store.dispatch('bookDetail/' + type.ADD_CART, params);
			} else {
				alert(this.getStaticText('pleaseLogin') ? this.getStaticText('pleaseLogin') : "请登录");
				return;
			}
		},
    getStaticText(text){
		  if(this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
		    return this.CONFIG.staticText[text]
      }else {
		    return false
      }
    }
	}
};
</script>
<style>
.book-name-space {
  display: inline-block;
  width: 168px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tuijian_list_imgBox {
  display: block !important;
  margin: auto !important;
  width: 240px !important;
  height: 240px !important;
  line-height: 240px !important;
  text-align: center !important;
}

.tuijian_list_img {
  display: inline-block !important;
}

.product-overlay a {
  cursor: pointer;
}
</style>
