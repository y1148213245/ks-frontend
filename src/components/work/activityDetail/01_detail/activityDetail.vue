<!-- 竞赛详情 -->
<template>
  <div class="work_activitydetail_01">
    <p class="work_activitydetail_01-title" v-text="detail && detail[keys.title] || ''"></p>
    <div class="work_activitydetail_01-swiper">
      <!-- 轮播图组件 -->
      <ui_swiper_06 :pics="detail && detail[keys.illustration] || []"></ui_swiper_06><!-- END 轮播图组件 -->
    </div>
    <div class="work_activitydetail_01-text_content" v-text="detail && detail[keys.content] || ''"></div>
    <div class="work_activitydetail_01-upload_box">
      <div v-if="isActive === true" class="work_activitydetail_01-upload_box-button" @click="toUploadPage">上传作品</div>
      <div v-if="isActive === false" class="work_activitydetail_01-upload_box-button work_activitydetail_01-upload_box-button--failed">已结束</div>
    </div>

    
  </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { mapGetters } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import { Get } from "@common";
export default {
  name: 'work_activitydetail_01',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      CONFIG: null,
      keys: null,
      detail: {},
      isActive: null,
    };
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    })
  },

  created () {
    this.initConfig();
    this.loadDatas();
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_01;
      this.keys = this.CONFIG.keys;

    },
    loadDatas () {
      let keys = this.keys;
      let url = this.CONFIG.url;
      let query = URL.parse(document.URL, true).query;
      if (query[keys.requestUrlParam_pubId]) {
        let queryParam_pubId = keys.requestUrlParam_pubId + '=' + query[keys.requestUrlParam_pubId];
        url += '?' + queryParam_pubId + '&loginName=' + (this.member.loginName || '');
      }
      Get(url).then((resp) => {
        let data = resp.data.data;
        this.detail = data;
        if (this.detail) {
          this.$bus.emit(this.CONFIG.eventName_loadedDatas, data);

          //判断活动过期
          let thisTimestamp = new Date().getTime();
          if (thisTimestamp < data[this.keys.endDate] && thisTimestamp < data[this.keys.reviewDate]) {
            this.isActive = true;
          } else {
            this.isActive = false;
          }
        }

      })
    },
    toUploadPage () {
      if (this.CONFIG.toUploadPagUrl) {
        let url = this.CONFIG.toUploadPagUrl;
        if (this.keys.toUploadPageUrlParam_docId) {
          let queryParam_docId = this.keys.toUploadPageUrlParam_docId + '=' + this.detail[this.keys.resourceId];
          url += '?' + queryParam_docId;
        }
        window.location.href = url;
      }
    }
  }
}

</script>
<style>
.work_activitydetail_01 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.work_activitydetail_01-title {
  text-align: center;
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
}
.work_activitydetail_01-swiper {
}
.work_activitydetail_01-text_content {
  padding: 20px 0;
}
.work_activitydetail_01-upload_box {
  margin-top: 20px;
  width: 100%;
  text-align: center;
}
.work_activitydetail_01-upload_box-button {
  width: 200px;
  height: 45px;
  line-height: 45px;
  margin: 0 auto;
  border-radius: 11px;
  font-size: 14px;
  box-shadow: none;
  color: white;
  background-color: black;
  cursor: pointer;
}
.work_activitydetail_01-upload_box-button--failed {
  background-color: rgba(215, 215, 215, 1);
  color: #a1a1a1;
}
</style>
