<!--  -->
<template>
  <div class="work_activitydetail_10">
    
  </div>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'
export default {
  name: 'work_activitydetail_10',
  reused: true,
  props: {
    namespace: String,
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
      this.CONFIG = PROJECT_CONFIG[this.namespace]
    }
  }
}
</script>
<style>
</style>

