<!-- 图书分类组件  -->
<template>
  <div class="ui_mobile_classification_02">  <!--一级分类-->
    <a :class="{'ui_mobile_classification_02--active':currentActive == item.id}" class="ui_mobile_classification_02_a" v-for="(item, index) in classifyList" :key="index" @click="toClassifyBook(item)">
     <p class="ui_mobile_classification_02_textname" v-text="item[keys.text]"></p>
      <div class="ui_mobile_classification_02_con">
        <p class="ui_mobile_classification_02_count" v-if="keys && keys.cascadeId && item[keys.cascadeId]">{{formatCount(countsList[item[keys.cascadeId]])}}</p>
        <p class="ui_mobile_classification_02_count" v-else>{{getStaticText('zeroBook') ? getStaticText('zeroBook') : '共 0 本'}}</p>
      </div>
    </a>
  </div>
</template>

<script>
import { Get, Post } from "@common";
import PROJECT_CONFIG from "projectConfig";
import $ from "jquery";

export default {
  name: 'ui_mobile_classification_02',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      bgmUrl: "",
      CONFIG: "",
      classifyList: [],  // 图书分类
      keys: {},
      countsList: {}, // 存放处理后的分类总数
      currentActive: ""  // 当前值
    };
  },

  created(){
    
  },

  mounted () {
    this.bgmUrl = require('./data/img/bookclass.png');
    this.CONFIG = PROJECT_CONFIG[this.namespace].classification.classification_02;
    this.keys = this.CONFIG.queryClassification.keys;
    this.queryClassificationList();
    this.queryCount();
  },

  methods: {
    queryClassificationList () { // 图书分类查询
      let loading = this.$loading({ fullscreen: true });
      let paramsObj = Object.assign({}, this.CONFIG.queryClassification.params);
      paramsObj.timeStamp = new Date().getTime();  // 添加时间戳防止返回的时候从缓存里面取数据
      Get(CONFIG.BASE_URL+this.CONFIG.queryClassification.url, { params: paramsObj }).then(rep => {
        var datas = rep.data;
        if (datas && datas instanceof Array && datas.length > 0) {
          this.classifyList = datas;
          this.currentActive = datas[0].id;
          // 发送默认广播
          this.$bus.$emit(this.CONFIG.broadcastName, [
            datas[0].id,
            datas[0].text
          ]);
        }
        loading.close();
      });
    },
    queryCount () {  // 查各个分类下书的总数
      Post(CONFIG.BASE_URL+this.CONFIG.queryCount.url, this.CONFIG.queryCount.params).then(rep => {
        var datas = rep.data.result;
        if (datas && datas instanceof Array && datas.length > 0) {
          var data = datas[0].BOOK_BOOK_CASCADID_1;
          data.forEach((item, index) => {
            this.countsList = $.extend(this.countsList, item);
          })
        }
      });
    },
    // 点击发广播
    toClassifyBook (item) { 
      this.currentActive = item.id;
      this.$bus.$emit(this.CONFIG.broadcastName, [
        item.id,
        item.text
      ]);
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
    formatCount (value) {
      if (value == null || value == undefined) { // 返回为空
        return this.getStaticText('zeroBook') ? this.getStaticText('zeroBook') : '共 0 本';
      } else {
        return (this.getStaticText('total') ? this.getStaticText('total') : '共') + value + (this.getStaticText('unit') ? this.getStaticText('unit') : '本');
      }
    }
  }
}

</script>
<style>
.ui_mobile_classification_02--active .ui_mobile_classification_02_textname{
  color: red;
}

</style>
