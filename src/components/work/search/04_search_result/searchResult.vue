<!--  zongsir  20180805 edit -->
<template>
  <div class="search_04">
    <div v-if="CONFIG.isShowTotalCountTag" class="search_04-search_totalcount">{{getStaticText('total') ? getStaticText('total') : '共'}}
      <span class="search_04-search_totalcount-num" v-text="totalCount"></span>{{getStaticText('productQuantity') ? getStaticText('productQuantity') : '件商品'}}</div>
    <div  class="search_04-noresult" v-if="list && list.length == 0">
      {{getStaticText('noRelevantBooks') ? getStaticText('noRelevantBooks') : '暂无相关书籍'}}
    </div>
    <div class="search_04-content" v-if="list && list.length > 0">
      <div class="search_04-content-list">
        <transition-group name="fade">
          <dl class="search_04-content-list-entry_box" v-for='entry in list' :key="entry.id">
            <dt class="search_04-content-list-entry_box-dt">
              <a class="search_04-content-list-entry_box-img_box" href="javascript:void(0)" @click="toDetail(entry.id)">
                <img class="search_04-content-list-entry_box-img" :src="entry.pub_picBig" onload="DrawImage(this,186,271)" :alt="getStaticText('noCover') ? getStaticText('noCover') : '暂无封面'" />
              </a>
            </dt>
            <dd class="search_04-content-list-entry_box-dd">
              <p class="search_04-content-list-entry_box-title">
                <a href="javascript:void(0)" @click="toDetail(entry.id)" v-text="entry.pub_resource_name" class="search_04-content-list-entry_box-title-a" :title="entry.pub_resource_name"></a>
              </p>
              <p class="search_04-content-list-entry_box-author">{{getStaticText('author') ? getStaticText('author') : '作者：'}}
                <span v-text="entry.BOOK_SYS_AUTHORS" :title="entry.BOOK_SYS_AUTHORS"></span>
              </p>
              <p class="search_04-content-list-entry_box-isbn" v-if="CONFIG && CONFIG.isShowIsbn">{{getStaticText('isbn') ? getStaticText('isbn') : 'ISBN：'}}
                <span v-text="entry.BOOK_ISBN" :title="entry.BOOK_ISBN"></span>
              </p>
              <p class="search_04-content-list-entry_box-pressname" :title="entry.BOOK_PRESS_NAME">{{getStaticText('copyright') ? getStaticText('copyright') : '版权：'}}{{entry.BOOK_PRESS_NAME}}</p>
              <p class="search_04-content-list-entry_box-pub-date" :title="fmtDate(entry.BOOK_PUBDATE)">{{getStaticText('publish') ? getStaticText('publish') : '出版：'}}{{fmtDate(entry.BOOK_PUBDATE)}}</p>
              <p class="search_04-content-list-entry_box-price">{{getStaticText('yuan') ? getStaticText('yuan') : '￥'}}
                <span v-text="parseFloat(entry.prod_member_price || 0).toFixed(2) "></span>
                <span class="search_04-content-list-entry_box-price-span">{{getStaticText('yuan') ? getStaticText('yuan') : '￥'}}
                  <span v-text="parseFloat((entry.prod_product_type == '91' ? entry.BOOK_PRICE : entry.BOOK_EB_PRICE) || 0).toFixed(2)"></span>
                </span>
              </p>
              <p class="search_04-content-list-entry_box-star">
                <span class="search_04-content-list-entry_box-star-el_box">
                  <el-rate v-model="entry.pub_star_num" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
                </span>
                <span v-text="entry.pub_comment_num || 0"></span>{{getStaticText('productQuantity') ? getStaticText('productQuantity') : '件商品'}}
              </p>
              <p class="search_04-content-list-entry_box-synopsis" v-text="entry.BOOK_SYNOPSIS || (getStaticText('noDigest') ? getStaticText('noDigest') : '暂无摘要')" :title="entry.BOOK_SYNOPSIS"></p>
              <!-- <p class="search_04-content-list-entry_box-orther_shop">
                <a href="javascript:void(0)" class="search_04-content-list-entry_box-orther_shop-a" @click="toDetail(entry.id)">第三方购买</a>
              </p> -->
              <p class="search_04-content-list-entry_box-others">
                <!--<span class="sc shoucang">收藏</span>-->
                <!-- <a href="http://www.jiathis.com/share" class="search_04-content-list-entry_box-others-share" target="_blank">{{getStaticText('shareTo') ? getStaticText('shareTo') : '分享'}}</a> -->
                <ui_share_01 :namespace="namespace" :modulename="namespace" ref="shareelement"></ui_share_01>
                <a href="javascript:void(0)" @click="toDetail(entry.id)" class="search_04-content-list-entry_box-others-buy">{{getStaticText('buy') ? getStaticText('buy') : '购买'}}</a>
                <a href="javascript:void(0)" @click="toDetail(entry.id)" class="search_04-content-list-entry_box-others-to_view">{{getStaticText('checkInfo') ? getStaticText('checkInfo') : '查看'}}</a>
              </p>
            </dd>

          </dl>
        </transition-group>
      </div>
      <div class="search_04-content-paging">
        <ui_pagination :pageMessage="{totalCount}" :excuteFunction="toPage" :page-sizes="pageSizes" :props-current-page="currentPage" ref="pagination"></ui_pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mobileLoading } from "@common";
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Post } from "@common";
import { Icon, Toast } from 'vant';

export default {
  name: 'work_search_04',
  reused: true,
  props: {
    namespace: String,
    modulename:String,
    isAutomaticLoad: {
      type: Boolean,
      default: true,
    }, //是否自动加载数据
  },
  data () {
    return {
      CONFIG: null,
      pageSizes: null,    /* 分页数组 */
      currentPage: 1,   /* 分页组件当前页 */
      totalCount: 0,    /* 总数 */
      list: [],
      locationQuery: null, /* 地址栏查询参数 */
      isMobileLoading: false, //默认不是下拉增量加载
      totalPages: 0, // 订单总页数
      pageIndex: "1",
      noMore: false,
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.initDate();
    this.$bus.$on(this.CONFIG.eventName_loadDate, this.getSearchResult);
  },

  mounted () {
    if (this.isAutomaticLoad) {
      this.getSearchResult({});
    }
    /*检测滚动条*/
    if (this.isMobileLoading) {
      $(window).scroll(() => {
        /**
         * function 下拉底部加载
         * params1: vue对象
         * params2: 回调方法
         */

        let clientHeight = $(window).height();   // 屏幕可视高度
        let scrollHeight = $(window).scrollTop();     // 滚动条滚动高度
        let allHeight = $(document).height();         // 总高度
        if (clientHeight + scrollHeight === allHeight) {
          if (this.pageIndex < this.totalPages) {   // 当前页小于翻页最大值
            this.noMore = false;
            this.pageIndex = parseInt(this.pageIndex) + 1 + '';
            var pageNo = this.pageIndex;
            this.getSearchResult({ pageNo });
          }
        }
        if (this.pageNo == this.totalPages) {
          this.noMore = true;
        }
      });
    }
  },

  methods: {
    initConfig () {
      let CONFIG  = this.mudulename ? PROJECT_CONFIG[this.namespace].search[this.modulename] : PROJECT_CONFIG[this.namespace].search.search_result_04;
      this.CONFIG = JSON.parse(JSON.stringify(CONFIG));
      //增量加载
      if (typeof (this.CONFIG.isMobileLoading) != 'undefined') {
        if (this.CONFIG.isMobileLoading) {
          this.isMobileLoading = this.CONFIG.isMobileLoading;
        }
      }

    },
    initDate () {
      this.pageSizes = this.CONFIG.pageSizes || [10, 20, 50, 100];
      this.locationQuery = URL.parse(document.URL, true).query;
    },
    toPage ({ pageNo, pageSize }) {

      this.getSearchResult({ pageNo, pageSize });
    },
    getSearchResult ({ pageNo, pageSize, conditions, orderBy, searchText, currentPage }) {
      let config = this.CONFIG;
      let param = config.param;

      if(currentPage ==1){
        this.$refs.pagination.toPageOne();
      }
      // this.currentPage = currentPage ? currentPage : this.currentPage;//改变分页组件当前页
      param.pageNo = pageNo ? pageNo : param.pageNo;
      param.pageSize = pageSize ? pageSize : param.pageSize;
      param.conditions = conditions ? conditions : param.conditions;
      param.orderBy = orderBy ? orderBy : param.orderBy;

      //是否是多字段模糊查询
      //增量加载
      param.searchText = '';
      var newSearchText = searchText ? searchText : (this.locationQuery && this.locationQuery.searchText || '');
      let searchTextObj = '';
      if (typeof (this.CONFIG.isMoreFieldSearch) != 'undefined') {
        if (this.CONFIG.isMoreFieldSearch) {
          for (var i=0;i<this.CONFIG.isMoreFieldSearch.length;i++)
          {
            searchTextObj = searchTextObj+' '+this.CONFIG.isMoreFieldSearch[i]+":"+"*"+newSearchText+"*";
            if(i<(this.CONFIG.isMoreFieldSearch.length-1)){
              searchTextObj = searchTextObj + ' OR ';
            }
          }
        }
      }else{
        searchTextObj = newSearchText;
      }
      param.searchText = searchTextObj;
      Post(CONFIG.BASE_URL + config.url, param).then((req) => {
        let data = req.data.result;
        // if (data && data instanceof Array && data.length >= 0) {
        if (this.isMobileLoading  && req.data.pageNo !=1) {
          if (data && data instanceof Array && data.length >= 0) {
            this.list = this.list.concat(data);
            this.pageNo = req.data.pageNo;
            this.totalCount = req.data.totalCount;
            this.totalPages = req.data.totalPages;
          } else if (datas.success) {
            Toast.fail({
              duration: 1000,
              message: datas.description
            });
          }
        } else {
          if (data && data instanceof Array && data.length >= 0) {
            this.list = data;
            this.totalCount = req.data.totalCount;
            this.totalPages = req.data.totalCount;
          }
        }
        // }
      })
    },
    toDetail (pubId) {
      window.location.href = this.CONFIG.detailHref + pubId;
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
    fmtDate (obj) {
      if (obj) {
        var date = new Date(obj);
        var y = 1900 + date.getYear();
        var m = "0" + (date.getMonth() + 1);
        var d = "0" + date.getDate();
        return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length);
      } else {
        return this.getStaticText('noDate') ? this.getStaticText('noDate') : "暂无日期"
      }
    },
  },
}

</script>
<style>
.search_04 {
  font-family: 'Microsoft Yahei', '微软雅黑', '\5FAE\8F6F\96C5\9ED1', '宋体';
  font-size: 12px;
  color: #888888;
}
.search_04-noresult{
  font-size: 16px;
  margin: 150px 0;
  text-align: center;
}
.search_04-search_totalcount {
  padding-right: 30px;
  padding-top: 20px;
  text-align: right;

  font-size: 14px;
}
.search_04-search_totalcount-num {
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
.search_04-content-list-entry_box-star-el_box {
  display: inline-block;
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
.search_04-content-list-entry_box-others {
  line-height: 28px;
}
.search_04-content-list-entry_box-others-share {
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
.search_04-content-list-entry_box-others-buy {
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
.search_04-content-list-entry_box-others-to_view {
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
