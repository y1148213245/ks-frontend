<template>
  <div class="star_pic_info_13">
    <ul class="list">
      <li class="item" v-for="(getEb,index) in getQueryEbook">
        <img class="img" onload="DrawImage(this,75,97)" :src="getEb.pub_picBig" @click="toBookDetail(getEb.id)" alt="暂无图片">
        <div class="text">
          <a target="_blank" href="javascript:void(0)" @click="toBookDetail(getEb.id)" v-text="getEb.pub_resource_name"></a>
          <div v-text="getEb.BOOK_SYS_AUTHORS" class="author"></div>
          <div class="num">
            <el-rate v-model="getEb.pub_star_num" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
          </div>
          <div><font class="price">￥{{getEb.BOOK_EB_PRICE | filterFun}}</font></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Post} from "@common";
  import PROJECT_CONFIG from "projectConfig";
    export default {
      name: "star_pic_info_13",
      reused: true,
      props: ["namespace"],
      data:function(){
        return {
          getQueryEbook:[]
        }
      },
      mounted:function(){
        this.CONFIG=PROJECT_CONFIG[this.namespace].list_pic.star_pic_info_13;
        this.getBookList(); //图书列表
      },
      methods:{
        getBookList: function () {
          Post(this.CONFIG.url,this.CONFIG.params).then((rep)=>{
            let data=rep.data.result;
            if(data && data instanceof Array && data.length>0){
              this.getQueryEbook=data;
            }
            let bookInfo=[];
            let bookIntroductions=[];
            data.forEach(function(item){
              bookInfo.push(item.id);
              bookIntroductions.push({
                id:item.pub_resource_id,
                type:item.pub_resource_type
              })
            })
            this.$bus.$emit("setBookInfo",bookInfo);
            this.$bus.$emit("setIntroductions",bookIntroductions);
          })
        },
        toBookDetail:function(pubId){
          //详情页
          let url = "./bookdetail.html?pubId="+pubId;
          window.location.href = url;
        }
      }
    }
</script>

<style scoped>

</style>
