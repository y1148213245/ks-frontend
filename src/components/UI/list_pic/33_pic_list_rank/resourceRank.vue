<!-- 资源排行组件 Created by song 2018/05/17 -->
<template>
  <div class="ui_list_pic_33">
    <!-- 组件的标题、副标题、去更多传colId 都得从栏目详情的接口里面取值 -->
    <!-- 组件标题 取配置的name 或者 父栏目名称 -->
    <div class="ui_list_pic_33_comtitle_con" v-if="CONFIG && CONFIG.comTitle && CONFIG.comTitle.isShow && columnDetailInfo">
      <h4 class="ui_list_pic_33_comtitle"> {{CONFIG.comTitle.name ? CONFIG.comTitle.name : columnDetailInfo[columnKeys.name]}} </h4>
      <span class="ui_list_pic_33_comtitle_columnDetailInfo">{{columnDetailInfo[columnKeys.code]}}</span>
    </div>
    <!-- 更多按钮 -->
    <div class="ui_list_pic_33_tomore_con" v-if="CONFIG && CONFIG.toMoreBtn && CONFIG.toMoreBtn.isShow && columnDetailInfo" @click="toCustomFun(columnDetailInfo, CONFIG.toMoreBtn)">
      <span class="ui_list_pic_33_tomore_name"> {{CONFIG.toMoreBtn.name}}</span>
        <i class="ui_list_pic_33_tomore_icon" v-bind="{class: CONFIG.toMoreBtn.iconClass}"></i>
    </div>

    <div class="ui_list_pic_33_resourcelists">
      <ul class="ui_list_pic_33_resourcelists_ul" v-if="resourceLists && resourceLists.length > 0">
        <li class="ui_list_pic_33_resourcelists_li ui_list_pic_33_resourcelists_toggleElement" v-for="(item, index) in resourceLists" :key="index" v-if="index >= resourceListsConfig.startNum && resourceListsConfig" @mouseenter="toggleDisplay(item, index)" :class="{ui_list_pic_33_resourcelists_toggleShow: hoverIndex == index && resourceListsConfig.hasHoverEvent == true}">
          <span class="ui_list_pic_33_resourcelists_li_rank"> {{index + 1}} </span>
          <template v-for="(config, config_i) in resourceListsConfig.complicatedItem" v-if="config.hoverEvent == 'false' && hoverIndex !== index">
            <!-- 需要特殊处理的复杂项 -->
            <!-- img 图片 -->
            <div :key="config_i" v-if="config.name == 'img'" class="ui_list_pic_33_resourcelists_li_imgcontainter" @click="toCustomFun(item, config)">
              <label class="ui_list_pic_33_resourcelists_img_label">{{config.display}}</label>
              <img class="ui_list_pic_33_resourcelists_li_img" v-bind="{class: 'ui_list_pic_33_resourcelists_' + config.field}" :src=" item[keys[config.field]] " alt="暂无图片" @load="dealResourceImg($event)"/>
            </div>

            <!-- 自定义事件按钮 包括（title 标题） -->
            <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_list_pic_33_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(item, config)">
              <label class="ui_list_pic_33_resourcelists_btnlabel">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_33_resourcelists__btncontainer_' + config.field}" v-if="keys[config.field]">{{ item[keys[config.field]] }}</span>
            </span>

            <!-- price 价格 -->
            <span :key="config_i" v-else-if="config.name == 'price'" class="ui_list_pic_33_resourcelists_li_pricecontainter">
              <label class="ui_list_pic_33_resourcelists_price_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_33_resourcelists_' + config.field}">{{ item[keys[config.field]]  | formatPriceNew }}</span>
            </span>

            <!-- time 时间 -->
            <span :key="config_i" v-else-if="config.name == 'time'" class="ui_list_pic_33_resourcelists_li_timecontainter">
              <label class="ui_list_pic_33_resourcelists_time_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_33_resourcelists_' + config.field}">{{ item[keys[config.field]] | formatDateNEW}}</span>
            </span>

            <!-- 其他不需要特殊处理的简单项 -->
            <span :key="config_i" v-else  class="ui_list_pic_33_resourcelists_other">
              <label class="ui_list_pic_33_resourcelists_li_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_33_resourcelists_' + config.field}">{{ item[keys[config.field]] }}</span>
            </span>

          </template>

          <template v-for="(config, config_i) in resourceListsConfig.complicatedItem" v-if="config.hoverEvent == 'true' && hoverIndex === index">
            <!-- 需要特殊处理的复杂项 -->
            <!-- img 图片 -->
            <div :key="config_i" v-if="config.name == 'img'" class="ui_list_pic_33_resourcelists_li_imgcontainter" @click="toCustomFun(item, config)">
              <label class="ui_list_pic_33_resourcelists_img_label">{{config.display}}</label>
              <img class="ui_list_pic_33_resourcelists_li_img" v-bind="{class: 'ui_list_pic_33_resourcelists_' + config.field}" :src=" item[keys[config.field]] " alt="暂无图片" @load="dealResourceImg($event)"/>
            </div>

            <!-- 自定义事件按钮 包括（title 标题） -->
            <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_list_pic_33_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(item, config)">
              <label class="ui_list_pic_33_resourcelists_btnlabel">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_33_resourcelists__btncontainer_' + config.field}" v-if="keys[config.field]">{{ item[keys[config.field]] }}</span>
            </span>

            <!-- price 价格 -->
            <span :key="config_i" v-else-if="config.name == 'price'" class="ui_list_pic_33_resourcelists_li_pricecontainter">
              <label class="ui_list_pic_33_resourcelists_price_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_33_resourcelists_' + config.field}">{{ item[keys[config.field]]  | formatPriceNew }}</span>
            </span>

            <!-- time 时间 -->
            <span :key="config_i" v-else-if="config.name == 'time'" class="ui_list_pic_33_resourcelists_li_timecontainter">
              <label class="ui_list_pic_33_resourcelists_time_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_33_resourcelists_' + config.field}">{{ item[keys[config.field]] | formatDateNEW}}</span>
            </span>

            <!-- 其他不需要特殊处理的简单项 -->
            <span :key="config_i" v-else  class="ui_list_pic_33_resourcelists_other">
              <label class="ui_list_pic_33_resourcelists_li_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_33_resourcelists_' + config.field}">{{ item[keys[config.field]] }}</span>
            </span>
            
            

          </template> 
        </li>
      </ul>

      <div class="ui_list_pic_33_resourcelists_nodata" v-if="resourceLists && resourceLists.length == 0">暂无数据</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Get, Post, DrawImage, getFieldAdapter, toOtherPage } from "@common";
import URL from 'url';
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'ui_list_pic_33',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      resourceLists: [], //资源列表
      keys: {}, // 列表接口字段容器
      columnKeys: {}, // 栏目接口字段容器
      hoverIndex: 0, // 鼠标移上去显示
    };
  },

  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.list_pic_33[this.modulename];
    this.resourceListsConfig = this.CONFIG.getResourceLists;
    this.keys = JSON.parse(JSON.stringify(getFieldAdapter(this.CONFIG.getResourceLists.sysAdapter, this.CONFIG.getResourceLists.typeAdapter)));
    this.columnKeys = JSON.parse(JSON.stringify(getFieldAdapter(this.CONFIG.getSubTitle.sysAdapter, this.CONFIG.getSubTitle.typeAdapter)));
    this.hoverIndex = this.resourceListsConfig.hasHoverEvent ? this.hoverIndex : ''; // 只有当配置了有鼠标移入事件才触发

    this.getResourceLists();  // 获取资源列表
    this.getColumnSubTitle(); // 获取栏目副标题
  },

  methods: {
    toCustomFun (item, config) { // 执行自定义事件
      window.open(toOtherPage(this, item, this.CONFIG[config.method]));
    },
    toggleDisplay (item, index) {  //鼠标移入效果 只有当配置了有鼠标移入事件才触发
      this.hoverIndex = this.resourceListsConfig.hasHoverEvent ? index : '';
    },
    getColumnSubTitle () { // 获取栏目副标题
      Post(CONFIG.BASE_URL + this.CONFIG.getSubTitle.url + '?colId=' + this.CONFIG.getSubTitle.params.colId).then((rep) => {
        let datas = rep.data;
        if (datas.success && datas.data) {
          this.columnDetailInfo = datas.data;
        }
      });
    },
    getResourceLists () { // 获取资源列表
      let paramsObj = Object.assign({}, this.resourceListsConfig.params);
      paramsObj.pageSize = this.resourceListsConfig.maxNum ? this.resourceListsConfig.maxNum + '' : '15';
      paramsObj.conditions = JSON.stringify(paramsObj.conditions);
      Post(CONFIG.BASE_URL + this.resourceListsConfig.url, paramsObj).then((rep) => {
        let datas = rep.data;
        if (datas.success && datas.result && datas.result.length > 0) {
          this.resourceLists = datas.result;
        }
      });
    },
    dealResourceImg (eve) { // 处理图片尺寸
      DrawImage(eve.path[0], this.CONFIG.infoImgWidth, this.CONFIG.infoImgWidth);
    }
  },
}
</script>
<style>
.ui_list_pic_33_resourcelists_ul {
  list-style-type: none;
}

.ui_list_pic_33_resourcelists_toggleElement {
  padding: 10px;
  height: 40px;
  overflow: hidden;
  transition: height 0.5s;
  -moz-transition: height 0.5s; /* Firefox 4 */
  -webkit-transition: height 0.5s; /* Safari and Chrome */
  -o-transition: height 0.5s; /* Opera */
}

.ui_list_pic_33_resourcelists_toggleShow {
  height: 180px;
}

.ui_list_pic_33_resourcelists_ul .ui_list_pic_33_resourcelists_li:nth-child(1) .ui_list_pic_33_resourcelists_li_rank, .ui_list_pic_33_resourcelists_ul .ui_list_pic_33_resourcelists_li:nth-child(2) .ui_list_pic_33_resourcelists_li_rank,.ui_list_pic_33_resourcelists_ul .ui_list_pic_33_resourcelists_li:nth-child(3) .ui_list_pic_33_resourcelists_li_rank {
  color: red;
}

</style>