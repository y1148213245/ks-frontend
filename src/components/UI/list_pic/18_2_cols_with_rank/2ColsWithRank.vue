// 两列图书列表组件
<template>
  <div class="ui_list_pic_18_2_cols_with_rank ui_list_pic_18_2_cols_with_rank_skin">
    <div class="main_box">

      <div class="breadcrumbs_wrapper">
        <div class="breadcrumbs">
          <a href="./index.html" class="index">{{getStaticText('homePage') ? getStaticText('homePage') : '首页'}}</a>>>
          <a href="./ebook.html" class="ebook">{{getStaticText('ebay') ? getStaticText('ebay') : '电子书城'}}</a>>>
          <span class="current">{{getStaticText('moreBookList') ? getStaticText('moreBookList') : '更多图书列表'}}</span>
        </div>
      </div>

      <div class="list_wrapper">
        <dl class="content" v-for="(getEb,index) in resultList">
          <dt class="img_wrapper">
            <img onload="DrawImage(this,143,193)" :src="getEb.pub_picBig" :alt="getStaticText('noPic') ? getStaticText('noPic') : '暂无图片'" @click="toBookDetail(getEb.id)"/>
          </dt>
          <dd class="attr_wrapper">
            <p class="title_wrapper">
              <a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="title" v-text="getEb.pub_resource_name"></a>
            </p>
            <p class="_star">
              <el-rate v-model="getEb.pub_star_num" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
            </p>
            <p class="author">{{getStaticText('author') ? getStaticText('author') : '作者'}}：<span v-text="getEb.BOOK_SYS_AUTHORS || (getStaticText('noAuthor') ? getStaticText('noAuthor') : '暂无作者')"></span></p>
            <p class="synopsis"><span v-text="getEb.BOOK_SYNOPSIS"></span></p>
            <p class="operate">
              <a href="http://www.jiathis.com/share" style="border: 1px solid #d2d2d2"
                 class="_share jiathis jiathis_txt jtico jtico_jiathis share" target="_blank">{{getStaticText('share') ? getStaticText('share') : '分享'}}</a>
              <a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="_buy">{{getStaticText('buy') ? getStaticText('buy') : '购买'}}</a>
              <a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="_view">{{getStaticText('check') ? getStaticText('check') : '查看'}}</a>
            </p>
            <span class="index" v-text="index+1"></span>
          </dd>
        </dl>
      </div>
    </div>
    <div class="page_wrapper">
      <ui_pagination :pageMessage='resultPage' :excuteFunction='searchPage'></ui_pagination>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import URL from 'url';
import { Post } from '@common';
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'ui_list_pic_18_2_cols_with_rank',
  reused: true,
  props: {
    namespace: String,
    colId: Number
  },
  data: function () {
    return {
      CONFIG: null,
      searchParams: {},
      resultPage: {},
      resultList: []
    };
  },
  mounted: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace]._2colsWithSort;
    this.initSearchParam();
  },
  methods: {
    initSearchParam: function () {
      let params = URL.parse(document.URL, true);
      let categoryNum = params.query.cascadeId ? params.query.cascadeId.replace(/~/g, '_') : '';
      let colId = this.colId || '';
      let condition = '[{pub_resource_type:"BOOK"},{pub_status:"1"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"}';
      // 有按分类查的时候才传 BOOK_BOOK_CASCADID 不然数据会有问题
      condition += categoryNum ? ',{BOOK_BOOK_CASCADID:"' + categoryNum + '",op:"lk"}' : '';
      condition += colId ? ',{pub_col_id:"' + colId + '"}' : '';
      condition += ']';

      this.searchParams.conditions = condition;
      this.searchParams.orderBy = 'pub_a_order asc pub_lastmodified desc id asc';
      this.searchParams.searchText = params.query.searchText || '';
      this.searchParams.groupBy = 'pub_resource_id';

      this.searchPage({});
    },
    searchPage: function ({ pageNo, pageSize }) {
      this.searchParams.pageNo = pageNo || '1';
      this.searchParams.pageSize = pageSize || '15';
      Post(CONFIG.BASE_URL+this.CONFIG.queryBookList.url, this.searchParams).then(rep => {
        if (rep.data && rep.data.success) {
          this.resultPage = rep.data;
          this.resultList = rep.data.result;
        }
      });
    },
    parseUrlAndParamsToStr: function (url, params) {
      let urlInfo = URL.parse(url, true);
      urlInfo.query = params;
      return URL.format(urlInfo);
    },
    toBookDetail: function (pubId) {
      window.location.href = this.parseUrlAndParamsToStr(this.CONFIG.toBookDetailHref,{ pubId: pubId });
    },
    getStaticText(text) {
      if(this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
        return this.CONFIG.staticText[text]
      }else {
        return false
      }
    },

  }
}
</script>
<style>
/* start 结构样式 */

.ui_list_pic_18_2_cols_with_rank .main_box {
  padding-left: 205px;
  margin: 0 auto 0 20px;
  float: left;
  width: 950px;
  overflow: hidden;
}

.ui_list_pic_18_2_cols_with_rank .main_box .breadcrumbs_wrapper {
}

.ui_list_pic_18_2_cols_with_rank .main_box .breadcrumbs_wrapper .breadcrumbs {
  line-height: 35px;
  padding-left: 10px;
}

.ui_list_pic_18_2_cols_with_rank .main_box .list_wrapper {
  padding: 30px 40px 0;
}

.ui_list_pic_18_2_cols_with_rank .main_box .list_wrapper .content {
  width: 386px;
  position: relative;
  margin: 0 40px 40px 0;
  float: left;
}

.ui_list_pic_18_2_cols_with_rank .main_box .list_wrapper .content .img_wrapper {
  float: left;
  position: relative;
  display: block !important;
  width: 143px !important;
  height: 193px !important;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 193px !important;
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .img_wrapper
  img {
  height: 193px;
  width: 130px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  margin: 0 !important;
  padding: 0 !important;
  transform: translate(-50%, -50%);
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .attr_wrapper {
  padding-left: 163px;
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .title_wrapper
  .title {
  display: inline-block;
  width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  ._star {
  margin-bottom: 10px;
  margin-top: 2px;
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  ._star
  .el-rate {
  height: 20px;
  line-height: 1;
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  ._star
  .el-rate
  .el-rate__item {
  vertical-align: middle;
  font-size: 0;
  vertical-align: middle;
  position: relative;
  display: inline-block;
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  ._star
  .el-rate
  .el-rate__item
  .el-rate__icon {
  margin-right: 6px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  position: relative;
  display: inline-block;
  font-family: element-icons, serif !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .author {
  margin-bottom: 10px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .synopsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  /* width: 300px; */
  height: 56px;
  word-break: break-all;
  line-height: 20px;
  margin-bottom: 25px;
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .operate {
  line-height: 28px;
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .operate
  ._share {
  display: inline-block;
  height: 28px;
  width: 38px;
  text-indent: -9999px;
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .operate
  ._buy {
  display: inline-block;
  width: 52px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .operate
  ._view {
  display: inline-block;
  width: 52px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.ui_list_pic_18_2_cols_with_rank
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .index {
  display: inline-block;
  height: 30px;
  width: 30px;
  line-height: 30px;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  top: -12px;
  left: -13px;
}

.ui_list_pic_18_2_cols_with_rank .page_wrapper {
  clear: both;
  line-height: 40px;
  padding: 40px 0 60px;
  text-align: center;
}

/* end 结构样式 */
/************************************************************************************************************************************************/
/* start 皮肤样式 */

.ui_list_pic_18_2_cols_with_rank_skin .main_box {
  background: #fff;
}

.ui_list_pic_18_2_cols_with_rank_skin .breadcrumbs_wrapper {
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .breadcrumbs_wrapper
  .breadcrumbs {
  border-bottom: 2px solid #da0b2d;
  font-size: 14px;
  color: #9b9b9b;
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .breadcrumbs_wrapper
  .breadcrumbs
  .index {
  color: #9b9b9b;
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .breadcrumbs_wrapper
  .breadcrumbs
  .ebook {
  color: #9b9b9b;
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .breadcrumbs_wrapper
  .breadcrumbs
  .current {
  color: #626262;
}

.ui_list_pic_18_2_cols_with_rank_skin .main_box .list_wrapper .content {
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .img_wrapper {
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .img_wrapper
  img {
  cursor: pointer;
  box-shadow: 0 0 15px #e8e8e8;
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .title_wrapper {
  font-size: 16px;
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .title_wrapper
  .title {
  color: #494949;
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  ._star
  .el-rate
  .el-rate__item {
  cursor: auto;
  font-size: 0;
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  ._star
  .el-rate
  .el-rate__item
  .el-rate__icon {
  font-size: 12px;
  color: rgb(247, 186, 42);
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .author {
  color: #727272;
  font-size: 14px;
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .synopsis {
  color: #727272;
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .operate {
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .operate
  ._share {
  border-top: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
  background: url(./data/bg_005.png) 1px 90px;
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .operate
  ._share:hover {
  background-position: -35px -20px;
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .operate
  ._buy {
  background: #c50000;
  font-size: 12px;
  color: #fff;
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .operate
  ._view {
  background: #515151;
  font-size: 12px;
  color: #fff;
}

.ui_list_pic_18_2_cols_with_rank_skin
  .main_box
  .list_wrapper
  .content
  .attr_wrapper
  .index {
  color: #fff;
  background: url(./assets/img/bg_10.png) -3px -407px;
}

.ui_list_pic_18_2_cols_with_rank_skin .page_wrapper {
  font-size: 14px;
}

/* end 皮肤样式 */
</style>
