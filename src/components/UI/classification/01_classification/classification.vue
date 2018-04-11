<!--左侧分类导航栏组件-->
<template>
  <div class="ui_classification_01">
    <ul class="classificationWrapper">
      <li class="active">
        <a class="allSort" href="javascript:void(0)" @click="toClassify(-1)">全部分类</a>
      </li>
      <template class="sortNameWrapper" v-for="item in classificationList">
        <li class="sortName">
          <a class="curSort" href="javascript:void(0)" @click="toClassify(item.cascadeId)">{{item.text}}</a>
        </li>
      </template>
  </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import { Get } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "ui_classification_01",
  reused: true,
  props: ["namespace"],
  data() {
    return {
      classificationList: [] // 分类列表
    };
  },
  mounted() {
    this.CONFIG =
      PROJECT_CONFIG[this.namespace].classification.classification_01;
    this.queryClassificationList();
    this.$bus.$emit(this.CONFIG.broadcastName, -1);
  },
  components: {},
  methods: {
    queryClassificationList(param) {
      // 书籍分类列表查询
      Get(CONFIG.BASE_URL+this.CONFIG.url, {params: this.CONFIG.params}).then(rep => {
        var datas = rep.data;
        var ebookCategory = [];
        if (datas && datas instanceof Array && datas.length > 0) {
          for (var i = 0; i < datas.length; i++) {
            var entry = {
              cascadeId: datas[i].cascadeId,
              cattype: datas[i].cattype,
              id: datas[i].id,
              text: datas[i].text,
              type: datas[i].type
            };
            ebookCategory.push(entry);
          }
        }
        this.classificationList = ebookCategory;
      });
    },
    toClassify(cascadeId) {
      this.$bus.$emit(this.CONFIG.broadcastName, cascadeId);
    }
  }
};
</script>

<style>
/*左侧分类导航栏组件 结构样式*/
</style>

