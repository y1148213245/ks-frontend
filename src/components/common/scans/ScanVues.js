/**
 * Created by codingnuts on 2017/12/7.
 */
import Vue from 'vue';

function ScanVues (requireContext = require.context("../../../components", true, /\.vue$/)) {
	requireContext.keys().map(requireContext).forEach(function (item) {
		if (item.default.name && item.default.reused) {
			Vue.component(item.default.name, item.default);
		}
	});
}

export default ScanVues;

