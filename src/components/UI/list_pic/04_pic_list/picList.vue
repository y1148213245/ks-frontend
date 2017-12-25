<template>
  <div class="book-board ui_list_pic_04">
    <div class="oc-item shuping-item" v-for="item in bookhotList">
      <div class="product iproduct  clearfix">
        <div class="product-image" style="margin-top: 5px;margin-right: 5px;">
          <a :href="'../pages/bookdetail.html?pubId='+item.id+'&contentType='+item.pub_content_type+'&columnId=51'"
             target="_blank" class="ebook_hot_imgBox">
            <img onload="DrawImage(this,100,100)" :src="item.pub_picBig" alt="book-title" class="ebook_hot_img"/>
          </a>
        </div>
        <div class="product-desc">
          <div class="product-title"><h5><a
            :href="'../pages/bookdetail.html?pubId='+item.id+'&contentType='+item.pub_content_type+'&columnId=51'"
            target="_blank">{{item.BOOK_SYS_TOPIC}}</a></h5></div>
          <div class="product-author">作者：{{item.BOOK_SYS_AUTHORS | not-available}}</div>
          <div class="product-price"><label>定价：</label> ¥ {{item.prod_sale_price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import URL from "url";
  import {Get,Post,DrawImage} from "@common";
  import PROJECT_CONFIG from "projectConfig";
  import {Url} from "url";

  export default {
    name: "ui_list_pic_04",
    reused: true,
    props: ["namespace", "modulename"],
    data: function () {
      return {
        bookhotList: []
      }
    },
    created: function () {
      let moduleName = this.modulename;
      let url=PROJECT_CONFIG[this.namespace].list_pic.list_pic_04_pic_list;
      this.CONFIG = !this.modulename ? url : url[moduleName];
        //get
        this.$bus.$on("relativebook", this.relativebook);
        // this.$bus.$on("historylist",this.historylist);
        //post
        this.$bus.$on("hotbook", this.hotbook);
    },
    methods: {
      hotbook: function () {
        Post(this.CONFIG.url, this.CONFIG.params).then((rep) => {
          var data = rep.data.result;
          var hasData = rep.status === 200 && data && Object.prototype.toString.call(data) === "[object Array]" && data.length > 0;
          if (hasData) {
            this.bookhotList = data;
          }
        })
      }
      ,
      relativebook: function (param) {
        var url = this.CONFIG.url;
        if (url.indexOf("related") !== -1) {
          url = url + "?size=3&pubId=" + param;
          Get(url).then((rep) => {
            var data = rep.data.data.bookcat;
            var hasData = data && Object.prototype.toString.call(data) === "[object Array]" && data.length > 0 ? true : false;
            if (hasData) {
              this.bookhotList = data;
            }
          })
        }
      }
      ,
      historylist: function (param) {
        //TODO 历史记录
        // var url=this.CONFIG.url;
        // if(url.indexOf("History") !== -1){
        //   url = url + "?size=3&username=" +param;
        // }
        // Get(url).then((rep) => {
        //   var data = rep.data.result;
        //   var hasData = rep.status === 200 && data && Object.prototype.toString.call(data) === "[object Array]" && data.length > 0 ? true : false;
        //   if (hasData) {
        //     this.bookhotList = data;
        //   }
        // })
      }
    }
  }
</script>
<style>
  .ebook_hot_imgBox {
    display: block !important;
    width: 100px !important;
    height: 100px !important;
    line-height: 100px !important;
    text-align: center !important;
  }

  .ebook_hot_img {
    display: inline-block !important;
  }
</style>
