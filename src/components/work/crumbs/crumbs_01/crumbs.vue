<template>
  <div class="work_crumbs">
    {{showWord && showWord.location}}:<a :href="url" class="work_crumbs-link">{{showWord && showWord.index}}</a>>>
    <a class="work_crumbs-title" v-text="title"></a>
  </div>
</template>

<script>
  import PROJECT_CONFIG from 'projectConfig';
  export default {
    name: "work_crumbs_01",
    reused: true,
    data: function () {
      return {
        title: '',
        url:'',
        showWord:{}
      }
    },
    props:{
      namespace:String
    },
    created: function () {
      this.CONFIG=PROJECT_CONFIG[this.namespace].crumbs;
      this.crumbType=this.CONFIG.crumbType;
      this.url=this.CONFIG.url;
      this.showWord=this.CONFIG.showWord;
      this.getCrumbdOn=this.CONFIG.getCrumbdOn;
      this.$bus.$on(this.getCrumbdOn, this.getCrumbd);
    },
    methods: {
      getCrumbd: function (param) {
        this.title = this.crumbType.find(function (item) {
          return item.name == param;
        }).title;
        this.$nextTick(() => {
          document.title = this.title;
        })
      }
    }
  }
</script>

<style>
  .work_crumbs {
    height: 52px;
    line-height: 52px;
    border-bottom: 2px solid #c50000;
    padding-left: 15px;
    margin-top: 0;
    font-size: 14px;
    color: #9b9b9b;
    color: #9b9b9b;
    margin-left: 12px;
  }

  .work_crumbs-link {
    color: #9b9b9b;
  }

  .work_crumbs-title {
    color: #626262;
  }
</style>
