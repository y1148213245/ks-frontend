<template>
  <div class="components_authordetail_picinfolist">
    <div class="data_column_block">
      <ul class="zzxq_detail_zp_list">
        <template v-for="entry in swiperList">
          <li :key="entry.id"><a href="javascript:void(0)" class="book_imgBox" @click="toBookDetail(entry.id)">
            <img class="detail_img" onload="DrawImage(this,116,200)" :src="entry.pub_picBig" alt="暂无封面"/>
          </a>
            <p><a href="javascript:void(0)" @click="toBookDetail(entry.id)"
                  class="color_7e7 f18 scoped_title" v-text="entry.pub_resource_name"
                  :title="entry.pub_resource_name"></a></p></li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
  import{Post} from "@common";
  import PROJECT_CONFIG from "projectConfig";
  export default {
    name: "components_authordetail_picinfolist",
    reused:true,
    props:["topic","namespace"],
    data:function(){
      return {
        swiperList:[]
      }
    },
    watch:{
      topic:function(item){
        if(item){
          this.getSwiperInfo(item);
        }

      }
    },
    methods:{
      getSwiperInfo:function(topic){
        let CONFIG=PROJECT_CONFIG.authordetail.components.common;
        let params=Object.assign({},CONFIG.swiperParams);

        let author=JSON.parse(params.conditions).filter(function(item){
          return item.hasOwnProperty("BOOK_SYS_AUTHORS");
        });
        let authorOther=JSON.parse(params.conditions).filter(function(item){
          return !item.hasOwnProperty("BOOK_SYS_AUTHORS");
        });
        author[0].BOOK_SYS_AUTHORS=topic;
        let authorArr=JSON.stringify(author.concat(authorOther));
        params.conditions=authorArr;
        Post(CONFIG.swiperUrl,params).then((rep)=>{
          let data=rep.data.result;
          if(data && data instanceof Array){
            this.swiperList=data;
          }
        })
      },
      toBookDetail(pubId){
        let CONFIG=PROJECT_CONFIG[this.namespace].toDetailAddress;
        window.location.href = CONFIG.url+'?'+CONFIG.params+'='+ pubId;
      }
    }
  }
</script>

<style>
  ul.zzxq_detail_zp_list li{
    float: left;
    width: 130px;
    text-align: center;
    padding-right: 60px;
  }
</style>
