<template>
<div>
  <div class="book-board ui_list_pic_04">
    <div v-if="bookList && bookList.length > 0" class="oc-item shuping-item" v-for="(item, index) in bookList" :key="index">
      <div class="product iproduct  clearfix">
        <div class="product-image">
          <a :href="'../pages/bookdetail.html?pubId='+item.id+'&contentType='+item.pub_content_type+'&columnId=' + item.pub_col_id"
             target="_blank" class="ebook_hot_imgBox">
            <img onload="DrawImage(this,100,100)" :src="item.pub_picBig" alt="暂无图片" class="ebook_hot_img"/>
          </a>
        </div>
        <div class="product-desc">
          <div class="product-title"><h5><a
            :href="'../pages/bookdetail.html?pubId='+item.id+'&contentType='+item.pub_content_type+'&columnId=' + item.pub_col_id "
            target="_blank">{{item.BOOK_SYS_TOPIC}}</a></h5></div>
          <div class="product-author">作者：{{item.BOOK_SYS_AUTHORS | notAvailable}}</div>
          <div class="product-price"><label>定价：</label> ¥ {{item.prod_sale_price | twoPoint| notAvailable}}</div>
        </div>
      </div>
    </div>
    <div class="noData" v-if="bookList.length === 0">
      暂无数据
    </div>
  </div>
  <div v-if="modulename === 'historylist'" class="button button-border button-border-thin button-red" @click="deleteHistoryByUser()">清空记录</div>
</div>
</template>
<script type="text/ecmascript-6">
import URL from "url";
import { mapGetters, mapActions } from "vuex";
import * as interfaces from "@work/login/common/interfaces.js";
import { Get, Post, DrawImage, CookieUtils } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "ui_list_pic_04",
  reused: true,
  props: ["namespace", "modulename"],
  data: function () {
    return {
      bookList: []
    }
  },
  computed: {
    ...mapGetters("login", {
      isLogin: interfaces.GET_MEMBER_ISLOGIN,
      member: interfaces.GET_MEMBER
    }),
    ...mapGetters({
      bookInfo: 'bookDetail/bookDetailInfo',
    }),
  },
  created: function () {
    let moduleName = this.modulename;
    let url = PROJECT_CONFIG[this.namespace].list_pic.list_pic_04_pic_list;
    this.CONFIG = !this.modulename ? url : url[moduleName];  //判断一个页面有一个还是两个以上该组件
    this.query = URL.parse(document.URL, true).query;
    //get
    this.$bus.$on("relativebook", this.relativeBook);//详情页 - 相关图书
    // this.$bus.$on("historylist",this.historyList);//详情页 - 您的历史记录
    //post
    this.$bus.$on("hotbook", this.hotBook);//推荐 - 图书热卖榜
  },
  methods: {
    hotBook: function () {
      Post(this.CONFIG.url, this.CONFIG.params).then((rep) => {
        var data = rep.data.result;
        var hasData = rep.status === 200 && data && Object.prototype.toString.call(data) === "[object Array]" && data.length > 0;
        if (hasData) {
          this.bookList = data;
        }
      })
    },
    relativeBook: function () {
      if (this.CONFIG.url.indexOf("related") !== -1) {
        let bookParam = Object.assign({}, this.CONFIG.params);
        bookParam.pubId = this.query.pubId;
        Get(this.CONFIG.url, { "params": bookParam }).then((rep) => {
          var data = rep.data.data.bookcat;
          var hasData = data && Object.prototype.toString.call(data) === "[object Array]" && data.length > 0 ? true : false;
          if (hasData) {
            this.bookList = data;
          }
        })
      }
    },
    addgethistorylist: function (loginName) {
      var url = this.CONFIG.url;
      if (url.indexOf("History") !== -1) {
        let param = Object.assign({}, this.CONFIG.params);
        param.username = loginName;
        Get(BASE_URL + '/browserHistory/addBrowserHistory.do?pubId=' + this.query.pubId + '&loginName=' + loginName).then((repsonse) => {
          if (repsonse.data.result === '1') {
            this.gethistorylist(param);
          }
        })

      }
    },
    gethistorylist (param) {
      Get(this.CONFIG.url, { params: param }).then((rep) => {
        var data = rep.data.data;
        var hasData = rep.status === 200 && data && Object.prototype.toString.call(data) === "[object Array]" && data.length > 0 ? true : false;
        if (hasData) {
          var dataList = []; // 历史记录返回的数据字段与模板上的不同 处理一下字段名称
          var len = data.length;
          for (var i = 0; i < len; i++) {
            var temp = {
              pub_picBig: data[i].bigPic, // 封面图
              id: data[i].pubId,   // 发布id
              pub_content_type: data[i].contentType,  // 书的类型
              pub_col_id: data[i].colId, // 栏目id
              BOOK_SYS_AUTHORS: data[i].author, // 作者
              prod_sale_price: data[i].productPrice, // 售价
              BOOK_SYS_TOPIC: data[i].resourceName, // 书名
            };
            dataList.push(temp);
          }
          this.bookList = dataList;
        } else {
          this.bookList = [];
        }
      })
    },
    deleteHistoryByUser () {
      if (this.member.loginName) {
        Get(BASE_URL + 'browserHistory/deleteHistoryByUser.do?&loginName=' + this.member.loginName).then((rep) => {
          if (rep.data.result === "1") {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            let param = Object.assign({}, this.CONFIG.params);
            param.username = this.member.loginName;
            this.gethistorylist(param);
          } else {
            this.$message({
              type: "error",
              message: "删除失败!"
            });
          }
        })
      } else {
        CookieUtils.delCookie("history");
        this.bookList = "";
      }

    }
  },
  watch: {
    member: function (newValue, oldValue) {
      if (newValue.loginName && newValue.loginName !== oldValue.loginName) { // 已经登录时 历史浏览记录从后台请求
        this.addgethistorylist(newValue.loginName);   // 您的历史记录
      }
    },
    bookInfo: function (newv, oldv) {
      if (this.modulename === 'historylist') {
        var loginName = this.member.loginName;
        if (!loginName) {    //未登录时 历史浏览记录存 cookie
          var queryCookie = JSON.parse(CookieUtils.getCookie('history'));
          //取 cookie
          if (queryCookie == null) {
            queryCookie = [];
          }
          //控制重复添加浏览历史数据
          var flag = true;
          for (var i = 0; i < queryCookie.length; i++) {
            if (newv.pubId == queryCookie[i].id) {
              flag = false;
            }
          }
          var obj = {
            BOOK_SYS_TOPIC: newv.resourceName,
            BOOK_SYS_AUTHORS: newv.author,
            prod_sale_price: newv.productPrice,
            id: newv.pubId,
            pub_content_type: newv.contentType,
            pub_col_id: newv.colId,
            pub_picBig: newv.bigPic
          };
          if (flag) {
            queryCookie.unshift(obj);
            //存 cookie
          }
          CookieUtils.setCookie("history", JSON.stringify(queryCookie), 1);
          this.bookList = (JSON.parse(CookieUtils.getCookie('history')));
        }
      }
    }
  }
}
</script>
<style>
.ebook_hot_imgBox {
  display: block !important;
  width: 100px !important;
  height: 100px !important;
  text-align: center !important;
}

.ebook_hot_img {
  display: inline-block !important;
}

a {
  text-decoration: none !important;
  color: #ae0f29;
}

.button.button-border {
  border: 2px solid #444;
  background-color: transparent;
  color: #333;
  line-height: 36px;
  font-weight: 600;
  text-shadow: none;
}

.button-border.button-red {
  color: #c02942;
  border-color: #c02942;
}

.button.button-border-thin {
  border-width: 1px;
  line-height: 38px;
  margin-top: 10px;
}

.button.button-border-thin:hover {
  color: #ffffff;
  background-color: #c02942;
}
</style>
