/*
 * @Author: song 
 * @Date: 2018-02-06 10:34:24 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-08 14:06:04
 */ 
<!-- 作品详情 -->
<template>
  <div class="work_bookdetail_03">
    <div class="topTitle">
      <div class="title" v-text="workInfo.title"></div>
      <div class="vote">
        <work_common_03 :pub-id="workInfo.pubId"></work_common_03>
      </div>
    </div>
    <div class="workInformation">
      <div class="author">
        <span>作者：</span>
        <span v-text="workInfo.author"></span>
      </div>
      <div class="comment">
        <span v-text="workInfo.comment"></span>
        <span>评论</span>
      </div>
      <div class="voteNum">
        <span v-text="workInfo.vote"></span>
        <span>票数</span>
      </div>
      <div class="type">
        <span>参赛类别：</span>
        <span v-text="workInfo.type"></span>
      </div>
    </div>
    <div class="info">
      <div v-text="workInfo.workdetail"></div>
    </div>
    <div class="collect">
      <span>收藏文章</span>
    </div>
    <div class="download">
      <span>下载文章</span>
    </div>
    <div class="qrcode">
      <qrcode :value="url" :size="120"></qrcode>
      <div>微信扫一扫分享</div>
    </div>
  </div>
</template>

<script>
import { Get } from "@common";
import PROJECT_CONFIG from "projectConfig";
import qrcode from 'qrcode.vue';

export default {
  name: 'work_bookdetail_03',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      workInfo: {},
      url: '',
    };
  },
  components: {
    qrcode,
  },
  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].bookdetail.bookdetail_03;
    this.url = window.location.href;
    this.queryWorkInfo();
  },

  methods: {
    queryWorkInfo () {
      // 作品详情信息查询
      Get(this.CONFIG.url, { params: this.CONFIG.params }).then(rep => {
        this.workInfo = rep.data.data;
      });
    }
  }
}

</script>
<style>
.work_bookdetail_03 .title {
  float: left;
}

.work_bookdetail_03 .vote {
  float: right;
}

.work_bookdetail_03 .workInformation {
  clear: both;
}

.work_bookdetail_03 .workInformation div {
  display: inline-block;
}

.work_bookdetail_03 .qrcode {
  text-align: center;
}
</style>