<!-- 图片详情组件 Created by zrn 2018/06/22 -->
<script src="js/example.js"></script>
<template>
  <div class="ui_information_image_04">
    <template v-for="(config, config_i) in resourceDetailConfig.complicatedItem" v-if="resourceDetail">
      <!-- 需要特殊处理的复杂项 -->

      <!-- img 图片 -->
      <div :key="config_i" v-if="config.name == 'img'" class="ui_information_image_04_imgcontainter">
        <label class="ui_information_image_04_img_label">{{config.display}}</label>
        <img class="ui_information_image_04_img" 
        v-bind="{class: 'ui_information_image_04_' + config.field}" 
        :src=" resourceDetail[keys[config.field]] || require('@static/img/defaultCover.png')" 
        alt="暂无图片" 
        @load="dealResourceImg($event)"
        v-if="resourceDetail[keys[config.field]]" />
      </div>

      <!-- 自定义事件按钮 包括（title 标题） -->
      <div :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_information_image_04_btncontainer_' + config.field + '_' + config_i}">
        <i v-bind="{class: config.className}"></i>
        <label class="ui_information_image_04_btnlabel">{{config.display}}</label>
        <span v-bind="{class: 'ui_information_image_04__btncontainer_' + config.field}" v-if="keys[config.field]">{{ resourceDetail[keys[config.field]] || '暂无'}}</span>
      </div>

      <!-- time 时间 -->
      <div :key="config_i" v-else-if="config.name == 'time'" class="ui_information_image_04_timecontainter">
        <label class="ui_information_image_04_time_label">{{config.display}}</label>
        <span v-bind="{class: 'ui_information_image_04_' + config.field}">{{ resourceDetail[keys[config.field]] | formatDateNEW}}</span>
      </div>

      <!-- fileSize 大小 -->
      <div :key="config_i" v-else-if="config.name == 'fileSize'" class="ui_information_image_04_filesizecontainter">
        <label class="ui_information_image_04_filesize_label">{{config.display}}</label>
        <span v-bind="{class: 'ui_information_image_04_' + config.field}">{{ resourceDetail[keys[config.field]] | formatFileSize}}</span>
      </div>

    </template>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import * as interfaces from "@work/login/common/interfaces.js";
import Vue from "vue";
import { Get, Post, DrawImage, getFieldAdapter } from "@common";
import URL from "url";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "ui_information_image_04",
  props: ["namespace", "modulename"],
  reused: true,
  data() {
    return {
      CONFIG: null,
      pubId: "",
      resourceDetail: {}, // 详情信息
      resourceDetailConfig: {}, // 详情信息配置
      keys: {}, // 详情接口字段容器
      loginName: ""
    };
  },

  mounted() {
    this.pubId = URL.parse(document.URL, true).query.pubId; // 从地址栏接收栏目id
    this.CONFIG =
      PROJECT_CONFIG[this.namespace].information.ui_information_image_04[
        this.modulename
      ];
    this.resourceDetailConfig = this.CONFIG.getResourceDetail;
    this.keys = JSON.parse(
      JSON.stringify(
        getFieldAdapter(
          this.resourceDetailConfig.sysAdapter,
          this.resourceDetailConfig.typeAdapter
        )
      )
    );
    this.getResourceDetail(); //获取详情信息
  },

  created: function() {
    this.getMemberInfo().then(member => {
      this.loginName = member.loginName;
    });
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    })
  },

  methods: {
    ...mapActions("login", {
      getMemberInfo: interfaces.ACTION_KEEP_SESSION
    }),
    dealResourceImg(eve) {
      // 处理图片尺寸
      DrawImage(
        eve.path[0],
        this.CONFIG.infoImgWidth,
        this.CONFIG.infoImgHeight
      );
    },
    getResourceDetail() {
      let paramsObj = Object.assign({}, this.resourceDetailConfig.params);
      paramsObj.pubId = this.pubId;
      // CONFIG.BASE_URL + 在本地测试时删掉CONFIG.BASE_URL
      Get(
        CONFIG.BASE_URL +
          this.resourceDetailConfig.url +
          "?pubId=" +
          paramsObj.pubId +
          "&loginName=" +
          this.loginName +
          "&siteId=" +
          CONFIG.SITE_CONFIG.siteId +
          "&attachTypes=" +
          paramsObj.attachTypes
      ).then(rep => {
        let datas = rep.data;
        if (rep.status == 200 && datas.data) {
          this.resourceDetail = datas.data;
        }
      });
    }
  }
};
</script>
<style>
.ui_information_image_04_mydplayer {
  width: 800px;
}

.ui_information_image_04_ul {
  list-style-type: none;
  display: inline-block;
}

.ui_information_image_04_li {
  display: inline-block;
}

.ui_information_image_04_cover {
  position: relative;
  cursor: pointer;
  width: 380px;
  height: 240px;
  background-color: #eee;
  margin-right: 20px;
}

.ui_information_image_04_img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ui_information_image_04_icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
}

.ui_information_image_04_resName {
  cursor: pointer;
}
</style>
