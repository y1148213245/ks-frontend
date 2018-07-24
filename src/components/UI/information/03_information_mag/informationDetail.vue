<!--//  Created by zong 2018/06/05-->
<!--// 封装期刊详情组件为共用组件-->
<template>
  <div class="ui_infomation_mg_03_emm">
    <template>
      <div class="ui_information_mag_03">

        <template v-for="(config, config_i) in complicatedItem">
          <!-- 需要特殊处理的复杂项 -->
          <!-- img 图片 -->
          <div :key="config_i" v-if="config.name == 'img'" v-bind="{class: 'ui_information_mag_03_imgcontainter' + config.field}">
            <label class="ui_information_mag_03_img_label">{{config.display}}</label>
            <img  v-bind="{class: 'ui_information_03_' + config.field}" :src=" magInfo[keys[config.field]] || require('@static/img/defaultCover.png')" alt="暂无图片" @load="dealResourceImg($event)"/>
          </div>

          <!-- 自定义事件按钮 包括（title 标题） -->
          <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_information_mag_03_btncontainer_' + config.field + '_' + config_i}">
        <label class="ui_information_mag_03_btnlabel">{{config.display}}</label>
        <span v-bind="{class: 'ui_information_03_' + config.field}" v-if="keys[config.field]" v-html="magInfo[keys[config.field]]"></span>
      </span>

          <!-- price 价格 -->
          <span :key="config_i" v-else-if="config.name == 'price'" class="ui_information_mag_03_li_pricecontainter">
        <label class="ui_information_mag_03_price_label">{{config.display}}</label>
        <span  v-bind="{class: 'ui_information_03_' + config.field}">{{ magInfo[keys[config.field]]  | formatPriceNew }}</span>
      </span>

          <!-- time 时间 -->
          <span :key="config_i" v-else-if="config.name == 'time'" class="ui_information_mag_03_li_timecontainter">
        <label class="ui_information_mag_03_time_label">{{config.display}}</label>
        <span  v-bind="{class: 'ui_information_03_' + config.field}">{{ magInfo[keys[config.field]] | formatDateNEW}}</span>
      </span>

          <!-- 其他不需要特殊处理的简单项 -->
          <span :key="config_i" v-else  class="ui_information_mag_03_other">
        <label class="ui_information_mag_03_li_label">{{config.display}}</label>
        <span v-bind="{class: 'ui_information_03_' + config.field}" v-html="magInfo[keys[config.field]]"></span>
      </span>

        </template>
        <div class="ui_information_mag_03_nodata" v-if="!magInfo">暂无数据</div>

      </div>
      <div class="ui_infomation_mg_03_buttondiv">
        <button class="ui_infomation_mg_03_buttondiv_button" @click="toTake()">订阅</button>
      </div>
    </template>

    <template v-if="CONFIG && CONFIG.yearTabShow">
      <div class="ui_infomation_mg_03_tabdiv" v-if="CONFIG && CONFIG.yearTabShow">
        <ul class="ui_infomation_mg_03_tabdiv_ul"  v-if="CONFIG && magInfoList && magInfoList.length>0">
          <li v-for="(item,index) in magInfoList" :key="index" class="ui_infomation_mg_03_tabdiv_ul_li" v-if="index >= (yearTabShowNum-(CONFIG.yearTabShowNum))">
            <span :class="{'active':currentActive == item.PUBLISH_YEAR}" @click.self="changeContent(item.PUBLISH_YEAR)">{{item.PUBLISH_YEAR}}{{CONFIG.yearTabShowDisplay}}</span>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Get, Post, DrawImage, getFieldAdapter} from "@common";
  import URL from 'url';
  import PROJECT_CONFIG from "projectConfig";

  export default {
    name: 'ui_information_mag_03',
    reused: true,
    props: ['namespace', 'modulename'],
    data: function () {
      return {
        CONFIG: null, // API配置
        magName: '', // 期刊名称
        magInfo: {}, // 资讯详情 mag字段
        magInfoList: [], // 资讯详情 mag字段
        complicatedItem:[],
        currentActive:'',
        keys: {},  // 字段兼容
        yearTabShowNum:0, //获取到的年份数量
      }
    },
    mounted: function () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].information.information_03[this.modulename];
      this.keys = JSON.parse(JSON.stringify(getFieldAdapter(this.CONFIG.sysAdapter, this.CONFIG.typeAdapter)));
      this.complicatedItem = this.CONFIG.queryDetail.complicatedItem;
      this.magName = URL.parse(document.URL, true).query.magName;
      this.queryInformation();
    },
    methods: {
      //期刊订阅跳转
      toTake(){
        if(this.magName){
          window.open( this.CONFIG.toTakeUrl + '?magName=' + this.magName);
        }else{
          console.log("undefined of magName --z");
        }
      },
      // 查期刊详情
      queryInformation () {
        if(!this.magName){
          this.magName = this.CONFIG.queryDetail.magName;
        }
        // CONFIG.BASE_URL+
        Get(CONFIG.BASE_URL + this.CONFIG.queryDetail.url + '?magName=' + this.magName).then(rep => {
          let datas = rep.data;
          if (datas.result && datas.data) {
            this.magInfo = datas.data.mag;
            this.magInfoList = datas.data.pubYears;
            this.yearTabShowNum = this.magInfoList.length;
            if (this.magInfoList.length>0) {
              this.changeContent(this.magInfoList[this.magInfoList.length-(this.CONFIG.yearTabShowNum)].PUBLISH_YEAR);
            }
          }
        });
      },
      changeContent (year) {   //选择时候发送广播
        this.currentActive = year;
        this.toEventFun();
      },
      toEventFun(){   //发送广播
        this.$bus.$emit(this.CONFIG.yearTab.broadcastName, [
          this.currentActive,
          this.magName,
          this.currentActive,
          this.magName,
        ]);
      },
      dealResourceImg (eve) {
        DrawImage(eve.path[0], this.CONFIG.infoImgWidth, this.CONFIG.infoImgHeight);
      },
    }
  }
</script>
<style>
  .active{
    background-color: #00c000;
  }
  .ui_information_mag_03 {
    width: 1200px;
    margin: 0 auto 48px auto;
    overflow: hidden;
    background: #fff;
  }
</style>
