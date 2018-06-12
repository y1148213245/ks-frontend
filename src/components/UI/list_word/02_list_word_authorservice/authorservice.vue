// 作者服务组件
<template>
  <div class="ui_list_word_02">
    <work_crumbs_01 :namespace="namespace"></work_crumbs_01>
    <!-- 导航-->
    <div class="ui_list_word_02-container">
      <!-- 左边导航-->
      <div class="ui_list_word_02-container-left">
        <work_author_service_navigate :namespace="namespace" :cols="authorServiceCols" :current="currentCol" class="ui_list_word_02-navigate"></work_author_service_navigate>
        <keep-alive exclude="work_author_service_submission" class="ui_list_word_02-submission">
          <div v-bind:is="currentCol.url" :namespace="namespace" :col="currentCol"></div>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from "vuex";
  import URL from "url";
  import PROJECT_CONFIG from "projectConfig";

  export default{
    name: 'ui_list_word_02',
    reused: true,
    props: ['namespace'],
    data: function () {
      return {
        colId: '',
        currentCol: {}
      }
    },
    computed: {
      ...mapGetters({
        allNavCols: "cache/getNavCols"
      }),
      authorServiceCols: function () {
        return this.allNavCols.filter(item => {
          return Number(item.parentId) === Number(this.colId) && item.name.indexOf('展示') === -1;
        });
      }
    },
    created: function () {
      this.colChangeOn=PROJECT_CONFIG[this.namespace].colChangeOn;
      this.setColId();
      this.$bus.$on(this.colChangeOn, this.colChange);
    },
    mounted: function () {

    },
    methods: {
      setColId: function () {
        this.colId = URL.parse(document.URL, true).query.colId;
      },
      colChange: function (col) {
        this.currentCol = col;
      }
    }
  }
</script>
<style>
  .ui_list_word_02{
    width: 1200px;
    min-height: 600px;
    margin: 0 auto;
    overflow: hidden;
  }
  .ui_list_word_02-crumbs{
    height: 52px;
    line-height: 52px;
    border-bottom: 2px solid #c50000;
    padding-left: 15px;
    font-size: 14px;
  }
  .ui_list_word_02-index{
    color: #6a6969;
  }
  .ui_list_word_02-contribute{
    color: #626262;
  }
  .ui_list_word_02-container{
    margin: 36px 0px 0px 50px;
  }
  .ui_list_word_02-container-left{
    float: left;
  }
</style>
