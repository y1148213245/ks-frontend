/*
 * @Author: song 
 * @Date: 2018-02-06 10:01:47 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-03-16 18:36:45
 */
<!-- 投票组件  -->
<template>
  <div class="work_common_03">
    <el-button type="primary" size="large" @click="doVote()">点赞</el-button>
  </div>
</template>

<script>
import { Get, Post } from "@common";
import PROJECT_CONFIG from "projectConfig";
import Holmes from 'holmes-js';

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
      const holmes = new Holmes();  //  浏览器指纹 限制投票次数
      holmes.get().then(res => {
        if (res) { // returns unique browser fingerprint as 32-bit Integer
          let params = Object.assign({}, this.CONFIG.params);
          params.docID = this.docid;
          Get(this.CONFIG.url, { params: params }).then(res => {
            if (res.data.result === "1") { // 投票成功
              this.$emit('vote', res.data.data, this.docid);  // 子组件向父组件传值
              this.$message({
                type: "success",
                message: "点赞成功"
              });
            } else if (res.data.error && res.data.error.errorCode === "-1") {  // 投票失败
              this.$message({
                type: "info",
                message: res.data.error.errorMsg
              });
            } else {  // 投票失败
              this.$message({
                type: "error",
                message: "已点赞"
              });
            }
          })
        }
      })
    }
  }
}

</script>
<style scoped>

</style>