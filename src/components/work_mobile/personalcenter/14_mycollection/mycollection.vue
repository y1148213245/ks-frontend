<template>
  <div class="work_mobile_personalcenter_14">
    <van-tabs v-model="active" @click="clickTab">
      <van-tab v-for="(tabtitle,index) in tabtitleList" :title="tabtitle.title" :key="index">
        <div class="work_mobile_personalcenter_14_content">
            <div class="work_mobile_personalcenter_14_all_cancel">
              <button class="work_mobile_personalcenter_14_all_cancel_btn" @click="batchCancelCollection(loginName)">{{display.allCancelCollection}}</button>
              <el-checkbox class="work_mobile_personalcenter_14_all_select" v-model="selectAll" @change="selectAllFunc">{{getStaticText('selectAll') ? getStaticText('selectAll') : '全选'}}</el-checkbox>
            </div>
          <div class="work_mobile_personalcenter_14_content_lists">
            <div v-for="(item , index) in collectionlist" :key="index" :name="item.pubId">
                <!-- 图书 || 电子书-->
                <div v-if="tabtitle.index ==0 || tabtitle.index ==1" class="work_mobile_personalcenter_14_content_lists_list">
                    <div class="work_mobile_personalcenter_14_content_lists_list_check">
                      <el-checkbox v-model="item.checked" @change="selectProduct"></el-checkbox>
                    </div>
                    <img :src="item.midPic" :alt="item.productName" class="work_mobile_personalcenter_14_content_lists_list_img" @click.self="toDetailsPage(item)">
                    <span class="work_mobile_personalcenter_14_content_lists_list_title" @click.self="toDetailsPage(item)">{{item.productName}}</span>
                    <span class="work_mobile_personalcenter_14_content_lists_list_author">{{item.author | formatAuthor }}</span>
                    <span class="work_mobile_personalcenter_14_content_lists_list_serial_number">{{display.isbn}}{{item.isbn}}</span>
                    <span class="work_mobile_personalcenter_14_content_lists_list_price">{{item.memberPrice | formatPriceNew }}</span>
                  <button class="work_mobile_personalcenter_14_content_lists_list_cancel_btn" @click="cancelCollection(loginName,item.pubId)">{{display.cancelCollection}}</button>
                </div>
                <!-- 期刊 -->
                <div v-else-if="tabtitle.index ==2" class="work_mobile_personalcenter_14_content_lists_list">
                  <div class="work_mobile_personalcenter_14_content_lists_list_check">
                    <el-checkbox v-model="item.checked" @change="selectProduct"></el-checkbox>
                  </div>
                  <img :src="item.midPic" :alt="item.productName" class="work_mobile_personalcenter_14_content_lists_list_img" @click.self="toPeriodicalDetailsPage(item)">
                  <span class="work_mobile_personalcenter_14_content_lists_list_title" @click.self="toPeriodicalDetailsPage(item)">{{item.productName}}</span>
                  <span class="work_mobile_personalcenter_14_content_lists_list_author">{{item.author | formatAuthor }}</span>
                  <button class="work_mobile_personalcenter_14_content_lists_list_cancel_btn" @click="cancelCollection(loginName,item.pubId)">{{display.cancelCollection}}</button>
                </div>
                <!-- 知识服务 -->
                <div v-else class="work_mobile_personalcenter_14_content_lists_list">
                  <div class="work_mobile_personalcenter_14_content_lists_list_check">
                    <el-checkbox v-model="item.checked" @change="selectProduct"></el-checkbox>
                  </div>
                  <img :src="item.midPic" :alt="item.productName" class="work_mobile_personalcenter_14_content_lists_list_img" @click.self="toDetailsPage(item)">
                  <span class="work_mobile_personalcenter_14_content_lists_list_title" @click.self="toDetailsPage(item)">{{item.productName}}</span>
                  <span class="work_mobile_personalcenter_14_content_lists_list_author">{{display.author}}:{{item.author | formatAuthor}}</span>
                  <span class="work_mobile_personalcenter_14_content_lists_list_source">{{display.source}}:{{item.resourceName}}</span>
                  <span class="work_mobile_personalcenter_14_content_lists_list_publication_date">{{display.publicationDate}}:{{item.pubTime | formatDateNEW }}</span>
                  <button class="work_mobile_personalcenter_14_content_lists_list_cancel_btn" @click="cancelCollection(loginName,item.pubId)">{{display.cancelCollection}}</button>
                </div>
              </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Get, Delete, mobileLoading, getFieldAdapter, toOtherPage } from "@common";
import { mapGetters } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import PROJECT_CONFIG from 'projectConfig';
import { Tab, Tabs, Checkbox, CheckboxGroup, Toast } from 'vant';

Vue.use(Tab).use(Tabs);
Vue.use(Checkbox).use(CheckboxGroup);


export default {
  name: 'work_mobile_personalcenter_14',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      collectionlist: [],
      display: '',
      pageIndex: "1",  // 页码 从 1 开始
      pageSize: "15",  // 每页显示个数
      totalPages: "0", // 订单总页数
      loginName: '',   //登录名
      result: [],  //批量取消存放的pubid
      active: 0,
      tabtitleList: [],
      selectAll:false
    }
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].work_mobile_personalcenter.work_mobile_personalcenter_14;
    this.COLLECTIONCONFIG = this.CONFIG.getCollectList;
    this.CANCELCONFIG = this.CONFIG.cancelCollect;
    this.display = this.CONFIG.display;
    this.tabtitleList = this.display.tabTitle;
  },

  mounted () {
    //发广播
    this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.display.navTitle);
    /*检测滚动条*/
    $(window).scroll(() => {
      /**
       * function 下拉底部加载
       * params1: vue对象
       * params2: 回调方法
       */
      mobileLoading(this, 'queryCollectionList');
    });
  },
  methods: {
    clickTab (index, title) {
      this.collectionlist = [];
      this.initData(this.loginName, index)
      this.selectAll = false;
    },
    initData (loginName, index) { // 初始化数据
      this.pageSize = this.COLLECTIONCONFIG.params.pageSize;
      this.pageIndex = this.COLLECTIONCONFIG.params.pageIndex;
      this.queryCollectionList(loginName, index); // 获取我的收藏
    },

    //获取我的书架(我的收藏)的数据
    queryCollectionList (loginName, ind) {
      let index = ind ? ind : this.active; // 兼容下拉的时候没有传ind值
      let obj = this;
      let params = Object.assign({}, obj.COLLECTIONCONFIG.params);
      //三个tab三个不同的index，三个不同的contentType
      if (index == 0) {
        params.contentType = this.CONFIG.bookType ? this.CONFIG.bookType : "91";  // 纸质书
      } else if (index == 1) {
        params.contentType = this.CONFIG.ebookType ? this.CONFIG.ebookType : "94";  // 电子书
      } else if (index == 2) {
        params.contentType = this.CONFIG.magazineType ? this.CONFIG.magazineType : "149";  // 期刊
      } else {
        //TODO 知识服务暂时写成外链
        window.open(this.CONFIG.toKnowledgeService);
        return false;
      }
      //获取收藏列表
      let BASE_URL = CONFIG.BASE_URL + this.COLLECTIONCONFIG.url + '?loginName=' + (loginName ? loginName : this.member.loginName) + '&pageIndex=' + this.pageIndex + '&pageSize=' + this.pageSize + '&siteId=' + CONFIG.SITE_CONFIG.siteId + '&contentType=' + params.contentType;
      Get(BASE_URL).then((resp) => {
        let res = resp.data;
        if (res.result == '1' && res.data.length > 0) {
          res.data.forEach(element =>{
            element.checked = false;
          })
          obj.collectionlist = obj.collectionlist.concat(res.data);
          obj.totalPages = res.totalPages;
        } else if (res.result == '0') {
          Toast.fail({
            duration: 1000,
            message: res.error.errorMsg
          });

        }
      })
    },
    //取消收藏
    cancelCollection (loginName, pubId) {
      //为空就停啦
      if(pubId==''){
        Toast.fail({
          duration: 1000,
          message: this.display.noSelect?this.display.noSelect:"NO SELECT"
        })
        return false;
      }
      //TODO DELETE请求方式中的pubId/pubIds目前是写死的
      let BASE_URL = CONFIG.BASE_URL + this.CANCELCONFIG.url + '?loginName=' + (loginName ? loginName : this.member.loginName) + '&siteId=' + CONFIG.SITE_CONFIG.siteId + '&pubIds=' + pubId;

      Get(BASE_URL).then((resp) => {  //取消收藏
        let res = resp.data;
        if (res.result == "0") {
          Toast.fail({
            duration: 1000,
            message: res.error.errorMsg
          })
        } else {
          Toast.success({
            duration: 1000,
            message: res.data.msg
          });
          this.collectionlist = [];
          this.initData(this.loginName, '');
        }
        // 搞完了之后重置
        this.result = [];
      })
    },

    //批量取消
    batchCancelCollection (loginName) {
      let _self = this;
      this.collectionlist.forEach(element => {
        if(element.checked){
          if(_self.result.indexOf(element.pubId)<0){
            _self.result.push(element.pubId)
          }
        }
      });
      if (this.result) {
        this.cancelCollection(loginName, this.result.join(","));
      }
    },
    selectProduct(val) {
      for(let i = 0,len = this.collectionlist.length;i < len;i ++){
        if(!this.collectionlist[i].checked){
          this.selectAll = false;
          return false;
        }
      }
      this.selectAll = true;
    },
    selectAllFunc(val){
      this.collectionlist.map((item,i)=>{
        item.checked = val;
      })
    },
    //去期刊详情页
    toPeriodicalDetailsPage (item) {
      window.location.href = this.CONFIG.toPeriodicalDetailsPageUrl ? this.CONFIG.toPeriodicalDetailsPageUrl : './maginfo.html' + '?pubId=' + item.pubId;
    },
    //去详情页
    toDetailsPage (item) {
      window.location.href = this.CONFIG.toDetailUrl ? this.CONFIG.toDetailUrl : './bookdetail.html' + '?pubId=' + item.pubId;
    },
    getStaticText (text) {
      if (
        this.CONFIG &&
        this.CONFIG.staticText &&
        this.CONFIG.staticText[text]
      ) {
        return this.CONFIG.staticText[text];
      } else {
        return false;
      }
    }
  },
  watch: {
    member: function (newValue, oldValue) {
      if (newValue.loginName && newValue.loginName != oldValue.loginName) {
        this.initData(newValue.loginName, ''); // 初始化数据之后再调用获取收藏的方法
        this.loginName = newValue.loginName;
      }
    }
  }
}
</script>

<style>
.work_mobile_personalcenter_14 {
  font-size: 0.35rem;
  padding: 0.5rem;
}
</style>

