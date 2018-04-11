<template>
  <div class="news_con pt15 pr30 pb20 pl30">
    <div class="news_tit f20 pb10" style="" v-html="aboutList && aboutList.information_SYS_TOPIC">读习近平从政路上4本著作 汲取理政智慧</div>
    <!-- <div class="news_other f14 color_aba pt10"><span class="fr share"><a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis " target="_blank"><i class="news_other_03"></i>分享</a></span><span class="fr ml20 mr20 sc "><i class=" news_other_02"></i>收藏</span><span class="fr dz "><i class="news_other_01"></i>点赞</span></div> -->
    <div class="news_nr f14 line-h24 pt20 color_737 pb25" v-html="aboutList && aboutList.information_a_content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. AeneanLorem ipsum dolor sit amet, consectetur adipiscing elit. AeneanLorem ipsum dolor sit amet, consectetur adipiscing elit. AeneanLorem ipsum dolor sit amet, consectetur adipiscing elit. AeneanLorem ipsum dolor sit amet, consectetur adipiscing elit. AeneanLorem ipsum dolor sit amet, consectetur adipiscing elit. AeneanLorem ipsum dolor sit amet, consectetur adipiscing elit. AeneanLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
    </div>
  </div>
</template>

<script>
  import PROJECT_CONFIG from "projectConfig";
  import {Post} from "@common";
  export default {
    name: "components_aboutus_content",
    reused:true,
    data:function(){
      return {
        aboutList:[]
      }
    },
    props:["namespace"],
    mounted:function(){
      let CONFIG=PROJECT_CONFIG[this.namespace];
      Post(CONFIG.BASE_URL+CONFIG.url,CONFIG.params).then((req)=>{
        this.aboutList=req.data.result[0];
      });
    }
  }
</script>

<style scoped>
  .news_con .news_tit{
    color: #ca0000;
    border-bottom: 1px solid #fce8e8;
    text-align: center;
  }
</style>
