import Vue from 'vue';
import './filter';
//element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueOccupy from 'vue-occupy'

// require styles
import 'swiper/dist/css/swiper.css'

import ScanVues from "@common/scans/ScanVues";

import store from "./store.js";


import VueBus from "vue-bus";  // 通过 cnpm install vue-bus安装

Vue.use(VueOccupy);
Vue.use(ElementUI);
Vue.use(VueBus);   // 在一个模块化工程中使用，必须通过Vue.use()使用vue-bus

new Vue({
  el: '#app',
  store,
  created(){
    //引入全局components
    ScanVues();
    //项目目录下的components
    ScanVues(require.context("../components", true, /\.vue$/));
    document.getElementById("app").style["display"] = "block";
  }
});


