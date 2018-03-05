/*
 * @Author: song 
 * @Date: 2018-02-06 10:01:47 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-28 18:02:18
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
  props: ['namespace', 'docid'],
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
    doVote () {  // 投票
      let params = Object.assign({}, this.CONFIG.params);
      params.docID = this.docid;
      Get(this.CONFIG.url, { params: params }).then(res => {
        if (res.data.result === "1") { // 投票成功
          this.$emit('vote', res.data.data);  // 子组件向父组件传值
          this.$message({
            type: "success",
            message: "投票成功"
          });
        } else if (res.data.error && res.data.error.errorCode === "-1") {  // 投票失败
          this.$message({
            type: "info",
            message: res.data.error.errorMsg
          });
        } else {  // 投票失败
          this.$message({
            type: "error",
            message: "投票失败"
          });
        }
      })
    }
  }
}

</script>
<style scoped>

</style>