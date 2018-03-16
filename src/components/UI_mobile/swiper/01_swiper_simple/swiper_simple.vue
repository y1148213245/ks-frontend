<!-- 简单轮播图 -->
<template>
 <div class="flexslider">
    <van-swipe class="slides" :autoplay="3000">
      <van-swipe-item v-if="list.length>0 && index<3" v-for="(item,index) in list" :key="index">
        <a @click="appbook(item[listKeys.id])">
          <img v-if="item[listKeys.poster] && item[listKeys.poster].length > 0" :src="item[listKeys.poster][0]"> <!--海报图-->
          <img v-else :src="item[listKeys.pic]" />   <!--封面图-->
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
    module:String,
  },
  data () {
    return {
      CONFIG: null,
      list:[],
      listKeys:null,
    };
  },

  computed: {},

  created () {
    this.initConfig();
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
      getListConfig.params.conditions = JSON.stringify(getListConfig.params.conditions);
      Post(url, getListConfig.params).then((resp) => {
        this.list = resp.data.result;
      })
    },
    appbook(id){
      console.log(id);
    }
  }
}
</script>
<style>

</style>
