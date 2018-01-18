<!--  -->
<template>
 <div class="search_04">
    <div v-if="projectConfig.isShowTotalCountTag" class="search_04-search_totalcount">共<span class="search_04-search_totalcount-num" v-text="totalCount"></span>件商品</div>
    
    <div class="search_04-content">
      <div class="search_04-content-list">
        <transition-group name="fade">
          <dl class="search_04-content-list-entry_box" v-for='entry in list' :key="entry.id">
            <dt class="search_04-content-list-entry_box-dt">
              <a class="search_04-content-list-entry_box-img_box" href="javascript:void(0)" @click="toDetail(entry.id)">
                <img class="search_04-content-list-entry_box-img" :src="entry.pub_picBig"  onload="DrawImage(this,186,271)" alt="暂无封面"/>
              </a>
            </dt>
            <dd class="search_04-content-list-entry_box-dd">
              <p class="search_04-content-list-entry_box-title">
                <a href="javascript:void(0)" @click="toDetail(entry.id)" v-text="entry.pub_resource_name" class="search_04-content-list-entry_box-title-a" :title="entry.pub_resource_name"></a>
              </p>
              <p class="search_04-content-list-entry_box-author">作者：<span v-text="entry.BOOK_SYS_AUTHORS" :title="entry.BOOK_SYS_AUTHORS"></span></p>
              <p class="search_04-content-list-entry_box-pressname" :title="entry.BOOK_PRESS_NAME">版权：{{entry.BOOK_PRESS_NAME}}</p>
              <p class="search_04-content-list-entry_box-pub-date" :title="entry.BOOK_PUBDATE | fmtDate">出版：{{entry.BOOK_PUBDATE | fmtDate}}</p>
              <p class="search_04-content-list-entry_box-price">￥<span v-text="parseFloat(entry.prod_member_price || 0).toFixed(2) "></span>
                <span class="search_04-content-list-entry_box-price-span">￥<span
                  v-text="parseFloat(entry.BOOK_EB_PRICE || 0).toFixed(2)"></span></span></p>
              <p class="search_04-content-list-entry_box-star">
                <span class="scope_star">
                  <el-rate v-model="entry.pub_star_num" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
                </span>
                <span v-text="entry.pub_comment_num || 0"></span>条评论
              </p>
              <p class="search_04-content-list-entry_box-synopsis" v-text="entry.BOOK_SYNOPSIS || '暂无摘要'"
                  :title="entry.BOOK_SYNOPSIS"></p>
              <p class="search_04-content-list-entry_box-orther_shop">
                <a href="javascript:void(0)" class="search_04-content-list-entry_box-orther_shop-a" @click="toDetail(entry.id)">第三方购买</a>
              </p>
              <p class="search_04-content-list-entry_box-orthers"><!--<span class="sc shoucang">收藏</span>-->
                <a href="http://www.jiathis.com/share"
                    class="search_04-content-list-entry_box-orthers-share" target="_blank">分享</a>
                <a href="javascript:void(0)" @click="toDetail(entry.id)" class="search_04-content-list-entry_box-orthers-buy">购买</a>
                <a href="javascript:void(0)" @click="toDetail(entry.id)" class="search_04-content-list-entry_box-orthers-to_view">查看</a>
              </p>
            </dd>
          </dl>
        </transition-group>
      </div>
      <div class="search_04-content-paging">
        <ui_pagination :pageMessage="{totalCount}" :excuteFunction="toPage"
                :page-sizes="pageSizes" :props-current-page="currentPage"></ui_pagination>
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
    },
    toDetail (pubId) {
      window.location.href = this.projectConfig.detailHref + pubId;
    }
  },
  filters: {
    fmtDate (obj) {
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
<style>
.search_04 {
   font-family: 'Microsoft Yahei','微软雅黑','\5FAE\8F6F\96C5\9ED1','宋体';
  font-size: 12px;
  color: #888888;
}
.search_04-search_totalcount {
  padding-right: 30px;
  padding-top: 20px;
  text-align: right;

  font-size: 14px;
}
.search_04-search_totalcount-num{
  color: #c50000;
}
.search_04-content {
  overflow: hidden;
  clear: both;
}
.search_04-content-list {
  overflow: hidden;
}
.search_04-content-list-entry_box {
  float: left;
  width: 580px;
  padding: 20px 0px 15px 20px;
  overflow: hidden;
  border-bottom-width: 1px;

  border-bottom-style: solid;
  border-bottom-color: #e5e5e5;
}
.search_04-content-list-entry_box-dt {
  float: left;
}
.search_04-content-list-entry_box-dd {
  width: 360px;
  float: left;
  padding-left: 25px;
}
.search_04-content-list-entry_box-title {
  font-size: 16px;
}
.search_04-content-list-entry_box-title-a {
  display: inline-block;
  line-height: 34px;
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  text-decoration: none;
  color: #c50000;
}
.search_04-content-list-entry_box-author {
  display: inline-block;
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 24px;

  color: #0871b0;
}
.search_04-content-list-entry_box-pressname {
  display: inline-block;
  width: 300px;
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: #8d8c8c;
}
.search_04-content-list-entry_box-pub-date {
  display: inline-block;
  width: 300px;
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: #8d8c8c;
}
.search_04-content-list-entry_box-price {
  font-size: 16px;
  color: #c50000;
  font-weight: bold;
  line-height: 36px;
}
.search_04-content-list-entry_box-price-span {
  color: #9c9595;
  text-decoration: line-through;
  font-size: 12px;
}
.search_04-content-list-entry_box-star {
  margin: 2px 0 5px 0;
}
.search_04-content-list-entry_box-synopsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  width: 300px;
  height: 40px;
  line-height: 20px;

  color: #947aa0;
}
.search_04-content-list-entry_box-orther_shop {
  height: 32px;

  background: url(./img/bg_008.png) no-repeat;
  background-position: -9px 2px;
}
.search_04-content-list-entry_box-orther_shop-a {
  line-height: 32px;
  padding-left: 25px;

  text-decoration: none;
  color: #515151;
  outline: none;
}
.search_04-content-list-entry_box-orthers {
  line-height: 28px;
}
.search_04-content-list-entry_box-orthers-share {
  display: inline-block;
  height: 28px;
  width: 38px;
  border: 1px solid #d2d2d2;
  line-height: 28px;
  text-indent: -9999px;

  text-decoration: none;
  outline: none;
  color: #888888;
  background-position: 1px 90px;
  background-image: url(./img/bg_005.png);
}
.search_04-content-list-entry_box-orthers-buy {
  display: inline-block;
  width: 52px;
  height: 30px;
  line-height: 30px;

  text-align: center;
  background: #c50000;
  color: #fff;
  font-size: 12px;
  text-decoration: none;
  outline: none;
}
.search_04-content-list-entry_box-orthers-to_view {
  display: inline-block;
  width: 52px;
  height: 30px;
  line-height: 30px;

  text-align: center;
  background: #515151;
  color: #fff;
  font-size: 12px;
  text-decoration: none;
  outline: none;
}
.search_04-content-list-entry_box-img_box {
  position: relative;
  display: block;
  width: 186px;
  height: 271px;
  margin: 0;
  padding: 0;
  line-height: 271px;

  text-decoration: none;
  outline: none;
  color: #888888;
}
.search_04-content-list-entry_box-img_box-img {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  margin: 0;
  padding: 0;
  border: 0px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.search_04-content-paging {
  padding: 30px 0;
}
</style>
