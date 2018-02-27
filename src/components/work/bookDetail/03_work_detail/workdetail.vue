/*
 * @Author: song 
 * @Date: 2018-02-06 10:34:24 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-27 15:42:13
 */ 
<!-- 作品详情 有两种显示方式：附件和表单 附件是显示作品简介+下载文章操作 表单是显示简介+全文-->
<template>
  <div class="work_bookdetail_03">
    <components_common_header></components_common_header>
    <div class="topTitle">
      <div class="title" v-text="workInfo[keys.title] || '暂无'"></div>
      <div class="vote">
        <!-- 投票组件 -->
        <work_common_03 :pub-id="workInfo.pubId" namespace="common"></work_common_03>
        <!-- END 投票组件 -->
      </div>
    </div>
    <div class="workInformation">
      <div class="author">
        <span>作者：</span>
        <span v-text="workInfo[keys.author] || '暂无'"></span>
      </div>
      <div class="comment">
        <span v-text="commentNum"></span>
        <span>评论</span>
      </div>
      <div class="voteNum">
        <span v-text="workInfo[keys.voteNum]"></span>
        <span>票数</span>
      </div>
      <div class="type">
        <span>参赛类别：</span>
        <span v-text="workInfo[keys.raceType]"></span>
      </div>
    </div>
    <div class="abstract">
      <div v-text="workInfo[keys.abstract]"></div>
    </div>
    <div class="info" v-if="workInfo[keys.content]">   <!-- 表单类型的作品 -->
      <div v-text="workInfo[keys.content]"></div>
    </div>
    <div class="workOperation">
      <el-button size="medium">
        <i class="el-icon-star-off"></i>
        <span>收藏文章</span>
      </el-button>
      <el-button size="medium" v-if="workInfo[keys.attachment] && workInfo[keys.attachment].length>0"  @click="loadWork(workInfo[keys.attachment][0].fileRecordID)">  <!-- 附件类型的作品 -->
        <i class="el-icon-download"></i>
        <span>下载文章</span>
      </el-button>
    </div>
    <div class="qrcode">
      <qrcode :value="url" :size="120"></qrcode>
      <div>微信扫一扫分享</div>
    </div>
    <work_bookreview_02 namespace="productiondetail"></work_bookreview_02>
  </div>
</template>

<script>
import { Get } from "@common";
import PROJECT_CONFIG from "projectConfig";
import qrcode from 'qrcode.vue';
import URL from 'url';

export default {
  name: 'work_bookdetail_03',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      workInfo: {},
      url: '',
      keys: null,  // 作品详情页接口字段兼容
      commentNum: 0, // 评论数
    };
  },
  components: {
    qrcode,
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].bookdetail.bookdetail_03;
    this.keys = this.CONFIG.keys;
    this.$bus.$on('commentNum', (data) => {
      this.commentNum = data;
    });
  },
  mounted () {
    this.url = window.location.href;
    var queryObj = URL.parse(document.URL, true).query;
    let resourceType = queryObj.resourceType;
    let resourceId = queryObj.resourceId;
    this.queryWorkInfo(resourceType, resourceId);
  },

  methods: {
    queryWorkInfo (type, id) {
      // 作品详情信息查询
      let params = Object.assign({}, this.CONFIG.params);
      params.doclibCode = type;
      params.docID = id;
      Get(this.CONFIG.url, { params: params }).then(rep => {
        if (rep.data) {
          this.workInfo = rep.data;
        }
      });
    },
    loadWork (fileRecordID) {  // 下载附件类型的作品
      let loadUrl = this.CONFIG.loadUrl + fileRecordID;
      window.open(this.CONFIG.loadUrl, '_blank');
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
  margin-right: 20px;
}

.work_bookdetail_03 .abstract {
  margin: 20px 0px;
}

.work_bookdetail_03 .qrcode {
  margin: 20px 0px;
  text-align: center;
}
</style>