<!-- 视频播放组件 Created by zrn 2018/06/14 -->
<script src="js/example.js"></script>
<template>
  <div class="ui_video_03">
    <template v-for="(config, config_i) in resourceDetailConfig.complicatedItem" v-if="resourceDetail">
      <!-- 需要特殊处理的复杂项 -->
      <!-- play 播放视频 -->
      <div :key="config_i" v-if="config.name == 'play'" class="ui_video_03_video_play">
        <video :src="src_url" controls="controls"></video>
      </div>

      <!-- img 图片 -->
      <div :key="config_i" v-if="config.name == 'img'" class="ui_video_03_imgcontainter">
        <label class="ui_video_03_img_label">{{config.display}}</label>
        <img class="ui_video_03_img" v-bind="{class: 'ui_video_03_' + config.field}" :src=" resourceDetail[keys[config.field]] " alt="暂无图片" @load="dealResourceImg($event)"/>
      </div>

      <!-- 自定义事件按钮 包括（title 标题） -->
      <div :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_video_03_btncontainer_' + config.field + '_' + config_i}">
        <i v-bind="{class: config.className}"></i>
        <label class="ui_video_03_btnlabel">{{config.display}}</label>
        <span v-bind="{class: 'ui_video_03__btncontainer_' + config.field}" v-if="keys[config.field]">{{ resourceDetail[keys[config.field]] }}</span>
      </div>

      <!-- time 时间 -->
      <div :key="config_i" v-else-if="config.name == 'time'" class="ui_video_03_timecontainter">
        <label class="ui_video_03_time_label">{{config.display}}</label>
        <span v-bind="{class: 'ui_video_03_' + config.field}">{{ resourceDetail[keys[config.field]] | formatDateNEW}}</span>
      </div>

    </template>

  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex';
  import * as interfaces from "@work/login/common/interfaces.js";
  import Vue from 'vue';
  import { Get, Post, DrawImage, getFieldAdapter } from "@common";
  import URL from 'url';
  import PROJECT_CONFIG from "projectConfig";

  export default {
    name: 'ui_video_03',
    props: ['namespace', 'modulename'],
    reused: true,
    data () {
      return {
        CONFIG: null,
        pubId: "",
        resourceDetail: {}, // 详情信息
        resourceDetailConfig: {}, // 详情信息配置
        keys: {}, // 详情接口字段容器
        resId: "",
        loginName: "",
        src_url:''
      };
    },

    mounted () {
      this.pubId = URL.parse(document.URL, true).query.pubId; // 从地址栏接收栏目id
      this.CONFIG = PROJECT_CONFIG[this.namespace].ui_video.ui_video_03[this.modulename];
      this.resourceDetailConfig = this.CONFIG.getResourceDetail;
      this.keys = JSON.parse(JSON.stringify(getFieldAdapter(this.resourceDetailConfig.sysAdapter, this.resourceDetailConfig.typeAdapter)));
      this.getResourceDetail();  //获取详情信息
    },

    created: function () {
      this.getMemberInfo().then((member) => {
        this.loginName = member.loginName;
      });
    },

    computed: {
      ...mapGetters("login", {
        member: interfaces.GET_MEMBER
      }),
    },

    methods: {
      ...mapActions("login", {
        getMemberInfo: interfaces.ACTION_KEEP_SESSION
      }),
      dealResourceImg (eve) {  // 处理图片尺寸
        DrawImage(eve.path[0], this.CONFIG.infoImgWidth, this.CONFIG.infoImgHeight);
      },
      getResourceDetail () {
        let paramsObj = Object.assign({}, this.resourceDetailConfig.params);
        paramsObj.pubId = this.pubId;
        // CONFIG.BASE_URL + 在本地测试时删掉CONFIG.BASE_URL
        Get(CONFIG.BASE_URL + this.resourceDetailConfig.url + '?pubId=' + paramsObj.pubId + '&loginName=' + this.loginName + '&siteId=' + paramsObj.siteId + '&attachTypes=' + paramsObj.attachTypes).then((rep) => {
          let datas = rep.data;
          if (rep.status == 200 && datas.data) {
            this.resourceDetail = datas.data;
            this.resId = this.resourceDetail[this.keys.resId];
            let recordID = this.resourceDetail[this.keys[this.CONFIG.field]];
            if(recordID){
              recordID = Number(recordID);
              this.src_url = CONFIG.BASE_URL + "dynamicFile/stream.do?recordID=" + recordID;
            }
          }
        });
      }
    }
  }

</script>
<style>
.ui_video_03_mydplayer {
  width: 800px;
}

.ui_video_03_ul {
  list-style-type: none;
  display: inline-block;
}

.ui_video_03_li {
  display: inline-block;
}

.ui_video_03_cover {
  position: relative;
  cursor: pointer;
  width: 380px;
  height: 240px;
  background-color: #eee;
  margin-right: 20px;
}

.ui_video_03_img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ui_video_03_icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
}

.ui_video_03_resName {
  cursor: pointer;
}
</style>
