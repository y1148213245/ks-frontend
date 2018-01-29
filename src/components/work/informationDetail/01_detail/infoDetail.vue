<!--  -->
<template>
 <!--新闻中心-->
  <div>
    <h3 style="text-align: center;" v-text="newsDetailInfo.information_SYS_TOPIC"></h3>
    <!--<h1>{{newsDetailInfo.resourceName}}</h1>-->
    <!--<span>{{newsDetailInfo.information_a_pubTime | formatDate}}</span>-->
    <div style="text-align: center;">
      <span>作者：{{newsDetailInfo.information_SYS_AUTHORS}}</span>
      <span style="margin-left: 16px;">创建日期：{{newsDetailInfo.information_a_pubTime | formatDate}}</span>
      <span style="margin-left: 16px;">来源：{{newsDetailInfo.information_a_source}}</span>
    </div>
    <div class="abstract">
      <span>摘要：</span>
      <span v-text="newsDetailInfo.information_a_abstract || '暂无摘要'" :title="newsDetailInfo.information_a_abstract"></span>
    </div>
    <br/>
    <!-- <img style="max-width: 100%;" :src="newsDetailInfo.pub_picBig"> -->
    <br/>
    <p class="html-feild" v-html="newsDetailInfo.information_a_content"></p>
  </div>

</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Get } from "@common";

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
    };
  },

  computed: {},

  created () {
    this.initConfig();
  },

  mounted () {
    this.loadData();
  },

  methods: {
    initConfig () {
      let projectConfig = PROJECT_CONFIG[this.namespace].informationDetail.work_informationdetail_01;
      this.projectConfig = JSON.parse(JSON.stringify(projectConfig));
      this.pubId = URL.parse(document.URL, true).query.pubId;
    },
    loadData () {
      let _this = this;
      let url = this.projectConfig.url + this.pubId + '&loginName=';
      Get(url).then(function (resp) {
        _this.newsDetailInfo = resp.data.data
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
.html-feild{
  position: relative;
}
</style>