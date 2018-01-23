/* 电子书 推荐栏目 */
<template>
  <div class="norightpadding books-catergory ui_pic_list_05">
    <div class="all_article">
      <article class="col-md-4 clearfix" v-for="item in bookRecommendList">
        <div class="product iproduct clearfix">
          <div class="product-image">
            <a class="ebook_list_imgBox" target="_blank"><img :src="item.bookUrl" alt="暂无封面" onload="DrawImage(this,260,260)" style="height:247px;width: auto;margin: 0 auto;"></a>
            <div class="product-overlay">
              <!-- <a href="#" class="add-to-cart"><i class="icon-shopping-cart"></i><span>加入购物车</span></a> -->
              <a class="w247" href="javascript:void(0)" @click="toInfo(item)" target="_blank"><i class="icon-zoom-in2"></i><span> 查看详情</span></a>
            </div>
          </div>
          <div class="product-desc center">
            <div class="product-title">
              <h5><a href="javascript:void(0)" @click="toInfo(item)">{{item.bookName}}</a></h5></div>
            <div class="product-author">作者：{{item.bookAuthor}}</div>
            <div class="product-price"><label>定价：</label> ¥ {{item.ebookPrice}}</div>
          </div>
        </div>
      </article>
    </div>
    <!-- pagearea
   ============================================= -->
    <ui_pagination :pageMessage="{totalCount: this.totalCount - 0 || 0}"
           :excuteFunction="paging"></ui_pagination>
  </div>
</template>
<script type="text/ecmascript-6">
import { Post, DrawImage } from "@common";
import PROJECT_CONFIG from "projectConfig";


export default {
  name: "ui_list_pic_05",
  reused: true,
  props: ["namespace"],
  data () {
    return {
      CONFIG: null,
      bookRecommendList: [],
      totalCount: '0',
      pageMessage: null
    }
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.ui_list_pic_05;
    this.$bus.$on(this.CONFIG.broadcastName, this.queryPicListPage);
  },
  methods: {
    queryPicListPage: function (param) {
      let conditions = "[{pub_resource_type:" + this.CONFIG.pub_resource_type + "},"
        + "{pub_status:" + this.CONFIG.pub_status + "},"
        + "{pub_col_id:" + this.CONFIG.pub_col_id + "}";
      let paramsObj = Object.assign({}, this.CONFIG.params);
      if (typeof (param) == "object") {
        //点击分页
        paramsObj.pageNo = param.pageNo;
        paramsObj.pageSize = param.pageSize;
      } else {
        this.CONFIG.params.conditions = (param == "-1") ? conditions + "]" : conditions + ",{BOOK_BOOK_CASCADID:" + param + ",op:'lk'}]";
      }
      Post(this.CONFIG.url, paramsObj).then((rep) => {
        var datas = rep.data.result;
        var loadDatas = [];
        if (datas && datas instanceof Array && datas.length > 0) {
          for (var i = 0; i < datas.length; i++) {
            var entry = {
              bookName: datas[i].prod_name || '暂无书名',
              ebookPrice: datas[i].prod_member_price || '0',
              bookAuthor: datas[i].BOOK_SYS_AUTHORS || '暂无作者',
              pubId: datas[i].id || 0,
              contentType: datas[i].pub_content_type || 0,
              pub_col_id: datas[i].pub_col_id || 51,
              pub_col_name: datas[i].pub_col_name || "",
              bookUrl: datas[i].pub_picBig || ""
            };
            loadDatas.push(entry)
          };
          this.bookRecommendList = loadDatas;
          this.totalCount = rep.data.totalCount;
        }
      })
    },
    paging: function ({ pageNo, pageSize }) {
      var param = {
        pageNo: pageNo,
        pageSize: pageSize,
      };
      this.queryPicListPage(param);
    },
    toInfo: function (item) {
      window.location.href = "../pages/bookdetail.html?pubId="+item.pubId+"&contentType="+item.contentType+"&columnId="+item.pub_col_id+ '&columnName=' + item.pub_col_name;
    }
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

.iproduct .product-image,
.iproduct .product-image img {
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

.product-image .slide a,
.product-image img {
  display: block;
  width: 100%;
  height: 100%;
}

.iproduct .product-image,
.iproduct .product-image a,
.iproduct .product-image img {
  height: auto;
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
  width: 100%;
  text-align: center;
}

.product-overlay a i {
  position: relative;
  top: 1px;
  font-size: 14px;
  margin-right: 3px;
}

.icon-shopping-cart,
.icon-zoom-in2 {
  display: inline-block;
  font-family: "font-icons";
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
.ebook_list_imgBox{
  height: 260px;
}
body:not(.device-touch):not(.device-xs):not(.device-xxs) .product-overlay {
  -webkit-transition: bottom 0.3s ease-in-out;
  -o-transition: bottom 0.3s ease-in-out;
  transition: bottom 0.3s ease-in-out;
}

.product:hover .product-overlay {
  bottom: 0;
}

.product-overlay a {
  display: block;
  float: left;
  width: 100%;
  text-align: center;
}

body:not(.device-touch):not(.device-xs):not(.device-xxs) .product-overlay a {
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
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
