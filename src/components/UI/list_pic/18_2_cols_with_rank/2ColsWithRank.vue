// 两列图书列表组件
<template>
  <div>
    <div class="main_rxb fl" style="padding-left:205px;margin-left:20px;">

      <div id="current_position">
        <div class="rxb_nav pl10 f14 line-h35 color_9b9">
          <a href="./index.html" class="color_9b9 ">首页</a>>>
          <a href="./ebook.html" class="color_9b9 ">电子书城</a>>>
          <span class="color_626">更多图书列表</span>
        </div>
      </div>

      <div class="rxb_con" style="padding:30px 40px 0 40px;">
        <dl class="rxb_list fl " v-for="(getEb,index) in resultList">
          <dt class="fl hot_list_imgBox">
            <img style="cursor: pointer;" class="hot_list_img zwPig" onload="DrawImage(this,143,193)" :src="getEb.pub_picBig" alt="暂无图片" @click="toBookDetail(getEb.id)"/>
          </dt>
          <dd class="">
            <p class="title f16 "><a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="color_494 book_list_text" v-text="getEb.pub_resource_name"></a></p>
            <p class="xing mb10 mt02 starStyle">

              <el-rate v-model="getEb.pub_star_num" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
            </p>
            <p class="author f14 color_727 mb10 hot_list_text">作者：<span v-text="getEb.BOOK_SYS_AUTHORS || '暂无作者'"></span></p>
            <p class="zhaiyao color_727 line-h20 mb25 zhaiyao_hot_text"><span v-text="getEb.BOOK_SYNOPSIS"></span></p>
            <p class="other">

              <a href="http://www.jiathis.com/share" style="border: 1px solid #d2d2d2"
                 class="jiathis jiathis_txt jtico jtico_jiathis share" target="_blank">分享</a>
              <a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="goumai f12 color_fff">购买</a>
              <a href="javascript:void(0)" @click="toBookDetail(getEb.id)" class="chakan f12 color_fff">查看</a>
            </p>
            <span class="rxb_jb color_fff" v-text="index+1"></span>
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
        return URL.format(urlInfo);
      },
      toBookDetail: function (pubId) {
        window.location.href = this.parseUrlAndParamsToStr('bookdetail.html', {pubId: pubId});
      }
    }
  }
</script>
