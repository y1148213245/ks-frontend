<!-- 辅文详情 -->
<template>
 <div class="work_activitydetail_02">
   <div class="work_activitydetail_02-content" v-html="fuwen[keys.content]"></div>
 </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Get } from "@common";
export default {
  name: 'work_activitydetail_02',
  reused: true,
  props: {
    namespace: String,
    module: String,
  },
  data () {
    return {
      CONFIG: null,
      keys: null,
      fuwen: {},
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.CONFIG.isDevelopment ? this.loadData() : this.$bus.on(this.CONFIG.eventName_listen, this.loadData)
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_02[this.module];
      this.keys = this.CONFIG.keys;
    },
    loadData (data) {
      let url = this.CONFIG.url
      if (data) {
        let queryParam_docId = this.keys.requestUrlParam_docId + '=' + data[this.keys.eventName_listen_resourceId]
        let queryParam_code = this.keys.requestUrlParam_code + '=' + data[this.keys.eventName_listen_resourceType]
        url += '?' + queryParam_docId + '&' + queryParam_code;
      }
      
      Get(url).then((resp) => {
        let datas = resp.data;
        let fuwen = {}

        for (let index = 0, len = datas.length; index < len; index++) {
          const element = datas[index];
          if (element[this.keys.topic] == this.CONFIG.topic) {
            fuwen = element;
            break;
          }
        }
        this.fuwen = fuwen;
      })
    }
  }
}

</script>
<style>
.work_activitydetail_02 {
  width: 100%;
}
.work_activitydetail_02-content {
  width: 100%;
  position: relative;
}
</style>
