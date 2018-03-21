<!-- Created by song 2018/3/15 图书列表组件 -->
<template>
  <div class="ui_mobile_list_02">

    <div class="ui_mobile_list_02_subnav" v-if="listType == 'colId'"> <!-- 按栏目查图书列表 -->
      <span class="ui_mobile_list_02_read" :class="{ui_mobile_list_02_active:indexValue==0?true:false}" @click="toBookList('pub_read_num desc',0)">热门</span>
      <span class="ui_mobile_list_02_star" :class="{ui_mobile_list_02_active:indexValue==1?true:false}" @click="toBookList('pub_star_num desc',1)">好评</span>
      <span class="ui_mobile_list_02_pricecon"><span class="ui_mobile_list_02_saleprice" :class="{ui_mobile_list_02_active:indexValue==2?true:false}" @click="toBookList('prod_sale_price asc',2)">价格</span><a
      href="javascript:void(0)" @click="toBookList('prod_sale_price asc',2)"><i
      class="ui_mobile_list_02_asc"></i></a><a href="javascript:void(0)" @click="toBookList('prod_sale_price desc',2)"><i
      class="ui_mobile_list_02_desc"></i></a></span>
      <span :class="{ui_mobile_list_02_active:indexValue==3?true:false}" @click="toBookList('BOOK_PUBDATE desc',3)">新书</span>
    </div>

    <div class="ui_mobile_list_02_sortCon" v-if="listType == 'cascadId'"> <!-- 按分类查图书列表 -->
      <div class="ui_mobile_list_02_sort" id="screenBox" v-if="classifyBook && classifyBook.length > 0">
        <span class="ui_mobile_list_02_sortitem" v-for="(item, index) in classifyBook" :key="index" v-text="item.text" @click="loadBookList(item.cascadeId)"></span>
      </div>
      <div class="ui_mobile_list_02_sort" id="screenBox" v-else>
        <span class="ui_mobile_list_02_nosub">暂无二级分类</span>
      </div>
      <a class="ui_mobile_list_02_more" id="moreBtn" @click="showMore()" v-if="classifyBook && classifyBook.length > 4">更多</a>
    </div>

    <div class="ui_mobile_list_02_booklist">
      <div v-if="bookList && bookList.length > 0">
        <dl class="ui_mobile_list_02_booklistcon" v-for="(ebook, index) in bookList" :key="index">
          <dt class="ui_mobile_list_02_booklistdt" v-if="CONFIG.showItem.indexOf('picture') !== -1 ? true : false">
            <img class="ui_mobile_list_02_booklistimg" :src="ebook[keys.picture]" @click="appbook(ebook.id)">
          </dt>
          <dd class="ui_mobile_list_02_booklistdd">
            <p class="ui_mobile_list_02_bookname" @click="appbook(ebook.id)" v-if="CONFIG.showItem.indexOf('bookname') !== -1 ? true : false">{{ebook[keys.bookname]}}</p>
            <p class="ui_mobile_list_02_author" v-if="CONFIG.showItem.indexOf('author') !== -1 ? true : false">
              <span v-text="CONFIG.display.author"></span>
              <span>{{ebook[keys.author]}}</span>
            </p>
            <p class="ui_mobile_list_02_abstract" v-if="CONFIG.showItem.indexOf('abstract') !== -1 ? true : false">{{ebook[keys.abstract]}}</p>
            <p class="ui_mobile_list_02_price" v-if="CONFIG.showItem.indexOf('price') !==-1 ? true : false">{{ebook[keys.price] | formatPrice}}</p>
          </dd>
        </dl>
      </div>
      <div class="ui_mobile_list_02_none" v-else>暂无数据</div>
      <div class="ui_mobile_list_02_none" v-if="noMore">没有更多啦~</div>
    </div>

  </div>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post, Get } from '@common'
import $ from 'jquery'

export default {
  name: 'ui_mobile_list_02',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,  // 组件配置
      keys: null,    // 接口字段
      bookList: [],  // 图书列表
      indexValue: 0, // 当前选中筛选条件：热门、好评、价格、新书
      noMore: false,
      colId: '', // 栏目
      cascadId: '', // 分类
      listType: '', // 列表类型
      orderParam: '', // 排序类型
      totalCount: 0, // 总数
      pageNo: "1",
      pageSize: "10",
      classifyBook: null,  // 分类
      searchText: '',  // 搜索内容
    };
  },
  created () {
    this.$bus.on('showSearchResult', (data) => {
      this.searchText = data;
      this.toBookList(this.orderParam, this.indexValue);
    });
  },
  mounted () {
    let query = URL.parse(document.URL, true).query;
    this.colId = query.colId ? query.colId : "";  // 按栏目查的时候从地址栏获取colId
    this.cascadId = query.cascadId ? query.cascadId : ""; // 按分类查的时候从地址栏获取cascadId
    this.orderParam = query.cascadId ? "BOOK_PUBDATE desc" : "pub_read_num desc";
    this.CONFIG = PROJECT_CONFIG[this.namespace].booklist.booklist_01;
    this.keys = this.CONFIG.keys;
    this.listType = this.CONFIG.listType;
    this.classifyArr = this.CONFIG.classifyArr;
    this.loadBookList(this.cascadId);
    if (this.cascadId) {
      this.queryClassificationList();
    }
    /*检测滚动条*/
    $(window).scroll(() => {
      let clientHeight = $(window).height();   // 屏幕可视高度
      let scrollHeight = $(window).scrollTop();     // 滚动条滚动高度
      let allHeight = $(document).height();         // 总高度
      var pageNo = this.totalCount / this.pageSize;
      var pageNoMax = parseInt(pageNo, 10) === pageNo ? pageNo : Math.ceil(pageNo);
      if (clientHeight + scrollHeight === allHeight && this.scroll === true) {
        this.scroll = false;
        if (this.pageNo < pageNoMax) {   // 当前页小于翻页最大值
          this.noMore = false;
          this.pageNo = parseInt(this.pageNo) + 1 + '';
          this.loadBookList(this.cascadId);
        }
      }
      if (this.pageNo == pageNoMax) {
        this.noMore = true;
      }
    });
  },

  methods: {
    loadBookList (cascadId) { // 获取图书列表数据
      let paramsObj = Object.assign({}, this.CONFIG.params);
      if (this.searchText) {
        paramsObj.searchText = this.searchText;
      } else {
        paramsObj.conditions = this.colId ? '[{pub_resource_type:"BOOK"},{pub_col_id:"' + this.colId + '"},{pub_status:"1"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"}]' : '[{pub_resource_type:"BOOK"},{BOOK_BOOK_CASCADID:"' + cascadId.replace('~', '_') + '",op:"lk"},{pub_status:"1"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"}]';
      }
      paramsObj.orderBy = this.orderParam;
      paramsObj.pageNo = this.pageNo;
      Post(this.CONFIG.url, paramsObj).then((res) => {
        if (res.data.success) { // 请求成功
          var datas = res.data.result;
          this.totalCount = res.data.totalCount;
          if (datas && datas instanceof Array && datas.length > 0) {
            this.bookList = this.bookList.concat(datas);
            this.scroll = true;
          }
        }
      })
    },
    queryClassificationList () { // 图书分类查询
      Get(this.CONFIG.queryClassification.url, { params: this.CONFIG.queryClassification.params }).then(rep => {
        var datas = rep.data;
        if (datas && datas instanceof Array && datas.length > 0) {
          for (var i = 0, len = datas.length; i < len; i++) {
            if (datas[i].cascadeId == this.cascadId) {
              this.classifyBook = datas[i].children;
            }
          }
        }
      });
    },
    toBookList (orderParam, thisValue) {
      this.initData();
      this.orderParam = orderParam;
      this.indexValue = thisValue;
      this.loadBookList(this.cascadId);
    },
    initData () {    // 初始化数据操作
      this.bookList = [];
      this.scroll = true;
      this.noMore = false;
      this.pageNo = "1";
    },
    showMore () { // 查看更多 按分类查时的功能
      if ($('#moreBtn').html() == "收起") {
        $("#screenBox").css("height", "");
        $('#moreBtn').html("更多");
      } else {
        $("#screenBox").css("height", "auto");
        $('#moreBtn').html("收起");
      }
    },
  }
}
</script>
<style>
.ui_mobile_list_02 {
  padding-top: 0.95rem;
}

.ui_mobile_list_02_subnav {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  border-bottom: 1px solid #f5f5f5;
  color: #5b5b5b;
  font-weight: 500;
  font-size: 0.3rem;
  padding-bottom: 0.25rem;
  padding-top: 0.4rem;
  margin-bottom: 0.2rem;
}

.ui_mobile_list_02_active {
  color: #c40001;
}

.ui_mobile_list_02_pricecon {
  position: relative;
}

.ui_mobile_list_02_saleprice {
  margin-right: 0.2rem;
}

.ui_mobile_list_02_asc {
  top: 0;
  background: url(./data/img/bg_ico.png) no-repeat -1.19rem -0.95rem;
}

.ui_mobile_list_02_desc {
  bottom: 0;
  background: url(./data/img/bg_ico.png) no-repeat -1.19rem -1.13rem;
}

.ui_mobile_list_02_asc,
.ui_mobile_list_02_desc {
  width: 0.2rem;
  height: 0.2rem;
  position: absolute;
  display: inline-block;
  vertical-align: middle;
  -webkit-background-size: 5rem 5rem;
  -moz-background-size: 5rem 5rem;
  background-size: 5rem 5rem;
}

.ui_mobile_list_02_booklist {
  padding: 0rem 0.2rem 0.3rem 0.2rem;
}

.ui_mobile_list_02_booklistcon {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0;
  margin-bottom: 0.2rem;
}

.ui_mobile_list_02_booklistdt {
  width: 1.8rem;
  height: 2.41rem;
  -moz-border-radius: 0.05rem;
  border-radius: 0.05rem;
  -webkit-border-radius: 0.05rem;
  margin-right: 0.15rem;
  overflow: hidden;
  -webkit-box-shadow: 0rem 0rem 0.15rem #e9e9e9;
  -moz-box-shadow: 0rem 0rem 0.15rem #e9e9e9;
  box-shadow: 0rem 0rem 0.15rem #e9e9e9;
}

.ui_mobile_list_02_booklistdd {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-weight: 500;
  margin-left: 0;
}

.ui_mobile_list_02_booklistimg {
  width: 100%;
  height: 2.41rem;
}

.ui_mobile_list_02_bookname,
.ui_mobile_list_02_author,
.ui_mobile_list_02_abstract {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
  white-space: normal;
  margin-top: 0;
  margin-bottom: 0;
}

.ui_mobile_list_02_bookname {
  -webkit-line-clamp: 2;
  color: #333333;
  font-size: 0.32rem;
}

.ui_mobile_list_02_author {
  -webkit-line-clamp: 1;
  line-height: 0.39rem;
  color: #5b5b5b;
  font-size: 0.24rem;
}

.ui_mobile_list_02_abstract {
  -webkit-line-clamp: 2;
  line-height: 0.36rem;
  color: #888888;
  font-size: 0.24rem;
}

.ui_mobile_list_02_price {
  color: #c40001;
  font-size: 0.28rem;
  margin-top: 0;
  margin-bottom: 0;
}

.ui_mobile_list_02_sortCon {
  background-color: #f5f7fa;
  overflow: hidden;
  width: 7.5rem;
  margin-bottom: 0.2rem;
  margin-top: 0.25rem;
}

.ui_mobile_list_02_sort {
  float: left;
  height: 0.6rem;
  margin: 0.3rem 0 0 0;
  overflow: hidden;
  width: 6.06rem;
}

.ui_mobile_list_02_nosub {
  float: left;
  height: 0.6rem;
  margin-left: 0.3rem;
  overflow: hidden;
  width: 6.06rem;
  color: #333333;
  font-size: 0.28rem;
}

.ui_mobile_list_02_sortitem {
  color: #717b8b;
  float: left;
  font-size: 0.26rem;
  margin: 0 0 0.3rem 0;
  white-space: nowrap;
  width: 1.5rem;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}

.ui_mobile_list_02_more {
  color: #c92e36;
  float: left;
  font-size: 0.26rem;
  margin-top: 0.3rem;
}

.ui_mobile_list_02_none {
  text-align: center;
  color: #5b5b5b;
  font-weight: 500;
  font-size: 0.3rem;
}
</style>