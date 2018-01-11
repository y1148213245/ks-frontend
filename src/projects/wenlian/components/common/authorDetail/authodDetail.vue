<template>
    <div class="wenlian_common_authod_detail">
        <div class="zzxq_con pt25 pr12 pb25 pl12">
          <dl class="zzxq_detail">
            <dt class="fl author_imgBox"><img class="detail_img" onload="DrawImage(this,380,460)" :src="authorInfo.pub_picBig" alt="暂无封面"/></dt>
            <dd class="fl">
              <p class="zzxq_detail_tit mb10"><span class="xm color_424" v-html="authorInfo.information_SYS_TOPIC  || ''"></span>
                <span v-if="authorInfo.currentType == 'editor'" class="bg_ca00 qtg fr pl15 pr15 color_fff f14 line-h35">
                  <a href="javascript:void(0)" @click="goContribute" class="color_fff">去投稿</a>
                </span>
              </p>
              <p class="zzxq_detail_subtit"><span class="tubiao"></span><span v-text="authorInfo.information_a_tag || ''"></span></p>
              <p class="zhaiyao f18 color_7e7" v-text="authorInfo.information_a_abstract || ''"></p>
              <p class="zzxq_detail_zp mb15 mt15"><span class="tubiao"></span>主要作品></p>
              <components_authordetail_picinfolist :topic="authorInfo.information_SYS_TOPIC"></components_authordetail_picinfolist>
            </dd>
            <div class="clear"></div>
          </dl>
          <div class="zzxq_rwjs cl">
            <div class="zzxq_rwjs_tit"><span class="mingcheng">人物介绍</span></div>
            <div class="zzxq_rwjs_con f18" v-html="authorInfo.information_a_content || ''"></div>
          </div>
        </div>
    </div>
</template>

<script>
    import PROJECT_CONFIG from "projectConfig";
    import {Get,Post} from "@common";
    export default {
        name: "wenlian_common_authod_detail",
        reused:true,
        props:["namespace"],
        data:function(){
          return {
            authorInfo:{},
            swiperList:[]
          }
        },
        created:function(){
          this.$bus.$on(this.namespace,this.getAuthorInfo);
        },
        methods:{
          getAuthorInfo:function(param){
            let CONFIG=PROJECT_CONFIG[this.namespace].components.common;
            let params=Object.assign({},CONFIG.params,param);
            Get(CONFIG.url,{"params":params}).then((rep)=>{
              let data=rep.data.data;
              if(data){
                data.currentType=param.currentType;
                this.authorInfo=data;
              }
            })
          }
        }
    }
</script>

<style scoped>

</style>
