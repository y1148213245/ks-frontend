<template>
  <div class="work_mobile_header_01">
    <a href="javascript:void(0);" @click="toCart" class="work_mobile_header_01_cart"><i class="work_mobile_header_01_cart_i" :style="{ backgroundImage: 'url(' + bgmUrl + ')'}"></i></a>
    <a class="work_mobile_header_01_recommend " v-for="(item,index) in display" @click="goPage(item.url,item.name)" :class="{work_mobile_header_01_active:isActive===item.name}" :key=index>{{item.name}}</a>
    <a class="work_mobile_header_01_search" :href="CONFIG && CONFIG.toSearch"><i class="work_mobile_header_01_search_i" :style="{ backgroundImage: 'url(' + bgmUrl + ')'}"></i></a>
  </div>
</template>

<script>
import PROJECT_CONFIG from 'projectConfig'
export default {
  name: "work_mobile_header_01",
  reused: true,
  data: function () {
    return {
      bgmUrl: "",
      CONFIG: null,
      display: [],
      isActive: "推荐",
    }
  },
  props: {
    namespace: String
  },
  mounted: function () {
    this.bgmUrl = require('./assets/img/bg_ico.png');
    this.CONFIG = PROJECT_CONFIG[this.namespace].header.work_mobile_header_01;
    this.display = this.CONFIG.display;
  },
  methods: {
    goPage: function (url, name) {
      window.location.href = url;
      this.isActive = name
    },
    toCart(){
      let toCartType = this.CONFIG.toCartType;
      let item = {};//数据预留对象，待需求
      if (toCartType.type == 'phone') {
        let params = '';
        for (let index = 0; index < toCartType.phone.values.length; index++) {
          const element = toCartType.phone.values[index];
          params += item[element] + ',';
        }
        params = params.substring(0, params.length - 1);
        eval(toCartType.phone.functionName + '(' + params + ')')
      } else if (toCartType.type == 'href') {
        let url  = toCartType.href.url+'?';
        for (const key in toCartType.href.keys) {
            const element = toCartType.href.keys[key];
            url += key + '=' + item[element] + '&';
        }
        for (const key in toCartType.href.fixedKeys) {
            const element = toCartType.href.fixedKeys[key];
            url += key + '=' + element + '&';
        }
        url = url.substring(0,url.length-1)
        window.location.href = url;
      }
    }
  }
}
</script>

<style>
.work_mobile_header_01 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 0.36rem;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  margin: 0.1rem 0 0.1rem 0;
  margin-top: 0.2rem;
  color: #5b5b5b;
}
.work_mobile_header_01 a {
  text-decoration: none;
  color: #939393;
}
.work_mobile_header_01 a.work_mobile_header_01_active {
  padding-bottom: 0.15rem;
  border-bottom: 2px solid #c40001;
  color: #c40001;
}
.work_mobile_header_01_cart_i {
  width: 0.36rem;
  height: 0.36rem;
  /* background-image: url(./assets/img/bg_ico.png) no-repeat; */
  background-repeat: no-repeat;
  background-position: 0rem 0rem;
  display: inline-block;
  vertical-align: middle;
  -webkit-background-size: 5rem 5rem;
  -moz-background-size: 5rem 5rem;
  background-size: 5rem 5rem;
}
.work_mobile_header_01_search_i {
  width: 0.36rem;
  height: 0.36rem;
  /* background: url(./assets/img/bg_ico.png) no-repeat; */
  background-repeat: no-repeat;
  background-position: -0.48rem 0rem;
  display: inline-block;
  vertical-align: middle;
  -webkit-background-size: 5rem 5rem;
  -moz-background-size: 5rem 5rem;
  background-size: 5rem 5rem;
}
</style>
