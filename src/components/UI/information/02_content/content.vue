<template>
  <section class="ui_information_02">
      <h3 class="ui_information_02_title" v-if="CONFIG && CONFIG.comTitle && CONFIG.comTitle.isShow && content">{{content[keys.topic]}}</h3>
      <p class="ui_information_02_information" v-if="CONFIG && keys && content" >
        <template v-for="(config, config_i) in resourceConfig.complicatedItem">
          <!-- 最后修改时间 -->
          <span :key=config_i class="ui_information_02_lastModifyDate" v-if="config.name == 'lastModifyDate'" v-show="resourceConfig.showItem.indexOf('lastModifyDate') !=-1">
            <label class="ui_information_02_lastModifyDate_label">{{config.display}}</label>
            <span v-bind="{class: 'ui_information_02_' + config.field}">{{ content[keys[config.field]] | formatDateNEW}}</span>
          </span>

          <!-- 创建时间 -->
          <span :key=config_i class="ui_information_02_createdDate" v-else-if="config.name == 'createdDate'" v-show="resourceConfig.showItem.indexOf('createdDate') !=-1">
            <label class="ui_information_02_createdDate_label">{{config.display}}</label>
            <span v-bind="{class: 'ui_information_02_' + config.field}">{{ content[keys[config.field]] | formatDateNEW}}</span>
          </span>

          <!-- 创建时间 -->
          <span :key=config_i class="ui_information_02_content" v-else-if="config.name == 'content'" v-show="resourceConfig.showItem.indexOf('content') !=-1">
            <label class="ui_information_02_content_label">{{config.display}}</label>
            <span v-bind="{class: 'ui_information_02_' + config.field}" v-html="content[keys[config.field]]"></span>
          </span>

          <!-- 其他不需要特殊处理的简单项 -->
          <span :key=config_i v-else  class="ui_information_02_content_other">
            <label class="ui_information_02_content_other_label">{{config.display}}</label>
            <span v-bind="{class: 'ui_information_02_content_other_' + config.field}">{{content[keys[config.field]] }}</span>
          </span>
        </template>  
      </p>
  </section>
</template>
<script>
import PROJECT_CONFIG from "projectConfig";
import { Get, Post, getFieldAdapter } from "@common";

export default {
  name: "ui_information_02",
  reused: true,
  props: ["namespace", "modulename"],
  data() {
    return {
      CONFIG: null,
      content: null,
      keys: null,
      colId: null,
      list: [],
      pubId: null
    };
  },
  created() {
    this.CONFIG =
      PROJECT_CONFIG[this.namespace].information.information_02[
        this.modulename
      ];
    this.resourceConfig = this.CONFIG.getResource;
    this.keys = getFieldAdapter(
      this.CONFIG.getResource.sysAdapter,
      this.CONFIG.getResource.typeAdapter
    );
    this.$bus.$on(this.CONFIG.broadcastName, this.getContent);
  },
  methods: {
    getContent(colId) {
      this.colId = colId[0];
      //取list
      let paramsObj1 = this.CONFIG.getResourceLists.params;
      paramsObj1.conditions = `[{pub_col_id:${
        this.colId
      }},{information_a_type:0}]`;
      Post(CONFIG.BASE_URL + this.CONFIG.getResourceLists.url, paramsObj1).then(
        rep => {
          if (
            rep.data.success &&
            rep.data.result &&
            rep.data.result.length > 0
          ) {
            this.list = rep.data.result;
            this.pubId = this.list[0][this.keys.id];

            //取content
            let paramsObj2 = Object.assign(
              { pubId: this.pubId },
              this.resourceConfig.params
            );
            Get(CONFIG.BASE_URL + this.resourceConfig.url, {
              params: paramsObj2
            }).then(rep => {
              if (rep.data.success && rep.data.data) {
                this.content = rep.data.data;
              }
            });
          }
        }
      );
    }
  }
};
</script>


