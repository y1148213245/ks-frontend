/**
 * Created by codingnuts on 2017/12/7.
 */
import Vue from 'vue';

function ScanVues (requireContext = require.context("../../../components", true, /\.vue$/)) {
	var map = {};
	requireContext.keys().map(requireContext).forEach(function (item) {
		if (item.default.name && item.default.reused) {
			Vue.component(item.default.name, item.default);
			map[item.default.name] = item.default.$$template$$;
		}
	});
	return map;
}

export default ScanVues;

