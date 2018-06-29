<template>
	<div class="ui_swiper_01_pic">

		<el-carousel :interval="CONFIG.interval" arrow="always" :height="CONFIG.height">
			<template v-for="(item, index) in picList">
        <div @click="backgroundImgEve(item)" :key="index">
          <el-carousel-item :key="index" :style="{backgroundImage: 'url(\''+item.pub_picBig+'\')'}" class="background_image_no_repeat">
					<template v-if="CONFIG && CONFIG.complicatedItem" v-for="(config, config_i) in CONFIG.complicatedItem">
            <!-- 需要特殊处理的复杂项 -->
            <!-- img 图片 -->
            <div :key="config_i" v-if="config.name == 'img'" class="ui_swiper_01_resourcelists_li_imgcontainter" @click="toCustomFun(item, config)">
              <label class="ui_swiper_01_resourcelists_img_label">{{config.display}}</label>
              <img class="ui_swiper_01_resourcelists_li_img" v-bind="{class: 'ui_swiper_01_resourcelists_' + config.field}" :src=" item[keys[config.field]] " :alt="CONFIG && CONFIG.staticText && CONFIG.staticText.noImg ? CONFIG.staticText.noImg : '暂无图片'" @load="dealResourceImg($event)"/>
            </div>

            <!-- 自定义事件按钮 包括（title 标题） -->
            <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_swiper_01_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(item, config)">
              <label class="ui_swiper_01_resourcelists_btnlabel">{{config.display}}</label>
              <span v-bind="{class: 'ui_swiper_01_resourcelists__btncontainer_' + config.field}" v-if="keys[config.field]" v-html="item[keys[config.field]]"></span>
            </span>

            <!-- price 价格 -->
            <span :key="config_i" v-else-if="config.name == 'price'" class="ui_swiper_01_resourcelists_li_pricecontainter">
              <label class="ui_swiper_01_resourcelists_price_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_swiper_01_resourcelists_' + config.field}">{{ item[keys[config.field]]  | formatPriceNew }}</span>
            </span>

            <!-- time 时间 -->
            <span :key="config_i" v-else-if="config.name == 'time'" class="ui_swiper_01_resourcelists_li_timecontainter">
              <label class="ui_swiper_01_resourcelists_time_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_swiper_01_resourcelists_' + config.field}">{{ item[keys[config.field]] | formatDateNEW}}</span>
            </span>

            <!-- 其他不需要特殊处理的简单项 -->
            <span :key="config_i" v-else  class="ui_swiper_01_resourcelists_other">
              <label class="ui_swiper_01_resourcelists_li_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_swiper_01_resourcelists_' + config.field}">{{ item[keys[config.field]] }}</span>
            </span>

          </template>
				</el-carousel-item>
        </div>

			</template>

		</el-carousel>



	</div>
</template>
<script type="text/ecmascript-6">
import PROJECT_CONFIG from "projectConfig";
import { Post, getFieldAdapter, toOtherPage } from "@common";

export default {
  name: "ui_swiper_01_pic",
  reused: true,
  props: ["namespace"],
  data: function () {
    return {
      CONFIG: null,
      picList: []
    }
  },
  created: function () {
    this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].swiper.pic_01 : PROJECT_CONFIG.swiper.pic_01;
    this.keys = getFieldAdapter(this.CONFIG.sysAdapter, this.CONFIG.typeAdapter);
    this.queryData();
  },
  methods: {
    backgroundImgEve (item) {  // 点击轮播图图片的时候 优先级：来源链接 >> 详情
      window.open(item[this.keys.sourceUrl] ? item[this.keys.sourceUrl] : toOtherPage(item, this.CONFIG.toDetail, this.keys));
    },
    toCustomFun (item, config) { // 执行自定义事件
      window.open(item[this.keys.sourceUrl] ? item[this.keys.sourceUrl] : toOtherPage(item, this.CONFIG[config.method]), this.keys);
    },
    queryData: function () {
      Post(CONFIG.BASE_URL + this.CONFIG.url, this.CONFIG.params).then((rep) => {
        var data = rep.data.result;
        if (data && data instanceof Array && data.length > 0) {
          this.picList = data;
        }
      })
    }
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.background_image_no_repeat {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  cursor: pointer;
}

.ui_swiper_01_resourcelists_btncontainer_resName_0 {
  display: inline-block;
  position: absolute;
  z-index: 2;
  bottom: 0px;
  height: 40px;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding-left: 20px;
  width: 100%;
  box-sizing: border-box;
}

.ui_swiper_01_resourcelists__btncontainer_resName {
  cursor: pointer;
}
</style>
