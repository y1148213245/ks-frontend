<!-- tushu  -->
<template>
  <div class="ui_mobile_classification_01">  <!--一级分类-->
    <a class="ui_mobile_classification_a" v-for="(item, index) in classifyList" :key="index" @click="toClassifyBook(item)">
      <p class="ui_mobile_classification_bgpic" :style="{ backgroundImage: 'url(' + bgmUrl + ')'}"></p>
      <div class="ui_mobile_classification_con">
        <p class="ui_mobile_classification_text" v-text="item[keys.text]"></p>
        <p class="ui_mobile_classification_count" v-if="keys && keys.cascadeId && item[keys.cascadeId]">{{formatCount(countsList[item[keys.cascadeId]])}}</p>
        <p class="ui_mobile_classification_count" v-else>{{getStaticText('zeroBook') ? getStaticText('zeroBook') : '共 0 本'}}</p>
      </div>
    </a>
  </div>
</template>

<script>
import { Get, Post } from "@common";
import PROJECT_CONFIG from "projectConfig";
import $ from "jquery";

export default {
  name: 'ui_mobile_classification_01',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      bgmUrl: "",
      CONFIG: "",
      classifyList: [],  // 图书分类
      keys: {},
      countsList: {}, // 存放处理后的分类总数
    };
  },

  created(){

  },

  mounted () {
    this.bgmUrl = require('./data/img/bookclass.png');
    this.CONFIG = PROJECT_CONFIG[this.namespace].classification.classification_01;
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
    toClassifyBook (item) { // 去二级分类图书列表
      let config = this.CONFIG.toMoreList;
      let url = config.url + '?';
      for (const key in config.keys) {
        const element = config.keys[key];
        url += key + '=' + item[element] + '&';
      }
      for (const key in config.fixedKeys) {
        const element = config.fixedKeys[key];
        url += key + '=' + element + '&';
      }

      url = url.substring(0, url.length - 1);
      window.location.href = url;
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
.ui_mobile_classification_01 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-top: 0.95rem;
}

.ui_mobile_classification_a {
  position: relative;
  width: 3.3rem;
  margin-top: 0.25rem;
  text-decoration: none;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

.ui_mobile_classification_bgpic {
  width: 3.3rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-size: 3.3rem 2rem;
  margin-top: 0px;
  margin-bottom: 0px;
}

.ui_mobile_classification_con {
  position: absolute;
  top: 0.52rem;
  right: 0.42rem;
}

.ui_mobile_classification_text {
  font-size: 0.44rem;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 0px;
}

.ui_mobile_classification_count {
  text-align: right;
  color: #ffffff;
  font-size: 0.24rem;
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
