// 三列图书列表带排序组件
<template>
  <div>

    <div class="main_booklist fl" style="padding-left:225px;margin-left:20px">

      <div id="current_position">
        <div class="booklist_nav  f14 line-h35 color_9b9">
          <a href="./index.html" class="color_9b9 ">首页</a>>>
          <a href="./ebook.html" class="color_9b9 ">电子书城</a>>>
          <span class="color_626">更多图书列表</span>
        </div>
      </div>

      <div id="wl_current_rank" class="main_booklist_sort line-h35 f14 color_515 ">
        <span class="booklist_sort01" :class="{on:orderType==0}" @click="setOrderParam('pub_a_order asc pub_lastmodified desc id asc',0,false)">默认排序</span>
        <span class="booklist_sort02" :class="{on:orderType==1}" @click="setOrderParam('BOOK_PUBDATE',1,true)">发布时间
          <a href="#"><i class="shang" @click="setOrderParam('BOOK_PUBDATE asc',1,false)">正序</i></a>
          <a href="#"><i class="xia" @click="setOrderParam('BOOK_PUBDATE desc',1,false)">倒叙</i></a>
        </span>
        <span class="booklist_sort03" :class="{on:orderType==2}" @click="setOrderParam('pub_sales_num',2,true)">销量
          <a href="#"><i class="shang" @click="setOrderParam('pub_sales_num asc',2,false)">正序</i></a>
          <a href="#"><i class="xia" @click="setOrderParam('pub_sales_num desc',2,false)">倒叙</i></a>
        </span>
        <span class="booklist_sort04" :class="{on:orderType==3}" @click="setOrderParam('pub_comment_num',3,true)">评论
          <a href="#"><i class="shang" @click="setOrderParam('pub_comment_num asc',3,false)">正序</i></a>
          <a href="#"><i class="xia" @click="setOrderParam('pub_comment_num desc',3,false)">倒叙</i></a>
        </span>
      </div>

      <div class="booklist_con pt30">
        <dl class="booklist_con_list fl" v-for="(getEb,index) in resultList" style="height:152px">
          <dt class="fl">
            <img class="" onload="DrawImage(this,113,152)" :src="getEb.pub_picBig" alt="暂无图片" style="text-align: center;float: left;line-height: 150px;cursor: pointer;"
                 @click="toBookDetail(getEb.id)"/>
          </dt>
          <dd class="">
            <p class="title f16 "><a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="color_494 book_list_text" v-text="getEb.pub_resource_name"></a></p>
            <p class="xing mb02 mt02 starStyle">
              <el-rate v-model="getEb.pub_star_num" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
            </p>
            <p class="author f14 color_727 mb02 book_list_text">作者：{{getEb.BOOK_SYS_AUTHORS}}</p>
            <p class="zhaiyao color_727 line-h20 mb20 zhaiyao_list_text" v-text="getEb.BOOK_SYNOPSIS"></p>

            <p class="other">
              <a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="goumai f12  color_fff">购买</a>
              <a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="chakan f12 color_fff">查看</a>
            </p>
          </dd>
        </dl>
      </div>
    </div>
    <div class="page">
      <div class="pre_next f14">
        <ui_pagination :pageMessage='resultPage' :excuteFunction='searchPage'></ui_pagination>
      </div>
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
