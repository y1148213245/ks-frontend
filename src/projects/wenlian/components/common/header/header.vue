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
              <span v-show="member && member.loginName" v-text="cartTotalAmount"></span>
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
              <span class="search-word_block--float">热门搜索:</span>
              <template v-for="(item, index) in hotWords">
                <a @click="goToSearchResultByHW(item.SYS_TOPIC || '')" v-text="item.SYS_TOPIC" :title="item.SYS_TOPIC" href="javascript:;"></a>
                <span class="search-word_block--float" style="display: inline-block;" v-if="index < hotWords.length - 1">|</span>
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
          <div class="con"></div>
          <div class="con-all" style="display: none;"></div>
        </div>
        <div class="nav fr">
          <a href="javascript:void(0)" class="on"></a>
          <a href="javascript:void(0)" class=""></a>
          <a href="javascript:void(0)" class=""></a>
          <a href="javascript:void(0)" class=""></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

  import {Get, Post} from "@common"
  import PROJECT_CONFIG from "projectConfig";

  export default{
    name: 'components_common_header',
    reused: true,
    props: ["namespace"],
    data: function () {
      return {
        CONFIG: null,
        member: {},
        cartTotalAmount: 0,
        hotWords: [{SYS_TOPIC: '明星大侦探'}, {SYS_TOPIC: '今日说法'}, {SYS_TOPIC: '名侦探柯南'}, {SYS_TOPIC: '白夜行'}, {SYS_TOPIC: '飘'}],
        conditions: "[{pub_col_id:'115'}]",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
      }
    },
    mounted: function () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].common.header;
      this.queryMember();
    },
    methods: {
      queryMember: function () {
        Get(this.CONFIG.queryMember.url, {}).then((response => {
          if (response.data && response.data.loginName) {
            this.member = response.data;
          } else {
            alert('请登录！');
          }
        }));
      },
      doLogout: function () {
        this.member = {};
        alert('退出了！');
      },
      doLogin: function () {
        this.queryMember();
      },
      goToCart: function () {
        if (this.member.loginName) {
          window.location.href = 'shoppingCart.html'
        } else {
          this.$alert('请您先登录~', '系统提示', {
            confirmButtonText: '确定'
          });
        }
      },
      goToAdvSearch: function () {
        window.location.href = 'advSearch.html'
      },
      goToSearchResult() {
        window.location.href = 'search.html?searchText=' + this.searchText + "&category=" + this.category + "#";
      },
      goToSearchResultByHW(name){
        window.location.href = 'search.html?searchText=' + name + "#"
      },
    }
  }
</script>
