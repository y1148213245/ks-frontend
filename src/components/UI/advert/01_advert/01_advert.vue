<!-- 随机广告图 -->
<template>
 <div class="ui_advert_01">
   <a :href="advert[keys.sourceLink] && advert[keys.sourceLink] || '#'"><img :src="advert[keys.pic] && advert[keys.pic]" alt="暂无图片"></a>
 </div>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'
export default {
  name: 'ui_advert_01',
  reused: true,
  props: {
    namespace: String,
    modulename: String
  },
  data () {
    return {
      CONFIG: null,
      advert: '',
      keys: null
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.loadData();
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].advert.ui_advert_01[this.modulename];
      this.keys = this.CONFIG.getList.keys;
    },
    loadData () {
      let url = CONFIG.BASE_URL + this.CONFIG.getList.url;
      let params = this.CONFIG.getList.params
      Post(url, params).then(resp => {
        let list = resp.data.result;
        if (list instanceof Array && list.length > 0) {
          let randomNum = this.getRandomIndex(list.length)
          this.advert = list[randomNum]
        }

      })
    },
    getRandomIndex (len) {
      return Math.ceil(Math.random() * len) - 1
    }
  }
}
</script>
<style>

</style>
