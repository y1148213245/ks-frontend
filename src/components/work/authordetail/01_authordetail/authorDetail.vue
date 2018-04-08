<template>
  <div class="work_authordetail_01">
    <div class="work_authordetail_01_zzxq_con" v-if="authorInfo && keys">
      <dl class="work_authordetail_01_zzxq_detail">
        <dt class="work_authordetail_01_author_imgBox"><img class="work_authordetail_01_detail_img" onload="DrawImage(this,380,460)" :src="authorInfo[keys.pub_picBig]" alt="暂无封面"/></dt>
        <dd class="work_authordetail_01_zzxq_detail_dd">
          <p class="work_authordetail_01_zzxq_detail_tit">
            <span class="work_authordetail_01_zzxq_detail_tit_xm" v-html="authorInfo[keys.information_SYS_TOPIC]  || ''"></span>
            <span v-if="authorInfo[keys.currentType] == 'editor'" class="work_authordetail_01_zzxq_detail_tit_qtg">
                  <a href="javascript:void(0)" @click="goContribute(authorInfo[keys.information_a_collaborator])" class="work_authordetail_01_zzxq_detail_tit_qtg_a">去投稿</a>
            </span>
          </p>
          <p class="work_authordetail_01_zzxq_detail_subtit"><span class="work_authordetail_01_zzxq_detail_subtit_tubiao"></span><span v-text="authorInfo[keys.information_a_tag] || ''"></span></p>
          <p class="work_authordetail_01_zzxq_detail_zhaiyao" v-text="authorInfo[keys.information_a_abstract] || ''"></p>
          <p class="work_authordetail_01_zzxq_detail_zp"><span class="work_authordetail_01_zzxq_detail_zp_tubiao"></span>主要作品></p>
          <components_authordetail_picinfolist :topic="authorInfo[keys.information_SYS_TOPIC]" :namespace="namespace"></components_authordetail_picinfolist>
        </dd>
        <div class="work_authordetail_01_zzxq_detail_clear"></div>
      </dl>
      <div class="work_authordetail_01_zzxq_rwjs">
        <div class="work_authordetail_01_zzxq_rwjs_tit"><span class="work_authordetail_01_zzxq_rwjs_tit_name">人物介绍</span></div>
        <div class="work_authordetail_01_zzxq_rwjs_con" v-html="authorInfo[keys.information_a_content] || ''"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import PROJECT_CONFIG from "projectConfig";
  import {Get,Post} from "@common";
  import { mapGetters } from "vuex";
  import * as interfaces from "@work/login/common/interfaces.js";
  export default {
    name: "work_authordetail_01",
    reused:true,
    props:["namespace"],
    data:function(){
      return {
        authorInfo:{},
        swiperList:[],
        keys: null
      }
    },
    mounted: function () {
      let CONFIG=PROJECT_CONFIG[this.namespace].components.common;
      this.keys = CONFIG.keys;
    },
    created:function(){
      this.$bus.$on(this.namespace,this.getAuthorInfo);
    },
    computed: {
      ...mapGetters("login", {
        member: interfaces.GET_MEMBER // 获取用户信息
      })
    },
    methods:{
      getAuthorInfo:function(param){
        let params=Object.assign({},CONFIG.params,param);
        Get(CONFIG.url,{"params":params}).then((rep)=>{
          let data=rep.data.data;
          if(data){
            data.currentType=param.currentType;
            this.authorInfo=data;
            this.$bus.$emit("setCrumbs",param.currentType);
          }
        })
      },
      goContribute(value) {
        if (!this.member.loginName) {
          this.$message({
            message: '请登录,登录完了才能投稿~',
            type: 'warning'
          });
          window.location.href = "./login.html";
          return;
        }
        var url = CONFIG.GO_CONTRIBUTE_URL + "authorName=" + this.member.loginName + "&userName=" + value;
        window.open(url);
      }
    }
  }
</script>

<style>
  .work_authordetail_01_zzxq_con {
    padding: 25px 12px 25px 12px;
  }
  .work_authordetail_01_zzxq_detail {
    overflow: hidden;
  }
  .work_authordetail_01_author_imgBox {
    float: left;
  }
  .work_authordetail_01_zzxq_detail_dd {
    float: left;
  }
  .work_authordetail_01_zzxq_detail_tit {
    margin-bottom: 10px;
  }
  .work_authordetail_01_zzxq_detail_tit_xm {
    font-size: 34px;
    color: #424242;
  }
  .work_authordetail_01_zzxq_detail_tit_qtg {
    background-color: #ca0000;
    padding-left: 15px;
    font-size: 14px;
    padding-right: 15px;
    line-height: 35px;
    color: #ffffff;
    float: right;
  }
  .work_authordetail_01_zzxq_detail_tit_qtg_a {
    color: #ffffff;
    text-decoration: none;
    outline: none;
  }
  .work_authordetail_01_zzxq_detail_subtit {
    color: #4c4c4c;
    line-height: 56px;
    font-size: 22px;
  }
  .work_authordetail_01_zzxq_detail_subtit_tubiao {
    border-left: 2px solid #ca0000;
    font-size: 14px;
    margin-right: 10px;
  }
  .work_authordetail_01_zzxq_detail_zhaiyao {
    line-height: 37px;
    font-size: 18px;
    color: #7e7e7e;
  }
  .work_authordetail_01_zzxq_detail_zp {
    color: #545454;
    font-size: 22px;
    line-height: 47px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .work_authordetail_01_zzxq_rwjs {
    margin-top: 88px;
    margin-bottom: 65px;
    clear: both;
  }
  .work_authordetail_01_zzxq_rwjs_tit {
    border-bottom: 1px solid #c50000;
  }
  .work_authordetail_01_zzxq_rwjs_tit_name {
    margin-left: 30px;
    font-size: 24px;
    color: #fff;
    background: #c50000;
    line-height: 54px;
    display: inline-block;
    padding: 0px 15px;
  }
  .work_authordetail_01_zzxq_rwjs_con {
    line-height: 40;
    padding: 20px 30px;
    font-size: 18px;
  }
</style>
