<!--  -->
<template>
  <div class="search_jg_tab pl20 color_656">
    <template v-for="(rule,index) in projectConfig.rules">
      <span :key="index" :class="{'search_jg_tab_on':currentShow==index}" @click="changeOrderParam(rule.orderBy,index)" v-text="rule.title"></span>
    </template>
  </div>
</template>

<script>
import PROJECT_CONFIG from "projectConfig";
export default {
  name: 'work_rankcard_01',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      projectConfig: null,
      currentShow:0,
    };
  },

  computed: {},

  created () {
    this.initConfig();
  },

  mounted () { },

  methods: {
    initConfig () {
      let projectConfig = PROJECT_CONFIG[this.namespace].rankCard.rank_01;
      this.projectConfig = JSON.parse(JSON.stringify(projectConfig));
    },
    changeOrderParam (orderBy,index) {
      this.currentShow = index;
      this.$bus.emit(this.projectConfig.eventName,{orderBy});
    }
  }
}

</script>
<style scoped>

</style>