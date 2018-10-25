<template>
  <div class="search_07">
    <div v-if="CONFIG.isShowTotalCountTag" class="search_07-search_totalcount">{{getStaticText('total') ? getStaticText('total') : '共'}}
      <span class="search_07-search_totalcount-num" v-text="totalCount"></span>{{getStaticText('productQuantity') ? getStaticText('productQuantity') : '件商品'}}
    </div>

    <!-- 排序  -->
    <div class="search_07-search_orderby_con" v-if="CONFIG && CONFIG.toOrderByBtn && CONFIG.toOrderByBtn.isShow">
      <span class="search_07-search_orderby_name"> {{CONFIG.toOrderByBtn.name}}</span>
      <span class="search_07-search_orderby_span" v-for="(item, index) in CONFIG.toOrderByBtn.itemList" :key="index" @click="toSetOrder(item)" :class="{'toOrderByBtn_Activedesc': item.itemField.order == activeSetOrder , 'toOrderByBtn_Activeasc' : item.itemField2.order == activeSetOrder}">
        {{item.name}}
        <a href="javascript:;" class="search_07-search_orderby_one"></a>
        <a href="javascript:;" class="search_07-search_orderby_two"></a>
        </span>
    </div>

    <div  class="search_07-noresult" v-if="list && list.length == 0">
      {{getStaticText('noRelevantBooks') ? getStaticText('noRelevantBooks') : '暂无相关书籍'}}
    </div>
    <div class="search_07-resourcelists" v-if="list && list.length > 0">
      <ul class="search_07_resourcelists_ul">
        <li class="search_07_resourcelists_li" v-bind="{class: 'search_07_resourcelists_li_'+ item.pub_resource_type}" v-for="(item, index) in list" :key="index">
          <div class="search_07_resourcelists_li_box" v-if="item.pub_resource_type=='REVIEW'">
            <template v-for="(config, config_i) in CONFIG.complicatedItem['review']">
              <!-- 需要特殊处理的复杂项 -->
              <!-- img 图片 -->
              <div :key="config_i" v-if="config.name == 'img'" class="search_07_resourcelists_li_imgcontainter" @click="toDetail(item)">
                <label class="search_07_resourcelists_img_label">{{config.display}}</label>
                <img class="search_07_resourcelists_li_img" v-bind="{class: 'search_07_resourcelists_' + config.field}" :src=" item[keys['review'][config.field]] || require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" />
              </div>

              <!-- 自定义事件按钮 包括（title 标题） -->
              <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'search_07_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toDetail(item)">
                <label class="search_07_resourcelists_btnlabel">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists__btncontainer_' + config.field}" v-if="keys['review'][config.field]" v-html="item[keys['review'][config.field]]"></span>
              </span>

              <!-- price 价格 -->
              <span :key="config_i" v-else-if="config.name == 'price'" class="search_07_resourcelists_li_pricecontainter">
                <label class="search_07_resourcelists_price_label">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists_' + config.field}">{{formatPriceNew(item[keys['review'][config.field]])}}</span>
              </span>

              <!-- time 时间 -->
              <span :key="config_i" v-else-if="config.name == 'time'" class="search_07_resourcelists_li_timecontainter">
                <label class="search_07_resourcelists_time_label">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists_' + config.field}">{{formatDateNEW(item[keys['review'][config.field]])}}</span>
              </span>

              <!-- 其他不需要特殊处理的简单项 -->
              <span :key="config_i" v-else class="search_07_resourcelists_other">
                <label class="search_07_resourcelists_li_label">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists_' + config.field}">{{ item[keys['review'][config.field]] }}</span>
              </span>

            </template>
          </div>
          <div class="search_07_resourcelists_li_box" v-else-if="item.pub_resource_type == 'BOOK'">
             <template v-for="(config, config_i) in CONFIG.complicatedItem['book']">
              <!-- 需要特殊处理的复杂项 -->
              <!-- img 图片 -->
              <div :key="config_i" v-if="config.name == 'img'" class="search_07_resourcelists_li_imgcontainter" @click="toDetail(item)">
                <label class="search_07_resourcelists_img_label">{{config.display}}</label>
                <img class="search_07_resourcelists_li_img" v-bind="{class: 'search_07_resourcelists_' + config.field}" :src=" item[keys['book'][config.field]] || require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" />
              </div>

              <!-- 自定义事件按钮 包括（title 标题） -->
              <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'search_07_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toDetail(item)">
                <label class="search_07_resourcelists_btnlabel">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists__btncontainer_' + config.field}" v-if="keys['book'][config.field]" v-html="item[keys['book'][config.field]]"></span>
              </span>

              <!-- price 价格 -->
              <span :key="config_i" v-else-if="config.name == 'price'" class="search_07_resourcelists_li_pricecontainter">
                <label class="search_07_resourcelists_price_label">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists_' + config.field}">{{formatPriceNew(item[keys['book'][config.field]])}}</span>
              </span>

              <!-- time 时间 -->
              <span :key="config_i" v-else-if="config.name == 'time'" class="search_07_resourcelists_li_timecontainter">
                <label class="search_07_resourcelists_time_label">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists_' + config.field}">{{formatDateNEW(item[keys['book'][config.field]])}}</span>
              </span>

              <!-- 其他不需要特殊处理的简单项 -->
              <span :key="config_i" v-else class="search_07_resourcelists_other">
                <label class="search_07_resourcelists_li_label">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists_' + config.field}">{{ item[keys['book'][config.field]] }}</span>
              </span>

            </template>
          </div>
          <div class="search_07_resourcelists_li_box" v-else-if="item.pub_resource_type == 'BOOK_MATERIAL'">
            <template v-for="(config, config_i) in CONFIG.complicatedItem['bookMaterial']">
              <!-- 需要特殊处理的复杂项 -->
              <!-- img 图片 -->
              <div :key="config_i" v-if="config.name == 'img'" class="search_07_resourcelists_li_imgcontainter" @click="toDetail(item)">
                <label class="search_07_resourcelists_img_label">{{config.display}}</label>
                <img class="search_07_resourcelists_li_img" v-bind="{class: 'search_07_resourcelists_' + config.field}" :src=" item[keys['bookMaterial'][config.field]] || require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" />
              </div>

              <!-- 自定义事件按钮 包括（title 标题） -->
              <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'search_07_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toDetail(item)">
                <label class="search_07_resourcelists_btnlabel">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists__btncontainer_' + config.field}" v-if="keys['bookMaterial'][config.field]" v-html="item[keys['bookMaterial'][config.field]]"></span>
              </span>

              <!-- price 价格 -->
              <span :key="config_i" v-else-if="config.name == 'price'" class="search_07_resourcelists_li_pricecontainter">
                <label class="search_07_resourcelists_price_label">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists_' + config.field}">{{formatPriceNew(item[keys['bookMaterial'][config.field]])}}</span>
              </span>

              <!-- time 时间 -->
              <span :key="config_i" v-else-if="config.name == 'time'" class="search_07_resourcelists_li_timecontainter">
                <label class="search_07_resourcelists_time_label">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists_' + config.field}">{{formatDateNEW(item[keys['bookMaterial'][config.field]])}}</span>
              </span>

              <!-- 其他不需要特殊处理的简单项 -->
              <span :key="config_i" v-else class="search_07_resourcelists_other">
                <label class="search_07_resourcelists_li_label">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists_' + config.field}">{{ item[keys['bookMaterial'][config.field]] }}</span>
              </span>

            </template>
          </div>
          <div class="search_07_resourcelists_li_box" v-else>
            <template v-for="(config, config_i) in CONFIG.complicatedItem[CONFIG.singleKey]">
              <!-- img 图片 -->
              <div :key="config_i" v-if="config.name == 'img'" class="search_07_resourcelists_li_imgcontainter" @click="toDetail(item)">
                <label class="search_07_resourcelists_img_label">{{config.display}}</label>
                <img class="search_07_resourcelists_li_img" v-bind="{class: 'search_07_resourcelists_' + config.field}" :src=" item[keys[CONFIG.singleKey][config.field]] || require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" />
              </div>

              <!-- 自定义事件按钮 包括（title 标题） -->
              <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'search_07_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toDetail(item)">
                <label class="search_07_resourcelists_btnlabel">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists__btncontainer_' + config.field}" v-if="keys[CONFIG.singleKey][config.field]" v-html="item[keys[CONFIG.singleKey][config.field]]"></span>
              </span>

              <!-- price 价格 -->
              <span :key="config_i" v-else-if="config.name == 'price'" class="search_07_resourcelists_li_pricecontainter">
                <label class="search_07_resourcelists_price_label">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists_' + config.field}">{{formatPriceNew(item[keys[CONFIG.singleKey][config.field]])}}</span>
              </span>

              <!-- time 时间 -->
              <span :key="config_i" v-else-if="config.name == 'time'" class="search_07_resourcelists_li_timecontainter">
                <label class="search_07_resourcelists_time_label">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists_' + config.field}">{{formatDateNEW(item[keys[CONFIG.singleKey][config.field]])}}</span>
              </span>

              <!-- 其他不需要特殊处理的简单项 -->
              <span :key="config_i" v-else class="search_07_resourcelists_other">
                <label class="search_07_resourcelists_li_label">{{config.display}}</label>
                <span v-bind="{class: 'search_07_resourcelists_' + config.field}">{{ item[keys[CONFIG.singleKey][config.field]] }}</span>
              </span>

            </template>
          </div>
        </li>
      </ul>
    </div>
    <div class="search_07-content-paging">
        <ui_pagination :pageMessage="{totalCount}" :excuteFunction="toPage" :page-sizes="pageSizes" :props-current-page="currentPage" ref="pagination"></ui_pagination>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mobileLoading, getFieldAdapter, toOtherPage, Post, Get } from "@common";
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Icon, Toast } from 'vant';
import $ from "jquery";

export default {
  name: 'work_search_07',
  reused: true,
  props: {
    namespace: String,
    isAutomaticLoad: {
      type: Boolean,
      default: true,
    }, //是否自动加载数据
    modulename: String
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
      pageNo: 1,
      noMore: false,
      keys: {}, // (好书快听,电子书/纸书,有声书)接口字段容器
      requestParams: "", // 去详情页需要传查询list.do的所有参数
      category: "", //资源类型分类或者是字段名称
      activeSetOrder: "", // 综合排序
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.initDate();
    this.$bus.$on(this.CONFIG.eventName_loadDate, this.getSearchResult);

    if (typeof this.CONFIG.toOrderByBtn != "undefined") {
      if (this.CONFIG.toOrderByBtn) {
        this.activeSetOrder = this.CONFIG.toOrderByBtn.itemFieldDefult;
      }
    }
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
      let CONFIG = PROJECT_CONFIG[this.namespace].search.search_result_07[this.modulename];
      this.CONFIG = JSON.parse(JSON.stringify(CONFIG));
      let self = this;
      if(this.CONFIG.typeAdapter){
        for(var key in this.CONFIG.typeAdapter){
          self.keys[key] = JSON.parse(JSON.stringify(getFieldAdapter(self.CONFIG.sysAdapter, self.CONFIG.typeAdapter[key])));
        };
      }
      //增量加载
      if (typeof (this.CONFIG.isMobileLoading) != 'undefined') {
        if (this.CONFIG.isMobileLoading) {
          this.isMobileLoading = this.CONFIG.isMobileLoading;
        }
      }

    },
    initDate () {
      this.pageSizes = this.CONFIG.pageSizes || [1,2,3];
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
      param.pageNo = pageNo ? pageNo : param.pageNo;
      param.pageSize = pageSize ? pageSize : param.pageSize;
      param.conditions = conditions ? conditions : param.conditions;
      param.orderBy = orderBy ? orderBy : param.orderBy;

      //是否是多字段模糊查询
      //增量加载
      param.searchText = '';
      var newSearchText = searchText ? searchText : (this.locationQuery && this.locationQuery.searchText || '');
      if (typeof (this.CONFIG.isMoreFieldSearch) != 'undefined') {
        if (this.CONFIG.isMoreFieldSearch) {
          for (var i=0;i<this.CONFIG.isMoreFieldSearch.length;i++)
          {
            param.searchText = param.searchText+' '+this.CONFIG.isMoreFieldSearch[i]+":"+"*"+newSearchText+"*";
            if(i<(this.CONFIG.isMoreFieldSearch.length-1)){
              param.searchText = param.searchText + ' OR ';
            }
          }
        }
      }
      // 同资源类型多字段单个查询(选择标题是标题,选择作者是作者,选择关键字是关键字,以此类推)
      else if(this.CONFIG.isSingleField){
        this.category = (this.locationQuery.catagory && this.locationQuery.catagory !== "undefined" && this.locationQuery.catagory !== "null") ? this.locationQuery.catagory : "pub_resource_name";
        param.searchText = this.category + ":" + "*" + newSearchText + "*"; 
      }else{
        param.searchText = newSearchText;
      }
      this.requestParams = param;

      if (typeof this.CONFIG.toOrderByBtn != "undefined") {
        if (this.CONFIG.toOrderByBtn) {
          param.orderBy = this.activeSetOrder;
        }
      }
      // console.log(param);

      //CONFIG.BASE_URL + 
      Post(CONFIG.BASE_URL + config.url, param).then((req) => {
        let data = req.data.result;
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
            this.pageNo = req.data.pageNo;
            this.totalCount = req.data.totalCount;
            this.totalPages = req.data.totalPages;
          }
        }
      })
    },
    toDetail (item) {
      let toDetailType = this.CONFIG.toDetailType;
      if (toDetailType.type == 'phone') {
        let params = '';
        for (let index = 0; index < toDetailType.phone.values.length; index++) {
          const element = toDetailType.phone.values[index];
          params += item[element] + ',';
        }
        params = params.substring(0, params.length - 1);
        eval(toDetailType.phone.functionName + '(' + params + ')')
      } else if (toDetailType.type == 'href') {
        let url  = toDetailType.href.url+'?';
        for (const key in toDetailType.href.keys) {
            const element = toDetailType.href.keys[key];
            url += key + '=' + item[element] + '&';
        }
        for (const key in toDetailType.href.fixedKeys) {
            const element = toDetailType.href.fixedKeys[key];
            url += key + '=' + element + '&';
        }
        url = url.substring(0,url.length-1)
        window.location.href = url;
      }
    },
    toSetOrder (item) {
      //修改默认排序
      if(this.activeSetOrder == item.itemField.order){
        this.activeSetOrder = item.itemField2.order;
      }else{
        this.activeSetOrder = item.itemField.order;
      }

      //this.totalCount = 0;
      this.getSearchResult({});
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

</style>
