<!--  -->
<template>
 <!--新闻中心-->
  <div class="work_informationdetail_01">
    <h3 style="text-align: center;" v-if="keys.information_SYS_TOPIC" v-text="newsDetailInfo[keys.information_SYS_TOPIC]"></h3>
    <!--<h1>{{newsDetailInfo.resourceName}}</h1>-->
    <!--<span>{{newsDetailInfo.information_a_pubTime | formatDate}}</span>-->
    <div style="text-align: center;">
      <span v-if="keys.information_SYS_AUTHORS"><span v-if="keys.show_key">作者：</span>{{newsDetailInfo[keys.information_SYS_AUTHORS]}}</span>
      <span style="margin-left: 16px;" v-if="keys.information_a_pubTime"><span v-if="keys.show_key">创建日期：</span>{{newsDetailInfo[keys.information_a_pubTime] | formatTime}}</span>
      <span style="margin-left: 16px;" v-if="keys.information_a_source">来源：{{newsDetailInfo[keys.information_a_source]}}</span>
      <a style="margin-left: 16px;" v-if="keys.information_collect" href="javascript:;" @click="addCollect()">收藏</a>
      <a href="http://www.jiathis.com/share" style="margin-left: 16px;" v-if="keys.information_share"
         class="search_04-content-list-entry_box-orthers-share" target="_blank">分享</a>
    </div>
    <div class="abstract" v-if="keys.information_a_abstract">
      <span>摘要：</span>
      <span :title="newsDetailInfo[keys.information_a_abstract]" v-text="newsDetailInfo[keys.information_a_abstract] || '暂无摘要'"></span>
    </div>
    <br/>
    <!-- <img style="max-width: 100%;" :src="newsDetailInfo.pub_picBig"> -->
    <br/>
    <p class="html-feild" v-html="newsDetailInfo[keys.information_a_content]" v-if="keys.information_a_content"></p>
    <div class="download">
      <span>稿件下载：</span>
      <span v-if="keys.information_a_abstract"  v-text="newsDetailInfo[keys.information_a_abstract] || '暂无摘要'" :title="newsDetailInfo[keys.information_a_abstract]"></span>
    </div>
  </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Get , Post} from "@common";

export default {
  name: 'work_informationdetail_01',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      newsDetailInfo: {},
      projectConfig: null,
      pubId: '',
      keys:null,
      collectOrLikeConfig:null,
    };
  },

  computed: {},

  created () {
    this.initConfig();
  },

  mounted () {
    let urlQuery=URL.parse(document.URL, true).query;
    this.pubId = urlQuery.pubId;
    this.loadData();
  },
  methods: {
    initConfig () {
      let projectConfig = PROJECT_CONFIG[this.namespace].informationDetail.work_informationdetail_01;
      this.projectConfig = JSON.parse(JSON.stringify(projectConfig));
      this.collectOrLikeConfig=this.projectConfig.collectOrLike;
      this.keys = this.projectConfig.keys;
    },
    loadData () {
      let _this = this;
      let param=Object.assign({},this.projectConfig.params,{
        pubId:this.pubId,
      });
      Get(this.projectConfig.url,{"params":param}).then(function (resp) {
        _this.newsDetailInfo = resp.data.data
      })
    },
    addCollect(){
      let param=Object.assign({},this.collectOrLikeConfig,{
        pubId:this.pubId,
        siteId:SITE_CONFIG.siteId
      });
      Post(this.collectOrLikeConfig.url,param).then((rep)=>{
        alert("收藏成功");
      })
    }
  },
  filters: {
    formatDate: function (time) {
      if (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd')
      } else {
        return ''
      }
      function formatDate (date, fmt) {
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        let o = {
          'M+': date.getMonth() + 1,
          'd+': date.getDate(),
          'h+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds()
        }
        for (let k in o) {
          if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
          }
        }
        return fmt
      }
      function padLeftZero (str) {
        return ('00' + str).substr(str.length)
      }
    }
  }
}

</script>
<style>
  .work_informationdetail_01{
    min-height: 600px;
  }
  .work_informationdetail_01 .html-feild{
    position: relative;
  }
</style>
