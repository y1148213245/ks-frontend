import Vue from 'vue';
import './filter';
//element ui
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '../../../../theme/index.css'
import VueOccupy from 'vue-occupy'

// require styles
import 'swiper/dist/css/swiper.css'
import ScanVues from "@common/scans/ScanVues";
import store from "./store.js";
import VueBus from "vue-bus";  // 通过 cnpm install vue-bus安装
import VueCodemirror from 'vue-codemirror'; // vue 在线代码编辑器
import 'codemirror/lib/codemirror.css'; // 编辑器的主题样式

Vue.use(VueOccupy);
Vue.use(ElementUI);
Vue.use(VueBus);   // 在一个模块化工程中使用，必须通过Vue.use()使用vue-bus
Vue.use(VueCodemirror);

new Vue({
  el: '#app',
  store,
  created(){
    //引入全局components
    ScanVues();
    //项目目录下的components
    if(window.GLOBAL_PROJECT_VUES){
      for(var _name in window.GLOBAL_PROJECT_VUES) {
	      let item = window.GLOBAL_PROJECT_VUES[_name];
	      if (item.name && item.reused) {
		      Vue.component(item.name, item);
	      }
      }
	    window.GLOBAL_PROJECT_VUES = null;
    }
    document.getElementById("app").style["display"] = "block";
  }
});


