<!--  -->
<template>
  <div class="rankcard_01">
    <template v-for="(rule,index) in projectConfig.rules">
      <span :key="index" class="rankcard_01_nav" :class="{'rankcard_01_nav--on':currentShow==index}" @click="changeOrderParam(rule.orderBy,index)" v-text="rule.title"></span>
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
      currentShow: 0,
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
    changeOrderParam (orderBy, index) {
      this.currentShow = index;
      this.$bus.emit(this.projectConfig.eventName, { orderBy });
    }
  }
}

</script>
<style>
.rankcard_01 {
  line-height: 22px;
  padding-left: 20px;
  height: 22px;
  
  font-family: 'Microsoft Yahei','微软雅黑','\5FAE\8F6F\96C5\9ED1','宋体';
  font-size: 12px;
  color: #656260;
}
.rankcard_01_nav{
  padding: 3px 8px;
  cursor: pointer;
}
.rankcard_01_nav--on {
  background: #da0b2d;
  color: #fff;
}
</style>