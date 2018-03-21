<template>
  <div id="carousel" class="jdt ui_swiper_04_pic_nowords">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in picList">
          <div class="slide">
            <div class="testi-image">
              <a class="index_recommend_imgBox">
                <img class="index_recommend_img" :src="picList && picList[index] && picList[index].pub_picSmall" onload="DrawImage(this,282,148)" alt="暂无封面" @click="toDetail(item.id)" style="cursor: pointer;">
              </a>
            </div>
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
      CONFIG: null,
    }
  },
  created: function () {
    this.getData();
  },
  methods: {
    getData: function () {
      let CONFIG = PROJECT_CONFIG[this.namespace].swiper.pic_noWords_04;
      this.CONFIG = JSON.parse(JSON.stringify(CONFIG));
      Post(CONFIG.url, CONFIG.params).then((rep) => {
        this.picList = rep.data.result;
        this.$nextTick(this.initSwiper);
      })
    },
    initSwiper: function () {
      new Swiper(".swiper-container", {
        slidesPerView: 4,
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
    }
  }
}
</script>

<style>

.ui_swiper_04_pic_nowords .index_recommend_imgBox {
  /* display: inline-block;
  width: 282px;
  height: 148px; */
}
</style>
