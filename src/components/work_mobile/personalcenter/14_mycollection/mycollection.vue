<template>
  <div class="work_mobile_personalcenter_14">
    <van-tabs v-model="active" @click="clickTab">
      <van-tab v-for="(tabtitle,index) in tabtitle" :title="tabtitle.title" :key="index">
        <div class="work_mobile_personalcenter_14_content">
          <div class="work_mobile_personalcenter_14_all_cancel">
            <a href="#" class="work_mobile_personalcenter_14_all_cancel_btn">{{display.allCancelCollection}}</a>
          </div>
          <div class="work_mobile_personalcenter_14_content_lists">

            <van-checkbox-group v-model="result">
              <van-checkbox v-for="(item , index) in collectionlist" :key="index" :name="item">
                <!-- 图书 -->
                <div v-if="tabtitle.index ==0" class="work_mobile_personalcenter_14_content_lists_list">
                  <img src="" alt="" class="work_mobile_personalcenter_14_content_lists_list_img">
                  <span class="work_mobile_personalcenter_14_content_lists_list_title">{{item.productName}}</span>
                  <span class="work_mobile_personalcenter_14_content_lists_list_author">{{item.author | formatAuthor }}</span>
                  <sapn class="work_mobile_personalcenter_14_content_lists_list_serial_number">ISBN:{{item.isbn}}</sapn>
                  <span class="work_mobile_personalcenter_14_content_lists_list_price">{{item.memberPrice | formatPriceNew }}</span>
                  <button class="work_mobile_personalcenter_14_content_lists_list_cancel_btn" @click="cancelCollection(loginName,item.pubId)">{{display.cancelCollection}}</button>
                </div>
                <!-- 期刊 -->
                <div v-else-if="tabtitle.index ==1" class="work_mobile_personalcenter_14_content_lists_list">
                  <img src="" alt="" class="work_mobile_personalcenter_14_content_lists_list_img">
                  <span class="work_mobile_personalcenter_14_content_lists_list_title">{{item.productName}}</span>n>
                  <span class="work_mobile_personalcenter_14_content_lists_list_author">{{item.author | formatAuthor }}</span>
                  <button class="work_mobile_personalcenter_14_content_lists_list_cancel_btn" @click="cancelCollection(loginName,item.pubId)">{{display.cancelCollection}}</button>
                </div>
                <!-- 知识服务 -->
                <div v-else class="work_mobile_personalcenter_14_content_lists_list">
                  <img src="" alt="" class="work_mobile_personalcenter_14_content_lists_list_img">
                  <span class="work_mobile_personalcenter_14_content_lists_list_title">{{item.productName}}</span>
                  <span class="work_mobile_personalcenter_14_content_lists_list_author">{{display.author}}:{{item.author | formatAuthor}}</span>
                  <span class="work_mobile_personalcenter_14_content_lists_list_source">{{display.source}}:{{item.resourceName}}</span>
                  <span class="work_mobile_personalcenter_14_content_lists_list_publication_date">{{display.publicationDate}}:{{item.pubTime | formatDateNEW }}</span>
                  <button class="work_mobile_personalcenter_14_content_lists_list_cancel_btn" @click="cancelCollection(loginName,item.pubId)">{{display.cancelCollection}}</button>
                </div>
              </van-checkbox>
            </van-checkbox-group>
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
      loginName: '',   //登录名
      result: [],
      active: 0,
      tabtitle: [],
      pubIds: []
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
    this.tabtitle = this.display.tabTitle;

  },

  mounted () {
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
    },
    initData (loginName, index) { // 初始化数据
      this.pageSize = this.COLLECTIONCONFIG.params.pageSize;
      this.pageIndex = this.COLLECTIONCONFIG.params.pageIndex;
      this.queryCollectionList(loginName, index); // 获取我的收藏
    },

    //获取我的书架(我的收藏)的数据
    queryCollectionList (loginName, index) {
      let obj = this;
      let params = Object.assign({}, obj.COLLECTIONCONFIG.params);
      //三个tab三个不同的index，三个不同的contentType
      if (index == 0) {
        params.contentType = '94'
      } else if (index == 1) {
        //TODO 暂时不知道期刊和知识服务的contentType
        params.contentType = ''
      } else {
        params.contentType = ''
      }
      //获取收藏列表
      let BASE_URL = CONFIG.BASE_URL + this.COLLECTIONCONFIG.url + '?loginName=' + (loginName ? loginName : this.member.loginName) + '&pageIndex=' + this.pageIndex + '&pageSize=' + this.pageSize + '&siteId=' + CONFIG.SITE_CONFIG.siteId + '&contentType=' + params.contentType;
      Get(BASE_URL).then((resp) => {
        let res = resp.data;
        if (res.result == '1' && res.data.length > 0) {
          obj.collectionlist = obj.collectionlist.concat(res.data);
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
      })
    },

    //全部取消
    allCancelCollection (loginName) {
      if (this.collectionlist) {
        for (var i = 0; i < this.collectionlist.length; i++) {
          this.pubIds.push(this.collectionlist.pubId);
        }
      };
      this.cancelCollection(loginName, this.pubIds.join(","));
    },
    //去详情页
    toDetailsPage () {
      //TODO 暂时不知道详情页的地址以及需要传的参数
      let url = this.CONFIG.toDetailsPage;
      window.open(url)
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

