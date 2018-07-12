// 作者服务组件
<template>
  <div class="main_zzfw">
    <div class="daohang f14">
      <span class="color_9b9">{{getStaticText('yourPosition') ? getStaticText('yourPosition') : "您的位置："}}</span><a href="../pages/index.html">{{getStaticText('homePage') ? getStaticText('homePage') : "首页"}}</a> >>
      <span class="color_626" v-text="currentCol.name">{{getStaticText('submissionMethods') ? getStaticText('submissionMethods') : "投稿方式"}}</span>
    </div>
    <!-- 导航-->
    <div class="zzfw_container">
      <!-- 左边导航-->
      <div class="zzfw_container_left fl">
        <work_author_service_navigate namespace="authorservice" :cols="authorServiceCols" :current="currentCol"></work_author_service_navigate>
        <keep-alive exclude="work_author_service_submission">
        <div v-bind:is="currentCol.url" namespace="authorservice" :col="currentCol"></div>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from "vuex";
  import URL from "url";
  import PROJECT_CONFIG from "projectConfig";
  import Work_author_service_navigate from "./serviceNavigate/Service_Navigate";

  export default{
    name: 'work_author_service',
    components: {Work_author_service_navigate},
    reused: true,
    props: ['namespace'],
    data: function () {
      return {
        colId: '',
        currentCol: {},
        CONFIG:""
      }
    },
    computed: {
      ...mapGetters({
        allNavCols: "cache/getNavCols"
      }),
      authorServiceCols: function () {
        return this.allNavCols.filter(item => {
          return Number(item.parentId) === Number(this.colId) && item.name.indexOf(this.getStaticText('display') ? this.getStaticText('display') : '展示') === -1;
        });
      }
    },
    created: function () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].information.work_author_service;
      this.setColId();
      this.$bus.$on('colChange', this.colChange);
    },
    mounted: function () {
    },
    methods: {
      setColId: function () {
        this.colId = URL.parse(document.URL, true).query.colId;
      },
      colChange: function (col) {
        this.currentCol = col;
      },
      getStaticText(text){
        if(this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
          return this.CONFIG.staticText[text]
        }else {
          return false
        }
      }
    }
  }
</script>
