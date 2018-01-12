<template>
  <div class="zzxq_nav  f14 line-h35 color_9b9 mt18 ml12 news_nav">
    您的位置:<a href="../index/index.html" class="color_9b9 ">首页</a>>>
    <a class="color_626" v-text="title"></a>
  </div>
</template>

<script>
    export default {
        name: "wenlian_common_crumbs",
        reused:true,
        data:function(){
          return {
            title:''
          }
        },
        created:function(){
          this.$bus.$on("setCrumbs",this.getCrumbd);
        },
        methods:{
          getCrumbd:function(param){
            this.title=CRUMB_TYPE.find(function(item){
              return item.name==param;
            }).title;
          }
        }
    }
</script>

<style scoped>

</style>
