<template>
  <header  class="sticky-header header">
    <div  class="container clearfix header-wrap">
      <div class="header-top clearfix">
        <div  class="col-md-5 nopadding logo">
          <a href="index.html" class="retina-logo"><img src="../../assets/img/founder_Logo@2x.png" alt="智享 Logo"></a>
        </div>
        <div class="col-md-7 nopadding">
          <!--<div class="top-menu"><a href="javascript:void(0)">登 录</a>
            <a class="top-cart" href="./pages/shoppingcart.html"><i class="icon-shopping-cart"></i> <span>0</span></a>
            <a class="top-menu-a2" href="#">English</a>
          </div>-->
          <components_common_user namespace="common"></components_common_user>
          <!-- 搜索框组件 -->
          <work_search_01_category_search namespace="common"></work_search_01_category_search>
          <!-- END 搜索框组件 -->
        </div>
      </div>
      <!-- 导航组件 -->
      <ui_navigation_01_header_navigation namespace="common"></ui_navigation_01_header_navigation>
      <!-- END 导航组件 -->
    </div>
  </header>
</template>

<script>
import $ from 'jquery'
$(document).keydown(function(event) {
  if (event.keyCode == 13) {
    $("form").each(function() {
      event.preventDefault();
    });
  }
});
$("#searchInput").keydown(function(e) {
  if (e.keyCode == 13) {
    $("#searchButton").click();
    event.preventDefault();
  }
});
export default {
  name: "header_component",
  reused: true
};
</script>
<style>
/***************************************头部logo部分************************/
.retina-logo img {
  max-width: 364px;
}
.logo {
  margin-top: 20px;
}
/***************************************头部登录部分************************/
.header {
  height: 200px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.header-top {
  border-bottom: 2px solid #ae0f29;
  height: 96px;
}
.top-menu {
  text-align: right;
  color: #7f7f7f;
  font-size: 12px;
  margin-top: 12px;
}
.top-menu a {
  color: #7f7f7f;
  margin: 0px 6px;
}
.top-menu a:hover {
  color: #ae0f29;
}
.top-menu a:last-child {
  margin-right: 0px;
  margin-left: 12px;
}
.top-cart {
  margin-right: 16px;
  position: relative;
  font-size: 13px;
}
.top-cart > span {
  display: block;
  position: absolute;
  top: -7px;
  left: auto;
  right: -16px;
  font-size: 10px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  background-color: #ae0f29;
  border-radius: 50%;
}
/***************************************头部搜索部分************************/
.search-area {
  margin-top: 12px;
  float: right;
}
.input-group {
  line-height: 20px;
}
.search-area form .input-group-addon {
  border: none;
  padding: 6px 8px;
  background: #f6f6f6;
}
.search-area form .search-field-area {
  min-width: 200px;
  border-radius: 0px;
}
.search-area form .search-categories {
  border-radius: 0px;
  background: #f6f6f6;
  border-right: 1px solid #e2e2e2;
}
.search-area form select,
.search-area form button,
.search-area form input {
  background: transparent;
  border: none;
}
.search-area form button {
  position: relative;
  left: -4px;
}
.search-area form button:hover {
  color: #ae0f29;
}
.search-area form select {
  width: auto;
  height: 27px;
  padding: 0;
}
.search-area form .search-field {
  width: 90%;
  border-radius: 0;
}
.search-area .search-area-select {
  line-height: 27px;
}

.nopadding {
  padding: 0 !important;
}
a img {
  border: none;
}
#top-cart {
  /* margin-right: 16px; */
  position: relative;
  font-size: 13px;
}
</style>
