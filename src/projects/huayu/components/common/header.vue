<!-- 头组件 -->
<template>
 <div>
   <work_login_04 namespace="common">登陆</work_login_04>
 </div>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'
export default {
  name: 'components_common_header',
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
      // this.CONFIG = PROJECT_CONFIG[this.namespace]
    }
  }
}
</script>
<style>

</style>
