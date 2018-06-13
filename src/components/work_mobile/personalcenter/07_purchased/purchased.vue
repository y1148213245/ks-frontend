<template>
    <div class="work_mobile_personalcenter_07">
      <div class="work_mobile_personalcenter_07_tabs">
        <ul class="work_mobile_personalcenter_07_tabs_ul">
          <li
            class="work_mobile_personalcenter_07_tabs_li"
            v-for="(tab,index) in tabsList"
            :class="[index == currentIndex ? 'isActive' : '']"
            @click="changeTab(tab,index)"
          >
            {{tab.title}}
          </li>
        </ul>
      </div>
      <div class="work_mobile_personalcenter_07_book-list">
        <ul class="work_mobile_personalcenter_07_book-list_ul">
          <li class="work_mobile_personalcenter_07_book-list_li" v-for="book in boughtBooksList">
            <div class="work_mobile_personalcenter_07_book-list_li_img-box">
              <img class="work_mobile_personalcenter_07_book-list_li_img-box_img" :src="book.midPic" :alt="display.noPicture || '暂无图片'"/>
            </div>
            <div class="work_mobile_personalcenter_07_book-list_li_content-box">
              <div class="work_mobile_personalcenter_07_book-list_li_content-box_bookName">{{display.bookName}}<span v-text="book.productName"></span></div>
              <div class="work_mobile_personalcenter_07_book-list_li_content-box_author">{{display.author}}<span v-text="book.author"></span></div>
              <div class="work_mobile_personalcenter_07_book-list_li_content-box_button">
                <button v-if="book.isAddShelf == '1'" v-text="display.startRead"></button>
                <button v-if="book.isAddShelf == '0'" v-text="display.addBookshelf"></button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import { Get, mobileLoading } from "@common";
  import { mapGetters } from 'vuex';
  import * as interfaces from "@work/login/common/interfaces.js";
  import PROJECT_CONFIG from 'projectConfig';

  export default {
    name: "work_mobile_personalcenter_07",
    props: ['namespace'],
    reused: true,
    data(){
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
        currentIndex: '',
        tab: {
          type: '2',
          status: '3'
        }
      }
    },
    computed: {
      ...mapGetters("login", {
        member: interfaces.GET_MEMBER
      }),
    },
    created(){
      this.CONFIG = PROJECT_CONFIG[this.namespace].work_mobile_personalcenter.work_mobile_personalcenter_07;
      this.display = this.CONFIG.display;
      this.tabsList = this.display.tabsList;
    },
    mounted(){
      this.$bus.$emit(this.CONFIG.emitEvent.contextEventName,this.display.navTitle);
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
      changeTab(tab,index){
        this.tab = tab;
        //切换时需要重置pageIndex和pageSize
        this.pageIndex = this.CONFIG.getBoughtBooks.params.pageIndex;
        this.pageSize = this.CONFIG.getBoughtBooks.params.pageSize;
        //切换tab
        this.currentIndex = index;
        //因为数组是拼接的，所以获取数据前先清空数据列表
        this.boughtBooksList = [];
        //获取数据
        this.queryMyBoughtBooks(this.loginName, this.tab);
      },
      initData(loginName){
        this.pageIndex = this.CONFIG.getBoughtBooks.params.pageIndex;
        this.pageSize = this.CONFIG.getBoughtBooks.params.pageSize;
        let params = Object.assign({},this.CONFIG.getBoughtBooks.params);
        //将需要变化的参数传进来
        // params.type = type;
        // params.status = status;
        this.tab.type = params.type;
        this.tab.status = params.status;
        this.queryMyBoughtBooks(loginName, this.tab);  //页面初始化获取已购买图书的全部数据
      },
      queryMyBoughtBooks(loginName, tab){
        let params = Object.assign({},this.CONFIG.getBoughtBooks.params);
        Get(CONFIG.BASE_URL + this.CONFIG.getBoughtBooks.url + '?loginName=' + (loginName ? loginName : this.member.loginName) + '&pageIndex=' + this.pageIndex + '&pageSize=' + this.pageSize + '&type=' + (tab ? tab.type : this.tab.type) + '&siteId=' + params.siteId + '&productType=' + params.productType + '&status=' + (tab ? tab.status : this.tab.status)).then((resp)=>{
          let res = resp.data;
          if(res.result == '1' && res.data.length > 0){
            this.boughtBooksList = this.boughtBooksList.concat(res.data);
            this.totalCount = res.totalCount;
            this.totalPages = res.totalPages;
          }
          console.log(this.boughtBooksList);
        })
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
  .work_mobile_personalcenter_07_tabs {
    overflow: hidden;
  }
  .work_mobile_personalcenter_07_tabs_li {
    float: left;
    width: 100px;
    height: 30px;
    line-height: 30px;
    margin: 10px;
    text-align: center;
  }
  .work_mobile_personalcenter_07 {
    font-size: 14px;
  }
  .work_mobile_personalcenter_07_book-list_li {
    height: 800px;
    width: 100%;
  }
  .work_mobile_personalcenter_07_book-list_li_img-box {
    width: 30%;
    float: left;
  }
  .work_mobile_personalcenter_07_book-list_li_content-box {
    width: 70%;
    float: right;
  }
</style>
