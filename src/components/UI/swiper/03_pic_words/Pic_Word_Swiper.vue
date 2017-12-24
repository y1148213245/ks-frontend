<template>
  <div class="swiper-container ui_swiper_03_pic_words">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in picWords">
        <div class="slide">
          <div class="testi-image">
            <a class="index_recommend_imgBox">
              <img class="index_recommend_img" :src="picWords && picWords[index] && picWords[index].bookUrl" onload="DrawImage(this,200,200)" alt="暂无封面">
            </a>
          </div>
          <div class="testi-content">
            <div class="product-title">
              <h3>
                <a
                  :href="'/pages/bookDetail/bookDetail.html?pubId='+(picWords && picWords[index] && picWords[index].pubId)+'&contentType='+(picWords && picWords[index] && picWords[index].contentType)+'&columnId=51'">
                  {{picWords && picWords[index] && picWords[index].bookName}}
                </a>
              </h3>
            </div>
            <div class="product-author">
              作者：{{picWords && picWords[index] && picWords[index].bookAuthor}}
            </div>
            <p>{{picWords && picWords[index] && picWords[index].bookRemark}}</p>

            <div class="testi-meta">
              {{picWords && picWords[index] && picWords[index].bookAuthor}}
              <span>{{picWords && picWords[index] && picWords[index].evaluate}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination pic_word_pagionation"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import PROJECT_CONFIG from "projectConfig";
  import Swiper from 'swiper';
  import {Post,DrawImage} from "@common";

  export default {
    name: "ui_swiper_03_pic_words",
    reused: true,
    props: ["namespace"],
    data () {
    return {
      swiperInitFlag: false,
      picWords: [],
      CONFIG: null
    }
  },
  mounted: function () {
    this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].swiper.pic_word_03 : PROJECT_CONFIG.swiper.pic_word_03;

    this.queryData();
  },
  methods: {
    queryData: function () {
      Post(this.CONFIG.url, this.CONFIG.params || {
          conditions: "[{pub_resource_type:'BOOK'}]",
          orderBy: null,
          pageNo: "1",
          pageSize: "15",
          searchText: null
        }).then((rep) => {
        var datas = rep.data.result;
        var loadDatas = [];
        var message = {};
        for (var i = 0; i < datas.length; i++) {
          var entry = {
            bookName: datas[i].pub_resource_name || '暂无书名',
            bookPrice: datas[i].BOOK_PRICE || '暂无价格',
            bookAuthor: datas[i].BOOK_SYS_AUTHORS || '暂无作者',
            pubId: datas[i].id || 0,
            contentType: datas[i].pub_content_type || 0,
            bookUrl: datas[i].pub_picBig || ""
          };
          loadDatas.push(entry)
        }
        ;
        this.picWords = loadDatas;
        this.$nextTick(this.initSwiper);
      })
    },
    initSwiper: function () {
      var obj = this;
      if (!obj.swiperInitFlag) {
        obj.swiperInitFlag = true
        new Swiper(obj.$el, {
          spaceBetween: 30,
          observer:true,
          observeParents:true,
          pagination: {
            el: obj.$el.getElementsByClassName('swiper-pagination'),
            clickable: true,
            paginationType: 'bullets',
            paginationElement: 'li',
          },
        })
      }
    }
  }
  }
</script>

<style>
  .pic_word_pagionation > .swiper-pagination-bullet {
    background: #d38391;
  }

  .pic_word_pagionation > .swiper-pagination-bullet-active {
    background: #ae0f2b !important;
  }

  .pic_word_pagionation {

    width: auto!important;
    display: inline-block;
    display: inline;
    float: right;
    position: inherit;
  }

  .testi-image, .testi-image a, .testi-image img, .testi-image i {
    display: block;
    width: 200px;
    height: 200px;
    float: left;
    margin-right: 15px;
  }

  .product-title {
    margin-bottom: 0px;
    font-size: 24px;
  }

  .product-author {
    font-size: 12px;
    color: #7F7F7F;
  }

  .testi-content p {
    padding: 18px 0px;
    overflow: hidden;
    max-height: 120px;
    margin: 8px 0 0px 0px;
    font-family: serif;
    font-style: italic;
  }

</style>
