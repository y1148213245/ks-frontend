/**
 * Created by codingnuts on 2017/12/9.
 */
function ScanStores (requireContext = require.context("../../../components", true, /\.js$/)) {
	var map = {};
	requireContext.keys().map(requireContext).forEach(function (item) {
		if (!(item.default && item.default.namespaced && item.default.name )) return;
		map[item.default.name] = item.default
	});
	return map;
}

export default ScanStores;