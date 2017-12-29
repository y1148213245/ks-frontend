/**
 * Created by codingnuts on 2017/12/9.
 */
function ScanConfigs (requireContext) {
	var map = {};
	requireContext.keys().map(requireContext).forEach(function (item) {
		console.log(item);
		if (!item.default) return;
		map[item.default.name] = item.default
	});
	return map;
}

export default ScanConfigs;