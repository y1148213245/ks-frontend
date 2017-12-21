import Vue from 'vue';
require('./filter');

//element ui
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-chalk/index.css'

import VueOccupy from 'vue-occupy'
//import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

import ScanVues from "@/config/ScanVues";

import store from "../store/index";


//Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(VueOccupy);
Vue.use(ElementUI);

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


