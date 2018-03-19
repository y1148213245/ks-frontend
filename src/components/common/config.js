/**
 * Created by codingnuts on 2017/12/21.
 */
import ScanConfigs from "@common/scans/ScanConfigs";
import readProd from "@project/config/index.js";

/**
 * 1. 如果 process.env.NODE_ENV === 'production' && (typeof CONFIG.isDebug == "undefined" || !CONFIG.isDebug) 读 prod
 * 2. 如果 process.env.NODE_ENV === 'production' && typeof CONFIG.isDebug != "undefined" && CONFIG.isDebug 读 dev
 * 3. 如果 process.env.NODE_ENV != 'production' && readProd == true 读 prod
 * 3. 如果 process.env.NODE_ENV != 'production' && readProd == false 读 dev
 */
var devConfig = require.context("@project/config/dev", true, /\.js$/);
var prodConfig = require.context("@project/config/prod", true, /\.js$/)

var requireContext; //= readProd || (process.env.NODE_ENV === 'production') ?  require.context("@project/config/prod", true, /\.js$/):require.context( "@project/config/dev", true, /\.js$/);
if ((process.env.NODE_ENV === 'production' && (typeof CONFIG.isDebug == "undefined" || !CONFIG.isDebug))
	|| (process.env.NODE_ENV != 'production' && readProd)
) {
	requireContext = prodConfig
} else if ((process.env.NODE_ENV === 'production' && typeof CONFIG.isDebug != "undefined" && CONFIG.isDebug)
	|| (process.env.NODE_ENV != 'production' && !readProd)
) {
	requireContext = devConfig
} else {
	requireContext = prodConfig
}

var _configs = ScanConfigs(requireContext);

var __CONFIG = (function () {
	return Object.assign({}, _configs, typeof $_$ !== "undefined" ? $_$ : {})
})();

export default __CONFIG ;

