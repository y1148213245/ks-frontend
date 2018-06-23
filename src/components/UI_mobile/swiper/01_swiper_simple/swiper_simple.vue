<!-- 简单轮播图    zongsir-->
<template>
  <div class="ui_mobile_swiper_01">
    <van-swipe class="ui_mobile_swiper_01-slides" :autoplay="3000">
      <van-swipe-item v-if="list.length>0 && index < (CONFIG.maxNum ? CONFIG.maxNum : 3)" v-for="(item,index) in list" :key="index">
        <a class="ui_mobile_swiper_01-slides-a" @click="toDetail(item)">
          <img class="ui_mobile_swiper_01-slides-img" v-if="item[listKeys.poster] && item[listKeys.poster].length > 0" :src="item[listKeys.poster][0]">
          <!--海报图-->
          <img class="ui_mobile_swiper_01-slides-img" v-else :src="item[listKeys.pic]" />
          <!--封面图-->
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'

import Vue from 'vue';
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
Vue.use(Vant)

export default {
  name: 'ui_mobile_swiper_01',
  reused: true,
  props: {
    namespace: String,
    module: String,
  },
  data () {
    return {
      CONFIG: null,
      list: [],
      listKeys: null,
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.loadList();
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].swiper.ui_mobile_swiper_01[this.module];
      this.listKeys = this.CONFIG.getList.keys;
    },
    loadList () {
      let getListConfig = this.CONFIG.getList;
      let url = getListConfig.url;
      let params = null;
      !this.CONFIG.isDevelopment ? (getListConfig.params.conditions = JSON.stringify(getListConfig.params.conditions)) : '';
      !this.CONFIG.isDevelopment ? (params = getListConfig.params) : '';
      Post(CONFIG.BASE_URL + url, params).then((resp) => {
        this.list = resp.data.result;
      })
    },
    toDetail (item) {

      let toDetailType = this.CONFIG.toDetailType;
      if (toDetailType.type == 'phone') {
        let params = '';
        for (let index = 0; index < toDetailType.phone.values.length; index++) {
          const element = toDetailType.phone.values[index];
          params += item[element] + ',';
        }
        params = params.substring(0, params.length - 1)
        eval(toDetailType.phone.functionName + '(' + params + ')')
      } else if (toDetailType.type == 'href') {
        let url = toDetailType.href.url + '?';
        for (const key in toDetailType.href.keys) {
          const element = toDetailType.href.keys[key];
          url += key + '=' + item[element] + '&';
        }
        for (const key in toDetailType.href.fixedKeys) {
          const element = toDetailType.href.fixedKeys[key];
          url += key + '=' + element + '&';
        }
        url = url.substring(0, url.length - 1)
        window.location.href = item.information_a_sourceUrl ? item.information_a_sourceUrl : url;

      }
    }
  }
}
</script>
<style>
.ui_mobile_swiper_01 {
  position: relative;
  zoom: 1;
  margin: 0;
  padding: 0;
}
.ui_mobile_swiper_01-slides-img {
  display: block;
  height: 3.19rem;
  width: 100%;
}
.ui_mobile_swiper_01-slides-a {
  position: relative;
  display: block;
  width: 100%;
  height: 3.19rem;
}
</style>
