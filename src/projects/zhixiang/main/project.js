/**
 * Created by codingnuts on 2018/3/6.
 */
function ScanVues (requireContext = require.context("../components", true, /\.vue$/)) {
	var map = {};
	requireContext.keys().map(requireContext).forEach(function (item) {
		if (item.default.name && item.default.reused) {
			map[item.default.name] = item.default;
		}
	});
	window.GLOBAL_PROJECT_VUES = map;
}

ScanVues();