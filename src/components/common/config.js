/**
 * Created by codingnuts on 2017/12/21.
 */
import ScanConfigs from "@common/scans/ScanConfigs";
import readProd from "@project/config/index.js";

var requireContext = readProd || (process.env.NODE_ENV === 'production') ?  require.context("@project/config/prod", true, /\.js$/):require.context( "@project/config/dev", true, /\.js$/);

var _configs = ScanConfigs(requireContext);

var CONFIG = (function () {
	return Object.assign({}, _configs, typeof $_$ !== "undefined"? $_$ : {})
})();

window.GLOBAL_PROJECT_CONFIG = CONFIG;

export default CONFIG ;
