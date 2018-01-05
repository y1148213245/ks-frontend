<!--  -->
<template>
 <div>
    <div v-if="projectConfig.isShowTotalCountTag" class="search_num f14">共<span v-text="totalCount"></span>件商品</div>
    
    <div class="search_jg_list cl">
      <div style="overflow: hidden;">
        <transition-group name="fade">
          <dl class="search_jg_list_con fl" v-for='entry in list' :key="entry.id">
            <dt class="fl">
              <a class="search_list_imgBox" href="javascript:void(0)" @click="toDetail(entry.id)">
                <img class="search_list_img" :src="entry.pub_picBig"  onload="DrawImage(this,186,271)" alt="暂无封面"/>
              </a>
            </dt>
            <dd>
              <p class="title f16">
                <a href="javascript:void(0)" @click="toDetail(entry.id)" v-text="entry.pub_resource_name" class="search_text" :title="entry.pub_resource_name"></a>
              </p>
              <p class="author f14 search_text">作者：<span v-text="entry.BOOK_SYS_AUTHORS" :title="entry.BOOK_SYS_AUTHORS"></span></p>
              <p class="banquan search_text" :title="entry.BOOK_PRESS_NAME">版权：{{entry.BOOK_PRESS_NAME}}</p>
              <p class="chuban search_text" :title="entry.BOOK_PUBDATE | fmtDate">出版：{{entry.BOOK_PUBDATE | fmtDate}}</p>
              <p class="price f16">￥<i v-text="parseFloat(entry.prod_member_price || 0).toFixed(2) "></i>
                <span>￥<span
                  v-text="parseFloat(entry.BOOK_EB_PRICE || 0).toFixed(2)"></span></span></p>
              <p class="xing">
                <span class="scope_star">
                  <el-rate v-model="entry.pub_star_num" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
                </span>
                <span v-text="entry.pub_comment_num || 0"></span>条评论
              </p>
              <p class="zhaiyao zhaiyao_text" v-text="entry.BOOK_SYNOPSIS || '暂无摘要'"
                  :title="entry.BOOK_SYNOPSIS"></p>
              <p class="disanfang">
                <a href="javascript:void(0)" @click="toDetail(entry.id)">第三方购买</a>
              </p>
              <p class="other"><!--<span class="sc shoucang">收藏</span>-->
                <a href="http://www.jiathis.com/share"
                    class="jiathis jiathis_txt jtico jtico_jiathis share share-box" target="_blank">分享</a>
                <a href="javascript:void(0)" @click="toDetail(entry.id)" class="goumai f12  color_fff">购买</a>
                <a href="javascript:void(0)" @click="toDetail(entry.id)" class="chakan f12 color_fff">查看</a>
              </p>
            </dd>
          </dl>
        </transition-group>
      </div>
      <div class="searh_pagingBox">
        <ui_pagination :pageMessage="{totalCount}" :excuteFunction="toPage"
                :page-sizes="pageSizes" :current-page="currentPage"></ui_pagination>
      </div>
    </div>
 </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Post } from "@common";

export default {
  name: 'work_search_04',
  reused: true,
  props: {
    namespace: String,
    isAutomaticLoad: {
      type: Boolean,
      default: true,
    }, //是否自动加载数据
  },
  data () {
    return {
      projectConfig: null,
      pageSizes: null,    /* 分页数组 */
      currentPage: 1,   /* 分页组件当前页 */
      totalCount: 0,    /* 总数 */
      list: null,
      locationQuery: null, /* 地址栏查询参数 */
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.initDate();
    this.$bus.$on(this.projectConfig.eventName_loadDate, this.getSearchResult);
  },

  mounted () {
    if (this.isAutomaticLoad) {
      this.getSearchResult({});
    }
  },

  methods: {
    initConfig () {
      let projectConfig = PROJECT_CONFIG[this.namespace].search.search_result_04;
      this.projectConfig = JSON.parse(JSON.stringify(projectConfig));

    },
    initDate () {
      this.pageSizes = this.projectConfig.pageSizes || [10, 20, 50, 100];
      this.locationQuery = URL.parse(document.URL, true).query;
    },
    toPage ({ pageNo, pageSize }) {
      this.getSearchResult({ pageNo, pageSize });
    },
    getSearchResult ({ pageNo, pageSize, conditions, orderBy, searchText, currentPage }) {
      let config = this.projectConfig;
      let param = config.param;

      this.currentPage = currentPage ? currentPage : this.currentPage;//改变分页组件当前页
      param.pageNo = pageNo ? pageNo : param.pageNo;
      param.pageSize = pageSize ? pageSize : param.pageSize;
      param.conditions = conditions ? conditions : param.conditions;
      param.orderBy = orderBy ? orderBy : param.orderBy;
      param.searchText = searchText ? searchText : (this.locationQuery && this.locationQuery.searchText || '');

      Post(config.url, param).then((req) => {
        let data = req.data.result;
        this.totalCount = req.data.totalCount;
        if (data && data instanceof Array && data.length >= 0) {
          this.list = data;
        }
      })
    }
  },
  filters: {
      fmtDate(obj) {
        if (obj) {
          var date = new Date(obj);
          var y = 1900 + date.getYear();
          var m = "0" + (date.getMonth() + 1);
          var d = "0" + date.getDate();
          return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length);
        } else {
          return "暂无日期"
        }
      },
    },
}

</script>
<style scoped>
.share-box {
  border: 1px solid #d2d2d2;
}

.scope_star {
  display: inline-block;
}
.fade-enter-active {
  transition: opacity 0.4s;
}

.fade-enter {
  opacity: 0;
}

.searh_pagingBox {
  padding: 30px 0;
}

/*单行自动换行处理*/
.search_text {
  display: inline-block;
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/*多行自动换行处理*/
.zhaiyao_text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  width: 300px;
  height: 40px;
}

.search_list_imgBox {
  position: relative;
  display: block !important;
  width: 186px !important;
  height: 271px !important;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 271px !important;
}

.search_list_img {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  margin: 0 !important;
  padding: 0 !important;
  transform: translate(-50%, -50%);
}
</style>
