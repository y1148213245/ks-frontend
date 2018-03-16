<!--  -->
<template>
 <div class="col-md-4 norightpadding">
    <div class="news-related">
      <header  class="title-block">
        <h4>相关资讯</h4>
      </header>
        <div class="news-thumb" v-for="relateNew in relateNews" v-if="relateNews" :key="relateNew.id">
          <a @click="toDetail(relateNew.id)"><img onload="DrawImage(this,210,100)" :src="relateNew.picSmall"></a>
          <div class="heading-block">
            <h5><a @click="toDetail(relateNew.id)" class="scoped_text" :title="relateNew.resourceName">{{relateNew.resourceName || ''}}</a></h5>
            <span v-if="relateNew.pubTime">{{relateNew.pubTime.time | formatDate}}</span>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Get } from "@common";
export default {
  name: 'work_list_pic_20',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      CONFIG: null,
      relateNews: [],
      pubId: '',
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.loadData()
  },

  mounted () { },

  methods: {
    initConfig () {
      let CONFIG = PROJECT_CONFIG[this.namespace].list_pic.work_list_pic_20;
      this.CONFIG = JSON.parse(JSON.stringify(CONFIG));
      this.pubId = URL.parse(document.URL, true).query.pubId;
    },
    loadData () {
      let _this = this;
      let url = this.CONFIG.url + this.pubId;
      Get(url).then(function (response) {

        _this.relateNews = response.data.data.result;
      })
    },
    toDetail(id){
      window.location.href = this.CONFIG.toDetailUrl + id;
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
<style scoped>
.scoped_text {
  display: inline-block;
  max-width: 135px;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}
</style>
