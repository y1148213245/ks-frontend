<!--左侧分类导航栏组件-->
<template>
  <ul>
    <li class="active">
      <a href="javascript:void(0)" @click="toClassify(-1)">全部分类</a>
    </li>
    <template v-for="item in classificationList">
      <li>
        <a href="javascript:void(0)" @click="toClassify(item.cascadeId)">{{item.text}}</a>
      </li>
    </template>

  </ul>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import VueBus from 'vue-bus'; // 通过 cnpm install vue-bus安装
  import {get} from "@common";
  import PROJECT_CONFIG from "projectConfig";
  import "bootstrap/dist/css/bootstrap.min.css";

  Vue.use(VueBus);  // 在一个模块化工程中使用，必须通过Vue.use()使用vue-bus

  export default {
    name: "ui_classification_01_classification",
    reused: true,
    props: ["namespace"],
    data() {
      return {
        classificationList: [], // 分类列表
      }
    },
    mounted() {
      this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].classification.classification_01 : PROJECT_CONFIG.recommend.classification.classification_01;
      this.queryClassificationList();
    },
    components: {
    },
    methods: {
      queryClassificationList(param) {  // 书籍分类列表查询
        var _this = this;
	      get(this.CONFIG.url, this.CONFIG).then((rep) => {
          var datas = rep.data;
          var ebookCategory = [];
          for (var i = 0; i < datas.length; i++) {
            var entry = {
              "cascadeId": datas[i].cascadeId,
              "cattype": datas[i].cattype,
              "id": datas[i].id,
              "text": datas[i].text,
              "type": datas[i].type
            };
            ebookCategory.push(entry)
          }
          _this.classificationList = ebookCategory;
        })
      },
      toClassify(cascadeId) {
        this.$bus.$emit('toClassification', cascadeId);
      }
    },
  };
</script>

<style>
  /*左侧分类导航栏组件 结构样式*/

</style>

