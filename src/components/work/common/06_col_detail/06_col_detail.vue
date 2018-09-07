<!-- 栏目详情 -->
<template>
<div class="work_common_06">
  <template v-if="CONFIG && CONFIG.showLang && CONFIG.showLang ==='Korean'">
    <h1 v-if="CONFIG.showItem.indexOf('title') != -1" class="ui_pic_list_21-h1 work_common_06_h1" :style="{backgroundImage:'url('+ (CONFIG.getColDetail.keys.pic ? colDetail[CONFIG.getColDetail.keys.pic] : colDetail.big_pic) +')',backgroundPosition:'center center'}" v-text="colDetail[CONFIG.getColDetail.keys.code]"></h1>
  </template>
  <template v-else>
    <h1 v-if="CONFIG.showItem.indexOf('title') != -1" class="ui_pic_list_21-h1 work_common_06_h1" :style="{backgroundImage:'url('+ (CONFIG.getColDetail.keys.pic ? colDetail[CONFIG.getColDetail.keys.pic] : colDetail.big_pic) +')',backgroundPosition:'center center'}" v-text="colDetail[CONFIG.getColDetail.keys.name]"></h1>
  </template>
</div>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'
export default {
  name: 'work_common_06',
  reused: true,
  props: {
    namespace: String,
    modulename: String
  },
  data () {
    return {
      CONFIG: null,
      colDetail:''
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.getColDetail();
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].common.work_common_06[this.modulename]
    },
    getColDetail () {
      let getCol = this.CONFIG.getColDetail;
      let query = URL.parse(document.URL, true).query;
      let url =  this.CONFIG.getColDetail.url + '?';
      for (const key in getCol.params) {
          const element = getCol.params[key];
          url += key + '=' + query[element] + '&'
      }
      url = url.slice(0,url.length-1);
      Post(CONFIG.BASE_URL + url).then(resp => {
        this.colDetail = resp.data.data;
      })
    }
  }
}
</script>
<style>
</style>
