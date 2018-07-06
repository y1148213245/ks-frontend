<!-- 资讯搜索组件 Created by zong 2018/05/24 -->
<template>
  <div class="ui_list_pic_31">

    <div class="ui_list_pic_31_dataType" v-if="CONFIG && dataType">
        <ul class="ui_list_pic_31_dataType_ul" >
          <li class="ui_list_pic_31_dataType_ul_li" v-for="(item1,index1) in dataType" :class="{ui_list_pic_31_dataType_ul_li_active:catagory == item1.resource_type}" @click="changeDataType(item1.resource_type)">{{item1.name}}</li>
        </ul>
    </div>
    <div class="ui_list_pic_31_resourcelists">
      <ul class="ui_list_pic_31_resourcelists_ul" v-if="resourceLists && resourceLists.length > 0">
        <li class="ui_list_pic_31_resourcelists_li" v-for="(item, index) in resourceLists" :key="index" v-if="index >= resourceListsConfig.startNum">
          <template v-for="(config, config_i) in resourceListsConfig.complicatedItem">
            <!-- 需要特殊处理的复杂项 -->
            <!-- img 图片 -->
            <div :key="config_i" v-if="config.name == 'img'" class="ui_list_pic_31_resourcelists_li_imgcontainter" @click="toCustomFun(item, config)">
              <label class="ui_list_pic_31_resourcelists_img_label">{{config.display}}</label>
              <img class="ui_list_pic_31_resourcelists_li_img" v-bind="{class: 'ui_list_pic_31_resourcelists_' + config.field}" :src=" item[keys[config.field]] || require('@static/img/defaultCover.png')" alt="暂无图片" @load="dealResourceImg($event)"/>
            </div>

            <!-- 自定义事件按钮 包括（title 标题） -->
            <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_list_pic_31_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(item, config)">
              <label class="ui_list_pic_31_resourcelists_btnlabel">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_31_resourcelists__btncontainer_' + config.field}" v-if="keys[config.field]" v-html="item[keys[config.field]]"></span>
            </span>

            <!-- price 价格 -->
            <span :key="config_i" v-else-if="config.name == 'price'" class="ui_list_pic_31_resourcelists_li_pricecontainter">
              <label class="ui_list_pic_31_resourcelists_price_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_31_resourcelists_' + config.field}">{{ item[keys[config.field]]  | formatPriceNew }}</span>
            </span>

            <!-- time 时间 -->
            <span :key="config_i" v-else-if="config.name == 'time'" class="ui_list_pic_31_resourcelists_li_timecontainter">
              <label class="ui_list_pic_31_resourcelists_time_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_31_resourcelists_' + config.field}">{{ item[keys[config.field]] | formatDateNEW}}</span>
            </span>

            <!-- 其他不需要特殊处理的简单项 -->
            <span :key="config_i" v-else  class="ui_list_pic_31_resourcelists_other">
              <label class="ui_list_pic_31_resourcelists_li_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_31_resourcelists_' + config.field}">{{ item[keys[config.field]] }}</span>
            </span>

          </template>
        </li>
      </ul>

      <div class="ui_list_pic_31_resourcelists_nodata" v-if="resourceLists && resourceLists.length == 0">暂无数据</div>
    </div>
    <el-input type="hidden" v-model="totalCount" class="totalCount_num"></el-input>
    <ui_pagination class="ui_list_pic_31_ui_pagination" v-if="CONFIG && CONFIG.pagination && CONFIG.pagination.showPagination"  :pageMessage="{totalCount: totalCount}" :excuteFunction="paging" :page-sizes="CONFIG.pagination.pagesize"></ui_pagination>
  </div>
</template>

<script>
import Vue from 'vue';
import { Post, DrawImage, getFieldAdapter, toOtherPage } from "@common";
import URL from 'url';
import PROJECT_CONFIG from "projectConfig";
import ui_pagination from "../../pagination/pagination/pagination";

export default {
  name: 'ui_list_pic_31',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      urlArr:[],
      resourceLists: [], //资源列表
      keys: {}, // 接口字段容器
      catagory:'information',
      totalCount: 0,
      dataType:[], //资源筛选的配置
      defaultDataType:"searchAll", //默认配置
    };
  },

  created () {
    this.urlArr = URL.parse(document.URL, true).query;// 从地址栏接收
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.list_pic_31[this.modulename];
    if(typeof(this.CONFIG.dataType)!='undefined'){
      this.dataType = this.CONFIG.dataType;
      this.defaultDataType = this.CONFIG.defaultDataType;
      this.catagory = this.CONFIG.defaultDataType;
    }
    //地址栏优先
    if(this.urlArr.catagory){
      this.catagory = this.urlArr.catagory;
    }
    this.resourceListsConfig = this.CONFIG.getResourceLists;
    this.getResourceLists();
  },

  mounted () {

  },

  methods: {
    //修改数据类型
    changeDataType(item){
      this.catagory = item;
      this.getResourceLists();
    },
    toCustomFun (item, config) { // 执行自定义事件
      let detailParams = "";
      if (config.method == 'toDetail') { // 去详情页需要增加list.do请求的所有参数
        for (let param in this.requestParams) {
          detailParams = detailParams + '&' + param + '=' + this.requestParams[param]
        }
      }
      window.open(toOtherPage(item, this.CONFIG.conditionsArr[this.catagory][config.method], this.keys) + detailParams);
    },
    getResourceLists (pagingParams) { // 获取资源列表

      let paramsObj = this.resourceListsConfig.params;
      paramsObj.pageSize = this.resourceListsConfig.maxNum ? this.resourceListsConfig.maxNum + '' : '15';
      if (pagingParams) {
        paramsObj.pageNo = pagingParams.pageNo;
        paramsObj.pageSize = pagingParams.pageSize;
      }
      paramsObj.conditions = this.CONFIG.conditionsArr[this.catagory].conditions;
      this.keys = getFieldAdapter(this.CONFIG.conditionsArr[this.catagory].sysAdapter, this.CONFIG.conditionsArr[this.catagory].typeAdapter);

      // paramsObj.conditions.map((item) => {
      //   if (item.hasOwnProperty('pub_resource_type')) {
      //     item.pub_resource_type = this.pub_resource_type;
      //   }
      // })
      if(this.urlArr.searchText){
        paramsObj.searchText = this.urlArr.searchText
      }
      Post(CONFIG.BASE_URL + this.resourceListsConfig.url, paramsObj).then((rep) => {
        let datas = rep.data;
        if (datas.success && datas.result && datas.result.length > 0) {
          this.resourceLists = datas.result;
          this.totalCount = datas.totalCount;
        }else{
          this.resourceLists = [];
          this.totalCount = 0;
        }
      });

    },
    dealResourceImg (eve) {
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
.ui_list_pic_31_resourcelists_li_resnamecontainter {
  cursor: pointer;
}

.ui_list_pic_31_tomore_con {
  cursor: pointer;
}

.ui_list_pic_31_tomore_icon {
  transform: rotateZ(180deg);
}

.ui_list_pic_31_resourcelists_li_imgcontainter {
  cursor: pointer;
  position: relative;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 160px;
  overflow: hidden;
  background-color: #eee;
}

.ui_list_pic_31_resourcelists_li_img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
  .ui_list_pic_31_dataType_ul_li_active{
    border: #00c000 2px solid;
  }
</style>
