<template>
  <header  class="sticky-header header">
    <div  class="container clearfix header-wrap">
      <div class="header-top clearfix">
        <div  class="col-md-5 nopadding logo">
          <a href="index.html" class="retina-logo"><img src="../../assets/img/founder_Logo@2x.png" alt="智享 Logo"></a>
        </div>
        <div class="col-md-7 nopadding">
          <div class="top-menu"><a href="../pages/shoppingcart.html">登 录</a>
            <a href="javascript:void(0)" class="top-cart"><i class="icon-shopping-cart"></i> <span>0</span></a>
            <a class="top-menu-a2" href="#">English</a>
          </div>
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
	export default {
		name: 'header_component',
		reused: true
	}
</script>
<style>
  /***************************************头部logo部分************************/
  .retina-logo img{
    max-width: 364px;
  }
  .logo{
    margin-top: 20px;
  }
  /***************************************头部登录部分************************/
  .header{height: 200px;box-shadow: 0 0 5px rgba(0,0,0,0.2);}
  .header-top{border-bottom: 2px solid #AE0F29;height: 96px}
  .top-menu{text-align: right;color: #7F7F7F;font-size: 12px;margin-top: 12px}
  .top-menu a{color:#7F7F7F;margin: 0px 6px}
  .top-menu a:hover{color: #AE0F29;}
  .top-menu a:last-child{margin-right: 0px; margin-left:12px;}
  .top-cart{margin-right:16px;position: relative;font-size: 13px}
  .top-cart  > span {
    display: block;
    position: absolute;
    top: -7px;
    left: auto;
    right: -16px;
    font-size: 10px;
    color: #FFF;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    background-color: #AE0F29;
    border-radius: 50%;
  }
/***************************************头部搜索部分************************/
  .search-area{margin-top: 12px;float: right}
  .input-group{line-height: 20px;}
  .search-area form .input-group-addon {
    border: none;
    padding:6px 8px;
    background: #f6f6f6; }
  .search-area form .search-field-area{min-width: 200px;border-radius: 0px;}
  .search-area form .search-categories{
    border-radius: 0px;
    background: #f6f6f6;
    border-right: 1px solid #e2e2e2; }
  .search-area form select, .search-area form button, .search-area form input {
    background: transparent;
    border: none; }
  .search-area form button{position: relative;left: -4px}
  .search-area form button:hover{color:#AE0F29 }
  .search-area form select {
    width: auto;
    height: 27px;
    padding: 0; }
  .search-area form .search-field {
    width: 90%;
    border-radius: 0;}
  .search-area .search-area-select {
    line-height: 27px; }
/*********************头部导航部分*************/
  .primary-menu-navigation div.col-md-4{margin: 4px 0px 8px;line-height: 16px}
  .primary-menu-navigation div label{font-size: 18px;font-weight: bold;margin-right: 8px;letter-spacing: 3px;}
  .primary-menu-navigation div ul{display: inline-block;margin: 0px}
  .primary-menu-navigation div ul>li{list-style: none;display: inline-block;}
  .primary-menu-navigation div ul>li.sub-menu{position: relative}
  .primary-menu-navigation div ul>li a{color: #7f7f7f;padding: 0px 10px 0px 8px;border-right: 1px solid #ACACAC;}
  .primary-menu-navigation div ul>li a:hover{color:#AE0F29 }
  .primary-menu-navigation div ul>li.menu-active a{color:#AE0F29;cursor: default}
  .primary-menu-navigation div ul>li:last-child a{border-right: 0px}
  .primary-menu-navigation div.nav-special label a{padding: 0px 10px 0px 8px;border-left: 1px solid #ACACAC;}
  .primary-menu-navigation div.nav-special label a:first-child{border-left:none;padding-left: 0px}
  .primary-menu-navigation ul ul{
    display: none;
    position: absolute;
    width: 120px;
    background-color: #FFF;
    box-shadow: 0px 13px 42px 11px rgba(0, 0, 0, 0.05);
    border-top: 0px solid #AE0F29;
    height: auto;
    z-index: 199;
    top:20px;
    left: 0;
    margin: 0;
  }
  .primary-menu-navigation ul ul li, .side-catergory ul>li{
    list-style: none;
    float: none;
    margin: 0;
    display: block;
    border-top: 1px solid #F8F8F8;
  }
  .primary-menu-navigation ul ul li:first-child { border-top: 0; }
  .primary-menu-navigation ul ul li > a,.side-catergory ul>li a {
    font-size: 13px;
    font-weight: normal;
    color: #666;
    display: block;
    padding-top: 8px;
    padding-bottom: 8px;
    border: 0;
    letter-spacing: 0;
    font-family: 'Lato', sans-serif;
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }
  .primary-menu-navigation ul ul li > a i { vertical-align: middle; }
  .primary-menu-navigation ul ul li:hover > a{
    background-color: #F9F9F9;
    padding-left: 18px;
    color: #AE0F29;
  }
</style>