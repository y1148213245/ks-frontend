<!-- 侧边栏 -->
<template>
 <nav class="ui_navigation_04">
   <ul class="ui_navigation_04-ul">
     <li v-if="CONFIG.showItem.indexOf('QQ') != -1" class="ui_navigation_04-qq" @click="toQQ">
       <span class="ui_navigation_04-qq_icon"></span>
       <span v-text="CONFIG.display.qq"></span>
     </li>
     <li v-if="CONFIG.showItem.indexOf('toTop') != -1" class="ui_navigation_04-to_top" @click="toTop">
       <span class="ui_navigation_04-to_top_icon"><i class="fa fa-angle-up"></i></span>
       <span  v-text="CONFIG.display.toTop"></span>
     </li>
   </ul>
 </nav>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'
export default {
  name: 'ui_navigation_04',
  reused: true,
  props: {
    namespace: String,
    modulename: String
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

  mounted () {
  },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].navigation.ui_navigation_04[this.modulename]
    },
    toTop () {
      $('body,html').animate({ scrollTop: 0 }, 500);
    },
    toQQ(){
      window.open(this.CONFIG.toQQ.url) 
    }
  }
}
</script>
<style>

</style>
