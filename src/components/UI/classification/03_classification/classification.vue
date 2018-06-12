<!-- 分类导航组件  Created by song 2018/5/28  -->
<template>
  <div class="ui_classification_03">
    <el-menu class="ui_classification_03_menu">
      <el-submenu v-for="(item, index) in classification" :index="String(index + 1)" :key="index">
        <template slot="title">
          <span class="ui_classification_03_first" @click.self="selectCurMenu(item)">{{item.text}}</span>
          <!-- <i :class="{'el-icon-arrow-down': item.children.length > 0, 'el-icon-arrow-up': openIndex == index}"></i> -->
        </template>
        <el-menu-item class="ui_classification_03_second" v-for="(subItem, subIndex) in item.children" :key="subIndex" :index="(index + 1) + '-' + (subIndex + 1)" @click.self="selectCurMenu(subItem)">
          {{subItem.text}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { Get } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'ui_classification_03',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      classification: null,
      openIndex: null,
    };
  },

  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].ui_classification.ui_classification_03[this.modulename];
    this.queryClassification();
  },

  methods: {
    queryClassification () {
      Get(CONFIG.BASE_URL + this.CONFIG.url, { "params": this.CONFIG.params }).then((res) => {
        var data = res.data;
        if (data && data.length) {
          this.classification = data;
        }
      });
    },
    selectCurMenu (item) {
      let config = this.CONFIG.toBookLists;
      let url = config.url + '?';
      for (const key in config.dataKeys) {
        const element = config.dataKeys[key];
        url += key + '=' + item[element] + '&';
      }
      for (const key in config.fixedKeys) {
        const element = config.fixedKeys[key];
        url += key + '=' + element + '&';
      }

      url = url.substring(0, url.length - 1);
      window.open(url);
    }
  }
}

</script>
<style>
.ui_classification_03_menu {
  width: 200px;
  border: none;
}
</style>