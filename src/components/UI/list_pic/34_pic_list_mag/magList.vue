<!-- 期刊类型列表组件 Created by zong 2018/06/05 -->
<template>
  <div class="ui_list_pic_34">

    <div class="ui_list_pic_34_resourcelists">
      <ul class="ui_list_pic_34_resourcelists_ul" v-if="resourceLists && resourceLists.length > 0">
        <li class="ui_list_pic_34_resourcelists_li" v-for="(item, index) in resourceLists" :key="index" v-if="index >= resourceListsConfig.startNum">
          <template v-for="(config, config_i) in resourceListsConfig.complicatedItem">
            <!-- 需要特殊处理的复杂项 -->
            <!-- img 图片 -->
            <div :key="config_i" v-if="config.name == 'img'" class="ui_list_pic_34_resourcelists_li_imgcontainter" @click="toCustomFun(item, config, keys)">
              <label class="ui_list_pic_34_resourcelists_img_label">{{config.display}}</label>
              <img class="ui_list_pic_34_resourcelists_li_img" v-bind="{class: 'ui_list_pic_34_resourcelists_' + config.field}" :src=" item[keys[config.field]] " alt="暂无图片" @load="dealResourceImg($event)"/>
            </div>

            <!-- 自定义事件按钮 包括（title 标题） -->
            <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_list_pic_34_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(item, config, keys)">
              <label class="ui_list_pic_34_resourcelists_btnlabel">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_34_resourcelists__btncontainer_' + config.field}" v-if="keys[config.field]" v-html="item[keys[config.field]]"></span>
            </span>

            <!-- price 价格 -->
            <span :key="config_i" v-else-if="config.name == 'price'" class="ui_list_pic_34_resourcelists_li_pricecontainter">
              <label class="ui_list_pic_34_resourcelists_price_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_34_resourcelists_' + config.field}">{{ item[keys[config.field]]  | formatPriceNew }}</span>
            </span>

            <!-- time 时间 -->
            <span :key="config_i" v-else-if="config.name == 'time'" class="ui_list_pic_34_resourcelists_li_timecontainter">
              <label class="ui_list_pic_34_resourcelists_time_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_34_resourcelists_' + config.field}">{{ item[keys[config.field]] | formatDateNEW}}</span>
            </span>

            <!-- 其他不需要特殊处理的简单项 -->
            <span :key="config_i" v-else  class="ui_list_pic_34_resourcelists_other">
              <label class="ui_list_pic_34_resourcelists_li_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_34_resourcelists_' + config.field}">{{ item[keys[config.field]] }}</span>
            </span>

          </template>
        </li>
      </ul>

      <div class="ui_list_pic_34_resourcelists_nodata" v-if="resourceLists && resourceLists.length == 0">暂无数据</div>
    </div>
    <ui_pagination class="ui_list_pic_34_ui_pagination" v-if="CONFIG && CONFIG.pagination && CONFIG.pagination.showPagination"  :pageMessage="{totalCount: totalCount}" :excuteFunction="paging" :page-sizes="CONFIG.pagination.pagesize"></ui_pagination>
  </div>
</template>

<script>
import Vue from 'vue';
import { Get, Post, DrawImage, getFieldAdapter, toOtherPage } from "@common";
import URL from 'url';
import PROJECT_CONFIG from "projectConfig";
import ui_pagination from "../../pagination/pagination/pagination";

export default {
  name: 'ui_list_pic_34',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      resourceLists: [], //资源列表
      keys: {}, // 接口字段容器
      totalCount: 0,
      requestParams: "", // 去详情页需要传查询list.do的所有参数
    };
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.list_pic_34[this.modulename];
    this.resourceListsConfig = this.CONFIG.getResourceLists;
    this.keys = JSON.parse(JSON.stringify(getFieldAdapter(this.CONFIG.getResourceLists.sysAdapter, this.CONFIG.getResourceLists.typeAdapter)));

    this.getResourceLists();

  },

  mounted () {

  },

  methods: {
    toCustomFun (item, config, keys) { // 执行自定义事件
      let detailParams = "";
      if (config.method == 'toDetail') { // 去详情页需要增加list.do请求的所有参数
        for (let param in this.requestParams) {
          detailParams = detailParams + '&' + param + '=' + this.requestParams[param]
        }
      }
      window.open(toOtherPage(item, this.CONFIG[config.method], keys) + detailParams);
    },
    getResourceLists () { // 获取资源列表
      Get(CONFIG.BASE_URL + this.resourceListsConfig.url).then((rep) => {
        let datas = rep.data;
        if (datas.result && datas.data && datas.data.length > 0) {
          if(datas.result==1){
            this.resourceLists = datas.data;
            this.totalCount = datas.totalCount;
          }
        }
      });
    },
    dealResourceImg (eve) {
      DrawImage(eve.path[0], this.CONFIG.infoImgWidth, this.CONFIG.infoImgHeight);
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
.ui_list_pic_34_resourcelists_li_resnamecontainter {
  cursor: pointer;
}

.ui_list_pic_34_tomore_con {
  cursor: pointer;
}

.ui_list_pic_34_tomore_icon {
  transform: rotateZ(180deg);
}

.ui_list_pic_34_resourcelists_li_imgcontainter {
  cursor: pointer;
  position: relative;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 160px;
  overflow: hidden;
  background-color: #eee;
}

.ui_list_pic_34_resourcelists_li_img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
