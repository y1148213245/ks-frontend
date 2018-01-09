// edit by song 2018/1/5
// 头部组件包括三个请求： 热门搜索 图书全部分类导航 头部栏目导航
<template>
  <div id="wl_header" class="header">
    <div class="header_top1 f12">
      <div class="wrap">
        <div class="fl">您好,欢迎来到数字图书馆!</div>
        <div class="fr">
          <span class="login_success" v-show="member && member.loginName">
            欢迎回来!
            <a href="#" class="login_img color_c50 pr18 pl18"
               v-text="member && member.loginName">北京大学</a><a href="#" class="quit pr25" @click="doLogout">[退出]</a>
          </span>
          <span class="login_no" v-show="!(member && member.loginName)">
            <a href="javascript:void(0)" class="quit pr25" @click="doLogin">[登录]</a>
          </span>
          |
          <span class="about_site pr25 pl25"><a href="#">相关网站</a></span>
          |
          <span class="pl20 pr05"> <a href="#" class="download_app pl15">下载APP</a></span>
        </div>
      </div>
    </div>

    <div class="header_top2 cl">
      <div class="wrap">
        <div class="logo fl"><a href="/pages/index.html"><img src="/assets/img/logo.jpg"/></a></div>
        <div class="search fr" style="margin-right: 150px;">
          <div class="fr myshop f14">
            <a class="color_525 cartIcon" @click="goToCart()">
              我的购物车
              <span v-show="member && member.loginName" v-text="recordTotalAmount"></span>
              <span v-show="!(member && member.loginName)">0</span>
            </a>
          </div>
          <div name="btnAdvanceSearch" class="highsearh f14 color_3b3 pr20" @click="goToAdvSearch">高级检索</div>
          <div class="search_box">
            <input type="button" value="搜索" class="btn_search" name="search" @click="goToSearchResult">
            <input type="text" id="searchText" value="" placeholder="输入关键字" v-model="searchText"
                   @keyup.13="goToSearchResult($event)" style="float:left">
          </div>
          <div id="hot_search_tag" class="search_hot line-h32 cl search_word_box">
            <div>
              <span class="search-word_block&#45;&#45;float">热门搜索:</span>
              <template v-for="(item, index) in hotWordList">
                <a @click="goToSearchResultByHW(item.information_SYS_TOPIC || '')" v-text="item.information_SYS_TOPIC" :title="item.information_SYS_TOPIC" href="javascript:;"></a>
                <span class="search-word_block&#45;&#45;float" style="display: inline-block;" v-if="index < hotWordList.length - 1">|</span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header_top3 cl">
      <div class="wrap" style="position: relative;">
        <div class="all_class f16 color_fff fl open off"><span class="all_class_bg pl30">全部分类</span></div>
        <div class="all_class_detail">
          <div class="con">
            <dl v-for="(entry, index) in navCategory" :class="{jishu:index%2==0}">
              <dt>
                <a :href="'../book/bookList.html?cascadeId='+entry.id" class="one_title f14" v-text="entry.text"></a>
              </dt>
              <dd class="two_title">
                <template v-for="(sub_entry,index) in entry.children">
                  <template v-if="index+1!=entry.children.length">
                    <!--:href="../book/bookList.html?cascadeId="entry.id+"~"+sub_entry.cascadeId-->
                    <a  v-text="sub_entry.text"></a><span>|</span>
                  </template>
                  <!--<template v-else="index+1!=entry.children.length">-->
                    <!--<a :href="getUrl(sub_entry.cascadeId)" v-text="sub_entry.text"></a>-->
                  <!--</template>-->
                </template>
              </dd>
            </dl>
          </div>
          <div class="con-all" style="display: none;"></div>
        </div>
        <div class="nav fr">
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
    colLoadingNum: {
      default: 5
    },
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
    }
  },
  computed: {
    ...mapGetters("login_02", {
      member: interfaces.GET_MEMBER
    }),
    ...mapGetters({
      productList: "shoppingcart/getProductList",        // 获取购物车商品列表
      cartTotalAmount: "login_02/getTotalAmount",        // 获取购物车商品总数量
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

  },
  methods: {
    ...mapActions("login_02", {  // 取用户信息
      getMemberInfo: interfaces.ACTION_KEEP_SESSION
    }),
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
        this.showColId = colId ? colId: navColArr[0];
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

</style>

