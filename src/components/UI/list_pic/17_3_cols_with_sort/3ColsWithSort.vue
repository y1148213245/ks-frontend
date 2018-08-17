// 三列图书列表带排序组件
<template>
  <div class="ui_list_pic_17_3_cols_with_sort ui_list_pic_17_3_cols_with_sort_skin">
    <div class="list_wrapper">

      <div class="title_wrapper">
        <div class="title">
          <a href="../pages/index.html" class="index">首页</a>>>
          <a href="../pages/ebook.html" class="ebook">电子书城</a>>>
          <span class="current">更多图书列表</span>
        </div>
      </div>

      <div class="book_list_sort_wrapper">
        <span class="sort_default" :class="{on:orderType==0}" @click="setOrderParam('pub_a_order asc pub_lastmodified desc id asc',0,false)">默认排序</span>
        <span class="sort_other" :class="{on:orderType==1}" @click="setOrderParam('BOOK_PUBDATE',1,true)">发布时间
          <a href="javascript: void(0)" class="order_wrapper bookrank_asc"><i class="el-icon-caret-top" @click="setOrderParam('BOOK_PUBDATE asc',1,false)"></i></a>
          <a href="javascript: void(0)" class="order_wrapper bookrank_desc"><i class="el-icon-caret-bottom" @click="setOrderParam('BOOK_PUBDATE desc',1,false)"></i></a>
        </span>
        <span class="sort_other" :class="{on:orderType==2}" @click="setOrderParam('pub_sales_num',2,true)">销量
          <a href="javascript: void(0)" class="order_wrapper bookrank_asc"><i class="el-icon-caret-top" @click="setOrderParam('pub_sales_num asc',2,false)"></i></a>
          <a href="javascript: void(0)" class="order_wrapper bookrank_desc"><i class="el-icon-caret-bottom" @click="setOrderParam('pub_sales_num desc',2,false)"></i></a>
        </span>
        <span class="sort_other" :class="{on:orderType==3}" @click="setOrderParam('pub_comment_num',3,true)">评论
          <a href="javascript: void(0)" class="order_wrapper bookrank_asc"><i class="el-icon-caret-top" @click="setOrderParam('pub_comment_num asc',3,false)"></i></a>
          <a href="javascript: void(0)" class="order_wrapper bookrank_desc"><i class="el-icon-caret-bottom" @click="setOrderParam('pub_comment_num desc',3,false)"></i></a>
        </span>
      </div>

      <div class="book_list_content_wrapper">
        <dl class="book_content_wrapper" v-for="(getEb,index) in resultList">
          <dt class="book_img_wrapper">
            <img class="book_img" onload="DrawImage(this,113,152)" :src="getEb.pub_picBig" alt="暂无图片" @click="toBookDetail(getEb.id)"/>
          </dt>
          <dd class="book_attr_wrapper">
            <p class="book_title">
              <a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="book_list_text" v-text="getEb.pub_resource_name"></a>
            </p>
            <p class="book_star">
              <el-rate v-model="getEb.pub_star_num" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
            </p>
            <p class="book_author">作者：{{getEb.BOOK_SYS_AUTHORS}}</p>
            <p class="book_synopsis" v-text="getEb.BOOK_SYNOPSIS"></p>
            <section v-if="CONFIG && CONFIG.showPrice"> 
              <p class="ui_list_pic_17_saleprice">原价：{{getEb.prod_sale_price | formatPriceNew}}</p>
              <p class="ui_list_pic_17_memberprice">现价：{{getEb.prod_member_price | formatPriceNew}}</p>
            </section>
            <p class="book_operate">
              <a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="book_buy">购买</a>
              <a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="book_view">查看</a>
            </p>
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
  import {Post} from '@common';
  import PROJECT_CONFIG from "projectConfig";

  export default {
    name: 'ui_list_pic_17_3_cols_with_sort',
    reused: true,
    props: {
      namespace: String,
      colId: Number
    },
    data: function () {
      return {
        CONFIG: null,
        orderType: 0,
        orderTime: true,
        orderSale: true,
        orderComment: true,
        searchParams: {},
        resultPage: {},
        resultList: []
      };
    },
    mounted: function () {
      this.CONFIG = PROJECT_CONFIG[this.namespace]._3colsWithSort;
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
        // condition += ',{BOOK_BOOK_CASCADID:"' + categoryNum + '",op:"lk"}';
        condition += colId ? ',{pub_col_id:"' + colId + '"}' : '';
        condition += ']';

        this.searchParams.conditions = condition;
        this.searchParams.orderBy = 'pub_a_order asc pub_lastmodified desc id asc';
        this.searchParams.searchText = params.query.searchText || '';
        this.searchParams.groupBy = 'pub_resource_id';

        this.searchPage({});
      },
      setOrderParam: function (order, index, toggle) {
        switch (index) {
          case 0:
            this.searchParams.orderBy = order;
            this.orderType = index;
            break;
          case 1:
            if (toggle) {
              if (this.orderType !== index) {
                this.orderTime = true;
              } else {
                this.orderTime = !this.orderTime;
              }
              order += this.orderTime ? ' asc' : ' desc';
            } else {
              this.searchParams.orderBy = order;
            }
            this.searchParams.orderBy = order;
            this.orderType = index;
            break;
          case 2:
            if (toggle) {
              if (this.orderType !== index) {
                this.orderSale = true;
              } else {
                this.orderSale = !this.orderSale;
              }
              order += this.orderSale ? ' asc' : ' desc';
            } else {
              this.searchParams.orderBy = order;
            }
            this.searchParams.orderBy = order;
            this.orderType = index;
            break;
          case 3:
            if (toggle) {
              if (this.orderType !== index) {
                this.orderComment = true;
              } else {
                this.orderComment = !this.orderComment;
              }
              order += this.orderComment ? ' desc' : ' asc';
            } else {
              this.searchParams.orderBy = order;
            }
            this.searchParams.orderBy = order;
            this.orderType = index;
            break;
          default:
            this.searchParams.orderBy = 'pub_a_order asc pub_lastmodified desc id asc';
            this.orderType = 0;
        }
        this.searchPage({});
      },
      searchPage: function ({pageNo, pageSize}) {
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
        urlInfo.search = '';
        return URL.format(urlInfo);
      },
      toBookDetail: function (pubId) {
        window.location.href = this.parseUrlAndParamsToStr('../pages/bookdetail.html', {pubId: pubId});
      }
    }
  }
</script>
<style>
  /* start 结构样式 */

  .ui_list_pic_17_3_cols_with_sort .list_wrapper {
    padding-left: 225px;
    width: 950px;
    margin: 0 auto 0 20px;
    overflow: hidden;
    float: left;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .title_wrapper .title {
    line-height: 35px;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_sort_wrapper {
    line-height: 35px;
    border-top: 0;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_sort_wrapper .sort_default {
    padding: 8px 38px 8px 28px;
    position: relative;
    border-right: 1px solid #dcdcdc;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_sort_wrapper .sort_other {
    padding: 8px 38px 8px 28px;
    position: relative;
  }

/*   .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_sort_wrapper .sort_other .order_wrapper .asc {
    background: url(./assets/img/bg_10.png) no-repeat -48px -412px;
    vertical-align: middle;
    display: inline-block;
    text-indent: -99999px;
    width: 10px;
    height: 8px;
    position: absolute;
    top: 10px;
    right: 15px;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_sort_wrapper .sort_other .order_wrapper .desc {
    background: url(./assets/img/bg_10.png) no-repeat -48px -428px;
    vertical-align: middle;
    display: inline-block;
    text-indent: -99999px;
    width: 10px;
    height: 8px;
    position: absolute;
    top: 18px;
    right: 15px;
  }
 */
  .book_list_sort_wrapper .order_wrapper  .el-icon-caret-top {
    position: absolute;
    top: 7px;
    right: 12px;
    width: 12px;
    height: 12px;
    z-index: 999;
  }

  .book_list_sort_wrapper .order_wrapper  .el-icon-caret-bottom {
    position: absolute;
    top: 16px;
    right: 12px;
    width: 12px;
    height: 12px;
    z-index: 999;
  }
 
  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper {
    padding-top: 30px;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper {
    height: 152px;
    width: 305px;
    position: relative;
    margin: 0 10px 40px 0;
    float: left;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_img_wrapper {
    float: left;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_img_wrapper .book_img {
    text-align: center;
    float: left;
    line-height: 150px;
    cursor: pointer;
    height: 152px;
    width: 103px;
    box-shadow: 0 0 15px #e8e8e8
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper {
    padding-left: 130px;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_title .book_list_text {
    display: inline-block;
    width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_star {
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_star .el-rate {
    height: 20px;
    line-height: 1;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_star .el-rate .el-rate__item {
    height: 20px;
    line-height: 1;
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_star .el-rate .el-rate__item .el-rate__icon {
    speak: none;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    margin-right: 6px;
    transition: .3s;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_author {
    display: inline-block;
    width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 2px;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_synopsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    /* width: 300px; */
    height: 37px;
    word-break: break-all;
    margin-bottom: 20px;
    line-height: 20px;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_operate {
    line-height: 28px;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_operate .book_buy {
    display: inline-block;
    width: 52px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_operate .book_view {
    display: inline-block;
    width: 52px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }

  .ui_list_pic_17_3_cols_with_sort .page_wrapper {
    clear: both;
    line-height: 40px;
    padding: 40px 0 60px;
    text-align: center;
  }

  /* end 结构样式 */
  /************************************************************************************************************************************************/
  /* start 皮肤样式 */

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper {
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .title_wrapper .title {
    font-size: 14px;
    color: #9b9b9b;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .title_wrapper .title .index {
    color: #9b9b9b;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .title_wrapper .title .ebook {
    color: #9b9b9b;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .title_wrapper .title .current {
    color: #626262;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_sort_wrapper {
    color: #515151;
    font-size: 14px;
    background: #f6f6f6;
    border: 1px solid #dcdcdc;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_sort_wrapper .on {
    background: #ca0000;
    color: #fff;
    border: 1px solid #ca0000;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_sort_wrapper .sort_default {
    cursor: pointer;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_sort_wrapper .sort_other {
    border-right: 1px solid #dcdcdc;
    cursor: pointer;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_sort_wrapper .sort_other .order_wrapper .asc {
    font-style: normal;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_sort_wrapper .sort_other .order_wrapper .desc {
    font-style: normal;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper {

  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper {

  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_img_wrapper {
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_img_wrapper .book_img {
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper {
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_title {
    font-size: 16px;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_title .book_list_text {
    color: #494949
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_star {
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_star .el-rate {
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_star .el-rate .el-rate__item {
    font-size: 0;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_star .el-rate .el-rate__item .el-rate__icon {
    cursor: auto;
    font-size: 12px;
    color: rgb(247, 186, 42);
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_author {
    color: #727272;
    font-size: 14px;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_synopsis {
    color: #727272;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_operate {
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_operate .book_buy {
    background: #c50000;
    color: #fff;
    font-size: 12px;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_operate .book_view {
    background: #515151;
    color: #fff;
    font-size: 12px;
  }

  .ui_list_pic_17_3_cols_with_sort_skin .page_wrapper {
    font-size: 14px;
  }

  /* end 皮肤样式 */
</style>
