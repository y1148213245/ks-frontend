<template>
  <div id="carousel" class="jdt ui_swiper_04_pic_nowords">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="num in picList_group" :key="num">
          <div class="ui_swiper_04_pic_nowords-slide">
            <el-col :span="6" style="text-align:center;" v-for="(item,index) in picList" :key="index" v-if="index>=(num-1)*4 && index<(num)*4">
              <div class="ui_swiper_04_pic_nowords-slide-item">
                <a class="index_recommend_imgBox">
                  <img class="index_recommend_img" :src="picList && picList[index] && picList[index].pub_picSmall" onload="DrawImage(this,282,148)" :alt="getStaticText('noCover') ? getStaticText('noCover') : 暂无封面" @click="toDetail(item.id)" style="cursor: pointer;">
                </a>
              </div>
            </el-col>
          </div>
        </div>
      </div>
      <div class="swiper-pagination pic_noWords_pagionation swiper-visible-switch"></div>
    </div>
  </div>
</template>

<script>
import { Post, DrawImage } from "@common";
import PROJECT_CONFIG from "projectConfig";
import Swiper from 'swiper';
export default {
  name: "ui_swiper_04_pic_nowords",
  reused: true,
  props: ["namespace"],
  data: function () {
    return {
      picList: [],
      picList_group: 0,
      CONFIG: "",
    }
  },
  created: function () {
    this.getData();
  },
  methods: {
    getData: function () {
      let vCONFIG = PROJECT_CONFIG[this.namespace].swiper.pic_noWords_04;
      this.CONFIG = JSON.parse(JSON.stringify(vCONFIG));
      Post(CONFIG.BASE_URL+vCONFIG.url, vCONFIG.params).then((rep) => {
        this.picList = rep.data.result;
        this.picList_group = Math.ceil(this.picList.length / 4)
        this.$nextTick(this.initSwiper);
      })
    },
    initSwiper: function () {
      new Swiper(".swiper-container", {
        // slidesPerView: 4,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          paginationAsRange: true
        },
      })
    },
    toDetail (id) {
      window.location.href = this.CONFIG.infoDetailHref + id;
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },

  }
}
</script>

<style>
.ui_swiper_04_pic_nowords-slide {
  width: 100%;
}
.ui_swiper_04_pic_nowords-slide-item{
  display: inline-block;
}
.ui_swiper_04_pic_nowords .index_recommend_imgBox {
  display: inline-block;
  width: 282px;
  height: 148px;
}
</style>
