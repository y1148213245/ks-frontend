/*
 * @Author: song 
 * @Date: 2018-06-06 13:43:57 
 * @Last Modified by: song
 * @Last Modified time: 2018-06-08 17:32:31
 * 微信端头部导航组件
 */
<template>
  <div class="ui_mobile_navigation_03">
    <div v-for="(nav, index) in showItem" :key="index" :class="'ui_mobile_navigation_03_con' + nav.tag">
      <a href="javascript:void(0)" v-if="nav.tag == 'back'" onclick="window.history.go(-1)">
        <span v-text="nav.title"></span>
        <i :class="nav.icon"></i>
      </a>
      <a :href="nav.url" v-else>
        <span v-text="nav.title"></span>
        <i :class="nav.icon"></i>
      </a>
    </div>

    <div class="ui_mobile_navigation_03_context">
      <span class="ui_mobile_navigation_03_context_span" v-text="showText"></span>
    </div>
  </div>
</template>

<script>
import PROJECT_CONFIG from 'projectConfig';

export default {
  name: 'ui_mobile_navigation_03',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      showItem: [],
      showText: ""
    };
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].navigation.navigation_03[this.modulename];
    this.showItem = this.CONFIG.showItem;
    this.$bus.$on(this.CONFIG.onEvent.contextEventName, (data) => {
      this.showText = data;
    })
  },

  mounted () {
  },

  methods: {},

  components: {},

  computed: {},

}
</script>
<style>
.ui_mobile_navigation_03 {
  width: 100%;
  height: 1.1rem;
  line-height: 1.1rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
  font-size: 0.5rem;
}

.ui_mobile_navigation_03_conback {
  float: left;
}

.ui_mobile_navigation_03_context {
  font-size: 0.4rem;
  text-align: center;
}

.ui_mobile_navigation_03_conindex {
  float: right;
}
</style>