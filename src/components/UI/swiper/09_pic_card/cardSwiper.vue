<template>
<div class="ui_swiper_09_card">
  <!-- 组件的标题、副标题、去更多传colId 都得从栏目详情的接口里面取值 -->
    <!-- 组件标题 取配置的name 或者 父栏目名称 -->
    <div class="ui_swiper_09_card_comtitle_con" v-if="CONFIG && CONFIG.comTitle && CONFIG.comTitle.isShow && columnDetailInfo && columnKeys">
      <div :key="config_i" v-if="typeof(CONFIG.comTitle.isShowImg!='undefined') && CONFIG.comTitle.isShowImg" class="ui_swiper_09_card_comtitle_imgdiv">
        <img class="ui_swiper_09_card_comtitle_imgdiv_img" :src=" columnDetailInfo[columnKeys.bigPic]" alt="暂无图片" />
      </div>
      <h4 class="ui_swiper_09_card_comtitle"> {{CONFIG.comTitle.name ? CONFIG.comTitle.name : columnDetailInfo[columnKeys.name]}} </h4>
      <span class="ui_swiper_09_card_comtitle_columnDetailInfo">{{columnDetailInfo[columnKeys.code]}}</span>
    </div>
    <!-- 更多按钮 -->
    <div class="ui_swiper_09_card_tomore_con" v-if="CONFIG && CONFIG.toMoreBtn && CONFIG.toMoreBtn.isShow && columnDetailInfo" @click="toCustomFun(columnDetailInfo, CONFIG.toMoreBtn, columnKeys)">
      <span class="ui_swiper_09_card_tomore_name"> {{CONFIG.toMoreBtn.name}}</span>
      <i class="ui_swiper_09_card_tomore_icon" v-bind="{class: CONFIG.toMoreBtn.iconClass}"></i>
    </div>
	<div class="swiper-container">
		<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item, index) in picList" :key="index" v-if="index >= CONFIG.startNum">
            <template v-for="(config, config_i) in CONFIG.complicatedItem">
              <!-- 需要特殊处理的复杂项 -->
              <!-- img 图片 -->
              <div :key="config_i" v-if="config.name == 'img'" class="ui_swiper_09_card_imgcontainter">
                <label class="ui_swiper_09_card_img_label">{{config.display}}</label>
                <img class="ui_swiper_09_card_img" v-bind="{class: 'ui_swiper_09_card_' + config.field}" :src="item[keys[config.field]] || require('@static/img/defaultCover.png')" :alt="CONFIG && CONFIG.staticText && CONFIG.staticText.noImg ? CONFIG.staticText.noImg : '暂无图片'"/>
              </div>

              <!-- 自定义事件按钮 包括（title 标题） -->
            <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_swiper_09_card_btncontainer_' + config.field + '_' + config_i}">
              <label class="ui_swiper_09_card_btnlabel">{{config.display}}</label>
              <span v-bind="{class: 'ui_swiper_09_card__btncontainer_' + config.field}" v-if="keys[config.field]" v-html="item[keys[config.field]]"></span>
            </span>

              <!-- price 价格 -->
              <span :key="config_i" v-else-if="config.name == 'price'" class="ui_swiper_09_card_li_pricecontainter">
                <label class="ui_swiper_09_card_price_label">{{config.display}}</label>
                <span v-bind="{class: 'ui_swiper_09_card_' + config.field}">{{ item[keys[config.field]]  | formatPriceNew }}</span>
              </span>

              <!-- time 时间 -->
              <span :key="config_i" v-else-if="config.name == 'time'" class="ui_swiper_09_card_li_timecontainter">
                <label class="ui_swiper_09_card_time_label">{{config.display}}</label>
                <span v-bind="{class: 'ui_swiper_09_card_' + config.field}">{{ item[keys[config.field]] | formatDateNEW}}</span>
              </span>

              <!-- 其他不需要特殊处理的简单项 -->
              <span :key="config_i" v-else  class="ui_swiper_09_card_other">
                <label class="ui_swiper_09_card_li_label">{{config.display}}</label>
                <span v-bind="{class: 'ui_swiper_09_card_' + config.field}">{{ item[keys[config.field]] }}</span>
              </span>
            </template>
			</div>
		</div>
    <!-- 分页 -->
    <div class="swiper-pagination" v-if="CONFIG.swiper.isShowPaging"></div>
	</div>
    <!-- 导航 -->
    <a class="swiper-arrow ui_swiper_09_card_arrow-left" href="#" v-if="CONFIG.swiper.isShowNav" @click="gotoSlidePrev($event)">后退</a>
    <a class="swiper-arrow ui_swiper_09_card_arrow-right" href="#" v-if="CONFIG.swiper.isShowNav" @click="gotoSlideNext($event)">前进</a>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from "vue";
import PROJECT_CONFIG from "projectConfig";
import URL from 'url';
import { Post, getFieldAdapter, toOtherPage } from "@common";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "ui_swiper_09_card",
  reused: true,
  props: ["namespace", "modulename"],
  data: function() {
    return {
      CONFIG: null,
      picList: [],
      columnKeys: {}, // 栏目字段适配容器
      colId: "",
      columnDetailInfo: "", // 栏目详细信息
      initObj: {  // swiper配置参数对象
        preventClicksPropagation: true,
        observer: true,
        observeParents: true
      },
      mySwiper: {}  // swiper对象
    };
  },
  created: function() {
     var uriQuery = URL.parse(document.URL, true).query;
    // this.colId = uriQuery.colId; // 从地址栏接收栏目id
    if(typeof(uriQuery.colId)!="undefined"){
      this.colId = uriQuery.colId;
    }
    this.CONFIG = PROJECT_CONFIG[this.namespace].swiper.ui_swiper_09_card[this.modulename];
    this.keys = getFieldAdapter(
      this.CONFIG.sysAdapter,
      this.CONFIG.typeAdapter
    );
    if (this.CONFIG.getSubTitle && this.CONFIG.getSubTitle.sysAdapter && this.CONFIG.getSubTitle.typeAdapter) { // 兼容没有配栏目字段适配器的组件
      this.columnKeys = JSON.parse(JSON.stringify(getFieldAdapter(this.CONFIG.getSubTitle.sysAdapter, this.CONFIG.getSubTitle.typeAdapter)));
    }
    
    if (this.CONFIG && this.CONFIG.onEvent && this.CONFIG.onEvent.eventName) { // 通过接收广播获取栏目id
      this.$bus.$on(this.CONFIG.onEvent.eventName, (data) => {
        this.picList = [];
        this.changeColId(data[0]);
        this.queryData();
        this.getColumnSubTitle();
      })
    } else {
      this.queryData();
      this.getColumnSubTitle();
    }
  },
  methods: {
    changeColId (item) { // 在广播事件外修改colId
        this.colId = item;
    },
    toCustomFun(item, config) {
      // 执行自定义事件
      window.open(item[this.keys.sourceUrl] ? item[this.keys.sourceUrl]: toOtherPage(item, this.CONFIG[config.method],this.keys));
    },
    queryData: function() {
      let paramsObj = Object.assign({}, this.CONFIG.params);
      paramsObj.conditions.map(item => {
        if (item.hasOwnProperty(this.keys.colId)) {
          item[this.keys.colId] = this.colId
            ? this.colId
            : item[this.keys.colId];
        }
      });
      paramsObj.conditions = JSON.stringify(paramsObj.conditions);
      Post(CONFIG.BASE_URL + this.CONFIG.url, paramsObj).then(rep => {
        var data = rep.data;
        if (data && data.result.length > 0) {
          this.picList = data.result;
          this.$nextTick(this.initSwiper);
        }
      });
    },
    getColumnSubTitle () { // 获取栏目副标题
      Post(CONFIG.BASE_URL + this.CONFIG.getSubTitle.url + '?colId=' + (this.colId ? this.colId : this.CONFIG.getSubTitle.params.colId)).then((rep) => {
        let datas = rep.data;
        if (datas.success && datas.data) {
          this.columnDetailInfo = datas.data;
        }
      });
    },
    initSwiper: function() {
      var obj = this;
      this.initObj["direction"] = this.CONFIG.swiper.direction;
      this.initObj["slidesPerView"] = this.CONFIG.swiper.slidesPerView
        ? this.CONFIG.swiper.slidesPerView
        : 4;
      this.initObj["spaceBetween"] = this.CONFIG.swiper.spaceBetween
        ? this.CONFIG.swiper.spaceBetween
        : 30;
      this.initObj["autoplay"] = this.CONFIG.swiper.autoplay
        ? this.CONFIG.swiper.autoplay
        : 0;
      this.initObj["loop"] = this.CONFIG.swiper.loop
        ? this.CONFIG.swiper.loop
        : false;
      this.initObj["speed"] = this.CONFIG.swiper.speed || 300;
      this.initObj["autoplayDisableOnInteraction"] = this.CONFIG.swiper.autoplayInteraction ? true : false;
      this.initObj["simulateTouch"] = this.CONFIG.swiper.simulateTouch ? true : false;
      if (this.CONFIG.swiper.isShowPaging) {
        this.initObj["pagination"] = obj.$el.getElementsByClassName(
          "swiper-pagination"
        )
      }
      if (this.initObj["pagination"]) {
        this.initObj["paginationClickable"] = true;
      }
      this.initObj["onClick"] = function(swiper,event){
        // 解决loop:true时复制的元素不能跳转的问题,但是只能跳转到一个链接地址
        //TODO: 更好的解决loop:true时复制的元素不能跳转的问题(给可能被点击的元素加属性.属性值为当前配置,这样就可以知道当前元素的对应配置在complicatedItem中的索引)
        var index;
        event.path.forEach(element => {
          //console.dir(element);
          // "in"遍历对象属性,可检测自身属性和原型链上的属性,但是hasOwnProperty只能检测自身属性,无法检测原型链上的属性
          if("dataset" in element){
            if("swiperSlideIndex" in element.dataset){
                index = Number(element.dataset["swiperSlideIndex"]);
                if(!isNaN(index)){
                  index = index;
                  return;
                }
            }
          }
        });
        obj.toCustomFun(obj.picList[index], obj.CONFIG.complicatedItem.length > 0 ? obj.CONFIG.complicatedItem[0] : {});
      };
      this.mySwiper = new Swiper(obj.$el.getElementsByClassName("swiper-container"), this.initObj);
    },
    gotoSlidePrev: function(e){
      e.preventDefault();
      this.mySwiper.slidePrev();
    },
    gotoSlideNext: function(e){
      e.preventDefault();
      this.mySwiper.slideNext();
    },
  }
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
