<!--  -->
<template>
  <!--新闻中心-->
  <div class="work_informationdetail_01">
    <h3 style="text-align: center;" v-if="keys.information_SYS_TOPIC"
        v-text="newsDetailInfo[keys.information_SYS_TOPIC]"></h3>
    <!--<h1>{{newsDetailInfo.resourceName}}</h1>-->
    <!--<span>{{newsDetailInfo.information_a_pubTime | formatDate}}</span>-->
    <div style="text-align: center;">
      <span v-if="keys.information_SYS_AUTHORS"><span v-if="keys.show_key">作者：</span>{{newsDetailInfo[keys.information_SYS_AUTHORS]}}</span>
      <span style="margin-left: 16px;" v-if="keys.information_a_pubTime"><span v-if="keys.show_key">创建日期：</span>{{newsDetailInfo[keys.information_a_pubTime] | formatDate}}</span>
      <span style="margin-left: 16px;"
            v-if="keys.information_a_source">来源：{{newsDetailInfo[keys.information_a_source]}}</span>
      <a  style="margin-left: 16px;" v-if="keys.information_collect && CONFIG.showItem && CONFIG.showItem.indexOf('collect') > -1" href="javascript:;" @click="addCollect()">收藏</a>
      <a href="http://www.jiathis.com/share" style="margin-left: 16px;" v-if="keys.information_share"
         class="search_04-content-list-entry_box-others-share" target="_blank">分享</a>
    </div>
    <div class="abstract" v-if="keys.information_a_abstract">
      <span>摘要：</span>
      <span :title="newsDetailInfo[keys.information_a_abstract]"
            v-text="newsDetailInfo[keys.information_a_abstract] || '暂无摘要'"></span>
    </div>
    <br/>
    <!-- <img style="max-width: 100%;" :src="newsDetailInfo.pub_picBig"> -->
    <br/>
    <p class="html-feild" v-html="newsDetailInfo[keys.information_a_content]" v-if="keys.information_a_content"></p>
    <!-- 附件待开发 -->
    <div class="download" v-if="CONFIG.showItem && CONFIG.showItem.indexOf('attach') > -1 && newsDetailInfo[keys.pub_widget_url]" >
      <span>附件下载：</span>
      <ul>
        <li v-for="(url,index) in newsDetailInfo[keys.pub_widget_url]" :key="index"><a :href="url" download="attach" v-text="newsDetailInfo[keys.pub_widget_content][index]"></a></li>
      </ul>
      
    </div>
  </div>
</template>

<script>
  import URL from "url";
  import PROJECT_CONFIG from "projectConfig";
  import {Get, Post} from "@common";
  import moment from "moment";

  export default {
    name: 'work_informationdetail_01',
    reused: true,
    props: {
      namespace: String,
    },
    data() {
      return {
        newsDetailInfo: {},
        CONFIG: null,
        pubId: '',
        keys: null,
        collectOrLikeConfig: null,
      };
    },

    computed: {},

    created() {
      this.initConfig();
    },
    methods: {
      initConfig() {
        let CONFIG = PROJECT_CONFIG[this.namespace].informationDetail.work_informationdetail_01;
        this.CONFIG = JSON.parse(JSON.stringify(CONFIG));
        this.collectOrLikeConfig = this.CONFIG.collectOrLike;
        this.keys = this.CONFIG.keys;
        let urlQuery = URL.parse(document.URL, true).query;
        this.pubId = urlQuery.pubId;
        this.loadData();
      },
      loadData() {
        let _this = this;
        let param = Object.assign({}, this.CONFIG.params, {
          pubId: this.pubId,
        });
        Get(CONFIG.BASE_URL+this.CONFIG.url, {"params": param}).then(function (resp) {
          _this.newsDetailInfo = resp.data.data;
          _this.$bus.$emit(_this.CONFIG.event.detailReady,_this.newsDetailInfo)/* 抛出详情信息 */
        })
      },
      addCollect() {
        let param = Object.assign({}, this.collectOrLikeConfig, {
          pubId: this.pubId,
          siteId: CONFIG.SITE_CONFIG.siteId
        });
        Post(CONFIG.BASE_URL+this.collectOrLikeConfig.url, param).then((rep) => {
          alert("收藏成功");
        })
      }
    },
    filters: {
      formatDate: function (value) {
        if (value) {
          return moment(value).format("YYYY-MM-DD");
        }
      },
    }
  }

</script>
<style>
  .work_informationdetail_01 {
    min-height: 600px;
  }

  .work_informationdetail_01 .html-feild {
    position: relative;
  }
</style>
