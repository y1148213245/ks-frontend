<template>
  <div class="ui_mobile_swiper_02">
    <a class="ui_mobile_swiper_02_a">
      <!-- <span>{{advertList[keys.pic]}}</span> -->
      <img class="ui_mobile_swiper_01-slides-img" v-for="(item, index) in advertList" v-if="(keys.hasOwnProperty('poster') && item[keys.poster] && item[keys.poster].length > 0) || (item['pub_POSTER'] && item['pub_POSTER'].length > 0)" :src="(keys.hasOwnProperty('poster') && item[keys.poster] && item[keys.poster].length > 0 && item[keys.poster][0]) || item['pub_POSTER'][0]" :key="index" @click="toDetail(item)">
      <img class="ui_mobile_swiper_02_img" v-else :src="item && item[keys.pic]" v-for="(item, index) in advertList" :key="index" @click="toDetail(item)"/>
    </a>
  </div>
</template>

<script>
import { Post } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "ui_mobile_swiper_02",
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      advertList: [],  // 广告列表
      keys: {},
    };
  },
  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].swiper.ui_mobile_swiper_02;
    this.keys = this.CONFIG.keys;
    this.queryClassificationList();
  },

  methods: {
    queryClassificationList () {
      Post(CONFIG.BASE_URL + this.CONFIG.url, this.CONFIG.params).then(rep => {
        var datas = rep.data.result;
        if (datas && datas instanceof Array && datas.length > 0) {
          this.advertList = datas.slice(0, this.CONFIG.maxNum);
        }
      });
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
        window.location.href = url;
      }
    },
  }
}
</script>

<style>
.ui_mobile_swiper_02_a {
  display: block;
}

.ui_mobile_swiper_02_img {
  height: 2rem;
  border: none;
  width: 100%;
}
</style>

