<template>
  <div>
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
          <!--<div id='hot_search_tag'>-->
            <!--<div name="data_column_block">-->
              <!--<slot name="content" :list="list" :totalCount="totalCount">-->
                <!--<template v-for="item in list">-->
                  <!--<div>-->
                    <!--<div v-if="item.pub_picSmall">-->
                      <!--<img :src="item.pub_picSmall"/>-->
                    <!--</div>-->
                    <!--<div style="float:left">-->
                      <!--<p>{{item.pub_resource_name || "暂无作者"}}</p>-->
                      <!--<p>{{item.BOOK_SYS_AUTHORS || "暂无作者"}}</p>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="clear"></div>-->
                <!--</template>-->
              <!--</slot>-->
            <!--</div>-->
          <!--</div>-->
          <!--<hot_search_tag class="search_hot line-h32 cl search_word_box" :conditions="conditions" :order-by="orderBy">-->
          <!--<template slot="content" scope='props'>-->
          <!--<span class="search-word_block&#45;&#45;float">热门搜索:</span>-->
          <!--<template v-for="(entry,index) in props.list">-->
          <!--<a class="search_text search-word_block&#45;&#45;float"-->
          <!--@click="hotWordToResult(entry && entry.information_SYS_TOPIC || '')" href="javascript:void(0)"-->
          <!--v-text="entry && entry.information_SYS_TOPIC || ''"-->
          <!--:title="entry && entry.information_SYS_TOPIC || ''"></a>-->
          <!--<span class="search-word_block&#45;&#45;float" style="display: inline-block;"-->
          <!--v-if="index < props.list.length-1">|</span>-->
          <!--</template>-->
          <!--</template>-->
          <!--</hot_search_tag>-->
        </div>
      </div>
    </div>

    <!--<div class="header_top3 cl">-->
    <!--<div class="wrap" style="position:relative;">-->
    <!--<div class="all_class f16 color_fff fl" :class="{open:!tag_hide,off:!tag_hide}"><span class="all_class_bg pl30">全部分类</span></div>-->
    <!--<slot name="column_component">-->
    <!--&lt;!&ndash;分类&ndash;&gt;-->
    <!--<vcol v-if='!col_hide' :col_loading_num='col_loading_num' :col_id="col_id"></vcol>-->
    <!--<vcol v-else-if='col_hide' :col_loading_num='col_loading_num' style="display:block; padding-top:0px;"></vcol>-->
    <!--</slot>-->
    <!--<div class="nav fr">-->
    <!--<a href="javascript:void(0)" v-for="(sub,index) in loadSubTitle" v-text="sub.title" @click="toSub(index)" :class="{on:titleOn[index]}"></a>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
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
          window.location.href = '../shoppingCart/shoppingCart.html'
        } else {
          this.$alert('请您先登录~', '系统提示', {
            confirmButtonText: '确定'
          });
        }
      },
      goToAdvSearch: function () {
        window.location.href = '../searchHigh/searchHigh.html'
      },
      goToSearchResult() {
        window.location.href = '../searchResult/searchResult.html?searchText=' + this.searchText + "&category=" + this.category + "#";
      },
    }
  }
</script>
