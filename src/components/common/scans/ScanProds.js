/**
 * Created by codingnuts on 2018/3/6.
 */
function ScanProds (requireContext = require.context("@project/config/prod", true, /\.js$/)) {
	var map = {};
	requireContext.keys().map(requireContext).forEach(function (item) {
		if (!item.default) return;
		map[item.default.name] = item.default
	});
  return map;
}

export default ScanProds;