<template>
	<div class="ui_swiper_column_10_pic">
        <div class="ui_swiper_column_10_comtitle_con" v-if="CONFIG && CONFIG.comTitle && CONFIG.comTitle.isShow">
            <div v-if="parentColumnData[keys.bigPic]" class="ui_swiper_column_10_comtitle_imgdiv">
                <img class="ui_swiper_column_10_comtitle_imgdiv_img" :src="parentColumnData[keys.bigPic]" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" />
            </div>
            <h4 class="ui_swiper_column_10_comtitle"> {{CONFIG.comTitle.name ? CONFIG.comTitle.name : parentColumnData[keys.name]}} </h4>
            <span class="ui_swiper_column_10_comtitle_columnDetailInfo">{{parentColumnData[keys.code]}}</span>
        </div>
		<el-carousel :autoplay="CONFIG.swiper.autoplay" :trigger="CONFIG.swiper.trigger" :interval="CONFIG.swiper.interval" :arrow="CONFIG.swiper.arrow" :height="CONFIG.swiper.height">
			<template v-for="(item, index) in columnList">
                <el-carousel-item :key="index" v-bind="{class:'ui_swiper_column_10_item' + index}">
                  <div class="ui_swiper_column_10_item_main">
                    <template v-if="CONFIG && CONFIG.complicatedItem" v-for="(config, i) in CONFIG.complicatedItem">
                        <div :key="i" v-if="config.name == 'img'" class="ui_swiper_column_10_resourcelists_li_imgcontainter" @click="toCustomFun(item, config)">
                            <label class="ui_swiper_column_10_resourcelists_img_label">{{config.display}}</label>
                            <img class="ui_swiper_column_10_resourcelists_li_img" v-bind="{class: 'ui_swiper_column_10_resourcelists_' + config.field}" :src="item[keys[config.field]] || require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'"/>
                        </div>

                        <div :key="i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_swiper_column_10_resourcelists_btncontainer_' + config.field + '_' + i}" @click="toCustomFun(item, config)">
                            <label class="ui_swiper_column_10_resourcelists_btnlabel">{{config.display}}</label>
                            <span v-bind="{class: 'ui_swiper_column_10_resourcelists__btncontainer_' + config.field}" v-if="keys[config.field]" v-html="item[keys[config.field]]"></span>
                        </div>

                        <div :key="i" v-else-if="config.name == 'time'" class="ui_swiper_01_resourcelists_li_timecontainter">
                            <label class="ui_swiper_01_resourcelists_time_label">{{config.display}}</label>
                            <span v-bind="{class: 'ui_swiper_01_resourcelists_' + config.field}">{{formatDateNEW(item[keys[config.field]])}}</span>
                        </div>

                        <div :key="i" v-else  class="ui_swiper_column_10_resourcelists_other">
                            <label class="ui_swiper_column_10_resourcelists_li_label">{{config.display}}</label>
                            <span v-bind="{class: 'ui_swiper_column_10_resourcelists_' + config.field}">{{ item[keys[config.field]] }}</span>
                        </div>
                    </template>
                  </div>
                </el-carousel-item>
		    </template>
		</el-carousel>
  </div>
</template>
<script type="text/ecmascript-6">
import PROJECT_CONFIG from "projectConfig";
import { Post, Get, getFieldAdapter, toOtherPage } from "@common";
import moment from "moment";

export default {
  name: "ui_swiper_column_10_pic",
  reused: true,
  props: ["namespace", "modulename"],
  data: function() {
    return {
      CONFIG: null,
      parentColumnData: [],  // 父栏目数据
      columnList: [], // 子栏目数据
      keys: {} // 接口字段容器
    };
  },
  created: function() {
    this.CONFIG = PROJECT_CONFIG[this.namespace].swiper.ui_swiper_column_10[this.modulename];
    this.keys = getFieldAdapter(this.CONFIG.sysAdapter, this.CONFIG.typeAdapter);
    this.queryParentData();
    this.queryChildColumnData();
  },
  methods: {
    toCustomFun(item, config) {
        // 直接跳转
        if(config.method == "toUrl"){
            window.open(item.url ? item.url : location.href);
        }
        // 去更多,传递栏目id,用columnId(不用colId或id),避免参数重名
        else if(config.method == "toMore"){
            window.open(toOtherPage(item, this.CONFIG[config.method], this.keys));
        }
    },
    // 获取父栏目数据
    queryParentData: function() {
      Post(CONFIG.BASE_URL + this.CONFIG.getParentData.url + "?colId=" + this.CONFIG.getParentData.params.colId).then(rep => {
        if (rep.data.success) {
          this.parentColumnData = rep.data.data;
        }
      });
    },
    // 获取子栏目数据
    queryChildColumnData: function() {
      Post(CONFIG.BASE_URL + this.CONFIG.getChildColumnData.url + "?colId=" + this.CONFIG.getChildColumnData.params.colId).then(rep => {
        var data = rep.data.data;
        if (data && data instanceof Array && data.length > 0) {
          let self = this;
            // 过滤不想展示的栏目
            if(self.CONFIG.colIds){
                data.forEach(function(ele,index){
                    if(self.CONFIG.colIds.indexOf(ele.id) == -1){
                        self.columnList.push(ele);
                    }
                });
            }else{
              self.columnList = data;
            }
        }
      });
    },
    getStaticText(text) {
      if (
        this.CONFIG &&
        this.CONFIG.staticText &&
        this.CONFIG.staticText[text]
      ) {
        return this.CONFIG.staticText[text];
      } else {
        return false;
      }
    },
    formatDateNEW(value) {
      if (value) {
        return moment(Number(value)).format("YYYY-MM-DD");
      } else {
        return this.getStaticText("noDate")
          ? this.getStaticText("noDate")
          : "暂无日期";
      }
    }
  }
};
</script>

<style>
.el-carousel__container{
    background: #d3dce6;
}
</style>

