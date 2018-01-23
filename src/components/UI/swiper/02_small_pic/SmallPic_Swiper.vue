<template>
	<div class="swiper-container ui_swiper_02_small_pic">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item, index) in smallPic">
				<div class="oc-item-small-pic">
                  <div class="product iproduct clearfix">
                    <div class="product-image">
                      <a class="index_newBook_imgBox">
                        <img class="index_newBook_img" :src="smallPic && smallPic[index] && smallPic[index].bookUrl" onload="DrawImage(this,225,225)"  alt="暂无封面" style="vertical-align:middle;">
                      </a>
                      <div class="product-overlay">
                        <a  class="item-quick-view w225" :href="(CONFIG.picLinkUrl)+(smallPic && smallPic[index] && smallPic[index].pubId)+'&contentType='+(smallPic && smallPic[index] && smallPic[index].contentType)+'&columnId='+CONFIG.columnId">
                          <i class="icon-zoom-in2"></i>
                          <span> 查看详情</span>
                        </a>
                      </div>
                    </div>
                    <div class="product-desc center">
                      <div class="product-title">
                        <h3 class="product-title-h3-small-pic1">
                          <a class="product-title-h3-a-small-pic1" :href="(CONFIG.picLinkUrl)+(smallPic && smallPic[index] && smallPic[index].pubId)+'&contentType='+(smallPic && smallPic[index] && smallPic[index].contentType)+'&columnId'+CONFIG.columnId">{{smallPic && smallPic[index] && smallPic[index].bookName}}</a>
                        </h3>
                      </div>
                      <div class="product-author">作者：{{smallPic && smallPic[index] && smallPic[index].bookAuthor}}</div>
                      <div class="product-price">
                        <label class="product-price1">定价：</label>
                        ¥{{smallPic && smallPic[index] && smallPic[index].bookPrice}}
                      </div>
                    </div>
                  </div>
				</div>
			</div>
		</div>
		<!-- 如果需要导航按钮 -->
		<div class="swiper-button-prev swiper-button-prev-smallPic"></div>
		<div class="swiper-button-next swiper-button-next-smallPic"></div>
	</div>
</template>
<script type="text/ecmascript-6">
import PROJECT_CONFIG from "projectConfig";
import Swiper from 'swiper';
import { Post } from "@common";

export default {
  name: "ui_swiper_02_small_pic",
  reused: true,
  props: ["namespace"],
  data () {
    return {
      CONFIG: null,
      swiperInitFlag: false,
      smallPic: []
    }
  },
  mounted: function () {
    this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].swiper.smallPic_02 : PROJECT_CONFIG.swiper.smallPic_02;
    this.queryData();
  },
  methods: {
    queryData: function () {
      Post(this.CONFIG.url, this.CONFIG.params || {
        conditions: "[{pub_resource_type:'BOOK'}]",
        orderBy: "BOOK_PUBDATE desc",
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
          loadDatas.push(entry);
        };
        this.smallPic = loadDatas;
        this.$nextTick(this.initSwiper);
      })
    },
    initSwiper: function () {
      var obj = this;
      if (!obj.swiperInitFlag) {
        obj.swiperInitFlag = true
        new Swiper(obj.$el, {
          slidesPerView: 4,
          spaceBetween: 30,
          preventClicksPropagation: true,
          observer: true,
          observeParents: true,
          pagination: {
            el: obj.$el.getElementsByClassName('swiper-pagination'),
            clickable: true,
          },
          navigation: {
            nextEl: obj.$el.getElementsByClassName('swiper-button-next'),
            prevEl: obj.$el.getElementsByClassName('swiper-button-prev'),
          },
        })

      }
    }
  }
}
</script>

<style>
.swiper-button-prev-smallPic {
  top: 35%;
}
.swiper-button-next-smallPic {
  top: 35%;
}
.oc-item-small-pic {
  width: auto;
  display: inline-block !important;
  display: inline;
}
.product-small-pic:hover .product-overlay-small-pic {
  top: 183px;
  height: 46px;
  display: block;
}
.product-price-small-pic > labell {
  font-weight: 400;
  font-size: 90%;
  color: #7f7f7f;
}
.index_newBook_imgBox {
  position: relative;
  display: block;
  width: 225px!important;
  height: 225px!important;
  margin: 0;
  padding: 0;
  line-height: 225px;
  text-align: center;
}

.index_newBook_img {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  margin: 0;
  padding: 0;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
