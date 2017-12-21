/**
 * Created by codingnuts on 2017/12/9.
 */
const merge = require('webpack-merge');
import ScanConfigs from "@/config/ScanConfigs";
var CONFIG = {
	search: {
		Category_Search: {
			searchHrefPage: "./searchResult.html"
		}
	}
};

export default merge(ScanConfigs(require.context((process.env.NODE_ENV === 'production') ? "./prod" : "./dev", true, /\.js$/)), CONFIG, $_$ || {});

