/*
 * @Author: song 
 * @Date: 2018-02-06 10:01:47 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-06 14:49:41
 */
<!-- 投票组件  -->
<template>
  <div class="work_common_03">
    <el-button type="primary" size="large" @click="doVote()">投上一票</el-button>
  </div>
</template>

<script>
export default {
  name: 'work_common_03',
  props: ['pubId'],
  reused: true,
  data () {
    return {
    };
  },

  mounted () { },

  methods: {
    doVote() {  // 投票
      
    }
  }
}

</script>
<style scoped>

</style>