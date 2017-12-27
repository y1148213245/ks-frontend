<template>
  <div id="wl_header" class="header">
    <div class="header_top1 f12">
      <div class="wrap">
        <div class="fl">您好,欢迎来到数字图书馆!</div>
        <div class="fr">
          <!--<span class="login_success" v-show="member && member.loginName">-->
          <!--欢迎回来!-->
          <!--<a href="#" class="login_img color_c50 pr18 pl18"-->
          <!--v-text="member && member.loginName">北京大学</a><a href="#" class="quit pr25" @click="logout">[退出]</a>-->
          <!--</span>-->
          <!--<span class="login_no" v-show="!(member && member.loginName)">-->
          <!--<a href="javascript:void(0)" class="quit pr25" @click="toLogin">[登录]</a>-->
          <!--</span>-->
          |
          <span class="about_site pr25 pl25"><a href="#">相关网站</a></span>
          |
          <span class="pl20 pr05"> <a href="#" class="download_app pl15">下载APP</a></span>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="header_top2 cl">-->
  <!--<div class="wrap">-->
  <!--<div class="logo fl"><a href="../../pages/index.html"><img src="../../assets/img/logo.jpg"/></a></div>-->
  <!--<div class="search fr" style="margin-right: 150px;">-->
  <!--<div class="fr myshop f14">-->
  <!--<a class="color_525 cartIcon" @click="goToCart()">-->
  <!--我的购物车-->
  <!--<span v-if="member&&member.loginName" v-text="cartTotalAmount"></span>-->
  <!--<span v-else>0</span>-->
  <!--</a>-->
  <!--</div>-->
  <!--<div name="btnAdvanceSearch" class="highsearh f14 color_3b3 pr20" @click="toSearchHigh">高级检索</div>-->
  <!--<div class="search_box">-->
  <!--<input type="button" value="搜索" class="btn_search" name="search" @click="toSearchResult">-->
  <!--<input type="text" id="searchText" value="" placeholder="输入关键字" v-model="searchText"-->
  <!--@keyup.13="toSearchResult($event)" style="float:left">-->
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
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->

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
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  export default{
    name: 'components_common_header',
    reused: true
  }
</script>
