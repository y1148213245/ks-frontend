/**
 * Created by codingnuts on 2017/12/8.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import ScanStores from "@common/scans/ScanStores";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		...ScanStores()
	}
});
