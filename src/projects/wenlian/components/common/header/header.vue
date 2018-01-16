// edit by song 2018/1/5
// 头部组件包括三个请求： 热门搜索 图书全部分类导航 头部栏目导航
<template>
  <div class="components_header components_header_skin">
    <div class="header_top1">
      <div class="topOneWrapper">
        <div class="hello">您好,欢迎来到数字图书馆!</div>
        <div class="member">
          <span class="login_success" v-show="member && member.loginName">
            欢迎回来!
            <a href="#" class="loginImg" v-text="member && member.loginName">北京大学</a>
            <a href="#" class="quit" @click="doLogout()">[退出]</a>
          </span>
          <span class="loginNo" v-show="!(member && member.loginName)">
            <a href="javascript:void(0)" class="quit" @click="doLogin">[登录]</a>
          </span>
          |
          <span class="aboutSite"><a href="#">相关网站</a></span>
          |
          <span class="download"><a href="#" class="downloadApp">下载APP</a></span>
        </div>
        </div>
    </div>

    <div class="header_top2">
      <div class="wrap">
        <div class="logoCon" href="/pages/index.html"><img src="/assets/img/logo.jpg" alt=""></div>
        <div class="searchCon">
          <div class="myshop">
            <a class="cartIcon" @click="goToCart()">
              我的购物车
              <span v-show="member && member.loginName" v-text="recordTotalAmount"></span>
              <span v-show="!(member && member.loginName)">0</span>
            </a>
          </div>
          <div class="suishouji">
            <a class="color_525" style="cursor: pointer;">随手记</a>
          </div>
          <div name="btnAdvanceSearch" class="highsearh" @click="goToAdvSearch">高级检索</div>
          <div class="searchBox">
            <input type="button" value="搜索" class="searchBtn" name="search" @click="goToSearchResult">
            <input type="text" id="searchText" class="searchText" value="" placeholder="输入关键字" v-model="searchText"
                   @keyup.13="goToSearchResult($event)">
          </div>
          <div class="hotWordCon">
            <span class="hotSearchWord">热门搜索:</span>
            <div v-for="(item, index) in hotWordList" :key="index">
              <a class="info" @click="goToSearchResultByHW(item.information_SYS_TOPIC || '')" v-text="item.information_SYS_TOPIC" :title="item.information_SYS_TOPIC" href="javascript:;"></a>
              <span class="search-word_block&#45;&#45;float" style="display: inline-block;" v-if="index < hotWordList.length - 1">|</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header_top3">
      <div class="wrap">
        <div class="allCata"><span class="allCataBg">全部分类</span></div>
        <div class="all_class_detail" style="display: none;">
          <div class="con">
            <dl v-for="(entry,index) in (navCategory || 0)" v-show="index<col_loading_num" :key="index">
              <dt><a href="javascript:;" @click="getUrl(entry.id)" class="one_title f14" v-text="entry.text"></a></dt>
              <dd class="two_title">
                <template v-for="(sub_entry,index) in entry.children">
                  <a href="javascript:;" @click="getUrl(sub_entry.cascadeId)" v-text="sub_entry.text"></a><span>|</span>
                </template>
              </dd>
            </dl>
          </div>
          <a v-if="col_loading_num!=999" class="expend fr color_727 f14" @click="bindShowAll()" href="javascript:;"><span>显示全部</span><i class="i-incline-down ml05"></i></a>
        </div>
        <div class="nav">
          <a href="javascript:void(0)" v-for="(sub,index) in navColArray" v-text="sub.title" :key="index" @click="toSub(sub)" :class="{'on': showColId == sub.id}"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapGetters, mapActions } from "vuex";
import * as interfaces from "@work/login/common/interfaces.js";
import * as type from "@work/shoppingCart/common/interfaces.js";
import { Get, Post } from "@common";
import URL from "url";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'components_common_header',
  reused: true,
  // props: ['namespace', { colLoadingNum: { default: 5 } }, { colId: { default: '' } }],
  props: {
    namespace: String,
    colId: {
      default: String
    }
  },
  data: function () {
    return {
      CONFIG: null,  // API配置
      recordTotalAmount: 0,  // 购物车商品数量
      searchText: '',  // 检索词
      /* 列表条件？ */
      conditions: "[{pub_col_id:'115'}]",
      /* 列表排序？ */
      orderBy: "pub_a_order asc pub_lastmodified desc id asc",
      /* 图书列表页URL */
      bookListUrl: "/page/bookList.html",
      navCategory: [],  // 图书分类导航
      navColArray: [],  // 栏目导航
      hotWordList: [],  // 热门搜索关键词
      showColId: "",
      col_loading_num: 5
    }
  },
  computed: {
    ...mapGetters("login_02", {
      member: interfaces.GET_MEMBER
    }),
    ...mapGetters({
      productList: "shoppingcart/getProductList",        // 获取购物车商品列表
      cartTotalAmount: "login_02/getTotalAmount",        // 获取购物车商品总数量
      allNavCols: "cache/getNavCols"
    })
  },
  created: function () {
    this.getMemberInfo().then((member) => {
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
      }
      this.$store.dispatch('shoppingcart/' + type.QUERY_SHOPPING_CART, params);
    });
  },
  mounted: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].common.header;
    this.queryHotWord();      // 查询热门搜索关键词
    this.queryNavCols();      // 查询栏目导航
    this.queryNavCategory();  // 左侧图书分类导航
    this.getAllNavCols();
  },
  methods: {
    ...mapActions("login_02", {  // 取用户信息
      getMemberInfo: interfaces.ACTION_KEEP_SESSION
    }),
    ...mapActions({
      getAllNavCols: "cache/setNavCols" // 获取全部栏目
    }),
    bindShowAll: function () {
      //更多分类
      this.col_loading_num = this.col_loading_num === 5 ? this.navCategory.length + 1 : 5;
    },
    queryHotWord: function () {
      var maxNum = this.CONFIG.queryHotWord.num; // 控制最多显示数量
      Post(this.CONFIG.queryHotWord.url, this.CONFIG.queryHotWord.params).then((rep) => {
        var datas = rep.data.result;
        if (datas && datas instanceof Array && datas.length > 0) {
          this.hotWordList = datas.length > maxNum ? datas.slice(0, maxNum - 1) : datas;
        }
      });
    },
    queryNavCategory: function () {
      Get(this.CONFIG.queryNavCategory.url, { "params": this.CONFIG.queryNavCategory.params }).then((response) => {
        var data = response.data;
        if (data && data.length) {
          this.navCategory = data;
        }
      });
    },
    queryNavCols: function () {
      var navColArr = this.CONFIG.queryNavCols.navColArr;
      Get(this.CONFIG.queryNavCols.url, { "params": this.CONFIG.queryNavCols.params }).then(rep => {
        var datas = rep.data.data;  // 返回的是后台所有的栏目
        if (datas && datas instanceof Array && datas.length > 0) {
          for (let i = 0; i < navColArr.length; i++) {
            for (let j = 0; j < datas.length; j++) {
              if (navColArr[i] == datas[j].id && datas[j].parentId === 0) { // 过滤出 所需要的 首页 栏目
                this.navColArray.push({ title: datas[j].name, url: datas[j].url, id: datas[j].id });
              }
            }
          }
        }
        var colId = URL.parse(document.URL, true).query.colId;
        this.showColId = colId ? colId : navColArr[0];
      });
    },
    toSub (sub) {  // 二级菜单
      window.location.href = sub.url + '?colId=' + sub.id;
    },
    doLogout: function () {  // 登出
      this.member = {};
      alert('退出了！');
    },
    doLogin: function () {  // 登陆
      // this.queryMember();
      window.location.href = "../pages/login.html";
    },
    getUrl (id) {
      return this.colId ? (this.bookListUrl + '?cascadeId=' + id + '&colId=' + this.colId) : (this.bookListUrl + '?cascadeId=' + id);
    },
    goToCart: function () {
      if (this.member.loginName) {
        window.location.href = '../pages/shoppingcart.html'
      } else {
        this.$alert('请您先登录~', '系统提示', {
          confirmButtonText: '确定'
        });
      }
    },
    goToAdvSearch: function () {
      window.location.href = 'advSearch.html'
    },
    goToSearchResult () {
      window.location.href = 'search.html?searchText=' + this.searchText + "&category=" + this.category + "#";
    },
    goToSearchResultByHW (name) {
      window.location.href = 'search.html?searchText=' + name + "#"
    },
    getUrl: function (id) {
      window.location.href = './booklist.html?cascadeId=' + id;

    }
  },
  watch: {
    cartTotalAmount: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.recordTotalAmount = newValue;
      }
    },
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.components_header {
  width: 100%;
}
.components_header .topOneWrapper {
  width: 1200px;
  margin: 0 auto;
}
.components_header .header_top1 {
  height: 31px;
  line-height: 31px;
  border-bottom-width: 1px;
}

.components_header .header_top1 .hello {
  float: left;
}

.components_header .header_top1 .member {
  float: right;
}

.components_header .header_top1 .member .loginImg {
  background-position: -1px 1px;
  padding-right: 18px;
  padding-left: 18px;
}

.components_header .header_top1 .member .quit {
  padding-right: 25px;
}

.components_header .header_top1 .aboutSite {
  padding-right: 25px;
  padding-left: 25px;
}

.components_header .header_top1 .download {
  padding-left: 20px;
  padding-right: 5px;
}

.components_header .header_top1 .download .downloadApp {
  padding-left: 15px;
  background-position: -6px -14px;
}
.components_header .header_top2 .logoCon {
  float: left;
  margin-left: 150px;
}

.components_header .header_top2 .searchCon {
  float: right;
  margin-right: 150px;
}

.components_header .header_top2 .myshop {
  background-position: -1px -54px;
  margin: 45px 10px 0 10px;
  padding-left: 25px;
  line-height: 30px;
  float: right;
}

.components_header .header_top2 .myshop .cartIcon {
  position: relative;
}

.components_header .header_top2 .myshop .cartIcon span {
  display: block;
  position: absolute;
  top: -7px;
  left: auto;
  right: -16px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  line-height: 16px;
  text-align: center;
}

.components_header .header_top2 .suishouji {
  background-position: -5px -31px;
  margin: 45px 10px 0 10px;
  padding-left: 25px;
  line-height: 30px;
  font-size: 14px;
  float: right;
}

.components_header .header_top2 .highsearh {
  float: right;
  width: 30px;
  text-align: center;
  height: 44px;
  margin: 38px 0 0 10px;
  line-height: 22px;
  padding-right: 20px;
}

.components_header .header_top2 .searchBox {
  width: 494px;
  height: 44px;
  float: right;
  border-width: 2px solid #ca0000;
  margin-top: 38px;
  position: relative;
}

.components_header .header_top2 .searchBox .searchBtn {
  width: 88px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  float: right;
  border: none;
  padding: 0;
  overflow: hidden;
}

.components_header .header_top2 .searchBox .searchText {
  width: 300px;
  height: 44px;
  float: right;
  border: 0;
  padding-left: 25px;
  float: left;
}

.components_header .header_top2 .searchBox .hotWordCon {
  height: 40px;
  overflow: hidden;
  line-height: 32px;
  clear: both;
}

.components_header .header_top2 .hotWordCon .hotSearchWord {
  float: left;
  line-height: 32px;
}

.components_header .header_top2 .hotWordCon .info {
  line-height: 32px;
  padding: 0 5px 0 5px;
  display: inline-block;
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  float: left;
}

.components_header .header_top3 {
  height: 41px;
  line-height: 41px;
  clear: both;
}

.components_header .header_top3 .wrap {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}

.components_header .header_top3 .allCata {
  width: 222px;
  border-right-width: 1px;
  position: relative;
  cursor: pointer;
  float: left;
}

.components_header .header_top3 .allCata .allCataBg {
  background-position: -2px -85px;
  height: 25px;
  padding-left: 30px;
}

.components_header .header_top3 .nav {
  width: 855px;
  margin: 0 auto;
  float: right;
}

.components_header .header_top3 .nav a {
  width: 155px;
  text-align: center;
  display: inline-block;
}
</style>



