/*
 * @Author: song 
 * @Date: 2018-02-06 10:01:47 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-09 14:37:16
 */
<!-- 投票组件  -->
<template>
  <div class="work_common_03">
    <el-button type="primary" size="large" @click="doVote()">投上一票</el-button>
  </div>
</template>

<script>
import { Get, Post } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'work_common_03',
  props: ['pubId', 'namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
    };
  },

  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].common.vote_03;
   },

  methods: {
    doVote() {  // 投票
      let paramObj = Object.assign({}, this.CONFIG.params);
      paramObj.pubId = this.pubId;
      Post(this.CONFIG.url, paramObj).then(res => {
        console.log(res);
      })
    }
  }
}

</script>
<style scoped>

</style>