<!-- APP端图片轮播组件，从getPicGroupDetailList.do接口获取数据，根据获取到的数据类型跳转页面  jiangwei  2018/10/12-->
<template>
  <div class="ui_mobile_swiper_03">
    <van-swipe class="ui_mobile_swiper_03-slides" :autoplay="CONFIG.interval">
      <van-swipe-item v-if="list.length>0 && index < (CONFIG.maxNum ? CONFIG.maxNum : listLength)" v-for="(item,index) in list" :key="index">
        <a class="ui_mobile_swiper_03-slides-a" @click="toDetail(item)">
          <img class="ui_mobile_swiper_03-slides-img" :src="item.picUrl" />
          <div v-if="CONFIG && CONFIG.showTitle && CONFIG.showTitle==true" class="ui_mobile_swiper_03_pictitle"> {{item.picName}}</div>
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Post, Get } from "@common";

export default {
  name: "ui_mobile_swiper_03",
  reused: true,
  props: {
    namespace: String,
    modulename: String
  },
  data() {
    return {
      CONFIG: null,
      list: [],
      listLength: null,
      listKeys: null
    };
  },

  created() {
    this.initConfig();
    this.loadList();
  },

  methods: {
    initConfig() {
      this.CONFIG =
        PROJECT_CONFIG[this.namespace].ui_mobile_swiper.ui_mobile_swiper_03[
          this.modulename
        ];
    },
    loadList() {
      let params = {
        picGroupAlias: this.CONFIG.picGroupAlias,
        siteId: CONFIG.SITE_CONFIG.siteId
      };
      Get(CONFIG.BASE_URL + this.CONFIG.getPicGroupUrl, {
        params: params
      }).then(resp => {
        var data = resp.data.data;
        if (data && data instanceof Array && data.length > 0) {
          this.list = data;
          this.listLength = data.length;
        }
      });
    }, 
    toDetail(item) {    //点击轮播图片，URL：外部链接，COL：链接到栏目，RES：链接到资源
      if (item.picType == "URL") {    
        window.open(
          item.picAddress.indexOf("https://") != -1
            ? item.picAddress
            : "https://" + item.picAddress,
          this.CONFIG.openTarget
        );
      } else if (item.picType == "COL") {
        let param = {
          siteId: CONFIG.SITE_CONFIG.siteId,
          chId: CONFIG.SITE_CONFIG.chId
        };
        if(item.picAddress.indexOf('_') != -1){
          var colId=item.picAddress.split('_')[1];
        }else{
          var colId=item.picAddress;
        }
        Get(CONFIG.BASE_URL + this.CONFIG.getAllColUrl, { params: param }).then(    //调获取所有栏目接口
          resp => {
            var colList = resp.data.data;
            for (var i in colList) {
              if (colList[i].id == colId) {       //栏目ID与返回值一致时，获取外部链接
                window.open(
                  colList[i].url ? colList[i].url : "index.html", this.CONFIG.openTarget
                );
              }
            }
          }
        );
      } else if (item.picType == "RES") {         //链接到资源(资源类型仅为图书)时，调APP内部接口
        let params = "";
        let value = this.CONFIG.phone.values;
        for (let index = 0; index < value.length; index++) {
          const element = value[index];
          if(item[element].indexOf('_') != -1){
            params += item[element].split('_')[1] + ",";
          }else{
            params += item[element]+ ",";
          }
        }
        params = params.substring(0, params.length - 1);
        eval(this.CONFIG.phone.functionName + "(" + params + ")");   
      }
    }
  }
};
</script>
<style>
.ui_mobile_swiper_03 {
  position: relative;
  zoom: 1;
  margin: 0;
  padding: 0;
}
.ui_mobile_swiper_03-slides-img {
  display: block;
  height: 3.19rem;
  width: 100%;
}
.ui_mobile_swiper_03-slides-a {
  position: relative;
  display: block;
  width: 100%;
  height: 3.19rem;
}
.ui_mobile_swiper_03_pictitle {
  display: inline-block;
  position: absolute;
  z-index: 2;
  bottom: 0px;
  height: 20px;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 12px;
  color: #fff;
  padding-left: 20px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
