<!-- 参选人列表 -->
<template>
  <section>
    
  </section>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'
export default {
  name: 'work_activitydetail_09',
  reused: true,
  props: {
    namespace: String,
    modulename:String
  },
  data () {
    return {
      CONFIG: null
    };
  },

  computed: {},

  created () {
    this.initConfig();
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_09[this.modulename]
    }
  }
}
</script>
<style>
</style>
