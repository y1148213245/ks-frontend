/**
 * Created by codingnuts on 2017/12/21.
 */
import ScanConfigs from "@common/ScanConfigs";
import readProd from "@project/config/index.js";

const CONFIG = {
	search: {
		Category_Search: {
			searchHrefPage: "./searchResult.html"
		}
	}
};
var requireContext = readProd || (process.env.NODE_ENV === 'production') ?  require.context("@project/config/prod", true, /\.js$/):require.context( "@project/config/dev", true, /\.js$/);

export default Object.assign({}, ScanConfigs(requireContext), CONFIG, $_$ || {});
