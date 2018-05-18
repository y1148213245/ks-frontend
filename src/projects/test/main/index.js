import Vue from 'vue';
//element ui
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '../../../../theme/index.css'

// require styles
import ScanVues from "@common/scans/ScanVues";
import store from "./store.js";
import VueBus from "vue-bus";  // 通过 cnpm install vue-bus安装

Vue.use(ElementUI);
Vue.use(VueBus);   // 在一个模块化工程中使用，必须通过Vue.use()使用vue-bus

new Vue({
	el: '#app',
	store,
	created(){
		//引入全局components
		ScanVues();
		document.getElementById("app").style["display"] = "block";
	}
});

/* $(function () {
	alert();
}); */

