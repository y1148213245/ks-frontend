/*
 * @Author: zrn
 * @Date: 2018-09-14
 */
<!-- 通过获取相关资源ID获取相关资源列表 -->
<template>
  <div class="ui_list_pic_resource_39">
    <h2 v-if="CONFIG && CONFIG.title && CONFIG.title.isShow">{{CONFIG.title.name}}</h2>
    <ul class="ui_list_pic_resource_39_ul">
      <li class="ui_list_pic_resource_39_ul_li" v-for="(item, index) in resourceLists" :key="index" v-if="index >= (resourceListsConfig.startNum ? resourceListsConfig.startNum : 0)">
         <template v-for="(config, config_i) in resourceListsConfig.complicatedItem">
           <!-- img 图片 -->
            <div :key="config_i" v-if="config.name == 'img'" class="ui_list_pic_resource_39_li_imgcontainter" @click="toCustomFun(item, config, keys)">
              <label class="ui_list_pic_resource_39_img_label">{{config.display}}</label>
              <img class="ui_list_pic_resource_39_li_img" v-bind="{class: 'ui_list_pic_resource_39_' + config.field}" :src=" item[keys[config.field]] || require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'"/>
            </div>

           <!-- 自定义事件按钮 包括（title 标题） -->
            <span :key="config_i" v-if="config.name == 'button'" v-bind="{class: 'ui_list_pic_resource_39_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(item, config, keys)">
              <label class="ui_list_pic_resource_39_btnlabel">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_resource_39__btncontainer_' + config.field}" v-if="keys[config.field]" v-html="item[keys[config.field]]"></span>
            </span>

            <!-- price 价格 -->
            <span :key="config_i" v-else-if="config.name == 'price'" class="ui_list_pic_resource_39_li_pricecontainter">
              <label class="ui_list_pic_resource_39_price_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_resource_39_' + config.field}">{{formatPriceNew(item[keys[config.field]])}}</span>
            </span>

            <!-- time 时间 -->
            <span :key="config_i" v-else-if="config.name == 'time'" class="ui_list_pic_resource_39_li_timecontainter">
              <label class="ui_list_pic_resource_39_time_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_resource_39_' + config.field}">{{formatDate(item[keys[config.field]])}}</span>
            </span>

            <!-- 其他不需要特殊处理的简单项 -->
            <span :key="config_i" v-else class="ui_list_pic_resource_39_other">
              <label class="ui_list_pic_resource_39_li_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_resource_39_' + config.field}">{{ item[keys[config.field]] }}</span>
            </span>
         </template>
      </li>
    </ul>
    <div class="ui_list_pic_resource_39_nodata" v-if="resourceLists && resourceLists.length == 0">{{getStaticText('noData') ? getStaticText('noData') : '暂无数据'}}</div>
    <ui_pagination class="ui_list_pic_resource_39_ui_pagination" v-if="CONFIG && CONFIG.pagination && CONFIG.pagination.showPagination" :pageMessage="{totalCount: totalCount}" :excuteFunction="paging" :page-sizes="CONFIG.pagination.pagesize"></ui_pagination>
  </div>
</template>

<script>
import Vue from "vue";
import {Get, Post, getFieldAdapter, toOtherPage} from "@common";
import PROJECT_CONFIG from "projectConfig";
import URL from "url";
import ui_pagination from "../../pagination/pagination/pagination";
import moment from "moment";
import $ from "jquery";

export default {
  name: 'ui_list_pic_resource_39',
  props: ["namespace", "modulename"],
  reused: true,
  data () {
    return {
      resourceLists: [], // 资源列表
      CONFIG: "",
      rootDocId: '', //某个资源pub_resource_id
      keys: {}, // 接口字段容器
      pageIndex: "1", // 页码 从 1 开始
      pageSize: "10", // 每页显示个数
      totalPages: "0", // 订单总页数
      totalCount: 0,
      requestParams: "", // 去详情页需要传查询list.do的所有参数
      resIds: null
    };
  },

  created(){
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.ui_list_pic_resource_39[this.modulename];
    this.resourceListsConfig = this.CONFIG.getResourceLists;
    this.keys = JSON.parse(JSON.stringify(getFieldAdapter(this.CONFIG.getResourceLists.sysAdapter,this.CONFIG.getResourceLists.typeAdapter)));
    var uriQuery = URL.parse(document.URL, true).query;
    if(uriQuery.rootDocId && uriQuery.rootDocId != "undefined"){
      this.rootDocId = uriQuery.rootDocId;
    }
  },

  mounted () {
    this.getSourceId();
  },

  methods: {
    // 获取相关资源id
    getSourceId(){
      let paramsIdObj = Object.assign({}, this.CONFIG.getResourceIds.params);
      let idstr = "?rootDocLibCode="+paramsIdObj.rootDocLibCode + "&destDocLibCode="+paramsIdObj.destDocLibCode+"&rootDocId="+this.rootDocId+"&relationShip="+paramsIdObj.relationShip+"&split="+paramsIdObj.split;
      Get(CONFIG.BASE_URL + this.CONFIG.getResourceIds.url +idstr).then(res=>{
        if(res.data.result == "1" && res.data.data){
          this.resIds = res.data.data;
          this.getResourceList(res.data.data);
        }else{
          this.$message({
            type: "error",
            message:  this.getStaticText('errorMag') ? this.getStaticText('errorMag') : '查询失败'
          });
        }
      });
    },
    // 获取相关资源数据
    getResourceList(data,pagingParams){
      let paramsObj = Object.assign({}, this.resourceListsConfig.params);
      paramsObj.conditions.push({
        pub_resource_id: data,
        op: "in"
      });
      paramsObj.pageSize = this.resourceListsConfig.maxNum ? this.resourceListsConfig.maxNum + "": "15";
      this.pageSize = paramsObj.pageSize;
      if (pagingParams) {
        paramsObj.pageNo = pagingParams.pageNo;
        paramsObj.pageSize = pagingParams.pageSize;
      } else {
        paramsObj.pageNo = this.pageIndex;
        paramsObj.pageSize = this.pageSize;
      }
      paramsObj.conditions = JSON.stringify(paramsObj.conditions);
      this.requestParams = paramsObj;
      Post(CONFIG.BASE_URL + this.resourceListsConfig.url, paramsObj).then(res=>{
        if(res.data.success && res.data.result.length > 0){
          this.totalCount = res.data.totalCount;
          this.resourceLists = res.data.result;
        }else if (!res.data.success) {
            this.$message({
            type: "error",
            message: this.getStaticText('errorMag1') ? this.getStaticText('errorMag1') : '查询失败'
          });
        }
      });
    },
    toCustomFun (item, config, keys) {
      // 执行自定义事件
      let detailParams = "";
      if (config.method == "toDetail") {
        // 去详情页需要增加list.do请求的所有参数
        for (let param in this.requestParams) {
          detailParams =
            detailParams + "&" + param + "=" + this.requestParams[param];
        }
      } 
      window.open(toOtherPage(item, this.CONFIG[config.method], keys) + detailParams) ;
    },
    paging: function ({ pageNo, pageSize }) {
      // 翻页
      var pagingParams = {
        pageNo: pageNo,
        pageSize: pageSize
      };
      this.getResourceList(this.resIds, pagingParams);
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
    formatDate (value) {
      if (value) {
        return moment(value).format("YYYY-MM-DD");
      } else {
        return this.getStaticText('noDate') ? this.getStaticText('noDate') : "暂无日期";
      }
    },
    formatPriceNew (value) {
      if (value) {
        return (this.getStaticText('yuan') ? this.getStaticText('yuan') : '￥') + Number(value).toFixed(2);
      } else {
        return (this.getStaticText('yuan') ? this.getStaticText('yuan') : '￥') +'0.00';
      }
    }
  }
}

</script>
<style>

</style>
