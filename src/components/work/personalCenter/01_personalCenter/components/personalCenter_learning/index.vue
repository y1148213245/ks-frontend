
<template>
  <section class="personal_center_learning">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(tab,index) in tabList" :key="index" :label="tab.label" :name="tab.productType">
            <ul class="personal_center_learning_resourcelists_ul" v-if="resourceLists && resourceLists.length > 0">
                <li class="personal_center_learning_resourcelists_li" v-for="(item, index) in resourceLists" :key="index">
                    <template v-for="(config, config_i) in resourceListsConfig.complicatedItem">
                        <!-- 需要特殊处理的复杂项 -->
                        <!-- img 图片 -->
                        <div :key="config_i" v-if="config.name == 'img'" class="ui_list_pic_29_resourcelists_li_imgcontainter" @click="toCustomFun(item, config)">
                        <label class="ui_list_pic_29_resourcelists_img_label">{{config.display}}</label>
                        <img class="ui_list_pic_29_resourcelists_li_img" v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}" :src=" item[keys[config.field]] || require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" @load="dealResourceImg($event)" />
                        </div>

                        <!-- 自定义事件按钮 包括（title 标题） -->
                        <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_list_pic_29_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(item, config, keys)">
                        <label class="ui_list_pic_29_resourcelists_btnlabel">{{config.display}}</label>
                        <span v-bind="{class: 'ui_list_pic_29_resourcelists__btncontainer_' + config.field}" v-if="keys[config.field]" v-html="item[keys[config.field]]"></span>
                        </span>

                        <!-- price 价格 -->
                        <span :key="config_i" v-else-if="config.name == 'price'" class="ui_list_pic_29_resourcelists_li_pricecontainter">
                        <label class="ui_list_pic_29_resourcelists_price_label">{{config.display}}</label>
                        <span v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}">{{formatPriceNew(item[keys[config.field]])}}</span>
                        </span>

                        <!-- time 时间 -->
                        <span :key="config_i" v-else-if="config.name == 'time'" class="ui_list_pic_29_resourcelists_li_timecontainter">
                        <label class="ui_list_pic_29_resourcelists_time_label">{{config.display}}</label>
                        <span v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}">{{formatDateNEW(item[keys[config.field]])}}</span>
                        </span>

                        <!-- 其他不需要特殊处理的简单项 -->
                        <span :key="config_i" v-else class="ui_list_pic_29_resourcelists_other">
                        <label class="ui_list_pic_29_resourcelists_li_label">{{config.display}}</label>
                        <span v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}">{{ item[keys[config.field]] }}</span>
                        </span>

                    </template>
                </li>
            </ul>

            <div class="personal_center_learning_resourcelists_nodata" v-if="resourceLists && resourceLists.length == 0">{{getStaticText('noData') ? getStaticText('noData') : '暂无数据'}}</div>

            <ui_pagination :pageMessage="{totalCount: totalCount - 0 || 0}" :pageSizes="pageSizes" :excuteFunction="paging"></ui_pagination>
        </el-tab-pane>
    </el-tabs>
  </section>
</template>
<script type="text/ecmascript-6">
import Vue from "vue";
import {
  Get,
  Post,
  DrawImage,
  getFieldAdapter,
  toOtherPage,
  mobileLoading
} from "@common";
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { mapGetters, mapActions } from "vuex";
import * as interfaces from "@work/login/common/interfaces.js";
export default {
  name: "learning",
  reused: true,
  props: ["namespace","parentConfig"],
  data () {
    return {
      CONFIG:'',
      activeName: '',  //默认展示音频
      tabList: [],          //tab列表
      resourceLists: [],     //资源列表
      resourceListsConfig: {},
      keys: {},
      loginName: '',   //登录名
      totalCount: '0',
      pageSizes: [],
      pageNo: "",
      pageSize: "",
      tabObj: {},  //将当前tab对象存起来
      
    };
  },
  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },
  created (){
    this.CONFIG = this.parentConfig.learning;
    this.resourceListsConfig = this.CONFIG.getResourceLists;
    this.keys = getFieldAdapter(this.CONFIG.sysAdapter, this.CONFIG.typeAdapter);
    this.tabList = this.CONFIG.tabListShow ? this.CONFIG.tabListShow : [];
    this.pageSizes  = this.CONFIG.pageSizes;
    this.activeName = this.CONFIG.defaultActive;
  },
  mounted(){
      this.queryBookList();
  },
  methods: {
    handleClick(tab) {
      this.tabObj = tab;
      this.queryBookList(tab.name);
    },
    getStaticText(text){
      if(this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
        return this.CONFIG.staticText[text]
      }else {
        return false
      }
    },
    queryBookList (productType = this.CONFIG.defaultActive) {  //如果不穿参数，则调取默认的
      let loading = this.$loading({ 
        fullscreen: true,
        text: this.getStaticText("loading") ? this.getStaticText("loading") : '正在加载中...'
      });
      let params = Object.assign({}, this.resourceListsConfig.params);
      params.pageNo = this.pageNo ? this.pageNo : params.pageNo;
      params.pageSize = this.pageSize ? this.pageSize : params.pageSize;

      params.productType = productType;
      let BASE_URL = CONFIG.BASE_URL + this.resourceListsConfig.url + '?loginName=' + (this.member.loginName ? this.member.loginName : this.loginName) + '&pageIndex=' + params.pageIndex + '&pageNo=' + params.pageNo + '&pageSize=' + params.pageSize + '&siteId=' + CONFIG.SITE_CONFIG.siteId;
      
      BASE_URL += '&type=' + params.type + '&productType=' + params.productType + '&status=' + params.status;
    
      Get(BASE_URL).then((resp) => {
        loading.close();
        let res = resp.data;
        if (res.result == '1' && res.data.length >= 0) {
          this.totalCount = res.totalCount;
          this.resourceLists = res.data;
        }else if (res.result == '0') {
          loading.close();
          this.$message({
            type: 'error',
            duration: 1000,
            message: res.error.errorMsg
          });
        }
      })
    },
    toCustomFun(item, config){
        window.open(
          toOtherPage(item, this.CONFIG[config.method], this.keys)
        );
    },
    paging: function ({ pageNo, pageSize }) {
      this.pageNo = pageNo;
      this.pageSize = pageSize;
      this.queryBookList(this.tabObj.name);
    }
  },
  watch: {
    member: function (newValue, oldValue) {
      if (newValue.loginName && newValue.loginName != oldValue.loginName) {
        this.loginName = newValue.loginName;
      }
    }
  }
};
</script>
<style scoped>

</style>
