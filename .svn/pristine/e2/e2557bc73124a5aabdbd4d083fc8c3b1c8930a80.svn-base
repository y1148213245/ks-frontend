<template>
  <div>
    <div class="all_article">
      <article class="col-md-4 clearfix" v-for="item in bookRecommendList">
        <div class="product iproduct clearfix">
          <div class="product-image">
            <a href="book-detail.html" target="_blank"><img :src="item.bookUrl" alt="暂无封面" style="height:247px;width: auto;margin: 0 auto;"></a>
            <div class="product-overlay">
              <a href="#" class="add-to-cart"><i class="icon-shopping-cart"></i><span>加入购物车</span></a>
              <a href="bookdetail.html" target="_blank"><i class="icon-zoom-in2"></i><span> 查看详情</span></a>
            </div>
          </div>
          <div class="product-desc center">
            <div class="product-title"><h5><a href="#">{{item.bookName}}</a></h5></div>
            <div class="product-author">作者：{{item.bookAuthor}}</div>
            <div class="product-price"><label>定价：</label> ¥ {{item.ebookPrice}}</div>
          </div>
        </div>
      </article>
    </div>
    <!-- pagearea
   ============================================= -->
    <vpage :pageMessage="{totalCount: this.totalCount - 0 || 0}"
           :excuteFunction="paging"></vpage>
  </div>
</template>
<script type="text/ecmascript-6">
	import Vue from 'vue';
	import VueBus from 'vue-bus'; // 通过 cnpm install vue-bus安装
	import {Post} from "@common";
	import PROJECT_CONFIG from "projectConfig";
	import vpage from "../../pagination/pagination.vue";
	import "bootstrap/dist/css/bootstrap.min.css";

	Vue.use(VueBus);  // 在一个模块化工程中使用，必须通过Vue.use()使用vue-bus

	export default {
		name: "ui_list_pic_05",
		reused: true,
		props: ["namespace"],
		data(){
			return {
				CONFIG: null,
				bookRecommendList: [],
				totalCount: '0',
				PIC_LIST_PAGE: null,
				pageMessage: null
			}
		},
		components: {
			vpage
		},
		created(){
			this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].list_pic.ui_list_pic_05 : PROJECT_CONFIG.list_pic.ui_list_pic_05;
			//this.queryPicListPage();
			this.$bus.$on('toClassification', this.queryPicListPage);
		},
		methods: {
			queryPicListPage: function (param) {
        console.info(param)
				var first = "[{pub_resource_type:'BOOK'},{pub_status:'1'}";
				var second = "{pub_col_id:51}]";
				if (typeof (param) == "object") {
					//点击分页
					this.CONFIG.params.pageNo = param.pageNo;
					this.CONFIG.params.pageSize = param.pageSize;
				} else {
					if (param == "-1" || param == undefined) {
						//点击左侧列表的全部分类
						var string = first + "," + second;
						this.CONFIG.params.conditions = string;
					} else {
						//点击每个分类
						var string = "{BOOK_BOOK_CASCADID:" + param + ",op:'lk'}";
						string = first + "," + string + "," + second;
						this.CONFIG.params.conditions = string;
					}
				}
				var obj = this;
				Post(this.CONFIG.url, this.CONFIG.params).then((rep) => {
					var datas = rep.data.result;
					var loadDatas = [];
					for (var i = 0; i < datas.length; i++) {
						var entry = {
							bookName: datas[i].prod_name || '暂无书名',
							// bookPrice: datas[i].BOOK_PRICE || '0',
							ebookPrice: datas[i].prod_member_price || '0',
							bookAuthor: datas[i].BOOK_SYS_AUTHORS || '暂无作者',
							pubId: datas[i].id || 0,
							contentType: datas[i].pub_content_type || 0,
							pub_col_id: datas[i].pub_col_id || 51,
							bookUrl: datas[i].pub_picBig || ""
						};
						loadDatas.push(entry)
					};
					obj.bookRecommendList = loadDatas;
					var message = {
						pageSize: rep.data.pageSize,
						totalCount: rep.data.totalCount
					}
					obj.pageMessage = message;
					obj.totalCount = message.totalCount
				})

			},
			paging: function ({pageNo, pageSize}) {
				var param = {
					pageNo: pageNo,
					pageSize: pageSize,
				};
				this.queryPicListPage(param);
			},
		}
	}
</script>
<style>
  div {
    display: block;
  }

  .all_article {
    min-height: 1648px;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .col-md-4 {
    width: 33.33333333%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .books-catergory article {
    margin-bottom: 30px;
  }

  .product.iproduct {
    float: none;
    margin: 0;
    padding: 0;
    width: 100%;
    margin-bottom: 30px;

  }

  .books-catergory article > div {
    height: 360px;
    overflow: hidden;
  }

  .product {
    position: relative;
  }

  .iproduct .product-image, .iproduct .product-image a, .iproduct .product-image img {
    height: auto;
  }

  .product-image img {
    height: 290px;
    width: 290px;
  }

  .product-image {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .product-image > a, .product-image .slide a, .product-image img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .iproduct .product-image, .iproduct .product-image a, .iproduct .product-image img {
    height: auto;
  }

  .product-image > a, .product-image .slide a, .product-image img {
    display: block;
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none !important;
  }

  .product-overlay {
    position: absolute;
    width: 100%;
    height: 44px;
    line-height: 44px;
    top: auto;
    bottom: -44px;
    left: 0;
    z-index: 6;
  }

  .product-overlay a {
    display: block;
    float: left;
    width: 50%;
    text-align: center;
  }

  .product-overlay a i {
    position: relative;
    top: 1px;
    font-size: 14px;
    margin-right: 3px;
  }

  .icon-shopping-cart, .icon-zoom-in2 {
    display: inline-block;
    font-family: 'font-icons';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .product-desc {
    padding: 10px 0;
    font-size: 14px;
  }

  .center {
    text-align: center !important;
  }

  .product-title {
    margin-bottom: 7px;
  }

  .product-title h5 {
    margin-bottom: 10px;
  }

  .product-price {
    margin-bottom: 4px;
  }

  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
  }

  #commonPaging {
    clear: both;
  }

  body:not(.device-touch):not(.device-xs):not(.device-xxs) .product-overlay {
    -webkit-transition: bottom .3s ease-in-out;
    -o-transition: bottom .3s ease-in-out;
    transition: bottom .3s ease-in-out;
  }

  .product:hover .product-overlay {
    bottom: 0;
  }

  .product-overlay a {
    display: block;
    float: left;
    width: 50%;
    text-align: center;
  }

  body:not(.device-touch):not(.device-xs):not(.device-xxs) .product-overlay a {
    -webkit-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }

  .product-overlay a.item-quick-view {
    border-right: 0;
  }

  .product-overlay a i {
    position: relative;
    top: 1px;
    margin-right: 3px;
  }


</style>
