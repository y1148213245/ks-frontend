/**
 * Created by codingnuts on 2018/1/4.
 */
//= require.context("../../../components", true, /\example.js/)
function ScanExamples (requireContext ) {
	var map = {};
	requireContext.keys().map(requireContext).forEach(function (item) {
		if (item.prod && item.dev && item.name) {
			map[item.name] = item;
		}
	});
	return map;
}

export default ScanExamples;

