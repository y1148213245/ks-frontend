
import Vue from 'vue';

function initVueComponents () {
	Vue.component("work_videoplay_01" , () => import("@components/work/videoPlay/01_swipervideo/swipervideo.vue"));

}
export default initVueComponents;
