// 三列图书列表带排序组件
<template>
  <div class="ui_list_pic_17_3_cols_with_sort ui_list_pic_17_3_cols_with_sort_skin">
    <div class="list_wrapper main_booklist fl" style="padding-left:225px;margin-left:20px">

      <div class="title_wrapper">
        <div class="title  f14 line-h35 color_9b9">
          <a href="../pages/index.html" class="index color_9b9 ">首页</a>>>
          <a href="../pages/ebook.html" class="ebook color_9b9 ">电子书城</a>>>
          <span class="current color_626">更多图书列表</span>
        </div>
      </div>

      <div class="book_list_sort_wrapper main_booklist_sort line-h35 f14 color_515 ">
        <span class="sort_default booklist_sort01" :class="{on:orderType==0}" @click="setOrderParam('pub_a_order asc pub_lastmodified desc id asc',0,false)">默认排序</span>
        <span class="sort_other booklist_sort02" :class="{on:orderType==1}" @click="setOrderParam('BOOK_PUBDATE',1,true)">发布时间
          <a href="#" class="order_wrapper"><i class="asc shang" @click="setOrderParam('BOOK_PUBDATE asc',1,false)">正序</i></a>
          <a href="#" class="order_wrapper"><i class="desc xia" @click="setOrderParam('BOOK_PUBDATE desc',1,false)">倒叙</i></a>
        </span>
        <span class="sort_other booklist_sort03" :class="{on:orderType==2}" @click="setOrderParam('pub_sales_num',2,true)">销量
          <a href="#" class="order_wrapper"><i class="asc shang" @click="setOrderParam('pub_sales_num asc',2,false)">正序</i></a>
          <a href="#" class="order_wrapper"><i class="desc xia" @click="setOrderParam('pub_sales_num desc',2,false)">倒叙</i></a>
        </span>
        <span class="sort_other booklist_sort04" :class="{on:orderType==3}" @click="setOrderParam('pub_comment_num',3,true)">评论
          <a href="#" class="order_wrapper"><i class="asc shang" @click="setOrderParam('pub_comment_num asc',3,false)">正序</i></a>
          <a href="#" class="order_wrapper"><i class="desc xia" @click="setOrderParam('pub_comment_num desc',3,false)">倒叙</i></a>
        </span>
      </div>

      <div class="book_list_content_wrapper booklist_con pt30">
        <dl class="book_content_wrapper booklist_con_list fl" v-for="(getEb,index) in resultList" style="height:152px">
          <dt class="book_img_wrapper fl">
            <img class="book_img" onload="DrawImage(this,113,152)" :src="getEb.pub_picBig" alt="暂无图片" style="text-align: center;float: left;line-height: 150px;cursor: pointer;"
                 @click="toBookDetail(getEb.id)"/>
          </dt>
          <dd class="book_attr_wrapper">
            <p class="book_title title f16 "><a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="color_494 book_list_text" v-text="getEb.pub_resource_name"></a></p>
            <p class="book_star xing mb02 mt02 starStyle">
              <el-rate v-model="getEb.pub_star_num" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
            </p>
            <p class="book_author author f14 color_727 mb02 book_list_text">作者：{{getEb.BOOK_SYS_AUTHORS}}</p>
            <p class="book_synopsis zhaiyao color_727 line-h20 mb20 zhaiyao_list_text" v-text="getEb.BOOK_SYNOPSIS"></p>

            <p class="book_operate other">
              <a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="book_buy goumai f12  color_fff">购买</a>
              <a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="book_view chakan f12 color_fff">查看</a>
            </p>
          </dd>
        </dl>
      </div>
    </div>
    <div class="page_wrapper f14">
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
        let condition = '[{pub_resource_type:"BOOK"},{pub_status:"1"},{pub_site_id:"' + SITE_CONFIG.siteId + '"}';
        condition += ',{BOOK_BOOK_CASCADID:"' + categoryNum + '",op:"lk"}';
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
              order += this.orderComment ? ' asc' : ' desc';
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
        Post(this.CONFIG.queryBookList.url, this.searchParams).then(rep => {
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

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_sort_wrapper .sort_other .order_wrapper .asc {
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

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_author {

  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_synopsis {

  }

  .ui_list_pic_17_3_cols_with_sort .list_wrapper .book_list_content_wrapper .book_content_wrapper .book_attr_wrapper .book_operate {

  }

  .page_wrapper {
    clear: both;
    line-height: 40px;
    padding: 40px 0 60px;
    text-align: center;
  }

  /* end 结构样式 */
  /* start 皮肤样式 */
  /* end 皮肤样式 */
</style>
