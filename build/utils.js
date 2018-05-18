'use strict'
const path = require('path')
const config = require('../config')
const projectConfig = require('../src/config');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
// glob是webpack安装时依赖的一个第三方模块，还模块允许你使用 *等符号, 例如lib/*.js就是获取lib文件夹下的所有js后缀名的文件
var glob = require('glob');
var merge = require('webpack-merge')
// 页面模板
var HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require("fs");
const wl = require(path.resolve(__dirname, '../src/projects/' , projectConfig.concurrentProject, "main/whitelist.js" ));



exports.assetsPath = function (_path) {
	const assetsSubDirectory = process.env.NODE_ENV === 'production'
		? config.build.assetsSubDirectory
		: config.dev.assetsSubDirectory

	return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
	options = options || {}

	const cssLoader = {
		loader: 'css-loader',
		options: {
			sourceMap: options.sourceMap
		}
	}

	const postcssLoader = {
		loader: 'postcss-loader',
		options: {
			sourceMap: options.sourceMap
		}
	}

	// generate loader string to be used with extract text plugin
	function generateLoaders (loader, loaderOptions) {
		const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

		if (loader) {
			loaders.push({
				loader: loader + '-loader',
				options: Object.assign({}, loaderOptions, {
					sourceMap: options.sourceMap
				})
			})
		}

		// Extract CSS when that option is specified
		// (which is the case during production build)
		if (options.extract) {
			return ExtractTextPlugin.extract({
				use: loaders,
				fallback: 'vue-style-loader'
			})
		} else {
			return ['vue-style-loader'].concat(loaders)
		}
	}

	// https://vue-loader.vuejs.org/en/configurations/extract-css.html
	return {
		css: generateLoaders(),
		postcss: generateLoaders(),
		less: generateLoaders('less'),
		sass: generateLoaders('sass', {indentedSyntax: true}),
		scss: generateLoaders('sass'),
		stylus: generateLoaders('stylus'),
		styl: generateLoaders('stylus')
	}
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
	const output = []
	const loaders = exports.cssLoaders(options)

	for (const extension in loaders) {
		const loader = loaders[extension]
		output.push({
			test: new RegExp('\\.' + extension + '$'),
			use: loader
		})
	}

	return output
}

exports.createNotifierCallback = () => {
	const notifier = require('node-notifier')

	return (severity, errors) => {
		if (severity !== 'error') return

		const error = errors[0]
		const filename = error.file && error.file.split('!').pop()

		notifier.notify({
			title: packageConfig.name,
			message: severity + ': ' + error.name,
			subtitle: filename || '',
			icon: path.join(__dirname, 'logo.png')
		})
	}
}

// 取得相应的页面路径，因为之前的配置，所以是src文件夹下的pages文件夹
var PAGE_PATH = path.resolve(__dirname, '../src/projects/' + projectConfig.concurrentProject + '/pages')
console.log('PAGE_PATH')
console.log(PAGE_PATH)
//多页面输出配置
// 与上面的多页面入口配置相同，读取pages文件夹下的对应的html后缀文件，然后放入数组中
exports.htmlPlugin = function () {
	let entryHtml = glob.sync(PAGE_PATH + '/**/*.html');

	//*********添加组件库
	entryHtml.push(path.resolve(__dirname, '../src/projects/zjk.html'));
  //*********添加资源库
	entryHtml.push(path.resolve(__dirname, '../src/projects/zyk.html'));
	//*********添加页面管理系统
	entryHtml.push(path.resolve(__dirname, '../src/projects/pagemanagement.html'));
	//*********添加被禁用页面重定向页面
	entryHtml.push(path.resolve(__dirname, '../src/projects/disablepage.html'));
	console.log('entryHtml')
	console.log(entryHtml)
	let arr = [];
	entryHtml.forEach((filePath) => {
		let _path = 'pages/' + path.basename(filePath);

		console.info("--------", _path, "---------");
		let conf = {
			// 模板来源
			template: filePath,
			// 文件名称
			filename: _path,
			// 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
			chunks: ['manifest', 'vendor', "app"],
			chunksSortMode: 'manual',
			inject: true
		};
		if (process.env.NODE_ENV === 'production') {
			conf = merge(conf, {
				//先不做压缩，以便于今后外包出去
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true
				},
				chunksSortMode: 'manual'
			})
		}
		arr.push(new HtmlWebpackPlugin(conf))
	});
	return arr
}

exports.getDevData = function () {
	let jsons = glob.sync(COMPONENTS_PATH + '/**/data/*.json');
	var arr = [];
	for (let i in jsons) {
		arr.push({
			from: jsons[i],
			to: './devdata',
			ignore: ['.*']
		})
	}

	return arr
};


exports.createVueComponentsMap = () => {

	let componentPath = path.resolve(__dirname, '../src/components'),
		components = [],
		componentPathList = glob.sync(componentPath + '/*/*/*/*.vue'), // /ui/list_pic/01_c1/c1.vue
		_paths, key, value;

	componentPathList.map((item) => {
		_paths = item.substring(componentPath.length).split(item.indexOf(path.sep) !== -1 ? path.sep : "/");
		_paths = _paths.slice(1, _paths.length - 1);
		_paths[_paths.length - 1] = _paths[_paths.length - 1].substring(0, _paths[_paths.length - 1].indexOf("_"));
		key =_paths.join("_").toLowerCase();
		value = ("@/" + path.relative(path.resolve(__dirname, '../src'), item)).split(path.sep).join("/");

		if(!wl.whiteList.length || wl.whiteList.indexOf(key) != -1 || process.env.NODE_ENV !== 'production'){
			components.push(`\tVue.component("${key}" , () => import("${value}"));\n`);
		}
	});

	if(componentPathList.length) {
		if(components.length){
			fs.writeFileSync(path.resolve(__dirname, '../src/projects/' , projectConfig.concurrentProject , "main/SelectedComponents.js" ),
				`
import Vue from 'vue';

function initVueComponents () {
${components.join("")}
}
export default initVueComponents;
`
			)
		}
	}
};

