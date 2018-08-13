<template>
    <div class="work_mobile_personalcenter_11">
      <div class="work_mobile_personalcenter_11_tabs">
        <ul class="work_mobile_personalcenter_11_tabs_ul">
        <li class="work_mobile_personalcenter_11_tabs_li" v-for="(tab,index) in tabsList" :class="[index == currentIndex ? 'isActive' : '']" @click="changeTab(tab,index)" :key="index">
            {{tab.title}}
          </li>
        </ul>
      </div>
      <div class="work_mobile_personalcenter_11_book" v-if="0 == currentIndex">
        <div class="work_mobile_personalcenter_11_select">
          <select v-model="selected">
            <option v-for="option in options" :value="option.value">{{option.text}}</option>
          </select>
        </div>
        <div v-if="selected == '1'" class="work_mobile_personalcenter_11_book-list">
          <van-loading color="black" v-if="isLoading"/>
          <ul class="work_mobile_personalcenter_11_book-list_ul">
            <li class="work_mobile_personalcenter_11_book-list_li_one" v-for="(book, index) in boughtBooksList" :key="index" v-if="boughtBooksList && boughtBooksList.length > 0">
              <div class="work_mobile_personalcenter_11_book-list_li_img-box">
                <img class="work_mobile_personalcenter_11_book-list_li_img-box_img" :src="book.midPic" :alt="display.noPicture || '暂无图片'" @click="toBookPage(book)"/>
              </div>
              <div class="work_mobile_personalcenter_11_book-list_li_content-box_bookName" @click="toBookPage(book)">
                {{book.productName}}
              </div>
            </li>
          </ul>
          <span v-if="isHasBook">{{display.noData[currentIndex]}}</span>
        </div>
        <div v-if="selected == '2'" class="work_mobile_personalcenter_11_book-list">
          <van-loading color="black" v-if="isLoading"/>
          <ul class="work_mobile_personalcenter_11_book-list_ul">
            <li class="work_mobile_personalcenter_11_book-list_li_two" v-for="(book, index) in boughtBooksList" :key="index" v-if="boughtBooksList && boughtBooksList.length > 0">
              <div class="work_mobile_personalcenter_11_book-list_li_img-box">
                <img class="work_mobile_personalcenter_11_book-list_li_img-box_img" :src="book.midPic" :alt="display.noPicture || '暂无图片'" />
              </div>
              <div class="work_mobile_personalcenter_11_book-list_li_content-box">
                <div class="work_mobile_personalcenter_11_book-list_li_content-box_bookName">{{display.bookName || '书名：'}}
                  <span v-text="book.productName"></span>
                </div>
                <div class="work_mobile_personalcenter_11_book-list_li_content-box_author">{{display.author || '作者：'}}
                  <span v-text="book.author"></span>
                </div>
              </div>
            </li>
          </ul>
          <span v-if="isHasBook">{{display.noData[currentIndex]}}</span>
        </div>
      </div>
      <div class="work_mobile_personalcenter_11_periodical" v-if="1 == currentIndex">
        <div class="work_mobile_personalcenter_11_book-list_periodical">
          <van-loading color="black" v-if="isLoading"/>
          <ul class="work_mobile_personalcenter_11_book-list_periodical_ul">
            <li class="work_mobile_personalcenter_11_book-list_periodical_li" v-for="(book, index) in boughtBooksList" :key="index" v-if="boughtBooksList && boughtBooksList.length > 0">
              <div class="work_mobile_personalcenter_11_book-list_periodical_li_img-box">
                <img class="work_mobile_personalcenter_11_book-list_periodical_li_img-box_img" :src="book.midPic" :alt="display.noPicture || '暂无图片'" />
              </div>
              <div class="work_mobile_personalcenter_11_book-list_periodical_li_content-box">
                <div class="work_mobile_personalcenter_11_book-list_periodical_li_content-box_bookName">{{display.periodicalName || '期刊名：'}}
                  <span v-text="book.productName"></span>
                </div>
                <div class="work_mobile_personalcenter_11_book-list_periodical_li_content-box_author">{{display.periodicalContent || '期刊内容：'}}
                  <span v-text="book.author"></span>
                </div>
              </div>
            </li>
          </ul>
          <span v-if="isHasPeriodical">{{display.noData[currentIndex]}}</span>
        </div>
      </div>
      <div class="work_mobile_personalcenter_11_service" v-if="2 == currentIndex">
        <div class="work_mobile_personalcenter_11_book-list_service">
          <van-loading color="black" v-if="isLoading"/>
          <ul class="work_mobile_personalcenter_11_book-list_service_ul">
            <li class="work_mobile_personalcenter_11_book-list_service_li" v-for="(book, index) in boughtBooksList" :key="index" v-if="boughtBooksList && boughtBooksList.length > 0">
              <div class="work_mobile_personalcenter_11_book-list_service_li_serviceTitle">
                {{display.serviceTitle || '标题：'}}
                <span v-text="book.productName"></span>
              </div>
              <div class="work_mobile_personalcenter_11_book-list_service_li_outer-content-box">
                <div class="work_mobile_personalcenter_11_book-list_service_li_img-box">
                  <img class="work_mobile_personalcenter_11_book-list_service_li_img-box_img" :src="book.midPic" :alt="display.noPicture || '暂无图片'" />
                </div>
                <div class="work_mobile_personalcenter_11_book-list_service_li_content-box">
                  <div class="work_mobile_personalcenter_11_book-list_service_li_content-box_author">{{display.author || '作者：'}}
                    <span v-text="book.productName"></span>
                  </div>
                  <div class="work_mobile_personalcenter_11_book-list_service_li_content-box_sourceForm">{{display.sourceForm || '资源来源：'}}
                    <span v-text="book.author"></span>
                  </div>
                  <div class="work_mobile_personalcenter_11_book-list_service_li_content-box_publicTime">{{display.publicTime || '出版时间：'}}
                    <span v-text="book.author"></span>
                  </div>
                  <div class="work_mobile_personalcenter_11_book-list_service_li_content-box_sourceType">{{display.sourceType || '来源类型：'}}
                    <span v-text="book.author"></span>
                  </div>
                </div>
              </div>

            </li>
          </ul>
          <span v-if="isHasService">{{display.noData[currentIndex]}}</span>
        </div>
      </div>
    </div>
</template>

<script>
import { Post, Get, mobileLoading } from "@common";
import { mapGetters } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import PROJECT_CONFIG from 'projectConfig';
import { Loading } from 'vant';
import Vue from "vue";
Vue.use(Loading);

export default {
    name: "work_mobile_personalcenter_11",
    props: ['namespace'],
    reused: true,
  data () {
      return {
        CONFIG: null,
        display: '',  //用于显示静态文字
        pageIndex: "1",  // 页码 从 1 开始
        pageSize: "15",  // 每页显示个数
        totalCount: '0', // 订单总个数
        totalPages: '0', // 订单总页数
        boughtBooksList: [],  //已购图书列表
        tabsList: [],   //选项卡列表
        loginName: '',
        currentIndex: '0',
        tab: {
          type: '2',
          status: '3'
        },
        selected: '1',
        options: [],
        isLoading: 'false',
        isHasBook: false,
        isHasPeriodical: false,
        isHasService: false
      }
    },
  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },
  created () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].work_mobile_personalcenter.work_mobile_personalcenter_11;
      this.display = this.CONFIG.display;
      this.tabsList = this.display.tabsList;
      this.options = this.display.options;
    },
  mounted () {
    this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.display.navTitle);
      /*检测滚动条*/
      $(window).scroll(() => {
        /**
         * function 下拉底部加载
         * params1: vue对象
         * params2: 回调方法
         */
        mobileLoading(this, 'queryMyBoughtBooks');
      });
    },
    methods: {
    //tab切换
    changeTab (tab, index) {
        this.tab = tab;
        //切换时需要重置pageIndex和pageSize
        this.pageIndex = this.CONFIG.getBoughtBooks.params.pageIndex;
        this.pageSize = this.CONFIG.getBoughtBooks.params.pageSize;
        //切换tab
        this.currentIndex = index;
        //因为数组是拼接的，所以获取数据前先清空数据列表
        this.boughtBooksList = [];
        //获取数据
        switch (index) {
          case 0: this.queryMyBoughtBooks(this.loginName, this.tab); break;  //去调图书接口
          case 1: console.log('去调期刊接口'); break;  //去调期刊接口
          case 2: window.open(this.CONFIG.toKnowledgeService); break;  //去知识服务外链
        }

      },
    initData (loginName) {
        this.pageIndex = this.CONFIG.getBoughtBooks.params.pageIndex;
        this.pageSize = this.CONFIG.getBoughtBooks.params.pageSize;
      let params = Object.assign({}, this.CONFIG.getBoughtBooks.params);
        //将需要变化的参数传进来
        // params.type = type;
        // params.status = status;
        this.tab.type = params.type;
        this.tab.status = params.status;
        this.queryMyBoughtBooks(loginName, this.tab);  //页面初始化获取已购买图书的全部数据
      },
    queryMyBoughtBooks (loginName, tab) {
      this.isLoading = true;
      this.isHasBook = false;
      this.isHasPeriodical = false;
      this.isHasService = false;
      let params = Object.assign({}, this.CONFIG.getBoughtBooks.params);
      Get(CONFIG.BASE_URL + this.CONFIG.getBoughtBooks.url + '?loginName=' + (loginName ? loginName : this.member.loginName) + '&pageIndex=' + this.pageIndex + '&pageSize=' + this.pageSize + '&type=' + (tab ? tab.type : this.tab.type) + '&siteId=' + CONFIG.SITE_CONFIG.siteId + '&productType=' + params.productType + '&status=' + (tab ? tab.status : this.tab.status)).then((resp) => {
          let res = resp.data;
          this.isLoading = false;
          if (res.result == '1' && res.data.length > 0) {
              this.boughtBooksList = this.boughtBooksList.concat(res.data);
              this.totalCount = res.totalCount;
              this.totalPages = res.totalPages;
          }else{
            this.isHasBook = true;
            this.isHasPeriodical = true;
            this.isHasService = true;
          }
        })
      },
      // contentType //内容类型 91纸质书 94电子书 PORTAL_WORKS:作品
      toBookPage(book) {
        if(book.contentType==='91'){
          var url= (this.CONFIG.toDetailUrl ? this.CONFIG.toDetailUrl : './bookdetail.html') + '?pubId=' + book.pubId;
        }else if(book.contentType==='94'){
          let params = Object.assign({},this.CONFIG.toProbationParams) ;
          var url=CONFIG.READ_URL + '?bookId=' + book.resourceId + '&readType=' + (params.readType ? params.readType : '0') + '&bookName=' + book.resourceName + '&userName=&siteType=' + (params.siteType ? params.siteType : '1'); 
        }
          window.open(url, '_self');
      }
    },
    watch: {
      member: function (newValue, oldValue) {
        if (newValue.loginName && newValue.loginName != oldValue.loginName) {
          this.initData(newValue.loginName); // 初始化数据之后再执行查询已购图书的方法
          this.loginName = newValue.loginName;
        }
      }
    }

}




</script>

<style scoped>
.isActive {
    color: #1b6d85;
    background-color: #cccccc;
}
.work_mobile_personalcenter_11_tabs {
    overflow: hidden;
}
.work_mobile_personalcenter_11_select {
  text-align: right;
  padding-right: 20px;
}
.work_mobile_personalcenter_11_book-list_ul {
  padding: 20px;
  overflow: hidden;
}
.work_mobile_personalcenter_11_tabs_li {
    float: left;
    width: 100px;
    height: 30px;
    line-height: 30px;
    margin: 10px;
    text-align: center;
}
.work_mobile_personalcenter_11 {
    font-size: 14px;
}
.work_mobile_personalcenter_11_book-list_li_one {
  min-height: 100px;
  width: 50%;
  float: left;
}
.work_mobile_personalcenter_11_book-list_li_two {
  height: 100px;
  width: 100%;
}
.work_mobile_personalcenter_11_book-list_li_img-box {
  width: 30%;
  float: left;
}
.work_mobile_personalcenter_11_book-list_li_content-box {
  width: 70%;
  float: right;
}
</style>
