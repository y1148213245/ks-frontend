<template>
	<div class="operationAnalysis">
		<div class="tab_box clearfloat">
			<div class="tab clearfloat">
				<span class="color color1"></span>
				<p class="tab_name big">用户访问量</p>
			</div>
			<div class="tab clearfloat">
				<span class="color color2"></span>
				<p class="tab_name">发稿量</p>
			</div>
			<div class="tab clearfloat">
				<span class="color color3"></span>
				<p class="tab_name">转发量</p>
			</div>
			<div class="tab clearfloat">
				<span class="color color4"></span>
				<p class="tab_name">评论量</p>
			</div>
			<div class="tab clearfloat">
				<span class="color color5"></span>
				<p class="tab_name">阅读量</p>
			</div>
			<div class="tab clearfloat">
				<span class="color color6"></span>
				<p class="tab_name">点赞量</p>
			</div>
		</div>
		<!--<div class="header">-->
			<!--<p class="web_name">运营分析</p>-->
		<!--</div>-->
		<div class="echarts_box clearfloat">
			<div class="chart_box fl">
				<div class="chart_dom yyfx_webDiv" id="yyfx_webDiv"></div>
			</div>
			<div class="chart_box fr">
				<div class="chart_dom yyfx_appDiv" id="yyfx_appDiv"></div>
			</div>
			<div class="chart_box fl">
				<div class="chart_dom yyfx_weiboDiv" id="yyfx_weiboDiv"></div>
			</div>
			<div class="chart_box fr">
				<div class="chart_dom yyfx_wechatDiv" id="yyfx_wechatDiv"></div>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
import $ from 'jquery'
// import echarts from 'echarts'
	import {BASE_AMUC_URL, CONFIG} from './config/config';

	var url = BASE_AMUC_URL + "news/getsourceid";
	var drawUrl = BASE_AMUC_URL + "news/newskpiTrend";

	var fontColor = '#aebeda';
	var types = ['news', 'app', 'weibo', 'wechat'];
	var colors = ['#36a8fb', '#ce6fff', '#9fd6fe'];
	var colors2 = ['#ffc466', '#ce6fff', '#9fd6fe'];
	var colors3 = ['#ce6fff', '#e1a8ff', '#02f7f0'];
	var option1 = {
		title: {
			text: '网站',
			left: 'center',
			textStyle: {
				color: '#FFF',
				fontSize: 16,
				fontWeight: 'normal'
			}
		},
		color: colors,
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			top: 70,
			left: 50,
			right:75,
			bottom: 50
		},
		xAxis: [
			{
				type: 'category',
				data: [],
				nameRotate: 30,
				boundaryGap: false,
				axisLabel: {
					textStyle: {
						color: fontColor,
					}
				},
			}
		],
		yAxis: [
			{
				name: '发稿量/转发媒体数',
				type: 'value',
				minInterval: 1,
				axisLine: {
					show: false,
				},
				axisLabel: {
					textStyle: {
						color: fontColor,
					}
				},
				nameTextStyle: {
					color: '#FFF',
				},
				splitLine: {
					show: false
				}
			},
			{
				name: '访问量',
				type: 'value',
				minInterval: 1,
				axisLine: {
					show: false,
				},
				axisLabel: {
					textStyle: {
						color: fontColor,
					}
				},
				nameTextStyle: {
					color: '#FFF',
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(36,108,193,0.8)'
					}
				}
			}
		],
		series: [
			{
				name: '用户访问量',
				type: 'line',
				yAxisIndex: 1,
				symbol: 'circle',
				symbolSize: 8,
				hoverAnimation: false,
				areaStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgba(54,168,251,0.9)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(54,168,251,0.6)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				data: [60, 39, 30, 64, 87, 47, 56]
			},
			{
				name: '发稿量',
				type: 'line',
				yAxisIndex: 0,
				symbol: 'circle',
				symbolSize: 8,
				hoverAnimation: false,
				areaStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgba(206,111,255,0.6)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(206,111,255,0.4)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				data: [30, 29, 41, 17, 30, 26, 31]
			},
			{
				name: '转发媒体数',
				type: 'line',
				yAxisIndex: 0,
				symbol: 'circle',
				symbolSize: 8,
				hoverAnimation: false,
				areaStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgba(159,214,254,0.5)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(159,214,254,0.3)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				data: [27692, 9316, 10466, 28554, 10804, 10003, 13340]
			}
		]
	};
	var option2 = {
		title: {
			text: 'APP',
			left: 'center',
			textStyle: {
				color: '#FFF',
				fontSize: 16,
				fontWeight: 'normal'
			}
		},
		color: colors,
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			top: 70,
			left: 50,
			right: 70,
			bottom: 50
		},
		xAxis: [
			{
				type: 'category',
				data: [],
				axisLine: {
					show: false,
				},
				boundaryGap: false,
				axisLabel: {
					textStyle: {
						color: fontColor,
					}
				},
			}
		],
		yAxis: [
			{
				name: '发稿量/转发媒体数',
				type: 'value',
				minInterval: 1,
				axisLine: {
					show: false,
				},
				axisLabel: {
					textStyle: {
						color: fontColor,
					}
				},
				nameTextStyle: {
					color: '#FFF',
				},
				splitLine: {
					show: false
				}
			},
			{
				name: '访问量',
				type: 'value',
				minInterval: 1,
				axisLine: {
					show: false,
				},
				axisLabel: {
					textStyle: {
						color: fontColor,
					}
				},
				nameTextStyle: {
					color: '#FFF',
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(36,108,193,0.8)'
					}
				}
			}
		],
		series: [
			{
				name: '用户访问量',
				type: 'line',
				yAxisIndex: 1,
				symbol: 'circle',
				symbolSize: 8,
				hoverAnimation: false,
				areaStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgba(54,168,251,0.9)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(54,168,251,0.6)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				data: [60, 39, 90, 64, 78, 47, 45]
			},
			{
				name: '发稿量',
				type: 'line',
				yAxisIndex: 0,
				symbol: 'circle',
				symbolSize: 8,
				hoverAnimation: false,
				areaStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgba(206,111,255,0.6)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(206,111,255,0.4)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				data: [89, 25, 19, 77, 38, 26, 16]
			},
			{
				name: '转发媒体数',
				type: 'line',
				yAxisIndex: 0,
				symbol: 'circle',
				symbolSize: 8,
				hoverAnimation: false,
				areaStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgba(159,214,254,0.5)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(159,214,254,0.3)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				data: [27692, 9316, 10466, 28554, 10804, 10003, 13340]
			}
		]
	};
	var option3 = {
		title: {
			text: '微博',
			left: 'center',
			textStyle: {
				color: '#FFF',
				fontSize: 16,
				fontWeight: 'normal'
			}
		},
		color: colors2,
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			top: 70,
			left: 35,
			right: 65,
			bottom: 50
		},
		xAxis: [
			{
				type: 'category',
				data: [],
				axisLine: {
					show: false,
				},
				boundaryGap: false,
				axisLabel: {
					textStyle: {
						color: fontColor,
					}
				},
			}
		],
		yAxis: [
			{
				name: '发稿量',
				type: 'value',
				minInterval: 1,
				axisLine: {
					show: false,
				},
				axisLabel: {
					textStyle: {
						color: fontColor,
					}
				},
				nameTextStyle: {
					color: '#FFF',
				},
				splitLine: {
					show: false
				}
			},
			{
				name: '评论量/转发量',
				type: 'value',
				minInterval: 1,
				axisLine: {
					show: false,
				},
				axisLabel: {
					textStyle: {
						color: fontColor,
					}
				},
				nameTextStyle: {
					color: '#FFF',
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(36,108,193,0.8)'
					}
				}
			}
		],
		series: [
			{
				name: '评论量',
				type: 'line',
				yAxisIndex: 1,
				symbol: 'circle',
				symbolSize: 8,
				hoverAnimation: false,
				areaStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgba(255,196,102,0.6)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(255,196,102,0.9)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				data: [17692, 19316, 8466, 21554, 18804, 9003, 18340]
			},
			{
				name: '发稿量',
				type: 'line',
				yAxisIndex: 0,
				symbol: 'circle',
				symbolSize: 8,
				hoverAnimation: false,
				areaStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgba(206,111,255,0.6)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(206,111,255,0.4)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				data: [60, 39, 30, 64, 87, 47, 56]
			},
			{
				name: '转发量',
				type: 'line',
				yAxisIndex: 1,
				symbol: 'circle',
				symbolSize: 8,
				hoverAnimation: false,
				areaStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgba(48,194,211,0.5)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(48,194,211,0.3)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				itemStyle: {
					normal: {
						opacity: 0
					}
				},
				data: [27692, 9316, 10466, 28554, 10804, 10003, 13340]
			}
		]
	};
	var option4 = {
		title: {
			text: '微信',
			left: 'center',
			textStyle: {
				color: '#FFF',
				fontSize: 16,
				fontWeight: 'normal'
			}
		},
		color: colors3,
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			top: 70,
			left: 50,
			right: 55,
			bottom: 50
		},
		xAxis: [
			{
				type: 'category',
				data: [],
				axisLine: {
					show: false,
				},
				boundaryGap: false,
				axisLabel: {
					textStyle: {
						color: fontColor,
					}
				},
			}
		],
		yAxis: [
			{
				name: '发稿量/点赞量',
				type: 'value',
				minInterval: 1,
				// max: 100,
				axisLine: {
					show: false,
				},
				axisLabel: {
					textStyle: {
						color: fontColor,
					}
				},
				nameTextStyle: {
					color: '#FFF',
				},
				splitLine: {
					show: false
				}
			},
			{
				name: '阅读量',
				type: 'value',
				minInterval: 1,
				axisLine: {
					show: false,
				},
				axisLabel: {
					textStyle: {
						color: fontColor,
					}
				},
				nameTextStyle: {
					color: '#FFF',
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(36,108,193,0.8)'
					}
				}
			}
		],
		series: [
			{
				name: '发稿量',
				type: 'line',
				yAxisIndex: 0,
				symbol: 'circle',
				symbolSize: 8,
				hoverAnimation: false,
				areaStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgba(206,111,255,0.9)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(206,111,255,0.6)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				data: []
			},
			{
				name: '阅读量',
				type: 'line',
				yAxisIndex: 1,
				symbol: 'circle',
				symbolSize: 8,
				hoverAnimation: false,
				areaStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgba(255,168,255,0.6)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(255,168,255,0.4)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				data: []
			},
			{
				name: '点赞量',
				type: 'line',
				yAxisIndex: 0,
				symbol: 'circle',
				symbolSize: 8,
				hoverAnimation: false,
				areaStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgba(0,247,240,0.5)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(0,247,240,0.3)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				data: []
			}
		]
	};

	export default {
		name: "operation_analysis",
		reused: true,
		data: function () {
			return {
				yyfxCharts: {}
			}
		},
		mounted: function () {
			this.getsourceid();
			setInterval(this.getsourceid, CONFIG.yyfxRefreshTime);
		},
		methods: {
			getsourceid: function () {
				var obj = this;

                // recsys.columnClick_event("运营分析");

				$.ajax({
					url: url,
					data: {"source": "operation"},
					type: "GET",
					dataType: "JSON",
					success: function (data) {
						if (data != '' || data.length != 0) {
							for (var i = 0; i < data.length; i++) {
								switch (i) {
									case 0:
										option1.title.text = data[i].name;
										obj.draw(option1, 'yyfx_webDiv', data[i].id, types[i]);
										break;
									case 1:
										option2.title.text = data[i].name;
										obj.draw(option2, 'yyfx_appDiv', data[i].id, types[i]);
										break;
									case 2:
										option3.title.text = data[i].name;
										obj.draw(option3, 'yyfx_weiboDiv', data[i].id, types[i]);
										break;
									case 3:
										option4.title.text = data[i].name;
										obj.draw(option4, 'yyfx_wechatDiv', data[i].id, types[i]);
										break;
									default:
										break;
								}
							}
						}
					},
					error: function () {
						console.log("error");
					}
				});
			},
			draw: function (opt, domId, sourceId, type) {
				var obj = this;
				$.ajax({
					url: drawUrl,
					data: {"sourceid": sourceId, "source": "operation"},
					type: "GET",
					dataType: "JSON",
					success: function (data) {
						if (data != '' || data.length != 0) {
							var chart = obj.getChartObject(domId);
							if (type == 'news' || type == 'app') {
								opt.xAxis[0].data = data.timestamp;
								opt.series[0].data = data.readCount;
								opt.series[1].data = (data.pressCount && data.pressCount.length != 0) ? data.pressCount : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
								opt.series[2].data = (data.forwardMediaCount && data.forwardMediaCount.length != 0 ) ? data.forwardMediaCount : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
							} else if (type == 'weibo') {
								opt.xAxis[0].data = data.timestamp;
								if (data.rebackCount && data.rebackCount.length != 0) {
									opt.series[0].data = data.rebackCount;
								} else {
									opt.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//评论量
								}
								opt.series[1].data = data.pressCount && data.pressCount.length != 0 ? data.pressCount : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//发稿量
								if (data.forwardCount && data.forwardCount.length != 0) {
									opt.series[2].data = data.forwardCount;
								} else {
									opt.series[2].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//转发量
								}
							} else {
								opt.xAxis[0].data = data.timestamp;
								opt.series[0].data = (data.pressCount && data.pressCount.length != 0) ? data.pressCount : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100];//发稿量
								opt.series[1].data = (data.visitCount && data.visitCount.length != 0) ? data.visitCount : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100000];//阅读量
								opt.series[2].data = (data.likeCount && data.likeCount.length != 0) ? data.likeCount : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000];//点赞量
							}
							chart.setOption(opt);
						}
					},
					error: function () {
						console.log("error");
					}
				});
			},
			getChartObject: function (key) {
				if (!this.yyfxCharts[key]) {
					this.yyfxCharts[key] = echarts.init($(this.$el).find("." + key)[0]);
				}
				return this.yyfxCharts[key];
			}
		}
	}
</script>
<style scoped>
	@import './css/base.css';
	@import './css/main.css';
	@import './css/operationAnalysis.css';
</style>
