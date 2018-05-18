<!-- 通用资源列表组件 Created by song 2018/05/10 -->
<template>
  <div class="ui_list_pic_29">

    <!-- 组件的标题、副标题、去更多传colId 都得从栏目详情的接口里面取值 -->
    <!-- 组件标题 取配置的name 或者 父栏目名称 -->
    <div class="ui_list_pic_29_comtitle_con" v-if="CONFIG && CONFIG.comTitle && CONFIG.comTitle.isShow && columnDetailInfo">
      <h4 class="ui_list_pic_29_comtitle"> {{CONFIG.comTitle.name ? CONFIG.comTitle.name : columnDetailInfo[columnKeys.name]}} </h4>
      <span class="ui_list_pic_29_comtitle_columnDetailInfo">{{columnDetailInfo[columnKeys.code]}}</span>
    </div>
    <!-- 更多按钮 -->
    <div class="ui_list_pic_29_tomore_con" v-if="CONFIG && CONFIG.toMoreBtn && CONFIG.toMoreBtn.isShow && columnDetailInfo" @click="toCustomFun(columnDetailInfo, CONFIG.toMoreBtn)">
      <span class="ui_list_pic_29_tomore_name"> {{CONFIG.toMoreBtn.name}}</span>
        <i class="ui_list_pic_29_tomore_icon" v-bind="{class: CONFIG.toMoreBtn.iconClass}"></i>
    </div>

    <div class="ui_list_pic_29_resourcelists">
      <ul class="ui_list_pic_29_resourcelists_ul" v-if="resourceLists && resourceLists.length > 0">
        <li class="ui_list_pic_29_resourcelists_li" v-for="(item, index) in resourceLists" :key="index" v-if="index >= resourceListsConfig.startNum">
          <template v-for="(config, config_i) in resourceListsConfig.complicatedItem">
            <!-- 需要特殊处理的复杂项 -->
            <!-- img 图片 -->
            <div :key="config_i" v-if="config.name == 'img'" class="ui_list_pic_29_resourcelists_li_imgcontainter" @click="toCustomFun(item, config)">
              <label class="ui_list_pic_29_resourcelists_img_label">{{config.display}}</label>
              <img class="ui_list_pic_29_resourcelists_li_img" v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}" :src=" item[keys[config.field]] " alt="暂无图片" @load="dealResourceImg($event)"/>
            </div>

            <!-- 自定义事件按钮 包括（title 标题） -->
            <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_list_pic_29_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(item, config)">
              <label class="ui_list_pic_29_resourcelists_btnlabel">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_29_resourcelists__btncontainer_' + config.field}" v-if="keys[config.field]">{{ item[keys[config.field]] }}</span>
            </span>

            <!-- price 价格 -->
            <span :key="config_i" v-else-if="config.name == 'price'" class="ui_list_pic_29_resourcelists_li_pricecontainter">
              <label class="ui_list_pic_29_resourcelists_price_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}">{{ item[keys[config.field]]  | formatPriceNew }}</span>
            </span>

            <!-- time 时间 -->
            <span :key="config_i" v-else-if="config.name == 'time'" class="ui_list_pic_29_resourcelists_li_timecontainter">
              <label class="ui_list_pic_29_resourcelists_time_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}">{{ item[keys[config.field]] | formatDateNEW}}</span>
            </span>

            <!-- 其他不需要特殊处理的简单项 -->
            <span :key="config_i" v-else  class="ui_list_pic_29_resourcelists_other">
              <label class="ui_list_pic_29_resourcelists_li_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}">{{ item[keys[config.field]] }}</span>
            </span>

          </template>
        </li>
      </ul>

      <div class="ui_list_pic_29_resourcelists_nodata" v-if="resourceLists && resourceLists.length == 0">暂无数据</div>
    </div>
    <ui_pagination_01 class="ui_list_pic_29_ui_pagination" v-if="CONFIG && CONFIG.pagination && CONFIG.pagination.showPagination"  :pageMessage="{totalCount: totalCount}" :excuteFunction="paging" :page-sizes="CONFIG.pagination.pagesize"></ui_pagination_01>
  </div>
</template>

<script>
import Vue from 'vue';
import { Get, Post, DrawImage, getFieldAdapter, toOtherPage } from "@common";
import URL from 'url';
import PROJECT_CONFIG from "projectConfig";
import ui_pagination_01 from "@components/UI/pagination/01_pagination/pagination";

export default {
  name: 'ui_list_pic_29',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      resourceLists: [], //资源列表
      keys: {}, // 列表接口字段容器
      columnKeys: {}, // 栏目接口字段容器
      colId: "",
      totalCount: 0,
      columnDetailInfo: "", // 栏目详细信息
      requestParams: "", // 去详情页需要传查询list.do的所有参数
    };
  },

  created () {
    this.colId = URL.parse(document.URL, true).query.colId; // 从地址栏接收栏目id
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.list_pic_29[this.modulename];
    this.resourceListsConfig = this.CONFIG.getResourceLists;
    this.keys = getFieldAdapter(this.CONFIG.getResourceLists.sysAdapter, this.CONFIG.getResourceLists.typeAdapter);
    this.columnKeys = getFieldAdapter(this.CONFIG.getSubTitle.sysAdapter, this.CONFIG.getSubTitle.typeAdapter);

    if (this.CONFIG && this.CONFIG.onEvent && this.CONFIG.onEvent.eventName) { // 通过接收广播获取栏目id
      this.$bus.$on(this.CONFIG.onEvent.eventName, (data) => {
        this.resourceLists = [];
        this.totalCount = 0;
        this.colId = data[0];
        this.getResourceLists();
      })
    } else {
      this.getResourceLists();
    }

    this.getColumnSubTitle(); // 获取栏目副标题

  },
  methods: {
    toCustomFun (item, config) { // 执行自定义事件
      let detailParams = "";
      if (config.method == 'toDetail') { // 去详情页需要增加list.do请求的所有参数
        for (let param in this.requestParams) {
          detailParams = detailParams + '&' + param + '=' + this.requestParams[param]
        }
      }
      window.open(toOtherPage(this, item, this.CONFIG[config.method]) + detailParams);
    },
    getColumnSubTitle () { // 获取栏目副标题
      Post(CONFIG.BASE_URL + this.CONFIG.getSubTitle.url + '?colId=' + this.CONFIG.getSubTitle.params.colId).then((rep) => {
        let datas = rep.data;
        if (datas.success && datas.data) {
          this.columnDetailInfo = datas.data;
        }
      });
    },
    getResourceLists (pagingParams) { // 获取资源列表
      let paramsObj = Object.assign({}, this.resourceListsConfig.params);
      paramsObj.pageSize = this.resourceListsConfig.maxNum ? this.resourceListsConfig.maxNum + '' : '15';
      if (pagingParams) {
        paramsObj.pageNo = pagingParams.pageNo;
        paramsObj.pageSize = pagingParams.pageSize;
      }
      paramsObj.conditions.map((item) => {
        if (item.hasOwnProperty(this.keys.colId)) {
          item[this.keys.colId] = this.colId ? this.colId : item[this.keys.colId];
        }
      })
      paramsObj.conditions = JSON.stringify(paramsObj.conditions);
      this.requestParams = paramsObj;
      Post(CONFIG.BASE_URL + this.resourceListsConfig.url, paramsObj).then((rep) => {
        let datas = rep.data;
        if (datas.success && datas.result && datas.result.length > 0) {
          this.resourceLists = datas.result;
          this.totalCount = datas.totalCount;
        }
      });
    },
    dealResourceImg (eve) { // 处理图片尺寸
      DrawImage(eve.path[0], this.CONFIG.infoImgWidth, this.CONFIG.infoImgWidth);
    },
    paging: function ({ pageNo, pageSize }) { // 翻页
      var pagingParams = {
        pageNo: pageNo,
        pageSize: pageSize,
      };
      this.getResourceLists(pagingParams);
    },
  }
}

</script>
<style>
.ui_list_pic_29_resourcelists_li_resnamecontainter {
  cursor: pointer;
}

.ui_list_pic_29_tomore_con {
  cursor: pointer;
}

.ui_list_pic_29_tomore_icon {
  transform: rotateZ(180deg);
}

.ui_list_pic_29_resourcelists_li_imgcontainter {
  cursor: pointer;
  position: relative;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 160px;
  overflow: hidden;
  background-color: #eee;
}

.ui_list_pic_29_resourcelists_li_img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>